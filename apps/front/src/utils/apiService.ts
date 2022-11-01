import constants from "../constants"

const headers = {
  Authorization: `Bearer ${localStorage.getItem(constants.token)}`,
}

const ApiService = {
  getProducts: async () => {
    const res = await fetch(`http://localhost:1337/api/stripe/products`, {
      method: 'GET',
      headers: { ...headers },
    });
    return await res.json();
  },
  getProductById: async (id?: string) => {
    const res = await fetch(`http://localhost:1337/api/stripe/products/${id}`, {
      method: 'GET',
      headers: { ...headers },
    });
    return await res.json();
  },
  createCheckoutSession: async (lookupKey: string) => {
    const res = await fetch(`http://localhost:1337/api/stripe/products/${lookupKey}`, {
      method: 'GET',
      headers: { ...headers },
    });
    return await res.json();
  }
};


export default ApiService;
