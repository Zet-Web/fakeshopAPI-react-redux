export default class ApiService {
  _apiBase = 'https://fakestoreapi.com';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getAllProducts = async () => {
    const res = await this.getResource('/product-list?limit=5');
    return res;
  };
}
