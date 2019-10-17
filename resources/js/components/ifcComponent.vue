<template>
    <div>
        <alertComponent></alertComponent>
        <div class="row main_container m-0">
			<LeftSideComponent />
            <div class="col-sm-10 right_side">
            <div class="gjs-pn-buttons top_preview"></div>
            <router-link to="/preview" target="_blank"><button class="preview_mag" @click="preiviewTab()">Preview</button></router-link>
            <button class="save_ifc_to_db" @click="saveDownload">Save & download</button>
            <button class="save_ifc_to_db" @click="onSubmit">Save</button>
            <LoaderComponent/>
                <div class="preview_responsive" v-if="!this.$store.state.Savefcloader">
                    <div class="inner_right_side preview_content">
                        <div class="cover_img">
                            <img src="images/inside_front.jpg" style="opacity: 0;">
                        </div>
                        <div class="inside_ifc">
                            <div class="row">
                                <div class="col-md-4">
                                   <!-- profile image section -->
                                    <div class="profile_photo">
                                         <iconHoverComponent class="insidefc_profile" @click.native="openPopUp(1)" />
                                         <img :src="defaultPhotoImage"  v-if="photoRadioButton == 'default'" title="" >
                                        <img v-if="photoRadioButton == 'addMedia'" :src="photoImage" alt="" srcset="" style="margin-bottom:20px;">
                            	
                                    </div>
                                    <!-- profile image section end here -->
                                    <!-- profile text section -->
                                    <div class="profile_text" >
                                         <iconHoverIfcComponent class="insidefc_profile" @click.native="openPopUp(2)"/>
                                        <h2>{{this.name}}</h2>
                                        <p><b>{{this.company_name}}</b></p>
                                        <p>{{this.designation1 != '' ? this.designation1 + ' ,' : ''}} {{this.designation2 != '' ? this.designation2 + ' ,' : ''}} {{this.designation3}}</p>
                                        <p>{{this.title1}}
                                            {{this.title2}}
                                            {{this.title3}}
                                            {{this.title4}}</p>
                                        <p class="mb-3"></p>
                                        <div v-if="this.displaySecondAddress">       
                                            <p><b>{{this.company_name2}}</b></p>  
                                            <p>{{this.designation21 != '' ? this.designation21 + ' ,' : ''}} {{this.designation22 != '' ? this.designation22 + ' ,' : ''}} {{this.designation23}}</p>
                                            <p>{{this.title21}}
                                                {{this.title22}}
                                                {{this.title23}}
                                                {{this.title24}}
                                            </p>
                                        </div>
                                        <p>{{this.address}}</p>
                                        <!-- <p>ENCINO, CA, 91436</p> -->
                                        <p>{{this.directPhone}}</p>
                                        <p>{{this.officePhone}}</p>
                                        <p class="mb-3"></p>
                                        <p>{{this.website}}</p>
                                        <p>{{this.email}}</p>
                                        <p class="mb-3"></p>
                                        <p>{{this.memberCstNumber}}</p>
                                    </div>
                                    <!-- profile text section end here -->
                                    <!-- logo section start here -->
                                    <div class="logo_middle">
                                        <div class="below_logo">
                                                <iconHoverIfcComponent class="insidefc_profile" @click.native="openPopUp(3)"/>
                                            <!-- <img src="images/footer_logo.png" alt="" title=""> defaultIfcLogoPath-->
                                            <img :src="defaultLogoImage" v-if="this.logoRadioButton == 'default'"   title="" >
                                            <img v-if="this.logoRadioButton == 'addMedia'" :src="logoImage" alt="" srcset="" style="margin-bottom:20px;">
                                        </div> 
                                    </div>
                                    <!-- logo section end here -->
                                </div>
                                <!-- personal detail section start here -->
                                <div class="col-md-8">
                                    <div class="right_ifc_content mt-6">
                                        
                                            <div class="hoverComponetRemove">
                                                <div class="inner_plus_data">        
                                                    <i class="ti-pencil" title="Edit" @click="editTextEditor()"></i>
                                                </div>
                                            </div>
                                            <div v-if="!this.showTextEditor" >
                                               <p v-html="this.textEditor"></p>
                                                <!-- <p  class="value" v-if="this.ifcRightTextInputValue!= ''" v-html="this.ifcRightTextInputValue"></p> -->
                                            </div>
                                        <div v-if="this.showTextEditor" class="editor_pop_up">
                                            <div class="hoverComponetRemove">
                                                <div class="inner_plus_data">        
                                                <a @click="changeFont('italic', false, null), (italicBtn = !italicBtn)" :class="{'btn': true, 'active' : italicBtn}" title="Italic" data-toggle="tooltip" data-placement="top">
                                                            <i class="ti-Italic"></i>
                                                </a>
                                                 <a @click="changeFont('bold', false, null), (boldBtn = !boldBtn)" :class="{'btn': true, 'active' : boldBtn}" title="Bold" data-toggle="tooltip" data-placement="top">
                                                            <i class="fas fa-bold"></i>
                                                 </a>
                                                 <a @click="changeFont('underline', false, null), (underlineBtn = !underlineBtn)" :class="{'btn': true, 'active' : underlineBtn}" title="Underline" data-toggle="tooltip" data-placement="top">
                                                            <i class="ti-underline"></i>
                                                 </a>
                                               <a @click="changeFont('justifyLeft' ,false, null), resetActiveOnAlign('textLeft', textLeft)" :class="{'btn': true, 'active' : textLeft}" title="Left" data-toggle="tooltip" data-placement="top">
                                                            <i class="ti-align-left"></i>
                                                </a>
                                               <a @click="changeFont('justifyCenter', false, null), resetActiveOnAlign('textCenter', textCenter)" :class="{'btn': true, 'active' : textCenter}" title="Center" data-toggle="tooltip" data-placement="top">
                                                            <i class="ti-align-center"></i>
                                                </a>
                                                 <a @click="changeFont('justifyRight' ,false, null), resetActiveOnAlign('textRight', textRight)" :class="{'btn': true, 'active' : textRight}" title="Right" data-toggle="tooltip" data-placement="top">
                                                    <i class="ti-align-right"></i>
                                                </a>
                                                <a @click="changeFont('justifyFull' ,false, null), resetActiveOnAlign('textJustify', textJustify)" :class="{'btn': true, 'active' : textJustify}" title="Justify" data-toggle="tooltip" data-placement="top">
                                                    <i class="ti-align-justify"></i>
                                                </a>
                                                <select name id @change="insertTag(headingTag)" v-model="headingTag">
                                                    <option value> Heading </option>
                                                    <option value="h1">H1</option>
                                                    <option value="h2">H2</option>
                                                    <option value="h3">H3</option>
                                                    <option value="h4">H4</option>
                                                    <option value="h5">H5</option>
                                                    <option value="h6">H6</option>
                                                    <option value="p">P</option>
                                                </select>
                                                <a @click="saveTextEditor()" :class="{'btn': true,}">
                                                  <i class="ti-check" title="Edit" ></i>
                                                </a>
                                                <a @click="cancelTextEditor()" :class="{'btn': true,}">
                                                  <i class="ti-close" title="Close" ></i>
                                                </a>
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <div class="content_area Edit_data" v-if="this.showTextEditor">

                                            <!-- <div class="font_content">Body Content</div> -->
                                            <div class="editable_ifc_text" contenteditable="true" v-html="this.textEditor"></div>
                                            <!-- <div v-if="this.ifcRightTextInputValue != ''"  class="editable_ifc_text" contenteditable="true" v-html="this.ifcRightTextInputValue"></div> -->
                                        </div>
                                        <div class="ifc_signature_image">
                                            <img v-if="this.signatureRadioButton == 'default'" :src="defaultSignatureImage" alt="">
                                            <img v-if="this.signatureRadioButton == 'addMedia'" :src="signatureImage" alt="">
                                          <iconHoverIfcComponent class="insidefc_profile" @click.native="openPopUp(4)"/>    
                                        </div>
                                    </div>
                                    <!-- <div class="right_ifc_content" v-if="this.ifcRightTextDisplay">
                                        <div v-html="this.ifcRightText"></div>
                                        <iconHoverIfcComponent class="insidefc_profile"/>
                                    </div> -->
                                </div>
                                <!-- personal detail section end here -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <!-- modal start here -->
        <div class="modal fade show_data" id="ifcModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-xl" role="document"  :class="{'custom_address':this.open_pop_up == 2}">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">IFC input modal
						</h5>
					</div>
					<div class="modal-body">
						<div class="tab-content">
							<div id="content" class="side_bar_content tab-pane active">
								<div  id="design" class="tab-pane">
									<div class="content_area">
										
                                        <!---for profile image ---->
                                            <div v-if="this.open_pop_up == 1"> 
                                                <div class="font_content">
        											Upload Profile Image
        										</div>
                                                <div class="Logo_select_option row">
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.photoRadioButton == 'default' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="UseDefault">
        														<input  type="radio" id="UseDefault" value="default" v-model="photoRadioButton" @change="changePhotoRadio" name="check" />Use Default Profile
        													</label>
        												</div>
                                                    </div>
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.photoRadioButton == 'addMedia' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="addMedia">
        														<input  type="radio" id="addMedia" data-id="addMedia_id" value="addMedia" v-model="photoRadioButton" @change="changePhotoRadio" name="check" />Add Profile Image
                                                                <toolTipsComponent title="400 X 400"/>
        													</label>
        												</div>                                                        
                                                    </div>
                                                </div>
                                                <div class="add_media">
                                                    <button v-if="this.photoRadioButton == 'addMedia'" class="btn btn-block media_btn " data-target="#fileModal" data-toggle="modal" >
                                                        <span class="font_content">Add Media</span>
                                                    </button>
                                                </div>
                                                <!-- @click="check_Value(1)" -->
                                                <div v-if="this.photoRadioButton == 'addMedia'" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                    <img :src="this.photoImage" alt="" data-target="#fileModal" data-toggle="modal"  title=""  style="margin-bottom:20px;" >
                                                    <!-- <img data-target="#fileModal" data-toggle="modal"  v-if="imageIfcPath != ''" :src="imageIfcPath" alt="" srcset="" style="margin-bottom:20px; margin-top: 37px;"> -->
                                                </div>
                                            </div>
                                        <!---End profile image ---->
                                        <!---for profile_text IFC ---->
                                            <div  v-if="this.open_pop_up == 2">  
                                                <div class="ifc_title">
                                                    <label for="usr">Name </label>
                                                    <input type="text" v-model='name' class="form-control" id="usr" placeholder="Name">
                                                </div>
                                                <div class="ifc_title">
                                                    <label for="usr">Company Details</label>
                                                    <input type="text" v-model='company_name' class="form-control" id="usr" placeholder="Company Name">
                                                </div>
                                                <div class="ifc_title">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <!-- <label for="usr">Designation 1</label> -->
                                                            <input type="text" v-model='designation1' class="form-control" id="usr" placeholder="Designation 1">
                                                        </div>
                                                        <div class="col-md-4">
                                                            <!-- <label for="usr">Designation 2</label> -->
                                                            <input type="text" v-model='designation2' class="form-control" id="usr" placeholder="Designation 2">
                                                        </div>
                                                        <div class="col-md-4">
                                                            <!-- <label for="usr">Designation 3</label> -->
                                                            <input type="text" v-model='designation3'  class="form-control" id="usr" placeholder="Designation 3">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ifc_title">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!-- <label for="usr">Title 1</label> -->
                                                            <input type="text" v-model='title1'  class="form-control" id="usr" placeholder="Title 1">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!-- <label for="usr">Title 2</label> -->
                                                            <input type="text" v-model='title2'  class="form-control" id="usr" placeholder="Title 2">
                                                        </div>
                                                    </div>
                                                </div>
                                                <!---------------------->
                                                <!------------------>
                                                <div class="ifc_title">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!-- <label for="usr">Title 3</label> -->
                                                            <input type="text" v-model='title3' class="form-control" id="usr" placeholder="Title 3">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!-- <label for="usr">Title 4</label> -->
                                                            <input type="text" v-model='title4'  class="form-control" id="usr" placeholder="Title 4">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ifc_title" v-if="this.secondAddress">
                                                    <div class="add_media" style="margin:0px;">
                                                        <button class="btn btn-block media_btn" style="margin:0px;" @click="showAddress()">
                                                            <span class="font_content">Add</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <!-- add more company details-->
                                                <!------------  -------->
                                                
                                                <div v-if="this.displaySecondAddress">
                                                    <div class="ifc_title">
                                                        <label for="usr">Company Details 2</label>
                                                        <input type="text" v-model='company_name2' class="form-control" id="usr" placeholder="Company Name">
                                                    </div>
                                                    <div class="ifc_title">
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <!-- <label for="usr">Designation 1</label> -->
                                                                <input type="text" v-model='designation21' class="form-control" id="usr" placeholder="Designation 1">
                                                            </div>
                                                            <div class="col-md-4">
                                                                
                                                                <input type="text" v-model='designation22' class="form-control" id="usr" placeholder="Designation 2">
                                                            </div>
                                                            <div class="col-md-4">
                                                                <!-- <label for="usr">Designation 3</label> -->
                                                                <input type="text" v-model='designation23'  class="form-control" id="usr" placeholder="Designation 3">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ifc_title">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <!-- <label for="usr">Title 1</label> -->
                                                                <input type="text" v-model='title21' class="form-control" id="usr" placeholder="Title 1">
                                                            </div>
                                                            <div class="col-md-6">
                                                                <!-- <label for="usr">Title 2</label> -->
                                                                <input type="text" v-model='title22' class="form-control" id="usr" placeholder="Title 2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!---------------------->
                                                    <!------------------>
                                                    <div class="ifc_title">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <!-- <label for="usr">Title 3</label> -->
                                                                <input type="text" v-model='title23' class="form-control" id="usr" placeholder="Title 3">
                                                            </div>
                                                            <div class="col-md-6">
                                                                <!-- <label for="usr">Title 4</label> -->
                                                                <input type="text" v-model='title24' 
                                                                class="form-control" id="usr" placeholder="Title 4">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ifc_title">
                                                    <div class="add_media" style="margin:0px;">
                                                        <button class="btn btn-block media_btn remove_btn" style="margin:0px;" @click="removeAddress()">
                                                            <span class="font_content ">Remove</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                </div>    
                                                <!------------------>
                                                <!------------------>
                                                <div class="ifc_title">
                                                    <label for="usr">Address</label>
                                                    <input type="text" v-model='address'  class="form-control" id="usr" placeholder="Address">
                                                </div>
                                                <!---------------------->
                                                <!------------------>
                                                <div class="ifc_title">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!-- <label for="usr">Direct Phone</label> -->
                                                            <input type="text" v-model='directPhone' class="form-control" id="usr" placeholder="Direct Phone">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!-- <label for="usr">Office Phone</label> -->
                                                            <input type="text" v-model='officePhone'  class="form-control" id="usr" placeholder="Office Phone">
                                                        </div>
                                                    </div>
                                                </div>
                                                <!---------------------->
                                                <!------------------>
                                                <div class="ifc_title">
                                                    <label for="usr">URL</label>
                                                    <input type="text" v-model='website' class="form-control" id="usr" placeholder="Website URL">
                                                </div>
                                                <!---------------------->
                                                <!------------------>
                                                <div class="ifc_title">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label for="usr">Email</label>
                                                            <input type="text" v-model='email' class="form-control" placeholder="Email" id="usr">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="usr">CST Number</label>
                                                            <input type="text" v-model='memberCstNumber' class="form-control" placeholder="CST number" id="usr">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <!---for logo ifc ---->
                                            <div v-if="this.open_pop_up == 3" > 
                                                <div class="font_content">
        											Upload Logo Image
        										</div>
                                                <div class="Logo_select_option row">
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.logoRadioButton == 'remove' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="slideTwo">
        														<input type="radio" value="remove" v-model="logoRadioButton" @change="logoRadioButtonChange" id="slideTwo" name="check" checked />Remove Logo
        													</label>
        												</div>
                                                    </div>
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.logoRadioButton == 'default' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="UseDefault">
        														<input  type="radio" id="UseDefault" value="default" v-model="logoRadioButton" @change="logoRadioButtonChange" name="check" checked />Use Default Logo
        													</label>
        												</div>
                                                    </div>
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.logoRadioButton == 'addMedia' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="addMedia">
        														<input  type="radio" id="addMedia" data-id="addMedia_id" value="addMedia" v-model="logoRadioButton" @change="logoRadioButtonChange" name="check" checked />Add Logo
                                                                <toolTipsComponent title="500 X 500"/>
        													</label>
        												</div>
                                                    </div>
                                                </div>
                                                <div class="add_media">
                                                    <button v-if="this.logoRadioButton == 'addMedia'" class="btn btn-block media_btn"  data-target="#fileModal" data-toggle="modal">
                                                        <span class="font_content">Add Media</span>
                                                    </button>
                                                </div>
                                                <div v-if="this.logoRadioButton == 'addMedia'" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                    <!-- <img src="images/avatar_image.jpg" alt="" data-target="#fileModal" data-toggle="modal"  title=""  style="margin-bottom:20px;" v-show="imageIfcLogoPath == ''"> -->
                                                    <img data-target="#fileModal" data-toggle="modal"  :src="logoImage" alt="" srcset="" style="margin-bottom:20px; margin-top: 37px;">
                                                </div>
                                            </div>
                                        <!---End logo ifc ---->

                                        <!--------- For Signature IFC  ---------->                      
                                            <div class="signature" v-if="this.open_pop_up == 4">
                                                <div class="font_content">
        											Upload Signature Image
        										</div>
                                                <div class="Logo_select_option row">
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.signatureRadioButton == 'remove' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="slideTwo">
        														<input type="radio" value="remove" v-model="signatureRadioButton" @change="signatureRadioButtonChange" id="slideTwo" name="check" checked />Remove Signature
        													</label>
        												</div>
                                                    </div>
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.signatureRadioButton == 'default' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="UseDefault">
        														<input type="radio" id="UseDefault" value="default" v-model="signatureRadioButton" @change="signatureRadioButtonChange" name="check" checked />Use Default Signature
        													</label>
        												</div>
                                                    </div>
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.signatureRadioButton == 'addMedia' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="addMedia">
        														<input type="radio" id="addMedia" data-id="addMedia_id" value="addMedia" v-model="signatureRadioButton" @change="signatureRadioButtonChange" name="check" checked />Add Signature
                                                                <toolTipsComponent title="600 X 600"/>
        													</label>
        												</div>
                                                    </div>
                                                </div>
                                                <div class="add_media">
                                                    <button v-if="this.signatureRadioButton == 'addMedia'" class="btn btn-block media_btn" @click="check_Value(3)" data-target="#fileModal" data-toggle="modal">
                                                        <span class="font_content">Add Media</span>
                                                    </button>
                                                </div>
                                                <div v-if="this.signatureRadioButton == 'addMedia'" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                    <img :src="this.signatureImage" alt="" data-target="#fileModal" data-toggle="modal" title="" style="margin-bottom:20px;" >
                                                    <!-- <img data-target="#fileModal" data-toggle="modal" v-if="imageIfcSignaturePath != ''" :src="imageIfcSignaturePath" alt="" srcset="" style="margin-bottom:20px; margin-top: 37px;"> -->
                                                </div>
                                            </div>
                                        <!--  end signature section here -->
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<div class="inner_footer_content">
							<button class="btn btn_save"  data-dismiss="modal" @click="saveChanges">Save
								<i class="ti-check" ></i>
							</button>
                            <button class="btn btn_close" data-dismiss="modal" @click="cancelModal()">Cancel
								<i class="ti-close" aria-hidden="true"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
        <!-- modal close here -->
        
        <!-- <ifcTextInputModel/> -->
        <FileModalComponent/>
    </div>
