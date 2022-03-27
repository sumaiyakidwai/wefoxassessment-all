import { browser } from "protractor";
import { CartPageConstants } from "./cart-page.constants";
import { ValidationsHelper } from "../../components/validation-helper";
import { CartPage } from "./cart-page.po";
import { WaitHelper } from "../../components/wait-helper";

export class CartPageHelper {
    static async verifyCartPageLoaded() {
        const currentUrl = await browser.getCurrentUrl();
        await expect(currentUrl)
            .toContain(CartPageConstants.cartUrl, ValidationsHelper.getUrlContainsValidation(CartPageConstants.cartUrl));
    }

    static async verifyCartContainsItem(text: string) {
       await expect(await WaitHelper.waitForElementToBeDisplayed(CartPage.cartItemByText(text)))
            .toBe(true, ValidationsHelper.getDisplayedValidation(text));
    }
}