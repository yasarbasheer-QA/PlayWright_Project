class LoginPage{
    constructor(page){
        this.page = page;

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.pageloginBtn = page.locator('#login-button');
    }
    async navigate(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(user,pass){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.pageloginBtn.click();
    }
}

module.exports = LoginPage;