<template>
  <div class="tooltip tool_tips_hover">
    <i class="far fa-question-circle"></i>
    <span class="tooltiptext">{{titleText}}</span>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      titleText: this.title
    };
  },
  mounted() {
    // console.log(this.titleText)
  }
};
</script>
