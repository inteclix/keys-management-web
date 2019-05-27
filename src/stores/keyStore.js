import {observable, reaction, action, decorate} from "mobx";
import agent from "../agent";
import commonStore from "./commonStore";
import toastStore from "./toastStore";

class keyStore {
  selectedId = 0;
  key = {
    id: 0,
    code: "",
    car_id: ""
  };
  keys = [];
  loading = false;

  getKey(id) {
    this.loading = true;
    return agent.Key.getKey(id)
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          this.key = data.data
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        toastStore.error(body)
      })
      .finally(
        action(() => {
          this.loading = false;
        })
      );
  }

  getAll() {
    this.loading = true;
    return agent.Key.all()
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          this.keys = data.data;
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        toastStore.error(body)
      })
      .finally(
        action(() => {
          this.loading = false;
        })
      );
  }

  create() {
    this.loading = true;
    return agent.Key.create(this.key)
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          toastStore.success(data.message)
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        toastStore.error(body)
      })
      .finally(
        action(() => {
          this.loading = false;
          //commonStore.history.push('/companies')
        })
      );
  }

  delete(id) {
    this.loading = true;
    return agent.Key.delete(id)
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          toastStore.success(data.message)
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        toastStore.error(body)
      })
      .finally(action(() => this.getAll()));
  }

  update() {
    this.loading = true;
    return agent.Key.update(this.key)
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          toastStore.success(data.message)
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        toastStore.error(body)
      })
      .finally(
        action(() => {
          this.loading = false;
          //commonStore.history.push('/companies')
        })
      );
  }

  ping(id, position) {
    //this.loading = true;
    return agent.Key.ping(id, position)
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          //this.key = data.data
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        toastStore.error(body)
      })
      .finally(
        action(() => {
          //this.loading = false;
        })
      );
  }
}

keyStore = decorate(keyStore, {
  selectedId: observable,
  key: observable,
  keys: observable,
  loading: observable,
  message: observable,
});

export default new keyStore();
