import LeftSideComponent from './components/leftSideComponent'
import RightSideComponent from './components/rideSideComponent'
import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex';
import iconHoverComponent from './components/common/iconHoverComponent'
import iconHoverIfcComponent from './components/common/iconHoverIfcComponent'
// import iconHoverComponentIfc from './components/common/iconHoverComponent'
// import modelInputComponent from './components/model/modelInputComponent'
import UplaodArea from './components/model/imageUploadAreaComponent'
import IfcCover from './components/ifcComponent'
import frontCover from './components/frontCoverComponent'
import iconPreviewComponent from './components/common/iconPreviewComponent'
import LoaderComponent from './components/common/loaderComponet'
import toolTipsComponent from './components/common/toolTipsComponent'
import {
    BarLoader,
    HashLoader,
    RingLoader,
    ScaleLoader,
    PropagateLoader,
    BounceLoader,
    CircleLoader


} from '@saeris/vue-spinners'


export const globalMixin = {
    components: {
        LeftSideComponent,
        RightSideComponent,
        iconHoverComponent,
        // iconHoverComponentIfc,
        // modelInputComponent, 
        UplaodArea,
        IfcCover,
        frontCover,
        iconHoverIfcComponent,
        iconPreviewComponent,
        BarLoader,
        HashLoader,
        RingLoader,
        ScaleLoader,
        PropagateLoader,
        BounceLoader,
        CircleLoader,
        LoaderComponent,
        toolTipsComponent

    },
    computed: {
        ...mapState([
            'fcAddMediaShow',
            'showFrontCover',
            'showFrontInsideCover',
            'imagePath',
            'imageIfcPath',
            'imageIfcSignaturePath',
            'imageIbcProfilePath',
            'imageIbcMainPath',
            'imageIbcLogoPath',
            'imageBcLogoPath',
            'defaultImagePath',
            'defaultIfcImagePath',
            'defaultIfcSignaturePath',
            'defaultIbcProfilePath',
            'defaultIbcMainImagePath',
            'defaultIbcLogoImagePath',
            'fcLogoText',
            'ifcRightTextInputValue',
            'textAlign',
            'hideFcText',
            'displayTextArea',
            'displayIfcTextArea',
            'fcLogoTextDisplay',
            'openModal',
            'setIfc_bind',
            'setIfcLogo_bind',
            'setIfcSignature_bind',
            'setIbcProfile_bind',
            'setIbcMainImage_bind',
            'setIbcLogoImage_bind',
            'openIfcModalForLogo',
            'openIfcModalForSignature',
            // 'openIbcModal',
            'openIfcModalForText',
            'defaultIfcLogoPath',
            'imageIfcLogoPath',
            'ifcTextDisplay',
            'ifcRightTextDisplay',
            'ifcText',
            'ifcRightText',
            'displayTextAreaFor',
            'displayIbcProfileMedia',
            'displayIbcMainMedia',
            'displayIbcLogoMedia',
            // 'ifcTitleText',
            // 'ifcCompanyName',
            // 'designation1',
            // 'designation2',
            // 'designation3',
            // 'designationTitle1',
            // 'designationTitle2',
            // 'designationTitle3',
            // 'designationTitle4',
            // 'addressIfc1',
            // 'directPhoneIfc',
            // 'officePhone',
            // 'websiteUrlIfc',
            // 'emailIfc',
            // 'stNumberIfc',
            'showTextAreaIfcRight',
            'ifcRightTextValue',
            'ibcTitleText',
            'ibcCompanyNameText',
            'ibcAddressText',
            'ibcAddressText1',
            'ibcPhoneNumberText',
            'ibcOfficeNumberText',
            'ibcWebsiteText',
            'ibcEmailText',
            'openHeaderContent',
            'openFooterContent',

            'bcTitleHeaderText',
            'bcAddressHeaderBcText',
            'bcAddressHeaderBc1Text',
            'bcCityHeaderText',
            'bcCountryHeaderText',

            'bcTitleText',
            'bcCompanyNameText',
            'bcAddressText',
            'bcAddressText1',
            'bcPhoneNumberText',
            'bcOfficeNumberText',
            'bcWebsiteText',
            'bcEmailText',
            'previewFc',
            'displayBcLogoMedia',
            'setBcLogoImage_bind',
            'bcLogoChooseCheckBox',
            'bcProfileChooseCheckBox',


            'fcModalHide',
            'defaultBcLogoImagePath',
            'fcTextInputValueEditor',
            'Savefcloader',
            'defaultBcProfileImagePath',
            'displayBcProfileMedia',
            'setBcProfileImage_bind',
            'imageBcProfilePath',



            'fcCheckboxChoose',
            'ifcProfileChoose',
            'ifcBelowimageChoose',
            'ifcSignatureChoose',
            'displayIfcLogoMedia',
            'displayIfcMedia',
            'displayIfcSignatureMedia',
            'ibcLogoCheckChoose',
            'ibcBannerCheckChoose',
            'ibcProfileCheckChoose',

            'displayAddressLable',
            // 'addAddressButton',
            'ifcCompanyName2',
            'designationifc',
            'designationifc1',
            'designationifc2',
            'designationTitle',
            'designationTitleset2',
            'designationTitleset3',
            'designationTitleset4',
            'fcTextLogoAlign',
            'headingTagFc',
            'tempFcAlignValue',
            'ImageFcAlignValue',
            'tempFcCheckboxChoose',
            'imagePathTemp',
            'fcTextLogoEditor'


        ]),
        tempAlignFc: {
            get() {
                return this.fcTextLogoAlign
            },
            set(newValue) {
                this.ACTION_CHANGE_STATE(['tempFcAlignValue', newValue])
            }
        },
        tempImageAlignFc: {
            get() {
                return this.textAlign
            },
            set(newValue) {
                this.ACTION_CHANGE_STATE(['ImageFcAlignValue', newValue])
            }
        },

    },
    data() {
        return {
            libraryImages: [],
            displayMedia: false,
            preimagepath: 'images/logo.png',
            preifcimagepath: 'images/profile_pic.jpg',
            preifclogoimagepath: 'images/footer_logo.png',
            preifcSignatureimagepath: 'images/signature.png',
            preibcProfileimagepath: 'images/profile_pic.jpg',
            preibcMainimagepath: 'images/ibc_img.jpg',
            preibcLogoimagepath: 'images/ibc_logo.png',
            prebcLogoimagepath: 'images/logo.png',
            textLogoFcValue: '',
            valueMedia: '',
            defaultValue: '',
            checkboxChoose: '',
            textInputValue: '',
            ifcCheckboxChoose: '',
            ifcLogoCheckboxChoose: '',
            ifcSignatureCheckboxChoose: '',
            ifcTextCheckboxChoose: '',
            ibcProfileImageCheckboxChoose: '',
            ifcRightTextCheckbox: '',
            ibcMainImageCheckboxChoose: '',
            ibcLogoImageCheckboxChoose: '',

            /*Temporary Variable IFC Address*/
            titleInputIfcTemp: 'Kat Nitsou',
            ifcCompanyNameTemp: 'Sotheby’s International Realty, Inc.',
            designationTemp1: 'ADPAÂ®',
            designationTemp2: 'ADPAÂ®',
            designationTemp3: 'C(k)PÂ®',
            designationTitleTemp1: 'Business Development Director',
            designationTitleTemp2: '401(K) Consulting Director',
            designationTitleTemp3: 'Alternative Investments Director',
            designationTitleTemp4: 'Associate Stock Plan Director',
            ifcCompanyNameTemp2: '',
            designationifcTemp: '',
            designationifcTemp1: '',
            designationifcTemp2: '',
            designationTitleTemp: '',
            designationTitlesetTemp2: '',
            designationTitlesetTemp3: '',
            designationTitlesetTemp4: '',
            addressIfcTemp1: '16027 VENTURA BLVD, Suite 330 ENCINO, CA, 91436',
            stNumberIfcTemp: 'NMLS#',
            emailIfcTemp: 'kat.nitsou@sothebyinternational.com',
            websiteUrlIfcTemp: 'sothebyshomes.com',
            officePhoneTemp: 'O : 626-396-9400',
            directPhoneIfcTemp: 'M : 323-228-3805',
            /*Temporary Variable IFC Address*/

            /*Temporary Variable IFC Image Upload*/
            ifcProfileChooseTemp: 'default',
            ifcBelowimageChooseTemp: '',
            /*Temporary Variable IFC Image Upload*/

            // titleInputBC:'Kat Nitsou',
            previewContent: '',
            prebcProfileimagepath: 'images/profile_pic.jpg',
            // BcProfileImage:'',
            bcProfileImageCheckboxChooseSelect: '',
            bcLogoImageCheckboxChooseSelect: '',
            displayAddress: 'false',


        }
    },
    created() {
        // this.ACTION_CHANGE_STATE(['defaultImagePath', this.preimagepath])
    },
    mounted() {
        $(document).ready(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
        var location = window.location
        //console.log(location.pathname)
        if (location.pathname == '/preview') {
            var tempData = localStorage.getItem('temp')
            this.ACTION_CHANGE_STATE(['previewFc', tempData])
            //   $('.hoverComponetRemove').css('display','none')
            //    $('inner_plus_data').addClass('here')
        } else {
            localStorage.removeItem('temp')
        }
    },
    methods: {

        ...mapActions([
            'ACTION_CHANGE_STATE',
            'ACTION_ADD_VALUE_TO_FC_TEXT',
            'ACTION_ADD_VALUE_TO_IFC_LEFT_TEXT',
            'ACTION_ADD_VALUE_TO_IFC_RIGHT_TEXT',
            'ACTION_LAZY_LOAD',

        ]),
        ...mapMutations([
            'REMOVE_IMAGE_BACKROUND_PATH',
            'REMOVE_DEFAULT_IMAGE_PATH',
            'REMOVE_DEFAULT_IFC_IMAGE_PATH',
            'REMOVE_FC_TEXT_NULL',
            'USE_DEFAULT_MEDIA_IFC_IMAGE_PATH',
            'NUll_OPEN_IFC_MODAL_FOR_LOGO',
            'REMOVE_DEFAULT_IFC_LOGO_IMAGE_PATH',
            'USE_DEFAULT_MEDIA_IFC_LOGO_PATH',
            'REMOVE_MODEL_IFC_LOGO',
            'REMOVE_MODEL_IFC_TEXT',
            'NULL_CHECKBOX_BIND',
            'PUSH_SUCCESS_MESSAGE',
            'PUSH_ERROR_MESSAGE',
            'EMPTY_MESSAGE_LIST'
        ]),
        alertSuccess(message){
            this.$toast.success({
                title:'Success',
                message:message,
                progressBar:true,
                position:'top right',
                timeOut : 3000,
                showMethod:'bounceInLeft',
                hideMethod:'bounceOutLeft'
            })
        },
        alertError(message){
            this.$toast.error({
                title:'Error',
                message:message,
                progressBar:true,
                position:'top right',
                timeOut : 3000,
                showMethod:'bounceInLeft',
                hideMethod:'bounceOutLeft'
            })
        },
        preiviewTab() {
            //$('.hoverComponetRemove').css('display','none')
            //$('.hoverComponetRemove').css('display','none')
            this.previewContent = $(".preview_content").html()
            localStorage.removeItem('temp')
            localStorage.setItem('temp', this.previewContent)
            this.ACTION_CHANGE_STATE(['previewFc', this.previewContent])
        },
        saveFCPreview() {
            this.fcContent = $('.preview_content').html();
            this.ACTION_CHANGE_STATE(['fcPreview', this.fcContent])
        },
        getBcLogoImageInputValue(value) {
            this.bcLogoImageCheckboxChooseSelect = value
            this.ACTION_CHANGE_STATE(['bcLogoChooseCheckBox', this.bcLogoImageCheckboxChooseSelect])
            if (this.bcLogoImageCheckboxChooseSelect == 'addMedia') {
                this.ACTION_CHANGE_STATE(['displayBcLogoMedia', true])
                this.ACTION_CHANGE_STATE(['setBcLogoImage_bind', 'logoBCImage'])
            } else if (this.bcLogoImageCheckboxChooseSelect == 'default') {
                this.ACTION_CHANGE_STATE(['defaultBcLogoImagePath', this.prebcLogoimagepath])
                this.ACTION_CHANGE_STATE(['displayBcLogoMedia', false])
                //this.ACTION_CHANGE_STATE(['imageBcLogoPath', ''])
            } else {
                this.ACTION_CHANGE_STATE(['displayBcLogoMedia', false])
                this.ACTION_CHANGE_STATE(['defaultBcLogoImagePath', ''])
                //this.ACTION_CHANGE_STATE(['imageBcLogoPath', ''])
            }
        },
        saveIFCPreview() {
            this.ifcContent = $('.preview_content').html();
            this.ACTION_CHANGE_STATE(['ifcPreview', this.ifcContent])
        },
        saveIBCPreview() {
            this.ibcContent = $('.preview_content').html();
            this.ACTION_CHANGE_STATE(['ibcPreview', this.ibcContent])
        },
        saveBcChanges() {
            //this.saveIBCPreview()
            //console.log(this.bcLogoImageCheckboxChoose,'test123')
            if (this.bcLogoImageCheckboxChooseSelect == 'remove') {
                this.ACTION_CHANGE_STATE(['defaultBcLogoPath', ''])
                this.ACTION_CHANGE_STATE(['imageBcLogoPath', ''])
            } else if (this.bcLogoImageCheckboxChooseSelect == 'default') {
                this.ACTION_CHANGE_STATE(['imageBcLogoPath', ''])
            }

            if (this.bcProfileImageCheckboxChooseSelect == 'default') {
                this.ACTION_CHANGE_STATE(['imageBcProfilePath', ''])
            }
            this.ACTION_CHANGE_STATE(['setBcLogoImage_bind', ''])

        },

        changeView(viewData) {
            if (viewData == 'desktop') {
                $('.preview_div').css('width', '100%')
                $('.preview_div').addClass('desktop')
                $('.preview_div').removeClass('tablet')
                $('.preview_div').removeClass('mobile')

            } else if (viewData == 'tablet') {
                $('.preview_div').css('width', '768px')
                $('.preview_div').addClass('tablet')
                $('.preview_div').removeClass('desktop')
                $('.preview_div').removeClass('mobile')
            } else {
                $('.preview_div').css('width', '375px')
                $('.preview_div').addClass('mobile')
                $('.preview_div').removeClass('desktop')
                $('.preview_div').removeClass('tablet')
            }
        },
        fetchHtml(value) {
            //alert(value)
            //var text =$('.preview_content').html();
            var fcPreviewHtml = this.$store.state.fcPreview
            var ifcPreviewHtml = this.$store.state.ifcPreview
            var ibcPreviewHtml = this.$store.state.ibcPreview
            var allHtml = fcPreviewHtml + ifcPreviewHtml + ibcPreviewHtml
            //   console.log(allHtml, ';sas')
            this.style_html(allHtml)

        },

        /*For html Format into multiple line */
        getIndent(level) {
            var result = '',
                i = level * 4;
            if (level < 0) {
                throw "Level is below 0";
            }
            while (i--) {
                result += ' ';
            }
            return result;
        },
        style_html(html) {
            // console.log(html, 'sahsh')

            html = html.trim();
            var result = '',
                indentLevel = 0,
                tokens = html.split(/</);
            for (var i = 0, l = tokens.length; i < l; i++) {
                var parts = tokens[i].split(/>/);
                if (parts.length === 2) {
                    if (tokens[i][0] === '/') {
                        indentLevel--;
                    }
                    result += this.getIndent(indentLevel);
                    if (tokens[i][0] !== '/') {
                        indentLevel++;
                    }

                    if (i > 0) {
                        result += '<';
                    }

                    result += parts[0].trim() + ">\n";
                    if (parts[1].trim() !== '') {
                        result += this.getIndent(indentLevel) + parts[1].trim().replace(/\s+/g, ' ') + "\n";
                    }

                    if (parts[0].match(/^(img|hr|br)/)) {
                        indentLevel--;
                    }
                } else {
                    result += this.getIndent(indentLevel) + parts[0] + "\n";
                }
            }
            console.log(result)
            return result;
        },
        /*POST BC*/
        savebcDataToDb() {
            this.ACTION_CHANGE_STATE(['Savefcloader', true])
            var data = {
                columnName: 'back_cover',
                bcHeaderContent: [{
                    bcTitleHeaderText: this.bcTitleHeaderText,
                    bcAddressHeaderBcText: this.bcAddressHeaderBcText,
                    bcAddressHeaderBc1Text: this.bcAddressHeaderBc1Text,
                    bcCityHeaderText: this.bcCityHeaderText,
                    bcCountryHeaderText: this.bcCountryHeaderText,

                }],
                bcHeaderImage: [{
                    defaultBcLogoImagePath: this.defaultBcLogoImagePath,
                    imageBcLogoPath: this.imageBcLogoPath,
                    bcLogoChooseCheckBox: this.bcLogoChooseCheckBox

                }],
                bcFooterContent: [{
                    bcTitleText: this.bcTitleText,
                    bcCompanyNameText: this.bcCompanyNameText,
                    bcAddressText: this.bcAddressText,
                    bcAddressText1: this.bcAddressText1,
                    bcOfficeNumberText: this.bcOfficeNumberText,
                    bcPhoneNumberText: this.bcPhoneNumberText,
                    bcWebsiteText: this.bcWebsiteText,
                    bcEmailText: this.bcEmailText,

                }],
                bcFooterImage: [{
                    defaultBcProfileImagePath: this.defaultBcProfileImagePath,
                    imageBcProfilePath: this.imageBcProfilePath,
                    bcProfileChooseCheckBox: this.bcProfileChooseCheckBox,
                }],

            }
            //console.log(data, 'bc')
            axios.post("api/userBooks", data)
                .then(response => {
                    console.log(response, "success");
                    var self = this
                    setTimeout(function () {
                        self.ACTION_CHANGE_STATE(['Savefcloader', false])
                    }, 2000)
                })
                .catch(errorResponse => {
                    console.log(errorResponse, "errorResponse");
                });
        },
        /*------- End  -----*/
        /*GET Request  BC */
        getBCUserBook() {

            axios.get("api/userBooks/1").then(response => {
                //console.log(response,'Rushi')
                var responseDbHeaderContent = response.data.data.back_cover.bcHeaderContent
                responseDbHeaderContent.map((d) => {
                    this.ACTION_CHANGE_STATE(['bcTitleHeaderText', d.bcTitleHeaderText])
                    this.ACTION_CHANGE_STATE(['bcAddressHeaderBcText', d.bcAddressHeaderBcText])
                    this.ACTION_CHANGE_STATE(['bcAddressHeaderBc1Text', d.bcAddressHeaderBc1Text])
                    this.ACTION_CHANGE_STATE(['bcCityHeaderText', d.bcCityHeaderText])
                    this.ACTION_CHANGE_STATE(['bcCountryHeaderText', d.bcCountryHeaderText])
                })
                var responseDbFooterContent = response.data.data.back_cover.bcFooterContent
                responseDbFooterContent.map((d) => {
                    this.ACTION_CHANGE_STATE(['bcTitleText', d.bcTitleText])
                    this.ACTION_CHANGE_STATE(['bcCompanyNameText', d.bcCompanyNameText])
                    this.ACTION_CHANGE_STATE(['bcAddressText', d.bcAddressText])
                    this.ACTION_CHANGE_STATE(['bcAddressText1', d.bcAddressText1])
                    this.ACTION_CHANGE_STATE(['bcOfficeNumberText', d.bcOfficeNumberText])
                    this.ACTION_CHANGE_STATE(['bcPhoneNumberText', d.bcPhoneNumberText])
                    this.ACTION_CHANGE_STATE(['bcWebsiteText', d.bcWebsiteText])
                    this.ACTION_CHANGE_STATE(['bcEmailText', d.bcEmailText])
                })
                var responseDbHeaderImageCheck = response.data.data.back_cover.bcHeaderImage[0].bcLogoChooseCheckBox
                this.ACTION_CHANGE_STATE(['bcLogoChooseCheckBox', responseDbHeaderImageCheck])
                if (responseDbHeaderImageCheck == "addMedia") {
                    //this.ACTION_CHANGE_STATE(['bcLogoImageCheckboxChoose', 'addMedia'])                    
                    this.ACTION_CHANGE_STATE(['displayBcLogoMedia', true])
                    this.ACTION_CHANGE_STATE(['imageBcLogoPath', response.data.data.back_cover.bcHeaderImage[0].imageBcLogoPath])
                }

                var responseDbFooterImageCheck = response.data.data.back_cover.bcFooterImage[0].bcProfileChooseCheckBox
                this.ACTION_CHANGE_STATE(['bcProfileChooseCheckBox', responseDbFooterImageCheck])
                if (responseDbFooterImageCheck == "addMedia") {
                    //this.ACTION_CHANGE_STATE(['bcProfileImageCheckboxChoose', 'addMedia'])
                    this.ACTION_CHANGE_STATE(['displayBcProfileMedia', true])
                    this.ACTION_CHANGE_STATE(['imageBcProfilePath', response.data.data.back_cover.bcFooterImage[0].imageBcProfilePath])
                }
            })
                .catch(errorResponse => {
                    console.log(errorResponse, "errorResponse");
                });
        },
        /*--END-- */

        onMove(moveEvent) {
            this.$emit('move', moveEvent)
        },
        onResize(resizeEvent) {
            this.$emit('resize', resizeEvent)
        },
        aspectRatios() {
            return {
                minimum: this.aspectRatio || this.minAspectRatio,
                maximum: this.aspectRatio || this.maxAspectRatio,
            }
        },
        showAddAddress() {
            this.ACTION_CHANGE_STATE(['displayAddressLable', true])
            // this.ACTION_CHANGE_STATE(['addAddressButton', false])
        },
        getCompanyName2Ifc(value) {
            this.ACTION_CHANGE_STATE(['ifcCompanyName2', value])
        },
        getdesignation1(value) {
            this.ACTION_CHANGE_STATE(['designationifc', value])
        },
        getdesignation2(value) {
            this.ACTION_CHANGE_STATE(['designationifc1', value])
        },
        getdesignation3(value) {
            this.ACTION_CHANGE_STATE(['designationifc2', value])
        },
        getdesignationTitle1(value) {
            this.ACTION_CHANGE_STATE(['designationTitle', value])
        },
        getdesignationTitle2(value) {
            this.ACTION_CHANGE_STATE(['designationTitleset2', value])
        },
        getdesignationTitle3(value) {
            this.ACTION_CHANGE_STATE(['designationTitleset3', value])
        },
        getdesignationTitle4(value) {
            this.ACTION_CHANGE_STATE(['designationTitleset4', value])
        },
        removeAddAddress() {
            // this.ACTION_CHANGE_STATE(['addAddressButton', true])
            this.ACTION_CHANGE_STATE(['displayAddressLable', false])
            this.ACTION_CHANGE_STATE(['ifcCompanyName2', ''])
            this.ACTION_CHANGE_STATE(['designationifc', ''])
            this.ACTION_CHANGE_STATE(['designationifc1', ''])
            this.ACTION_CHANGE_STATE(['designationifc2', ''])
            this.ACTION_CHANGE_STATE(['designationTitle', ''])
            this.ACTION_CHANGE_STATE(['designationTitleset2', ''])
            this.ACTION_CHANGE_STATE(['designationTitleset3', ''])
            this.ACTION_CHANGE_STATE(['designationTitleset4', ''])
        },

    }

}