import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
  } from "selenium-webdriver";
export class wyzepageObject {
    driver: WebDriver
    url: string = "https://wyze.com/"
    loginRobot: By = By.xpath('//div[@class="recaptcha-checkbox-checkmark"]');
    // this is the selctor for when logging in or creating a user, it asks if you are a robot. 
    loginbutt: By = By.xpath('//a[text()="Log In"]');
    email: By = By.xpath('//input[@id="email"]');
    password: By = By.xpath('//input[@name = "login[password]"]');
    signIn: By =By.xpath('//button[@class="action login primary"]');
    // Above are the selectors for Logging in
    logOut: By = By.xpath('//a[text()="Log Out"]');
    //
    myOrders: By = By.xpath('//a[text()="My Orders"]');
    view: By = By.xpath('//a[@class="action primary"]');
    trackOrder: By = By.xpath('//span[text()="Track your order"]');
    // above selectors are for tracking a shippment 
    logo: By = By.xpath('//a[@class="logo"]');
    search: By= By.xpath ('//input[@id="search"]');
    searchButt: By=By.xpath('//span[@class="search-icon-wrapper"]')
    go: By= By.xpath('//button[@class= "action search"]');
    cart: By= By.xpath('//a[@class="action showcart"]');
    deleteItem: By= By.xpath('//a[@class="action action-delete"]');
    //deleteItem might be picky, but I believe it should work. 
    shopButt: By= By.xpath ('//span[text()="Shop"]');
    forumsButt: By = By.xpath('//span[text()="Forums"]');
    supportButt: By =By.xpath('//span[text()="Support"]');
    exploreButt: By = By.xpath('//span[text()="Explore"]');
    camPlus: By = By.xpath ('//span[text()="Cam Plus"]');
    monitoring: By = By.xpath('//span[text()="Home Monitoring"]');
    // above selector is the shop menu button
    camPan: By= By.xpath ('//a[@title="Wyze Cam Pan"]');
    // This is the product that  will be searched for, added to cart and deleted
    addtoCart: By = By.xpath ('//button[@id="product-addtocart-button"]');
    constructor(driver: WebDriver){
      this.driver = driver
    };

async sendKey(elementBy: By, keys,){
  await this.driver.wait(until.elementLocated(elementBy));
  return this.driver.findElement(elementBy).sendKeys(keys);
};
async navigate(){
  await this.driver.get(this.url);
};
async click(elementBy: By){
  await this.driver.wait(until.elementLocated(elementBy));
  return (await this.driver.findElement(elementBy)).click();
};
}

  