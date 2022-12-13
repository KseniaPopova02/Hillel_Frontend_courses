import { BASE_URL } from "./paths";

class Api {
  static request(
    url,
    params = {
      method: "GET",
    }
  ) {
    return fetch(`${BASE_URL}/${url}`, params).then((response) =>
      response.json()
    );
  }
  static get(url) {
    return Api.request(url);
  }
}

export default Api;
