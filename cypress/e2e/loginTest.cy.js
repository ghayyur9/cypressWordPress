/// <reference types="cypress"/>
import { login } from "../../cypress/pages/login"
import loginData from "../../cypress/fixtures/credentials.json"

const loginObj = new login()

describe('Create Login Test', () => {
    it('Should Login the user', () => {
        loginObj.openURL()
        loginObj.inputUserName(loginData.username)
        loginObj.inputPassword(loginData.password)
        loginObj.clickSubmit()
    })

})
