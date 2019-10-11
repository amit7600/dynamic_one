<template>
    <div>
        <div class="modal fade show_data" id="ibcAddressModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl custom_address" role="document" >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Insert New Module</h5>
                    </div>
                    <div class="modal-body">
                        <div class="tab-content">
                            <div id="content" class="side_bar_content tab-pane active">
                                <div id="design" class="tab-pane">
                                    <div class="content_area">
                                        <!-- <div class="font_content">
                                            IBC Address Input
                                        </div> -->
                                        <div>
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
                            <button class="btn bottom_btn" data-dismiss="modal" @click="saveIbcChanges">
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
                    // titleInputIbc: 'Kat Nitsou',
                    // companyInputIbc: 'Sotheby’s International Realty, Inc.',
                    // addressInputIbc: '16027 VENTURA BLVD, Suite 330 ',
                    // addressInputIbc1:'ENCINO, CA, 91436',
                    // emailInputIbc: 'kat.nitsou@sothebyinternational.com',
                    // websiteUrlInputIbc: 'sothebyshomes.com',
                    // officePhoneInputIbc: 'M : 323-228-3805',
                    // directPhoneInputIbc: 'O : 626-396-9400',
                };
            },
            components: {
               
            },
            computed: {
                 titleInputIbc:{
                   get(){
                       return this.$store.state.ibcTitleText 
                   },
                   set(newValue){
                       this.$store.state.ibcTitleText = newValue
                   }
                },
                companyInputIbc:{
                    get(){
                        return this.$store.state.ibcCompanyNameText 
                    },
                    set(newValue){
                        this.$store.state.ibcCompanyNameText = newValue
                    }
                },
                addressInputIbc:{
                    get(){
                        return this.$store.state.ibcAddressText 
                    },
                    set(newValue){
                        this.$store.state.ibcAddressText = newValue
                    }
                },
                addressInputIbc1:{
                    get(){
                        return this.$store.state.ibcAddressText1 
                    },
                    set(newValue){
                        this.$store.state.ibcAddressText1 = newValue
                    }
                }, 
                emailInputIbc:{
                    get(){
                        return this.$store.state.ibcEmailText 
                    },
                    set(newValue){
                        this.$store.state.ibcEmailText = newValue
                    }
                },
                websiteUrlInputIbc:{
                    get(){
                        return this.$store.state.ibcWebsiteText 
                    },
                    set(newValue){
                        this.$store.state.ibcWebsiteText = newValue
                    }
                },
                officePhoneInputIbc:{
                    get(){
                        return this.$store.state.ibcOfficeNumberText 
                    },
                    set(newValue){
                        this.$store.state.ibcOfficeNumberText = newValue
                    }
                },
                directPhoneInputIbc:{
                    get(){
                        return this.$store.state.ibcPhoneNumberText 
                    },
                    set(newValue){
                        this.$store.state.ibcPhoneNumberText = newValue
                    }
                },
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