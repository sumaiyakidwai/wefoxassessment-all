import { By, element } from "protractor";

export class CartPage {
    static cartItemByText(text: string) {
        return element(By.xpath(`//div[@data-test="cart-item" and contains(.,"${text}")]`));
    }
}