</template>

<script>
import alertComponent from './common/alertComponent';
import ifcInputComponent from "./model/ifcModelInput";
// import ifcTextInputModel from "./model/ifcTextInputModal";
import FileModalComponent from "./model/fileModalComponent";
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import ColorPicker from "vue-iro-color-picker"
var br  = '<br><br>'
var defaultTextIfc= 'Greetings '+br+'The chill in the air will soon give way to the spontaneous showers of early spring. “Do I need a coat? A jacket? A trench? Umbrella?” Transitional periods can be challenging. The key is to approach each day prepared for as many scenarios as possible. Just as it’s our goal to present financial options to help you reach future goals, this edition of ONE, The Style Issue, offers exclusive essentials perfect for elevating your lifestyle today. '+br+' “Dress You Up” provides tips applicable to everyone’s wardrobe and individual aesthetic. Serving as a sartorial assistant, this fashion feature guides you away from trends and toward personalized classic style. Think Katharine Hepburn’s contemporary fashion parade in the 1938 film Holiday and Colin Firth’s impeccably tailored suiting in 2014’s Kingsman: The Secret Service. '+br+' And the highly anticipated and fantastically stylish Kentucky Derby is run every year on the first Saturday in May. So, for those who can’t make it to Churchill Downs, the Celebrate section presents everything you need to throw “The Perfect Derby Affair” (fascinators not included).'+br+' As you embrace this season, remember that we are here to assist you in building your financial foundation, one that will enable you to maintain your life in whatever style you wish.'+br+'Sincerely,'
export default {
    components:{
         ifcInputComponent,
         alertComponent,
        //  ifcTextInputModel,
         FileModalComponent,
         "color-picker": ColorPicker
    },
    data(){
       return{
            textEditor : defaultTextIfc,
            showTextEditor : false,
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
            //ibcContent :'' ,

            //new amit
            open_pop_up : '',
            defaultPhotoImage : 'images/profile_pic.jpg',
            photoRadioButton : this.$store.state.ifcPhotoRadio,
            photoImage : this.$store.state.ifcPhotoImage,
            secondAddress : this.$store.state.ifcAddSecondAddress,
            displaySecondAddress : this.$store.state.ifcSecondAddress,
            name : this.$store.state.ifcName,
            company_name : this.$store.state.ifcCompanyName,
            designation1: this.$store.state.ifcdesignation1,
            designation2 : this.$store.state.ifcdesignation2,
            designation3 : this.$store.state.ifcdesignation3,
            title1 : this.$store.state.ifcTitle1,
            title2 : this.$store.state.ifcTitle2,
            title3 : this.$store.state.ifcTitle3,
            title4 : this.$store.state.ifcTitle4,
            company_name2 : this.$store.state.ifcCompanyName2,
            designation21 : this.$store.state.ifcdesignation21,
            designation22 : this.$store.state.ifcdesignation22,
            designation23 : this.$store.state.ifcdesignation23,
            title21 : this.$store.state.ifcTitle21,
            title22 : this.$store.state.ifcTitle22,
            title23 : this.$store.state.ifcTitle23,
            title24 : this.$store.state.ifcTitle24,
            address : this.$store.state.ifcaddress,
            directPhone : this.$store.state.ifcDirectPhone,
            officePhone : this.$store.state.ifcOfficePhone,
            website : this.$store.state.ifcWebsite,
            email : this.$store.state.ifcEmail,
            memberCstNumber : this.$store.state.ifcMemberCstNumber,
            // logo section
            logoImage : this.$store.state.ifcLogoImage,
            logoRadioButton : this.$store.state.ifcLogoRadioButton,
            defaultLogoImage : 'images/footer_logo.png',
            // signature section
            defaultSignatureImage : 'images/signature.png',
            signatureImage : this.$store.state.ifcSignatureImage,
            signatureRadioButton : this.$store.state.ifcSignatureRadioButton,
            // for temp
            tempHeading : ''




       }
       
    },
    computed: {
        ...mapState([
            'ifcPreview',
            'bcPreview',
            'ifcPhotoRadio',
            'ifcPhotoImage',
            'ifcName',
            'ifcCompanyName',
            'ifcdesignation1',
            'ifcdesignation2',
            'ifcdesignation3',
            'ifcTitle1',
            'ifcTitle2',
            'ifcTitle3',
            'ifcTitle4',
            'ifcaddress',
            'ifcDirectPhone',
            'ifcOfficePhone',
            'ifcWebsite',
            'ifcEmail',
            'ifcMemberCstNumber',
            'ifcCompanyName2',
            'ifcdesignation21',
            'ifcdesignation22',
            'ifcdesignation23',
            'ifcTitle21',
            'ifcTitle22',
            'ifcTitle23',
            'ifcTitle24',
            'ifcSecondAddress',
            'ifcAddSecondAddress',
            'ifcLogoImage',
            'ifcLogoRadioButton',
            // signature
            'ifcSignatureImage',
            'ifcSignatureRadioButton',
            // text editor
            'ifcTextEditor',
            'showCover'
        ])
    },
    created(){
        this.get_ifc_data()        
    },
    mounted(){
        this.saveIFCPreview()
        // this.getifcUserBook()
        this.ACTION_CHANGE_STATE(['defaultIfcImagePath', this.preifcimagepath])
        this.ACTION_CHANGE_STATE(['defaultIfcLogoPath', this.preifclogoimagepath])
        this.ACTION_CHANGE_STATE(['defaultIfcSignaturePath', this.preifcSignatureimagepath])
        this.ACTION_CHANGE_STATE(['showCover',2])
        
    },
    methods:{
        ...mapMutations([
            'CHANGE_STATE'
        ]),
        ...mapActions([
			'ACTION_CHANGE_STATE'
		]),
		...mapMutations([
			'EMPTY_MESSAGE_LIST',
			'PUSH_SUCCESS_MESSAGE',
			'PUSH_ERROR_MESSAGE'
		]),
        resetActiveOnAlign (type, value) {
			this.textLeft = false
			this.textRight = false
			this.textCenter = false
			this.textJustify = false
			this[type] = !this[value]
        },
        cancelModal(){
            this.photoRadioButton = this.ifcPhotoRadio;
            this.photoImage = this.ifcPhotoImage ;
            this.name = this.ifcName;
            this.company_name = this.ifcCompanyName;
            this.designation1 = this.ifcdesignation1;
            this.designation2 = this.ifcdesignation2;
            this.designation3 = this.ifcdesignation3;
            this.title1 = this.ifcTitle1;
            this.title2 = this.ifcTitle2;
            this.title3 = this.ifcTitle3;
            this.title4 = this.ifcTitle4;
            this.company_name2 = this.ifcCompanyName2;
            this.designation21 = this.ifcdesignation21;
            this.designation22 = this.ifcdesignation22;
            this.designation23 = this.ifcdesignation23;
            this.title21 = this.ifcTitle21;
            this.title22 = this.ifcTitle22;
            this.title23 = this.ifcTitle23;
            this.title24 = this.ifcTitle24;
            this.address = this.ifcaddress;
            this.directPhone = this.ifcDirectPhone;
            this.officePhone = this.ifcOfficePhone;
            this.website = this.ifcWebsite;
            this.email = this.ifcEmail;
            this.memberCstNumber = this.ifcMemberCstNumber;
            this.displaySecondAddress = this.ifcSecondAddress;
            this.secondAddress = this.ifcAddSecondAddress;
            //logo section
            this.logoRadioButton = this.ifcLogoRadioButton;
            this.logoImage = this.ifcLogoImage;
            // signature section
            this.signatureRadioButton = this.ifcSignatureRadioButton;
            this.signatureImage = this.ifcSignatureImage;
        },
        saveChanges(){  
            if(this.company_name2 == ''&& this.designation21 == '' && this.designation22 == '' && this.designation23 == '' && this.title21 == '' && this.title22 == '' && this.title23 == '' &&
            this.title24 == ''){
                this.secondAddress = true;
                this.displaySecondAddress = false;
            }
            if(this.open_pop_up == 1 && this.photoRadioButton == 'addMedia' && this.photoImage == 'images/avatar_image.jpg' ){
                this.photoRadioButton = this.ifcPhotoRadio
            }else if(this.open_pop_up == 3 && this.logoRadioButton == 'addMedia' && this.logoImage == 'images/avatar_image.jpg'){
                this.logoRadioButton = this.ifcLogoRadioButton
            }else if(this.open_pop_up == 4 && this.signatureRadioButton == 'addMedia' && this.signatureImage == 'images/avatar_image.jpg'){
                this.signatureRadioButton = this.ifcSignatureRadioButton
            }

            this.CHANGE_STATE(['ifcPhotoRadio',this.photoRadioButton])
            this.CHANGE_STATE(['ifcPhotoImage',this.photoImage])
            this.CHANGE_STATE(['ifcName',this.name])
            this.CHANGE_STATE(['ifcCompanyName',this.company_name])
            this.CHANGE_STATE(['ifcdesignation1',this.designation1])
            this.CHANGE_STATE(['ifcdesignation2',this.designation2])
            this.CHANGE_STATE(['ifcdesignation3',this.designation3])
            this.CHANGE_STATE(['ifcTitle1',this.title1])
            this.CHANGE_STATE(['ifcTitle2',this.title2])
            this.CHANGE_STATE(['ifcTitle3',this.title3])
            this.CHANGE_STATE(['ifcTitle4',this.title4])
            this.CHANGE_STATE(['ifcaddress',this.address])
            this.CHANGE_STATE(['ifcDirectPhone',this.directPhone])
            this.CHANGE_STATE(['ifcOfficePhone',this.officePhone])
            this.CHANGE_STATE(['ifcWebsite',this.website])
            this.CHANGE_STATE(['ifcEmail',this.email])
            this.CHANGE_STATE(['ifcMemberCstNumber',this.memberCstNumber])
            this.CHANGE_STATE(['ifcCompanyName2',this.company_name2])
            this.CHANGE_STATE(['ifcdesignation21',this.designation21])
            this.CHANGE_STATE(['ifcdesignation22',this.designation22])
            this.CHANGE_STATE(['ifcdesignation23',this.designation23])
            this.CHANGE_STATE(['ifcTitle21',this.title21])
            this.CHANGE_STATE(['ifcTitle22',this.title22])
            this.CHANGE_STATE(['ifcTitle23',this.title23])
            this.CHANGE_STATE(['ifcTitle24',this.title24])
            // this section for address button
            this.CHANGE_STATE(['ifcSecondAddress',this.displaySecondAddress])
            this.CHANGE_STATE(['ifcAddSecondAddress',this.secondAddress])
            // this section for logo image
            this.CHANGE_STATE(['ifcLogoRadioButton',this.logoRadioButton])
            this.CHANGE_STATE(['ifcLogoImage',this.logoImage])
            // this section for signature image
            this.CHANGE_STATE(['ifcSignatureRadioButton',this.signatureRadioButton])
            this.CHANGE_STATE(['ifcSignatureImage',this.signatureImage])
        },
        displayModal() {
                $('#ifcModal').modal('show');
		},
        openPopUp(value){
            this.open_pop_up = value
            $('#ifcModal').modal('show');
        },
        changePhotoRadio(e){
            this.photoRadioButton = e.target.value
        },
        setImage(value){
            if(this.open_pop_up == 1){
                this.photoImage = value
            }else if(this.open_pop_up == 3){
                this.logoImage = value
            }else if(this.open_pop_up == 4){
                this.signatureImage = value
            }
        },
        showAddress(){
            this.secondAddress = false;
            this.displaySecondAddress = true;
        },
        removeAddress(){
            this.secondAddress = true;
            this.displaySecondAddress = false;
            this.company_name2 = '';
            this.designation21 = '';
            this.designation22 = '';
            this.designation23 = '';
            this.title21 = '';
            this.title22 = '';
            this.title23 = '';
            this.title24 = '';
        },
        logoRadioButtonChange(e){
            var value = e.target.value
            this.logoRadioButton = value
        },
        signatureRadioButtonChange(e){
            var value = e.target.value;
            this.signatureRadioButton = value
        },
        changeFont(command, showUI, value){
            document.execCommand(command, showUI, value);
        },
        insertTag(tag){            
            var sel = window.getSelection()
            if(tag != ''){
                this.tempHeading = tag
                if(sel.toString() != '') {       
                    for(var i = sel.rangeCount;i--;){
                        var wrapper = this.htmlToDom('<'+tag+'/>')
                        var range = sel.getRangeAt(i);
                        wrapper.appendChild(range.extractContents());
                        range.insertNode(wrapper);
                    }
                    document.execCommand('heading', false, tag);
                }else{
                    this.headingTag = ''
                    alert('Please select text!!!')
                }
            }else{
                this.headingTag = this.tempHeading
            }
            
            // document.execCommand('formatblock', false, headingTag)
        },
        htmlToDom: function(htmlEl){
            var elm =  document.createElement('div')
            elm.innerHTML = htmlEl;
            return elm.children[0]
        },
        editTextEditor(){
            this.showTextEditor = true
            $('.hoverComponetRemove').addClass('disabled_data')
        },
        saveTextEditor(){
            $('.hoverComponetRemove').removeClass('disabled_data')
            var text = $('.editable_ifc_text').html()
            if(text == ''){
                text = defaultTextIfc;
            }
            this.textEditor = text;
            this.showTextEditor = false;
            this.CHANGE_STATE(['ifcTextEditor',text]);
        },
        cancelTextEditor(){
            $('.hoverComponetRemove').removeClass('disabled_data')
            this.showTextEditor = false;
            this.textEditor = this.ifcTextEditor != '' ? this.ifcTextEditor : this.textEditor;
        },
        onSubmit(){
            this.EMPTY_MESSAGE_LIST()
            this.ACTION_CHANGE_STATE(['loader', true])
            var data = {
                columnName: 'inside_front_cover',
                textEditor : this.textEditor,
                photoRadioButton : this.photoRadioButton,
                photoImage : this.photoImage ,
                name : this.name,
                company_name : this.company_name,
                designation1 : this.designation1,
                designation2 : this.designation2,
                designation3 : this.designation3,
                title1 : this.title1,
                title2 : this.title2,
                title3 : this.title3,
                title4 : this.title4,
                company_name2 : this.company_name2,
                designation21 : this.designation21,
                designation22 : this.designation22,
                designation23 : this.designation23,
                title21 : this.title21,
                title22 : this.title22,
                title23 : this.title23,
                title24 : this.title24,
                address : this.address,
                directPhone : this.directPhone,
                officePhone : this.officePhone,
                website : this.website,
                email : this.email,
                memberCstNumber : this.memberCstNumber,
                displaySecondAddress : this.displaySecondAddress,
                secondAddress : this.secondAddress,
                //logo section
                logoRadioButton : this.logoRadioButton,
                logoImage : this.logoImage,
                // signature section
                signatureRadioButton : this.signatureRadioButton,
                signatureImage : this.signatureImage,
                // text editor
            }
            axios.post("api/userBooks", data)
			.then(response => {
                const inside_front_cover = response.data.data;
                
                this.setIfcData(inside_front_cover)                
                // this.PUSH_SUCCESS_MESSAGE('Inside front cover saved successfully!');
                this.alertSuccess('Inside front cover saved successfully!');
                this.ACTION_CHANGE_STATE(['loader', false])
            })
            .catch(error => {
                // this.PUSH_ERROR_MESSAGE('Internal server error!');
                this.alertError('Internal server error!');
                this.ACTION_CHANGE_STATE(['loader', false])
            })
        },
        saveDownload(){
            this.onSubmit();
        },
        get_ifc_data(){
            this.ACTION_CHANGE_STATE(['loader', true])
            axios.get("api/userBooks/1")
            .then(response => {
                const inside_front_cover = response.data.data.inside_front_cover;
                this.setIfcData(inside_front_cover)
                
                this.ACTION_CHANGE_STATE(['loader', false])
            })
            .catch(error => {
                // this.PUSH_ERROR_MESSAGE('Internal server error!');
                this.alertError('Internal server error!');
                this.ACTION_CHANGE_STATE(['loader', false])
            })
        },
        setIfcData(inside_front_cover){
            if(inside_front_cover && inside_front_cover != '' ){
                    this.photoRadioButton = inside_front_cover.photoRadioButton;
                    this.photoImage = inside_front_cover.photoImage ;
                    this.name = inside_front_cover.name;
                    this.company_name = inside_front_cover.company_name != null ? inside_front_cover.company_name : '' ;
                    this.designation1 = inside_front_cover.designation1 != null ? inside_front_cover.designation1 : '';
                    this.designation2 = inside_front_cover.designation2 != null ? inside_front_cover.designation2 : '';
                    this.designation3 = inside_front_cover.designation3 != null ? inside_front_cover.designation3 : '';
                    this.title1 = inside_front_cover.title1 != null ? inside_front_cover.title1 : '';
                    this.title2 = inside_front_cover.title2 != null ? inside_front_cover.title2 : '';
                    this.title3 = inside_front_cover.title3 != null ?inside_front_cover.title3 : '';
                    this.title4 = inside_front_cover.title4 != null ? inside_front_cover.title4 : '';
                    this.company_name2 = inside_front_cover.company_name2 != null ? inside_front_cover.company_name2 : '';
                    this.designation21 = inside_front_cover.designation21 != null ? inside_front_cover.designation21 : '';

                    this.designation22 = inside_front_cover.designation22 != null ? inside_front_cover.designation22 : '';

                    this.designation23 = inside_front_cover.designation23 != null ? inside_front_cover.designation23 : '';
                    this.title21 = inside_front_cover.title21 != null ? inside_front_cover.title21 : '';
                    this.title22 = inside_front_cover.title22 != null ? inside_front_cover.title22 : '';
                    this.title23 = inside_front_cover.title23 != null ? inside_front_cover.title23 : '';
                    this.title24 = inside_front_cover.title24 != null ? inside_front_cover.title24 : '';
                    this.address = inside_front_cover.address;
                    this.directPhone = inside_front_cover.directPhone;
                    this.officePhone = inside_front_cover.officePhone;
                    this.website = inside_front_cover.website;
                    this.email = inside_front_cover.email;
                    this.memberCstNumber = inside_front_cover.memberCstNumber;
                    this.displaySecondAddress = inside_front_cover.displaySecondAddress;
                    this.secondAddress = inside_front_cover.secondAddress;
                    //logo section
                    this.logoRadioButton = inside_front_cover.logoRadioButton;
                    this.logoImage = inside_front_cover.logoImage;
                    // signature section
                    this.signatureRadioButton = inside_front_cover.signatureRadioButton;
                    this.signatureImage = inside_front_cover.signatureImage;
                    // text editor
                    this.textEditor = inside_front_cover.textEditor;
                    this.showTextEditor = false;

                    // this is for save data into store
                    this.saveChanges()
                }
        }        
    },
}
</script>

<style>

</style>