import Vue from "vue";
import Vuex from "vuex";
import { houses } from "@/api/houses";
import { IHouse } from "@/interface/IHouse";
import { ITypes } from "@/interface/ITypes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    houses: [],
    amenities: [],
    types: [],
  },

  getters: {},

  mutations: {
    setHouses: (state, houses) => {
      state.houses = houses.data;
    },

    setAmenities: (state, houses) => {
      state.amenities = houses.data;
    },

    setTypes: (state, houses) => {
      state.types = houses.data;
    },
  },

  actions: {
    fetchHouses(context) {
      houses.fetchList().then((response: IHouse) => {
        context.commit("setHouses", response);
      });
    },

    fetchAmenities(context) {
      houses.anemities().then((response) => {
        context.commit("setAmenities", response);
      });
    },

    fetchTypes(context) {
      houses.types().then((response: ITypes) => {
        context.commit("setTypes", response);
      });
    },

    fetchTypeFilter(context, type) {
      houses.fetchTypeList(type).then((response: IHouse) => {
        context.commit("setHouses", response);
      });
    },

    fetchAmenitiesFilter(context, amenities) {
      houses.fetchAnemitiesList(amenities).then((response: IHouse) => {
        context.commit("setHouses", response);
      });
    },
  },
  modules: {},
});
