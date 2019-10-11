<template>
	<div>
		<div class="modal fade show_data" id="ifcTextModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-xl" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Insert New Module 
							<!-- <a  class="float-left" style="cursor: pointer;">
								<i class="ti-arrow-left"></i>
							</a> -->
						</h5>
					</div>
					<div class="modal-body">
						<div class="tab-content">
							<div id="content" class="side_bar_content tab-pane active">
								<div  id="design" class="tab-pane">
									<div class="content_area">
										<div class="font_content">
											Edit IFC Right Text
										</div>
                                        <!---for profile_text IFC ---->
                                            <div>
                                                 <div class="row modal_radiobox" :class="{'activeRadio':this.IfcRightTextValue == 'default' }">
                                                    <div class="col-sm-6 text_field">
                                                        <span>Use Default text</span>
                                                    </div>
                                                    <div class="col-sm-6 icon_field">
                                                        <section title=".slideTwo">
                                                            <!-- .slideTwo -->
                                                            <div class="slideTwo">  
                                                            <input  type="radio" id="UseTextDefault" value="default" v-model="IfcRightTextValue" @change="getIfcRightTextInputValue(IfcRightTextValue)" name="checkifcright" checked />
                                                            <label for="UseTextDefault"></label>                     
                                                            </div>
                                                            <!-- end .slideTwo -->
                                                        </section>				
                                                    </div>
                                                </div>
                                                <div class="row modal_radiobox" :class="{'activeRadio':this.IfcRightTextValue == 'remove' }">
                                                    <div class="col-sm-6 text_field">
                                                        <span>Customize text</span>
                                                    </div>
                                                    <div class="col-sm-6 icon_field">
                                                        <section title=".slideTwo">
                                                            <!-- .slideTwo -->
                                                            <div class="slideTwo">  
                                                            <input type="radio" value="remove" v-model="IfcRightTextValue" @change="getIfcRightTextInputValue(IfcRightTextValue)" id="remove" name="checkifcright" checked />
                                                            <label for="remove"></label>
                                                        
                                                            </div>
                                                            <!-- end .slideTwo -->
                                                        </section>
                                                    </div>
                                                </div>
                                                 <div class="content_area" v-if="this.displayTextAreaFor" >
                                                    <!-- start body content -->
                                                    <div class="font_content">Body Content</div>
                                                    <div class="editable" contenteditable="true"></div>
                                                    <!-- <codemirror v-show="showCodeEditor" v-model="editorCodeTemplate" :options="cmOptions"></codemirror> -->

                                                    <!-- start font style -->
                                                    <div class="font_content">Font Style</div>
                                                    <div class="font_body">
                                                        <ul>
                                                            <li>
                                                                <a @click="addfont('italic', false, null), (italicBtn = !italicBtn)" :class="{'btn': true, 'active' : italicBtn}" title="Italic" data-toggle="tooltip" data-placement="top">
                                                                    <i class="ti-Italic"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a @click="addfont('bold', false, null), (boldBtn = !boldBtn)" :class="{'btn': true, 'active' : boldBtn}" title="Bold" data-toggle="tooltip" data-placement="top">
                                                                    <i class="fas fa-bold"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a @click="addfont('underline', false, null), (underlineBtn = !underlineBtn)" :class="{'btn': true, 'active' : underlineBtn}" title="Underline" data-toggle="tooltip" data-placement="top">
                                                                    <i class="ti-underline"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a @click="getvalue()" :class="{'btn': true, 'active' : codeBtn}" title="Code Format" data-toggle="tooltip" data-placement="top">
                                                                    <i class="ti-split-v-alt" ></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <!-- start font heading tag -->
                                                    <div class="font_content">Font Heading Tag</div>
                                                    <div class="heading_tag">
                                                        <select name id @change="insertTag(headingTag)" v-model="headingTag">
                                                            <option value>Select Heading Tag</option>
                                                            <option value="h1">Heading &lt;h1&gt;</option>
                                                            <option value="h2">Heading &lt;h2&gt;</option>
                                                            <option value="h3">Heading &lt;h3&gt;</option>
                                                            <option value="h4">Heading&lt;h4&gt;</option>
                                                            <option value="h5">Heading &lt;h5&gt;</option>
                                                            <option value="h6">Heading &lt;h6&gt;</option>
                                                            <option value="p">Paragraph &lt;p&gt;</option>
                                                        </select>
                                                    </div>

                                                    
                                                    <!-- start font Family -->
                                                    <!-- <div class="font_content">Font Family</div>
                                                    <div class="heading_tag">
                                                        <select class="dataselect" @change="addfont('fontName', false , fontFamilySelect)" v-model="fontFamilySelect">
                                                            <option value="">
                                                                <span class="text_content" >Select Font</span>
                                                            </option>
                                                            <option v-for="(font, index) in fontFamily" :key="index" :value="font.family">{{ font.family }}</option>
                                                        </select>
                                                    </div> -->

                                                    <!-- start text alignment -->
                                                    <div class="font_content">Text Alignment</div>
                                                    <div class="font_body">
                                                        <ul>
                                                            <li>
                                                                <a @click="addfont('justifyLeft' ,false, null), resetActiveOnAlign('textLeft', textLeft)" :class="{'btn': true, 'active' : textLeft}" title="Left" data-toggle="tooltip" data-placement="top">
                                                                    <i class="ti-align-left"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a @click="addfont('justifyCenter', false, null), resetActiveOnAlign('textCenter', textCenter)" :class="{'btn': true, 'active' : textCenter}" title="Center" data-toggle="tooltip" data-placement="top">
                                                                    <i class="ti-align-center"></i>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a @click="addfont('justifyRight' ,false, null), resetActiveOnAlign('textRight', textRight)" :class="{'btn': true, 'active' : textRight}" title="Right" data-toggle="tooltip" data-placement="top">
                                                                    <i class="ti-align-right"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a @click="addfont('justifyFull' ,false, null), resetActiveOnAlign('textJustify', textJustify)" :class="{'btn': true, 'active' : textJustify}" title="Justify" data-toggle="tooltip" data-placement="top">
                                                                    <i class="ti-align-justify"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <!-- start text Color -->
                                                    <div class="font_content">Text Color</div>
                                                    <div class="font_body">
                                                        <div class="col-sm-12">
                                                            <color-picker v-model="color_picker" @input="changeFontColor"></color-picker>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        <!---END profile_text IFC ---->
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<div class="inner_footer_content">
							<button class="btn bottom_btn" data-dismiss="modal" @click="cancelModel">
								<i class="ti-close" aria-hidden="true"></i>
							</button>
							<button class="btn bottom_btn" @click="addfont('redo', false, null)">
								<i class="ti-back-right"></i>
							</button>
							<button class="btn bottom_btn" @click="addfont('undo', false, null)">
								<i class="ti-back-left"></i>
							</button>
							<button class="btn bottom_btn"  data-dismiss="modal" @click="saveIfcChanges">
								<i class="ti-check" ></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
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
			headingTag: "",
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
            IfcRightTextValue:'default'
		};
	},
	components: {
		"color-picker": ColorPicker
	},
	computed: {
		
	},
	created() {},
	mounted() {
		$("#ifcModal").modal({
			focus: false,
			// Do not show modal when innitialized.
			show: false,
			backdrop: 'static', // For static modal
			keyboard: false // prevent click outside of the modal
		});
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
		}
	}
};
</script>

<style>
</style>