# ding-dong-sample

ding-dong sample app

more info: https://github.com/antirek/ding-dong


## Start app

> git clone https://github.com/antirek/ding-dong-sample.git

> cd ding-dong-sample

> npm install

> node app.js


## Confgure asterisk

extensions.conf


`````
[default]   //your context
exten => 1000,1,AGI(agi://localhost:3000)
exten => 1000,n,Verbose(DIALPLAN_VARIABLE)
`````

and call to 1000