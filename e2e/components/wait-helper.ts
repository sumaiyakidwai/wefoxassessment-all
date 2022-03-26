import { browser, ElementFinder, protractor } from 'protractor';
import { PageHelper } from "./page-helper";

export class WaitHelper {
    static readonly EC = protractor.ExpectedConditions;

    /**
     * Wait for an element to display
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    static async waitForElementToBeDisplayed(targetElement: ElementFinder,
                                             timeout = PageHelper.DEFAULT_TIMEOUT,
                                             message = 'Element should be visible') {
        return await browser.wait(this.EC.visibilityOf(targetElement),
            timeout,
            targetElement.locator().toString() + message)
            .then(() => true, () => false);
    }

    /**
     * Wait for an element to hide
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     * @returns {any}
     */
    static async waitForElementToBeHidden(targetElement: ElementFinder,
                                          timeout = PageHelper.DEFAULT_TIMEOUT,
                                          message = 'Element should not be visible') {
        return await browser.wait(this.EC.invisibilityOf(targetElement),
            timeout,
            targetElement.locator().toString() + message);
    }

    /**
     * Wait for an element to become clickable
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    static async waitForElementToBeClickable(targetElement: ElementFinder,
                                             timeout = PageHelper.DEFAULT_TIMEOUT,
                                             message = 'Element not clickable') {
        return await browser.wait(this.EC.elementToBeClickable(targetElement),
            timeout,
            targetElement.locator().toString() + message);
    }
}
