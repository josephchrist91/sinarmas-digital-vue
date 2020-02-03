## 2020/02/03

::: tip Updates
---
Darmawan :
- Delayed mySF release due to netcore & appsflyer issue for sending MDN data to third-party in the cloud. We are planning to hash the email and MDN first before sending to third-party.
- Need to make T&C to inform that we are going to use their data to improve the app

Joseph :
- Engagement app still waiting for user to finalize the user scenario, last week they are busy with other things, so they will finish it on this week.
- New request from finance : region collection reconciliation, to make sure every transaction in gallery (zsmart) reported correctly to finance (collection) and accounting (SAP)
 - need to reconfirm to user why is this not included in S&D?

Jeffrey :
- BCA VA requirement is making progress, working on user interaction, and inbox capability
- Standardizing business requirement process

Halga :
- Ongoing HLD review, from total 10 HLD : 
    - 2 already printed ongoing for sign-off, 
    - 6 already discussed but will be revised by vendor, to signed off this week, 
    - 2 will be reviewed this week
- Need to allocate server resource for S&D production since BSS is also looking for resource.
- Finalizing architecture with Jegadeesh so we can quickly allocate the resource

Pramod : 
- mySF iOS version has been released
- There is flow change on Powerserve
- Received scratch and win BRD

Sooraj :
- Need to contact someone to get Windmill repo access for Setyo

Sulis :
- Jakies done development api for hooq, cannot connect from inside server to outside network, will be helped by Tony

Dicky :
- Ask for production key for jakies

Martino :
- Only Hooq UAT is not done due to production key
- MySF transfer knowledge, Ken, Bijak & Gilang learning from Ferdinand, next enhancement for the app better give the task to bijak / ken with ferdinand as backup
- Transformation from Azure to Gitlab

David :
- working on windmill test issues, some already closed

Eka :
- SSL waiting for pak Satriyo approval to force update today for ios and android
- CI/CD knowledge sharing

Ken :
- Transfer knowledge from Ferdinand for API gateway and backend
- Jakies handle changes from Hooq, do provisioning for hooq

Bijak :
- Transfer knowledge for mySF 

Gilang :
- Working on OCR hyperverge, ios need to use OCR due to esim, but it is not working in iOS on any scenario

Maria :
- Sounak ask for some research, will send the result

Setyo :
- Working on getting the repository access

Antony :
- VPN S&D 6d ok, 
- Ask for internet access to install things on server
- Ask access for Ken & Bijak for mySF repo
- Devops should be involved from beginning

Aneesh :
- Hyperverge enabled their Alibaba cloud, we must get confirmation not to send any information out of Indonesia
- Make sure where the image processing happens, should be in the cloud in indonesia (alicloud)
:::

## 2020/01/27
::: tip Updates
---
Darmawan (Coordinator): 
- Event tracking almost released but management decided to release it together with upcoming version
- Discussing process flow from BRD, requirement gathering, until development, etc

Pramod : 
- 30th app release is waiting for user confirmation

Sulis : 
- Building API for HOOQ interface
- (++ Halga) S&D users and 6D is still reviewing HLD, now they do paralel review sessions to make sure the project can be signed off at the end of the month. Today Halga & Setyo with some from 6D go to BSD to finish the integration requirements.

David :
- Working on windmill testing, 33 issues need to be retested
- Test automation has been created and working, need to create more scripts

Windmill is developed by Diksha (Vendor), iOS frontend by Maria, Android frontend by Setyo, web portal by Sooraj.

Martino : 
- Jakarta Talkies' issues has been solved, only waiting for HOOQ integration now.
- Pak Aneesh asked to do POC for OCR, it is done and trying to integrate with mySF project handled by Gilang

Tony :
- Working on local repository
- Consulting with IT Security (Arasi) regarding payment gateway from VAS which is still using staging server

Budi : 
- Working on handover for MySF from Hyperjump, currently still struggling with the office intranet restriction issue.

Preetham : 
- Working on B2B enterprise project together with Bangalore team

Jeff : 
- Discussed with digital business team about BCA VA and powersurf for MySF

Joseph :
- Discussed with Engagement app users, they are now finalizing the user scenarios, so we can start estimating the effort, headcount, and budget needed.
:::

## 2020/01/20
::: tip Updates
---
Coordinator : Aneesh
- Darmawan : Ongoing event tracking for mySF, pak Aneesh asks to demonstrate Netcore on next meeting
- Joseph : S&D still reviewing HLD, done for Hierarchy, ongoing with Inventory, Product Catalogue, and KMS. Engagement app still under discussion, business user wanted to prioritize recognition system.
- SMD will not take S&D project for Project Management, only on business requirement role
- Aneesh : MySF has SSL issue, 6.0.5 can't login if not update, should have force update
- Powerserve requirement incoming, engineer should inform pak Wawan & Pramod if there is any new info
- Dicky : Jakarta Talkies auto renewal will be implemented, will be tested by CE , still have problem with HOOQ
- Jeffrey : already got jira project admin, pak Aneesh have confluence admin
- Sooraj : windmill repository waiting access
- Martino : UAT for auto renewal, BU will negotiate with HOOQ, already have jira but not use it frequently since ken no access
- Maria : IOT app
- Fares : helping with S&D, building templates, scattered information, building portfolio Sinarmas Digital. We need to build own profile with name : problem + solutions
- Bijak : WOW project, aggregator jakies, & gamification
- Eka : disable auto-renew
- Tony : provided access bangalore team for servers, s&d security discussion
- Gilang : mysf OCR
- David : testing project ... 
- Aneesh : need ocr to be done from gilang, bijak, and dicky, security issue (martino, bijak, ken)
- Halga : S&D techplan update
:::
