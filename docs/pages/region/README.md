# REGIONAL COLLECTION 


::: tip Current State
---
Planned to survey detailed daily tasks from end users that are going to be automated
:::

## Milestones
- 2020/01/29 : Discussion for high-level features
- 2020/01/28 : Kick-off project Automation for Regional Finance Collection

### List of things need to be clarified
- (Cognos vs SO) vs (Merchant bank statement vs rekening koran) -- receival dates?
- Current flow for cash transaction / compare
- Merchant bank statement arrival time = rekening koran
- Rekening koran = Post to SAP regardless of any imbalanced amount?
- What to do on selisih?
- What to compare? 

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
- 
- Script Julian
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


---------------
Painpoints :
- Already cut some manpower but workload still the same (11 jadi 5)
- 
- 

Benefit :
- Reduce fraud
- Balanced report between Zsmart, SAP, and received payment
- 

Stakeholder :
- Business owner : Dian, Afit (RFC)
- Subject expert : Dede (Jabo)
- End users : Regional collection, gallery pic, auditor
- 

### As is flow
[Google Drawing - As Is Flow](https://docs.google.com/drawings/d/1OvVcanNJ--W6EPPAGYSlYPLat-yVQeeWUP8oyOes6og/edit?usp=sharing)

### Proposed flow
[Google Drawing - Proposed Flow](https://docs.google.com/drawings/d/1YQ130jHoML-L6rjWOrBx7KzbEE6H9VDpXb_JzeOnbFY/edit?usp=sharing)

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

### List of fee :
- BCA : (off/on = mdr)
- Mandiri :
- ....

### Features
- Post to SAP on every received transfer?? 3 rows : incoming, fee, AR
- Comparison :
 - Total

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
