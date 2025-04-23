# Test info

- Name: Login Page >> Đăng nhập thành công
- Location: D:\SANPHAM\tests\login.spec.ts:6:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

    at D:\SANPHAM\tests\login.spec.ts:7:16
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | const BASE_URL = 'http://localhost:3000';
   4 |
   5 | test.describe('Login Page', () => {
   6 |   test('Đăng nhập thành công', async ({ page }) => {
>  7 |     await page.goto(BASE_URL);
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
   8 |     await page.fill('#email', 'test@example.com');
   9 |     await page.fill('#password', '123456');
  10 |     await page.click('button[type="submit"]');
  11 |     await expect(page.locator('.message')).toHaveText('Đăng nhập thành công');
  12 |   });
  13 |
  14 |   test('Đăng nhập thất bại', async ({ page }) => {
  15 |     await page.goto(BASE_URL);
  16 |     await page.fill('#email', 'sai@example.com');
  17 |     await page.fill('#password', 'sai123');
  18 |     await page.click('button[type="submit"]');
  19 |     await expect(page.locator('.message')).toHaveText('Sai thông tin đăng nhập');
  20 |   });
  21 | });
  22 |
  23 |
```