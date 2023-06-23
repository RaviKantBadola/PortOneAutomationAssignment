import { it } from "mocha";
import paymentPage_PO from "../support/PageObjects/paymentPage_P0";

describe("Payment Page Test suite", () => {
  const Paymentpage = new paymentPage_PO();
  beforeEach(() => {
    Paymentpage.beforeEveryTestCase();
  });

  it("Changing language in English, TC-02", () => {
    Paymentpage.englishLanguage();
  });

  it("Changing language in Thai,TC-02", () => {
    Paymentpage.thaiLanguage();
  });

  it.only("Validating amount for valid data,TC-04", () => {
    cy.fixture('infoData').then((data)=>{
      Paymentpage.englishLanguage();
      Paymentpage.setAmount(data.amount);
      Paymentpage.setName(data.name);
      Paymentpage.setEmail(data.email);
      Paymentpage.setPhonecodeIndiaRegion();
      Paymentpage.setMobileNumber(data.phonenumber);
      Paymentpage.setPaymentConformationForYes();
      Paymentpage.forcheckingthecolor();
      Paymentpage.payNowButton();
      
    })
    
  });

  it("Validating amount for invalid data,TC-06", () => {
    cy.fixture('infoData').then((data)=>{
    Paymentpage.englishLanguage();
    Paymentpage.setAmount(data.minAmount);
    Paymentpage.setName(data.name);
    Paymentpage.setEmail(data.email);
    Paymentpage.setPhonecodeIndiaRegion();
    Paymentpage.setMobileNumber(data.phonenumber);
    Paymentpage.setPaymentConformationForYes();
    Paymentpage.payNowButton();
    Paymentpage.valueMustBePositiveAlert();
    })
  });

  it("Validating amount for invalid data,TC-06", () => {
    cy.fixture('infoData').then((data)=>{
    Paymentpage.englishLanguage();
    Paymentpage.setAmount(data.maxAmount);
    Paymentpage.setName(data.name);
    Paymentpage.setEmail(data.email);
    Paymentpage.setPhonecodeIndiaRegion();
    Paymentpage.setMobileNumber(data.phonenumber);
    Paymentpage.setPaymentConformationForYes();
    Paymentpage.payNowButton();
    });
  });

  it("Validating name for invalid data,TC-08", () => {
    cy.fixture('infoData').then((data)=>{
    Paymentpage.englishLanguage();
    Paymentpage.setAmount(data.amount);
    Paymentpage.setName(data.numericName);
    Paymentpage.setEmail(data.email);
    Paymentpage.setPhonecodeIndiaRegion();
    Paymentpage.setMobileNumber(data.phonenumber);
    Paymentpage.setPaymentConformationForYes();
    Paymentpage.payNowButton();
    });
  });

  it("Validating phone number for invalid data,TC-10", () => {
    cy.fixture('infoData').then((data)=>{
    Paymentpage.englishLanguage();
    Paymentpage.setAmount(data.amount);
    Paymentpage.setName(data.name);
    Paymentpage.setEmail(data.email);
    Paymentpage.setPhonecodeIndiaRegion();
    Paymentpage.setMobileNumber(data.wrongPhoneNumber);
    Paymentpage.forInvalidPhoneNumber();
    });
  });

  it("Validating email for invalid data TC-12", () => {
    cy.fixture('infoData').then((data)=>{
    Paymentpage.englishLanguage();
    Paymentpage.setAmount(data.amount);
    Paymentpage.setName(data.name);
    Paymentpage.setEmail(data.wrongEmail);
    Paymentpage.forInvalidEmail();
    });
  });

  it("Validating for payment conformation TC-14", () => {
    cy.fixture('infoData').then((data)=>{
    Paymentpage.englishLanguage();
    Paymentpage.setAmount(data.amount);
    Paymentpage.setName(data.name);
    Paymentpage.setEmail(data.email);
    Paymentpage.setPhonecodeIndiaRegion();
    Paymentpage.setMobileNumber(data.phonenumber);
    Paymentpage.setPaymentConformationForNo();
    Paymentpage.payNowButton();
    })
  });

  it("Validating the Pay Now Button TC-16", () => {
    cy.fixture('infoData').then((data)=>{
    Paymentpage.englishLanguage();
    Paymentpage.setAmount(data.amount);
    Paymentpage.setName(data.name);
    Paymentpage.setEmail(data.email);
    Paymentpage.setPhonecodeIndiaRegion();
    Paymentpage.setMobileNumber(data.phonenumber);
    Paymentpage.setPaymentConformationForYes();
    Paymentpage.payNowButton();
    });
  });

  it("Validating the BNPL payment method TC-20", () => {
    cy.fixture('infoData').then((data)=>{
    Paymentpage.englishLanguage();
    Paymentpage.setAmount(data.amount);
    Paymentpage.setName(data.name);
    Paymentpage.setEmail(data.email);
    Paymentpage.setPhonecodeIndiaRegion();
    Paymentpage.setMobileNumber(data.phonenumber);
    Paymentpage.setPaymentConformationForYes();
    Paymentpage.payNowButton();
    Paymentpage.forBNPLKredivoPaymentMethod();
    Paymentpage.payNowButtonWeb();
    Paymentpage.finalPaymentMethodForBNPl();
    });
  });

  it("Validating credit card method Tc-22", () => {
    cy.fixture('infoData').then((data)=>{
    Paymentpage.englishLanguage();
    Paymentpage.setAmount(data.amount);
    Paymentpage.setName(data.name);
    Paymentpage.setEmail(data.email);
    Paymentpage.setPhonecodeIndiaRegion();
    Paymentpage.setMobileNumber(data.phonenumber);
    Paymentpage.setPaymentConformationForYes();
    Paymentpage.payNowButton();
    Paymentpage.creditCardFinalPaymentMethod();
    });
  });

  it("Validating atm card method TC-24", () => {
    cy.fixture('infoData').then((data)=>{
    Paymentpage.englishLanguage();
    Paymentpage.setAmount(data.amount);
    Paymentpage.setName(data.name);
    Paymentpage.setEmail(data.email);
    Paymentpage.setPhonecodeIndiaRegion();
    Paymentpage.setMobileNumber(data.phonenumber);
    Paymentpage.setPaymentConformationForYes();
    Paymentpage.payNowButton();
    Paymentpage.atmCardFinalPaymentMethod();
    });
  });
  it("Validating DOC method TC_26", () => {
    cy.fixture('infoData').then((data)=>{
    Paymentpage.englishLanguage();
    Paymentpage.setAmount(data.amount);
    Paymentpage.setName(data.name);
    Paymentpage.setEmail(data.email);
    Paymentpage.setPhonecodeIndiaRegion();
    Paymentpage.setMobileNumber(data.phonenumber);
    Paymentpage.setPaymentConformationForYes();
    Paymentpage.payNowButton();
    Paymentpage.cashOnDeliveryFinalPaymentMethod();
    Paymentpage.payNowButtonWeb();
    });
  });

  it("Validating Direct Bank Transfer method TC_28", () => {
    cy.fixture('infoData').then((data)=>{
    Paymentpage.englishLanguage();
    Paymentpage.setAmount(data.amount);
    Paymentpage.setName(data.name);
    Paymentpage.setEmail(data.email);
    Paymentpage.setPhonecodeIndiaRegion();
    Paymentpage.setMobileNumber(data.phonenumber);
    Paymentpage.setPaymentConformationForYes();
    Paymentpage.payNowButton();
    Paymentpage.directBankTransfar();
    });
  });
  it("Validating installment method TC-30", () => {
    cy.fixture('infoData').then((data)=>{
    Paymentpage.englishLanguage();
    Paymentpage.setAmount(data.amount);
    Paymentpage.setName(data.name);
    Paymentpage.setEmail(data.email);
    Paymentpage.setPhonecodeIndiaRegion();
    Paymentpage.setMobileNumber(data.phonenumber);
    Paymentpage.setPaymentConformationForYes();
    Paymentpage.payNowButton();
    Paymentpage.Installment();
    })

   
  });
  it('Just clicking on the Pay button without selecting any payment method', () => {
    cy.fixture('infoData').then((data)=>{
      Paymentpage.englishLanguage();
      Paymentpage.setAmount(data.amount);
      Paymentpage.setName(data.name);
      Paymentpage.setEmail(data.email);
      Paymentpage.setPhonecodeIndiaRegion();
      Paymentpage.setMobileNumber(data.phonenumber);
      Paymentpage.setPaymentConformationForYes();
      Paymentpage.payNowButton();
      Paymentpage.payNowButtonWeb();
      Paymentpage.languageChangerInEnglish();
      Paymentpage.payButtonAlertCheckoutPage();
  });
});
  


});
