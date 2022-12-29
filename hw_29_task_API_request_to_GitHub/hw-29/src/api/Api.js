class Api {
  //for getting data from server
  static request(
    path,
    params = {
      method: "GET",
    }
  ) {
    //returning data from server
    return fetch(`${path}`, params).then((response) => response.json());
  }
  static get(path) {
    return Api.request(path);
  }
}

export default Api;
