# TeleGlance — Even Realities G2 Hackathon (DoraHacks)

**Telegram glance + crypto watchlist for Even G2 smart glasses.**
Tap to cycle screens, double-tap to exit. Built with the free Even Hub
simulator — no glasses needed.

- **Track:** Messaging (primary) + Best Telegram Integration ($1,000)
- **Prize pool:** $10,000 USDT · **Submit deadline: 30 Nov 2026 02:59 WIB**
- **Status:** v0.1.0 pushed to GitHub (commit `6b22cd1`, 23 Nov 10:39 WIB) —
  build LOLOS (`tsc && vite build` bersih); **simulator test LOLOS**
  23 Nov 10:35 WIB (sim 0.9.5, 4 layar + tap/double-tap + refresh 60 dtk,
  0 error console); **video demo SELESAI** 23 Nov 10:39 WIB
  (`video/teleglance-demo.mp4`, 2:32, footage simulator asli + subtitle;
  upload YouTube tersisa — langkah BOT utama). Submit DoraHacks BELUM
  (butuh URL video YouTube dulu). Lihat `BUILD-NOTES.md` + `SUBMISSION.md`.

## Screens (576×288, one text container)

1. **Glance** — time/date, Telegram count, BTC/ETH spot
2. **Telegram** — latest-message digest (up to 4, with chat + time)
3. **Crypto** — BTC / ETH / SOL spot prices (display-only)
4. **Help** — what each screen does

Tap = next screen. Double-tap = exit (calls `shutDownPageContainer(1)`,
mode 1, as required by Even Hub QA). Note: in the simulator the display
goes blank on exit — no system dialog is rendered there; on real glasses
mode 1 shows the system exit-confirmation dialog.

## Data modes — honest by design

| Mode | Telegram | Crypto |
|---|---|---|
| **DEMO** (default, zero accounts) | Bundled sample digest, labeled DEMO | Bundled sample prices, labeled DEMO |
| **LIVE** (`?tg=<bot-token>`) | Telegram Bot API `getUpdates` — messages sent to **your own bot** (free via @BotFather) | CoinGecko public `/simple/price`, no key |

Rules the app follows (hackathon rules): demos are read-only;
no user funds are touched; prices are display-only, never financial advice;
a failed fetch keeps the DEMO label — live data is never faked.

**Known limitation (stated openly):** the Telegram Bot API only sees
messages sent to your bot, not a full user inbox. A full-inbox glance
needs a Telegram user client (MTProto + phone login) — that path is parked
until the Even Realities account on IDR's phone is available (C19).
Workaround for users today: add your TeleGlance bot to the chats you want
glanced, or forward important messages to it.

## Run in the simulator

```bash
npm run dev                                   # terminal 1: Vite dev server
evenhub-simulator http://localhost:5173       # terminal 2: DEMO mode
evenhub-simulator "http://localhost:5173/?tg=123:ABC"  # LIVE Telegram mode
```

The bot token lives only in the dev URL. **Never commit a token.**

## Tech

Vite + TypeScript, `@evenrealities/even_hub_sdk` 0.0.16, manifest
`app.json` (`edition 202601`, network whitelist: `api.telegram.org`,
`api.coingecko.com`). One `TextContainer`, `textContainerUpgrade` for
flicker-free updates, 60 s background refresh.

## Repo layout (this submission)

- `src/main.ts` — the whole app
- `app.json` — Even Hub manifest
- `DEMO-SCRIPT.md` — ≤3 min video demo plan
- `SUBMISSION.md` — submit checklist + exact DoraHacks steps
- `BUILD-NOTES.md` — what is done, what is blocked, exact commands
