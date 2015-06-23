var AGIServer = require('ding-dong');

var handler = function (context) {
    context.onEvent('variables')
        .then(function (vars) {
            return context.answer();
         })
        .then(function () {
            return context.streamFile('beep');
        })
        .then(function (result) {
            return context.setVariable('DIALPLAN_VARIABLE', 'helloWorld');
        }) 
        .then(function (result) {       
            return context.end();
        });
};

var agi = new AGIServer(handler, {debug: true});
agi.start(3000);