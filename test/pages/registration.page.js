"use strict";
const Page = require('./page');

class RegistrationPage extends Page {
    get registrationBanner() { return browser.element('.registerPosition'); }
    get registrationFormFields() { return browser.$$('#formRegistration input'); }
    get idNumber()  { return browser.element('#regIdNumber'); }
    get firstName() { return browser.element('#firstName'); }
    get secondName(){ return browser.element('#secondName'); }
    get surname()   { return browser.element('#surname'); }
    get addressLine1() { return browser.element('#flightmanagerFlightsFormChildrenInfantsBlock'); }
    get addressLine2() { return browser.element('#flightmanagerFlightsFormCabin'); }
    get suburb()    { return browser.element('input[value=business]business]'); }
    get city()      { return browser.element('input[value=private]'); }
    get province()  { return browser.element('#flightmanagerFlightsFormCompanyRateBlock'); }
    get postalCode(){ return browser.element('button[type=submit]'); }
    get cellNo(){ return browser.element('button[type=submit]'); }
    get emailAddress() { return browser.element('button[type=submit]'); }
    get companyName()  { return browser.element('button[type=submit]'); }
    get phoneWork()    { return browser.element('button[type=submit]'); }
    get termsAndConditions(){ return browser.element('button[type=submit]'); }
    get continueBtn()  { return browser.element('button[type=submit]'); }
    get cancelBtn()    { return browser.element('button[type=submit]'); }

    open() {
        super.open('');
    }

    // validationComparisons() {
    //   super.validationComparisons();
    // }

    // getValidationData() {
    //   super.getValidationData();
    // }

    openDropdown() {
        browser.commandDropdown(this.selectAutomation, this.automationOption);
    }

    idDataToObject() {
      super.idDataToObject();
    }

    getPageInputAttrs() {
      super.getPageInputAttrs('id', 'name', 'type', 'maxlength', 'pattern', 'required', this.registrationFormFields);
    }
}
module.exports = new RegistrationPage();
