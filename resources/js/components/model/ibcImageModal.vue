<template>
    <div>
        <div class="modal fade show_data" id="ifcTextModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <div class="content_area">
                                        
                                        <!---for profile_image IBC ---->
                                        <div v-if="this.openIbcModal == 'profile' ">
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
                                        <!---for mainImage IBC  ---->
                                        <div v-if="this.openIbcModal == 'mainImage' ">
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

                                         <!---for LogoImage IBC ---->
                                        <div v-if="this.openIbcModal == 'logoImage' ">
                                            <div class="font_content">
                                                Upload Logo Image
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.IbcLogoImage == 'default' }">
                                                <div class="col-sm-12 text_field">
													<label for="UseTextDefault">
														<input type="radio" id="UseTextDefault" value="default" v-model="IbcLogoImage" @change="getIbcLogoImageInputValue(IbcLogoImage)" name="checkifcright" checked /> Use Default Logo
                                                        
													</label>
												</div>
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.IbcLogoImage == 'remove' }">
                                                <div class="col-sm-12 text_field">
													<label for="remove">
														<input type="radio" value="remove" v-model="IbcLogoImage" @change="getIbcLogoImageInputValue(IbcLogoImage)" id="remove" name="checkifcright" checked /> Remove Logo Image
													</label>
												</div>
                                            </div>
                                            <div class="row modal_radiobox" :class="{'activeRadio':this.IbcLogoImage == 'addMedia' }">
                                                <div class="col-sm-12 text_field">
													<label for="addMediaIbc">
														<input type="radio" id="addMediaIbc" value="addMedia" v-model="IbcLogoImage" @change="getIbcLogoImageInputValue(IbcLogoImage)" name="checkifcright" checked /> Add Logo Image
                                                        <toolTipsComponent title="900 X 900"/>
													</label>
												</div>
                                            </div>
                                            <div class="add_media">
                                                <button v-if="this.displayIbcLogoMedia" class="btn btn-block media_btn" @click="check_Value('ibcLogoImage')" data-target="#fileModal" data-toggle="modal">
                                                    <span class="font_content">Add Media</span>
                                                </button>
                                            </div>
                                            <div v-if="this.displayIbcLogoMedia" class="add-media-show" id="addMedia_id" data-section="section-1">
                                                <img src="images/avatar_image.jpg" alt="" data-target="#fileModal" data-toggle="modal" title="" style="margin-bottom:20px;" v-show="imageIbcLogoPath == ''">
                                                <img data-target="#fileModal" data-toggle="modal" v-if="imageIbcLogoPath != ''" :src="imageIbcLogoPath" alt="" srcset="" style="margin-bottom:20px; margin-top: 37px;">
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
                            <button class="btn btn_save" data-dismiss="modal" @click="saveIbcChanges">
                                Save <i class="ti-check"></i>
                            </button>
                            <button class="btn btn_close" data-dismiss="modal" @click="cancelModel">
                                Close<i class="ti-close" aria-hidden="true"></i>
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
                    // IbcImageModal: 'default',
                    // IbcMainImage :'default',
                    // IbcLogoImage :'default',
                };
            },
            components: {
                "color-picker": ColorPicker
            },
            computed: {
                IbcLogoImage:{
                    get() {
                        return this.$store.state.ibcLogoCheckChoose;
                    },
                    set(newValue){
                        console.log(newValue)
                    return this.$store.state.ibcLogoCheckChoose = newValue
                    }
                },
                IbcMainImage:{
                   get() {
                        return this.$store.state.ibcBannerCheckChoose;
                    },
                    set(newValue){
                        console.log(newValue)
                    return this.$store.state.ibcBannerCheckChoose = newValue
                    } 
                },
                IbcImageModal:{
                    get() {
                        return this.$store.state.ibcProfileCheckChoose;
                    },
                    set(newValue){
                        console.log(newValue)
                    return this.$store.state.ibcProfileCheckChoose = newValue
                    } 
                }
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