package com.tutorialsninja.automation.pages;

import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;

public class MyAccountPage {
		
    
	public MyAccountPage() {
		PageFactory.initElements(Base.driver, this);
	}

}
