<template>
  <div class="container">
    <div class="container">
      <SearchField
        v-model="query"
        @submit="handleSubmit"
        @clear="handleClearSearch"
      />
      <div class="d-flex flex-column">
        <span
          v-if="!autocompleteResults.length && query.length"
          class="mx-5 align-self-start"
          >...Loading</span
        >
        <Autocomplete
          v-show="showSuggestions"
          :results="autocompleteResults"
          :dirty="query.length && true"
          @select="handleSearch"
        />
      </div>
    </div>
    <QuestionsList :results="finalResults" />
    <button
      ref="loadMore"
      class="btn text-primary text-bold"
      v-show="finalResults.length"
      @click="handleLoadMore"
    >
      Load more...
    </button>
  </div>
</template>

<script>
import debounce from "lodash.debounce";
import Autocomplete from "./Autocomplete";
import QuestionsList from "./QuestionsList";
import SearchField from "./SearchField";
import { fetchSearchResults, fetchAutocompleteResults } from "../api";

export default {
  name: "Search",
  components: {
    Autocomplete,
    QuestionsList,
    SearchField,
  },
  data() {
    return {
      autocompleteResults: [],
      finalResults: [],
      query: "",
      loading: false,
      page: 1,
      tag: "",
      showSuggestions: true,
    };
  },
  watch: {
    query: function () {
      this.query.length && (this.showSuggestions = true);
      this.query.length && this.debouncedGetQuestions();
    },
    tag: function () {
      this.autocompleteResults = [];
    },
    finalResults() {
      localStorage.setItem("questions", JSON.stringify(this.finalResults));
    },
  },
  created: function () {
    this.debouncedGetQuestions = debounce(this.handleAutocomplete, 500);
    localStorage.questions &&
      (this.finalResults = JSON.parse(localStorage.questions));
  },
  methods: {
    async handleAutocomplete() {
      const response = await fetchAutocompleteResults(this.query);
      this.autocompleteResults = response;
    },
    async handleSearch(term) {
      this.showSuggetions = false;
      this.tag = term;
      const response = await fetchSearchResults(term, this.page);
      this.finalResults = [...this.finalResults, ...response];
      this.query = "";
      this.showSuggestions = false;
      this.autocompleteResults = [];
    },
    handleLoadMore() {
      this.page++;
      this.handleSearch(this.tag);
      this.$refs.loadMore.blur();
    },
    handleSubmit() {
      this.handleSearch(this.query);
    },
    handleClearSearch() {
      this.finalResults = [];
      this.showSuggestions = false;
    },
  },
};
</script>
