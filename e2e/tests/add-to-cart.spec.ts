import { PageHelper } from "../components/page-helper";
import { HomePageHelper } from "../page-objects/home-page/home-page.helper";
import { StepLogger } from "../logger/step-logger";
import { HomePageConstants } from "../page-objects/home-page/home-page.constants";
import { ProductPageHelper } from "../page-objects/product-page/product-page.helper";
import { CartPageHelper } from "../page-objects/cart-page/cart-page.helper";

beforeAll(async () => {
    await PageHelper.maximizeBrowser();
});

describe('Wefox-Assessment test', () => {
    it('should search for BB-8 product and add it to cart', async() => {

        StepLogger.step('Go to the Lego home page');
        await HomePageHelper.goTo();
        StepLogger.step('Click continue to shop button');
        await HomePageHelper.clickContinueButton();
        StepLogger.step('Click Accept All Cookies button');
        await HomePageHelper.clickAcceptAllCookies();
        StepLogger.verification('Verify page is loaded');
        await HomePageHelper.verifyHomePageLoaded();

        StepLogger.step('Click on the search icon');
        await HomePageHelper.clickSearchIcon();
        StepLogger.verification('Verify search field is displayed');
        await HomePageHelper.verifySearchField();

        StepLogger.step('Type 3 characters for search i.e.' + HomePageConstants.bbDash);
        await HomePageHelper.sendKeysToSearchField(HomePageConstants.bbDash);
        StepLogger.verification('Verify search suggestions do not appear');
        await HomePageHelper.verifySearchSuggestionNotDisplayed(HomePageConstants.bbDash);

        StepLogger.step('Type 4 characters for search i.e.' + HomePageConstants.bbEight);
        await HomePageHelper.sendKeysToSearchField(HomePageConstants.bbEight);
        StepLogger.verification('Verify search results contains ' + HomePageConstants.bbEight);
        await HomePageHelper.verifySearchSuggestionDisplayed(HomePageConstants.bbEight);

        StepLogger.step('Click on the product: ' + HomePageConstants.bbEightProduct);
        await HomePageHelper.clickOnSearchSuggestionContainingText(HomePageConstants.bbEightProduct);
        StepLogger.verification('Verify procuct page is opened');
        await ProductPageHelper.verifyProductPageLoaded(HomePageConstants.bbEightProduct);

        StepLogger.step('Add product to cart');
        await ProductPageHelper.clickAddToBagButton();
        StepLogger.verification(`Verify product ${HomePageConstants.bbEightProduct} has successfully been added to cart`);
        await ProductPageHelper.verifyProductAdded(HomePageConstants.bbEightProduct);

        StepLogger.step('Open cart');
        await ProductPageHelper.clickViewMyBagButton();
        StepLogger.verification('Verify Cart is opened');
        await CartPageHelper.verifyCartPageLoaded();
        StepLogger.verification(`Verify product ${HomePageConstants.bbEightProduct} is present in the cart`);
        await CartPageHelper.verifyCartContainsItem(HomePageConstants.bbEightProduct);
    })
});