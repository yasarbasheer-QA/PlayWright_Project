import {test,expect} from '@playwright/test';


test('grouping test', async ({page})=>{

await page.goto('https://demo.automationtesting.in/Alerts.html');
await page.click(' .btn.btn-danger');

page.once('dialog',async dialog =>{
   await expect(dialog.message().toContain('alert box'));
   await dialog.accept();
})



})