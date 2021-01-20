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

