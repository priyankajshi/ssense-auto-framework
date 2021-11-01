// ###############################################################
// Page objects for Product List page
// ###############################################################

export class InventoryList {
    addToCartBtn = "#add-to-cart-sauce-labs-backpack";
    productListFrame = "#inventory_container";
    botIcon = "div.peek";
    productPrice = ".inventory_item_price";
    productImage = ".inventory_item_img";
    productLink = "a#item_1_img_link";
}

export const inventoryListPage = new InventoryList();