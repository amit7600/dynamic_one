<template>
    <div>
        <div class="inner_right_side 1" v-if="showFrontCover">
                <div class="cover_img">
                    <img src="images/front_cover.jpg">
                </div>
            <div class="above_img_text">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div v-if="radioButton != 'remove' && radioButton != 'textLogo'" :class="{'col-md-4':true, 'mt-5':true ,'logo':true}" :style="{'text-align':radioButton == 'default' ? 'center': this.imageAlign}">
                        <img v-if="radioButton == 'addMedia'" :src="this.fcImagePath" alt="" srcset="" style="margin-bottom:20px;">
                        <iconHoverComponent class="hoverShow" />
                        <span>
                        <img :src="defaultImage"  title=""  v-if="radioButton == 'default'" >
                        </span>			
                    </div>   
					                
                    <div  v-if="radioButton == 'textLogo'" class="col-md-4 mt-5 logo text_Fc_logo">
                        <div v-html= this.fcTextLogoEditor :style="{'text-align':this.logoTextAlign}"></div> 
                          <iconHoverComponent />          
                    </div>
					<div  v-if="radioButton == 'remove'" class="col-md-4 mt-5 logo text_Fc_logo">
                          <iconHoverComponent />          
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade show_data" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
							<div id="content" class="side_bar_content tab-pane active" >
								<div  id="design" class="tab-pane">
									<div class="content_area">
										<div class="font_content">
											Upload Image
										</div>
										<div class="Logo_select_option row">
											<div class="row modal_radiobox">
												<div class="col-sm-12 text_field">
													<label for="slideTwo">
														<input type="radio" value="remove" v-model="radioButton" @change="radioButtonChange" id="slideTwo" name="check" :chacked="radioButton == 'remove' ? 'checked': ''" >Remove logo
													</label>
												</div>
											</div>
											<div class="row modal_radiobox">
												<div class="col-sm-12 text_field">
													<label for="UseDefault">
														<input type="radio" id="UseDefault" value="default" v-model="radioButton" @change="radioButtonChange" name="check" :chacked="radioButton == 'default' ? 'checked': ''" />Use Default
													</label>
												</div>
											</div>
											<div class="row modal_radiobox">
												<div class="col-sm-12 text_field">
													<label for="addMedia">
														<input type="radio" id="addMedia" data-id="addMedia_id" value="addMedia" v-model="radioButton" @change="radioButtonChange" name="check" :chacked="radioButton == 'addMedia' ? 'checked': ''" />Add media
														<toolTipsComponent title="100 X 100"/>
													</label>
												</div>
											</div>
											<div class="row modal_radiobox">
												<div class="col-sm-12 text_field">
													<label for="Usetextlogo">
														<input type="radio" id="Usetextlogo" value="textLogo" v-model="radioButton" @change="radioButtonChange" name="check" :chacked="radioButton == 'Usetextlogo' ? 'checked': ''" />Use text logo
													</label>
												</div>
											</div>
										</div>										
										<div class="add_media" v-if="radioButton == 'addMedia'">
											<button  class="btn btn-block media_btn" data-target="#fileModal" data-toggle="modal">
												<span class="font_content">Add Media</span>
											</button>
										</div>
										<div  class="add-media-show" id="addMedia_id" data-section="section-1" v-if="radioButton == 'addMedia'">
											<img :src="fcImagePath" alt="" data-target="#fileModal" data-toggle="modal"  title=""  style="margin-bottom:20px;" >
											
											<!-- <img data-target="#fileModal" data-toggle="modal"  alt="" srcset="" style="margin-bottom:20px; margin-top: 37px;"> -->
										</div>
									</div>
									<div class="content_area" v-if="radioButton == 'addMedia'" >
                                        <div class="font_content">Image Alignment</div>

									<div contenteditable="false" id="alignImage" class="font_body">
										<ul>
											<li>
												<a class="btn" :class="{'active' : this.imageAlign == 'left'}" title="Left" data-toggle="tooltip" @click="imageAlignment('left')" data-placement="top">
													<i class="ti-align-left"></i>
												</a>
											</li>
											<li>
												<a class="btn" :class="{'active' : this.imageAlign == 'center'}" title="Center" @click="imageAlignment('center')" data-toggle="tooltip" data-placement="top">
													<i class="ti-align-center"></i>
												</a>
											</li>

											<li>
												<a class="btn" :class="{'active' : this.imageAlign == 'right'}" title="Right" data-toggle="tooltip" @click="imageAlignment('right')" data-placement="top">
													<i class="ti-align-right"></i>
												</a>
											</li>
										</ul>
									</div>
									</div>
									<div class="content_area" v-show="radioButton == 'textLogo'">
										<!-- start body content -->
										<div class="font_content">Body Content</div>
										<div contenteditable="true" class="editable" id="editable" :style="{'text-align' : this.logoTextAlign}" v-html="this.fcTextLogoEditor"></div>

										<!-- start font heading tag -->
										<div class="font_content">Font Heading Tag</div>
										<div class="heading_tag">
											<select @change="changeHeadingTag" v-model="HeadingTag">
												<option value="">Select Heading Tag</option>
												<option value="h1">Heading &lt;h1&gt;</option>
												<option value="h2">Heading &lt;h2&gt;</option>
												<option value="h3">Heading &lt;h3&gt;</option>
												<option value="h4">Heading&lt;h4&gt;</option>
												<option value="h5">Heading &lt;h5&gt;</option>
												<option value="h6">Heading &lt;h6&gt;</option>
											</select>
										</div>

										<!-- start text alignment -->
										<div class="font_content">Text Alignment</div>
										<div class="font_body">
											<ul>
												<li>
													<a class="btn" title="Left" :class="{ 'active' : this.logoTextAlign == 'left'}" @click="changeLogoTextAlign('left')" data-toggle="tooltip" data-placement="top">
														<i class="ti-align-left"></i>
													</a>
												</li>
												<li>
													<a class="btn" title="Center" :class="{ 'active' : this.logoTextAlign == 'center'}" @click="changeLogoTextAlign('center')" data-toggle="tooltip" data-placement="top">
														<i class="ti-align-center"></i>
													</a>
												</li>

												<li>
													<a class="btn" title="Right" :class="{ 'active' : this.logoTextAlign == 'right'}" @click="changeLogoTextAlign('right')" data-toggle="tooltip" data-placement="top">
														<i class="ti-align-right"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<div class="inner_footer_content">
							<button class="btn btn_save"  data-dismiss="modal" @click="saveChange">
								Save <i class="ti-check" ></i>
							</button>
							<button class="btn btn_close" data-dismiss="modal" @click="cancel">
								Cancel <i class="ti-close" aria-hidden="true"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<fileModalComponent></fileModalComponent>
    </div>
