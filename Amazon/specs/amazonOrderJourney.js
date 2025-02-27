import Login_page from "../pageobjects/Amazon/Login_page"
import Amazon_search from "../pageobjects/Amazon/Amazon_search"
import Cart_page from "../pageobjects/Amazon/Cart_page"

describe("Adding a product to Cart in Amazon and verifying the product in Cart", ()=>{
    const Product="The Art of Letting Go"
    it("Login to Amazon",async()=>{
        await Login_page.LoadUrl("https://www.amazon.in/")

        
        await Login_page.Loginto_amazon('username','password')
    })
    it("Search For Product on Amazon and add it to cart",async()=>{
        
        await Amazon_search.searchForProduct(Product);
        await Amazon_search.selectProduct(Product);
        
        const allWindowHandles = await browser.getWindowHandles();
        const newWindowHandle = allWindowHandles[1]; // Index 1 is the second window
        await browser.switchToWindow(newWindowHandle);
        browser.pause(4000)
        await Amazon_search.addToCart()

    })
    it("Verify the product in The cart",async()=>{
        await Cart_page.navigateToCart()
        await Cart_page.verifyProductInCart(Product)
        
    })
    it("Verify successfull Logout", async()=>{
       
        await Cart_page.verifyLogout()
        await browser.debug(20000)

    })






})