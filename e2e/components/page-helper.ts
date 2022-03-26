import { WaitHelper } from "./wait-helper";
import { browser, ElementFinder } from "protractor";

export class PageHelper {
    static DEFAULT_TIMEOUT = 25000;

    /**
     * Get text of element
     * @param elem element to get text from
     */
    static async getText(elem: ElementFinder, waitForElement = false) {
        if (waitForElement) {
            await WaitHelper.waitForElementToBeDisplayed(elem);
        }
        const text = await elem.getAttribute('innerText');
        return text.trim();
    }

    /**
     * Click on any element
     * @param target element to be clicked at
     */
    static async click(target: ElementFinder) {
        await WaitHelper.waitForElementToBeClickable(target);
        return await target.click();
    }

    /**
     * Maximize browser
     */
    public static async maximizeBrowser() {
        try {
            await browser.driver.manage().window().maximize();
        } catch (e) {
            // catch error if window cannot be maximised
        }
    }
}