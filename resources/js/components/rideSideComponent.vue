<template>
	<div class="col-sm-10 right_side">
		<alertComponent></alertComponent>
		<div class="gjs-pn-buttons top_preview"></div>
		<router-link to="/preview" target="_blank"><button class="preview_mag" @click="preiviewTab()">Preview</button></router-link>
		 <button class="save_ifc_to_db" @click="save(2)">Save & download</button>
		 <button class="save_ifc_to_db" @click="save(1)">Save</button>
		<LoaderComponent/>
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
import alertComponent from './common/alertComponent';
export default {
	components:{
		alertComponent
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
      save(value){
		  if (value == 1) {
			this.$refs.submit.save_front_cover()
		  }else if (value == 2) {
			this.$refs.submit.save_and_download()  
		  }
	  }
	},
}
</script>

<style>

</style>
