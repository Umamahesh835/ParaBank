# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> login test
- Location: tests\login.spec.ts:5:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/index.htm", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test";
  2  | import{HomePage} from "../pages/HomePage.ts";
  3  | import { Register } from "../pages/Register.ts";
  4  | 
  5  | test("login test", async({page})=>{
  6  |     const homepage = new HomePage(page);
  7  |     const register = new Register(page);
  8  | 
> 9  |    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
     |               ^ Error: page.goto: Target page, context or browser has been closed
  10 |     await page.waitForTimeout(2000);
  11 |     //await homepage.Login("Mahesh","Mahesh@123");
  12 | 
  13 |     //await homepage.clickForgotLoginInfo();
  14 |     //await page.pause();
  15 |     expect.soft(await homepage.getCustomerLoginText()).toContain("Customer Login");
  16 |     await homepage.clickRegister();
  17 |     await register.RegisterUser("John","Doe","123 Main St","Anytown","State","12345","555-1234","123-45-6789","johndoe","password","password");
  18 | 
  19 | })
```