<template>
    <div>
        <div class="modal fade show_data" id="bcAddressModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl custom_address" role="document">
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
                                    <div class="content_area" v-if="openFooterContent">
                                        <!-- <div class="font_content">
                                            BC Address Input
                                        </div> -->
                                        <div>
                                            <div class="ifc_title">
                                                <label for="usr">Title</label>
                                                <input type="text" v-model='titleInputBC' @keyup="getTitleBc(titleInputBC)" class="form-control" id="usr">
                                            </div>
                                            <div class="ifc_title">
                                                <label for="usr">Company Name</label>
                                                <input type="text" v-model='companyInputBC' @keyup="getCompanyNameBc(companyInputBC)" class="form-control" id="usr">
                                            </div>                                       
                                            
                                            <div class="ifc_title">
                                                <label for="usr">Address 1</label>
                                                <input type="text" v-model='addressInputBC' @keyup="getAddressBc(addressInputBC)" class="form-control" id="usr">
                                            </div>
                                           
                                            <div class="ifc_title">
                                                <label for="usr">Address 2</label>
                                                <input type="text" v-model='addressInputBC1' @keyup="getAddressBc1(addressInputBC1)" class="form-control" id="usr">
                                            </div>
                                            <!---------------------->
                                         
                                            <!------------------>
                                            <div class="ifc_title">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="usr">Office Phone</label>
                                                        <input type="text" v-model='officePhoneInputBC' @keyup="getOfficePhoneBc1(officePhoneInputBC)" class="form-control" id="usr">
                                                    </div>
                                                    <!---------------------->
                                                    <!------------------>
                                                     <div class="col-md-6">
                                                        <label for="usr">Direct Phone</label>
                                                        <input type="text" v-model='directPhoneInputBC' @keyup="getdirectPhoneBc(directPhoneInputBC)" class="form-control" id="usr">
                                                    </div>
                                                </div>
                                            </div>
                                            <!---------------------->
                                            <!------------------>
                                            <div class="ifc_title">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="usr">Website URL</label>
                                                        <input type="text" v-model='websiteUrlInputBC' @keyup="getWebsiteUrlBc(websiteUrlInputBC)" class="form-control" id="usr">
                                                    </div>
                                                    <!---------------------->
                                                    <!------------------>
                                                     <div class="col-md-6">
                                                        <label for="usr">Email</label>
                                                        <input type="text" v-model='emailInputBC' @keyup="getEmailBc(emailInputBC)" class="form-control" id="usr">
                                                    </div>
                                                </div>
                                            </div>                                           
                                        </div>
                                    </div>
                                    <div class="content_area" v-if="openHeaderContent">
                                        <!-- <div class="font_content">
                                            Top Header Text
                                        </div> -->
                                        <div>
                                            <div class="ifc_title">
                                                <label for="usr">Name</label>
                                                <input type="text" v-model='titleHeaderBC' @keyup="getTitleHeaderBc(titleHeaderBC)" class="form-control" id="usr">
                                            </div>
                                            <div class="ifc_title">
                                                <label for="usr">Address 1</label>
                                                <input type="text" v-model='addressHeaderBc' @keyup="getAddressHeaderBc(addressHeaderBc)" class="form-control" id="usr">
                                            </div>                                       
                                            
                                            <div class="ifc_title">
                                                <label for="usr">Address 2</label>
                                                <input type="text" v-model='addressHeaderBc1' @keyup="getAddressHeaderBc1(addressHeaderBc1)" class="form-control" id="usr">
                                            </div>
                                           
                                            <div class="ifc_title">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="usr">City</label>
                                                        <input type="text" v-model='cityHeader' @keyup="getCityHeaderBc(cityHeader)" class="form-control" id="usr">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="usr">Country</label>
                                                        <input type="text" v-model='countryHeader' @keyup="getCountryHeaderBc(countryHeader)" class="form-control" id="usr">
                                                    </div>
                                                </div>
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
                            <button class="btn bottom_btn" data-dismiss="modal" @click="saveBcChanges">
                                <i class="ti-check"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapState, mapMutations, mapGetters, mapActions
    }
    from "vuex"
 
    export default {
        data() {
                return {
                    //titleInputBC: 'Kat Nitsous',
                    //companyInputBC: 'Sotheby’s International Realty, Inc.',
                    //addressInputBC: '16027 VENTURA BLVD, Suite 330 ',
                    //addressInputBC1:'ENCINO, CA, 91436',
                    //emailInputBC: 'kat.nitsou@sothebyinternational.com',
                    //websiteUrlInputBC: 'sothebyshomes.com',
                    //officePhoneInputBC: 'M : 323-228-3805',
                    //directPhoneInputBC: 'O : 626-396-9400',
                    

                };
            },
            components: {
               
            },
            computed: {
                /*Here Geter Setter value of Footer Content Start*/
                titleInputBC:{
                    get(){
                        return this.$store.state.bcTitleText
                    },
                    set(newValue){
                        this.$store.state.bcTitleText = newValue
                    }
                },
                companyInputBC:{
                    get(){
                        return this.$store.state.bcCompanyNameText
                    },
                    set(newValue){
                        this.$store.state.bcCompanyNameText = newValue
                    }
                },
                addressInputBC:{
                    get(){
                        return this.$store.state.bcAddressText
                    },
                    set(newValue){
                        this.$store.state.bcAddressText = newValue
                    }
                },
                addressInputBC1:{
                    get(){
                        return this.$store.state.bcAddressText1
                    },
                    set(newValue){
                        this.$store.state.bcAddressText1 = newValue
                    }
                },
                emailInputBC:{
                    get(){
                        return this.$store.state.bcEmailText
                    },
                    set(newValue){
                        this.$store.state.bcEmailText = newValue
                    }
                },
                websiteUrlInputBC:{
                    get(){
                        return this.$store.state.bcWebsiteText
                    },
                    set(newValue){
                        this.$store.state.bcWebsiteText = newValue
                    }
                },
                officePhoneInputBC:{
                    get(){
                        return this.$store.state.bcOfficeNumberText
                    },
                    set(newValue){
                        this.$store.state.bcOfficeNumberText = newValue
                    }
                },
                directPhoneInputBC:{
                    get(){
                        return this.$store.state.bcPhoneNumberText
                    },
                    set(newValue){
                        this.$store.state.bcPhoneNumberText = newValue
                    }
                },
                /*Here Geter Setter value of Footer Content End*/
                /*Here Geter Setter value of Header Content End*/
                titleHeaderBC: {
                    get(){
                        return this.$store.state.bcTitleHeaderText
                    },
                    set(newValue){
                        this.$store.state.bcTitleHeaderText = newValue
                    }
                },
                addressHeaderBc: {
                    get(){
                        return this.$store.state.bcAddressHeaderBcText
                    },
                    set(newValue){
                        this.$store.state.bcAddressHeaderBcText = newValue
                    }
                },
                addressHeaderBc1: {
                    get(){
                        return this.$store.state.bcAddressHeaderBc1Text
                    },
                    set(newValue){
                        this.$store.state.bcAddressHeaderBc1Text = newValue
                    }
                },
                cityHeader: {
                    get(){
                        return this.$store.state.bcCityHeaderText
                    },
                    set(newValue){
                        this.$store.state.bcCityHeaderText = newValue
                    }
                },
                countryHeader: {
                    get(){
                        return this.$store.state.bcCountryHeaderText
                    },
                    set(newValue){
                        this.$store.state.bcCountryHeaderText = newValue
                    }
                },
                /*Here Geter Setter value of Header Content End*/
                // titleHeaderBC:'Kat Nitsous',
                // addressHeaderBc:'Sotheby’s International Really, Inc.',
                // addressHeaderBc1: '1801 N.Hillhurts Avenue',
                // cityHeader: 'Los Angeles',
                // countryHeader: 'California 90027',
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
                resetActiveOnAlign(type, value) {
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