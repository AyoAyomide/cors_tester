<template>
  <div>
    <br />
    <p class="tag md-display-1" md-alignment="centered">{{ httpMethod }}</p>
    <!-- empty state -->
    <md-empty-state
      v-if="load"
      :class="{
        error_cors: resp[httpMethod].pass == false,
        pass_cors: resp[httpMethod].pass == true,
      }"
      :md-icon="iconPack()"
      :md-label="resp[httpMethod].pass ? 'CORS PASS' : 'CORS FAILED'"
    >
      <!-- <h5>{{ resp[httpMethod].tag }}</h5> -->
      <h4>STATUS CODE : {{ resp[httpMethod].code }}</h4>
      <br />
      <p>{{ resp[httpMethod].message }}</p>
      <br />
      <!-- <md-button class="md-primary md-raised">try again</md-button> -->
    </md-empty-state>
  </div>
</template>
<script>
export default {
  props: ["httpMethod", "resp"],
  watch: {
    httpMethod: function () {
      this.load = true;
    },
  },
  data() {
    return {
      error_cors: "error_cors",
      pass_cors: "pass_cors",
      load: false,
    };
  },
  methods: {
    iconPack: function () {
      let iconObject = {
        load: "api",
        true: "done",
        false: "close",
      };
      return iconObject[this.resp[this.httpMethod].pass];
    },
  },
};
</script>
<style lang="scss" scoped>
.tag {
  text-align: center;
}
</style>
<style lang="scss">
.error_cors {
  .md-empty-state-container {
    color: red;
    i {
      color: red !important;
    }
  }
  color: red;
}
.pass_cors {
  .md-empty-state-container {
    color: rgb(0, 255, 76);
    i {
      color: rgb(0, 255, 76) !important;
    }
  }
  color: rgb(0, 255, 76);
}
</style>
