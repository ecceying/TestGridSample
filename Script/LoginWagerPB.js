﻿function LoginWagerPB()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://gasc1playdigital.dev.igt.com/en-us/home.html");
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkLoginpopup' link.
  Aliases.browser.pageGeorgiaLottery.linkLoginpopup.Click();
  //Clicks the 'emailinputEmailAddress' control.
  Aliases.browser.pageGeorgiaLottery.linkLoginpopup.formLogin.emailinputEmailAddress.Click();
  //Sets the text 'mh06@georgialotto.org' in the 'emailinputEmailAddress' text editor.
  Aliases.browser.pageGeorgiaLottery.linkLoginpopup.formLogin.emailinputEmailAddress.SetText("mh06@georgialotto.org");
  //Enters '[Tab]' in the 'emailinputEmailAddress' object.
  Aliases.browser.pageGeorgiaLottery.linkLoginpopup.formLogin.emailinputEmailAddress.Keys("[Tab]");
  //Sets the text Project.Variables.Password1 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageGeorgiaLottery.linkLoginpopup.formLogin.passwordboxPassword.SetText(Project.Variables.Password1);
  //Sets the text Project.Variables.Password2 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageGeorgiaLottery.linkLoginpopup.formLogin.passwordboxPassword.SetText(Project.Variables.Password2);
  //Sets the text Project.Variables.Password3 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageGeorgiaLottery.linkLoginpopup.formLogin.passwordboxPassword.SetText(Project.Variables.Password3);
  //Clicks the 'buttonSignIn' button.
  Aliases.browser.pageGeorgiaLottery.linkLoginpopup.formLogin.buttonSignIn.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageGeorgiaLottery.Wait();
  //Clicks the 'linkBuyNow' link.
  Aliases.browser.pageGeorgiaLottery.navGeorgiaLottery.textnodeGames.textnodeBuyNow.linkBuyNow.Click();
  //Clicks the 'linkPowerball' link.
  Aliases.browser.pageGeorgiaLottery.navGeorgiaLottery.textnodeGames.textnodeBuyNow2.linkPowerball.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pagePowerball.Wait();
  //Clicks the 'buttonQuickpickall' button.
  Aliases.browser.pagePowerball.formInternetwageringPwrball.buttonQuickpickall.ClickButton();
  //Clicks the 'buttonBuyNow' button.
  Aliases.browser.pagePowerball.formInternetwageringPwrball.buttonBuyNow.ClickButton();
  //Checks whether the 'contentText' property of the Aliases.browser.pagePowerball.textnodeGameName object equals 'Game Name:'.
  aqObject.CheckProperty(Aliases.browser.pagePowerball.textnodeGameName, "contentText", cmpEqual, "Game Name:");
  //Checks whether the 'contentText' property of the Aliases.browser.pagePowerball.panelGameName object equals 'Game Name:
  //Powerball'.
  aqObject.CheckProperty(Aliases.browser.pagePowerball.panelGameName, "contentText", cmpEqual, "Game Name:\nPowerball");
  //Clicks the 'linkConfirmbtn' link.
  Aliases.browser.pagePowerball.linkConfirmbtn.Click();
}