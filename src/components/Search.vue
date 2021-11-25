<template>
  <div class="container">
    <div class="container">
      <!-- <label for="input-with-list">Type to search</label> -->
      <b-form-input
        placeholder="Type to search"
        class="container"
        v-model="query"
        @keypress.enter="handleSearch"
        list="input-list"
        id="input-with-list"
      ></b-form-input>
      <!-- <b-form-datalist id="input-list" :options="results"></b-form-datalist> -->
    </div>
    <div class="container my-3">
      <b-list-group v-for="result in results" :key="result.question_id">
        <ListItem :result="result" />
        <!-- <a :href="result.link"
          ><b-list-group-item v-on:mouseover="active = !active">{{ result.title }}</b-list-group-item></a
        > -->

        <!-- <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
        <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
      </b-list-group>
    </div>
    <b-link @click="handleLoadMore" href="#foo">Load more...</b-link>
  </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../config/constants'
import ListItem from './ListItem.vue'
// import debouce from 'lodash.debounce'
// import { getSearchResults } from '../api'

export default {
  name: 'Search',
  components: {
    ListItem,
  },
  data() {
    return {
      results: null,
      query: '',
      loading: false,
      page: 1,
    }
  },

  watch: {
    // whenever question changes, this function will run
    query: function () {
      console.log(this.query)
      // this.debouncedGetAnswer()
      // this.answer = 'Waiting for you to stop typing...'
      // this.debouncedGetAnswer()
    },
    page: function () {
      console.log('whatchinfg')
      this.handleSearch()
    },
  },

  created: function () {
    this.handleSeach()
    // this.debouncedGetAnswer = debouce(getAutoCompleteResults(this.query), 500)
  },
  mounted() {},
  methods: {
    fetchSugestions() {
      axios
        .get(`${BASE_URL}inname=${this.autocompleteQuery}&tagged=${this.tag}`)
        .then((response) => (this.response = response.data.items.map((item) => item.title)))
        .catch((error) => console.error(error))
        .finally(() => console.log('FINALLY'))
    },
    handleSearch() {
      this.loading = true
      axios
        .get(`${BASE_URL}&tagged=${this.query}&${this.page}`)
        // .then((response) => (this.response = response.data.items.map((item) => item.title)))
        .then((response) => (this.results = response.data.items))
        .catch((error) => console.error(error))
        .finally(() => console.log('FINALLY'))
      this.loading = false
      // this.query = ''
    },
    handleLoadMore() {
      this.page++
      this.query = ''
      // this.handleSearch()
    },
  },
}
</script>

<style></style>
