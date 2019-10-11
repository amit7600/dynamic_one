<template>
    <div>
        <div class="modal fade show_data" id="ifcTextModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
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
                                    <div class="content_area" v-if="this.openIbcModal">
                                        <div class="font_content">
                                            Upload Logo Image
                                        </div>
                                         <!---for LogoImage IBC ---->
                                        <div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.BcLogoImage == 'default' }">
                                                <div class="col-sm-12 text_field">
                                                    <label for="addMedia">
                                                        <input type="radio" id="UseTextDefault" value="default" v-model="BcLogoImage" @change="getBcLogoImageInputValue(BcLogoImage)" name="checkifcright" checked />Use Default Image              
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.BcLogoImage == 'remove' }">
                                                <div class="col-sm-12 text_field">
                                                    <label for="addMedia">
                                                        <input type="radio" value="remove" v-model="BcLogoImage" @change="getBcLogoImageInputValue(BcLogoImage)" id="remove" name="checkifcright" checked /> Remove Images              
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.BcLogoImage == 'addMedia' }">
                                                <div class="col-sm-12 text_field">
                                                    <label for="addMedia">
                                                        <input type="radio" id="addMediaIbc" value="addMedia" v-model="BcLogoImage" @change="getBcLogoImageInputValue(BcLogoImage)" name="checkifcright" checked /> Add Image 
                                                        <toolTipsComponent title="300 X 300"/>
                                                    </label>
                                                </div>
                                            </div>                                           
                                            <div class="add_media">
                                                <button v-if="this.displayBcLogoMedia" class="btn btn-block media_btn"  data-target="#fileModal" data-toggle="modal" @click="check_Value('BcLogoImage')">
                                                    <span class="font_content">Add Media</span>
                                                </button>
                                            </div>
                                            <div v-if="this.displayBcLogoMedia" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                <img src="images/avatar_image.jpg" alt="" data-target="#fileModal" data-toggle="modal" title="" style="margin-bottom:20px;" v-show="imageBcLogoPath == ''">
                                                <img data-target="#fileModal" data-toggle="modal" v-if="imageBcLogoPath != ''" :src="imageBcLogoPath" alt="" srcset="" style="margin-bottom:20px; margin-top: 37px;">
                                            </div>
                                        </div>
                                        <!---END LogoImage IBC ---->
                                    </div>
                                    <div class="content_area" v-if="this.profileImage">
                                        <div class="font_content">
                                            Upload Profile Image
                                        </div>
                                         <!---for LogoImage IBC ---->
                                        <div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.BcProfileImage == 'default' }">
                                                <div class="col-sm-12 text_field">
                                                    <label for="addMedia">
                                                        <input type="radio" id="UseTextDefault" value="default" v-model="BcProfileImage" @change="getBcProfileImageInputValue(BcProfileImage)" name="checkifcright" checked /> Use Default Image                      
                                                    </label>
                                                </div>
                                            </div>   
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.BcProfileImage == 'addMedia' }">
                                                <div class="col-sm-12 text_field">
                                                    <label for="addMedia">
                                                        <input type="radio" id="addMediaIbc" value="addMedia" v-model="BcProfileImage" @change="getBcProfileImageInputValue(BcProfileImage)" name="checkifcright" checked /> Add Image
                                                        <toolTipsComponent title="200 X 200"/>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="add_media">
                                                <button v-if="this.displayBcProfileMedia" class="btn btn-block media_btn"  data-target="#fileModal" data-toggle="modal" @click="check_Value('BcProfileImage')">
                                                    <span class="font_content">Add Media</span>
                                                </button>
                                            </div>
                                            <div v-if="this.displayBcProfileMedia" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                <img src="images/avatar_image.jpg" alt="" data-target="#fileModal" data-toggle="modal" title="" style="margin-bottom:20px;" v-show="imageBcProfilePath == ''">
                                                <img data-target="#fileModal" data-toggle="modal" v-if="imageBcProfilePath != ''" :src="imageBcProfilePath" alt="" srcset="" style="margin-bottom:20px; margin-top: 37px;">
                                            </div>
                                        </div>
                                        <!---END LogoImage IBC ---->
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
        <LogoModalComponent/>
    </div>
</template>

<script>
    import LogoModalComponent from "./logoModalComponent";
    import {
        mapState, mapMutations, mapGetters, mapActions
    }
    from "vuex"
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
                    IbcImageModal: 'default',
                    IbcMainImage :'default',
                    IbcLogoImage :'default',
                    //BcLogoImage: 'default',
                    // BcProfileImage: 'default',
                };
            },
            components: {
                LogoModalComponent,
                "color-picker": ColorPicker
            },
            computed: {
                BcProfileImage:{
                    get(){
                        return this.$store.state.bcProfileChooseCheckBox
                    },
                    set(newValue){
                        this.$store.state.bcProfileChooseCheckBox = newValue
                    }
                },
                BcLogoImage:{
                    get(){
                        return this.bcLogoChooseCheckBox
                    },
                    set(newValue){
                        this.$store.state.bcLogoChooseCheckBox = newValue
                    }
                },
                // imageBcLogoPath: {
                //     get(){
                //         return this.$store.state.imageBcLogoPath
                //     },
                //     set(newValue){
                //         this.$store.state.imageBcLogoPath = newValue
                //     }
                // },
                // imageBcProfilePath: {
                //     get(){
                //         return this.$store.state.imageBcProfilePath
                //     },
                //     set(newValue){
                //         this.$store.state.imageBcProfilePath = newValue
                //     }
                // },

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