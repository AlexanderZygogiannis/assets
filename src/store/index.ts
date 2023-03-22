import Vue from "vue";
import Vuex from "vuex";
import { assets } from "@/api/assets";
import { IHouse } from "@/interface/IHouse";
import { ITypes } from "@/interface/ITypes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    assets: [],
    amenities: [],
    types: [],
  },

  getters: {},

  mutations: {
    setAssets: (state, assets) => {
      state.assets = assets.data;
    },

    setAmenities: (state, assets) => {
      state.amenities = assets.data;
    },

    setTypes: (state, assets) => {
      state.types = assets.data;
    },
  },

  actions: {
    fetchAssets(context) {
      assets.fetchList().then((response: IHouse) => {
        context.commit("setAssets", response);
      });
    },

    fetchAmenities(context) {
      assets.anemities().then((response) => {
        context.commit("setAmenities", response);
      });
    },

    fetchTypes(context) {
      assets.types().then((response: ITypes) => {
        context.commit("setTypes", response);
      });
    },

    fetchTypeFilter(context, type) {
      assets.fetchTypeList(type).then((response: IHouse) => {
        context.commit("setAssets", response);
      });
    },

    fetchAmenitiesFilter(context, amenities) {
      assets.fetchAnemitiesList(amenities).then((response: IHouse) => {
        context.commit("setAssets", response);
      });
    },
  },
  modules: {},
});
