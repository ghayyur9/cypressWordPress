export class login {

    loginLocators = {

        username: '#user_login',
        password: '#user_pass',
        loginBtn: '#wp-submit'

    }

    openURL() {
        cy.visit(Cypress.env('URL'), { failOnStatusCode: false})
    }

    inputUserName(usrName) {
        cy.get(this.loginLocators.username).type(usrName)
    }

    inputPassword(pswrd) {
        cy.get(this.loginLocators.password).type(pswrd)
    }

    clickSubmit() {
        cy.get(this.loginLocators.loginBtn).click();
    }

}