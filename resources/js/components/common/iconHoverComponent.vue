<template>
    <div class="hoverComponetRemove">
        <div class="inner_plus_data">        
        <i class="ti-pencil" title="Edit" @click="openModel()"></i>
        <!-- <i class="ti-trash" title="Delete"  data-toggle="tooltip" @click="deleteLogo"></i> -->
      </div>
    </div>
</template>

<script>
// import { displayModal } from "../frontCoverComponent";
export default {
  props: ['divId' , 'typeData', 'innerIndex', 'mainIndex'],
  methods:{
    openModel(){
      this.$parent.displayModal()
    }
  }
}
</script>
