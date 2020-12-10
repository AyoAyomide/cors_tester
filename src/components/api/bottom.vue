<template>
  <div>
    <br />
    <p class="tag md-display-1" md-alignment="centered">{{ httpMethod }}</p>
    <!-- empty state -->
    <md-empty-state
      v-if="load"
      :class="{ cors: resp[httpMethod].valid }"
      :md-icon="resp[httpMethod].pass ? 'close' : 'done'"
      :md-label="resp[httpMethod].pass ? 'CORS FAILED' : 'CORS PASS'"
    >
      <h5>{{ resp[httpMethod].tag }}</h5>
      <h4>STATUS CODE : {{ resp[httpMethod].code }}</h4>
      <br />
      <p>{{ resp[httpMethod].message }}</p>
      <br />
      <md-button class="md-primary md-raised">try again</md-button>
    </md-empty-state>
  </div>
</template>
<script>
export default {
  props: ["cors", "httpMethod"],
  watch: {
    httpMethod: function () {
      this.load = true;
    },
  },
  data() {
    return {
      load: false,
      resp: {
        PUT: { pass: true, code: 400, message: "hey there", tag: "error tag" },
        GET: { pass: false, code: 400, message: "hey there", tag: "error tag" },
      },
    };
  },
  mounted() {
    console.log(this.httpMethod);
    // this.resp[this.httpMethod].message
  },
  computed: {
    error_code: function () {
      // this.resp.code = "";

      return {};
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
