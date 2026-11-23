# TeleGlance — Paket Submit DoraHacks (Even Realities G2)

> Status 23 Nov 2026 ~09:55 WIB: paket source SIAP. Submit BELUM dilakukan
> (butuh build + video dulu — keduanya tertahan execution-risk flag, lihat
> BUILD-NOTES.md). Jangan klaim sudah submit sebelum langkah di bawah
> benar-benar dieksekusi.

## Fakta hackathon (terverifikasi lane r1, 23 Nov 2026)

- Event: Even Realities G2 Hackathon, DoraHacks — $10.000 USDT, 10 pemenang
  (Grand $2.000, 1st/track $1.250, 2nd $375, Best Telegram $1.000,
  Community Partner s.d. $500) + s.d. 10 pasang G2 refurbished.
- **Deadline submit: 30 Nov 2026 02:59 WIB** (29 Nov 19:59 UTC).
- Demo Day 3 Des 2026, Dubai, remote tersedia. Cash USDT ≤7 hari setelah Demo Day.
- Syarat: repo publik GitHub/GitLab + README, video demo ≤3 mnt (simulator
  atau G2), deskripsi singkat, maks 5 feature request. Tim 1–4, worldwide.
  Demos testnet/paper/read-only; dilarang pegang dana user & nasihat finansial.
- Submit: HANYA via web DoraHacks (tidak ada API/CLI submit yang ditemukan).
  URL: https://dorahacks.io/hackathon/even-realities/detail

## Checklist submit

- [x] Source app (`src/main.ts`) + manifest (`app.json`) + README
- [x] Rencana video demo ≤3 mnt (`DEMO-SCRIPT.md`)
- [x] Build lolos: `npm run build` + `vite build` — LOLOS 23 Nov 10:09 WIB
      (`tsc` bersih, dist 81,17 kB). `evenhub pack` tidak dijalankan
      (bukan bagian pipeline yang diminta; packer opsional bila diperlukan).
- [ ] Uji simulator: 4 layar + tap/double-tap + refresh 60 dtk —
      **TERBLOKIR** execution-risk check baru pada install simulator
      0.9.5 (23 Nov 10:10 WIB); tidak dijalankan, tidak di-bypass.
      Go-ahead IDR 10:05 WIB dikutip di laporan lane G2-Exec.
- [ ] Video demo direkam dari simulator asli, upload YouTube IDR —
      **TERTAHAN** (butuh simulator jalan dulu).
- [ ] Repo publik `github.com/backburner036-prog/teleglance` diisi (saat ini
      repo hanya berisi README 1 baris — push source dari folder ini)
- [ ] Daftar + submit di halaman DoraHacks (via browser — lane ini tidak
      bisa; serahkan ke koordinator/IDR)
- [ ] Deskripsi submit (draf): "TeleGlance — Telegram digest + crypto
      watchlist for Even G2. One glance: latest Telegram messages and
      BTC/ETH/SOL spot prices on a 576×288 canvas. Tap cycles screens,
      double-tap exits. Demo mode needs zero accounts; live mode uses your
      own Telegram bot (Bot API) + public CoinGecko prices. Read-only,
      no funds, no financial advice."

## Langkah submit persis (untuk koordinator/IDR — via browser)

1. Buka https://dorahacks.io/hackathon/even-realities/detail, login DoraHacks
   (akun IDR; bila belum ada, daftar gratis — email saja).
2. Klik Register/Submit Project → isi: nama "TeleGlance", track
   Messaging (+ tandai Best Telegram Integration), deskripsi draf di atas.
3. Tempel: URL repo GitHub publik + URL video YouTube ≤3 mnt.
4. Kirim SEBELUM 30 Nov 2026 02:59 WIB. Simpan screenshot halaman
   konfirmasi + submission ID ke `SUBMISSION.md` ini.

## FLAG — bukan blocker build, tapi keputusan IDR bila menang

- **KYC di payout:** T&C hackathon DoraHacks mencadangkan "Prize
  distribution is subject to KYC/AML review and sponsor approval where
  applicable." IDR 23 Nov 09:47 WIB membuka kembali kategori ini untuk
  keenam target termasuk G2. Bila menang dan payout menuntut dokumen
  identitas, keputusan milik IDR; lane TIDAK PERNAH mengisi/mengirim
  dokumen identitas atau form pajak.
- **Akun Even Realities di HP IDR (C19):** masih parkir — tidak disentuh
  lane ini. Dampak: uji kacamata fisik tidak bisa; simulator cukup
  untuk build + submit + video. Full-inbox Telegram (MTProto) juga
  parkir karenanya — app memakai Bot API + mode DEMO.
- **Lisensi kontribusi DoraHacks ToS 2023:** peserta memberi lisensi luas
  atas Contributions (termasuk hak sell/resell). Bila IDR mau, minta
  klarifikasi sebelum submit — bukan blocker.
