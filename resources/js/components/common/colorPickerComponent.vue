<template>
    <div>
        <button @click="showdata">addclick</button>
        <div v-show="color_show">
        <div class="colo_main">
            <transition-group name="custom-classes-transition" enter-active-class="animated rotateInDownLeft " leave-active-class="animated rotateInDownRight " >
            <div v-show="color_show" v-for="(color, index) in colorArray" :key="index++">
                <b class="color_sub" @click="changeColor(color)" :style="{'background-color': color}" :key="index"></b>
            </div>
            </transition-group>
        </div> 
       
        </div>
   

    </div>    
   
</template>

<script>
import { colorCode } from './colorArray'
export default {
    data () {
        return {
            items: [1,2,3,4,5,6,7,8,9],
            colorArray: colorCode,
            color_show:false,
            cells: Array.apply(null, { length: 81 })
    	.map(function (_, index) { 
      	return {
        	id: index,
        	number: index % 9 + 1
        }
      })
        }
    },
    methods: {
        changeColor (color) {
            alert(color)
        },
        showdata(){
          this.color_show = !this.color_show;
        },
    //     shuffle: function () {
    //     this.cells = _.shuffle(this.cells)
    //     alert(this.cells)
    // },
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
    }
}
</script>

<style scoped>
.colo_main{width: 19%; text-align: center;margin-left: 90px; 
}
.color_sub{ float: left; height: 26px; width: 26px; margin: 10px 3px 0 0; border-radius: 15px; box-shadow: inset 0 0 5px 0 rgba(0,0,0,.2);}
.colorInner_section{
    background-color: black;
    border-radius:50px;
    width: 30px;
    height: 30px;
    display: inline-block;
}
.color_picker_section{
    width: 100%;
}
.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaa;
  margin-right: -1px;
  margin-bottom: -1px;
}
.cell:nth-child(3n) {
  margin-right: 0;
}
.cell:nth-child(27n) {
  margin-bottom: 0;
}
.cell-move {
  transition: transform 1s;
}
.flip-list-move {
  transition: transform 1s;
}
</style>
