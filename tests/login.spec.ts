import{test,expect} from "@playwright/test";
import{HomePage} from "../pages/homepage.ts";

test("login test", async({page})=>{
    const homepage = new HomePage(page);

    await page.goto("https://para.testar.org/parabank/about.htm");
    await page.waitForTimeout(2000);
    await homepage.Login("Mahesh","Mahesh@123");
})