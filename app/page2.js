var frameModule = require('ui/frame');

function goBack(){
    frameModule.topmost().goBack();
}

exports.goBack = goBack;