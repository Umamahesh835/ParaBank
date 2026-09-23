# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> login test
- Location: tests\login.spec.ts:5:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('//input[@name=\'customer.phone\']')

```

# Test source

```ts
  1  | import {Page,Locator} from "@playwright/test";
  2  | 
  3  | export class Register{
  4  |     readonly page:Page;
  5  |     readonly FirstName:Locator;
  6  |     readonly LastName:Locator;
  7  |     readonly Address:Locator;
  8  |     readonly City:Locator;
  9  |     readonly State:Locator;
  10 |     readonly ZipCode:Locator;
  11 |     readonly Phone:Locator;
  12 |     readonly SSN:Locator;
  13 |     readonly Username:Locator;
  14 |     readonly Password:Locator;
  15 |     readonly Confirm:Locator;
  16 |     readonly RegisterButton:Locator;
  17 | 
  18 | 
  19 | 
  20 | 
  21 |     constructor(page:Page){
  22 |         this.page=page;
  23 |         this.FirstName= page.locator("//input[@name='customer.firstName']");
  24 |         this.LastName=page.locator("//input[@name='customer.lastName']");
  25 |         this.Address=page.locator("//input[@name='customer.address.street']");
  26 |         this.City=page.locator("//input[@name='customer.address.city']");
  27 |         this.State=page.locator("//input[@name='customer.address.state']");
  28 |         this.ZipCode=page.locator("//input[@name='customer.address.zipCode']");
  29 |         this.Phone=page.locator("//input[@name='customer.phone']");
  30 |         this.SSN=page.locator("//input[@name='customer.ssn']");
  31 |         this.Username=page.locator("//input[@name='customer.username']");
  32 |         this.Password=page.locator("//input[@name='customer.password']");
  33 |         this.Confirm=page.locator("//input[@name='customer.confirmPassword']");
  34 |         this.RegisterButton=page.locator("//input[@value='Register']");
  35 |     }
  36 | 
  37 |     async RegisterUser(firstName:string,lastName:string,address:string,city:string,state:string,zipCode:string,phone:string,ssn:string,userName:string,password:string,confirm:string){
  38 |         await this.FirstName.fill(firstName);
  39 |         await this.LastName.fill(lastName);
  40 |         await this.Address.fill(address);
  41 |         await this.City.fill(city);
  42 |         await this.State.fill(state);
  43 |         await this.ZipCode.fill(zipCode);
> 44 |         await this.Phone.fill(phone);
     |                          ^ Error: locator.fill: Target page, context or browser has been closed
  45 |         await this.SSN.fill(ssn);
  46 |         await this.Username.fill(userName);
  47 |         await this.Password.fill(password);
  48 |         await this.Confirm.fill(confirm);
  49 |         await this.RegisterButton.click();
  50 |     }
  51 | }
```