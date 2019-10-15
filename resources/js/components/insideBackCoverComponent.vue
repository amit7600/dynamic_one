<template>
    <div>
        <div class="row main_container m-0">
            <LeftSideComponent />
            <div class="col-sm-10 right_side">
            <div class="gjs-pn-buttons top_preview"></div>
            <router-link to="/preview" target="_blank"><button class="preview_mag" @click="preiviewTab()">Preview</button></router-link>
            <button class="save_ifc_to_db" @click="saveibcDataToDb">Save Preview</button>
              <LoaderComponent/>
                <div class="preview_responsive" v-if="!this.$store.state.Savefcloader">
                    <div class="inner_right_side preview_content">
                        <div class="cover_img"> 
                            <img src="images/inside_back.jpg" style="opacity: 0">
                        </div>
                        <div class="inside_ifc inside_ibc">
                            <div class="col-md-12 ibc_logo p-0">
                              <iconHoverIfcComponent class="insidefc_profile" @click.native="openIbcModal(1)" /> 
                                <img v-if="this.logoRadioButton == 'default'" :src="this.defaultLogo" alt="" title="">
                                <img v-if="this.logoRadioButton == 'addMedia'" :src="this.logoImage" alt="">
                            </div>
                            <div class="col-sm-12 p-0 inside_bc_img">
                                  <iconHoverIfcComponent class="insidefc_profile" @click.native="openIbcModal(2)"/> 
                                <!-- <img v-if="this.imageIbcMainPath == ''" :src="this.defaultIbcMainImagePath" alt="" title="">
                                <img v-if="this.imageIbcMainPath != ''" :src="this.imageIbcMainPath" alt=""> -->
                                <div v-if="this.imageIbcMainPath == ''" :style="{height: '100%',backgroundPosition: 'center center', backgroundSize: 'cover', backgroundImage:'url('+this.defaultIbcMainImagePath+')'}"></div>
                                <div v-if="this.imageIbcMainPath != ''" :style="{height: '100%',backgroundPosition: 'center center', backgroundSize: 'cover', backgroundImage:'url('+this.imageIbcMainPath+')'}"></div>
                            </div>
                            <div class="row below_title_text m-0">
                                <div class="col-md-6">
                                    <div class="col-sm-12">
                                        <h2>LIKE<br />NO<br />OTHER</h2>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <p class="right_content_text">The sale of a significant home is truly noteworthy. To
                                        represent a home of distinction requires highlyqualified real estate professionals with
                                        global reach and local expertise. <b>Sell your home with us.</b>
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4"></div>
                                <div class="col-md-8 pt-5 pl-5">
                                    <div class="row">
                                        <div class="col-md-3 p-0 ibc_profile">
                                            <iconHoverIfcComponent class="insidefc_profile" @click.native="openIbcModal(3)"/> 
                                            <img v-if="this.imageIbcProfilePath == ''" :src="defaultIbcProfilePath" alt="" title="">
                                            <img v-if="this.imageIbcProfilePath != ''" :src="imageIbcProfilePath" alt="" title="">
                                        </div>
                                        <div class="col-md-9">
                                            <div class="profile_text pl-3">
                                                <iconHoverIfcComponent class="insidefc_profile" @click.native="openIbcModal(4)"/>
                                                <h2>{{this.ibcTitleText}}</h2>
                                                <p><b>{{this.ibcCompanyNameText}}</b></p>
                                                <p>{{this.ibcAddressText}}</p>
                                                <p>{{this.ibcAddressText1}}</p>
                                                <p>{{this.ibcOfficeNumberText}}</p>
                                                <p>{{this.ibcPhoneNumberText}}</p>
                                                <p class="mb-3"></p>
                                                <p>{{this.ibcWebsiteText}}</p>
                                                <p>{{this.ibcEmailText}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade show_data" id="ibcModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" :class="this.open_pop_up == 4 ? 'custom_address' : ''" role="document">
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
                                <div id="design" class="tab-pane">
                                    <div class="content_area">
                                        
                                        <!---for LogoImage IBC ---->
                                        <div v-if="this.open_pop_up == 1 ">
                                            <div class="font_content">
                                                Upload Logo Image
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.logoRadioButton == 'default' }">
                                                <div class="col-sm-12 text_field">
													<label for="UseTextDefault">
														<input type="radio" id="UseTextDefault" value="default" v-model="logoRadioButton" @change="logoRadioButtonChange" name="checkifcright" checked /> Use Default Logo
                                                        
													</label>
												</div>
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.logoRadioButton == 'remove' }">
                                                <div class="col-sm-12 text_field">
													<label for="remove">
														<input type="radio" value="remove" v-model="logoRadioButton" @change="logoRadioButtonChange" id="remove" name="checkifcright" checked /> Remove Logo Image
													</label>
												</div>
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.logoRadioButton == 'addMedia' }">
                                                <div class="col-sm-12 text_field">
													<label for="addMediaIbc">
														<input type="radio" id="addMediaIbc" value="addMedia" v-model="logoRadioButton" @change="logoRadioButtonChange" name="checkifcright" checked /> Add Logo Image
                                                        <toolTipsComponent title="900 X 900"/>
													</label>
												</div>
                                            </div>
                                            <div class="add_media">
                                                <button v-if="this.logoRadioButton == 'addMedia'" class="btn btn-block media_btn" @click="check_Value('ibcLogoImage')" data-target="#fileModal" data-toggle="modal">
                                                    <span class="font_content">Add Media</span>
                                                </button>
                                            </div>
                                            <div v-if="this.logoRadioButton == 'addMedia'" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                <img :src="logoImage" alt="" data-target="#fileModal" data-toggle="modal" title="" style="margin-bottom:20px;">
                                            </div>
                                        </div>
                                        <!---END LogoImage IBC ---->
                                        
                                        <!---for mainImage IBC  ---->
                                        <div v-if="this.open_pop_up == 2 ">
                                            <div class="font_content">
                                                Upload Banner Image
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.IbcMainImage == 'default' }">
                                                <div class="col-sm-12 text_field">
													<label for="UseTextDefault">
														<input type="radio" id="UseTextDefault" value="default" v-model="IbcMainImage" @change="getIbcMainImageInputValue(IbcMainImage)" name="checkifcright" checked /> Use Default Banner Image
													</label>
												</div>
                                            </div>
                                            <!-- <div class="row modal_radiobox" :class="{'activeRadio':this.IbcMainImage == 'remove' }">
                                                <div class="col-sm-12 text_field">
													<label for="remove">
														<input type="radio" value="remove" v-model="IbcMainImage" @change="getIbcMainImageInputValue(IbcMainImage)" id="remove" name="checkifcright" checked /> Remove Banner Images
													</label>
												</div>
                                            </div> -->
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.IbcMainImage == 'addMedia' }">
                                                <div class="col-sm-12 text_field">
													<label for="addMediaIbc">
														<input type="radio" id="addMediaIbc" value="addMedia" v-model="IbcMainImage" @change="getIbcMainImageInputValue(IbcMainImage)" name="checkifcright" checked /> Add Banner Images
                                                        <toolTipsComponent title="800 X 800"/>
													</label>
												</div>
                                            </div>
                                            <div class="add_media">
                                                <button v-if="this.displayIbcMainMedia" class="btn btn-block media_btn" @click="check_Value('ibcMainImage')" data-target="#fileModal" data-toggle="modal">
                                                    <span class="font_content">Add Media</span>
                                                </button>
                                            </div>
                                            <div v-if="this.displayIbcMainMedia" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                <img src="images/avatar_image.jpg" alt="" data-target="#fileModal" data-toggle="modal" title="" style="margin-bottom:20px;" v-show="imageIbcMainPath == ''">
                                                <img data-target="#fileModal" data-toggle="modal" v-if="imageIbcMainPath != ''" :src="imageIbcMainPath" alt="" srcset="" style="margin-bottom:20px; margin-top: 37px;">
                                            </div>
                                        </div>
                                        <!---END mainImage IBC ---->
                                        <!---for profile_image IBC ---->
                                        <div v-if="this.open_pop_up == 3 ">
                                            <div class="font_content">
                                                Upload Profile Image
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.IbcImageModal == 'default' }">
                                                <div class="col-sm-12 text_field">
													<label for="UseTextDefault">
														<input type="radio" id="UseTextDefault" value="default" v-model="IbcImageModal" @change="getIbcInputValue(IbcImageModal)" name="checkifcright" checked /> Use Default Profile
													</label>
												</div>
                                            </div>
                                            <!-- <div class="row modal_radiobox" :class="{'activeRadio':this.IbcImageModal == 'remove' }">
                                                <div class="col-sm-12 text_field">
													<label for="remove">
														<input type="radio" value="remove" v-model="IbcImageModal" @change="getIbcInputValue(IbcImageModal)" id="remove" name="checkifcright" checked /> Remove Profile
													</label>
												</div>
                                            </div> -->
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.IbcImageModal == 'addMedia' }">
                                                <div class="col-sm-12 text_field">
													<label for="slideTwo">
														<input type="radio" id="addMediaIbc" value="addMedia" v-model="IbcImageModal" @change="getIbcInputValue(IbcImageModal)" name="checkifcright" checked /> Add Profile Image
                                                        <toolTipsComponent title="700 X 700"/>
													</label>
												</div>
                                            </div>
                                            <div class="add_media">
                                                <button v-if="displayIbcProfileMedia" class="btn btn-block media_btn" @click="check_Value('ibcProfile')" data-target="#fileModal" data-toggle="modal">
                                                    <span class="font_content">Add Media</span>
                                                </button>
                                            </div>
                                            <div v-if="displayIbcProfileMedia" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                <img src="images/avatar_image.jpg" alt="" data-target="#fileModal" data-toggle="modal" title="" style="margin-bottom:20px;" v-show="imageIbcProfilePath == ''">
                                                <img data-target="#fileModal" data-toggle="modal" v-if="imageIbcProfilePath != ''" :src="imageIbcProfilePath" alt="" srcset="" style="margin-bottom:20px; margin-top: 37px;">
                                            </div>
                                        </div>
                                        <!---END profile_image IBC ---->
                                        <!-- This section for ibc text -->
                                        <div v-if="this.open_pop_up == 4 ">
                                            <div class="ifc_title">
                                                <label for="usr">Title</label>
                                                <input type="text" v-model='titleInputIbc' @keyup="getTitleIbc(titleInputIbc)" class="form-control" id="usr">
                                            </div>
                                            <div class="ifc_title">
                                                <label for="usr">Company Name</label>
                                                <input type="text" v-model='companyInputIbc' @keyup="getCompanyNameIbc(companyInputIbc)" class="form-control" id="usr">
                                            </div>                                       
                                            <!------------------>
                                            <!------------------>
                                            <div class="ifc_title">
                                                <label for="usr">Address 1</label>
                                                <input type="text" v-model='addressInputIbc' @keyup="getAddressIbc(addressInputIbc)" class="form-control" id="usr">
                                            </div>
                                            <!---------------------->
                                             <!------------------>
                                            <div class="ifc_title">
                                                <label for="usr">Address 2</label>
                                                <input type="text" v-model='addressInputIbc1' @keyup="getAddressIbc1(addressInputIbc1)" class="form-control" id="usr">
                                            </div>
                                            <!---------------------->
                                         
                                            <!------------------>
                                            <div class="ifc_title">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="usr">Office Phone</label>
                                                        <input type="text" v-model='officePhoneInputIbc' @keyup="getOfficePhoneIbc(officePhoneInputIbc)" class="form-control" id="usr">
                                                    </div>
                                                    <!---------------------->
                                                    <!------------------>
                                                    <div class="col-md-6">
                                                        <label for="usr">Direct Phone</label>
                                                        <input type="text" v-model='directPhoneInputIbc' @keyup="getdirectPhoneIbc(directPhoneInputIbc)" class="form-control" id="usr">
                                                    </div>
                                                </div>
                                            </div>
                                            <!---------------------->
                                            <!------------------>
                                             <div class="ifc_title">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="usr">Website URL</label>
                                                        <input type="text" v-model='websiteUrlInputIbc' @keyup="getWebsiteUrlIbc(websiteUrlInputIbc)" class="form-control" id="usr">
                                                     </div>
                                                    <!---------------------->
                                                    <!------------------>
                                                    <div class="col-md-6">
                                                        <label for="usr">Email</label>
                                                        <input type="text" v-model='emailInputIbc' @keyup="getEmailIbc(emailInputIbc)" class="form-control" id="usr">
                                                    </div>
                                                </div>
                                            </div>
                                            <!---------------------->
                                        </div>
                                        <!-- end text section -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="inner_footer_content">
                            <button class="btn btn_save" data-dismiss="modal" @click="saveChanges">
                                Save <i class="ti-check"></i>
                            </button>
                            <button class="btn btn_close" data-dismiss="modal" @click="cancelModal">
                                Close<i class="ti-close" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <FileModalComponent/>
    </div>  
