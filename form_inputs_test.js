Feature('required fields');
const assert = require('assert');

Scenario('Test happy path', async ({ I }) => {
    // I.amOnPage("/contact");
    // I.see('Submit', 'button');
    I.testFormInputs();
    let sent = await I.grabTextFrom("h3");
    assert.equal("Message Sent (go back)", sent);
});
