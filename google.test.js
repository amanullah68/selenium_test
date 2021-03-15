const fs = require('fs');
jest.setTimeout(30000);

describe('test google.com', () => {
    const {
        Builder,
        By,
        Key,
        until
    } = require('selenium-webdriver');
    var driver;

    beforeEach(() => {
        driver = new Builder()
            .forBrowser('firefox')
            .build();
    });

    afterEach(() => {
        driver.quit();
    });

    // it('should open google search', async () => {
    //     await driver.get('http://www.google.com')
    //         .then(async () => {
    //             await driver.getTitle()
    //                 .then((title) => {
    //                     expect(title).toEqual('Google');
    //                 })
    //         });
    // });

    // it('should open google search and view search results', async () => {
    //     await driver.get('http://www.google.com')
    //         .then(async () => {
    //             var element = await driver.findElement(By.css('input[title=Search]'));
    //             await element.sendKeys("selenium", Key.RETURN);
    //             await driver.wait(until.titleContains("selenium"), 4000);
    //             driver
    //                 .getTitle()
    //                 .then(title => {
    //                     expect(title).toEqual('selenium - Google Search');
    //                 });
    //         });
    // });

    it('should open google search and do image search', async () => {
        await driver.get('https://www.google.com')
            .then(async () => {
                var element = await driver.findElement(By.name("q"));
                await element.sendKeys("Cheese!\n", Key.RETURN);
                // sleep(1);
                // links= driver.find_elements_by_xpath("//h3[@class='r']//a");
                
                // await driver.wait(until.titleContains("selenium"), 4000);
                // var imageSearch = driver.findElement(By.xpath("//a[contains(text(), 'Images')]"));
                // await imageSearch.click();
                // let image = await driver.takeScreenshot();
                // fs.writeFileSync('out.png', image, 'base64');
            });
    });
});