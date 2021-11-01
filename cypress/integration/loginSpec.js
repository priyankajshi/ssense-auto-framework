import { loginPage } from "../support/page_objects/loginPage";

describe("Login Page Tests", function () {
    before(function () {
        cy.fixture("login").then((data) => {
            this.data = data;
        });
    });

    it("Login to the system", function () {
        cy.visit(Cypress.config().baseUrl)
            .title()
            .should("contain", this.data.LoginPageTitle)
            .get(loginPage.botIcon)
            .should("be.visible")
            .get(loginPage.username)
            .type(Cypress.env("USERNAME"))
            .get(loginPage.password)
            .type(Cypress.env("PASSWORD"), {log: false})
            .get(loginPage.loginBtn)
            .click()
            .url()
            .should("contain", "inventory.html");
        ;
    })
})