const { test, expect } = require('@playwright/test');
const { chromium } = require('@playwright/test');

test('get the response2', async () => {
  const browser = await chromium.launch({
    args: ['--auto-open-devtools-for-tabs'], // Open DevTools automatically
  });

  const context = await browser.newContext();
  const page = await context.newPage(); 

  await page.goto('https://app-staging.vinhood.com/it/vinhood-multi/p/wine/retailer_page/?vh-page=legal');

  await page.getByRole('button', { name: 'Accetta tutti' }).click();
  await page.getByRole('button', { name: 'Inizia il Test' }).click();
  await page.getByRole('button', { name: 'AnswerItemImage Guidami tu!' }).click();
  await page.getByRole('button', { name: 'AnswerItemImage Non ho preferenze' }).click();
  await page.getByRole('button', { name: 'Continua' }).click();
  await page.getByRole('button', { name: 'Caffè' }).click();
  await page.getByRole('button', { name: 'AnswerItemImage Espresso', exact: true }).click();
  await page.getByRole('button', { name: 'Ananas' }).click();
  await page.getByRole('button', { name: 'AnswerItemImage Erba tagliata' }).click();

  const button1 = await page.getByRole('button', { name: 'Coi funghi' });
  const button3 = await page.getByRole('button', { name: 'AnswerItemImage Brie' });

  if (await button1.isVisible()) {
    await button1.click();
  } else {
    await button3.click();
  }

  await page.getByRole('button', { name: 'AnswerItemImage Frutta' }).click();
  const button4 = await page.getByRole('button', { name: 'AnswerItemImage Insalata' });
  const button5 = await page.getByRole('button', { name: 'AnswerItemImage Lattuga', exact: true });

  if (await button4.isVisible()) {
    await button4.click();
  } else {
    await button5.click();
  }

  await page.getByRole('button', { name: 'AnswerItemImage Alla nocciola' }).click();
  await page.getByRole('button', { name: 'AnswerItemImage Molto poco, mi reputo inesperto' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'AnswerItemImage Bollicine' }).click();

  const response = await page.waitForResponse(response => {
    return response.url().includes('https://api-staging.vinhood.com/tests/v2/vinhood-multi/quizzes/no-preferences-twa001/user-tests/'); // Replace with the expected part of the URL
  });

  const content = await response.text();
  const expectedText = '{"user_path":{"QQ09101000":["QA09101001"],"QQ09102000":["QA09102001"],"QQ09106000":["QA09106001"],"QQ09107000":["QA09107001"],"QQ09108000":["QA09108001"],"QQ09110000":["QA09110001"],"QQ09112000":["QA09112001"],"QQ09113000":["QA09113001"],"QQ09126010":["QA09126011"],"QQ09115000":["QA09115001"]}}';
  const expectedTextTwo = '{"user_path":{"QQ09101000":["QA09101001"],"QQ09102000":["QA09102001"],"QQ09106000":["QA09106001"],"QQ09107000":["QA09107001"],"QQ09108000":["QA09108001"],"QQ09110000":["QA09110001"],"QQ09111010":["QA09111011"]}}';
  const expectedTextThree = '{"user_path":{"QQ09101000":["QA09101001"],"QQ09102000":["QA09102001"],"QQ09106000":["QA09106001"],"QQ09107000":["QA09107001"],"QQ09108000":["QA09108001"],"QQ09110000":["QA09110001"],"QQ09111010":["QA09111011"],"QQ09113000":["QA09113001"],"QQ09126010":["QA09126011"],"QQ09115000":["QA09115001"]}}';
  const expectedTextFor = '{"user_path":{"QQ09101000":["QA09101001"],"QQ09102000":["QA09102001"],"QQ09106000":["QA09106001"],"QQ09107000":["QA09107001"],"QQ09109000":["QA09109001"],"QQ09110000":["QA09110001"],"QQ09112000":["QA09112001"],"QQ09113000":["QA09113001"],"QQ09126010":["QA09126011"],"QQ09115000":["QA09115001"]}}';
  const expectedTextFive = '{"user_path":{"QQ09101000":["QA09101001"],"QQ09102000":["QA09102001"],"QQ09106000":["QA09106001"],"QQ09107000":["QA09107001"],"QQ09109000":["QA09109001"],"QQ09110000":["QA09110001"],"QQ09111010":["QA09111011"],"QQ09113000":["QA09113001"],"QQ09126010":["QA09126011"],"QQ09115000":["QA09115001"]}}';
  const expectedTextSex = '{"QQ09101000":["QA09101001"],"QQ09102000":["QA09102001"],"QQ09106000":["QA09106001"],"QQ09107000":["QA09107001"],"QQ09108000":["QA09108001"],"QQ09110000":["QA09110001"],"QQ09112000":["QA09112001"],"QQ09113000":["QA09113001"],"QQ09126010":["QA09126011"]}';
  console.log('URL:', response.url());
  console.log('Response Content:', content);

  if (content.includes(expectedText)) {
    console.log('Expected text (One) found in the response!');
  } else if (content.includes(expectedTextTwo)) {
    console.log('Expected text (Two) found in the response!');
  } else if (content.includes(expectedTextThree)) {
    console.log('Expected text (Ttree) found in the response!');
  } else if (content.includes(expectedTextFor)) {
    console.log('Expected text (For) found in the response!');
  } else if (content.includes(expectedTextFive)) {
    console.log('Expected text (Five) found in the response!');
  } else if (content.includes(expectedTextSex)) {
    console.log('Expected text (Six) found in the response!');
  } else {
    throw new Error('Test failed: Neither expected text not found in the response.');
  }

// expect(content).toContain(expectedTextThree);
  await page.getByRole('button', { name: 'Vai di fretta? Ci pensiamo la prossima volta. Salta e vai ai prodotti.' }).click();
});

