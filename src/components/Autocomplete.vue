<template>
  <div>
    <b-list-group v-for="result in results" :key="result.question_id">
      <b-link
        class="text-decoration-none"
        @click="$emit('select', result.name)"
      >
        <b-list-group-item class="d-flex px-4 bg-dark text-light">{{
          result.name
        }}</b-list-group-item></b-link
      >
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "Autocomplete",
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
};
</script>
