$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/FeatureFile1.feature");
formatter.feature({
  "name": "Navigate to google.com",
  "description": "  I want to Navigate to google.com",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I want to Navigate to google.com",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the browser and navigate to the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.i_open_the_browser_and_navigate_to_the_URL(String)"
});
formatter.write("Opened the browser with URL: https://www.google.com/");
formatter.result({
  "status": "passed"
});
formatter.uri("features/FeatureFile2.feature");
formatter.feature({
  "name": "Navigate to reddit.com",
  "description": "  I want to Navigate to reddit.com",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I want to Navigate to reddit.com",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the browser and navigate to the URL \"https://www.reddit.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.i_open_the_browser_and_navigate_to_the_URL(String)"
});
formatter.write("Opened the browser with URL: https://www.reddit.com/");
formatter.result({
  "status": "passed"
});
formatter.uri("features/FeatureFile3.feature");
formatter.feature({
  "name": "Navigate to youtube.com",
  "description": "  I want to Navigate to youtube.com",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I want to Navigate to youtube.com",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the browser and navigate to the URL \"https://www.youtube.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.i_open_the_browser_and_navigate_to_the_URL(String)"
});
formatter.write("Opened the browser with URL: https://www.youtube.com/");
formatter.result({
  "status": "passed"
});
formatter.uri("features/FeatureFile4.feature");
formatter.feature({
  "name": "Navigate to amazon.com",
  "description": "  I want to Navigate to amazon.com",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I want to Navigate to amazon.com",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the browser and navigate to the URL \"https://www.amazon.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.i_open_the_browser_and_navigate_to_the_URL(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: Unable to receive message from renderer\n  (Session info: chrome\u003d93.0.4577.63)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027himas-MBP\u0027, ip: \u0027fe80:0:0:0:1038:36fd:26c9:1738%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002716.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.63, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: /var/folders/xr/prx040jj1t9...}, goog:chromeOptions: {debuggerAddress: localhost:60004}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edc86c5a02d7c5d55da804345e75f195\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat stepDefs.StepDefs.i_open_the_browser_and_navigate_to_the_URL(StepDefs.java:28)\n\tat ✽.I open the browser and navigate to the URL \"https://www.amazon.com/\"(features/FeatureFile4.feature:5)\n",
  "status": "failed"
});
});