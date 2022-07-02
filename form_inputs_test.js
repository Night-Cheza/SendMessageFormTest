Feature('required fields');
const assert = require('assert');

Scenario('Test happy path', async ({ I }) => {
    I.testHappyPath();
    let sent = await I.grabTextFrom("h3");
    assert.equal("Message Sent (go back)", sent);
});

Scenario('Name field is required', async ({ I }) => {
    I.testNameInput();
    let sent = await I.grabTextFrom("h3");
    assert.equal("Message Sent (go back)", sent);
});

Scenario('Email field is required', async ({ I }) => {
    I.testEmailInput();
    let sent = await I.grabTextFrom("h3");
    assert.equal("Message Sent (go back)", sent);
});

Scenario('Website is required to be URL', async ({ I }) => {
    I.testWebsiteURLInput();
    let sent = await I.grabTextFrom("h3");
    assert.equal("Message Sent (go back)", sent);
});

