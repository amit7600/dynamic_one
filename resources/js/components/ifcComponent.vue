<template>
    <div>
        <div class="row main_container m-0">
			<LeftSideComponent />
            <div class="col-sm-10 right_side">
            <div class="gjs-pn-buttons top_preview"></div>
            <router-link to="/preview" target="_blank"><button class="preview_mag" @click="preiviewTab()">Preview</button></router-link>
            <button class="save_ifc_to_db" @click="saveFcValueToDb">Save & download</button>
            <button class="save_ifc_to_db" @click="saveifcDataToDb">Save</button>
            <LoaderComponent/>
                <div class="preview_responsive" v-if="!this.$store.state.Savefcloader">
                    <div class="inner_right_side preview_content">
                        <div class="cover_img">
                            <img src="images/inside_front.jpg" style="opacity: 0;">
                        </div>
                        <div class="inside_ifc">
                            <div class="row">
                                <div class="col-md-4">
                                   
                                    <div class="profile_photo">
                                         <iconHoverComponent class="insidefc_profile" @click.native="openPopUp(1)" />
                                         <img :src="defaultImage"  v-if="imageIfcPath == ''" title="" >
                                        <img v-if="imageIfcPath != ''" :src="imageIfcPath" alt="" srcset="" style="margin-bottom:20px;">
                            	
                                    </div>
                                    <div class="profile_text" v-if="!this.ifcTextDisplay">
                                         <iconHoverIfcComponent class="insidefc_profile" @click.native="openPopUp(2)"/>
                                        <h2>{{this.ifcTitleText}}</h2>
                                        <p><b>{{this.ifcCompanyName}}</b></p>
                                        <p>{{this.designation1}}, {{this.designation2}}, {{this.designation3}}</p>
                                        <p>{{this.designationTitle1}}
                                            {{this.designationTitle2}}
                                            {{this.designationTitle3}}
                                            {{this.designationTitle4}}</p>
                                        <p class="mb-3"></p>
                                        <div v-if="this.displayAddressLable">       
                                            <p><b>{{this.ifcCompanyName2}}</b></p>  
                                            <p>{{this.designationifc}}, {{this.designationifc1}} ,{{this.designationifc2}}</p>
                                            <p>{{this.designationTitle}}
                                                {{this.designationTitleset2}}
                                                {{this.designationTitleset3}}
                                                {{this.designationTitleset4}}
                                            </p>
                                        </div>
                                        <p>{{this.addressIfc1}}</p>
                                        <!-- <p>ENCINO, CA, 91436</p> -->
                                        <p>{{this.directPhoneIfc}}</p>
                                        <p>{{this.officePhone}}</p>
                                        <p class="mb-3"></p>
                                        <p>{{this.websiteUrlIfc}}</p>
                                        <p>{{this.emailIfc}}</p>
                                        <p class="mb-3"></p>
                                        <p>{{this.stNumberIfc}}</p>
                                    </div>
                                    <div class="profile_text" v-if="this.ifcTextDisplay" >
                                      <div v-html="this.ifcText"></div>
                                       <iconHoverIfcComponent class="insidefc_profile" />
                                    </div>
                                    <div class="logo_middle">
                                        <div class="below_logo">
                                                <iconHoverIfcComponent class="insidefc_profile" @click.native="openPopUp(3)"/>
                                            <!-- <img src="images/footer_logo.png" alt="" title=""> defaultIfcLogoPath-->
                                            <img :src="defaultIfcLogoPath" v-if="imageIfcLogoPath == ''"   title="" >
                                            <img v-if="imageIfcLogoPath != ''" :src="imageIfcLogoPath" alt="" srcset="" style="margin-bottom:20px;">
                                        </div> 
                                    </div>                                
                                </div>
                                <div class="col-md-8">
                                    <div class="right_ifc_content" v-if="!this.ifcRightTextDisplay">
                                        
                                          <div class="hoverComponetRemove">
                                                <div class="inner_plus_data">        
                                                <i class="ti-pencil" title="Edit" @click="editIfcRight()"></i>
                                                </div>
                                            </div>
                                         
                                            <div v-if="!this.showTextAreaIfcRight" >
                                               <p  v-if="this.ifcRightTextInputValue == ''" v-html="this.inputTextRightIfc"></p>
                                                <p  class="value" v-if="this.ifcRightTextInputValue!= ''" v-html="this.ifcRightTextInputValue"></p>
                                            </div>
                                         
                                         <!-- <p v-if="!this.showTextAreaIfcRight && this.ifcRightTextInputValue != ''" v-html="this.inputTextRightIfc"></p>    -->
                                        <!-- <textarea  v-if= this.showTextAreaIfcRight name="" id="" cols="30" rows="10" v-model="inputTextRightIfc">    
                                        </textarea> -->
                                        <div v-if="this.showTextAreaIfcRight" class="editor_pop_up">
                                            <div class="hoverComponetRemove">
                                                <div class="inner_plus_data">        
                                                <a @click="addfont('italic', false, null), (italicBtn = !italicBtn)" :class="{'btn': true, 'active' : italicBtn}" title="Italic" data-toggle="tooltip" data-placement="top">
                                                            <i class="ti-Italic"></i>
                                                </a>
                                                 <a @click="addfont('bold', false, null), (boldBtn = !boldBtn)" :class="{'btn': true, 'active' : boldBtn}" title="Bold" data-toggle="tooltip" data-placement="top">
                                                            <i class="fas fa-bold"></i>
                                                 </a>
                                                 <a @click="addfont('underline', false, null), (underlineBtn = !underlineBtn)" :class="{'btn': true, 'active' : underlineBtn}" title="Underline" data-toggle="tooltip" data-placement="top">
                                                            <i class="ti-underline"></i>
                                                 </a>
                                               <a @click="addfont('justifyLeft' ,false, null), resetActiveOnAlign('textLeft', textLeft)" :class="{'btn': true, 'active' : textLeft}" title="Left" data-toggle="tooltip" data-placement="top">
                                                            <i class="ti-align-left"></i>
                                                </a>
                                               <a @click="addfont('justifyCenter', false, null), resetActiveOnAlign('textCenter', textCenter)" :class="{'btn': true, 'active' : textCenter}" title="Center" data-toggle="tooltip" data-placement="top">
                                                            <i class="ti-align-center"></i>
                                                </a>
                                                 <a @click="addfont('justifyRight' ,false, null), resetActiveOnAlign('textRight', textRight)" :class="{'btn': true, 'active' : textRight}" title="Right" data-toggle="tooltip" data-placement="top">
                                                    <i class="ti-align-right"></i>
                                                </a>
                                                <a @click="addfont('justifyFull' ,false, null), resetActiveOnAlign('textJustify', textJustify)" :class="{'btn': true, 'active' : textJustify}" title="Justify" data-toggle="tooltip" data-placement="top">
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
                                                <a @click="saveIfcRight()" :class="{'btn': true,}">
                                                  <i class="ti-check" title="Edit" ></i>
                                                </a>
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <div class="content_area Edit_data" v-if="this.showTextAreaIfcRight">

                                            <!-- <div class="font_content">Body Content</div> -->
                                            <div v-if="this.ifcRightTextInputValue == ''"  class="editable_ifc_text" contenteditable="true" v-html="this.inputTextRightIfc"></div>
                                            <div v-if="this.ifcRightTextInputValue != ''"  class="editable_ifc_text" contenteditable="true" v-html="this.ifcRightTextInputValue"></div>
                                          
                                            <!-- <div class="font_content">Font Style</div>
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
                                                            <i class="ti-split-v-alt"></i>
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
                                            </div> -->
                                        </div>
                                        <div class="ifc_signature_image">
                                            <img v-if="this.imageIfcSignaturePath == ''" :src="defaultIfcSignaturePath" alt="">
                                            <img v-if="this.imageIfcSignaturePath != ''" :src="imageIfcSignaturePath" alt="">
                                          <iconHoverIfcComponent class="insidefc_profile" @click.native="openPopUp(4)"/>    
                                        </div>
                                    </div>
                                    <!-- <div class="right_ifc_content" v-if="this.ifcRightTextDisplay">
                                        <div v-html="this.ifcRightText"></div>
                                        <iconHoverIfcComponent class="insidefc_profile"/>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <!-- modal start here -->
        <div class="modal fade show_data" id="ifcModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-xl" role="document"  :class="{'custom_address':this.openIfcModalForText == 'ifc-text'}">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">IFC input modal
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
                                            <div v-if="this.open_pop_up == 1"> 
                                                <div class="font_content">
        											Upload Profile Image
        										</div>
                                                <div class="Logo_select_option row">
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.radioButton == 'default' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="UseDefault">
        														<input  type="radio" id="UseDefault" value="default" v-model="radioButton" @change="changeRadio" name="check" />Use Default Profile
        													</label>
        												</div>
                                                    </div>
                                                    <div class="row modal_radiobox" :class="{'activeRadio':this.radioButton == 'addMedia' }">
                                                        <div class="col-sm-12 text_field">
        													<label for="addMedia">
        														<input  type="radio" id="addMedia" data-id="addMedia_id" value="addMedia" v-model="radioButton" @change="changeRadio" name="check" />Add Profile Image
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
                                            <div v-if="this.open_pop_up == 3" > 
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
                                            <div  v-if="this.open_pop_up == 2">  
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
                                            <div class="signature" v-if="this.open_pop_up == 4">
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
        <!-- modal close here -->
        <ifcInputComponent/>
        <!-- <ifcTextInputModel/> -->
        <FileModalComponent/>
    </div>
</template>

<script>
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
        //  ifcTextInputModel,
         FileModalComponent,
         "color-picker": ColorPicker
    },
    data(){
       return{
           inputTextRightIfc:defaultTextIfc,
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
            defaultImage : 'images/profile_pic.jpg',
            radioButton : 'default',

       }
       
    },
    computed: {
        ...mapState([
            'ifcPreview',
            'bcPreview',
        ])
    },
    mounted(){
        this.saveIFCPreview()
        this.getifcUserBook()
        this.ACTION_CHANGE_STATE(['defaultIfcImagePath', this.preifcimagepath])
        this.ACTION_CHANGE_STATE(['defaultIfcLogoPath', this.preifclogoimagepath])
        this.ACTION_CHANGE_STATE(['defaultIfcSignaturePath', this.preifcSignatureimagepath])
    },
    methods:{
        resetActiveOnAlign (type, value) {
			this.textLeft = false
			this.textRight = false
			this.textCenter = false
			this.textJustify = false
			this[type] = !this[value]
        },
        displayModal() {
                $('#ifcModal').modal('show');
		},
        openPopUp(value){
            this.open_pop_up = value
        },
        changeRadio(e){
            this.radioButton = e.target.value
        },
        
    },
}
</script>

<style>

</style>