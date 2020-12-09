<template>
  <div>
    <br>
    <p class="tag md-display-1" md-alignment="centered">{{active}}</p>
    <!-- empty state -->
    <md-empty-state
      :class="{ cors }"
      :md-icon="cors ? 'close' : 'done'"
      :md-label="cors ? 'CORS FAILED' : 'CORS PASS'"
      md-description="ERROR CODE : 200"
    >
      <p>Message</p>
      <br />
      <md-button class="md-primary md-raised">try again</md-button>
    </md-empty-state>
  </div>
</template>
<script>
export default {
  props: ["cors","active"],
  data() {
    return {
      // cors: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.tag {
  text-align: center;
}
</style>
<style lang="scss">
.cors {
  .md-empty-state-container {
    color: red;
    i {
      color: red !important;
    }
  }
  color: red;
}
</style>