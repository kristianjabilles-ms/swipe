import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: []
  },
  getters: {
    products(state) {
      return state.products;
    },
    product: (state) => (productSlug) => {
      const product = Object.values(state.products).find(({ attributes: { slug } }) => slug === productSlug);
      return product.attributes;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = {
        ...products
      }
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const products = await axios.get(`${process.env.VUE_APP_PRODUCT_LISTING_ENDPOINT}/listings/credit_cards`)
        .then(({ data }) => data.data);

      commit('setProducts', products)
    }
  },
})
