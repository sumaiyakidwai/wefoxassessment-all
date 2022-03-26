import { By, element } from "protractor";

export class CartPage {
    static get cartItem() {
        return element(By.css('div[data-test="cart-item"]'));
    }
}