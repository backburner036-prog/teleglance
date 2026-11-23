# TeleGlance — Video Demo ≤3 menit (rencana rekam)

> Rekam HANYA setelah go-ahead build/uji (lihat BUILD-NOTES.md).
> Footage = simulator asli (bukan mockup). Total target ±2:30.

## Shot list

| # | Waktu | Visual (simulator 576×288) | Narasi (EN, TTS/subtitle) |
|---|---|---|---|
| 1 | 0:00–0:20 | Glance screen, jam + ringkasan | "TeleGlance puts your Telegram and crypto on Even G2 glasses — one glance, no phone." |
| 2 | 0:20–1:00 | Tap → Telegram screen, 3–4 pesan | "Tap once: your latest Telegram digest. Chat, time, snippet — nothing more, nothing to tap through." |
| 3 | 1:00–1:40 | Tap → Crypto screen, BTC/ETH/SOL | "Tap again: live spot prices from CoinGecko. Display-only — no funds, no trades, no advice." |
| 4 | 1:40–2:10 | Tap → Help, lalu double-tap → layar blank (app keluar) | "Tap cycles screens. Double-tap exits the app." |
| 5 | 2:10–2:30 | End card: repo + deadline | "Free simulator build. Repo in the description. TeleGlance — glance, don't scroll." |

> Koreksi 23 Nov 10:35 WIB: narasi shot 4 lama ("exits with the system
> dialog") SALAH untuk simulator — `shutDownPageContainer(1)` di simulator
> 0.9.5 langsung mengosongkan layar, TIDAK menampilkan dialog sistem.
> Narasi video final sudah memakai kalimat yang benar. Panggilan API mode 1
> tetap sesuai syarat QA Even Hub; dialog sistem hanya muncul di kacamata
> fisik (belum teruji — akun Even di HP IDR masih parkir, C19).

## Cara rekam (setelah go-ahead)

1. `npm run dev` + `evenhub-simulator http://localhost:5173` (mode DEMO —
   label DEMO terlihat di layar, jujur di video).
2. Rekam layar simulator (OBS / ffmpeg x11grab) 576×288 atau lebih.
3. Ulangi sekali dengan `?tg=<token-bot>` untuk cuplikan LIVE Telegram
   (10–15 detik, sisipkan di segmen 2; token JANGAN terlihat di video).
   **BELUM DILAKUKAN 23 Nov 10:39 WIB — butuh token bot Telegram dari IDR**
   (buat via @BotFather di HP IDR, gratis); video final memakai mode DEMO
   (label DEMO terbaca jujur di layar) + harga crypto LIVE CoinGecko.
4. Rakit ≤3:00, upload ke YouTube (akun IDR) sebagai Public/Unlisted,
   tautkan di form DoraHacks.

## Yang TIDAK boleh ada di video

- Harga/pesan yang diklaim LIVE padahal DEMO (label di layar harus terbaca).
- Token bot, nomor telepon, atau data pribadi apa pun.
- Klaim "inbox penuh" — Bot API hanya melihat pesan ke bot sendiri.
