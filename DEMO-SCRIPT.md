# TeleGlance — Video Demo ≤3 menit (rencana rekam)

> Rekam HANYA setelah go-ahead build/uji (lihat BUILD-NOTES.md).
> Footage = simulator asli (bukan mockup). Total target ±2:30.

## Shot list

| # | Waktu | Visual (simulator 576×288) | Narasi (EN, TTS/subtitle) |
|---|---|---|---|
| 1 | 0:00–0:20 | Glance screen, jam + ringkasan | "TeleGlance puts your Telegram and crypto on Even G2 glasses — one glance, no phone." |
| 2 | 0:20–1:00 | Tap → Telegram screen, 3–4 pesan | "Tap once: your latest Telegram digest. Chat, time, snippet — nothing more, nothing to tap through." |
| 3 | 1:00–1:40 | Tap → Crypto screen, BTC/ETH/SOL | "Tap again: live spot prices from CoinGecko. Display-only — no funds, no trades, no advice." |
| 4 | 1:40–2:10 | Tap → Help, lalu double-tap → dialog exit sistem | "Tap cycles screens. Double-tap exits with the system dialog, exactly as Even Hub QA requires." |
| 5 | 2:10–2:30 | Kembali ke Glance; overlay: repo + deadline | "Free simulator build. Repo in the description. TeleGlance — glance, don't scroll." |

## Cara rekam (setelah go-ahead)

1. `npm run dev` + `evenhub-simulator http://localhost:5173` (mode DEMO —
   label DEMO terlihat di layar, jujur di video).
2. Rekam layar simulator (OBS / ffmpeg x11grab) 576×288 atau lebih.
3. Ulangi sekali dengan `?tg=<token-bot>` untuk cuplikan LIVE Telegram
   (10–15 detik, sisipkan di segmen 2; token JANGAN terlihat di video).
4. Rakit ≤3:00, upload ke YouTube (akun IDR) sebagai Public/Unlisted,
   tautkan di form DoraHacks.

## Yang TIDAK boleh ada di video

- Harga/pesan yang diklaim LIVE padahal DEMO (label di layar harus terbaca).
- Token bot, nomor telepon, atau data pribadi apa pun.
- Klaim "inbox penuh" — Bot API hanya melihat pesan ke bot sendiri.
