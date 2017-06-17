"use strict"

const Page = require('./page');

class LoginPage extends Page {
    get signUp() { return browser.element('.SIGNUP'); }
    get loginForm() { return browser.$$('#loginForm input'); }

    open() {
        super.open('');
    }

    getHeaderText() {
      console.log('New Tab Page Header: ' + this.header.getText());
    }

    scrollPage(element, x, y) {
      this.element.scroll(x, y);
    }

    idDataToObject() {
      super.idDataToObject();
    }

    getPageInputAttrs() {
      super.getPageInputAttrs('id', 'name', 'type', 'maxlength', 'pattern', 'required', this.loginForm);
    }

    // getValidationData() {
    //   super.getValidationData();
    // }
}

module.exports = new LoginPage();
