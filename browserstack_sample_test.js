var webdriver = require('selenium-webdriver');

var userName = "amanullah4";
var accessKey = "D3ympCtTzUrLkiPQkfoM"
var browserstackURL = 'https://' + userName + ':' + accessKey + '@hub-cloud.browserstack.com/wd/hub';

// Input capabilities
var capabilities = {

  'os': 'Windows',
  'os_version': '10',
  'browserName': 'Chrome',
  'browser_version': '80',

  'name': "amanullah4's First Test"

}

var driver = new webdriver.Builder().
  usingServer(browserstackURL).
  withCapabilities(capabilities).
  build();

driver.get('http://www.google.com').then(async () => {
  await driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack', webdriver.Key.RETURN);
  await driver.getTitle().then(function (title) {
    console.log(title);
    driver.quit();
  });
});