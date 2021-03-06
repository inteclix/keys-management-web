import { observable, action, decorate } from "mobx";

import agent from "../agent";
import userStore from "./userStore";
import commonStore from "./commonStore";
import toastStore from "./toastStore";

class AuthStore {
  inProgress = false;
  errors = undefined;

  values = {
    username: "",
    email: "",
    password: ""
  };
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
  }

  setUsername(username) {
    this.values.username = username;
  }

  setEmail(email) {
    this.values.email = email;
  }

  setPassword(password) {
    this.values.password = password;
  }

  reset() {
    this.values.username = "";
    this.values.email = "";
    this.values.password = "";
  }

  login(email, password) {
    this.inProgress = true;
    return (
      agent.Auth.login(email, password)
        .then(response => commonStore.setToken(response.data.data.token))
        //.then(() => userStore.pullUser())
        .catch(error => {
          let body =
            error.response !== undefined
              ? error.response.data.message
              : error.message;
          toastStore.error(body);
        })
        .finally(
          action(() => {
            this.inProgress = false;
          })
        )
    );
  }

  register() {
    this.inProgress = true;
    this.errors = undefined;
    return agent.Auth.register(
      this.values.username,
      this.values.email,
      this.values.password
    )
      .then(response => commonStore.setToken(response.data.user.token))
      .then(() => userStore.pullUser())
      .catch(
        action(error => {
          console.log(error.data);
        })
      )
      .finally(
        action(() => {
          this.inProgress = false;
        })
      );
  }

  logout() {
    commonStore.setToken(undefined);
  }
}

AuthStore = decorate(AuthStore, {
  inProgress: observable,
  errors: observable,
  values: observable,
  setUsername: action,
  setEmail: action,
  reset: action,
  login: action,
  register: action,
  logout: action
});

export default new AuthStore();
