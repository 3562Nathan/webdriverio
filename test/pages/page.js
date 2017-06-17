"use strict";

const ValidationData = require('../validation/validationdata');

class Page {
  constructor() {
    this.fields = [];
    this.ids = [];
    this.names = [];
    this.types = [];
    this.maxlengths = [];
    this.patterns = [];
    this.requireds = [];
  }

  open(path) {
    browser.url('/' + path);
  }

  getPageInputAttrs(pId, pName, pType, pMaxlength, pPattern, pRequired, elementCollection) {

    for (let field of elementCollection) {

      this.ids.push(field.getAttribute(pId));
      this.names.push(field.getAttribute(pName));
      this.types.push(field.getAttribute(pType));
      this.maxlengths.push(field.getAttribute(pMaxlength));
      this.patterns.push(field.getAttribute(pPattern));
      this.requireds.push(field.getAttribute(pRequired));
    }

    return this.attributes;
  }

  idDataToObject() {
    const idsLength = this.ids.length;
    for (let i = 0; i < idsLength; i++) {
      if (this.ids[i] !== "") {
        const idObj = {
          [this.ids[i]]: {
            type: [this.types[i]][0],
            maxlength: [this.maxlengths[i]][0],
            pattern: [this.patterns[i]][0],
            required: [this.requireds[i]][0]
          }
        };
        this.fields.push(idObj);
      } else {
        const nameObj = {
          [this.names[i]]: {
            type: [this.types[i]][0],
            maxlength: [this.maxlengths[i]][0],
            pattern: [this.patterns[i]][0],
            required: [this.requireds[i]][0]
          }
        };
        this.fields.push(nameObj);
      }
    }

    for (let field of this.fields) {
      console.log(JSON.stringify(field));
    }
  }


  // getValidationData() {
  //   console.log('fields: ' + this.fields["0"].['First Name'].id);
  // }

  //  validationComparisons() {
  //     for (let field of this.attributes) {
  // 			if (field[0] === 'regIdNumber' || field[0] === 'true') {
  // 				console.log(field[0]);
  // 			}
  // 		}
  //  }
}
module.exports = Page;
