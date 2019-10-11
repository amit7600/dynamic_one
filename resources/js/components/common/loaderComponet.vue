<template>
  <div>
       <div v-if="this.$store.state.Savefcloader" class='loader' style="position: absolute;left: 45%;top: 45%;">
            <BounceLoader :color='this.loaderColor' :size='this.loader' :height='loaderHeight' />
        </div>
  </div>
</template>

<script>
export default {
    data(){
       return{
            loader:parseInt(100),
            loaderHeight:parseInt(20),
            loaderColor:'#3949ab'
        }
    }
}
</script>

<style>

</style>