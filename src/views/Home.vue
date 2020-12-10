<template>
  <div class="home">
    <url @http_change="get_method"></url>
    <respType @set-active="set_active" :http_method="middle_http"></respType>
    <bottom :httpMethod="activeMethod"></bottom>
  </div>
</template>

<script>
import url from "@/components/api/url.vue";
import respType from "@/components/api/middle.vue";
import bottom from "@/components/api/bottom.vue";
import cors_axios from "@/mixin/_axios.js";
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
      cors_axios: new cors_axios()
    };
  },
  mounted(){
    this.cors_axios.testCors()
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
      if (this.middle_http[0].tag != undefined) {
        this.activeMethod = this.middle_http[0].tag;
      }
    },
    set_active: function (e) {
      this.activeMethod = e;
    },
  },
};
</script>
