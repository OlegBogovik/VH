// const { test, expect } = require('@playwright/test');
// const { chromium } = require('@playwright/test');
// const { on } = require('events');

// test('has title new', async () => {
//     const browser = await chromium.launch({
//         args: ['--auto-open-devtools-for-tabs'], // Open DevTools automatically
//       });
    
//       const context = await browser.newContext();
//       const page = await context.newPage(); 

      
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
//   } else {
//     await button3.click();
//   }

//   await page.getByRole('button', { name: 'AnswerItemImage Frutta' }).click();
//   const button4 = await page.getByRole('button', { name: 'AnswerItemImage Insalata' });
//   const button5 = await page.getByRole('button', { name: 'AnswerItemImage Lattuga', exact: true });

//   if (await button4.isVisible()) {
//     await button4.click();
//   } else {
//     await button5.click();
//   }

//   await page.getByRole('button', { name: 'AnswerItemImage Alla nocciola' }).click();
//   await page.getByRole('button', { name: 'AnswerItemImage Molto poco, mi reputo inesperto' }).click();
//   await page.getByRole('button', { name: 'AnswerItemImage Bollicine' }).click();

// //   await page.pause();
//  // Add your response handling code here
//  page.on('response', async (response) => {
//     try {
//       const url = response.url();
//       const content = await response.text();
//       // You can access 'content' and 'url' here and process them as needed
//       console.log('URL:', url);
//       console.log('Response Content:', content);

//       // Compare the response content with your desired texts
//       if (content.includes("WCS02S01sadsda")) {
//         console.log('Text1 found in the response!');
//         // Perform an action based on the comparison, e.g., take a screenshot
//         await page.screenshot({ path: 'WCS02S01' });
//       }

//       // You can add similar comparisons for other texts here

//     } catch (error) {
//       console.error('Error:', error);
//     }
//   });
// //   page.on('request', req => console.log(`>> : ${req.method} ${req.resourceType()} ${req.url()}`))
// //   page.on('response', res => console.log(`<< : ${res.status} ${res.url()}`));

//   await page.getByRole('button', { name: 'Vai di fretta? Ci pensiamo la prossima volta. Salta e vai ai prodotti.' }).click();
// });