import {Page,Locator} from "@playwright/test";

export class Register{
    readonly page:Page;
    readonly FirstName:Locator;
    readonly LastName:Locator;
    readonly Address:Locator;
    readonly City:Locator;
    readonly State:Locator;
    readonly ZipCode:Locator;
    readonly Phone:Locator;
    readonly SSN:Locator;
    readonly Username:Locator;
    readonly Password:Locator;
    readonly Confirm:Locator;
    readonly RegisterButton:Locator;




    constructor(page:Page){
        this.page=page;
        this.FirstName= page.locator("//input[@name='customer.firstName']");
        this.LastName=page.locator("//input[@name='customer.lastName']");
        this.Address=page.locator("//input[@name='customer.address.street']");
        this.City=page.locator("//input[@name='customer.address.city']");
        this.State=page.locator("//input[@name='customer.address.state']");
        this.ZipCode=page.locator("//input[@name='customer.address.zipCode']");
        this.Phone=page.locator("//input[@id='customer.phoneNumber']");
        this.SSN=page.locator("//input[@id='customer.ssn']");
        this.Username=page.locator("//input[@id='customer.username']");
        this.Password=page.locator("//input[@id='customer.password']");
        this.Confirm=page.locator("//input[@id='repeatedPassword']");
        this.RegisterButton=page.locator("//input[@value='Register']");
    }

    async RegisterUser(firstName:string,lastName:string,address:string,city:string,state:string,zipCode:string,phone:string,ssn:string,userName:string,password:string,confirm:string){
        await this.FirstName.fill(firstName);
        await this.LastName.fill(lastName);
        await this.Address.fill(address);
        await this.City.fill(city);
        await this.State.fill(state);
        await this.ZipCode.fill(zipCode);
        await this.Phone.fill(phone);
        await this.SSN.fill(ssn);
        await this.Username.fill(userName);
        await this.Password.fill(password);
        await this.Confirm.fill(confirm);
        await this.RegisterButton.click();
    }
}