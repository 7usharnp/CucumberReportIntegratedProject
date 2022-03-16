$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:FeatureFiles/Login.feature");
formatter.feature({
  "name": "Login Functionality Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify whether the user is able to login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Login to application using username \"tusharnangre5446@gmail.com\" and password \"tushar1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_login_to_application_using_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see that user is able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_that_user_is_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify whether user is able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Login to application using username \"tusharnangre5446@gmail.com\" and password \"tushartest\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_login_to_application_using_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see validation message for incorrect credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_validation_message_for_incorrect_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify whether user is able to login without providing credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Login to application using username \"\" and password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_login_to_application_using_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see validation message for incorrect credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_validation_message_for_incorrect_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify whether user is able to reset the forgotten password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I reset the forgotten password for email \"tusharnangre5446@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_reset_the_forgotten_password_for_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a message informing the user that information related to resetting password have been sent to email address",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_a_message_informing_the_user_that_information_related_to_resetting_password_have_been_sent_to_email_address()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:FeatureFiles/Order.feature");
formatter.feature({
  "name": "Order functionality Scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify whether user is able to place an order",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Two"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Order.i_login_to_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add any product to Bag and checkout",
  "keyword": "When "
});
formatter.match({
  "location": "Order.i_add_any_product_to_Bag_and_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I place an order",
  "keyword": "And "
});
formatter.match({
  "location": "Order.i_place_an_order()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for com.tutorialsninja.automation.framework.Waits$$Lambda$294/0x0000000800390440@3b7c80c6 (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.tutorialsninja.automation.framework.Waits.waitUntil(Waits.java:81)\r\n\tat com.tutorialsninja.automation.framework.Waits.waitUntil(Waits.java:85)\r\n\tat com.tutorialsninja.automation.framework.Elements.click(Elements.java:147)\r\n\tat com.tutorialsninja.automation.pages.CheckoutPage.placeAnOrder(CheckoutPage.java:36)\r\n\tat com.tutorialsninja.automation.stepdef.Order.i_place_an_order(Order.java:47)\r\n\tat ✽.I place an order(classpath:FeatureFiles/Order.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#button\\-payment\\-address\"}\n  (Session info: chrome\u003d99.0.4844.51)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u00277USHAR\u0027, ip: \u0027192.168.173.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:55603}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 96b154aba8808a0fd1959f48c05a7444\n*** Element info: {Using\u003did, value\u003dbutton-payment-address}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat com.tutorialsninja.automation.framework.Elements.isDisplayed(Elements.java:96)\r\n\tat com.tutorialsninja.automation.framework.Elements.lambda$0(Elements.java:147)\r\n\tat com.tutorialsninja.automation.framework.Waits.lambda$0(Waits.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.tutorialsninja.automation.framework.Waits.waitUntil(Waits.java:81)\r\n\tat com.tutorialsninja.automation.framework.Waits.waitUntil(Waits.java:85)\r\n\tat com.tutorialsninja.automation.framework.Elements.click(Elements.java:147)\r\n\tat com.tutorialsninja.automation.pages.CheckoutPage.placeAnOrder(CheckoutPage.java:36)\r\n\tat com.tutorialsninja.automation.stepdef.Order.i_place_an_order(Order.java:47)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see that the order is placed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Order.i_should_see_that_the_order_is_placed_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:FeatureFiles/Register.feature");
formatter.feature({
  "name": "Registration functionality scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify whether the user is able to register into the application by providing all the fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide all the below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Tushar"
      ]
    },
    {
      "cells": [
        "LastName",
        "Nangare-Patil"
      ]
    },
    {
      "cells": [
        "Email",
        "tusharnangre5446@gmail.com"
      ]
    },
    {
      "cells": [
        "Telephone",
        "8380802646"
      ]
    },
    {
      "cells": [
        "Password",
        "tushar1234"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see that the User Account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_has_successfully_created()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Success\"}\n  (Session info: chrome\u003d99.0.4844.51)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u00277USHAR\u0027, ip: \u0027192.168.173.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:56642}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9e2e629fd2251efd8f44f493b6ed6a41\n*** Element info: {Using\u003dlink text, value\u003dSuccess}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getText(Unknown Source)\r\n\tat com.tutorialsninja.automation.framework.Elements.getText(Elements.java:45)\r\n\tat com.tutorialsninja.automation.stepdef.Register.i_should_see_that_the_User_Account_has_successfully_created(Register.java:52)\r\n\tat ✽.I should see that the User Account has successfully created(classpath:FeatureFiles/Register.feature:15)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify whether the user is allowed or not to register on skipping mandatory fields",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see that the user Account is not created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_that_the_user_Account_is_not_created()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see error message informing the user to fill the mandatory fields",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_should_see_error_message_informing_the_user_to_fill_the_mandatory_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify whether the user is able to register into application by opting for Newsletter subscription",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide all the below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Tushar"
      ]
    },
    {
      "cells": [
        "LastName",
        "Nangare-Patil"
      ]
    },
    {
      "cells": [
        "Email",
        "tusharnangre5446@gmail.com"
      ]
    },
    {
      "cells": [
        "Telephone",
        "8380802646"
      ]
    },
    {
      "cells": [
        "Password",
        "tushar1234"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I subscribe to newsletter",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_subscribe_to_newsletter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see that the User Account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_has_successfully_created()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Success\"}\n  (Session info: chrome\u003d99.0.4844.51)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u00277USHAR\u0027, ip: \u0027192.168.173.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:56703}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 709dac16f064fb5dda8f4b505d56be05\n*** Element info: {Using\u003dlink text, value\u003dSuccess}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getText(Unknown Source)\r\n\tat com.tutorialsninja.automation.framework.Elements.getText(Elements.java:45)\r\n\tat com.tutorialsninja.automation.stepdef.Register.i_should_see_that_the_User_Account_has_successfully_created(Register.java:52)\r\n\tat ✽.I should see that the User Account has successfully created(classpath:FeatureFiles/Register.feature:37)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify whether the user is restricted from creating a duplicate account",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide all the below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Tushar"
      ]
    },
    {
      "cells": [
        "LastName",
        "Nangare-Patil"
      ]
    },
    {
      "cells": [
        "Email",
        "tusharnangre5446@gmail.com"
      ]
    },
    {
      "cells": [
        "Telephone",
        "8380802646"
      ]
    },
    {
      "cells": [
        "Password",
        "tushar1234"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see user is restricted from creating duplicate account",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_user_is_restricted_from_creating_duplicate_account()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027alert alert-danger alert-dismissible\u0027]\"}\n  (Session info: chrome\u003d99.0.4844.51)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u00277USHAR\u0027, ip: \u0027192.168.173.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:56735}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3f45b3fa0c648a98d0dad46ee9f98a72\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027alert alert-danger alert-dismissible\u0027]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getText(Unknown Source)\r\n\tat com.tutorialsninja.automation.framework.Elements.getText(Elements.java:45)\r\n\tat com.tutorialsninja.automation.stepdef.Register.i_should_see_user_is_restricted_from_creating_duplicate_account(Register.java:75)\r\n\tat ✽.I should see user is restricted from creating duplicate account(classpath:FeatureFiles/Register.feature:51)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:FeatureFiles/Search.feature");
formatter.feature({
  "name": "Search functionality feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify whether the User is able to search for products",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for a product \"Samsung SyncMaster 941BW\"",
  "keyword": "When "
});
formatter.match({
  "location": "Search.i_search_for_a_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the product in the search resultsil address",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.i_should_see_the_product_in_the_search_resultsil_address()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify whether user is informed when product being searched is not available",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for a product \"Apple iphone\"",
  "keyword": "When "
});
formatter.match({
  "location": "Search.i_search_for_a_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"There is no product that matches the search criteria.\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.i_should_see_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});