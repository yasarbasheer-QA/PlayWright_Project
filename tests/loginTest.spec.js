const {test,expect} = require ('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('LoginTest' , async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user','secret_sauce');

    expect(page).toHaveTitle('Swag Labs');
})