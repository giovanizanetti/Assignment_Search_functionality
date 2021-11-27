<template>
  <div class="container">
    <div class="container">
      <b-form-input
        type="search"
        autofocus
        placeholder="Type to search"
        v-model="query"
        @keypress.enter="handleSubmit"
        list="input-list"
        id="input-with-list"
      ></b-form-input>

      <b-list-group v-show="showSuggestions" v-for="result in results" :key="result.question_id">
        <b-link class="text-decoration-none" @click="() => handleSelectAutocompleteOption(result.name)">
          <b-list-group-item class="d-flex px-4 bg-dark text-light">{{ result.name }}</b-list-group-item></b-link
        >
      </b-list-group>
      <!-- <Autocomplete v-for="result in results" :key="result.question_id" :result="result.name" /> -->
    </div>

    <div class="container my-3">
      <b-list-group v-for="result in finalResults" :key="result.question_id">
        <ListItem :result="result" />
      </b-list-group>
    </div>

    <button class="btn text-primary text-bold" v-show="finalResults.length" @click="handleLoadMore">
      Load more...
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../config/constants'
import ListItem from './ListItem.vue'
import debounce from 'lodash.debounce'
// import Autocomplete from './Autocomplete'
// import { getSearchResults } from '../api'

export default {
  name: 'Search',
  components: {
    ListItem,
    // Autocomplete,
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
  mounted() {
    console.log('MOUNTED')
  },
  methods: {
    handleAutocomplete() {
      axios
        .get(`${BASE_URL}tags?pagesize=10&order=desc&sort=popular&site=stackoverflow&inname=${this.query}`)
        .then((response) => (this.results = response.data.items))
        .catch((error) => console.error(error))
        .finally(() => console.log('FINALLY'))
    },
    handleSearch(term) {
      axios
        .get(
          `${BASE_URL}questions/unanswered?pagesize=5&order=desc&sort=activity&site=stackoverflow&tagged=${term}&page=${this.page}`
        )
        .then((response) => (this.finalResults = [...this.finalResults, ...response.data.items]))
        .catch((error) => console.error(error))
        .finally(() => console.log('FINALLY'))
      this.query = ''
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
    },
    handleSelectAutocompleteOption(name) {
      this.tag = name
      this.showSuggestions = false
      this.handleSearch(name)
      this.query = ''
      this.results = []
    },
  },
  updated() {
    console.log('UPDATED')
  },
}
</script>
