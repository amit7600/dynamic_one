<template>
    <div class="gjs-pn-buttons">
        <iconPreviewComponent/>
        <div v-html="this.previewFc" class="col-sm-10 preview_div" style="margin: 0px auto; width: 100%;"></div>
    </div>
</template>

<script>
export default {
   mounted(){
      $(document).ready(function(){
           $('.hoverComponetRemove').css('display','none')
      })
   }
}
</script>