<template>
  <md-toolbar class="md-primary url_wrap">
    <div class="md-toolbar-row">
      <!-- select methood -->
      <md-menu md-size="medium" md-align-trigger>
        <md-button md-menu-trigger>Method</md-button>
        <md-menu-content class="method_wrap">
          <md-checkbox v-model="autoMode" value="AUTO" @change="modeFunc('auto')"
            >AUTO</md-checkbox
          >
          <md-checkbox
            v-for="(type, index) in httpMethods"
            :key="index"
            v-model="checkedMethod"
            :value="type"
            @change="modeFunc('normal')"
            >{{ type }}</md-checkbox
          >
        </md-menu-content>
      </md-menu>
      <!-- url input -->
      <input class="url_input" placeholder="URL....." v-model="input_url" type="url" />
      <!-- send button -->
      <md-button class="md-icon-button" @click="$emit('run-cors',input_url)">
        <md-icon>send</md-icon>
      </md-button>
      <!-- refresh -->
      <!-- <div class="md-toolbar-section-end">
        <md-button class="md-icon-button">
          <md-icon>refresh</md-icon>
        </md-button>
      </div> -->
    </div>
  </md-toolbar>
</template>
<script>
import * as http from "@/mixin/method.js";
export default {
  data() {
    return {
      autoMode: "AUTO",
      checkedMethod: http.Method.split(","),
      httpMethods: http.Method.split(","),
      input_url:"",
    };
  },
  beforeMount() {
    this.$emit("http_change", http.Method.split(","));
  },
  methods: {
    modeFunc: function (type) {
      type == "auto"
        ? (this.checkedMethod = http.Method.split(","))
        : (this.autoMode = null);
      this.$emit("http_change", this.checkedMethod);
    },
  },
};
</script>
<style lang="scss" scoped>
.url_wrap {
  .url_input {
    padding: 0px 16px;
    height: 40px;
    @include round(2px);
    border: none;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    font-family: inherit;
    line-height: normal;
    font-size: 14px;
    width: 100%;
    max-width: 70vw;
  }
  .url_input:focus {
    background-color: white;
    outline: none;
    color: grey;
  }
}
.method_wrap {
  padding: 0px 10px;
  background-color: white;
  min-width: auto;
  top: 65px !important;
}
</style>
