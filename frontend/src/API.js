export class APIError extends Error {}

export class API {
  static checkStatus (res) {
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      let error = new APIError(res.statusText);
      error.res = res;
      throw error;
    }
  }
  static fetch (url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => this.checkStatus(res))
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(e => reject(e));
    })
  }
}
