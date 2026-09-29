import {Page,Locator} from "@playwright/test";

export class AccountServices{

    readonly page:Page;
    readonly OpenNewAccount:Locator;
    readonly AccountsOverview:Locator;
    readonly TransferFunds:Locator;
    readonly BillPay:Locator;
    readonly FindTransactions:Locator;
    readonly UpdateContactInfo:Locator;
    readonly RequestLoan:Locator;
    readonly LogOut:Locator;
    

    constructor(page:Page){
        this.page=page;
        this.OpenNewAccount = page.getByRole('link', {name: 'Open New Account'});
        this.AccountsOverview = page.getByRole('link', {name: 'Accounts Overview'});
        this.TransferFunds = page.getByRole('link', {name: 'Transfer Funds'});
        this.BillPay = page.getByRole('link', {name: 'Bill Pay'});
        this.FindTransactions = page.getByRole('link', {name: 'Find Transactions'});
        this.UpdateContactInfo = page.getByRole('link', {name: 'Update Contact Information'});
        this.RequestLoan = page.getByRole('link', {name: 'Request Loan'});
        this.LogOut = page.getByRole('link', {name: 'Log Out'});
    }

    async clickOnTransferFunds(){
        await this.TransferFunds.click();
    }
}