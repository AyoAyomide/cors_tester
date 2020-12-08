<template>
  <md-toolbar class="md-primary url_wrap">
    <div class="md-toolbar-row">
      <!-- select methood -->
      <md-menu md-direction="bottom-start">
        <md-button md-menu-trigger>Method</md-button>
        <md-menu-content>
          <md-menu-item>My Item 1</md-menu-item>
          <md-menu-item>My Item 2</md-menu-item>
          <md-menu-item>My Item 3</md-menu-item>
        </md-menu-content>
      </md-menu>
      <!-- url input -->
      <md-autocomplete
        class="search"
        v-model="selectedEmployee"
        :md-options="employees"
        md-layout="box"
      >
        <label>URL...</label>
      </md-autocomplete>
      <!-- send button -->
      <md-button class="md-icon-button">
        <md-icon>send</md-icon>
      </md-button>
      <!-- refresh -->
      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button">
          <md-icon>refresh</md-icon>
        </md-button>
      </div>
    </div>
  </md-toolbar>
</template>
<script>
export default {
  data: () => ({
    selectedEmployee: null,
    employees: [],
  }),
};
</script>
<style lang="scss" scoped>
.url_wrap {
  .search {
    max-width: 70vw;
  }
}
</style>
<style lang="scss" >
</style>