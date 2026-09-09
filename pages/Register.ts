import {Page,Locator} from "@playwright/test";

export class Register{
    readonly page:Page;
    readonly FirstName:Locator;


    constructor(page:Page){
        this.page=page;
        this.FirstName= page.locator("//input[@name='customer.firstName']");
    }

    async fillFirstname(name:string){
        await this.FirstName.fill(name);
    }
}