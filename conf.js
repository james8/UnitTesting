// Protractor needs to locate 'ng-app' in order to sync with the page. Need to declare 'ng-app' in
// either the head or body since protractor looks at these by default.  Supposedly theres a way to
// nest it inside with 'rootElement' but doesnt seem to work.  If index.html doesnt include the head
// & body tags the e2e test will fail even with the 'rootElement' since the 'ng-app' will be really nested. 

exports.config = {
    allScriptsTimeout:              11000,
    specs: [
        'Tests/e2e/*.js'
    ],
    multiCapabilities: [
        {
            'browserName':          'chrome'
        }
    ],
    baseUrl:                        'http://spt13.doeqa.test/dev/wads/SitePages/',
    framework:                      'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval:     30000
    }
}