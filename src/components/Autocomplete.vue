<template>
  <b-list-group>
    <b-link @click="() => handleSelectAutocompleteOption(result.name)">
      <b-list-group-item>{{ result.name }}</b-list-group-item></b-link
    >
  </b-list-group>
</template>

<script>
export default {
  props: ['result'],
}
</script>
