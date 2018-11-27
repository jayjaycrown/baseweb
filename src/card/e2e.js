/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-env node */
/* eslint-disable flowtype/require-valid-file-annotation */
/* global after */

const scenarios = require('./examples-list');
const {goToUrl} = require('../../e2e/helpers');

const suite = 'Card Test Suite';

describe('The card component', () => {
  after((browser, done) => {
    browser.end(() => done());
  });

  Object.keys(scenarios).forEach(scenario => {
    xit(`passes basic a11y tests for ${scenario}`, browser => {
      goToUrl({
        suite,
        test: scenarios[scenario],
        browser,
      })
        .initAccessibility()
        .waitForElementVisible('body')
        .assert.accessibility('html', {
          rules: {
            'image-alt': {
              enabled: false,
            },
          },
        });
    });
  });
});
