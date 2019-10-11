<template>
	<div class="tooltips_main">
		<div class="tooltip_component"><i class="far fa-question-circle"></i>
		  <span class="tooltiptext">{{titleText}}</span>
		</div>	    
	</div>    
</template>

<script>
export default {
  props: ['title'],
  data(){
  	return{
  		titleText:this.title
  	}
  },
  mounted(){
  	// console.log(this.titleText)
  }
}

</script>
