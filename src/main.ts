// TeleGlance — Telegram glance + crypto watchlist for Even Realities G2.
// Even Hub app (Vite + TypeScript). Single text container, 576x288 canvas.
// Tap = next screen. Double-tap = exit (system dialog, mode 1 — required by QA).
//
// Data modes (honest by design, no fake "live" labels):
//   DEMO  — bundled sample digest + sample prices, clearly labeled DEMO.
//           Default. Works in the free Even Hub simulator with zero accounts.
//   LIVE  — real data when the dev URL carries ?tg=<bot-token>:
//             * Telegram: Bot API getUpdates (messages sent to YOUR bot —
//               create one free via @BotFather, no KYC). Bot API cannot see
//               a full user inbox; full-inbox glance needs MTProto/user
//               login, which is parked (Even account on IDR's phone, C19).
//             * Crypto: CoinGecko public /simple/price, no key, read-only.
//           Prices are display-only. No funds, no trades, no financial advice.
//
// Permissions needed in app.json: network whitelist for
// https://api.telegram.org and https://api.coingecko.com.

import {
  waitForEvenAppBridge,
  TextContainerProperty,
  TextContainerUpgrade,
  CreateStartUpPageContainer,
  OsEventTypeList,
} from '@evenrealities/even_hub_sdk'

const WIDTH = 576
const HEIGHT = 288

// ---------------------------------------------------------------------------
// Config: token comes ONLY from the dev URL query (?tg=...). Never committed.
// In the simulator: evenhub-simulator "http://localhost:5173/?tg=123:ABC"
// ---------------------------------------------------------------------------
const params = new URLSearchParams(window.location.search)
const TG_TOKEN = params.get('tg') || ''
const LIVE_TG = TG_TOKEN.length > 10

const COINS = [
  { id: 'bitcoin', sym: 'BTC' },
  { id: 'ethereum', sym: 'ETH' },
  { id: 'solana', sym: 'SOL' },
] as const

type TgItem = { chat: string; text: string; time: string }
type PriceMap = Record<string, number>

const DEMO_TG: TgItem[] = [
  { chat: 'Keluarga', text: 'Makan malam jam 7, jangan telat', time: '09:12' },
  { chat: 'Mission Control', text: 'G2 build lanjut, deadline 30 Nov', time: '08:47' },
  { chat: 'Crypto Alerts', text: 'BTC tembus $97k (demo)', time: '08:15' },
]
const DEMO_PRICES: PriceMap = { BTC: 97420, ETH: 3412, SOL: 214.5 }

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------
let screen = 0 // 0 glance, 1 telegram, 2 crypto, 3 help
const SCREENS = ['Glance', 'Telegram', 'Crypto', 'Help'] as const
let tgItems: TgItem[] = DEMO_TG
let prices: PriceMap = DEMO_PRICES
let tgLive = false
let pricesLive = false
let lastSync = 'belum sinkron'

function fmtUsd(n: number): string {
  return n >= 1000
    ? '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 })
    : '$' + n.toFixed(2)
}

function nowLine(): string {
  const d = new Date()
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
  return `${days[d.getDay()]} ${d.getDate()} ${d.toLocaleString('id-ID', { month: 'short' })}  ${hh}:${mm}`
}

function render(): string {
  const head = `TeleGlance  [${SCREENS[screen]} ${screen + 1}/4]  ${nowLine()}\n`
  const sep = '----------------------------------------\n'
  if (screen === 0) {
    const unread = tgItems.length
    const btc = prices['BTC'] ?? 0
    const eth = prices['ETH'] ?? 0
    return (
      head + sep +
      `Telegram: ${unread} pesan terbaru ${tgLive ? '(LIVE)' : '(DEMO)'}\n` +
      `Crypto: BTC ${fmtUsd(btc)}  ETH ${fmtUsd(eth)} ${pricesLive ? '(LIVE)' : '(DEMO)'}\n` +
      `\n` +
      `Tap: layar berikut   Dbl-tap: keluar\n` +
      `Sinkron: ${lastSync}`
    )
  }
  if (screen === 1) {
    let body = head + sep + `Telegram — pesan terbaru ${tgLive ? 'LIVE (bot)' : 'DEMO'}\n\n`
    for (const m of tgItems.slice(0, 4)) {
      const snippet = m.text.length > 44 ? m.text.slice(0, 44) + '…' : m.text
      body += `• ${m.chat} (${m.time})\n  ${snippet}\n`
    }
    if (!tgLive) body += `\nMode LIVE: buka ?tg=<token-bot>\n(bot @BotFather, gratis)`
    return body
  }
  if (screen === 2) {
    let body = head + sep + `Crypto — harga spot ${pricesLive ? 'LIVE (CoinGecko)' : 'DEMO'}\n\n`
    for (const c of COINS) {
      body += `  ${c.sym.padEnd(4)} ${fmtUsd(prices[c.sym] ?? 0)}\n`
    }
    body += `\nHarga display-only.\nBukan nasihat finansial.`
    return body
  }
  return (
    head + sep +
    `TeleGlance v0.1.0 — Even G2\n\n` +
    `1 Glance: ringkasan pesan + harga\n` +
    `2 Telegram: digest pesan terbaru\n` +
    `3 Crypto: BTC/ETH/SOL spot\n` +
    `4 Help: layar ini\n\n` +
    `Tap: ganti layar\n` +
    `Dbl-tap: keluar (konfirmasi sistem)`
  )
}

