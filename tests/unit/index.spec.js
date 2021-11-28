import { shallowMount, mount } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Vue from "vue";
import Home from "@/views/Home";
import Search from "@/components/Search";
import Autocomplete from "@/components/Autocomplete";
import ListItem from "@/components/ListItem";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

describe("Home component", () => {
  describe("Home page", () => {
    it("renders without creashing", () => {
      const wrapper = shallowMount(Home);
      expect(wrapper).toBeTruthy();
    });
  });

  describe("Search component", () => {
    it("renders without crashing", () => {
      const wrapper = shallowMount(Search);
      expect(wrapper).toBeTruthy();
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
      const wrapper = shallowMount(Autocomplete, {
        propsData: { results },
      });
      console.log(Autocomplete);
      expect(wrapper).toBeTruthy();
    });
  });
  describe("ListItem", () => {
    const result = {
      tags: ["javascript", "vue.js", "canvas", "text", "fabricjs"],
      owner: {
        account_id: 23479991,
        reputation: 1,
        user_id: 17532278,
        user_type: "registered",
        profile_image:
          "https://www.gravatar.com/avatar/bf1c05f996518af72f17a8ce45ec01b9?s=256&d=identicon&r=PG",
        display_name: "standly",
        link: "https://stackoverflow.com/users/17532278/standly",
      },
      is_answered: false,
      view_count: 6,
      answer_count: 0,
      score: 0,
      last_activity_date: 1638118655,
      creation_date: 1638118655,
      question_id: 70145607,
      content_license: "CC BY-SA 4.0",
      link: "https://stackoverflow.com/questions/70145607/fabricjs-how-to-double-click-a-pictureor-rect-to-edit-text-and-name-it",
      title:
        "fabricjs how to double-click a picture(or rect) to edit text and name it",
    };
    it("Mounts a vue component", () => {
      const wrapper = mount(ListItem, {
        propsData: { result },
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
