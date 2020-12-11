<template>
  <div class="home">
    <url @http_change="get_method" @run-cors="run_cors"></url>
    <respType @set-active="set_active" :http_method="middle_http"></respType>
    <bottom :httpMethod="activeMethod" :resp="resp"></bottom>
  </div>
</template>

<script>
import url from "@/components/api/url.vue";
import respType from "@/components/api/middle.vue";
import bottom from "@/components/api/bottom.vue";
import cors_axios from "@/mixin/_axios.js";
import { validURL } from "@/mixin/method.js";
export default {
  components: {
    url,
    respType,
    bottom,
  },
  data() {
    return {
      middle_http: [],
      activeMethod: "",
      cors_axios: new cors_axios(),
      resp: {
        PUT: { pass: 'load', code: "000", message: "please enter a valid url", tag: "invalid url"},
        GET: { pass: 'load', code: "000", message: "please enter a valid url", tag: "invalid url"},
        POST: { pass: 'load', code: "000", message: "please enter a valid url", tag: "invalid url"},
        DELETE: { pass: 'load', code: "000", message: "please enter a valid url", tag: "invalid url"},
      },
      methodToUse: [],
    };
  },
  methods: {
    get_method: function (e) {
      let fresh_data = [];
      e.forEach((element) => {
        if (element != "") {
          fresh_data.push({ tag: element, icon: "error" });
        }
      });
      this.middle_http = fresh_data;
      this.methodToUse = e;
      // console.log(this.middle_http);
      // set active method to first
      if (this.middle_http[0].tag != undefined) {
        this.activeMethod = this.middle_http[0].tag;
      }
    },
    set_active: function (e) {
      this.activeMethod = e;
    },
    run_cors: function (url) {
      if (validURL(url)) {
        this.cors_axios.testCors(this.methodToUse, url, this.resp);
      } else {
        console.log("invalid url");
      }
    },
  },
};
</script>
