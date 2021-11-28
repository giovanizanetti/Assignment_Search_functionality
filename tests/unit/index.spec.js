import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home";
import Search from "@/components/Search";
import Autocomplete from "@/components/Autocomplete";

describe("HelloWorld.vue", () => {
  describe("Home page", () => {
    it("renders without creashing", () => {
      const homeView = shallowMount(Home);
      expect(homeView).toBeTruthy();
    });
  });

  describe("Search component", () => {
    it("renders without crashing", () => {
      const searchComponent = shallowMount(Search);
      expect(searchComponent).toBeTruthy();
    });
  });

  describe("Autocomplete component", () => {
    it("renders without crashing", () => {
      const results = [
        {
          has_synonyms: true,
          is_moderator_only: false,
          is_required: false,
          count: 1355753,
          name: "android",
        },
        {
          has_synonyms: true,
          is_moderator_only: false,
          is_required: false,
          count: 409720,
          name: "node.js",
        },
      ];
      const autocomplete = shallowMount(Autocomplete, {
        propsData: { results },
      });
      console.log(Autocomplete);
      expect(autocomplete).toBeTruthy();
    });
  });
});
