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
                                <div v-if="this.mainRadioButton == 'default'" :style="{height: '100%',backgroundPosition: 'center center', backgroundSize: 'cover', backgroundImage:'url('+this.defaultMainImage+')'}"></div>
                                <div v-if="this.mainRadioButton != ''" :style="{height: '100%',backgroundPosition: 'center center', backgroundSize: 'cover', backgroundImage:'url('+this.mainImage+')'}"></div>
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
                                            <img v-if="this.photoRadioButton == 'default'" :src="this.defaultPhotoImage" alt="" title="">
                                            <img v-if="this.photoRadioButton == 'addMedia'" :src="photoImage" alt="" title="">
                                        </div>
                                        <div class="col-md-9">
                                            <div class="profile_text pl-3">
                                                <iconHoverIfcComponent class="insidefc_profile" @click.native="openIbcModal(4)"/>
                                                <h2>{{this.title}}</h2>
                                                <p><b>{{this.company_name}}</b></p>
                                                <p>{{this.address1}}</p>
                                                <p>{{this.address2}}</p>
                                                <p>{{this.direct_phone}}</p>
                                                <p>{{this.office_phone}}</p>
                                                <p class="mb-3"></p>
                                                <p>{{this.website}}</p>
                                                <p>{{this.email}}</p>
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
                                                        <toolTipsComponent title="300 X 150"/>
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
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.mainRadioButton == 'default' }">
                                                <div class="col-sm-12 text_field">
													<label for="UseTextDefault">
														<input type="radio" id="UseTextDefault" value="default" v-model="mainRadioButton" @change="mainRadioButtonChange" name="checkifcright" /> Use Default Banner Image
													</label>
												</div>
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.mainRadioButton == 'addMedia' }">
                                                <div class="col-sm-12 text_field">
													<label for="addMediaIbc">
														<input type="radio" id="addMediaIbc" value="addMedia" v-model="mainRadioButton" @change="mainRadioButtonChange" name="checkifcright" /> Add Banner Images
                                                        <toolTipsComponent title="1200 x 500"/>
													</label>
												</div>
                                            </div>
                                            <div class="add_media">
                                                <button v-if="this.mainRadioButton == 'addMedia'" class="btn btn-block media_btn" data-target="#fileModal" data-toggle="modal">
                                                    <span class="font_content">Add Media</span>
                                                </button>
                                            </div>
                                            <div v-if="this.mainRadioButton == 'default'" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                <img :src="this.defaultMainImage" alt="" title="" style="margin-bottom:20px;">
                                            </div>
                                            <div v-if="this.mainRadioButton == 'addMedia'" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                <img :src="this.mainImage" alt="" data-target="#fileModal" data-toggle="modal" title="" style="margin-bottom:20px;">
                                            </div>
                                        </div>
                                        <!---END mainImage IBC ---->
                                        <!---for profile_image IBC ---->
                                        <div v-if="this.open_pop_up == 3 ">
                                            <div class="font_content">
                                                Upload Profile Image
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.photoRadioButton == 'default' }">
                                                <div class="col-sm-12 text_field">
													<label for="UseTextDefault">
														<input type="radio" id="UseTextDefault" value="default" v-model="photoRadioButton" name="checkifcright" /> Use Default Profile
													</label>
												</div>
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.photoRadioButton == 'addMedia' }">
                                                <div class="col-sm-12 text_field">
													<label for="addMediaIbc">
														<input type="radio" id="addMediaIbc" value="addMedia" v-model="photoRadioButton"  name="checkifcright" /> Add Profile Image
                                                        <toolTipsComponent title="320 X 500"/>
													</label>
												</div>
                                            </div>
                                            <div v-if="photoRadioButton == 'default'" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                <img :src="this.defaultPhotoImage" alt="" title="" style="margin-bottom:20px;">
                                            </div>
                                            <div class="add_media">
                                                <button v-if="photoRadioButton == 'addMedia'" class="btn btn-block media_btn" @click="check_Value('ibcProfile')" data-target="#fileModal" data-toggle="modal">
                                                    <span class="font_content">Add Media</span>
                                                </button>
                                            </div>
                                            <div v-if="photoRadioButton == 'addMedia'" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                <img :src="this.photoImage" alt="" data-target="#fileModal" data-toggle="modal" title="" style="margin-bottom:20px;">
                                                <!-- <img data-target="#fileModal" data-toggle="modal" v-if="imageIbcProfilePath != ''" :src="imageIbcProfilePath" alt="" srcset="" style="margin-bottom:20px; margin-top: 37px;"> -->
                                            </div>
                                        </div>
                                        <!---END profile_image IBC ---->
                                        <!-- This section for ibc text -->
                                        <div v-if="this.open_pop_up == 4 ">
                                            <div class="ifc_title">
                                                <label for="usr">Title</label>
                                                <input type="text" v-model='title' class="form-control" id="usr">
                                            </div>
                                            <div class="ifc_title">
                                                <label for="usr">Company Name</label>
                                                <input type="text" v-model="company_name" class="form-control" id="usr">
                                            </div>                                       
                                            <!------------------>
                                            <!------------------>
                                            <div class="ifc_title">
                                                <label for="usr">Address 1</label>
                                                <input type="text" v-model="address1" class="form-control" id="usr">
                                            </div>
                                            <!---------------------->
                                             <!------------------>
                                            <div class="ifc_title">
                                                <label for="usr">Address 2</label>
                                                <input type="text" v-model="address2" class="form-control" id="usr">
                                            </div>
                                            <!---------------------->
                                         
                                            <!------------------>
                                            <div class="ifc_title">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="usr">Office Phone</label>
                                                        <input type="text" v-model="office_phone" class="form-control" id="usr">
                                                    </div>
                                                    <!---------------------->
                                                    <!------------------>
                                                    <div class="col-md-6">
                                                        <label for="usr">Direct Phone</label>
                                                        <input type="text" v-model="direct_phone" class="form-control" id="usr">
                                                    </div>
                                                </div>
                                            </div>
                                            <!---------------------->
                                            <!------------------>
                                             <div class="ifc_title">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="usr">Website URL</label>
                                                        <input type="text" v-model="website" class="form-control" id="usr">
                                                     </div>
                                                    <!---------------------->
                                                    <!------------------>
                                                    <div class="col-md-6">
                                                        <label for="usr">Email</label>
                                                        <input type="text" v-model="email" class="form-control" id="usr">
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
import alertComponent from './common/alertComponent';
import FileModalComponent from "./model/fileModalComponent";
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    components:{
        alertComponent,
        FileModalComponent,
    },
    computed: {
        ...mapState([
            'ibcPreview',
            'ibcLogoRadioButton',
            'ibcLogoImage',
            'ibcMainImage',
            'ibcMainRadioButton',
            'ibcPhotoRadioButton',
            'ibcPhotoImage',
            'ibcTitle',
            'ibcCompanyName',
            'ibcAddress1',
            'ibcAddress2',
            'ibcOfficePhone',
            'ibcDirectPhone',
            'ibcWebsite',
            'ibcEmail'
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
            logoImage : this.$store.state.ibcLogoImage,
            // main image 
            defaultMainImage : 'images/ibc_img.jpg',
            mainImage : this.$store.state.ibcMainImage,
            mainRadioButton : this.$store.state.ibcMainRadioButton,
            // photo section
            photoRadioButton : this.$store.state.ibcPhotoRadioButton,
            defaultPhotoImage : 'images/profile_pic.jpg',
            photoImage : this.$store.state.ibcPhotoImage,
            // address section 
            title : this.$store.state.ibcTitle,
            company_name : this.$store.state.ibcCompanyName,
            address1 : this.$store.state.ibcAddress1,
            address2 : this.$store.state.ibcAddress2,
            office_phone : this.$store.state.ibcOfficePhone,
            direct_phone : this.$store.state.ibcDirectPhone,
            website : this.$store.state.ibcWebsite,
            email : this.$store.state.ibcEmail
        }
    },
    created(){
        this.get_ibc_data();
    },
   mounted(){
        this.saveIBCPreview()
        this.ACTION_CHANGE_STATE(['showCover',3])
        var container = this.$el.querySelector(".border_full");
        container.scrollTop = container.scrollHeight;
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
        openIbcModal(value){
            this.open_pop_up = value
            $('#ibcModal').modal('show');
        },
        setImage(value){
            if(this.open_pop_up == 1){
                this.logoImage = value
            }else if(this.open_pop_up == 2){
                this.mainImage = value
            }else if(this.open_pop_up == 3){
                this.photoImage = value
            }
        },
        cancelModal(){
            // logo section
            this.logoImage = this.ibcLogoImage;
            this.logoRadioButton = this.ibcLogoRadioButton;
            // main image section
            this.mainRadioButton = this.ibcMainRadioButton;
            this.mainImage = this.ibcMainImage;
            // photo image
            this.photoRadioButton = this.ibcPhotoRadioButton;
            this.photoImage  = this.ibcPhotoImage;
            // address section
            this.title = this.ibcTitle;
            this.company_name = this.ibcCompanyName;
            this.address1 = this.ibcAddress1;
            this.address2 = this.ibcAddress2;
            this.office_phone = this.ibcOfficePhone;
            this.direct_phone = this.ibcDirectPhone;
            this.website = this.ibcWebsite;
            this.email = this.ibcEmail;
        },
        saveChanges(){
            if(this.open_pop_up == 1 && this.logoImage == 'images/avatar_image.jpg' && this.logoRadioButton == 'addMedia'){
                this.logoRadioButton = this.ibcLogoRadioButton
            }else if(this.open_pop_up == 2 && this.mainImage == 'images/avatar_image.jpg' && this.mainRadioButton == 'addMedia'){
                this.mainRadioButton = this.ibcMainRadioButton;
            }else if(this.open_pop_up == 3 && this.photoImage == 'images/avatar_image.jpg' && this.photoRadioButton == 'addMedia'){
                this.photoRadioButton = this.ibcPhotoRadioButton;
            }
            this.CHANGE_STATE(['ibcLogoRadioButton',this.logoRadioButton]);
            this.CHANGE_STATE(['ibcLogoImage',this.logoImage]);
            // main image section
            this.CHANGE_STATE(['ibcMainRadioButton',this.mainRadioButton]);
            this.CHANGE_STATE(['ibcMainImage',this.mainImage]);
            // photo image
            this.CHANGE_STATE(['ibcPhotoRadioButton',this.photoRadioButton]);
            this.CHANGE_STATE(['ibcPhotoImage',this.photoImage]);
            // address section
            this.CHANGE_STATE(['ibcTitle',this.title]);
            this.CHANGE_STATE(['ibcCompanyName',this.company_name]);
            this.CHANGE_STATE(['ibcAddress1',this.address1]);
            this.CHANGE_STATE(['ibcAddress2',this.address2]);
            this.CHANGE_STATE(['ibcOfficePhone',this.office_phone]);
            this.CHANGE_STATE(['ibcDirectPhone',this.direct_phone]);
            this.CHANGE_STATE(['ibcWebsite',this.website]);
            this.CHANGE_STATE(['ibcEmail',this.email]);

        },
        logoRadioButtonChange(e){
            var value = e.target.value
            this.logoRadioButton = value
        },
        mainRadioButtonChange(e){
            const value = e.target.value
            this.mainRadioButton = value
        },
        onSubmit(){
            this.EMPTY_MESSAGE_LIST();
            const data = {
                columnName: 'inside_back_cover',
                logoRadioButton : this.logoRadioButton,
                logoImage : this.logoImage,
                // main image 
                mainImage : this.mainImage,
                mainRadioButton : this.mainRadioButton,
                // photo section
                photoRadioButton : this.photoRadioButton,
                photoImage : this.photoImage,
                // address section 
                title : this.title,
                company_name : this.company_name,
                address1 : this.address1,
                address2 : this.address2,
                office_phone : this.office_phone,
                direct_phone : this.direct_phone,
                website : this.website,
                email : this.email
            }
            axios.post("api/userBooks", data)
			.then(response => {
                const inside_back_cover = response.data.data
                this.setIbcData(inside_back_cover);
                this.PUSH_SUCCESS_MESSAGE('Inside back cover saved successfully!');
            })
            .catch(error => {
                this.PUSH_ERROR_MESSAGE('Internal server error');
            })
        },
        saveDownload(){
            this.onSubmit();
        },
        setIbcData(data){
            console.log(data)
            if(data){
                // save into data property
                // logo section
                this.logoImage = data.logoImage;
                this.logoRadioButton = data.logoRadioButton;
                // main image section
                this.mainRadioButton = data.mainRadioButton;
                this.mainImage = data.mainImage;
                // photo image
                this.photoRadioButton = data.photoRadioButton;
                this.photoImage  = data.photoImage;
                // address section
                this.title = data.title;
                this.company_name = data.company_name;
                this.address1 = data.address1;
                this.address2 = data.address2;
                this.office_phone = data.office_phone;
                this.direct_phone = data.direct_phone;
                this.website = data.website;
                this.email = data.email;

                this.saveChanges();
            }
        },
        get_ibc_data(){
            axios.get("api/userBooks/1")
            .then(response => {
                const inside_back_cover = response.data.data.inside_back_cover
                this.setIbcData(inside_back_cover);
            })
            .catch(error => {
                this.PUSH_ERROR_MESSAGE('Problem in geting data!')
            })
        }
    }
}
</script>

<style>

</style>