// ---------------------------------------------------------------------------
// Live fetches (best-effort; any failure keeps DEMO values + DEMO label).
// ---------------------------------------------------------------------------
async function fetchTelegram(): Promise<void> {
  if (!LIVE_TG) return
  try {
    const res = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/getUpdates?limit=10`)
    if (!res.ok) return
    const data = await res.json()
    const items: TgItem[] = []
    for (const u of (data.result ?? []).slice(-4).reverse()) {
      const msg = u.message ?? u.channel_post ?? null
      if (!msg) continue
      const chat = msg.chat?.title ?? msg.chat?.first_name ?? msg.chat?.username ?? 'Chat'
      const text = msg.text ?? msg.caption ?? '(media)'
      const t = new Date((msg.date ?? 0) * 1000)
      items.push({
        chat: String(chat),
        text: String(text),
        time: `${String(t.getHours()).padStart(2, '0')}:${String(t.getMinutes()).padStart(2, '0')}`,
      })
    }
    if (items.length > 0) {
      tgItems = items
      tgLive = true
    }
  } catch {
    // Offline / blocked: stay on DEMO values, keep DEMO label. No fake data.
  }
}

async function fetchPrices(): Promise<void> {
  try {
    const ids = COINS.map((c) => c.id).join(',')
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`,
    )
    if (!res.ok) return
    const data = await res.json()
    const next: PriceMap = {}
    for (const c of COINS) {
      if (data[c.id]?.usd) next[c.sym] = data[c.id].usd
    }
    if (Object.keys(next).length > 0) {
      prices = { ...prices, ...next }
      pricesLive = true
    }
  } catch {
    // Offline: keep DEMO prices + DEMO label.
  }
}

async function syncAll(push: (content: string) => void): Promise<void> {
  await Promise.all([fetchTelegram(), fetchPrices()])
  lastSync = `${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} ` +
    `(${tgLive || pricesLive ? 'live' : 'demo'})`
  push(render())
}

// ---------------------------------------------------------------------------
// Boot: bridge first, then the single startup container.
// ---------------------------------------------------------------------------
const bridge = await waitForEvenAppBridge()

const mainText = new TextContainerProperty({
  xPosition: 0,
  yPosition: 0,
  width: WIDTH,
  height: HEIGHT,
  borderWidth: 0,
  borderColor: 5,
  paddingLength: 4,
  containerID: 1,
  containerName: 'main',
  content: render(),
  isEventCapture: 1,
})

const result = await bridge.createStartUpPageContainer(
  new CreateStartUpPageContainer({
    containerTotalNum: 1,
    textObject: [mainText],
  }),
)
if (result !== 0) {
  console.error('createStartUpPageContainer failed:', result)
}

const push = (content: string): void => {
  bridge.textContainerUpgrade(
    new TextContainerUpgrade({ containerID: 1, containerName: 'main', content }),
  )
}

bridge.onEvenHubEvent((event) => {
  const textEvent = event.textEvent
  if (!textEvent || textEvent.containerID !== 1) return
  switch (textEvent.eventType) {
    case OsEventTypeList.CLICK_EVENT:
    case undefined: // SDK normalizes 0 to undefined in some cases
      screen = (screen + 1) % SCREENS.length
      push(render())
      break
    case OsEventTypeList.DOUBLE_CLICK_EVENT:
      // Mode 1 = system exit-confirmation dialog (required on root page).
      bridge.shutDownPageContainer(1)
      break
  }
})

// Refresh data every 60 s (best-effort; DEMO labels stay honest on failure).
void syncAll(push)
setInterval(() => void syncAll(push), 60_000)
