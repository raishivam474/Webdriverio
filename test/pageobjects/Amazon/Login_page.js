class Login_page{


    //selectors
    get login_button(){
        return $("//span[normalize-space()='Account & Lists']");
    }
    get email_Inp(){
        return $("//input[@type='email']");
    }
    get passwordInp() {
        return $("//input[@type='password']");
    }
    get submitButton() {
        return $("//input[@type='submit']");
    }
    
    
   
     async LoadUrl(url_name){
        await browser.url(url_name)
     }

    
    async Loginto_amazon(email,password){
        await this.login_button.waitForDisplayed()
        await this.login_button.click()
        await this.email_Inp.waitForDisplayed()
        await this.email_Inp.setValue(email)
        await this.submitButton.click()
        await this.passwordInp.waitForDisplayed()
        await this.passwordInp.setValue(password)
        await this.submitButton.click()
    }
    async Logout_Amazon(){
        let signout =await this.login_button.waitForDisplayed()
        await signout.moveto()
        await $('//*[@id="nav-item-signout"]/span').waitForClickable()
        await $('//*[@id="nav-item-signout"]/span').click()
    }


}
export default new Login_page();