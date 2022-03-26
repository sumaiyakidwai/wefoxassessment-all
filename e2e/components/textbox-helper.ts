import { browser, ElementFinder, protractor } from 'protractor';
import { WaitHelper } from './wait-helper';

export class TextBoxHelper {
    /**
     * Clears the existing text from an input elements
     * @param {ElementFinder} locator
     */
    static async clearText(locator: ElementFinder) {
        let ctrl = protractor.Key.CONTROL;

        if (browser.platform && browser.platform.indexOf('Mac')) {
            ctrl = protractor.Key.COMMAND;
        }
        const command = protractor.Key.chord(ctrl, 'a') + protractor.Key.BACK_SPACE;
        await locator.sendKeys(command);
        await locator.clear();
    }

    /**
     * Send Keys to an input elements once it becomes available
     * @param {ElementFinder} locator for element
     * @param {string} value to be sent
     * @param {boolean} sendEnter for sending an enter key
     * @param {boolean} clearText for removing any existing text in input
     */
    static async sendKeys(locator: ElementFinder,
                          value: string,
                          sendEnter = false, clearText = true) {
        await WaitHelper.waitForElementToBeDisplayed(locator);
        if (clearText) {
            await this.clearText(locator);
        }
        // On IE, text is sometimes not well sent, this is a workaround
        await locator.sendKeys(value);
        if (sendEnter) {
            await locator.sendKeys(protractor.Key.ENTER);
        }
    }
}
