const Helper = require('@codeceptjs/helper');
const expect = require('assert');

class CheckRequiredField extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    const{page} = this.helpers.Playwright;
    //clear routes between tests
    page._routes = [];
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
  async getRequiredFields({page}) {
    await page.goto("https://bluescapeqainterview.wordpress.com/contact/");

    userName = await page.text_content("input:firs-child");
    expect(userName.length > 0);

    email= await page.text_content("input:second-child");
    expect(email.length > 0);

    website = await page.text_content("input:third-child");
    expect(website.length > 0);
  }
}

module.exports = CheckRequiredField;
