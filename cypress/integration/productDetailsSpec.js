import { loginPage } from "../support/page_objects/loginPage";
import { inventoryListPage } from "../support/page_objects/inventoryListPage";
import {inventoryDetailsPage} from "../support/page_objects/inventoryDetailsPage";

describe("Product details Tests", function () {
    it("Verify product details page", function () {
        cy.visit(Cypress.config().baseUrl)
            .get(loginPage.username).type(Cypress.env("USERNAME"))
            .get(loginPage.password).type(Cypress.env("PASSWORD"), {log: false})
            .get(loginPage.loginBtn).click()
            .get(inventoryListPage.productListFrame).should("be.visible")
            .get(inventoryListPage.productLink).click()
            .url().should("contain", "inventory-item")
            .get(inventoryDetailsPage.productDetailsFrame).should("be.visible")
            .get(inventoryDetailsPage.productImage).should("be.visible")
            .get(inventoryDetailsPage.productName).should("be.visible").should("contain", "Sauce Labs Bolt T-Shirt")
            .get(inventoryDetailsPage.productPrice).should("be.visible").should("contain", "15.99")
            .get(inventoryDetailsPage.addToCartBtn).should("be.visible").click()
            .get(inventoryDetailsPage.removeFromCartBtn).should("be.visible")
            .get(inventoryDetailsPage.backToProductBtn).should("be.visible")
            .click()
            .should("contain", "inventory.html");
        ;
    })
})