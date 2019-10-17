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
                <div class="preview_responsive desktop" v-if="!this.$store.state.Savefcloader">
                    <div class="inner_right_side bc_backCover preview_content">
                        <div class="cover_img "> 
                            <img src="images/back_cover.jpg" style="opacity: 1">
                        </div>
                        <!-- header text section -->
                        <div class="bc_header">    
                            <iconHoverIfcComponent class="insidefc_profile" @click.native="ibcModal(1)"/>
                            <div class="top-title">
                                <p>{{this.headName}}</p>
                                <p>{{this.headAddress1}}</p>
                                <p>{{this.headAddress2 + ' ,'}}</p>
                                <p>{{this.headCity + ' ,'}} {{this.headCountry}}</p>
                            </div>
                        </div>
                           <!-- header text section end here -->
                        <div class="col-sm-7">
                        </div>
                        <div class="inside_bc">
                            <!-- logo section start here -->
                            <div class="col-md-12 ibc_logo p-0">
                                <iconHoverIfcComponent class="insidefc_profile" @click.native="ibcModal(2)"/> 
                                <img  :src="this.defaultLogoImage" alt="" title=""  v-if="this.logoRadioButton == 'default'">
                                <img :src="this.logoImage" v-if="this.logoRadioButton == 'addMedia'">
                            </div>
                            <!-- logo section end here -->
                            <div class="row below_title_text bc_heading_title">
                                <div class="col-md-6"> </div>
                                <div class="col-md-6">
                                    <div class="col-md-12 bc_text">
                                        <h2>Chances <br> are your<br> buyers is <br> already<br> our client</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row bc_text_inner">
                                <div class="col-sm-6"></div>
                                <div class="col-sm-6 text_inner">
                                    <p>No second tier. No coach class. When you list with us, you receive the full benefit of four decades of industry leadership. The power of a global network. And culture of excellence that goes back centuries before that. Welcome to Sotheby's International Realthy. It is our pleasure to serve you.</p>
                                </div>
                            </div>
                            <div class="row">                           
                                <div class=" col-sm-4"></div>
                                <div class="col-sm-8 bc_address bc_image">
                                    <!-- profile image section start here -->
                                    <div class="profile_imge_bc" style="position:relative">
                                        <iconHoverIfcComponent class="insidefc_profile" @click.native="ibcModal(3)"/>
                                        <img  :src="this.defaultProfileImage" alt="" title=""  v-if="this.profileRadioButton == 'default'">
                                        <img :src="this.profileImage" v-if="this.profileRadioButton == 'addMedia'">
                                    </div>
                                    <!-- profile image section end here -->

                                    <!-- profile text start here -->
                                    <iconHoverIfcComponent class="insidefc_profile" @click.native="ibcModal(4)"/>
                                    <h2>{{this.title}}</h2>
                                    <p><b>{{this.company_name}}</b></p>
                                    <p>{{this.address1}}</p>
                                    <p>{{this.address2}}</p>
                                    <p>{{this.office_phone}}</p>
                                    <p>{{this.direct_phone}}</p>
                                    <p>{{this.website}}</p>
                                    <p>{{this.email}}</p>
                                    <!-- profile text end here -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <router-link to="/allpreview" ><div><span class="gjs-pn-btn fa fa-eye" title="" data-tooltip-pos="bottom" data-tooltip="Preview"></span></div></router-link>
            </div>
        </div>
        <!-- modal start here -->
        <div class="modal fade show_data" id="bcModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" :class="this.open_pop_up == 1 || this.open_pop_up == 4 ? 'custom_address' : ''" role="document">
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
                                    <!-- profile text area start here -->
                                    <div class="content_area" v-if="this.open_pop_up == 1">
                                        <!-- <div class="font_content">
                                            Top Header Text
                                        </div> -->
                                        <div>
                                            <div class="ifc_title">
                                                <label for="usr">Name</label>
                                                <input type="text" v-model="headName" class="form-control" id="usr" placeholder="Name">
                                            </div>
                                            <div class="ifc_title">
                                                <label for="usr">Address 1</label>
                                                <input type="text" v-model="headAddress1"  class="form-control" id="usr" placeholder="address 1">
                                            </div>                                       
                                            
                                            <div class="ifc_title">
                                                <label for="usr">Address 2</label>
                                                <input type="text" v-model="headAddress2" class="form-control" id="usr" placeholder="address 2">
                                            </div>
                                           
                                            <div class="ifc_title">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="usr">City</label>
                                                        <input type="text" v-model="headCity"  class="form-control" id="usr" placeholder="City">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="usr">Country</label>
                                                        <input type="text" v-model="headCountry"  class="form-control" id="usr" placeholder="Country">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- profile text area end here -->
                                    <!-- logo image area start here -->
                                    <div class="content_area" v-if="this.open_pop_up == 2">
                                        <div class="font_content">
                                            Upload Logo Image
                                        </div>
                                        <div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.logoRadioButton == 'default' }">
                                                <div class="col-sm-12 text_field">
                                                    <label for="default">
                                                        <input type="radio" id="default" value="default" v-model="logoRadioButton" name="checkifcright" />Use Default Image              
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.logoRadioButton == 'remove' }">
                                                <div class="col-sm-12 text_field">
                                                    <label for="remove">
                                                        <input type="radio" value="remove" v-model="logoRadioButton" id="remove" name="checkifcright" /> Remove Images              
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.logoRadioButton == 'addMedia' }">
                                                <div class="col-sm-12 text_field">
                                                    <label for="addMedia">
                                                        <input type="radio" id="addMedia" value="addMedia" v-model="logoRadioButton" name="checkifcright" /> Add Image 
                                                        <toolTipsComponent title="215 X 100"/>
                                                    </label>
                                                </div>
                                            </div>                                           
                                            <div class="add_media">
                                                <button v-if="this.logoRadioButton == 'addMedia'" class="btn btn-block media_btn"  data-target="#fileModal" data-toggle="modal">
                                                    <span class="font_content">Add Media</span>
                                                </button>
                                            </div>
                                            <div v-if="this.logoRadioButton == 'default'" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                <img :src="this.defaultLogoImage" alt="" data-target="#fileModal" data-toggle="modal" title="" style="margin-bottom:20px;">
                                            </div>
                                            <div v-if="this.logoRadioButton == 'addMedia'" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                <img :src="this.logoImage" alt="" data-target="#fileModal" data-toggle="modal" title="" style="margin-bottom:20px;">
                                            </div>
                                        </div>
                                        <!---END LogoImage IBC ---->
                                    </div>
                                    <!-- logo image area end here -->
                                    <!-- profile image area start here -->
                                    <div class="content_area" v-if="this.open_pop_up == 3">
                                        <div class="font_content">
                                            Upload Profile Image
                                        </div>
                                         <!---for LogoImage IBC ---->
                                        <div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.profileRadioButton == 'default' }">
                                                <div class="col-sm-12 text_field">
                                                    <label for="default">
                                                        <input type="radio" id="default" value="default" v-model="profileRadioButton" name="checkifcright" /> Use Default Image                      
                                                    </label>
                                                </div>
                                            </div>   
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.profileRadioButton == 'addMedia' }">
                                                <div class="col-sm-12 text_field">
                                                    <label for="addMedia">
                                                        <input type="radio" id="addMedia" value="addMedia" v-model="profileRadioButton" name="checkifcright" checked /> Add Image
                                                        <toolTipsComponent title="300 X 150"/>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="add_media">
                                                <button v-if="this.profileRadioButton == 'addMedia'" class="btn btn-block media_btn"  data-target="#fileModal" data-toggle="modal">
                                                    <span class="font_content">Add Media</span>
                                                </button>
                                            </div>
                                            <div v-if="this.profileRadioButton == 'default'" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                <img :src="this.defaultProfileImage" alt="" data-target="#fileModal" data-toggle="modal" title="" style="margin-bottom:20px;">
                                            </div>
                                            <div v-if="this.profileRadioButton == 'addMedia'" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                <img :src="this.profileImage" alt="" data-target="#fileModal" data-toggle="modal" title="" style="margin-bottom:20px;">
                                            </div>
                                        </div>
                                        <!---END LogoImage IBC ---->
                                    </div>
                                    <!-- profile image area end here -->
                                    <!-- profile text area -->
                                    <div class="content_area" v-if="this.open_pop_up == 4">
                                        <!-- <div class="font_content">
                                            BC Address Input
                                        </div> -->
                                        <div>
                                            <div class="ifc_title">
                                                <label for="usr">Title</label>
                                                <input type="text" v-model="title" class="form-control" id="usr" placeholder="Title">
                                            </div>
                                            <div class="ifc_title">
                                                <label for="usr">Company Name</label>
                                                <input type="text" v-model="company_name" class="form-control" id="usr" placeholder="Company name">
                                            </div>                                       
                                            
                                            <div class="ifc_title">
                                                <label for="usr">Address 1</label>
                                                <input type="text" v-model="address1" class="form-control" id="usr" placeholder="address 1">
                                            </div>
                                           
                                            <div class="ifc_title">
                                                <label for="usr">Address 2</label>
                                                <input type="text" v-model="address2" class="form-control" id="usr" placeholder="address 2">
                                            </div>
                                            <!---------------------->
                                         
                                            <!------------------>
                                            <div class="ifc_title">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="usr">Office Phone</label>
                                                        <input type="text" v-model="office_phone" class="form-control" id="usr" placeholder="office phone">
                                                    </div>
                                                    <!---------------------->
                                                    <!------------------>
                                                     <div class="col-md-6">
                                                        <label for="usr">Direct Phone</label>
                                                        <input type="text" v-model="direct_phone" class="form-control" id="usr" placeholder="direct phone">
                                                    </div>
                                                </div>
                                            </div>
                                            <!---------------------->
                                            <!------------------>
                                            <div class="ifc_title">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="usr">Website URL</label>
                                                        <input type="text" v-model="website" class="form-control" id="usr" placeholder="website">
                                                    </div>
                                                    <!---------------------->
                                                    <!------------------>
                                                     <div class="col-md-6">
                                                        <label for="usr">Email</label>
                                                        <input type="text" v-model="email" class="form-control" id="usr" placeholder="email">
                                                    </div>
                                                </div>
                                            </div>                                           
                                        </div>
                                    </div>
                                    <!-- profile text area end here -->
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
                               Cancel <i class="ti-close" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal end here -->
        <FileModalComponent/>
  </div>
