'use strict';

app.contactUsView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('contactUsView');

// START_CUSTOM_CODE_contactUsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_contactUsView
(function(parent) {
    var contactUsViewModel = kendo.observable({});

    parent.set('contactUsViewModel', contactUsViewModel);
})(app.contactUsView);

// START_CUSTOM_CODE_contactUsViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_contactUsViewModel