</template>

<script>
import fileModalComponent from './model/fileModalComponent';
import ModelInputComponent from "./model/modelInputComponent";
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
     components: {
	   ModelInputComponent,
	   fileModalComponent
     },
    data(){
       return {
            HeadingTag:this.$store.state.fcHeadingText,
            showCodeEditor: false,
			radioButton: this.$store.state.fcRadioButton,
			defaultImage : 'images/logo.png',
			imageAlign : this.$store.state.fcImageAlign,
			logoTextAlign : this.$store.state.fcTextAlign,
			fcImagePath : this.$store.state.fcImage
		};
    },
    computed: {
		...mapState([
			'fcRadioButton',
			'fcTextLogoEditor',
			'fcImageAlign',
			'fcImage',
			'fcTextAlign',
			'fcHeadingText',
			'fcPreview'
		])
	},
	created(){
		this.getUserData()
	},
   mounted(){
	   this.textLogo = $('.editable').html();
       $("#exampleModal").modal({
			focus: false,
			// Do not show modal when innitialized.
			show: false,
			backdrop: 'static', // For static modal
			keyboard: false // prevent click outside of the modal
		});
		
    },
    methods: {
		...mapActions([
			'ACTION_CHANGE_STATE'
		]),
		...mapMutations([
			'EMPTY_MESSAGE_LIST',
			'PUSH_SUCCESS_MESSAGE',
			'PUSH_ERROR_MESSAGE'
		]),
		changeHeadingTag(e) {
            var headingTag = e != undefined ? e.target.value : this.HeadingTag;
            var ClassName = document.getElementsByClassName("editable");
            var innerText = document.createTextNode(ClassName[0].innerText)
            var h = document.createElement(headingTag);
            h.appendChild(innerText);
            document.getElementById("editable").innerHTML = "";
            document.getElementById("editable").appendChild(h)
            // document.execCommand('formatblock', false, headingTag)
            // this.ACTION_CHANGE_STATE(["headingTagFc", headingTag])
        },
        resetActiveOnAlign (type, value) {
			this.textLeft = false
			this.textRight = false
			this.textCenter = false
			this.textJustify = false
			this[type] = !this[value]
		},
		cancel(){
			this.radioButton = this.fcRadioButton
			this.imageAlign = this.fcImageAlign
			this.logoTextAlign = this.fcTextAlign
			this.HeadingTag = this.fcHeadingText
			this.fcImagePath = this.fcImage

		},
		saveChange(){
			if(this.fcImage == 'images/avatar_image.jpg' && this.radioButton == 'addMedia'){
				this.radioButton = this.fcRadioButton;
			}
			var text = $('.editable').html();
			this.ACTION_CHANGE_STATE(['fcRadioButton',this.radioButton])
			this.ACTION_CHANGE_STATE(['fcTextLogoEditor',text])
			this.ACTION_CHANGE_STATE(['fcImageAlign',this.imageAlign])
			this.ACTION_CHANGE_STATE(['fcTextAlign',this.logoTextAlign])
			this.ACTION_CHANGE_STATE(['fcHeadingText',this.HeadingTag])
			this.ACTION_CHANGE_STATE(['fcImage',this.fcImagePath])
		},
		radioButtonChange(){

		},
		displayModal() {
            if (this.openModal == 'front-cover') {
                // this.ACTION_CHANGE_STATE(['fcModalHide', 'true'])
                $('#exampleModal').modal('show');
            }
            //console.log(this.openModal)
            if (this.openModal == 'inside-front-cover') {
                $('#ifcModal').modal('show');
            }
		},
		imageAlignment(value){
			this.imageAlign = value
		},
		changeLogoTextAlign(value){
			this.logoTextAlign = value
			 document.getElementById("editable").style.textAlign = value;
		},
		save_front_cover(){
			this.EMPTY_MESSAGE_LIST()
			this.ACTION_CHANGE_STATE(['Savefcloader', true])
			var data = {
				columnName: 'front_cover',
				HeadingTag : this.HeadingTag, 
				radioButton : this.radioButton,
				defaultImage : this.defaultImage,
				imageAlign	: this.imageAlign,
				logoTextAlign : this.logoTextAlign,
				fcImage : this.fcImage,
				fcTextLogoEditor : this.fcTextLogoEditor
			}
			axios.post("api/userBooks", data)
			.then(response => {
				const front_cover = response.data.data
					this.ACTION_CHANGE_STATE(['fcImageAlign',front_cover.imageAlign]);
					this.ACTION_CHANGE_STATE(['fcTextAlign',front_cover.logoTextAlign]);
					this.ACTION_CHANGE_STATE(['fcHeadingText',front_cover.HeadingTag]);
					this.ACTION_CHANGE_STATE(['fcRadioButton',front_cover.radioButton]);
					this.defaultImage = front_cover.defaultImage;
					this.ACTION_CHANGE_STATE(['fcImage',front_cover.fcImage]);
					this.ACTION_CHANGE_STATE(['fcTextLogoEditor',front_cover.fcTextLogoEditor]);
				this.PUSH_SUCCESS_MESSAGE('Front cover saved successfully!')
				
				this.ACTION_CHANGE_STATE(['Savefcloader', false])
			})
			.catch(error => {
				console.log(error)
				this.PUSH_ERROR_MESSAGE('Internal server error');
			});
		},
		getUserData(){
			axios.get("api/userBooks/1")
			.then(response => {
				const front_cover = response.data.data.front_cover
				if(front_cover){
					// store into vuex
					this.ACTION_CHANGE_STATE(['fcImageAlign',front_cover.imageAlign]);
					this.ACTION_CHANGE_STATE(['fcTextAlign',front_cover.logoTextAlign]);
					this.ACTION_CHANGE_STATE(['fcHeadingText',front_cover.HeadingTag]);
					this.ACTION_CHANGE_STATE(['fcRadioButton',front_cover.radioButton!= null ? front_cover.radioButton : 'default']);
					this.ACTION_CHANGE_STATE(['fcImage',front_cover.fcImage != null ? front_cover.fcImage : this.fcImage]);
					
					this.ACTION_CHANGE_STATE(['fcTextLogoEditor',front_cover.fcTextLogoEditor]);
					this.defaultImage = front_cover.defaultImage != null ? front_cover.defaultImage : this.defaultImage;
					this.radioButton = front_cover.radioButton != null ? front_cover.radioButton : 'default'
					this.HeadingTag = front_cover.HeadingTag != null ? front_cover.HeadingTag : '';
					this.imageAlign = front_cover.imageAlign
					this.logoTextAlign = front_cover.logoTextAlign
					this.fcImagePath = front_cover.fcImage
				}
			})
			.catch(error => {
				// this.PUSH_ERROR_MESSAGE('Internal server error');
			})
		},
		save_and_download(){
			this.save_front_cover()
			axios.get('api/download_pdf/'+1)
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
		setImage(value){
            this.fcImagePath = value;
        }
		
    }
}
</script>

<style>

</style>