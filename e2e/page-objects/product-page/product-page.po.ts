import { By, element } from "protractor";

export class ProductPage {
    static productHeadingByText(text: string) {
        return element(By.xpath(`//h1[@data-test="product-overview-name" and contains(.,"${text}")]`));
    }

    static get addToBagButton() {
        return element(By.css('button[data-test="add-to-bag"]'));
    }

    static get addToBagModalComponents() {
        return {
            get modal() {
                return element(By.css('div[data-test="add-to-bag-modal"]'));
            },
            get addedItem() {
                return element(By.css('div[data-test="added-item"]'));
            },
            get viewMyBagButton() {
                return element(By.css('a[data-test="view-my-bag"]'));
            },
        };
    }
}