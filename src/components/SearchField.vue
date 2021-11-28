<template>
  <div class="d-flex">
    <b-form-input
      ref="input"
      class="mx-2 my-1"
      type="search"
      autofocus
      placeholder="Type to search"
      v-model="inputVal"
      @keypress.enter="handleSubmit"
      list="input-list"
    />
    <b-button ref="search" @click="handleSubmit" variant="primary" class="my-1"
      >Search</b-button
    >
    <b-button ref="clear" @click="handleClear" variant="danger" class="m-1"
      >Clear</b-button
    >
  </div>
</template>

<script>
export default {
  name: "SearchField",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  methods: {
    handleSubmit() {
      this.$refs.search.blur();
      this.$emit("submit");
    },
    handleClear() {
      this.$refs.clear.blur();
      this.$emit("clear");
    },
  },
};
</script>
