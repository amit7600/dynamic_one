<template>
  <div>
    <div class="vld-parent">
      <loading
        :active.sync="loader"
        :can-cancel="true"
        :is-full-page="fullPage"
        color="#3949ab"
      ></loading>
    </div>
  </div>
</template>

<script>
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import { mapState } from "vuex";

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true
    };
  },
  computed: {
    ...mapState(["loader"])
  },
  components: {
    Loading
  },
  methods: {}
};
</script>

<style>
</style>