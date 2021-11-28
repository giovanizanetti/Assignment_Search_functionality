import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Search from "@/components/Search.vue";
import Autocomplete from "@/components/Autocomplete.vue";

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
      const autocomplete = shallowMount(Autocomplete);
      expect(autocomplete).toBeTruthy();
    });
  });
});
