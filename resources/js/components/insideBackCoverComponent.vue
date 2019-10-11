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
                              <iconHoverIfcComponent class="insidefc_profile"/> 
                                <img v-if="this.imageIbcLogoPath == ''" :src="this.defaultIbcLogoImagePath" alt="" title="">
                                <img v-if="this.imageIbcLogoPath != ''" :src="this.imageIbcLogoPath" alt="">
                            </div>
                            <div class="col-sm-12 p-0 inside_bc_img">
                                  <iconHoverIfcComponent class="insidefc_profile"/> 
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
                                            <iconHoverIfcComponent class="insidefc_profile"/> 
                                            <img v-if="this.imageIbcProfilePath == ''" :src="defaultIbcProfilePath" alt="" title="">
                                            <img v-if="this.imageIbcProfilePath != ''" :src="imageIbcProfilePath" alt="" title="">
                                        </div>
                                        <div class="col-md-9">
                                            <div class="profile_text pl-3">
                                                <iconHoverIfcComponent class="insidefc_profile"/>
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
         <ibcImageModelComponent/>
         <FileModalComponent/>
         <ibcAddressInputComponent/>
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
        ])
    },
    data(){
        return{
            ibcContent :'' ,
            loader:parseInt(100),
			loaderHeight:parseInt(20),
			loaderColor:'#3949ab'
        }
    },
   mounted(){
        this.saveIBCPreview()
        this.getIbcUserBook()
    },
    methods:{
        
    }
}
</script>

<style>

</style>