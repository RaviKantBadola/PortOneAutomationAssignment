/// <reference types="cypress-xpath" />
/// <reference types="Cypress" />

class paymentPage_PO {
  beforeEveryTestCase() {
    cy.visit("https://www.stage-page.portone.cloud/portOneGlobalPage");
  }

  englishLanguage() {
    cy.get("#mySelect").click();
    cy.contains(" English").click();
    cy.contains("Payment Details").should("have.text", "Payment Details");
  }

  thaiLanguage() {
    cy.get("#mySelect").click();
    cy.contains(" ไทย").click();
    cy.contains("รายละเอียดการจ่ายเงิน").should("have.text","รายละเอียดการจ่ายเงิน");
  }

  setAmount(amount) {
    cy.get("#amount").type(amount);
  }

  setName(name) {
    cy.get("#2R5s8kRxgWmnOa62FsVfHa7mQog").type(name);
  }

  setEmail(email) {
    cy.get("#2R5s8gTLnMViCb1izrbpOb6LpQJ").type(email);
  }

  setPhonecodeIndiaRegion() {
    cy.get(".arrow").click();
    cy.contains("India").click();
  }

  setMobileNumber(number) {
    cy.get("#2R5s8eI56kojIqXqlHsVj4NphfE").type(number);
  }

  setPaymentConformationForYes() {
    cy.get("#2R5s8kFBsF2cD52JTyCjU34Lvcj").click();
    cy.contains("Yes").click();
  }

  setPaymentConformationForNo() {
    cy.get("#2R5s8kFBsF2cD52JTyCjU34Lvcj").click();
    cy.contains("No").click();
  }

  payNowButton() {
    cy.xpath("(//button[contains(text(),'PAY NOW')])[1]").click();
  }

  valueMustBePositiveAlert() {
    cy.xpath("(//div[@class='MuiAlert-message css-1w0ym84'])[1]").should(
      "have.text",
      "Amount must be a positive value"
    );
  }

  invalidAmountAlert() {
    cy.xpath("(//div[@class='MuiAlert-message css-1w0ym84'])[1]").should(
      "have.text",
      "The amount selected is invalid. Amount should be between : 10000.000000 - 20000.000000"
    );
  }

  forInvalidPhoneNumber() {
    cy.xpath("(//p[@class='MuiFormHelperText-root css-1rxyxn6'])[1]").should(
      "have.text",
      "Invalid Phone Number"
    );
  }

  forInvalidEmail() {
    cy.xpath("(//p[normalize-space()='Invalid Email'])[1]").should(
      "have.text",
      "Invalid Email"
    );
  }
  payNowButtonWeb() {
    cy.get("#PayNowButtonWeb").click();
  }

  forBNPLKredivoPaymentMethod() {
    cy.get("#bnpllang").click();
    cy.contains("Kredivo").click();
  }

  finalPaymentMethodForBNPl() {
    cy.origin("https://pay-vn-sandbox.kredivo.com", () => {
      cy.contains("EN").click();
      cy.get("#phone").type(900000000);
      cy.get("#pin").type(447462);
      cy.contains("Log In").click({ force: true });
      cy.contains("Next").click();
      cy.contains("Via SMS to+84-900**0000").click();
      cy.get("#otp").type("4567");
      cy.get("button[type='submit']").click();
      cy.wait(11000);
    });
  }

  creditCardFinalPaymentMethod() {
    cy.get("#creditdebitcardlangDirect").click();
    cy.get("#PayNowButtonWeb").click();
    cy.wait(5000);
    cy.xpath("(//input[@id='card_number'])[1]").click().type("4440000009900010");
    cy.get("#card_name").click().type("Ravi");
    cy.get("#card_date").click().type("03/27");
    cy.get("#cvv").type("123");
    cy.wait(2000);
    cy.xpath("//button[@id='btn-submit']").click({ force: true });
  }

  atmCardFinalPaymentMethod() {
    cy.get("#atmlangDirect").click();
    cy.get("#PayNowButtonWeb").click();
    cy.get("#card-number").type("9704000000000018");
    cy.get("#card-expire").type("03/07");
    cy.get("#card-name").type("NGUYEN VAN A");
    cy.get("#number-phone").type("0903903337");
    cy.get("#btn-pay-card").click();
    cy.wait(10000);
    cy.get("#napasLangEn").click();
    cy.wait(2000);
    cy.get("#napasOtpCode").type("0000");
    cy.get("#napasProcessBtn1").click();
    cy.get("#napasNotificationResult").should("have.text","Invalid OTP (One time password). Please try again.");
  }

  cashOnDeliveryFinalPaymentMethod() {
    cy.get("#codlangDirect").click();
  }

  directBankTransfar() {
    cy.get("#directbanktransferlangDirect").click();
    cy.get("#uploadimg").selectFile(
      "C://Users//user//Downloads//Bank-Statement-Template-1-TemplateLab-1.jpg"
    );
    cy.get("#recipientnameweb").type("Ravi");
    cy.wait(10000);
    cy.get("#PayNowButtonWeb").click();
  }
  Installment() {
    cy.get("#installmentlangDirect").click();
    cy.get("#PayNowButtonWeb").click();
    cy.get("#failpoplang3").click();
  }
 
  languageChangerInEnglish(){
    cy.xpath("(//div[@class='lang-menu'])[2]").click();
    cy.wait(2000)
     cy.contains("English(EN)").click({force:true});

  }
  payButtonAlertCheckoutPage(){
   cy.get("#invalidOptionAlert").should('have.text',"Please select a payment option!")
  }
}

export default paymentPage_PO;
