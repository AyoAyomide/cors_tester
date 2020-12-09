<template>
  <div>
    <!-- loading bar -->
    <md-progress-bar v-if="loading" md-mode="indeterminate"></md-progress-bar>
    <!-- request response -->
    <div class="pass_method">
      <md-chip
        md-clickable
        v-for="(item, index) in http_method"
        :key="index"
        @click="$emit('set-active',item.tag)"
        >{{ item.tag }} <md-icon>{{ item.icon }}</md-icon></md-chip
      >
    </div>

    <md-divider></md-divider>
  </div>
</template>
<script>
export default {
  props: ["http_method"],
  data() {
    return {
      loading: false,
    };
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.pass_method {
  text-align: center;
  padding: 20px;
}
</style>