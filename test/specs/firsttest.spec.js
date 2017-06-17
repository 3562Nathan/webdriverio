const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RegistrationPage = require('../pages/registration.page');


describe('My Credit Check', () => {
    it('Validate Registration Form', () => {
        LoginPage.open();
        let title = browser.getTitle();
        console.log('Welcome to ' + title);
        LoginPage.getPageInputAttrs();
        LoginPage.idDataToObject();
        LoginPage.signUp.click();
        RegistrationPage.registrationBanner.waitForVisible(5000);
        RegistrationPage.getPageInputAttrs();
        RegistrationPage.idDataToObject();
        // RegistrationPage.getValidationData();
    });
});
