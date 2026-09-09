import{test,expect} from "@playwright/test";
import{HomePage} from "../pages/homepage.ts";
import { Register } from "../pages/Register.ts";

test("login test", async({page})=>{
    const homepage = new HomePage(page);
    const register = new Register(page);

   await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await page.waitForTimeout(2000);
    //await homepage.Login("Mahesh","Mahesh@123");

    //await homepage.clickForgotLoginInfo();
    //await page.pause();
    expect.soft(await homepage.getCustomerLoginText()).toContain("Customer Login");
    await homepage.clickRegister();
    await register.fillFirstname("john");
    await page.waitForTimeout(5000);

})