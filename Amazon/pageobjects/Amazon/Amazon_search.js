class Search_page{
    get searchBar() {
        return $("//input[@placeholder='Search Amazon.in']");
    }
    get submitButton() {
        return $("//input[@type='submit']");
    }
    get addToCartButton() {
        return $("//input[@id='add-to-cart-button' and @title='Add to Shopping Cart' and @type='submit']");
    }
    get addedToCart(){
        return $('//*[@id="attach-sidesheet-view-cart-button-announce"]')
    }

    async searchForProduct(product) {
        await this.searchBar.waitForDisplayed();
        await this.searchBar.click();
        await this.searchBar.setValue(product);
        await this.submitButton.click();
    }

    async selectProduct(product) {
        let productSelector = '//span[text()="'+product+'"]'
        await $(productSelector).waitForClickable();
        await $(productSelector).click();
    }
    async addToCart(){
        await this.addToCartButton.waitForDisplayed();
        await this.addToCartButton.click();
        await this.addedToCart;

    }
    



}
export default new Search_page();