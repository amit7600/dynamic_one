<template>
    <div class="file-modal">
         <div class="modal fade bd-example-modal-lg show_data image_insert" id="fileModal" tabindex="-1" role="dialog" aria-labelledby="fileModalLabel" aria-hidden="true" style="overflow-y:auto;">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Files</h5>
                    </div>
                    <div class="modal-body">
                        <UplaodArea />
                    </div>
                    <div class="modal-footer">
                        <div class="inner_footer_content">
                            <button type="button" class="btn btn_save" data-dismiss="modal" >Save &nbsp; 
                                <i class="ti-check" ></i>
                            </button>
                            <button type="button" class="btn btn_close" data-dismiss="modal">Cancel &nbsp; 
                                <i class="ti-close" aria-hidden="true"></i>
                            </button>
                            <!-- <button class="btn bottom_btn width_half" data-dismiss="modal">
								<i class="ti-close" aria-hidden="true" ></i>
							</button>
                            <button class="btn bottom_btn width_half"  data-dismiss="modal">
								<i class="ti-check"></i>
							</button> -->
                        </div>
                    </div>
                    <!-- <div class="modal-footer">
                        <div class="inner_footer_content" @click="closeModal">
                            <a class="btn two" data-dismiss="modal">
                                <i class="fa fa-window-close" aria-hidden="true"></i>
                            </a>
                            <a class="btn one" data-dismiss="modal">
                                <i class="fas fa-check"></i>
                            </a>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // this.getLibraryImages()
    $("#fileModal").modal({
      focus: false,
      // Do not show modal when innitialized.
      show: false,
      backdrop: "static", // For static modal
      keyboard: false // prevent click outside of the modal
    });
  },
  methods: {
    // getLibraryImages () {
    //     axios.get('api/getImageLibrary')
    //     .then (response => {
    //         this.libraryImages = response.data.data
    //     })
    //     .catch (errorResponse => {
    //         console.log(errorResponse, 'erer')
    //     })
    // },
    // uploadImage(e) {
    //     let files = e.target.files || e.dataTransfer.files;
    //     if (!files.length) return;
    //     this.uploadImages(files[0]);
    // },
    // uploadImages(files) {
    //     console.log("Kandarp pandya", files);
    //     // upload image to database and folder
    //     // axios.defaults.headers.common['Authorization'] = this.$session.get('accessToken')
    //     var data = new FormData();
    //     var file = files;
    //     data.append("image", file);
    //     data.append("type", this.mediaType);
    //     axios.post("api/imageLibrary", data)
    //     .then(response => {
    //         this.libraryImages = response.data.data;
    //         document.getElementById("uploadImage").value = "";
    //     })
    //     .catch(errorResponse => {
    //         console.log(errorResponse, "errorResponse");
    //     });
    // },
    selectedImage(value) {
      this.$parent.setImage(value);
    }
  }
};
</script>

