<template>
  <div>
       <div class="row main_container m-0">
            <LeftSideComponent />
            <div class="col-sm-10 right_side">
              <div class="gjs-pn-buttons top_preview"></div>
            <router-link to="/preview" target="_blank"><button class="preview_mag" @click="preiviewTab()">Preview</button></router-link>
            <button class="save_ifc_to_db" @click="savebcDataToDb">Save Preview</button>
              <LoaderComponent/>
                <div class="preview_responsive desktop" v-if="!this.$store.state.Savefcloader">
                    <div class="inner_right_side bc_backCover preview_content">
                        <div class="cover_img "> 
                            <img src="images/back_cover.jpg" style="opacity: 1">
                        </div>
                        <div class="bc_header">    
                            <iconHoverIfcComponent class="insidefc_profile"/>
                            <div class="top-title">
                                <p>{{this.bcTitleHeaderText}}</p>
                                <p>{{this.bcAddressHeaderBcText}}</p>
                                <p>{{this.bcAddressHeaderBc1Text}},</p>
                                <p>{{this.bcCityHeaderText}} , {{this.bcCountryHeaderText}}</p>
                            </div>
                        </div>    
                        <div class="col-sm-7">
                        </div>
                        <div class="inside_bc">
                            <div class="col-md-12 ibc_logo p-0">
                                <iconHoverIfcComponent class="insidefc_profile"/> 
                                <img  :src="this.defaultBcLogoImagePath" alt="" title=""  v-if="this.imageBcLogoPath == ''">
                                <img :src="this.imageBcLogoPath" v-if="this.imageBcLogoPath != ''">
                            </div>
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
                                    
                                    <div class="profile_imge_bc" style="position:relative">
                                        <iconHoverIfcComponent class="insidefc_profile"/>
                                        <img  :src="this.defaultBcProfileImagePath" alt="" title=""  v-if="this.imageBcProfilePath == ''">
                                        <img :src="this.imageBcProfilePath" v-if="this.imageBcProfilePath != ''">
                                    </div>
                                    <iconHoverIfcComponent class="insidefc_profile"/>
                                    <h2>{{this.bcTitleText}}</h2>
                                    <p><b>{{this.bcCompanyNameText}}</b></p>
                                    <p>{{this.bcAddressText}}</p>
                                    <p>{{this.bcAddressText1}}</p>
                                    <p>{{this.bcOfficeNumberText}}</p>
                                    <p>{{this.bcPhoneNumberText}}</p>
                                    <p>{{this.bcWebsiteText}}</p>
                                    <p>{{this.bcEmailText}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <router-link to="/allpreview" ><div><span class="gjs-pn-btn fa fa-eye" title="" data-tooltip-pos="bottom" data-tooltip="Preview"></span></div></router-link>
            </div>
        </div>
        <BCImageModal/>
        <FileModalComponent/>
        <BCAddressModal/>
  </div>
</template>

<script>
import BCImageModal from "./model/bcImageModal";
import FileModalComponent from "./model/fileModalComponent";
import BCAddressModal from "./model/bcAddressModal";
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    components:{
        BCImageModal,
        FileModalComponent,
        BCAddressModal
    },
    computed: {
        ...mapState([
            'bcPreview',
        ])
    },
    data(){
        return{
            
        }
    },
   mounted(){
        this.getBCUserBook()
    },
    methods:{  

    },   
}
</script>
