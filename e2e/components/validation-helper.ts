export class ValidationsHelper {

    /**
     * Method to return displayed validation text
     * @param name name of the element displayed
     */
    static getDisplayedValidation(name: string) {
        return `${name} should be displayed`;
    }

    /**
     * Method to return not displayed validation text
     * @param name name of the element which is not displayed
     */
    static getNotDisplayedValidation(name: string) {
        return `${name} should not be displayed`;
    }

    /**
     * Method to return text for the difference in expected and actual value
     * @param actualValue the string extracted from the application
     * @param expectedValue expected string
     */
    static getStringContainsValidation(actualValue: string, expectedValue: string) {
        return `${actualValue} should contain ${expectedValue}`;
    }

    /**
     * Method to return text contains validation text for url
     * @param text text expected in the current url
     */
    static getUrlContainsValidation(text: string) {
        return `${text} should be present in the current url`;
    }
}
