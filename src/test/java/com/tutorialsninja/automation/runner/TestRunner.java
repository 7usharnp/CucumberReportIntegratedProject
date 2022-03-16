package com.tutorialsninja.automation.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

	
@RunWith(Cucumber.class)
@CucumberOptions(features = { "classpath:FeatureFiles/" }, glue = {
		"classpath:com.tutorialsninja.automation.stepdef" }, plugin = { "pretty", "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"}, monochrome = true  )
public class TestRunner {

}
