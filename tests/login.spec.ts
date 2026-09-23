import{test,expect} from "@playwright/test";
import{HomePage} from "../pages/HomePage.ts";
import { Register } from "../pages/Register.ts";
import { Login } from "../pages/Login.ts";

test("login test", async({page})=>{
    const homepage = new HomePage(page);
    const register = new Register(page);
    const login = new Login(page);

   await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await page.waitForTimeout(2000);
    //await homepage.Login("Mahesh","Mahesh@123");

    //await homepage.clickForgotLoginInfo();
    //await page.pause();
    expect.soft(await homepage.getCustomerLoginText()).toContain("Customer Login");
    await login.LoginUser("johndoe","password");
   /* const errorMessage = await login.getErrorMessageText();
    expect(errorMessage).toContain("The username and password could not be verified.");
    console.log(errorMessage);*/
    //await page.pause();

})