test.only('get the second response', async () => {
  //  Open DevTools automatically
  const browser = await chromium.launch({
    args: ['--auto-open-devtools-for-tabs'],
  });

  const context = await browser.newContext();
  const page = await context.newPage(); 
  test.setTimeout(30000)

  await page.goto('https://app-staging.vinhood.com/it/vinhood-multi/p/wine/retailer_page/?vh-page=legal');

  await page.getByRole('button', { name: 'Accetta tutti' }).click();
  await page.getByRole('button', { name: 'Inizia il Test' }).click();
  await page.getByRole('button', { name: 'AnswerItemImage Guidami tu!' }).click();
  await page.getByRole('button', { name: 'AnswerItemImage Non ho preferenze' }).click();
  await page.getByRole('button', { name: 'Continua' }).click();
  await page.getByRole('button', { name: 'Caffè' }).click();
  await page.getByRole('button', { name: 'AnswerItemImage Espresso', exact: true }).click();
  await page.getByRole('button', { name: 'Ananas' }).click();
  await page.getByRole('button', { name: 'AnswerItemImage Erba tagliata' }).click();

  const button1 = await page.getByRole('button', { name: 'Coi funghi' });
  const button3 = await page.getByRole('button', { name: 'AnswerItemImage Brie' });

  if (await button1.isVisible()) {
    await button1.click();
  } else {
    await button3.click();
  }

  await page.getByRole('button', { name: 'AnswerItemImage Frutta' }).click();
  const button4 = await page.getByRole('button', { name: 'AnswerItemImage Insalata' });
  const button5 = await page.getByRole('button', { name: 'AnswerItemImage Lattuga', exact: true });

  if (await button4.isVisible()) {
    await button4.click();
  } else {
    await button5.click();
  }

  await page.getByRole('button', { name: 'AnswerItemImage Alla nocciola' }).click();
  await page.getByRole('button', { name: 'AnswerItemImage Molto poco, mi reputo inesperto' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'AnswerItemImage Bollicine' }).click();

  let responseCounter = 0; //Counter for the URLS with the same body
  let response;

  while (responseCounter < 2) {
    response = await page.waitForResponse((response) => {
      if (response.url().includes('https://api-staging.vinhood.com/tests/v2/vinhood-multi/quizzes/no-preferences-twa001/user-tests/')) {
        responseCounter++;
      return responseCounter === 2; // Return the response when it's the 7 URL address for dynamo/sessin ID
    }
    return false; // Continue waiting for responses
  })};
  await page.getByRole('button', { name: 'Vai di fretta? Ci pensiamo la prossima volta. Salta e vai ai prodotti.' }).click();

  // Verify the presence of the expected text in the response
  const content = await response.text();
  const expectedText = 'RTL1000'; 
  const expectedTextTwo = 'WCS02S01'; 

  console.log('URL:', response.url());
  console.log('Response Content:', content);
  
  expect(content).toContain(expectedText);
  expect(content).toContain(expectedTextTwo);
  
});
