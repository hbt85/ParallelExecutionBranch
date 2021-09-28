package stepDefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class StepDefs {
	
	Scenario scenario;
	
	@Before
	public void Setup(Scenario s)
	
	{
		scenario =s;
		
	}
	@Given("I open the browser and navigate to the URL {string}")
	public void i_open_the_browser_and_navigate_to_the_URL(String string) {
		
		//System.setProperty("webdriver.chrome.driver", "//Users//bindu/Desktop//LearningSelenium//chromedriver");
		
		WebDriver driver=new ChromeDriver();
		
		driver.get(string);
		
		scenario.write("Opened the browser with URL: "+ string);
        
	}

}