</template>

<script>
import ibcImageModelComponent from "./model/ibcImageModal";
import ibcAddressInputComponent from "./model/ibcAddressModal";
import FileModalComponent from "./model/fileModalComponent";
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    components:{
       ibcImageModelComponent,
       FileModalComponent,
       ibcAddressInputComponent,
    },
    computed: {
        ...mapState([
            'ibcPreview',
            'ibcLogoRadioButton',
            'ibcLogoImage'
        ])
    },
    data(){
        return{
            ibcContent :'' ,
            loader:parseInt(100),
			loaderHeight:parseInt(20),
            loaderColor:'#3949ab',
            // start
            open_pop_up : '',
            defaultLogo : 'images/ibc_logo.png',
            logoRadioButton : this.$store.state.ibcLogoRadioButton,
            logoImage : this.$store.state.ibcLogoImage 
        }
    },
   mounted(){
        this.saveIBCPreview()
        this.getIbcUserBook()
    },
    methods:{
        ...mapMutations([
            'CHANGE_STATE'
        ]),
        openIbcModal(value){
            this.open_pop_up = value
            $('#ibcModal').modal('show');
        },
        setImage(value){
            if(this.open_pop_up == 1){
                this.logoImage = value
            }
        },
        cancelModal(){
            // logo section
            this.logoImage = this.ibcLogoImage
            this.logoRadioButton = this.ibcLogoRadioButton
        },
        saveChanges(){
            if(this.open_pop_up == 1 && this.logoImage == 'images/avatar_image.jpg' && this.logoRadioButton == 'addMedia'){
                this.logoRadioButton = this.ibcLogoRadioButton
            }
            this.CHANGE_STATE(['ibcLogoRadioButton',this.logoRadioButton]);
            this.CHANGE_STATE(['ibcLogoImage',this.logoImage]);
        },
        logoRadioButtonChange(e){
            var value = e.target.value
            this.logoRadioButton = value
        }
    }
}
</script>

<style>

</style>