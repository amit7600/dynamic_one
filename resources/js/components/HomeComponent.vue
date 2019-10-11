<template>
    <div>
       <div class="row main_container m-0">
			<LeftSideComponent />
            <RightSideComponent /> 	
          
		</div>
        <!-- <ModelInputComponent/> -->
        <FileModalComponent />
    </div>
</template>

<script>
// import ModelInputComponent from "./model/modelInputComponent";
import FileModalComponent from "./model/fileModalComponent";
    export default {
        components: {
        //   ModelInputComponent,
          FileModalComponent
        },
        data(){
          return{
                
          }
        },
        mounted() {
            console.log('Component mounted.1111')
        }
    }
</script>
