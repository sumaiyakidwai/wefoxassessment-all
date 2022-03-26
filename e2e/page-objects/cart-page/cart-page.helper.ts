import { browser } from "protractor";
import { CartPageConstants } from "./cart-page.constants";
import { ValidationsHelper } from "../../components/validation-helper";
import { PageHelper } from "../../components/page-helper";
import { CartPage } from "./cart-page.po";

export class CartPageHelper {
    static async verifyCartPageLoaded() {
        const currentUrl = await browser.getCurrentUrl();
        await expect(currentUrl)
            .toContain(CartPageConstants.cartUrl, ValidationsHelper.getUrlContainsValidation(CartPageConstants.cartUrl));
    }

    static async verifyCartContainsItem(text: string) {
        const item = await PageHelper.getText(CartPage.cartItem, true);
        await expect(item)
            .toContain(text, ValidationsHelper.getStringContainsValidation(item, text));
    }
}