<template>
  <b-link :href="result.link">
    <b-list-group-item
      class="pb-0 m-2"
      @mouseover="active = true"
      @mouseleave="active = false"
      :active="active"
    >
      <strong>{{ result.title }}</strong>
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center py-2">
          <b-avatar
            size="sm"
            variant="info"
            class="mx-2"
            :src="result.owner.profile_image"
          ></b-avatar>
          <span class="m-2 mr-auto">{{ result.owner.display_name }}</span>
        </div>
        <div class="px-2">{{ getDate(result.creation_date) }}</div>
      </div>
    </b-list-group-item>
  </b-link>
</template>

<script>
import { getDate } from "../helpers";
export default {
  name: "ListItem",
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    getDate,
  },
};
</script>
