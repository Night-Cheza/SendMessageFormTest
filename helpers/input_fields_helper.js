const Helper = require('@codeceptjs/helper');

class InputFieldsHelper extends Helper {

  async testHappyPath() {
    const {page} = this.helpers.Playwright;
    await page.goto("https://bluescapeqainterview.wordpress.com/contact/");

    // Click name input field
    await page.locator('input[name="g7-name"]').click();
    // Fill name input field
    await page.locator('input[name="g7-name"]').fill('name');

    // Click email input field
    await page.locator('input[name="g7-email"]').click();
    // Fill email input field
    await page.locator('input[name="g7-email"]').fill('abc@google.com');

    // Click website input field
    await page.locator('input[name="g7-website"]').click();
    // Fill website input field
    await page.locator('input[name="g7-website"]').fill('https://google.com');

    // Click date input field
    await page.locator('input[name="g7-date"]').click();
    // Click text=27 on the calendar
    await page.locator('text=27').click();

    // Click text=Submit
    await page.locator('text=Submit').click();
  }

  async testNameInput() {
    const {page} = this.helpers.Playwright;
    await page.goto("https://bluescapeqainterview.wordpress.com/contact/");

    // Click name input field
    await page.locator('input[name="g7-name"]').click();
    // Fill name input field
    await page.locator('input[name="g7-name"]').fill('');

    // Click email input field
    await page.locator('input[name="g7-email"]').click();
    // Fill email input field
    await page.locator('input[name="g7-email"]').fill('abc@google.com');

    // Click website input field
    await page.locator('input[name="g7-website"]').click();
    // Fill website input field
    await page.locator('input[name="g7-website"]').fill('https://google.com');

    // Click date input field
    await page.locator('input[name="g7-date"]').click();
    // Click text=27 on the calendar
    await page.locator('text=27').click();

    // Click text=Submit
    await page.locator('text=Submit').click();
  }

  async testEmailInput() {
    const {page} = this.helpers.Playwright;
    await page.goto("https://bluescapeqainterview.wordpress.com/contact/");

    // Click name input field
    await page.locator('input[name="g7-name"]').click();
    // Fill name input field
    await page.locator('input[name="g7-name"]').fill('name');

    // Click email input field
    await page.locator('input[name="g7-email"]').click();
    // Fill email input field
    await page.locator('input[name="g7-email"]').fill('');

    // Click website input field
    await page.locator('input[name="g7-website"]').click();
    // Fill website input field
    await page.locator('input[name="g7-website"]').fill('https://google.com');

    // Click date input field
    await page.locator('input[name="g7-date"]').click();
    // Click text=27 on the calendar
    await page.locator('text=27').click();

    // Click text=Submit
    await page.locator('text=Submit').click();
  }

  async testWebsiteURLInput() {
    const {page} = this.helpers.Playwright;
    await page.goto("https://bluescapeqainterview.wordpress.com/contact/");

    // Click name input field
    await page.locator('input[name="g7-name"]').click();
    // Fill name input field
    await page.locator('input[name="g7-name"]').fill('name');

    // Click email input field
    await page.locator('input[name="g7-email"]').click();
    // Fill email input field
    await page.locator('input[name="g7-email"]').fill('abc@google.com');

    // Click website input field
    await page.locator('input[name="g7-website"]').click();
    // Fill website input field
    await page.locator('input[name="g7-website"]').fill('some website');

    // Click date input field
    await page.locator('input[name="g7-date"]').click();
    // Click text=27 on the calendar
    await page.locator('text=27').click();

    // Click text=Submit
    await page.locator('text=Submit').click();
  }

}

module.exports = InputFieldsHelper;
