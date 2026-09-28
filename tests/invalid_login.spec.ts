import {test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.ts';
import { Login } from '../pages/Login.ts';

test('invalid login test', async({page})=>{

    const homepage =new HomePage(page);
    const login = new Login(page);

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await login.LoginUser("invaliduser","invalidpassword");
    const errorMessage = await login.getErrorMessageText();
    expect(errorMessage).toContain("The username and password could not be verified.");
})
