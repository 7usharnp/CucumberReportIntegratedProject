package com.tutorialsninja.automation.pages;

import java.util.Map;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

import io.cucumber.datatable.DataTable;



public class RegisterPage {
	
	@FindBy(id="input-firstname")
	public static WebElement firstName;

	@FindBy(id="input-lastname")
	public static WebElement lastName;
	
	@FindBy(id="input-email")
	public static WebElement email;
	
	
	@FindBy(id="input-telephone")
	public static WebElement telephone;
	
	
	@FindBy(id="input-password")
	public static WebElement password;
	
	@FindBy(id="input-confirm")
	public static WebElement confirmPassword;
	
	@FindBy(name = "agree")
	public static WebElement privacyPolicy;
	
    @FindBy(xpath="//input[@value='Continue']")
    public static WebElement continueBtn;
	
   @FindBy(css = "input[id='input-firstname']+div")
   public static WebElement validationMsg;
   
   @FindBy(css="input[value='1'][name='newsletter']")
   public static WebElement yesToNewsletter;
    
   @FindBy(xpath="//div[@class='alert alert-danger alert-dismissible']")
   public static WebElement duplicationMsg;
   
 
   
	public RegisterPage() {
		PageFactory.initElements(Base.driver, this);
	}
	
	public static void enterAllDetails(DataTable dataTable, String detailsType) {

		Map<String,String>map=dataTable.asMap(String.class, String.class);
		Elements.TypeText(RegisterPage.firstName, map.get("FirstName"));
		Elements.TypeText(RegisterPage.lastName, map.get("LastName"));
		Elements.TypeText(RegisterPage.telephone, map.get("Telephone"));
		Elements.TypeText(RegisterPage.password, map.get("Password"));
		Elements.TypeText(RegisterPage.confirmPassword, map.get("Password"));
		
		if(detailsType.equalsIgnoreCase("duplicate")) {
			Elements.TypeText(RegisterPage.email, map.get("Email"));
		}else {
			Elements.TypeText(RegisterPage.email, System.currentTimeMillis()+map.get("Email"));

		}
		
	}}

	
	

