<template>
	<div>
		
	</div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
import ColorPicker from "vue-iro-color-picker"
export default {
  	data() {
		return {
			fileModel: "",
			inside: 'inner',
			showCodeEditor: false,
			headingTag: this.getHeadingTag ,
			color_picker: "",
			code: this.editorTempData,
			width: '',
			height: '',
			italicBtn: false,
			boldBtn: false,
			underlineBtn: false,
			unorderlistBtn: false,
			orderlistBtn: false,
			codeBtn: false,
			textLeft: false,
			textCenter: false,
			textRight: false,
			textJustify: false,
			
		};
	},
	components: {
		"color-picker": ColorPicker
	},
	computed: {
		selectValue:{
			get() {
				return this.$store.state.fcCheckboxChoose;
			},
			set(newValue){
			//   this.selectValue = newValue
				return this.$store.state.tempFcCheckboxChoose = newValue
			}
		},
		getHeadingTag:{
			get() {
				return this.$store.state.headingTagFc;
			},
			set(newValue){
			return this.$store.state.headingTagFc = newValue
			}
		}
		
	},
	created() {},
	mounted() {
		$("#exampleModal").modal({
			focus: false,
			// Do not show modal when innitialized.
			show: false,
			backdrop: 'static', // For static modal
			keyboard: false // prevent click outside of the modal
		});
		axios.get("api/userBooks/1")
				.then(response => {
					this.headingTag = response.data.data.front_cover.headingTag
				})
				
	},
	methods: {
		// showCodeMap () {
		// this.showCodeEditor = !this.showCodeEditor
		// this.codeBtn = !this.codeBtn
		// if (this.showCodeEditor) {
		// 	this.editorCodeTemplate = $('.editable').html();
		// } else {
		// 	console.log(this.editorCodeTemplate)
		// 	$('.editable').empty()
		// 	$('.editable').html(this.editorCodeTemplate);
		// }
		// },
		// onCmReady(cm) {
		// console.log('the editor is readied!', cm)
		// },
		// onCmFocus(cm) {
		// console.log('the editor is focus!', cm)
		// },
		// onCmCodeChange(newCode) {
		// console.log('this is new code', newCode)
		// this.code = newCode
		// },
		resetActiveOnAlign (type, value) {
			this.textLeft = false
			this.textRight = false
			this.textCenter = false
			this.textJustify = false
			this[type] = !this[value]
		},
	}
};
</script>

<style>
</style>