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
            'openIbcModal',
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
            'ifcTitleText',
            'ifcCompanyName',
            'designation1',
            'designation2',
            'designation3',
            'designationTitle1',
            'designationTitle2',
            'designationTitle3',
            'designationTitle4',
            'addressIfc1',
            'directPhoneIfc',
            'officePhone',
            'websiteUrlIfc',
            'emailIfc',
            'stNumberIfc',
            'showTextAreaIfcRight',
            'ifcRightTextValue',
            'showCover',
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

            'profileImage',
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
            'addAddressButton',
            'ifcCompanyName2',
            'designationifc',
            'designationifc1',
            'designationifc2',
            'designationTitle',
            'designationTitleset2',
            'designationTitleset3',
            'designationTitleset4',
            'fcTextLogoAlign',
            'headingTagFc'

        ])
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
            // titleInputIfc:'Kat Nitsou',
            // titleInputBC:'Kat Nitsou',
            previewContent: '',
            prebcProfileimagepath: 'images/profile_pic.jpg',
            // BcProfileImage:'',
            bcProfileImageCheckboxChooseSelect: '',
            bcLogoImageCheckboxChooseSelect: '',
            displayAddress:'false'

        }
    },
    created() {
        // this.ACTION_CHANGE_STATE(['defaultImagePath', this.preimagepath])
    },
    mounted() {
        this.getRightSide(1),
            $(document).ready(function() {
                $('[data-toggle="tooltip"]').tooltip();
            });
        
        this.ACTION_CHANGE_STATE(['defaultIbcProfilePath', this.preibcProfileimagepath])
        this.ACTION_CHANGE_STATE(['defaultIbcMainImagePath', this.preibcMainimagepath])
        this.ACTION_CHANGE_STATE(['defaultIbcLogoImagePath', this.preibcLogoimagepath])
        this.ACTION_CHANGE_STATE(['defaultBcLogoImagePath', this.prebcLogoimagepath])
        this.ACTION_CHANGE_STATE(['defaultBcProfileImagePath', this.prebcProfileimagepath])
        this.ACTION_CHANGE_STATE(['defaultImagePath', this.preimagepath])
        var location = window.location
        //console.log(location.pathname)
        if (location.pathname == '/ifc') {
            // console.log(1)
            this.getRightSide(2),
                this.ACTION_CHANGE_STATE(["openModal", "inside-front-cover"])
        } else if (location.pathname == '/insideBackCover') {
            this.getRightSide(3)
        } else if (location.pathname == '/backCover') {
            this.getRightSide(4)
        } else {
            //console.log(2)
            this.ACTION_CHANGE_STATE(["openModal", "front-cover"])
        }
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


        getRightSide(value) {
            //console.log(value, 'sasasas')
            // $('.inner_left_side').addClass("active");
            this.ACTION_CHANGE_STATE(['showTextAreaIfcRight', false])
            if (value == 1) {
                // this.ACTION_CHANGE_STATE(['showFrontCover', true])
                // this.ACTION_CHANGE_STATE(['showFrontInsideCover', false])
                this.ACTION_CHANGE_STATE(['showCover', 1])
            } else if (value == 2) {
                // this.ACTION_CHANGE_STATE(['showFrontCover', false])
                // this.ACTION_CHANGE_STATE(['showFrontInsideCover', true])
                this.ACTION_CHANGE_STATE(['showCover', 2])
            } else if (value == 3) {
                this.ACTION_CHANGE_STATE(['showCover', 3])
            } else if (value == 4) {
                this.ACTION_CHANGE_STATE(['showCover', 4])
            }
        },
        displayModal() {
            if (this.openModal == 'front-cover') {
                //console.log('sas')
                this.ACTION_CHANGE_STATE(['fcModalHide', 'true'])
                $('#exampleModal').modal('show');
            }
            //console.log(this.openModal)
            if (this.openModal == 'inside-front-cover') {
                $('#ifcModal').modal('show');
            }
        },
        preiviewTab() {
            //$('.hoverComponetRemove').css('display','none')
            //$('.hoverComponetRemove').css('display','none')
            this.previewContent = $(".preview_content").html()
            localStorage.removeItem('temp')
            localStorage.setItem('temp', this.previewContent)
            this.ACTION_CHANGE_STATE(['previewFc', this.previewContent])
        },
        displayIfcModal() {
            $('#ifcModal').modal('show');
        },
        deleteLogo() {
            this.REMOVE_IMAGE_BACKROUND_PATH();
        },
        // getActive (event) {
        //     console.log(event , 'dgshd');
        // },
        setToImageShow(image) {
            //console.log(image, 'Rushi')
            if (this.setIfcLogo_bind == "addLogo") {
                this.ACTION_CHANGE_STATE(['imageIfcLogoPath', image]);
            } else if (this.setIfc_bind == "addMedia") {
                this.ACTION_CHANGE_STATE(['imageIfcPath', image]);
            } else if (this.setIfcSignature_bind == 'addSignature') {
                this.ACTION_CHANGE_STATE(['imageIfcSignaturePath', image]);
            } else if (this.setIbcProfile_bind == 'profileImage') {
                this.ACTION_CHANGE_STATE(['imageIbcProfilePath', image])
            } else if (this.setIbcMainImage_bind == 'mainImage') {
                this.ACTION_CHANGE_STATE(['imageIbcMainPath', image])
            } else if (this.setIbcLogoImage_bind == 'logoImage') {
                this.ACTION_CHANGE_STATE(['imageIbcLogoPath', image])
            } else if (this.setBcLogoImage_bind == 'logoBCImage') {
                this.ACTION_CHANGE_STATE(['imageBcLogoPath', image])
            } else if (this.setBcProfileImage_bind == 'profileBCImage') {
                this.ACTION_CHANGE_STATE(['imageBcProfilePath', image])
            } else {
                this.ACTION_CHANGE_STATE(['imagePath', image]);
            }
        },
        getInputValue(value) {
            //    var test1= e.target.dataset.id
            //alert(value)
            this.checkboxChoose = value
            this.ACTION_CHANGE_STATE(['fcCheckboxChoose', this.checkboxChoose])
            if (this.checkboxChoose == "addMedia") {
                this.ACTION_CHANGE_STATE(['fcCheckboxChoose', 'addMedia'])
                // console.log($('.content_area').childNode)
                $(' div').prop('contenteditable', false)

                this.displayMedia = true;
                this.ACTION_CHANGE_STATE(['fcAddMediaShow', true])
                this.valueMedia = this.checkboxChoose
                this.REMOVE_FC_TEXT_NULL();
                $('.editable').html('');
                this.ACTION_CHANGE_STATE(['displayTextArea', false])
            } else if (this.checkboxChoose == "default") {
                this.defaultValue = this.checkboxChoose
                this.REMOVE_FC_TEXT_NULL();
                this.displayMedia = false
                this.ACTION_CHANGE_STATE(['fcAddMediaShow', false])
                this.ACTION_CHANGE_STATE(['defaultImagePath', this.preimagepath])
                // this.deleteLogo();
                this.REMOVE_FC_TEXT_NULL();
                $('.editable').html('');
                this.ACTION_CHANGE_STATE(['displayTextArea', false])
            } else if (this.checkboxChoose == "textLogo") {
                this.textLogoFcValue = this.checkboxChoose
                this.displayMedia = false
                this.ACTION_CHANGE_STATE(['fcAddMediaShow', false])
                this.ACTION_CHANGE_STATE(['displayTextArea', true])
                // this.ACTION_CHANGE_STATE(['imagePath', '']);
            } else {
                this.displayMedia = false;
                this.ACTION_CHANGE_STATE(['fcAddMediaShow', false])
                this.REMOVE_FC_TEXT_NULL();
                this.ACTION_CHANGE_STATE(['defaultImagePath', ''])
                this.ACTION_CHANGE_STATE(['displayTextArea', false])
            }

        },
        saveFCPreview() {
            this.fcContent = $('.preview_content').html();
            this.ACTION_CHANGE_STATE(['fcPreview', this.fcContent])
        },
        saveChanges() {

            this.saveFCPreview();
            var text = $('.editable').html();
            if (this.checkboxChoose == 'textLogo' || this.fcCheckboxChoose == 'textLogo') {
                //alert('gone')
                this.ACTION_CHANGE_STATE(['fcLogoTextDisplay', true])
                this.ACTION_ADD_VALUE_TO_FC_TEXT(text)
                this.ACTION_CHANGE_STATE(['fcTextInputValueEditor', text])
                this.ACTION_CHANGE_STATE(['fcLogoText', text])
                this.ACTION_CHANGE_STATE(['hideFcText', false])
                this.deleteLogo();
            } else {
                this.ACTION_CHANGE_STATE(['fcLogoText', ''])
                this.ACTION_CHANGE_STATE(['hideFcText', true])
                this.ACTION_CHANGE_STATE(['fcLogoTextDisplay', false])

            }

            if (this.checkboxChoose == 'remove') {
                this.REMOVE_DEFAULT_IMAGE_PATH()
            }else if(this.checkboxChoose =='default'){
                this.deleteLogo();
            }
        },
        cancelModel() {
            // this.selectValue = ''
            this.displayMedia = false;
            this.NUll_OPEN_IFC_MODAL_FOR_LOGO()
            this.REMOVE_MODEL_IFC_TEXT()
            this.ACTION_CHANGE_STATE(['openIfcModalForSignature', ''])
            this.ACTION_CHANGE_STATE(['setIbcProfile_bind', ''])
            this.ACTION_CHANGE_STATE(['setIbcMainImage_bind', ''])
            this.ACTION_CHANGE_STATE(['setIbcLogoImage_bind', ''])
            this.ACTION_CHANGE_STATE(['setBcLogoImage_bind', ''])
            this.ACTION_CHANGE_STATE(['setBcProfileImage_bind', ''])
            this.ACTION_CHANGE_STATE(["setIfc_bind", ""])
            this.ACTION_CHANGE_STATE(["setIfcLogo_bind", ""])
            this.ACTION_CHANGE_STATE(["setIfcSignature_bind", ""])
        },
        addfont(command, showUI, value) {
            document.execCommand(command, showUI, value);
            // console.log(command)
            this.ACTION_CHANGE_STATE(['fcTextLogoAlign',command])
        },
        changeFontColor(color_picker) {
            this.addfont("foreColor", false, color_picker);
        },
        insertTag(headingTag) {
            var ClassName = document.getElementsByClassName("editable");
            document.execCommand('formatblock', false, headingTag)
            this.ACTION_CHANGE_STATE(["headingTagFc", headingTag])
        },
        imgAlignStyle(style) {
            this.ACTION_CHANGE_STATE(["textAlign", style])
        },
        getvalue() {
            var text = $('.editable').html()
            this.textInputValue = text
        },
        sendValue(value) {
            if (value == 1) {
                this.ACTION_CHANGE_STATE(["openModal", "front-cover"])
            }
            if (value == 2) {
                this.ACTION_CHANGE_STATE(["openModal", "inside-front-cover"])
            }
        },
        getIfcInputValue(value) {
            this.ifcCheckboxChoose = value
            //alert('profile')
            this.ACTION_CHANGE_STATE(['ifcProfileChoose', this.ifcCheckboxChoose])
            if (this.ifcCheckboxChoose == "default") {
                this.ACTION_CHANGE_STATE(['displayIfcMedia', false])
                this.ACTION_CHANGE_STATE(['defaultIfcImagePath', this.preifcimagepath])
            }
            var valueOfCheckbox = this.selectIfcValue
            if (this.ifcCheckboxChoose == "addMedia") {
                //console.log(valueOfCheckbox, 'scasa')
                this.ACTION_CHANGE_STATE(['displayIfcMedia', true])
                this.ACTION_CHANGE_STATE(["setIfc_bind", "addMedia"])
            } else {
                this.ACTION_CHANGE_STATE(['displayIfcMedia', false])

            }
        },
        getIfcLogoInputValue(value) {
            this.ifcLogoCheckboxChoose = value
            //alert('sasasasass')
            console.log(this.ifcLogoCheckboxChoose)
            this.ACTION_CHANGE_STATE(['ifcBelowimageChoose', this.ifcLogoCheckboxChoose])
            if (this.ifcLogoCheckboxChoose == "default") {

                this.ACTION_CHANGE_STATE(['displayIfcLogoMedia', false])
                this.ACTION_CHANGE_STATE(['defaultIfcLogoPath', this.preifclogoimagepath])
                //this.ACTION_CHANGE_STATE(['imageIfcLogoPath', '']);
            } else if (this.ifcLogoCheckboxChoose == "addMedia") {
                this.ACTION_CHANGE_STATE(['displayIfcLogoMedia', true])
                this.ACTION_CHANGE_STATE(["setIfcLogo_bind", "addLogo"])
            } else {
                this.ACTION_CHANGE_STATE(['displayIfcLogoMedia', false])
            }
        },
        getIfcSignatureInputValue(value) {
            // alert(value)
            this.ifcSignatureCheckboxChoose = value
            //alert(this.ifcSignatureCheckboxChoose)
            this.ACTION_CHANGE_STATE(['ifcSignatureChoose', this.ifcSignatureCheckboxChoose])
            if (this.ifcSignatureCheckboxChoose == 'default') {
                this.ACTION_CHANGE_STATE(['displayIfcSignatureMedia', false])
                this.ACTION_CHANGE_STATE(['defaultIfcSignaturePath', this.preifcSignatureimagepath])
                // this.ACTION_CHANGE_STATE(['imageIfcSignaturePath', '']);
            }else if (this.ifcSignatureCheckboxChoose == 'addMedia') {
                this.ACTION_CHANGE_STATE(['displayIfcSignatureMedia', true])
                this.ACTION_CHANGE_STATE(["setIfcSignature_bind", "addSignature"])
            }else {
                // this.ACTION_CHANGE_STATE(['defaultIfcSignaturePath', ''])
                // this.ACTION_CHANGE_STATE(['imageIfcSignaturePath', '']);
                this.ACTION_CHANGE_STATE(['displayIfcSignatureMedia', false])
            }
        },
        getIfcTextInputValue(value) {
            this.ifcTextCheckboxChoose = value
            if (this.ifcTextCheckboxChoose == 'remove') {
                this.ACTION_CHANGE_STATE(['displayIfcTextArea', true])
            } else {
                this.ACTION_CHANGE_STATE(['displayIfcTextArea', false])
            }

        },
        getIbcInputValue(value) {
            this.ibcProfileImageCheckboxChoose = value

            this.ACTION_CHANGE_STATE(['ibcProfileCheckChoose', this.ibcProfileImageCheckboxChoose])

            if (this.ibcProfileImageCheckboxChoose == 'addMedia') {
                this.ACTION_CHANGE_STATE(['displayIbcProfileMedia', true])
                this.ACTION_CHANGE_STATE(['setIbcProfile_bind', 'profileImage'])
            } else if (this.ibcProfileImageCheckboxChoose == 'default') {
                this.ACTION_CHANGE_STATE(['defaultIbcProfilePath', this.preibcProfileimagepath])
                this.ACTION_CHANGE_STATE(['displayIbcProfileMedia', false])
            } else {
                this.ACTION_CHANGE_STATE(['displayIbcProfileMedia', false])
                this.ACTION_CHANGE_STATE(['defaultIbcProfilePath', ''])
            }
            //   this.ifcRightTextCheckbox = value
            //   if(this.ifcRightTextCheckbox == 'remove'){
            //     this.ACTION_CHANGE_STATE(['displayTextAreaFor', true])
            //   }else{
            //     this.ACTION_CHANGE_STATE(['displayTextAreaFor', false])
            //   }
        },
        getIbcMainImageInputValue(value) {
            this.ibcMainImageCheckboxChoose = value
            this.ACTION_CHANGE_STATE(['ibcBannerCheckChoose', this.ibcMainImageCheckboxChoose])
            if (this.ibcMainImageCheckboxChoose == 'addMedia') {
                this.ACTION_CHANGE_STATE(['displayIbcMainMedia', true])
                this.ACTION_CHANGE_STATE(['setIbcMainImage_bind', 'mainImage'])
            } else if (this.ibcMainImageCheckboxChoose == 'default') {
                this.ACTION_CHANGE_STATE(['defaultIbcMainImagePath', this.preibcMainimagepath])
                this.ACTION_CHANGE_STATE(['displayIbcMainMedia', false])
            } else {
                this.ACTION_CHANGE_STATE(['displayIbcMainMedia', false])
                this.ACTION_CHANGE_STATE(['defaultIbcMainImagePath', ''])
                this.ACTION_CHANGE_STATE(['imageIbcMainPath', ''])
            }
        },
        getIbcLogoImageInputValue(value) {

            this.ibcLogoImageCheckboxChoose = value
            this.ACTION_CHANGE_STATE(['ibcLogoCheckChoose', this.ibcLogoImageCheckboxChoose])
            if (this.ibcLogoImageCheckboxChoose == 'addMedia') {
                this.ACTION_CHANGE_STATE(['displayIbcLogoMedia', true])
                this.ACTION_CHANGE_STATE(['setIbcLogoImage_bind', 'logoImage'])
            } else if (this.ibcLogoImageCheckboxChoose == 'default') {
                this.ACTION_CHANGE_STATE(['defaultIbcLogoImagePath', this.preibcLogoimagepath])
                this.ACTION_CHANGE_STATE(['displayIbcLogoMedia', false])
            } else {
                this.ACTION_CHANGE_STATE(['displayIbcLogoMedia', false])
                this.ACTION_CHANGE_STATE(['defaultIbcLogoImagePath', ''])
                
            }
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
        saveIfcChanges() {
            this.saveIFCPreview();
            this.NUll_OPEN_IFC_MODAL_FOR_LOGO()
            this.REMOVE_MODEL_IFC_TEXT()
            if (this.ifcTextCheckboxChoose == 'remove') {

                var text = $('.editable').html();
                this.ACTION_CHANGE_STATE(['ifcTextDisplay', true])
                this.ACTION_ADD_VALUE_TO_IFC_LEFT_TEXT(text)
                this.ACTION_CHANGE_STATE(['ifcText', text])

            }
            if (this.ifcTextCheckboxChoose == 'default') {
                this.ACTION_CHANGE_STATE(['ifcTextDisplay', false])
                this.ACTION_CHANGE_STATE(['imageIfcLogoPath', '']);
            }
            if (this.ifcCheckboxChoose == 'remove') {
                this.REMOVE_DEFAULT_IFC_IMAGE_PATH()
            }
            if (this.ifcCheckboxChoose == "default") {
                this.USE_DEFAULT_MEDIA_IFC_IMAGE_PATH()
            }
            if (this.ifcLogoCheckboxChoose == 'remove') {
                this.REMOVE_DEFAULT_IFC_LOGO_IMAGE_PATH()
            }
            if (this.ifcLogoCheckboxChoose == 'default') {
                this.USE_DEFAULT_MEDIA_IFC_LOGO_PATH()
            }
            if (this.ifcRightTextCheckbox == 'remove') {
                var text = $('.editable').html();
                this.ACTION_CHANGE_STATE(['ifcRightTextDisplay', true])
                //  this.ACTION_ADD_VALUE_TO_IFC_LEFT_TEXT(text)
                this.ACTION_CHANGE_STATE(['ifcRightText', text])
            }
            if (this.ifcRightTextCheckbox == "default") {
                this.ACTION_CHANGE_STATE(['ifcRightTextDisplay', false])
            }

            if (this.ifcSignatureCheckboxChoose == 'remove') {
                //alert('sss')
                this.ACTION_CHANGE_STATE(['defaultIfcSignaturePath', ''])
                this.ACTION_CHANGE_STATE(['imageIfcSignaturePath', ''])
            } 
            
            if(this.ifcSignatureCheckboxChoose == 'default'){
                this.ACTION_CHANGE_STATE(['imageIfcSignaturePath', '']);
            }
            this.ifcTextCheckboxChoose = ''
            // this.NULL_CHECKBOX_BIND()
            this.ACTION_CHANGE_STATE(["setIfc_bind", ""])
            this.ACTION_CHANGE_STATE(["setIfcLogo_bind", ""])
            this.ACTION_CHANGE_STATE(["setIfcSignature_bind", ""])
            // this.displayIfcSignatureMedia = false
            this.ACTION_CHANGE_STATE(['openIfcModalForSignature', ''])
            this.ACTION_CHANGE_STATE(['openIfcModalForLogo', ''])
        },
        saveIBCPreview() {
            this.ibcContent = $('.preview_content').html();
            this.ACTION_CHANGE_STATE(['ibcPreview', this.ibcContent])
        },
        saveIbcChanges() {
            this.saveIBCPreview()
            //console.log(this.ibcProfileImageCheckboxChoose,'test123')
            if (this.ibcProfileImageCheckboxChoose == 'remove') {
                this.ACTION_CHANGE_STATE(['defaultIbcProfilePath', ''])
                this.ACTION_CHANGE_STATE(['imageIbcProfilePath', ''])
            } else if (this.ibcProfileImageCheckboxChoose == 'default') {
                this.ACTION_CHANGE_STATE(['imageIbcProfilePath', ''])
            } else if (this.ibcMainImageCheckboxChoose == 'remove') {
                this.ACTION_CHANGE_STATE(['imageIbcMainPath', ''])
            } else if (this.ibcMainImageCheckboxChoose == 'default') {
                this.ACTION_CHANGE_STATE(['imageIbcMainPath', ''])
            } else if (this.ibcLogoImageCheckboxChoose == 'remove') {
                this.ACTION_CHANGE_STATE(['imageIbcLogoPath', ''])
            } else if (this.ibcLogoImageCheckboxChoose == 'default') {
                this.ACTION_CHANGE_STATE(['imageIbcLogoPath', ''])
            }
            this.ACTION_CHANGE_STATE(['setIbcProfile_bind', ''])
            this.ACTION_CHANGE_STATE(['setIbcMainImage_bind', ''])
            this.ACTION_CHANGE_STATE(['setIbcLogoImage_bind', ''])

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

            if(this.bcProfileImageCheckboxChooseSelect == 'default'){
                this.ACTION_CHANGE_STATE(['imageBcProfilePath', ''])
            }
            this.ACTION_CHANGE_STATE(['setBcLogoImage_bind', ''])

        },
        displayifclogo(e) {
            // alert('tests')
            var vget = e.path[3]
            var classModal = $(vget).attr('class')
            //console.log(classModal,'Rushi')       
            var classPresentIbcLogo = $(vget).hasClass("ibc_logo")
            var classPresentIbcImage = $(vget).hasClass("inside_bc_img")
            var classPresentIbcProfileImage = $(vget).hasClass("ibc_profile")
            //console.log(classPresentIbcImage)
            var classPresentIbcProfile_text = $(vget).hasClass("profile_text")
            var classPresentbcProfile = $(vget).hasClass("ibc_logo")
            var classPresentbcText = $(vget).hasClass("bc_address")
            var classPresentbcHeader = $(vget).hasClass("bc_header")
            var classPresentbcProfile = $(vget).hasClass("profile_imge_bc")
            var classPresentBcFooter = $(vget).hasClass("footer_text")
            if (classModal == 'below_logo') {
                this.ACTION_CHANGE_STATE(['openIfcModalForLogo', 'ifc-logo'])
                this.REMOVE_MODEL_IFC_TEXT()
                this.ACTION_CHANGE_STATE(['openIfcModalForSignature', ''])
            }
            if (classModal == 'profile_text') {
                this.ACTION_CHANGE_STATE(['openIfcModalForText', 'ifc-text'])
                //this.REMOVE_MODEL_IFC_LOGO()
                this.ACTION_CHANGE_STATE(['openIfcModalForLogo', ''])
            }
            // if(classModal ==  'col-sm-8 bc_address bc_image'){
            //     alert('1213')
            //     this.ACTION_CHANGE_STATE(['openIfcModalForText', 'ifc-text'])
            //     this.ACTION_CHANGE_STATE(['openFooterContent', 'footer-text'])
            //     this.ACTION_CHANGE_STATE(['openHeaderContent', ''])
            //     this.ACTION_CHANGE_STATE(['openIfcModalForLogo',''])
            //     //this.REMOVE_MODEL_IFC_LOGO()
            // }
            if (classModal == 'right_ifc_content') {
                $('#ifcTextModal').modal('show')
            }
            if (classModal == 'col-md-12 ibc_logo p-0') {
                $('#ifcTextModal1').modal('show');
            }
            // if(classModal == 'bc_header'){

            // }
            // if(classModal == 'profile_imge_bc'){
            //     alert('sasfagsf')
            //     this.ACTION_CHANGE_STATE(['profileImage', 'bottom_image'])
            //     this.ACTION_CHANGE_STATE(['openIbcModal', ''])
            //     $('#ifcTextModal1').modal('show');
            // }
            if (classModal == 'ifc_signature_image') {

                this.ACTION_CHANGE_STATE(['openIfcModalForSignature', 'ifc-signature'])
                $('#ifcModal').modal('show');
                /*REUSE THIS MODAL */
                // $('#ifcTextModal').modal('show')
                /*REUSE THIS MODAL */
            } else {
                $('#ifcModal').modal('show');
            }

            /** For IBC images    **/
            if (classPresentIbcProfileImage == true) {
                this.ACTION_CHANGE_STATE(['openIbcModal', 'profile'])
                $('#ifcTextModal').modal('show')
            } else if (classPresentIbcLogo == true) {
                this.ACTION_CHANGE_STATE(['openIbcModal', 'logoImage'])
                this.ACTION_CHANGE_STATE(['profileImage', ''])
                $('#ifcTextModal').modal('show');
            } else if (classPresentIbcImage == true) {
                this.ACTION_CHANGE_STATE(['openIbcModal', 'mainImage'])
                $('#ifcTextModal').modal('show')
            } else if (classPresentIbcProfile_text == true) {
                $('#ibcAddressModal').modal('show')
            } else if (classPresentbcText == true) {
                this.ACTION_CHANGE_STATE(['openIfcModalForText', 'ifc-text'])
                this.ACTION_CHANGE_STATE(['openFooterContent', 'footer-text'])
                this.ACTION_CHANGE_STATE(['openHeaderContent', ''])
                this.ACTION_CHANGE_STATE(['openIfcModalForLogo', ''])
                $('#bcAddressModal').modal('show')
            } else if (classPresentbcProfile == true) {
                this.ACTION_CHANGE_STATE(['profileImage', 'bottom_image'])
                this.ACTION_CHANGE_STATE(['openIbcModal', ''])
                $('#ifcTextModal1').modal('show')
            } else if (classPresentbcHeader == true) {
                this.ACTION_CHANGE_STATE(['openHeaderContent', 'header-text'])
                this.ACTION_CHANGE_STATE(['openFooterContent', ''])
                $('#bcAddressModal').modal('show');
            } else if (classPresentBcFooter == true) {
                $('#bcAddressModal').modal('show')
            }



        },

        check_Value(value) {
            //console.log(value, 'value')
            if (value == 1) {
                if (this.ifcCheckboxChoose == 'addMedia' || this.ifcProfileChoose == 'addMedia') {
                    this.ACTION_CHANGE_STATE(["setIfc_bind", "addMedia"])
                }
            } else if (value == 2) {
                if (this.ifcLogoCheckboxChoose == 'addMedia' || this.ifcBelowimageChoose == 'addMedia') {
                    this.ACTION_CHANGE_STATE(["setIfcLogo_bind", "addLogo"])
                }
            } else if (value == 3) {
                if (this.ifcSignatureCheckboxChoose == 'addMedia' || this.ifcSignatureChoose == 'addMedia') {
                    this.ACTION_CHANGE_STATE(['setIfcSignature_bind', 'addSignature'])
                }
            } else if (value == 'ibcProfile') {
                if (this.ibcProfileImageCheckboxChoose == 'addMedia' || this.ibcProfileCheckChoose == 'addMedia') {
                    this.ACTION_CHANGE_STATE(['setIbcProfile_bind', 'profileImage'])
                }
            } else if (value == 'ibcMainImage') {
                if (this.ibcMainImageCheckboxChoose == 'addMedia' || this.ibcBannerCheckChoose == 'addMedia') {
                    this.ACTION_CHANGE_STATE(['setIbcMainImage_bind', 'mainImage'])
                }
            } else if (value == 'ibcLogoImage') {
                if (this.ibcLogoImageCheckboxChoose == 'addMedia' || this.ibcLogoCheckChoose == 'addMedia') {
                    this.ACTION_CHANGE_STATE(['setIbcLogoImage_bind', 'logoImage'])
                }
            } else if (value == 'BcLogoImage') {
                if (this.bcLogoImageCheckboxChoose == 'addMedia' || this.bcLogoChooseCheckBox == 'addMedia') {
                    this.ACTION_CHANGE_STATE(['setBcLogoImage_bind', 'logoBCImage'])
                }
            } else if (value == 'BcProfileImage') {
                if (this.bcProfileImageCheckboxChooseSelect == 'addMedia' || this.bcProfileChooseCheckBox == 'addMedia') {
                    this.ACTION_CHANGE_STATE(['setBcProfileImage_bind', 'profileBCImage'])
                }
            }
        },
        getTitleIfc(value) {
            this.ACTION_CHANGE_STATE(['ifcTitleText', value])
            
        },
        getCompanyNameIfc(value) {
            this.ACTION_CHANGE_STATE(['ifcCompanyName', value])
        },
        getdesignationIfc1(value) {
            this.ACTION_CHANGE_STATE(['designation1', value])
        },
        getdesignationIfc2(value) {
            this.ACTION_CHANGE_STATE(['designation2', value])
        },
        getdesignationIfc3(value) {
            this.ACTION_CHANGE_STATE(['designation3', value])
        },
        getdesignationTitleIfc1(value) {
            this.ACTION_CHANGE_STATE(['designationTitle1', value])
        },
        getdesignationTitleIfc2(value) {
            this.ACTION_CHANGE_STATE(['designationTitle2', value])
        },
        getdesignationTitleIfc3(value) {
            this.ACTION_CHANGE_STATE(['designationTitle3', value])
        },
        getdesignationTitleIfc4(value) {
            this.ACTION_CHANGE_STATE(['designationTitle4', value])
        },
        getAddressIfc1(value) {
            this.ACTION_CHANGE_STATE(['addressIfc1', value])
        },
        getdirectPhoneIfc(value) {
            this.ACTION_CHANGE_STATE(['directPhoneIfc', value])
        },
        getOfficePhoneIfc(value) {
            this.ACTION_CHANGE_STATE(['officePhone', value])
        },
        getWebsiteUrlIfc(value) {
            this.ACTION_CHANGE_STATE(['websiteUrlIfc', value])
        },
        getEmailIfc(value) {
            this.ACTION_CHANGE_STATE(['emailIfc', value])
        },
        getstNumberIfc(value) {
            this.ACTION_CHANGE_STATE(['stNumberIfc', value])
        },
        editIfcRight() {
            this.ACTION_CHANGE_STATE(['showTextAreaIfcRight', true])
            $('.hoverComponetRemove').addClass('disabled_data')
        },
        getTitleIbc(value) {
            this.ACTION_CHANGE_STATE(['ibcTitleText', value])
        },
        getCompanyNameIbc(value) {
            this.ACTION_CHANGE_STATE(['ibcCompanyNameText', value])
        },
        getAddressIbc(value) {
            this.ACTION_CHANGE_STATE(['ibcAddressText', value])
        },
        getAddressIbc1(value) {
            this.ACTION_CHANGE_STATE(['ibcAddressText1', value])
        },
        getdirectPhoneIbc(value) {
            this.ACTION_CHANGE_STATE(['ibcPhoneNumberText', value])
        },
        getOfficePhoneIbc(value) {
            this.ACTION_CHANGE_STATE(['ibcOfficeNumberText', value])
        },
        getWebsiteUrlIbc(value) {
            this.ACTION_CHANGE_STATE(['ibcWebsiteText', value])
        },
        getEmailIbc(value) {
            this.ACTION_CHANGE_STATE(['ibcEmailText', value])
        },
        saveIfcRight() {
            $('.hoverComponetRemove').removeClass('disabled_data')
            this.saveIFCPreview()
            this.ACTION_CHANGE_STATE(['showTextAreaIfcRight', false])
            //console.log($('.editable_ifc_text').html())
            var text = $('.editable_ifc_text').html()
            this.ACTION_ADD_VALUE_TO_IFC_RIGHT_TEXT(text)
            this.ACTION_CHANGE_STATE(['ifcRightTextInputValue', text])
        },
        getTitleBc(value) {
            this.ACTION_CHANGE_STATE(['bcTitleText', value])
        },
        getCompanyNameBc(value) {
            this.ACTION_CHANGE_STATE(['bcCompanyNameText', value])
        },
        getAddressBc(value) {
            this.ACTION_CHANGE_STATE(['bcAddressText', value])
        },
        getAddressBc1(value) {
            this.ACTION_CHANGE_STATE(['bcAddressText1', value])
        },
        getdirectPhoneBc(value) {
            this.ACTION_CHANGE_STATE(['bcPhoneNumberText', value])
        },
        getOfficePhoneBc1(value) {
            this.ACTION_CHANGE_STATE(['bcOfficeNumberText', value])
        },
        getWebsiteUrlBc(value) {
            this.ACTION_CHANGE_STATE(['bcWebsiteText', value])
        },
        getEmailBc(value) {
            this.ACTION_CHANGE_STATE(['bcEmailText', value])
        },

        getTitleHeaderBc(value) {
            this.ACTION_CHANGE_STATE(['bcTitleHeaderText', value])
        },
        getAddressHeaderBc(value) {
            this.ACTION_CHANGE_STATE(['bcAddressHeaderBcText', value])
        },
        getAddressHeaderBc1(value) {
            this.ACTION_CHANGE_STATE(['bcAddressHeaderBc1Text', value])
        },
        getCityHeaderBc(value) {
            this.ACTION_CHANGE_STATE(['bcCityHeaderText', value])
        },
        getCountryHeaderBc(value) {
            this.ACTION_CHANGE_STATE(['bcCountryHeaderText', value])
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
        getBcProfileImageInputValue(value) {
            this.bcProfileImageCheckboxChooseSelect = value
            this.ACTION_CHANGE_STATE(['bcProfileChooseCheckBox', this.bcProfileImageCheckboxChooseSelect])
            if (this.bcProfileImageCheckboxChooseSelect == 'addMedia') {
                this.ACTION_CHANGE_STATE(['displayBcProfileMedia', true])
                this.ACTION_CHANGE_STATE(['setBcProfileImage_bind', 'profileBCImage'])
            } else {
                this.ACTION_CHANGE_STATE(['defaultBcProfileImagePath', this.prebcProfileimagepath])
                this.ACTION_CHANGE_STATE(['displayBcProfileMedia', false])
                //this.ACTION_CHANGE_STATE(['imageBcProfilePath', ''])
            }
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
        /*--for fc Db value -POST method--- */
        saveFcValueToDb() {
            this.EMPTY_MESSAGE_LIST()
            this.ACTION_CHANGE_STATE(['Savefcloader', true])

            //console.log(this.checkboxChoose, 'sasgahg')
            var data = {
                columnName: 'front_cover',
                defaultImage: this.defaultImagePath,
                AddedImage: this.imagePath,
                textLogo: this.fcLogoText,
                checkboxChoose: this.fcCheckboxChoose,
                alignment:this.textAlign,
                textAlign:this.fcTextLogoAlign,
                headingTag : this.headingTagFc

            }
            console.log(data, 'data')

            axios.post("api/userBooks", data)
                .then(response => {
                    this.PUSH_SUCCESS_MESSAGE('Front cover saved successfully!')
                    
                    var self = this
                    setTimeout(() => {
                        self.ACTION_CHANGE_STATE(['Savefcloader', false])
                    }, 2000)
                })
                .catch(errorResponse => {
                    console.log(errorResponse, "errorResponse");
                    this.PUSH_SUCCESS_MESSAGE('Internal server error');
                });
        },
        /*--END--- */
        async getfcUserBook() {
            await axios.get("api/userBooks/1")
                .then(response => {
                    console.log(response.data.data.front_cover);
                    var checkboxSelected = response.data.data.front_cover !='' ? response.data.data.front_cover.checkboxChoose : 'default'
                    if (response.data.data.front_cover.checkboxChoose == 'default') {
                        //console.log(response.data.data.front_cover.defaultImage, "success");
                        this.ACTION_CHANGE_STATE(['fcCheckboxChoose', checkboxSelected])
                    } else if (response.data.data.front_cover.checkboxChoose == 'addMedia') {
                        //console.log(response.data.data.front_cover.AddedImage, "success");
                        //alert('here')
                        this.ACTION_CHANGE_STATE(['fcAddMediaShow', true])
                        var updatedImagePath = response.data.data.front_cover.AddedImage
                        this.ACTION_CHANGE_STATE(['imagePath', updatedImagePath]);
                        this.ACTION_CHANGE_STATE(['fcCheckboxChoose', checkboxSelected])

                        this.ACTION_CHANGE_STATE(['textAlign' , response.data.data.front_cover.alignment])
                    } else if (response.data.data.front_cover.checkboxChoose == 'textLogo') {
                        //console.log(response.data.data.front_cover.textLogo, "success");
                        this.ACTION_CHANGE_STATE(['fcTextLogoAlign',response.data.data.front_cover.textAlign ])
                        this.ACTION_CHANGE_STATE(["headingTagFc", response.data.data.front_cover.headingTag])
                        var dbfctextlogo = response.data.data.front_cover.textLogo
                        this.ACTION_CHANGE_STATE(['fcLogoText', dbfctextlogo])
                        this.ACTION_CHANGE_STATE(['fcTextInputValueEditor', dbfctextlogo])
                        this.ACTION_CHANGE_STATE(['defaultImagePath', ''])
                        this.ACTION_CHANGE_STATE(['fcLogoTextDisplay', true])
                        this.ACTION_CHANGE_STATE(['hideFcText', false])
                        this.ACTION_CHANGE_STATE(['fcCheckboxChoose', checkboxSelected])
                        this.ACTION_CHANGE_STATE(['displayTextArea', true])
                    } else if(response.data.data.front_cover.checkboxChoose == 'remove'){
                        this.ACTION_CHANGE_STATE(['fcCheckboxChoose', 'remove'])
                        this.ACTION_CHANGE_STATE(['defaultImagePath', ''])
                    }

                })
                .catch(errorResponse => {
                    console.log(errorResponse, "errorResponse");
                });
        },
        /*--for ifc Db value -POST method--- */

        saveifcDataToDb() {
            
            this.ACTION_CHANGE_STATE(['Savefcloader', true])
            var data = {
                columnName: 'inside_front_cover',
                ifcProfileimage: [{
                    ifcProfileChooseDb: this.ifcProfileChoose,
                    defaultProfile: this.defaultIfcImagePath,
                    NewAddedProfile: this.imageIfcPath,
                }],
                ifcBelowImage: [{
                    ifcBelowimageChooseDb: this.ifcBelowimageChoose,
                    defaultBelowLogo: this.defaultIfcLogoPath,
                    NewAddedBelowLogo: this.imageIfcLogoPath,
                }],
                ifcSignature: [{
                    ifcSignatureChooseDb: this.ifcSignatureChoose,
                    defaultSignatureImage: this.defaultIfcSignaturePath,
                    NewAddedSignatureImage: this.imageIfcSignaturePath,
                }],
                profileText: [{
                    ifcTitleText: this.ifcTitleText,
                    ifcCompanyName: this.ifcCompanyName,
                    designation1: this.designation1,
                    designation2: this.designation2,
                    designation3: this.designation3,
                    designationTitle: this.designationTitle,
                    designationTitleset2: this.designationTitleset2,
                    designationTitleset3: this.designationTitleset3,
                    designationTitleset4: this.designationTitleset4,

                    ifcCompanyName2: this.ifcCompanyName2,
                    designationifc: this.designationifc,
                    designationifc1: this.designationifc1,
                    designationifc2: this.designationifc2,
                    designationTitle1: this.designationTitle1,
                    designationTitle2: this.designationTitle2,
                    designationTitle3: this.designationTitle3,
                    designationTitle4: this.designationTitle4,

                    addressIfc1: this.addressIfc1,
                    directPhoneIfc: this.directPhoneIfc,
                    officePhone: this.officePhone,
                    websiteUrlIfc: this.websiteUrlIfc,
                    emailIfc: this.emailIfc,
                    stNumberIfc: this.stNumberIfc
                }],
                right_ifc_content: this.ifcRightTextInputValue != '' ? this.ifcRightTextInputValue : this.inputTextRightIfc
            }
            console.log(data, 'ifc')
            axios.post("api/userBooks", data)
                .then(response => {
                    console.log(response, "success");
                    var self = this
                    setTimeout(() => {
                        self.ACTION_CHANGE_STATE(['Savefcloader', false])
                    }, 2000)
                })
                .catch(errorResponse => {
                    console.log(errorResponse, "errorResponse");
                });
        },
        /*------- End  -----*/
        /*GET Request  IFC */
        async getifcUserBook() {
            await axios.get("api/userBooks/1")
                .then(response => {
                    var responseDbDataProfile = response.data.data.inside_front_cover.ifcProfileimage[0].ifcProfileChooseDb

                    this.ACTION_CHANGE_STATE(['ifcProfileChoose', responseDbDataProfile])

                    var responseDbDataSignature = response.data.data.inside_front_cover.ifcSignature[0].ifcSignatureChooseDb

                    this.ACTION_CHANGE_STATE(['ifcSignatureChoose', responseDbDataSignature])

                    var responseDbDataBelowImage = response.data.data.inside_front_cover.ifcBelowImage[0].ifcBelowimageChooseDb

                    this.ACTION_CHANGE_STATE(['ifcBelowimageChoose', responseDbDataBelowImage])

                    var responseDbDataProfileText = response.data.data.inside_front_cover.profileText
                    //console.log(responseDbDataProfileText,'Rushi')
                    var ifcCompanyNameData = response.data.data.inside_front_cover.profileText[0].ifcCompanyName2
                    if(ifcCompanyNameData != null){
                        this.ACTION_CHANGE_STATE(['displayAddressLable', true])
                        this.ACTION_CHANGE_STATE(['addAddressButton', false])
                    }
                    
                    responseDbDataProfileText.map((d) => {
                        this.ACTION_CHANGE_STATE(['ifcTitleText', d.ifcTitleText])
                        this.ACTION_CHANGE_STATE(['ifcCompanyName', d.ifcCompanyName])
                        this.ACTION_CHANGE_STATE(['designation1', d.designation1])
                        this.ACTION_CHANGE_STATE(['designation2', d.designation2])
                        this.ACTION_CHANGE_STATE(['designation3', d.designation3])
                        this.ACTION_CHANGE_STATE(['designationTitle1', d.designationTitle1])
                        this.ACTION_CHANGE_STATE(['designationTitle2', d.designationTitle2])
                        this.ACTION_CHANGE_STATE(['designationTitle3', d.designationTitle3])
                        this.ACTION_CHANGE_STATE(['designationTitle4', d.designationTitle4])

                        this.ACTION_CHANGE_STATE(['ifcCompanyName2', d.ifcCompanyName2])
                        this.ACTION_CHANGE_STATE(['designationifc', d.designationifc])
                        this.ACTION_CHANGE_STATE(['designationifc1', d.designationifc1])
                        this.ACTION_CHANGE_STATE(['designationifc2', d.designationifc2])
                        this.ACTION_CHANGE_STATE(['designationTitle', d.designationTitle])
                        this.ACTION_CHANGE_STATE(['designationTitleset2', d.designationTitleset2])
                        this.ACTION_CHANGE_STATE(['designationTitleset3', d.designationTitleset3])
                        this.ACTION_CHANGE_STATE(['designationTitleset4', d.designationTitleset4])
                        
                        this.ACTION_CHANGE_STATE(['addressIfc1', d.addressIfc1])
                        this.ACTION_CHANGE_STATE(['directPhoneIfc', d.directPhoneIfc])
                        this.ACTION_CHANGE_STATE(['officePhone', d.officePhone])
                        this.ACTION_CHANGE_STATE(['websiteUrlIfc', d.websiteUrlIfc])
                        this.ACTION_CHANGE_STATE(['emailIfc', d.emailIfc])
                        this.ACTION_CHANGE_STATE(['stNumberIfc', d.stNumberIfc])
                    })

                    var rightIfcDbContent = response.data.data.inside_front_cover.right_ifc_content

                    this.ACTION_CHANGE_STATE(['ifcRightTextInputValue', rightIfcDbContent])
                    //console.log(rightIfcDbContent)
                    if (responseDbDataProfile == "addMedia") {
                        this.ACTION_CHANGE_STATE(['displayIfcMedia', true])
                        var updatedImage = response.data.data.inside_front_cover.ifcProfileimage[0].NewAddedProfile

                        this.ACTION_CHANGE_STATE(['imageIfcPath', updatedImage])

                    }
                    if (responseDbDataSignature == "addMedia") {
                        this.ACTION_CHANGE_STATE(['displayIfcSignatureMedia', true])
                        var updatedImage = response.data.data.inside_front_cover.ifcSignature[0].NewAddedSignatureImage

                        this.ACTION_CHANGE_STATE(['imageIfcSignaturePath', updatedImage])
                    }
                    if (responseDbDataBelowImage == "addMedia") {
                        this.ACTION_CHANGE_STATE(['displayIfcLogoMedia', true])
                        var updatedImage = response.data.data.inside_front_cover.ifcBelowImage[0].NewAddedBelowLogo

                        this.ACTION_CHANGE_STATE(['imageIfcLogoPath', updatedImage])
                    }
                })
                .catch(errorResponse => {
                    console.log(errorResponse, "errorResponse");
                });
        },
        /*---- END----- */

        /*---POST IBC---*/
        saveibcDataToDb() {
            this.ACTION_CHANGE_STATE(['Savefcloader', true])
            var data = {
                columnName: "inside_back_cover",
                IbcAddressInput: [{
                    ibcTitleText: this.ibcTitleText,
                    ibcCompanyNameText: this.ibcCompanyNameText,
                    ibcAddressText: this.ibcAddressText,
                    ibcAddressText1: this.ibcAddressText1,
                    ibcOfficeNumberText: this.ibcOfficeNumberText,
                    ibcPhoneNumberText: this.ibcPhoneNumberText,
                    ibcWebsiteText: this.ibcWebsiteText,
                    ibcEmailText: this.ibcEmailText
                }],
                ibcProfile: [{
                    ibcProfileChooseDb: this.ibcProfileCheckChoose,
                    defaultProfileImage: this.defaultIbcProfilePath,
                    NewAddedProfile: this.imageIbcProfilePath
                }],
                ibcLogo: [{
                    ibcLogoChooseDb: this.ibcLogoCheckChoose,
                    defaultLogoImage: this.defaultIbcLogoImagePath,
                    NewAddedLogo: this.imageIbcLogoPath
                }],
                insideBcImg: [{
                    insideIbcImgChooseDb: this.ibcBannerCheckChoose,
                    defaultBannerImage: this.defaultIbcMainImagePath,
                    NewAddedBanner: this.imageIbcMainPath
                }]
            }
            console.log(data, 'ibc')
            axios.post("api/userBooks", data)
                .then(response => {
                    console.log(response, 'success')
                    var self = this
                    setTimeout(function() {
                        self.ACTION_CHANGE_STATE(['Savefcloader', false])
                    }, 2000)
                })
                .catch(errorResponse => {
                    console.log(errorResponse, 'error')
                })
        },
        /*--END---*/

        /*---GET Request IBC---*/
        getIbcUserBook() {
            axios.get("api/userBooks/1").then(response => {
                    console.log(response, 'ibc')
                    var logoCheckoboxDbValue = response.data.data.inside_back_cover.ibcLogo[0].ibcLogoChooseDb

                    var ProfileChooseDb = response.data.data.inside_back_cover.ibcProfile[0].ibcProfileChooseDb

                    var IbcImgChooseDb = response.data.data.inside_back_cover.insideBcImg[0].insideIbcImgChooseDb

                    this.ACTION_CHANGE_STATE(['ibcProfileCheckChoose', ProfileChooseDb])


                    this.ACTION_CHANGE_STATE(['ibcLogoCheckChoose', logoCheckoboxDbValue])

                    this.ACTION_CHANGE_STATE(['ibcBannerCheckChoose', IbcImgChooseDb])


                    if (ProfileChooseDb == 'addMedia') {
                        this.ACTION_CHANGE_STATE(['displayIbcProfileMedia', true])
                        var updatedImage = response.data.data.inside_back_cover.ibcProfile[0].NewAddedProfile
                        this.ACTION_CHANGE_STATE(['imageIbcProfilePath', updatedImage])
                    }

                    if (logoCheckoboxDbValue == 'addMedia') {
                        this.ACTION_CHANGE_STATE(['displayIbcLogoMedia', true])
                        var updatedImageLogo = response.data.data.inside_back_cover.ibcLogo[0].NewAddedLogo
                        this.ACTION_CHANGE_STATE(['imageIbcLogoPath', updatedImageLogo])
                    }

                    if (IbcImgChooseDb == 'addMedia') {
                        this.ACTION_CHANGE_STATE(['displayIbcMainMedia', true])
                        var updatedImageBanner = response.data.data.inside_back_cover.insideBcImg[0].NewAddedBanner

                        this.ACTION_CHANGE_STATE(['imageIbcMainPath', updatedImageBanner])
                    }

                    var ibcAddressDbValue = response.data.data.inside_back_cover.IbcAddressInput

                    ibcAddressDbValue.map((d) => {
                        this.ACTION_CHANGE_STATE(['ibcTitleText', d.ibcTitleText])
                        this.ACTION_CHANGE_STATE(['ibcCompanyNameText', d.ibcCompanyNameText])
                        this.ACTION_CHANGE_STATE(['ibcAddressText', d.ibcAddressText])
                        this.ACTION_CHANGE_STATE(['ibcAddressText1', d.ibcAddressText1])
                        this.ACTION_CHANGE_STATE(['ibcOfficeNumberText', d.ibcOfficeNumberText])
                        this.ACTION_CHANGE_STATE(['ibcPhoneNumberText', d.ibcPhoneNumberText])
                        this.ACTION_CHANGE_STATE(['ibcWebsiteText', d.ibcWebsiteText])
                        this.ACTION_CHANGE_STATE(['ibcEmailText', d.ibcEmailText])
                    })


                })
                .catch(errorResponse => {
                    console.log(errorResponse, "errorResponse");
                });
        },

        /*---END---*/
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
                    setTimeout(function() {
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
        save_download(pageId){
            if(pageId == 1){
                this.saveFcValueToDb()
            }
            axios.get('api/download_pdf/'+pageId)
            .then(response => {
                // console.log(response.data)
                // window.open(response.data.url, '_blank');
                var link = document.createElement('a')
                link.href = response.data.url
                link.setAttribute('download', response.data.name)
                document.body.appendChild(link)
                link.click()
            })
        },
        showAddAddress(){
            this.ACTION_CHANGE_STATE(['displayAddressLable', true])
            this.ACTION_CHANGE_STATE(['addAddressButton', false])
        },
        getCompanyName2Ifc(value) {
            this.ACTION_CHANGE_STATE(['ifcCompanyName2', value])
        },
        getdesignation1(value) {
            this.ACTION_CHANGE_STATE(['designationifc', value])
        },
        getdesignation2(value){
            this.ACTION_CHANGE_STATE(['designationifc1', value])
        }, 
        getdesignation3(value){
            this.ACTION_CHANGE_STATE(['designationifc2', value])
        },
        getdesignationTitle1(value){
            this.ACTION_CHANGE_STATE(['designationTitle', value])
        },
        getdesignationTitle2(value){
            this.ACTION_CHANGE_STATE(['designationTitleset2', value])
        },
        getdesignationTitle3(value){
            this.ACTION_CHANGE_STATE(['designationTitleset3', value])
        },
        getdesignationTitle4(value){
            this.ACTION_CHANGE_STATE(['designationTitleset4', value])
        },
        removeAddAddress(){
            this.ACTION_CHANGE_STATE(['addAddressButton', true])
            this.ACTION_CHANGE_STATE(['displayAddressLable', false])
            this.ACTION_CHANGE_STATE(['ifcCompanyName2', ''])
            this.ACTION_CHANGE_STATE(['designationifc', ''])
            this.ACTION_CHANGE_STATE(['designationifc1', ''])
            this.ACTION_CHANGE_STATE(['designationifc2', ''])
            this.ACTION_CHANGE_STATE(['designationTitle', ''])
            this.ACTION_CHANGE_STATE(['designationTitleset2', ''])
            this.ACTION_CHANGE_STATE(['designationTitleset3', ''])
            this.ACTION_CHANGE_STATE(['designationTitleset4', ''])
        }
    }

}