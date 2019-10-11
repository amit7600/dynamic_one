<template>
	<div>
		<div class="modal fade show_data" id="ifcModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-xl" role="document"  :class="{'custom_address':this.openIfcModalForText == 'ifc-text'}">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Choose logo
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
										
                                        <!---for profile image ---->
                                            <div v-if="this.openIfcModalForLogo != 'ifc-logo' && this.openIfcModalForText != 'ifc-text' && this.openIfcModalForSignature != 'ifc-signature'"> 
                                                <div class="font_content">
        											Upload Profile Image
        										</div>
                                                <div class="Logo_select_option row">
                                                    <!-- <div class="row modal_radiobox" :class="{'activeRadio':this.selectIfcValue == 'remove' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="slideTwo">
        														<input type="radio" value="remove" v-model="selectIfcValue" @change="getIfcInputValue(selectIfcValue)" id="slideTwo" name="check" checked />Remove Profile Image
        													</label>
        												</div>
                                                    </div> -->
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.selectIfcValue == 'default' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="UseDefault">
        														<input  type="radio" id="UseDefault" value="default" v-model="selectIfcValue" @change="getIfcInputValue(selectIfcValue)" name="check" checked />Use Default Profile
        													</label>
        												</div>
                                                    </div>
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.selectIfcValue == 'addMedia' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="addMedia">
        														<input  type="radio" id="addMedia" data-id="addMedia_id" value="addMedia" v-model="selectIfcValue" @change="getIfcInputValue(selectIfcValue)" name="check" checked />Add Profile Image
                                                                <toolTipsComponent title="400 X 400"/>
        													</label>
        												</div>                                                        
                                                    </div>
                                                </div>
                                                <div class="add_media">
                                                    <button v-if="this.$store.state.displayIfcMedia" class="btn btn-block media_btn " data-target="#fileModal" data-toggle="modal" @click="check_Value(1)">
                                                        <span class="font_content">Add Media</span>
                                                    </button>
                                                </div>
                                                <div v-if="this.$store.state.displayIfcMedia" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                    <img src="images/avatar_image.jpg" alt="" data-target="#fileModal" data-toggle="modal"  title=""  style="margin-bottom:20px;" v-show="imageIfcPath == ''">
                                                    <img data-target="#fileModal" data-toggle="modal"  v-if="imageIfcPath != ''" :src="imageIfcPath" alt="" srcset="" style="margin-bottom:20px; margin-top: 37px;">
                                                </div>
                                            </div>
                                        <!---End profile image ---->
                                        <!---for logo ifc ---->
                                            <div v-if="this.openIfcModalForLogo == 'ifc-logo'" > 
                                                <div class="font_content">
        											Upload Logo Image
        										</div>
                                                <div class="Logo_select_option row">
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.selectIfcLogoValue == 'remove' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="slideTwo">
        														<input type="radio" value="remove" v-model="selectIfcLogoValue" @change="getIfcLogoInputValue(selectIfcLogoValue)" id="slideTwo" name="check" checked />Remove Logo
        													</label>
        												</div>
                                                    </div>
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.selectIfcLogoValue == 'default' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="UseDefault">
        														<input  type="radio" id="UseDefault" value="default" v-model="selectIfcLogoValue" @change="getIfcLogoInputValue(selectIfcLogoValue)" name="check" checked />Use Default Logo
        													</label>
        												</div>
                                                    </div>
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.selectIfcLogoValue == 'addMedia' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="addMedia">
        														<input  type="radio" id="addMedia" data-id="addMedia_id" value="addMedia" v-model="selectIfcLogoValue" @change="getIfcLogoInputValue(selectIfcLogoValue)" name="check" checked />Add Logo
                                                                <toolTipsComponent title="500 X 500"/>
        													</label>
        												</div>
                                                    </div>
                                                </div>
                                                <div class="add_media">
                                                    <button v-if="this.$store.state.displayIfcLogoMedia" class="btn btn-block media_btn"  @click="check_Value(2)" data-target="#fileModal" data-toggle="modal">
                                                        <span class="font_content">Add Media</span>
                                                    </button>
                                                </div>
                                                <div v-if="this.$store.state.displayIfcLogoMedia" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                    <img src="images/avatar_image.jpg" alt="" data-target="#fileModal" data-toggle="modal"  title=""  style="margin-bottom:20px;" v-show="imageIfcLogoPath == ''">
                                                    <img data-target="#fileModal" data-toggle="modal"  v-if="imageIfcLogoPath != ''" :src="imageIfcLogoPath" alt="" srcset="" style="margin-bottom:20px; margin-top: 37px;">
                                                </div>
                                            </div>
                                        <!---End logo ifc ---->
                                        <!---for profile_text IFC ---->
                                            <div  v-if="this.openIfcModalForText == 'ifc-text'">  
                                                <div class="ifc_title">
                                                    <label for="usr">Name </label>
                                                    <input type="text" v-model='titleInputIfc' @keyup="getTitleIfc(titleInputIfc)" class="form-control" id="usr" placeholder="Name">
                                                </div>
                                                <div class="ifc_title">
                                                    <label for="usr">Company Details</label>
                                                    <input type="text" v-model='companyInputIfc' @keyup="getCompanyNameIfc(companyInputIfc)" class="form-control" id="usr" placeholder="Company Name">
                                                </div>
                                                <div class="ifc_title">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <!-- <label for="usr">Designation 1</label> -->
                                                            <input type="text" v-model='designationInputIfc1' @keyup="getdesignationIfc1(designationInputIfc1)" class="form-control" id="usr" placeholder="Designation 1">
                                                        </div>
                                                        <div class="col-md-4">
                                                            <!-- <label for="usr">Designation 2</label> -->
                                                            <input type="text" v-model='designationInputIfc2' @keyup="getdesignationIfc2(designationInputIfc2)" class="form-control" id="usr" placeholder="Designation 2">
                                                        </div>
                                                        <div class="col-md-4">
                                                            <!-- <label for="usr">Designation 3</label> -->
                                                            <input type="text" v-model='designationInputIfc3' @keyup="getdesignationIfc3(designationInputIfc3)" class="form-control" id="usr" placeholder="Designation 3">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ifc_title">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!-- <label for="usr">Title 1</label> -->
                                                            <input type="text" v-model='designationTitleInputIfc1' @keyup="getdesignationTitleIfc1(designationTitleInputIfc1)" class="form-control" id="usr" placeholder="Title 1">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!-- <label for="usr">Title 2</label> -->
                                                            <input type="text" v-model='designationTitleInputIfc2' @keyup="getdesignationTitleIfc2(designationTitleInputIfc2)" class="form-control" id="usr" placeholder="Title 2">
                                                        </div>
                                                    </div>
                                                </div>
                                                <!---------------------->
                                                <!------------------>
                                                <div class="ifc_title">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!-- <label for="usr">Title 3</label> -->
                                                            <input type="text" v-model='designationTitleInputIfc3' @keyup="getdesignationTitleIfc3(designationTitleInputIfc3)" class="form-control" id="usr" placeholder="Title 3">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!-- <label for="usr">Title 4</label> -->
                                                            <input type="text" v-model='designationTitleInputIfc4' @keyup="getdesignationTitleIfc4(designationTitleInputIfc4)" class="form-control" id="usr" placeholder="Title 4">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ifc_title" v-if="this.addAddressButton">
                                                    <div class="add_media" style="margin:0px;">
                                                        <button class="btn btn-block media_btn" style="margin:0px;" @click="showAddAddress()">
                                                            <span class="font_content">Add</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <!-- add more company details-->
                                                <!------------  -------->
                                                
                                                <div v-if="this.displayAddressLable">
                                                    <div class="ifc_title">
                                                        <label for="usr">Company Details 2</label>
                                                        <input type="text" v-model='company2InputIfc' @keyup="getCompanyName2Ifc(company2InputIfc)" class="form-control" id="usr" placeholder="Company Name">
                                                    </div>
                                                    <div class="ifc_title">
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <!-- <label for="usr">Designation 1</label> -->
                                                                <input type="text" v-model='designationInput1' @keyup="getdesignation1(designationInput1)" class="form-control" id="usr" placeholder="Designation 1">
                                                            </div>
                                                            <div class="col-md-4">
                                                                
                                                                <input type="text" v-model='designationInput2' @keyup="getdesignation2(designationInput2)" class="form-control" id="usr" placeholder="Designation 2">
                                                            </div>
                                                            <div class="col-md-4">
                                                                <!-- <label for="usr">Designation 3</label> -->
                                                                <input type="text" v-model='designationInput3' @keyup="getdesignation3(designationInput3)" class="form-control" id="usr" placeholder="Designation 3">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ifc_title">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <!-- <label for="usr">Title 1</label> -->
                                                                <input type="text" v-model='designationTitleInput1' @keyup="getdesignationTitle1(designationTitleInput1)" class="form-control" id="usr" placeholder="Title 1">
                                                            </div>
                                                            <div class="col-md-6">
                                                                <!-- <label for="usr">Title 2</label> -->
                                                                <input type="text" v-model='designationTitleInput2' @keyup="getdesignationTitle2(designationTitleInput2)" class="form-control" id="usr" placeholder="Title 2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!---------------------->
                                                    <!------------------>
                                                    <div class="ifc_title">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <!-- <label for="usr">Title 3</label> -->
                                                                <input type="text" v-model='designationTitleInput3' @keyup="getdesignationTitle3(designationTitleInput3)" class="form-control" id="usr" placeholder="Title 3">
                                                            </div>
                                                            <div class="col-md-6">
                                                                <!-- <label for="usr">Title 4</label> -->
                                                                <input type="text" v-model='designationTitleInput4' @keyup="getdesignationTitle4(designationTitleInput4)" class="form-control" id="usr" placeholder="Title 4">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ifc_title">
                                                    <div class="add_media" style="margin:0px;">
                                                        <button class="btn btn-block media_btn" style="margin:0px;" @click="removeAddAddress()">
                                                            <span class="font_content">Remoove</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                </div>    
                                                <!------------------>
                                                <!------------------>
                                                <div class="ifc_title">
                                                    <label for="usr">Address</label>
                                                    <input type="text" v-model='addressInputIfc1' @keyup="getAddressIfc1(addressInputIfc1)" class="form-control" id="usr" placeholder="Address">
                                                </div>
                                                <!---------------------->
                                                <!------------------>
                                                <div class="ifc_title">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!-- <label for="usr">Direct Phone</label> -->
                                                            <input type="text" v-model='directPhoneInputIfc' @keyup="getdirectPhoneIfc(directPhoneInputIfc)" class="form-control" id="usr" placeholder="Direct Phone">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!-- <label for="usr">Office Phone</label> -->
                                                            <input type="text" v-model='officePhoneInputIfc' @keyup="getOfficePhoneIfc(officePhoneInputIfc)" class="form-control" id="usr" placeholder="Office Phone">
                                                        </div>
                                                    </div>
                                                </div>
                                                <!---------------------->
                                                <!------------------>
                                                <div class="ifc_title">
                                                    <label for="usr">URL</label>
                                                    <input type="text" v-model='websiteUrlInputIfc' @keyup="getWebsiteUrlIfc(websiteUrlInputIfc)" class="form-control" id="usr">
                                                </div>
                                                <!---------------------->
                                                <!------------------>
                                                <div class="ifc_title">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label for="usr">Email</label>
                                                            <input type="text" v-model='emailInputIfc' @keyup="getEmailIfc(emailInputIfc)" class="form-control" id="usr">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="usr">ST Number</label>
                                                            <input type="text" v-model='stNumberInputIfc' @keyup="getstNumberIfc(stNumberInputIfc)" class="form-control" id="usr">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        <!--------- For Signature IFC  ---------->                      
                                            <div class="signature" v-if="this.openIfcModalForSignature == 'ifc-signature'">
                                                <div class="font_content">
        											Upload Signature Image
        										</div>
                                                <div class="Logo_select_option row">
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.selectIfcSignatureValue == 'remove' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="slideTwo">
        														<input type="radio" value="remove" v-model="selectIfcSignatureValue" @change="getIfcSignatureInputValue(selectIfcSignatureValue)" id="slideTwo" name="check" checked />Remove Signature
        													</label>
        												</div>
                                                    </div>
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.selectIfcSignatureValue == 'default' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="UseDefault">
        														<input type="radio" id="UseDefault" value="default" v-model="selectIfcSignatureValue" @change="getIfcSignatureInputValue(selectIfcSignatureValue)" name="check" checked />Use Default Signature
        													</label>
        												</div>
                                                    </div>
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.selectIfcSignatureValue == 'addMedia' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="addMedia">
        														<input type="radio" id="addMedia" data-id="addMedia_id" value="addMedia" v-model="selectIfcSignatureValue" @change="getIfcSignatureInputValue(selectIfcSignatureValue)" name="check" checked />Add Signature
                                                                <toolTipsComponent title="600 X 600"/>
        													</label>
        												</div>
                                                    </div>
                                                </div>
                                                <div class="add_media">
                                                    <button v-if="this.$store.state.displayIfcSignatureMedia" class="btn btn-block media_btn" @click="check_Value(3)" data-target="#fileModal" data-toggle="modal">
                                                        <span class="font_content">Add Media</span>
                                                    </button>
                                                </div>
                                                <div v-if="this.$store.state.displayIfcSignatureMedia" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                    <img src="images/avatar_image.jpg" alt="" data-target="#fileModal" data-toggle="modal" title="" style="margin-bottom:20px;" v-show="imageIfcSignaturePath == ''">
                                                    <img data-target="#fileModal" data-toggle="modal" v-if="imageIfcSignaturePath != ''" :src="imageIfcSignaturePath" alt="" srcset="" style="margin-bottom:20px; margin-top: 37px;">
                                                </div>
                                            </div>
                                        <!------------End IFC Signature  ------->
                                        <!---------------------->
                                            <!-- <div  v-if="this.openIfcModalForText == 'ifc-text'">
                                                 <div class="row modal_radiobox" :class="{'activeRadio':this.selectIfcTextValue == 'default' }">
                                                    <div class="col-sm-6 text_field">
                                                        <span>Use Default text</span>
                                                    </div>
                                                    <div class="col-sm-6 icon_field">
                                                        <section title=".slideTwo">
                                                            
                                                            <div class="slideTwo">  
                                                            <input  type="radio" id="UseDefault" value="default" v-model="selectIfcTextValue" @change="getIfcTextInputValue(selectIfcTextValue)" name="check" checked />
                                                            <label for="UseDefault"></label>                         
                                                            </div>
                                                            
                                                        </section>				
                                                    </div>
                                                </div>
                                                <div class="row modal_radiobox" :class="{'activeRadio':this.selectIfcTextValue == 'remove' }">
                                                    <div class="col-sm-6 text_field">
                                                        <span>Customize text</span>
                                                    </div>
                                                    <div class="col-sm-6 icon_field">
                                                        <section title=".slideTwo">
                                                           
                                                            <div class="slideTwo">  
                                                            <input type="radio" value="remove" v-model="selectIfcTextValue" @change="getIfcTextInputValue(selectIfcTextValue)" id="slideTwo" name="check" checked />
                                                            <label for="slideTwo"></label>
                                                        
                                                            </div>
                                                            
                                                        </section>
                                                    </div>
                                                </div>
                                                 <div class="content_area" v-if="displayIfcTextArea">
                                                    
                                                    <div class="font_content">Body Content</div>
                                                    <div class="editable" contenteditable="true" ></div>
                                            
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

                                                    
                                                    <div class="font_content">Text Color</div>
                                                    <div class="font_body">
                                                        <div class="col-sm-12">
                                                            <color-picker v-model="color_picker" @input="changeFontColor"></color-picker>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->
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
            // selectIfcValue: 'default',
            // selectIfcLogoValue : 'default',
            // selectIfcSignatureValue : 'default',
            selectIfcTextValue: 'default',
            //displayAddressLable: false,
             // titleInputIfc:'',
            // companyInputIfc:'Sotheby’s International Realty, Inc.',
            // designationInputIfc1:'ADPAÂ®, ',
            // designationInputIfc2:'ADPAÂ®, ',
            // designationInputIfc3:'C(k)PÂ®',
            // designationTitleInputIfc1: 'Business Development Director ',
            // designationTitleInputIfc2: 'Business Development Director ',
            // designationTitleInputIfc3: 'Alternative Investments Director ',
            // designationTitleInputIfc4: 'Associate Stock Plan Director',
            // addressInputIfc1: '16027 VENTURA BLVD, Suite 330 ENCINO, CA, 91436',
            // stNumberInputIfc: 'NMLS#',
            // emailInputIfc: 'kat.nitsou@sothebyinternational.com',
            // websiteUrlInputIfc: 'sothebyshomes.com',
            // officePhoneInputIfc: 'M : 323-228-3805',
            // directPhoneInputIfc: 'O : 626-396-9400',

		};
	},
	components: {
		"color-picker": ColorPicker
	},
	computed: {
        
        selectIfcValue:{
            get() {
				return this.$store.state.ifcProfileChoose;
			},
			set(newValue){
    			return this.$store.state.ifcProfileChoose = newValue
            }
        },
        selectIfcLogoValue:{
            get() {
				return this.$store.state.ifcBelowimageChoose;
			},
			set(newValue){
			return this.$store.state.ifcBelowimageChoose = newValue
            }
        },
        selectIfcSignatureValue:{
            get() {
				return this.$store.state.ifcSignatureChoose;
			},
			set(newValue){
			return this.$store.state.ifcSignatureChoose = newValue
            }
        },
        titleInputIfc:{
            get() {
				return this.$store.state.ifcTitleText;
			},
			set(newValue){
                return this.titleInputIfcTemp = newValue
            }
        },
        companyInputIfc:{
             get() {
				return this.$store.state.ifcCompanyName;
			},
			set(newValue){
                return this.ifcCompanyNameTemp = newValue
            }
        },
        designationInputIfc1:{
            get() {
				return this.$store.state.designation1;
			},
			set(newValue){
			return this.designationTemp1 = newValue
            }
        },
        designationInputIfc2:{
              get() {
				return this.$store.state.designation2;
			},
			set(newValue){
                return this.designationTemp2 = newValue
            }
        },
        designationInputIfc3:{
            get() {
				return this.$store.state.designation3;
			},
			set(newValue){
                return this.designationTemp3 = newValue
            }
        },
        designationTitleInputIfc1:{
            get() {
				return this.$store.state.designationTitle1;
			},
			set(newValue){
                return this.designationTitleTemp1 = newValue
            }
        },
        designationTitleInputIfc2:{
            get() {
				return this.$store.state.designationTitle2;
			},
			set(newValue){
			return this.$designationTitleTemp2 = newValue
            }
        },
        designationTitleInputIfc3:{
            get() {
				return this.$store.state.designationTitle3;
			},
			set(newValue){
                return this.designationTitleTemp3 = newValue
            }
        },
        designationTitleInputIfc4:{
            get() {
				return this.$store.state.designationTitle4;
			},
			set(newValue){
                return this.designationTitleTemp4 = newValue
            }
        },
        company2InputIfc:{
             get() {
                return this.$store.state.ifcCompanyName2;
            },
            set(newValue){
                //console.log(newValue,'456465')
                return this.ifcCompanyNameTemp2 = newValue
            }
        },
        designationInput1:{
            get(){
                return this.$store.state.designationifc
            },
            set(newValue){
                return this.designationifcTemp = newValue
            }
        },
        designationInput2:{
            get(){
                return this.$store.state.designationifc1
            },
            set(newValue){
                return this.designationifcTemp1 = newValue
            }
        },
        designationInput3:{
            get(){
                return this.$store.state.designationifc2
            },
            set(newValue){
                return this.designationifcTemp2 = newValue
            }
        },
        designationTitleInput1:{
            get(){
                return this.$store.state.designationTitle
            },
            set(newValue){
                return this.designationTitleTemp = newValue
            }
        },
        designationTitleInput2:{
            get(){
                return this.$store.state.designationTitleset2 
            },
            set(newValue){
                return this.designationTitlesetTemp2 = newValue
            }
        },
        designationTitleInput3:{
            get(){
                return this.$store.state.designationTitleset3 
            },
            set(newValue){
                return this.designationTitlesetTemp3 = newValue
            }
        },
        designationTitleInput4:{
            get(){
                return this.$store.state.designationTitleset4
            },
            set(newValue){
                return this.designationTitlesetTemp4 = newValue
            }
        },
        addressInputIfc1:{
            get() {
				return this.$store.state.addressIfc1;
			},
			set(newValue){
                return this.addressIfcTemp1 = newValue
            }
        },
        stNumberInputIfc:{ 
            get() {
				return this.$store.state.stNumberIfc;
			},
			set(newValue){
			  console.log(newValue)
              return this.stNumberIfcTemp = newValue
            }
        },
        emailInputIfc:{
             get() {
				return this.$store.state.emailIfc;
			},
			set(newValue){
			  console.log(newValue)
			return this.emailIfcTemp = newValue
            }
        },
        websiteUrlInputIfc:{
             get() {
				return this.$store.state.websiteUrlIfc;
			},
			set(newValue){
                return this.websiteUrlIfcTemp = newValue
            }
        },
        officePhoneInputIfc:{
             get() {
				return this.$store.state.officePhone;
			},
			set(newValue){
                return this.officePhoneTemp = newValue
            }
        },
        directPhoneInputIfc:{
             get() {
				return this.$store.state.directPhoneIfc;
			},
			set(newValue){
                return this.directPhoneIfcTemp = newValue
            }
        },
        
	},
	created() {},
	mounted() {
       //alert(this.titleInputIfc)
        // alert(this.$store.state.displayIfcLogoMedia)
		$("#ifcModal").modal({
			focus: false,
			// Do not show modal when innitialized.
			show: false,
			backdrop: 'static', // For static modal
			keyboard: false // prevent click outside of the modal
		});
         this.titleInputIfc = this.$store.state.ifcTitleText  
         console.log(this.titleInputIfc)
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