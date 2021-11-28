<template>
  <div>
    <div class="container my-3">
      <b-list-group v-for="result in finalResults" :key="result.question_id">
        <ListItem :result="result" />
      </b-list-group>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'QuestionsList',
  components: {
    ListItem,
  },
  props: ['finalResults'],
}
</script>
