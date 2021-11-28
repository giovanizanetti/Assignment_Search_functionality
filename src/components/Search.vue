<template>
  <div class="container">
    <div class="container">
      <div class="d-flex">
        <b-form-input
          ref="input"
          class="mx-2 my-1"
          type="search"
          autofocus
          placeholder="Type to search"
          v-model="query"
          @keypress.enter="handleSubmit"
          list="input-list"
          id="input-with-list"
        />

        <b-button ref="search" @click="handleSubmit" variant="primary" class="my-1">Search</b-button>
        <b-button ref="clear" @click="handleClearSearch" variant="danger" class="m-1">Clear</b-button>
      </div>
      <div class="d-flex flex-column">
        <span v-if="!results.length && query.length" class="mx-5 align-self-start">...Loading</span>
        <Autocomplete v-show="showSuggestions" :results="results" @select="handleSelectAutocompleteOption" />
      </div>
    </div>

    <QuestionsList :finalResults="finalResults" />

    <button class="btn text-primary text-bold" v-show="finalResults.length" @click="handleLoadMore">
      Load more...
    </button>
  </div>
</template>

<script>
// import axios from 'axios'
// import { BASE_URL } from '../config/constants'
import debounce from 'lodash.debounce'
import Autocomplete from './Autocomplete'
import QuestionsList from './QuestionsList'
import { fetchSearchResults, fetchAutocompleteResults } from '../api'

export default {
  name: 'Search',
  components: {
    Autocomplete,
    QuestionsList,
  },
  data() {
    return {
      results: [],
      finalResults: [],
      query: '',
      loading: false,
      page: 1,
      tag: '',
      showSuggestions: true,
    }
  },

  watch: {
    query: function () {
      this.query.length && (this.showSuggestions = true)
      this.query.length && this.debouncedGetQuestions()
    },
    tag: function () {
      this.results = []
    },
  },
  created: function () {
    this.debouncedGetQuestions = debounce(this.handleAutocomplete, 500)
  },
  methods: {
    async handleAutocomplete() {
      const response = await fetchAutocompleteResults(this.query)
      this.results = response
    },
    async handleSearch(term) {
      const response = await fetchSearchResults(term, this.page)
      this.finalResults = [...this.finalResults, ...response]
      this.query = ''
      this.showSuggestions = false
    },
    handleLoadMore() {
      this.page++
      this.handleSearch(this.tag)
    },
    handleSubmit() {
      this.showSuggetions = false
      this.tag = this.query
      this.handleSearch(this.query)
      this.results = []
      this.query = ''
      this.$refs.search.blur()
    },
    handleSelectAutocompleteOption(name) {
      this.tag = name
      this.showSuggestions = false
      this.handleSearch(name)
      this.query = ''
      this.results = []
    },
    handleClearSearch() {
      this.$refs.clear.blur()
      this.finalResults = []
      this.showSuggestions = false
    },
  },
  updated() {
    console.log('UPDATED')
  },
}
</script>
