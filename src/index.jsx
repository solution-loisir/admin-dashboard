/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";
import App from "./App";


netlifyIdentity.setLocale("fr");

netlifyIdentity.on("login", (user) => {
  netlifyIdentity.close();

  const adminName = document.querySelector('[data-id="admin-user-name"]');
  adminName.textContent = `Bonjour ${user.user_metadata.full_name}`;
  adminName.classList.remove("visually-hidden");

  render(() => {
    return (
      <MetaProvider>
        <Router>
          <App />
        </Router>
      </MetaProvider>
    );
  }, document.getElementById("root"));
});

netlifyIdentity.on("logout", () => {
  netlifyIdentity.close();
  location.reload();
});