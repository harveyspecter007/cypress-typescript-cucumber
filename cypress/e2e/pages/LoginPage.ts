export default class LoginPage {

    private readonly selectors = {
        username: "#user-name",
        password: "#password",
        loginButton: "#login-button",
    } as const;

    enterCredentialsAndLogin(username: string, password: string): void {
        cy.get(this.selectors.username)
            .should("be.visible")
            .clear()
            .type(username);

        cy.get(this.selectors.password)
            .should("be.visible")
            .clear()
            .type(password);

        cy.get(this.selectors.loginButton)
            .should("be.visible")
            .click();
    }

    clickOnLogin(): void {
        cy.get(this.selectors.loginButton)
            .should("be.visible")
            .click();
    }

}