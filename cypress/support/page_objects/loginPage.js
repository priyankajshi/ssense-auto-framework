// ###############################################################
// Page objects for Login page
// ###############################################################

export class Login {
  username = "input[id='user-name']";
  password = "input[id='password']";
  loginBtn = "#login-button";
  botIcon = "div.bot_column";
}

export const loginPage = new Login();
