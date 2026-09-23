# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> login test
- Location: tests\login.spec.ts:6:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "The username and password could not be verified."
Received string:    "
			An internal error has occurred and has been logged.
		"
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - generic [ref=f1e2]:
    - generic [ref=f1e3]:
      - link:
        - /url: admin.htm
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=f1e5]
      - paragraph [ref=f1e6]: Experience the difference
    - generic [ref=f1e7]:
      - list [ref=f1e8]:
        - listitem [ref=f1e9]: Solutions
        - listitem [ref=f1e10]:
          - link "About Us" [ref=f1e11]:
            - /url: about.htm
        - listitem [ref=f1e12]:
          - link "Services" [ref=f1e13]:
            - /url: services.htm
        - listitem [ref=f1e14]:
          - link "Products" [ref=f1e15]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=f1e16]:
          - link "Locations" [ref=f1e17]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=f1e18]:
          - link "Admin Page" [ref=f1e19]:
            - /url: admin.htm
      - list [ref=f1e20]:
        - listitem [ref=f1e21]:
          - link "home" [ref=f1e22]:
            - /url: index.htm
        - listitem [ref=f1e23]:
          - link "about" [ref=f1e24]:
            - /url: about.htm
        - listitem [ref=f1e25]:
          - link "contact" [ref=f1e26]:
            - /url: contact.htm
    - generic [ref=f1e27]:
      - generic [ref=f1e28]:
        - paragraph [ref=f1e29]: Welcome John Doe
        - heading "Account Services" [level=2] [ref=f1e30]
        - list [ref=f1e31]:
          - listitem [ref=f1e32]:
            - link "Open New Account" [ref=f1e33]:
              - /url: openaccount.htm
          - listitem [ref=f1e34]:
            - link "Accounts Overview" [ref=f1e35]:
              - /url: overview.htm
          - listitem [ref=f1e36]:
            - link "Transfer Funds" [ref=f1e37]:
              - /url: transfer.htm
          - listitem [ref=f1e38]:
            - link "Bill Pay" [ref=f1e39]:
              - /url: billpay.htm
          - listitem [ref=f1e40]:
            - link "Find Transactions" [ref=f1e41]:
              - /url: findtrans.htm
          - listitem [ref=f1e42]:
            - link "Update Contact Info" [ref=f1e43]:
              - /url: updateprofile.htm
          - listitem [ref=f1e44]:
            - link "Request Loan" [ref=f1e45]:
              - /url: requestloan.htm
          - listitem [ref=f1e46]:
            - link "Log Out" [ref=f1e47]:
              - /url: logout.htm
      - generic [ref=f1e50]:
        - heading "Accounts Overview" [level=1] [ref=f1e51]
        - table [ref=f1e52]:
          - rowgroup [ref=f1e53]:
            - row [ref=f1e54]:
              - columnheader "Account" [ref=f1e55]
              - columnheader "Balance*" [ref=f1e56]
              - columnheader "Available Amount" [ref=f1e57]
          - rowgroup
          - rowgroup [ref=f1e58]:
            - row [ref=f1e59]:
              - cell "*Balance includes deposits that may be subject to holds" [ref=f1e60]
  - generic [ref=f1e62]:
    - list [ref=f1e63]:
      - listitem [ref=f1e64]:
        - link "Home" [ref=f1e65]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=f1e66]:
        - link "About Us" [ref=f1e67]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=f1e68]:
        - link "Services" [ref=f1e69]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=f1e70]:
        - link "Products" [ref=f1e71]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=f1e72]:
        - link "Locations" [ref=f1e73]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=f1e74]:
        - link "Forum" [ref=f1e75]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=f1e76]:
        - link "Site Map" [ref=f1e77]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=f1e78]:
        - link "Contact Us" [ref=f1e79]:
          - /url: contact.htm
    - paragraph [ref=f1e80]: © Parasoft. All rights reserved.
    - list [ref=f1e81]:
      - listitem [ref=f1e82]: "Visit us at:"
      - listitem [ref=f1e83]:
        - link "www.parasoft.com" [ref=f1e84]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test";
  2  | import{HomePage} from "../pages/HomePage.ts";
  3  | import { Register } from "../pages/Register.ts";
  4  | import { Login } from "../pages/Login.ts";
  5  | 
  6  | test("login test", async({page})=>{
  7  |     const homepage = new HomePage(page);
  8  |     const register = new Register(page);
  9  |     const login = new Login(page);
  10 | 
  11 |    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  12 |     await page.waitForTimeout(2000);
  13 |     //await homepage.Login("Mahesh","Mahesh@123");
  14 | 
  15 |     //await homepage.clickForgotLoginInfo();
  16 |     //await page.pause();
  17 |     expect.soft(await homepage.getCustomerLoginText()).toContain("Customer Login");
  18 |     await login.LoginUser("johndoe","password");
  19 |     const errorMessage = await login.getErrorMessageText();
> 20 |     expect(errorMessage).toContain("The username and password could not be verified.");
     |                          ^ Error: expect(received).toContain(expected) // indexOf
  21 |     console.log(errorMessage);
  22 | 
  23 | })
```