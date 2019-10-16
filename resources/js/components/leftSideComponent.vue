<template>
    <div class="col-sm-2 left_side pl-0">
        <ul class="nav border_full">
            <li  >
                <div :class="{'inner_left_side': true, 'active': this.showCover == 1}" >
                    <h4>Front Cover</h4> 
                    <router-link to="/" >
                        <div class="inner_left_img">
                            <img src="images/fc.jpg" alt="" title="">        
                        </div>
                    </router-link>
                </div> 
            </li>
            <li>
                <div :class="{'inner_left_side': true, 'active ': this.showCover == 2}">
                    <h4>Inside Front Cover</h4> 
                    <router-link to="/ifc">
                        <div class="inner_left_img">
                            <img src="images/ifc.jpg" alt="" title="">
                        </div>
                    </router-link>
                </div>
            </li>
            <li>
                <div :class="{ 'inner_left_side': true, 'active': this.showCover == 3}" >
                    <h4>Inside Back Cover</h4>
                    <router-link to="/insideBackCover">
                        <div class="inner_left_img">
                            <img src="images/ibc.jpg" alt title />
                        </div>
                    </router-link>
                </div>
            </li>
            <li>
                <div :class="{'inner_left_side':true, 'active': this.showCover == 4}" >
                    <h4>Back Cover</h4> 
                    <router-link to="/backCover">
                        <div class="inner_left_img">
                            <img src="images/bc.jpg" alt="" title="">                   
                        </div>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {
             showOne: false
        }
    },
   mounted(){
    this.showOne = this.showFrontCover
   },
   computed: {
       ...mapState([
           'showCover'
       ])
   },
   methods:{
       newData(){
           alert(this.showOne)
       }
   }
}
</script>

<style>

</style>
