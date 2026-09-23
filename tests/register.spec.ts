import {test, expect} from '@playwright/test';
import { Register } from '../pages/Register.ts';
import { HomePage } from '../pages/HomePage.ts';

test('Register user ', async({page})=>{
    const homepage = new HomePage(page);
    const register = new Register(page);

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await homepage.clickRegister();
    await page.waitForTimeout(2000);
    await register.RegisterUser("John","Doe","123 Main St","Anytown","State","12345","555-1234","123-45-6789","johndoe","password","password");


})