// const { test, expect } = require('@playwright/test');
// const { chromium } = require('@playwright/test');


// // const { deserialize } = require('./path/to/deserializer');
// // const expectedData = deserialize('./path/to/expected-data.csv');
// test('has title new', async () => {
//   const browser = await chromium.launch({
//     args: ['--auto-open-devtools-for-tabs'], // Open DevTools automatically
//   });

//   const context = await browser.newContext();
//   const page = await context.newPage(); 

//   await page.goto('https://app-staging.vinhood.com/it/vinhood-multi/p/wine/retailer_page/?vh-page=legal');

//   await page.getByRole('button', { name: 'Accetta tutti' }).click();
//   await page.getByRole('button', { name: 'Inizia il Test' }).click();
//   await page.getByRole('button', { name: 'AnswerItemImage Guidami tu!' }).click();
//   await page.getByRole('button', { name: 'AnswerItemImage Non ho preferenze' }).click();
//   await page.getByRole('button', { name: 'Continua' }).click();
//   await page.getByRole('button', { name: 'Caffè' }).click();
//   await page.getByRole('button', { name: 'AnswerItemImage Espresso', exact: true }).click();
//   await page.getByRole('button', { name: 'Ananas' }).click();
//   await page.getByRole('button', { name: 'AnswerItemImage Erba tagliata' }).click();

//   const button1 = await page.getByRole('button', { name: 'Coi funghi' });
//   const button3 = await page.getByRole('button', { name: 'AnswerItemImage Brie' });

//   if (await button1.isVisible()) {
//     await button1.click();
//   } 

//   else {
//     await button3.click();
//   }

//   await page.getByRole('button', { name: 'AnswerItemImage Frutta' }).click();
//   const button4 = await page.getByRole('button', { name: 'AnswerItemImage Insalata' });
//   const button5 = await page.getByRole('button', { name: 'AnswerItemImage Lattuga', exact: true });
//   if (await button4.isVisible()) {
//     await button4.click();
//   } 
//   else {
//     await button5.click();
//   }

//   await page.getByRole('button', { name: 'AnswerItemImage Alla nocciola' }).click();
//   await page.getByRole('button', { name: 'AnswerItemImage Molto poco, mi reputo inesperto' }).click();
//   await page.getByRole('button', { name: 'AnswerItemImage Bollicine' }).click();

//   await page.pause();
//   await page.getByRole('button', { name: 'Vai di fretta? Ci pensiamo la prossima volta. Salta e vai ai prodotti.' }).click();

//   // const expectedEventURL = "http://api-staging.vinhood.com/products/vinhood-multi/ecommerce/generic-product-retailer-location/";
//   // const response = await page.waitForResponse(response => response.url().includes(expectedEventURL));

//   const response = await page.waitForResponse(response => response.url());
//   const responseBody = await response.text();
//   console.log(responseBody);
//   const expectedText = ("WCS02S01", "RTL1000", "CH0001", "CH0002", "CH0003", "CH0004", "CH0005", "CH0007", "http://api-staging.vinhood.com/products/vinhood-multi/ecommerce/generic-product-retailer-location/", "WCS02S01");
//   // const expectedText = ("WCS02S01");
//   // await page.waitForTimeout(5000);
//   expect(responseBody).toContain(expectedText);
//   // assert.notStrictEqual(responseBody, expectedText);

//   // const actualData = deserialize(responseBody);

//   // Compare the expected and actual data
//   // expect(actualData).toEqual(expectedData);
// });
