class cartPage{
    
    async navigateToCart() {
        await browser.url("https://www.amazon.in/cart/")
        await browser.pause(5000)
        
    }
    async verifyProductInCart(productName) {
        //verifying the product in cart we will use the product generic xpath that will change based on the product provided
        let isProductPresent="//div[@data-name='Active Items']//span[contains(text(), '"+productName+"')]"
        if(await $(isProductPresent).waitForDisplayed()){
            console.log("Pass")
        }
        else{
            console.log("Fail")
        }
    

    }
    async verifyLogout(){
        await $("//span[normalize-space()='Account & Lists']").waitForDisplayed()
        await $("//span[normalize-space()='Account & Lists']").moveTo()
        await $('//*[@id="nav-item-signout"]/span').waitForClickable()
        await $('//*[@id="nav-item-signout"]/span').click()
        const verify_logout=await $('//*[contains(text(), "Sign in or create account")]').isDisplayed
        
        if(await $('//*[contains(text(), "Sign in or create account")]').isDisplayed){
            console.log("Successfully logged out")
        }
        else{
            console.log("Logout failure")
        }
    }
    }
    




export default new cartPage();