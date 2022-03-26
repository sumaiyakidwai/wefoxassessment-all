import { WaitHelper } from "../../components/wait-helper";
import { ValidationsHelper } from "../../components/validation-helper";
import { ProductPage } from "./product-page.po";
import { PageHelper } from "../../components/page-helper";
import { ProductPageConstants } from "./product-page.constants";

export class ProductPageHelper {
    static async verifyProductPageLoaded(text: string) {
        await expect(await WaitHelper.waitForElementToBeDisplayed(ProductPage.productHeadingByText(text)))
        .toBe(true, ValidationsHelper.getDisplayedValidation(text));
    }

    static async clickAddToBagButton() {
        await PageHelper.click(ProductPage.addToBagButton);
    }

    static async verifyProductAdded(text: string) {
        await expect(await WaitHelper.waitForElementToBeDisplayed(ProductPage.addToBagModalComponents.modal))
            .toBe(true, ValidationsHelper.getDisplayedValidation(ProductPageConstants.addedToBag + 'modal'));
        const item = await PageHelper.getText(ProductPage.addToBagModalComponents.addedItem);
        await expect(item)
            .toContain(text, ValidationsHelper.getStringContainsValidation(item, text + ProductPageConstants.addedToBag));
    }

    static async clickViewMyBagButton() {
        await PageHelper.click(ProductPage.addToBagModalComponents.viewMyBagButton);
    }
}