</template>

<script>
import alertComponent from './common/alertComponent';
import FileModalComponent from "./model/fileModalComponent";
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    components:{
        FileModalComponent,
        alertComponent
    },
    computed: {
        ...mapState([
            'bcPreview',
            'bcHeadName',
            'bcHeadAddress1',
            'bcHeadAddress2',
            'bcHeadCity',
            'bcHeadCountry',
            'bcLogoRadioButton',
            'bcLogoImage',
            // profile image
            'bcProfileRadioButton',
            'bcProfileImage',
            // profile text section
            'bcTitle',
            'bcCompanyName',
            'bcAddress1',
            'bcAddress2',
            'bcOfficePhone',
            'bcDirectPhone',
            'bcWebsite',
            'bcEmail'
        ])
    },
    data(){
        return{
            open_pop_up : '',
            // header section
            headName : this.$store.state.bcHeadName,
            headAddress1 : this.$store.state.bcHeadAddress1,
            headAddress2 : this.$store.state.bcHeadAddress2,
            headCity : this.$store.state.bcHeadCity,
            headCountry : this.$store.state.bcHeadCountry,
            // logo section
            logoRadioButton : this.$store.state.bcLogoRadioButton,
            logoImage : this.$store.state.bcLogoImage,
            defaultLogoImage : 'images/logo.png',
            // profile image section
            profileRadioButton : this.$store.state.bcProfileRadioButton,
            profileImage : this.$store.state.bcProfileImage,
            defaultProfileImage : 'images/profile_pic.jpg',
            // profile text section
            title : this.$store.state.bcTitle,
            company_name : this.$store.state.bcCompanyName,
            address1 : this.$store.state.bcAddress1,
            address2 : this.$store.state.bcAddress2,
            office_phone : this.$store.state.bcOfficePhone,
            direct_phone : this.$store.state.bcDirectPhone,
            website : this.$store.state.bcWebsite,
            email : this.$store.state.bcEmail,
        }
    },
    created (){
        this.getBcData()
    },
   mounted(){
        this.ACTION_CHANGE_STATE(['showCover',4])
        var container = this.$el.querySelector(".border_full");
        container.scrollTop = container.scrollHeight;
    },
    methods:{
        ...mapActions([
            'ACTION_CHANGE_STATE',
        ]),
        ...mapMutations([
            'EMPTY_MESSAGE_LIST',
            'PUSH_ERROR_MESSAGE',
            'PUSH_SUCCESS_MESSAGE'
        ]),
        ibcModal(value){
            this.open_pop_up = value
            $('#bcModal').modal('show');
        },
        setImage(value){
            if(this.open_pop_up == 2){
                this.logoImage = value
            }else if(this.open_pop_up == 3){
                this.profileImage = value
            }
        },
        cancelModal(){
            // header address section
            this.headName = this.bcHeadName;
            this.headAddress1 = this.bcHeadAddress1;
            this.headAddress2 = this.bcHeadAddress2;
            this.headCity = this.bcHeadCity;
            this.headCountry = this.bcHeadCountry;
            // logo image section
            this.logoRadioButton = this.bcLogoRadioButton;
            this.logoImage = this.bcLogoImage;
            // profile image section
            this.profileRadioButton = this.bcProfileRadioButton;
            this.profileImage = this.bcProfileImage;
            // profile text section
            this.title = this.bcTitle;
            this.company_name = this.bcCompanyName;
            this.address1 = this.bcAddress1;
            this.address2 = this.bcAddress2;
            this.office_phone = this.bcOfficePhone;
            this.direct_phone = this.bcDirectPhone;
            this.website = this.bcWebsite;
            this.email = this.bcEmail;

        },
        saveChanges(){
            if(this.open_pop_up == 2 && this.logoRadioButton == 'addMedia' && this.logoImage == 'images/avatar_image.jpg'){
                this.logoRadioButton = this.bcLogoRadioButton;
            }else if(this.open_pop_up == 3 && this.profileRadioButton == 'addMedia' && this.profileImage == 'images/avatar_image.jpg'){
                this.profileRadioButton = this.bcProfileRadioButton;
            }
            // header address section
            this.ACTION_CHANGE_STATE(['bcHeadName',this.headName]);
            this.ACTION_CHANGE_STATE(['bcHeadAddress1',this.headAddress1]);
            this.ACTION_CHANGE_STATE(['bcHeadAddress2',this.headAddress2]);
            this.ACTION_CHANGE_STATE(['bcHeadCity',this.headCity]);
            this.ACTION_CHANGE_STATE(['bcHeadCountry',this.headCountry]);
            // logo image section
            this.ACTION_CHANGE_STATE(['bcLogoRadioButton',this.logoRadioButton]);
            this.ACTION_CHANGE_STATE(['bcLogoImage',this.logoImage]);
            // profile image section
            this.ACTION_CHANGE_STATE(['bcProfileRadioButton',this.profileRadioButton]);
            this.ACTION_CHANGE_STATE(['bcProfileImage',this.profileImage]);
            // profile text section
            this.ACTION_CHANGE_STATE(['bcTitle',this.headName]);
            this.ACTION_CHANGE_STATE(['bcCompanyName',this.headAddress1]);
            this.ACTION_CHANGE_STATE(['bcAddress1',this.headAddress2]);
            this.ACTION_CHANGE_STATE(['bcAddress2',this.headCity]);
            this.ACTION_CHANGE_STATE(['bcOfficePhone',this.headCountry]);
            this.ACTION_CHANGE_STATE(['bcDirectPhone',this.headName]);
            this.ACTION_CHANGE_STATE(['bcWebsite',this.headAddress1]);
            this.ACTION_CHANGE_STATE(['bcEmail',this.headAddress2]);
        },
        onSubmit(){
            this.EMPTY_MESSAGE_LIST();
            this.ACTION_CHANGE_STATE(['loader', true])
            var data = {
                columnName: 'back_cover',
                // header address section
                headName : this.headName,
                headAddress1 : this.headAddress1,
                headAddress2 : this.headAddress2,
                headCity : this.headCity,
                headCountry : this.headCountry,
                // logo image section
                logoRadioButton : this.logoRadioButton,
                logoImage : this.logoImage,
                // profile image section
                profileRadioButton : this.profileRadioButton,
                profileImage : this.profileImage,
                // profile text section
                title : this.title,
                company_name : this.company_name,
                address1 : this.address1,
                address2 : this.address2,
                office_phone : this.office_phone,
                direct_phone : this.direct_phone,
                website : this.website,
                email : this.email,
            }

            axios.post("api/userBooks", data)
			.then(response => {
                // this.PUSH_SUCCESS_MESSAGE('Back cover saved successfully!');
                this.alertSuccess('Back cover saved successfully!');

                const back_cover = response.data.data;
                // for set the data
                this.setBcData(back_cover);

                this.ACTION_CHANGE_STATE(['loader', false])

            })
            .catch(error => {
                // this.PUSH_ERROR_MESSAGE('Internal server error!');
                this.alertError('Internal server error!');
                this.ACTION_CHANGE_STATE(['loader', false])
            })

        },
        saveDownload(){

        },
        setBcData(data){
            if(data){
                // header address section
                this.headName = data.headName;
                this.headAddress1 = data.headAddress1 != undefined ? data.headAddress1 : this.bcHeadAddress1;
                this.headAddress2 = data.headAddress2 != undefined ? data.headAddress2 : this.bcHeadAddress2;
                this.headCity = data.headCity != undefined ? data.headCity : this.bcHeadCity;
                this.headCountry = data.headCountry != undefined ? data.headCountry : this.bcHeadCountry;
                // logo image section
                this.logoRadioButton = data.logoRadioButton != undefined ? data.logoRadioButton : this.bcLogoRadioButton;
                this.logoImage = data.logoImage != undefined ? data.logoImage : this.bcLogoImage;
                // profile image section
                this.profileRadioButton = data.profileRadioButton != undefined ? data.profileRadioButton : this.bcProfileRadioButton;
                this.profileImage = data.profileImage != undefined ? data.profileImage : this.bcProfileImage;
                // profile text section
                this.title = data.title != undefined ? data.title : this.bcTitle;
                this.company_name = data.company_name != undefined ? data.company_name : this.bcCompanyName;
                this.address1 = data.address1 != undefined ? data.address1 : this.bcAddress1;
                this.address2 = data.address2 != undefined ? data.address2 : this.bcAddress2;
                this.office_phone = data.office_phone != undefined ? data.office_phone : this.bcOfficePhone;
                this.direct_phone = data.direct_phone != undefined ? data.direct_phone : this.bcDirectPhone;
                this.website = data.website != undefined ? data.website : this.bcWebsite;
                this.email = data.email != undefined ? data.email : this.bcEmail;
                // for store data into vuex store
                this.saveChanges();
            }
        },
        getBcData(){
            this.ACTION_CHANGE_STATE(['loader', true])
            axios.get("api/userBooks/1")
			.then(response => {
                const back_cover = response.data.data.back_cover;
                // for set the data
                this.setBcData(back_cover);
                this.ACTION_CHANGE_STATE(['loader', false])
            })
            .catch(error => {
                // this.PUSH_ERROR_MESSAGE('Problem in geting data!');
                this.alertError('Problem in getting data!');
                this.ACTION_CHANGE_STATE(['loader', false])
            })
        }
    },   
}
</script>
