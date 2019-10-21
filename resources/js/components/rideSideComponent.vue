<template>
	<div class="col-sm-10 right_side">
		<alertComponent></alertComponent>
		<LoaderComponent/>
		<headerComponent></headerComponent>
        <div class="preview_responsive" v-if="!this.$store.state.Savefcloader">
	    	<div class="sub_right_side preview_content">
				<div class="row align-items-center">
					<div class="col-8 align-self-center someBlock"></div>
				</div>
	       		<frontCover ref="submit"/>
	       <!-- <IfcCover/>    -->
	    	</div>
	    </div>
	</div>
</template>

<script>
import headerComponent from './common/headerComponent'
import alertComponent from './common/alertComponent';
export default {
	components:{
		alertComponent,
		headerComponent
	},
	data(){
		return{
			fcContent :'',
		}
	},
   mounted(){
   		this.fcContent = $('.preview_content').html(); 
		this.ACTION_CHANGE_STATE(['fcPreview', this.fcContent])
	},
    methods:{  
      saveCover(){
			this.$refs.submit.save_front_cover()
	  },
	  downloadCover(){
		  	this.$refs.submit.save_and_download()
	  }
	},
}
</script>

<style>

</style>
