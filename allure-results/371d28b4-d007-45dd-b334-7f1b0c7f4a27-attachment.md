# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> login test
- Location: tests\login.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@name=\'customer.phone\']')

```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - generic [ref=f1e2]:
    - generic [ref=f1e3]:
      - link:
        - /url: admin.htm
        - img [ref=f1e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=f1e5] [cursor=pointer]
      - paragraph [ref=f1e6]: Experience the difference
    - generic [ref=f1e7]:
      - list [ref=f1e8]:
        - listitem [ref=f1e9]: Solutions
        - listitem [ref=f1e10]:
          - link "About Us" [ref=f1e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=f1e12]:
          - link "Services" [ref=f1e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=f1e14]:
          - link "Products" [ref=f1e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=f1e16]:
          - link "Locations" [ref=f1e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=f1e18]:
          - link "Admin Page" [ref=f1e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=f1e20]:
        - listitem [ref=f1e21]:
          - link "home" [ref=f1e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=f1e23]:
          - link "about" [ref=f1e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=f1e25]:
          - link "contact" [ref=f1e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=f1e27]:
      - generic [ref=f1e28]:
        - heading "Customer Login" [level=2] [ref=f1e29]
        - generic [ref=f1e30]:
          - generic [ref=f1e31]:
            - paragraph [ref=f1e32]: Username
            - textbox [ref=f1e34]
            - paragraph [ref=f1e35]: Password
            - textbox [ref=f1e37]
            - button "Log In" [ref=f1e39] [cursor=pointer]
          - paragraph [ref=f1e40]:
            - link "Forgot login info?" [ref=f1e41] [cursor=pointer]:
              - /url: lookup.htm
          - paragraph [ref=f1e42]:
            - link "Register" [ref=f1e43] [cursor=pointer]:
              - /url: register.htm
      - generic [ref=f1e44]:
        - heading "Signing up is easy!" [level=1] [ref=f1e45]
        - paragraph [ref=f1e46]: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
        - table [ref=f1e48]:
          - rowgroup [ref=f1e49]:
            - row [ref=f1e50]:
              - cell "First Name:" [ref=f1e51]
              - cell [ref=f1e52]:
                - textbox [ref=f1e53]: John
              - cell [ref=f1e54]
            - row [ref=f1e55]:
              - cell "Last Name:" [ref=f1e56]
              - cell [ref=f1e57]:
                - textbox [ref=f1e58]: Doe
              - cell [ref=f1e59]
            - row [ref=f1e60]:
              - cell "Address:" [ref=f1e61]
              - cell [ref=f1e62]:
                - textbox [ref=f1e63]: 123 Main St
              - cell [ref=f1e64]
            - row [ref=f1e65]:
              - cell "City:" [ref=f1e66]
              - cell [ref=f1e67]:
                - textbox [ref=f1e68]: Anytown
              - cell [ref=f1e69]
            - row [ref=f1e70]:
              - cell "State:" [ref=f1e71]
              - cell [ref=f1e72]:
                - textbox [ref=f1e73]: State
              - cell [ref=f1e74]
            - row [ref=f1e75]:
              - cell "Zip Code:" [ref=f1e76]
              - cell [ref=f1e77]:
                - textbox [active] [ref=f1e78]: "12345"
              - cell [ref=f1e79]
            - row [ref=f1e80]:
              - 'cell "Phone #:" [ref=f1e81]'
              - cell [ref=f1e82]:
                - textbox [ref=f1e83]
              - cell [ref=f1e84]
            - row [ref=f1e85]:
              - cell "SSN:" [ref=f1e86]
              - cell [ref=f1e87]:
                - textbox [ref=f1e88]
              - cell [ref=f1e89]
            - row [ref=f1e90]:
              - cell [ref=f1e91]
            - row [ref=f1e92]:
              - cell "Username:" [ref=f1e93]
              - cell [ref=f1e94]:
                - textbox [ref=f1e95]
              - cell [ref=f1e96]
            - row [ref=f1e97]:
              - cell "Password:" [ref=f1e98]
              - cell [ref=f1e99]:
                - textbox [ref=f1e100]
              - cell [ref=f1e101]
            - row [ref=f1e102]:
              - cell "Confirm:" [ref=f1e103]
              - cell [ref=f1e104]:
                - textbox [ref=f1e105]
              - cell [ref=f1e106]
            - row [ref=f1e107]:
              - cell [ref=f1e108]
              - cell [ref=f1e109]:
                - button "Register" [ref=f1e110] [cursor=pointer]
  - generic [ref=f1e112]:
    - list [ref=f1e113]:
      - listitem [ref=f1e114]:
        - link "Home" [ref=f1e115] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=f1e116]:
        - link "About Us" [ref=f1e117] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=f1e118]:
        - link "Services" [ref=f1e119] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=f1e120]:
        - link "Products" [ref=f1e121] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=f1e122]:
        - link "Locations" [ref=f1e123] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=f1e124]:
        - link "Forum" [ref=f1e125] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=f1e126]:
        - link "Site Map" [ref=f1e127] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=f1e128]:
        - link "Contact Us" [ref=f1e129] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=f1e130]: © Parasoft. All rights reserved.
    - list [ref=f1e131]:
      - listitem [ref=f1e132]: "Visit us at:"
      - listitem [ref=f1e133]:
        - link "www.parasoft.com" [ref=f1e134] [cursor=pointer]:
          - /url: http://www.parasoft.com/
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
     |                          ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  45 |         await this.SSN.fill(ssn);
  46 |         await this.Username.fill(userName);
  47 |         await this.Password.fill(password);
  48 |         await this.Confirm.fill(confirm);
  49 |         await this.RegisterButton.click();
  50 |     }
  51 | }
```