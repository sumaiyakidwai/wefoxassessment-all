import { TextBoxHelper } from "../../components/textbox-helper";
import { HomePageConstants } from "./home-page.constants";
import { PageHelper } from "../../components/page-helper";
import { HomePage } from "./home-page.po";
import { ValidationsHelper } from "../../components/validation-helper";
import { browser } from "protractor";
import { WaitHelper } from "../../components/wait-helper";

export class HomePageHelper {

    static async goTo() {
        await browser.waitForAngularEnabled(false);
        return browser.get(browser.params.baseUrl, PageHelper.DEFAULT_TIMEOUT);
    }

    /**
     * Verify that homePage has loaded and has text
     */
    static async verifyHomePageLoaded() {
        const title = await PageHelper.getText(HomePage.pageTitle);
        await expect(title)
            .toContain(HomePageConstants.title, ValidationsHelper.getStringContainsValidation(title, HomePageConstants.title));
    }

    static async clickSearchIcon() {
        await PageHelper.click(HomePage.searchComponents.searchIcon);
    }

    static async clickContinueButton() {
        await PageHelper.click(HomePage.continueButton);
    }

    static async clickAcceptAllCookies() {
        await PageHelper.click(HomePage.acceptAllCookies);
    }

    static async verifySearchField() {
        await expect(await WaitHelper.waitForElementToBeDisplayed(HomePage.searchComponents.searchField))
            .toBe(true, ValidationsHelper.getDisplayedValidation('Search field'));
    }

    static async sendKeysToSearchField(textToType: string) {
        await TextBoxHelper.sendKeys(HomePage.searchComponents.searchField, textToType);
    }

    static async verifySearchSuggestionNotDisplayed(text: string) {
        await expect(await WaitHelper.waitForElementToBeHidden(HomePage.searchComponents.searchSuggestion))
            .toBe(true, ValidationsHelper.getNotDisplayedValidation('Search suggestion: ' + text));
    }

    static async verifySearchSuggestionDisplayed(text: string) {
        await expect(await WaitHelper.waitForElementToBeDisplayed(HomePage.searchComponents.searchSuggestion))
            .toBe(true, ValidationsHelper.getDisplayedValidation('Search suggestion: ' + text));
        await expect(await PageHelper.getText(HomePage.searchComponents.searchSuggestion))
            .toContain(text, ValidationsHelper.getDisplayedValidation('Search suggestion: ' + text));
    }

    static async clickOnSearchSuggestionContainingText(text: string) {
        await PageHelper.click(HomePage.searchSuggestionByText(text));
    }
}