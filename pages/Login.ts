import {Page,Locator} from "@playwright/test";

export class Login{
    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly LoginButton:Locator;
    readonly ErrorMessage:Locator;

    constructor(page:Page){
        this.page=page;
        this.username = page.locator("//input[@type='text']");
        this.password = page.locator("//input[@type='password']");
        this.LoginButton = page.locator("//input[@type='submit']");
        this.ErrorMessage= page.locator("//p[@class='error']");
    }

    async LoginUser(usernameValue: string, passwordValue: string){
        await this.username.fill(usernameValue);
        await this.password.fill(passwordValue);
        await this.LoginButton.click();
    }
    async getErrorMessageText(){
        return await this.ErrorMessage.textContent();
    }
}