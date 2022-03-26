import { By, element } from "protractor";

export class HomePage {

    static get pageTitle() {
        return element(By.css('title[data-test="title-tag"]'));
    }

    static get continueButton() {
        return element(By.css('button[data-test="age-gate-grown-up-cta"]'));
    }

    static get acceptAllCookies() {
        return element(By.css('button[data-test="cookie-accept-all"]'));
    }

    static get searchComponents() {
        return {
            get searchIcon() {
                return element(By.css('button[data-test="search-input-button"]'));
            },
            get searchField() {
                return element(By.name('search'));
            },
            get searchSuggestion() {
                return element(By.css('a[class*="TextSuggestion"]'));
            },
        };
    }

    static searchSuggestionByText(text: string) {
        return element(By.xpath(`//a[@data-test="product-suggestion-link" and contains(.,"${text}")]`));
    }
}