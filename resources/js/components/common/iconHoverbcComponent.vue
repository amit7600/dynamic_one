<template>
    <div class="hoverComponetRemove">
        <div class="inner_plus_data">        
        <i class="ti-pencil" title="Edit" @click="displaybclogo($event)"></i>
        <!-- <i class="ti-trash" title="Delete"  data-toggle="tooltip" @click="deleteLogo"></i> -->
      </div>
    </div>
</template>

<script>
export default {
  props: ['divId' , 'typeData', 'innerIndex', 'mainIndex']
}
</script>
