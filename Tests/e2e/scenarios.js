'use strict';

describe('App', function() {
    it('should automatically redirect to /home when location hash/fragment is empty', function() {
        browser.get('UnitTesting.aspx#');
        browser.getLocationAbsUrl().then(function(url) {
            console.log(url);
            expect(url).toMatch('/home');
        });

        element(by.model('inputTest')).sendKeys('Im a test input string!');
        
    });
});