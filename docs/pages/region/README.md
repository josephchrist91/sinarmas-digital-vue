# REGIONAL COLLECTION 
> Automization of currently manual reconciliation process.
> Data to be reconciled is every transactions happened in gallery, either physical (handsets, sim-card, etc) or non-physical (voucher, billing, etc) items.
> Reconciliation will be done between multiple sources (Field report, Zsmart, Bank, SAP) to check for anomalies and frauds.

::: tip Current State
---
Finalizing BRD together with user, target complete February W1.
:::

## Related Documents
> BRD : [Google Docs](https://docs.google.com/document/d/11iHWwTe5azqIDuFpNl7qNWsLF2VSXBE3P5CXV5jzH_s/edit?usp=sharing).

## Milestones
- 2020/01/30 : Detailed daily task survey with region collection end user
- 2020/01/29 : Discussion for high-level features
- 2020/01/28 : Kick-off project Automation for Regional Finance Collection

---------------

## Overview and Background
Painpoints :
- Already cut some manpower but workload still the same (MyRep migration)
- Manual posting to SAP
- Manual reconciliation process
- 

Benefit :
- Reduce fraud
- Balanced report between Zsmart, SAP, and received payment
- 

## Dependencies

## Stakeholder
- Business owner : Steve, Dian, Afit (RFC)
- Subject expert : Dede (Jabo)
- End users : Regional collection, gallery pic, auditor
- 

## Business Requirements
### Compared Items :
- Cash (setoran tunai)
- Credit card
- Debit card
- OVO

### Source data :
- Cognos-DWH, amount is full as transacted (receive from email)
- Merchant bank statement (report bank), has transaction date, gross, disc, and nett amount on it (receive from email)
- Rekening koran, nett amount transfered to SF account (receive from opening bank website)
- SAP for SO (sales transaction only)

Templates needed?


### Features
- Post to SAP on every received transfer?? 3 rows : incoming, fee, AR
- Comparison :
 - Total

### List of things need to be clarified
- (Cognos vs SO) vs (Merchant bank statement vs rekening koran) -- receival dates?
- Current flow for cash transaction / compare
- Merchant bank statement arrival time = rekening koran
- Rekening koran = Post to SAP regardless of any imbalanced amount?
- What to do on selisih?
- What to compare? 
- Why is this not included in S&D?


recon manual

SAP klop dulu, per line di rekening koran (except OVO -- post per region)
OVO kelebihan bayar post sap??

semua selisih stop, human continue, except mat code (lupa input matcode)

Compare failure?
- selisih 

SO gagal interface from zsmart (diff quantity) POSTO intergall

Cognos compare with SAP (SO), selisih = gagal interface
Adjustment = post SAP (tomorrow should be balanced)

### PR longkap
4+1 source for compare :
- Script Julian
- cognos : deposit to bill
- it-bss
- finance
- Email missing PR cognos -> send to gallery to check

### Info & files needed :
- List of bank
- Example Cognos file (DONE)
- Example SO file
- Example Merchant bank statement -- ALL BANK
- Example hasil compare?


### Proposed system :
- Upload cognos file (automatic via dwh files? upload system? FOLLOW ATM?)
- Upload Merchant bank statement (automatic read email? upload system?)
- Upload Rekening koran (upload pdf like autodebet? manual input?)
- Upload SAP SO file (file read from ftp?)

flag mat code
ovo group gallery
mapping cost center
mapping plant sloc


- Painpoints
- Benefits


### Notes

cash trf to 1 rek, gallery trf with keterangan SLOC + ....
bank, rekening, time

Transaction type in cognos :
- billing
- deposit
- sales (sale/purchase & sales voucher/e-voucher & after sales)

Compare total / detail?

Row gabung/pisah?

Compare highlevel = total


alert :
pelimpahan
H+1 daily recon
H+4 out of sla

cash :
setoran input ke app
approval region fin (3 setoran) :
cognos > input system setor > approval region > alert if not match time


## Key Assumption and Constraint

## Glossary of Terms

## Appendixes
### As is flow
[Google Drawing - As Is Flow](https://docs.google.com/drawings/d/1OvVcanNJ--W6EPPAGYSlYPLat-yVQeeWUP8oyOes6og/edit?usp=sharing)

### Proposed flow
[Google Drawing - Proposed Flow](https://docs.google.com/drawings/d/1YQ130jHoML-L6rjWOrBx7KzbEE6H9VDpXb_JzeOnbFY/edit?usp=sharing)


## Minutes of Meeting  
<br>
<details>
<summary>2020/01/30</summary>

- Trx 28, masuk di rek koran 29 (pending), bisa ditarik tgl 30 (non-pending).
- Cognos : filter jabo gallery only from gallery name / code
- Perlu ada mapping cost center, CMD, gallery name, code
- Anomali PR longkap bisa karena pindah gallery (diff row), atau longkap
- 1 PR bisa multiple items > multiple row in cognos
- slip eod transaction / bukti setor dikirim softcopy
- batas transfer jam 10/11 pagi next day
- karena trf ke 1 rek, ditandai dari description (sloc gallery)
- tarik rekening koran format excel / csv, no pdf
- 1 rekening digunakan oleh semua region, kadang susah buka karena session active
- Cash setor ke sinarmas / bca >> BCA berita kena biaya, identify gallery from kode wilayah (diketahui dari slip setoran)
- CMD = 1 gallery
- List CMD will be mapped (CMD - gallery name / code)
- SO jadinya H+1 pagi (ambil yang kodenya RV), sales only (fisik 1 SO & voucher 1 SO)
- Selisih Cognos vs SO biasanya rounding karena taxation di SAP
- Toleransi selisih rounding need to confirm with pak Afit (infonya berdasarkan harga termurah yang dijual)
- Compare QTY by FGcode (cognos), vs SAP (moving type barang keluar only)
- zsdflow per tgl trx, file will be sent from SAP (yang GI kosong = belum potong stock)
- penomoran mutasi running number untuk mempermudahkan cek incoming (antisipasi ada amount yang sama)
- bank send detail trx (report bank) via email (excel/csv)
- in detail use PAID status only, there will be gross, bank charge, and nett.
- Identification for debet/kredit card payment in rekening koran = MID di detail report bank / CMD??
- mandiri RB split into 2, atas detail, bawah summary
- RB can contain trf for different trx date
- Kredit mandiri ada 2 edc (yoke & merchant mandiri) kedepannya akan pakai yang yoke saja.
- Kredit yang uangnya belum masuk (H+2), bisa ceknya di struk fisik
- Contoh case selisih : BCA (trf kurang 300rb), Mandiri (trf/struk lebih 300rb) = gallery PIC salah input CMD di Zsmart
- OVO trf 1 record = total all gallery
- OVO incoming = cash, point, paylater
- OVO fee = cash, point, paylater
- CASHBAC H+2 pelimpahan, report detail != pelimpahan
- report cashback & ovo setiap hari
- selisih kelipatan 11 rupiah = matcode / usim belum diinput ke mapping
- tampilan report = kertas kerja gabungan
- kalau udah klop, uang yang sudah masuk bisa diincoming??
- ada automation report uang masuk setiap hari - read file from ftp
- company code selalu DSJ (8500) untuk gallery trx
- baris untuk interface SAP : 1-Incoming, 2-Bank Charge, 3-Rounding, 4-AR1, 5-AR2, etc
- TExt utk interface SAP hrs diisi, utk mempermudah report wbr
- SAP posted = no doc
- Incorrect sap input can't be edited, should be reversed first and reinput again
- OVO in SAP can have a lot of rows, since 1 report can have multiple AR, multiple MDR also
- need MDR validation between user mapping vs bank report
- if SO interface (Zsmart-SAP) failed, at the same day someone will upload for correction


Participant : 
-	Dede (Finance RBO Jabodetabek)
-	Afit (Regional Finance Controller)
-	Joseph (Sinarmas Digital)

Notes :
1.	Transaksi di tanggal 28 (contoh) akan muncul di rekening koran pada tanggal 29 tapi masih pending, baru bisa ditarik pada tanggal 30.
2.	Pada file cognos, filter gallery Jabodetabek dilakukan pada kolom gallery name / code
3.	Perlu ada mapping gallery name, code, costcenter, CMD
4.	Anomali PR longkap bisa disebabkan karena kesalahan system, transaksi billing to deposit, atau ada perpindahan gallery pada report.
5.	1 PR bisa terdapat pada multiple row di report cognos (1 transaksi multiple item)
6.	Slip transaksi atau bukti setor dikirim dalam bentuk softcopy maksimal H+1
7.	Batas transfer uang tunai maksimal jam 10/11 H+1
8.	Karena semua gallery setor ke 1 rekening bersama, maka ada di-note SLOC gallery pada description setoran.
9.	Penarikan rekening koran berupa format CSV dan Excel dengan data berbentuk table, tidak ada yang menggunakan PDF / HTML
10.	Setoran tunai dilakukan antara di bank BCA atau sinarmas (untuk BCA, karena input description kena biaya, maka identifikasi gallery berdasarkan kode wilayah)
11.	1 CMD = 1 Gallery
12.	List CMD akan dimapping pada aplikasi (CMD, gallery name, gallery code)
13.	SO terbentuk H+1 di SAP (aplikasi hanya akan mengambil record yang tipe RV), untuk penjualan/sales saja (penjualan fisik 1 SO, penjualan voucher 1 SO)
14.	Jika ada selisih pada hasil compare cognos vs SO itu disebabkan karena taxation di SAP
15.	Toleransi selisih rounding perlu konfirmasi dari pak Afit, ada info ditentukan berdasarkan harga termurah dari barang yang dijual.
16.	Ada proses compare Quantity untuk setiap FGCode di Cognos, dibandingkan dengan detail SO SAP (untuk moving type barang keluar)
17.	Data dari SAP yang digunakan untuk compare Quantity (zsdflow) akan dikirimkan dari SAP dalam bentuk file.
18.	Mutasi diberikan penomoran untuk memudahkan cek incoming (antisipasi jika ada amount yang sama persis)
19.	Bank mengirimkan detail transaksi (merchant bank report) via email dalam format excel/csv
20.	Pada report yang dikirim bank, system hanya baca record yang berstatus “PAID”
21.	Semua report bank ada mengandung info amount gross, bank charge, dan nett.
22.	Identifikasi untuk pelimpahan kartu debit atau kredit di rekening koran berdasarkan MID
23.	Report bank mandiri terbagi 2, yaitu untuk info detail dan summary
24.	Report bank bisa mengandung transaksi dari tanggal yang berbeda
25.	Pelimpahan kartu kredit mandiri ada 2 jenis (ada 2 EDC), yaitu yokke dan merchant mandiri, namun kedepannya akan digunakan yang yokke saja
26.	Pembayaran via kartu kredit yang uangnya belum dilimpahkan, bisa compare melalui struk fisik (softcopy)
27.	Salah satu case selisih yaitu pelimpahan BCA kurang 300rb, pelimpahan mandiri lebih 300rb, itu berarti PIC gallery salah input CMD di Zsmart
28.	Pelimpahan OVO dari semua gallery pada satu tanggal digabung jadi 1 transaksi di rekening koran
29.	Total pembayaran dan fee OVO bisa dijumlahkan dari cash, point, dan paylater
30.	Untuk pelimpahan Cashbac biasanya H+2
31.	Untuk OVO dan Cashbac reportnya sudah bisa ditarik sebelum uangnya dilimpahkan
32.	Jika ada selisih kelipatan 11 rupiah itu dikarenakan ada matcode/usim yang belum diinput kemapping untuk exclude dari fungsi compare
33.	Tampilan report kurang lebih sama dengan kertas kerja manual
34.	Incoming / posting journal ke SAP untuk setiap account (eg. BCA debet, Mandiri credit, etc) yang sudah klop dan sudah masuk pelimpahannya
35.	Ada automation report uang masuk setiap hari, sistem baca file yang ditaruh pada ftp
36.	Company code untuk posting SAP selalu 8500 (DSJ) karena hanya untuk transaksi gallery
37.	Baris untuk interface SAP terdiri dari : Incoming, Bank Charge, Rounding, AR1, AR2, etc
38.	Text untuk interface SAP harus diisi, untuk mempermudah report WBR
39.	Jika SAP berhasil posting akan muncul document number, yang bisa digunakan untuk cek hasilnya
40.	Untuk kesalahan input pada SAP tidak bisa direvisi langsung, harus direverse terlebih dahulu baru diinput ulang
41.	Untuk OVO setiap posting di SAP bisa mengandung banyak row, karena pada 1 pelimpahan mengandung banyak transaksi yang berbeda beda feenya
42.	Perlu ada validasi MDR (bank charge) antara system dengan report bank
43.	Jika interface SO (Zsmart-SAP) gagal, pada hari yang sama akan ada orang yang upload koreksinya


</details>
