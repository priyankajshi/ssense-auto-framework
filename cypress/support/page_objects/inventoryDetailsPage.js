// ###############################################################
// Page objects for inventory details page
// ###############################################################

export class InventoryDetails {
    addToCartBtn = "#add-to-cart-sauce-labs-bolt-t-shirt";
    productName = ".inventory_details_name";
    productDetailsFrame = ".inventory_details";
    backToProductBtn = "#back-to-products";
    productPrice = ".inventory_details_price";
    productImage = ".inventory_details_img";
    removeFromCartBtn = "#remove-sauce-labs-bolt-t-shirt";
}

export const inventoryDetailsPage = new InventoryDetails();