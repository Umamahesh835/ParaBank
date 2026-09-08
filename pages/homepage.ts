import{Page,Locator} from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly LoginButton:Locator;
   // readonly Invalid:Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.LoginButton= page.getByRole("button", {name: "Log In"});
        //this.Invalid= page.locator('h1');
    }

    async Login(Username:string,Password:string){
        await this.username.fill(Username);
        await this.password.fill(Password);
        await this.LoginButton.click();
        
    }
}