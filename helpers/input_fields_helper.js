const Helper = require('@codeceptjs/helper');

class InpuFieldsHelper extends Helper {

  async testHappyPath() {
    const {page} = this.helpers.Playwright;
    await page.goto("https://bluescapeqainterview.wordpress.com/contact/");

    // Click input[name="g7-name"]
    await page.locator('input[name="g7-name"]').click();
    // Fill input[name="g7-name"]
    await page.locator('input[name="g7-name"]').fill('name');

    // Click input[name="g7-email"]
    await page.locator('input[name="g7-email"]').click();
    // Fill input[name="g7-email"]
    await page.locator('input[name="g7-email"]').fill('abc@google.com');

    // Click input[name="g7-website"]
    await page.locator('input[name="g7-website"]').click();
    // Fill input[name="g7-website"]
    await page.locator('input[name="g7-website"]').fill('https://google.com');

    // Click input[name="g7-date"]
    await page.locator('input[name="g7-date"]').click();
    // Click text=9 on the calendar
    await page.locator('text=27').click();

    // Click text=Submit
    await page.locator('text=Submit').click();
  }

  async testNameInput() {
    const {page} = this.helpers.Playwright;
    await page.goto("https://bluescapeqainterview.wordpress.com/contact/");

    // Click input[name="g7-name"]
    await page.locator('input[name="g7-name"]').click();
    // Fill input[name="g7-name"]
    await page.locator('input[name="g7-name"]').fill('');

    // Click input[name="g7-email"]
    await page.locator('input[name="g7-email"]').click();
    // Fill input[name="g7-email"]
    await page.locator('input[name="g7-email"]').fill('abc@google.com');

    // Click input[name="g7-website"]
    await page.locator('input[name="g7-website"]').click();
    // Fill input[name="g7-website"]
    await page.locator('input[name="g7-website"]').fill('https://google.com');

    // Click input[name="g7-date"]
    await page.locator('input[name="g7-date"]').click();
    // Click text=9 on the calendar
    await page.locator('text=27').click();

    // Click text=Submit
    await page.locator('text=Submit').click();
  }

  async testEmailInput() {
    const {page} = this.helpers.Playwright;
    await page.goto("https://bluescapeqainterview.wordpress.com/contact/");

    // Click input[name="g7-name"]
    await page.locator('input[name="g7-name"]').click();
    // Fill input[name="g7-name"]
    await page.locator('input[name="g7-name"]').fill('name');

    // Click input[name="g7-email"]
    await page.locator('input[name="g7-email"]').click();
    // Fill input[name="g7-email"]
    await page.locator('input[name="g7-email"]').fill('');

    // Click input[name="g7-website"]
    await page.locator('input[name="g7-website"]').click();
    // Fill input[name="g7-website"]
    await page.locator('input[name="g7-website"]').fill('https://google.com');

    // Click input[name="g7-date"]
    await page.locator('input[name="g7-date"]').click();
    // Click text=9 on the calendar
    await page.locator('text=27').click();

    // Click text=Submit
    await page.locator('text=Submit').click();
  }

  async testWebsiteURLInput() {
    const {page} = this.helpers.Playwright;
    await page.goto("https://bluescapeqainterview.wordpress.com/contact/");

    // Click input[name="g7-name"]
    await page.locator('input[name="g7-name"]').click();
    // Fill input[name="g7-name"]
    await page.locator('input[name="g7-name"]').fill('name');

    // Click input[name="g7-email"]
    await page.locator('input[name="g7-email"]').click();
    // Fill input[name="g7-email"]
    await page.locator('input[name="g7-email"]').fill('abc@google.com');

    // Click input[name="g7-website"]
    await page.locator('input[name="g7-website"]').click();
    // Fill input[name="g7-website"]
    await page.locator('input[name="g7-website"]').fill('some website');

    // Click input[name="g7-date"]
    await page.locator('input[name="g7-date"]').click();
    // Click text=9 on the calendar
    await page.locator('text=27').click();

    // Click text=Submit
    await page.locator('text=Submit').click();
  }

}

module.exports = InpuFieldsHelper;
