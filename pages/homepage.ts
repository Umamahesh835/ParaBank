import{Page,Locator} from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly LoginButton:Locator;
    readonly Forgot_login_info:Locator;
    readonly Register:Locator;
    readonly CustomerLogin:Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.LoginButton= page.getByRole("button", {name: "Log In"});
        this.Forgot_login_info = page.getByRole('link', { name: 'Forgot login info?' });
        this.Register = page.getByRole('link', { name: 'Register' });
        this.CustomerLogin= page.locator("//h2[text()='Customer Login']");

        
    }

  /*  async Login(Username:string,Password:string){
        await this.username.fill(Username);
        await this.password.fill(Password);
        await this.LoginButton.click();
        
    }
*/
    async clickForgotLoginInfo(){
        await this.Forgot_login_info.click();
    }
    async clickRegister(){
        await this.Register.click();
    }
    async getCustomerLoginText(){
        return await this.CustomerLogin.textContent();
    }
}