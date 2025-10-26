describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
        cy.get('#pass').type('qa_one_love1'); // Ввести правильный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click(); // Нажать кнопку Восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Вводим почту для воостановления пароля
        cy.get('#restoreEmailButton').click(); // Нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
        cy.get('#pass').type('qa_one_love7'); // Ввести не правильный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germa@dolnikov.ru'); // Ввести правильный логин
        cy.get('#pass').type('qa_one_love1'); // Ввести правильный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
    })

    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru'); // Ввести неправильный логин
        cy.get('#pass').type('qa_one_love1'); // Ввести правильный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
    })

   it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('GerMan@dolnikov.ru'); // Ввести правильный логин
        cy.get('#pass').type('qa_one_love1'); // Ввести правильный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
    })
})

// План 
// Ввести правильный логин
// Ввести правильный пароль
// Нажать войти
// Проверить нужный текст и наличие кнопки крестик