import { loginPage } from "../support/page_objects/loginPage";
import { inventoryListPage } from "../support/page_objects/inventoryListPage";

describe("Product List Tests", function () {
    before(function () {
        cy.fixture("productList").then((data) => {
            this.data = data;
        });
    });

    it("Verify product list page", function () {
        cy.visit(Cypress.config().baseUrl)
            .get(loginPage.username).type(Cypress.env("USERNAME"))
            .get(loginPage.password).type(Cypress.env("PASSWORD"), {log: false})
            .get(loginPage.loginBtn).click()
            .get(inventoryListPage.productListFrame).should("be.visible")
            .get(inventoryListPage.addToCartBtn).should("be.visible")
            .get(inventoryListPage.botIcon).should("be.visible")
            .get(inventoryListPage.productImage).should("be.visible")
            .get(inventoryListPage.productPrice).should("be.visible")
            .get(inventoryListPage.productLink).click()
            .url().should("contain", "inventory-item.html");
        ;
    })
})