var Observable = require("data/observable").Observable;
var frameModule = require('ui/frame');

function createViewModel() {
    var viewModel = new Observable();

    viewModel.onTap = function () {
        frameModule.topmost().navigate({
            moduleName: "./page2",
        });
    }

    return viewModel;
}

exports.createViewModel = createViewModel;