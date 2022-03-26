export class StepLogger {

    /**
     * Method to print execution step
     * @param stepName the text to be printed
     */
    public static step(stepName: string) {
        console.log(`*Step* - #${stepName}`);
    }

    /**
     * Method to print the verification text
     * @param verificationDescription the text to be printed
     */
    public static verification(verificationDescription: string) {
        console.log(`*Verification* - #${verificationDescription}`);
    }
}
