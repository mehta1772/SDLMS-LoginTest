import { Selector } from "testcafe";

fixture("SDLMS Login Test").page(
  "https://s1.demo.opensourcecms.com/wordpress/wp-login.php"
);

test("User can log in", async (t) => {
  const usernameInput = Selector("#user_login");
  const passwordInput = Selector("#user_pass");
  const loginButton = Selector("#wp-submit");
  await t
    .typeText(usernameInput, "ABCD")
    .typeText(passwordInput, "ABCD")
    .click(loginButton)
    .expect(Selector("strong").withText("ERROR").exists)
    .ok();
});
