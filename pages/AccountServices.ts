import {Page,Locator} from "@playwright/test";

export class AccountServices{

    readonly page:Page;
    readonly OpenNewAccount:Locator;

    constructor(page:Page){
        this.page=page;
        this.OpenNewAccount = page.getByRole('link', {name: 'Open New Account'});
    }
}