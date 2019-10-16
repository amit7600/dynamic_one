import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
var br = '<br><br>'
var defaultTextIfc = 'Greetings ' + br + 'The chill in the air will soon give way to the spontaneous showers of early spring. “Do I need a coat? A jacket? A trench? Umbrella?” Transitional periods can be challenging. The key is to approach each day prepared for as many scenarios as possible. Just as it’s our goal to present financial options to help you reach future goals, this edition of ONE, The Style Issue, offers exclusive essentials perfect for elevating your lifestyle today. ' + br + ' “Dress You Up” provides tips applicable to everyone’s wardrobe and individual aesthetic. Serving as a sartorial assistant, this fashion feature guides you away from trends and toward personalized classic style. Think Katharine Hepburn’s contemporary fashion parade in the 1938 film Holiday and Colin Firth’s impeccably tailored suiting in 2014’s Kingsman: The Secret Service. ' + br + ' And the highly anticipated and fantastically stylish Kentucky Derby is run every year on the first Saturday in May. So, for those who can’t make it to Churchill Downs, the Celebrate section presents everything you need to throw “The Perfect Derby Affair” (fascinators not included).' + br + ' As you embrace this season, remember that we are here to assist you in building your financial foundation, one that will enable you to maintain your life in whatever style you wish.' + br + 'Sincerely,'
export const store = new Vuex.Store({
    state: {
        openModal: 'front-cover',
        showFrontInsideCover: false,
        showFrontCover: true,
        imagePath: '',
        imagePathTemp: '',
        fcAddMediaShow: false,
        imageIfcPath: '',
        imageIfcLogoPath: '',
        imageIfcSignaturePath: '',
        imageIbcProfilePath: '',
        imageIbcMainPath: '',
        imageIbcLogoPath: '',
        imageBcLogoPath: '',
        defaultImagePath: '',
        defaultIfcImagePath: '',
        defaultIfcLogoPath: '',
        defaultIfcSignaturePath: '',
        defaultIbcProfilePath: '',
        defaultIbcMainImagePath: '',
        defaultIbcLogoImagePath: '',
        defaultBcLogoImagePath: '',
        fcTextValue: '',
        ifcTextProfileValue: '',
        fcLogoText: '',
        textAlign: '',
        fcTextLogoAlign: '',
        ifcRightTextInputValue: '',
        hideFcText: true,
        displayTextArea: false,
        displayIfcTextArea: false,
        displayIbcMainMedia: false,
        displayIbcLogoMedia: false,
        fcLogoTextDisplay: false,
        displayBcLogoMedia: false,
        setIfc_bind: '',
        setIfcLogo_bind: '',
        setIfcSignature_bind: '',
        setIbcProfile_bind: '',
        setIbcLogoImage_bind: '',
        setIbcMainImage_bind: '',
        openIfcModalForLogo: '',
        openIfcModalForSignature: '',
        // openIbcModal: '',
        openIfcModalForText: '',
        ifcText: '',
        ifcRightText: '',
        ifcTextDisplay: false,
        ifcRightTextDisplay: false,
        displayTextAreaFor: false,
        displayIbcProfileMedia: false,
        // ifcTitleText: 'Kat Nitsous',
        // ifcCompanyName: 'Sotheby’s International Realty, Inc.',
        // designation1: 'ADPAÂ®',
        // designation2: 'ADPAÂ®',
        // designation3: 'C(k)PÂ®',
        // designationTitle1: 'Business Development Director ',
        // designationTitle2: '401(K) Consulting Director ',
        // designationTitle3: 'Alternative Investments Director ',
        // designationTitle4: 'Associate Stock Plan Director',
        // addressIfc1: '16027 VENTURA BLVD, Suite 330 ENCINO, CA, 91436',
        // directPhoneIfc: 'O : 626-396-9400',
        // officePhone: 'M : 323-228-3805',
        // websiteUrlIfc: 'sothebyshomes.com',
        // emailIfc: 'kat.nitsou@sothebyinternational.com',
        // stNumberIfc: 'NMLS#',
        showTextAreaIfcRight: false,
        ifcRightTextValue: defaultTextIfc,
        showCover: '',
        ibcTitleText: 'Kat Nitsous',
        ibcCompanyNameText: 'Sotheby’s International Realty, Inc.',
        ibcAddressText: '16027 VENTURA BLVD, Suite 330',
        ibcAddressText1: 'ENCINO, CA, 91436',
        ibcPhoneNumberText: 'M : 323-228-3805',
        ibcOfficeNumberText: 'O : 626-396-9400',
        ibcWebsiteText: 'sothebyshomes.com',
        ibcEmailText: 'kat.nitsou@sothebyinternational.com',

        bcTitleText: 'Kat Nitsous',
        bcCompanyNameText: 'Sotheby’s International Realty, Inc.',
        bcAddressText: '16027 VENTURA BLVD, Suite 330',
        bcAddressText1: 'ENCINO, CA, 91436',
        bcPhoneNumberText: 'M : 323-228-3805',
        bcOfficeNumberText: 'O : 626-396-9400',
        bcWebsiteText: 'sothebyshomes.com',
        bcEmailText: 'kat.nitsou@sothebyinternational.com',

        openHeaderContent: '',
        openFooterContent: '',

        previewFc: '',
        fcPreview: '',
        ifcPreview: '',
        bcPreview: '',
        ibcPreview: '',
        setBcLogoImage_bind: '',

        bcTitleHeaderText: 'Kat Nitsous',
        bcAddressHeaderBcText: 'Sotheby’s International Really, Inc.',
        bcAddressHeaderBc1Text: '1801 N.Hillhurts Avenue',
        bcCityHeaderText: 'Los Angeles',
        bcCountryHeaderText: 'California 90027',

        fcTextInputValueEditor: '',
        Savefcloader: '',
        /*Rushi */
        defaultBcProfileImagePath: '',
        BcProfileImage: '',
        setBcProfileImage_bind: '',
        displayBcProfileMedia: false,
        bcProfileImageCheckboxChoose: '',
        setBcProfileImage_bind: '',
        imageBcProfilePath: '',
        profileImage: '',
        /*Rushi */

        /*DataBase after modal Store var */
        fcCheckboxChoose: 'default',
        ifcSignatureChoose: 'default',
        ifcProfileChoose: 'default',
        ifcBelowimageChoose: 'default',
        ibcLogoCheckChoose: 'default',
        ibcBannerCheckChoose: 'default',
        ibcProfileCheckChoose: 'default',
        hideIconEdit: false,

        displayIfcLogoMedia: false,
        displayIfcMedia: false,
        displayIfcSignatureMedia: false,

        /*Rushi */
        bcLogoChooseCheckBox: 'default',
        bcProfileChooseCheckBox: 'default',
        displayAddressLable: false,
        // addAddressButton: true,

        ifcCompanyName2: '',
        designationifc: '',
        designationifc1: '',
        designationifc2: '',
        designationTitle: '',
        designationTitleset2: '',
        designationTitleset3: '',
        designationTitleset4: '',
        /*Rushi */

        errorMessage: [],
        successMessage: [],
        headingTagFc: '',
        tempFcAlignValue: 'center',
        ImageFcAlignValue: 'center',
        tempFcCheckboxChoose: '',
        fcModalHide: false,


        //new amit
        fcRadioButton: 'default',
        fcTextLogoEditor: '<h1></h1>',
        fcImageAlign: 'center',
        fcImage: 'images/avatar_image.jpg',
        fcTextAlign: 'center',
        fcHeadingText: '',
        //for ifc
        ifcPhotoRadio: 'default',
        ifcPhotoImage: 'images/avatar_image.jpg',
        ifcName: 'Kat Nitsous',
        ifcCompanyName: 'Sotheby’s International Realty, Inc.',
        ifcdesignation1: 'ADPAÂ®',
        ifcdesignation2: 'ADPAÂ®',
        ifcdesignation3: 'C(k)PÂ®',
        ifcTitle1: 'Business Development Director ',
        ifcTitle2: '401(K) Consulting Director ',
        ifcTitle3: 'Alternative Investments Director ',
        ifcTitle4: 'Associate Stock Plan Director',
        ifcaddress: '16027 VENTURA BLVD, Suite 330 ENCINO, CA, 91436',
        ifcDirectPhone: 'M : 323-228-3805 ',
        ifcOfficePhone: 'O : 626-396-9400',
        ifcWebsite: 'sothebyshomes.com',
        ifcEmail: 'kat.nitsou@sothebyinternational.com',
        ifcMemberCstNumber: 'NMLS#',
        //for address 2
        ifcCompanyName2: '',
        ifcdesignation21: '',
        ifcdesignation22: '',
        ifcdesignation23: '',
        ifcTitle21: '',
        ifcTitle22: '',
        ifcTitle23: '',
        ifcTitle24: '',
        ifcAddSecondAddress: true,
        ifcSecondAddress: false,
        //ifc logo image
        ifcLogoImage: 'images/avatar_image.jpg',
        ifcLogoRadioButton: 'default',
        // ifc signature image
        ifcSignatureImage: 'images/avatar_image.jpg',
        ifcSignatureRadioButton: 'default',
        // for text editor
        ifcTextEditor: '',
        // ibc section start
        ibcLogoRadioButton: 'default',
        ibcLogoImage: 'images/avatar_image.jpg',
        // main image
        ibcMainImage: 'images/avatar_image.jpg',
        ibcMainRadioButton: 'default',
        // photo image
        ibcPhotoImage: 'images/avatar_image.jpg',
        ibcPhotoRadioButton: 'default',
        // address section
        ibcTitle: 'Kat Nitsous',
        ibcCompanyName: 'Sotheby’s International Realty, Inc.',
        ibcAddress1: '16027 VENTURA BLVD, Suite 330',
        ibcAddress2: 'ENCINO, CA, 91436',
        ibcDirectPhone: 'M : 323-228-3805',
        ibcOfficePhone: 'O : 626-396-9400',
        ibcWebsite: 'sothebyshomes.com',
        ibcEmail: 'kat.nitsou@sothebyinternational.com',




    },
    getters: {},
    mutations: {
        CHANGE_STATE(state, value) {
            //console.log(value)
            state[value[0]] = value[1]
            // console.log(value[1], 'store')
            //console.log(this.state.ifcRightTextInputValue, 'fsdasdasfadsfsdafsads')
        },
        PUSH_SUCCESS_MESSAGE(state, data) {
            state.successMessage = [];
            state.successMessage.push({ message: data })
        },
        PUSH_ERROR_MESSAGE(state, data) {
            state.errorMessage = [];
            state.errorMessage.push({ message: data })
        },
        EMPTY_MESSAGE_LIST(state) {
            state.errorMessage = [];
            state.successMessage = [];
        },
        REMOVE_IMAGE_BACKROUND_PATH() {
            this.state.imagePath = ''
        },
        REMOVE_DEFAULT_IMAGE_PATH() {
            this.state.defaultImagePath = ''
            this.state.imagePath = ''
        },
        REMOVE_DEFAULT_IFC_IMAGE_PATH() {

            this.state.defaultIfcImagePath = ''
            this.state.imageIfcPath = ''
            // console.log(this.state.defaultIfcImagePath, 'here')
        },
        REMOVE_DEFAULT_IFC_LOGO_IMAGE_PATH() {
            this.state.defaultIfcLogoPath = ''
            this.state.imageIfcLogoPath = ''
        },
        USE_DEFAULT_MEDIA_IFC_IMAGE_PATH() {
            this.state.imageIfcPath = ''
        },
        USE_DEFAULT_MEDIA_IFC_LOGO_PATH() {
            this.state.imageIfcLogoPath = ''
        },
        fcCoverText(state, value) {
            //    console.log(value, 'amit')
            this.fcTextValue = value;
            // console.log(this.fcTextValue,'amit')
        },
        ifcProfileText(state, value) {
            this.ifcTextProfileValue = value
        },
        REMOVE_FC_TEXT_NULL() {
            this.state.fcTextValue = ''
        },
        NUll_OPEN_IFC_MODAL_FOR_LOGO() {
            this.state.openIfcModalForLogo = ''
        },
        REMOVE_MODEL_IFC_TEXT() {
            this.state.openIfcModalForText = ''
        },
        REMOVE_MODEL_IFC_LOGO() {
            this.state.openIfcModalForLogo = ''
        },
        NULL_CHECKBOX_BIND() {
            this.state.setIfc_bind = ''
            this.state.setIfcLogo_bind = ''
            //   console.log(this.state.setIfc_bind, 'this.state.setIfc_bind')
        },
        ifcRightSideText(state, value) {
            //console.log()
            this.state.ifcRightTextValue = value
        },
        lazyloader(state, value) {
            var test
            setTimeout(function () {
                test = value
            }, 25000)
            this.state.Savefcloader = test
        }
    },
    actions: {
        ACTION_CHANGE_STATE(context, value) {
            context.commit('CHANGE_STATE', value)
        },
        ACTION_ADD_VALUE_TO_FC_TEXT(context, value) {
            // console.log(value, 'action')
            context.commit('fcCoverText', value)

        },
        ACTION_ADD_VALUE_TO_IFC_LEFT_TEXT(context, value) {
            context.commit('ifcProfileText', value)
        },
        ACTION_ADD_VALUE_TO_IFC_RIGHT_TEXT(context, value) {
            context.commit('ifcRightSideText', value)
        },
        // ACTION_LAZY_LOAD(context, value){
        //     context.commit('lazyloader' , value)
        // }
    },

})