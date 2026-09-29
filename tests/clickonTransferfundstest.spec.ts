import {test, expect} from "@playwright/test";
import { HomePage} from "../pages/HomePage.ts";
import {AccountServices} from "../pages/AccountServices.ts";
import { Login } from "../pages/Login.ts";

test.fail("click on transfer funds", async({page})=>{
    const homepage = new HomePage(page);
    const accountservices = new AccountServices(page);
    const login = new Login(page);

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await login.LoginUser("johndoe","pasword");
    await accountservices.clickOnTransferFunds();
})