<template>
  <div>
    <div class="container my-3">
      <b-list-group v-for="result in results" :key="result.question_id">
        <ListItem :result="result" />
      </b-list-group>
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem";
export default {
  name: "QuestionsList",
  components: {
    ListItem,
  },
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
};
</script>
