<template>
    <div>
    	<div class="gjs-pn-buttons">
    		<span class="gjs-pn-btn fa fa-desktop" @click="changeView('desktop')"></span>
    		<span class="gjs-pn-btn fa fa-tablet" @click="changeView('tablet')"></span>
    		<span class="gjs-pn-btn fa fa-mobile" @click="changeView('mobile')"></span>
    	</div>
    	<div v-html="fcPreviewShow" class="col-sm-10 test_div" v-if='previewCover == 1'></div>
    	<div v-html="ifcPreviewShow" class="col-sm-10 test_div" v-if='previewCover == 2'></div>
    	<div v-html="ibcPreviewShow" class="col-sm-10 test_div" v-if='previewCover == 3'></div>
    	<div v-html="bcPreviewShow" class="col-sm-10 test_div" v-if='previewCover == 4'></div>
    	<ul class="pagination">
		  <li class="page-item"><a class="page-link" href="#" @click="nextSlide(1)">1</a></li>
		  <li class="page-item"><a class="page-link" href="#" @click="nextSlide(2)">2</a></li>
		  <li class="page-item"><a class="page-link" href="#" @click="nextSlide(3)">3</a></li>
		  <li class="page-item"><a class="page-link" href="#" @click="nextSlide(4)">4</a></li>
		</ul>
    </div>
</template>

<script>
export default {
	 mounted(){
	 },
	data(){
		return{
			fcPreviewShow: this.$store.state.fcPreview,
			ifcPreviewShow: this.$store.state.ifcPreview,
			ibcPreviewShow: this.$store.state.ibcPreview,
			bcPreviewShow: this.$store.state.bcPreview,
			previewCover: 1,
		}
	},
	methods:{  
	  changeView(viewData){
	  	if(viewData == 'desktop'){
	  		$('.test_div').css('width','100%')
	  	}else if(viewData == 'tablet'){
	  		$('.test_div').css('width','756px')
	  	}else{
	  		$('.test_div').css('width','414px')
	  	}
	  },
	  nextSlide(slideNo){
	  	this.previewCover = slideNo
	  } 
	},   
}
</script>

<style>
.gjs-pn-buttons{ padding:10px}
.pagination{margin-top:20px}
</style>
