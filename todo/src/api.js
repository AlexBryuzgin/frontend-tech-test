import 'whatwg-fetch';
export default class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  
  fetchData = (url, opts) => fetch(url, {
    mode: "cors",
    ...opts
  })
  
  getItems = () => {
    return this.fetchData(`${this.baseUrl}/tasks`);
  }

  getItem = id => {
    return this.fetchData(`${this.baseUrl}/task/${id}`);
  }

  createItem = data => {
    return this.fetchData(`${this.baseUrl}/task`, {
      method: "GET",
      body: data
    });
  }

  editItem = data => {
    return this.fetchData(`${this.baseUrl}/task/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });
  }

  deleteItem = id => {
    return this.fetchData(`${this.baseUrl}/task/${id}`);
  }
}