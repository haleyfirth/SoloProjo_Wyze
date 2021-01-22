import { wyzepageObject } from "./wyzepageObject";
import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
  } from "selenium-webdriver";
  const chromedriver = require("chromedriver");
  const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build()
const wyze = new wyzepageObject(driver);



test("Can Search for Wyze Cam Pan", async()=> {
  await wyze.navigate()
  await wyze.driver.sleep(2000)
  await wyze.click(wyze.searchButt);
  await wyze.sendKey(wyze.search, "Wyze Cam Pan");
  await wyze.click(wyze.go);
  await wyze.driver.sleep(2000);
  await wyze.click(wyze.go);
  console.log("Congrats! You found a bug!")
});
test("Can find Wyze Cam Pan", async()=> {
  await wyze.click(wyze.logo);
  await wyze.click(wyze.shopButt);
  await wyze.click(wyze.camPan);
  await wyze.driver.sleep(2000);
  console.log("Yay! You found the Wyze Cam Pan!");
});
test("Can add Wyze Cam Pan to cart", async()=> {
  await wyze.click(wyze.addtoCart);
  await wyze.driver.sleep(2000);
  await wyze.click(wyze.cart);
  console.log("Girl, youre about to buy a Wyze Cam Pan.");
});
test("Can Delete Cam from Cart", async() =>{
  await wyze.click(wyze.deleteItem);
  await wyze.driver.sleep(3000);
  await wyze.driver.quit();
});







//test("Can Track an Order", async()=> {
 //   await wyze.navigate()
 //   await wyze.click(wyze.loginbutt);
 //   await wyze.sendKey(wyze.email, "testing.haley@gmail.com");
  //  await wyze.sendKey(wyze.password, "Firth1234");
  //  await wyze.click(wyze.loginRobot);
  //  await wyze.click(wyze.signIn);
  //  await wyze.click(wyze.myOrders);
  //  await wyze.click(wyze.view);
   // await wyze.click(wyze.trackOrder);
   // console.log ("Congrats, you logged in and tracked an order"); 

