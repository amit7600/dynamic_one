<template>
    <div>
        <div class="upload-main-class">
            <div class="upload-class">
                <input type="file" multiple id="uploadImage" @change="uploadImage">
                <p>Drag your files here or click in this area.</p>
            </div>
        </div>
        <ul class="gallery row">
            <li  class="col-sm-4" style="list-style: none;"  v-for="(image, index) in libraryImages" :key="index"><img :src="image.path"  class="img-size" data-dismiss="modal" @click="setImage(image.path)" /></li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    mounted () {
        this.getLibraryImages()
    },
    methods: {
        ...mapActions([
            'ACTION_CHANGE_STATE'
        ]),
        getLibraryImages () {
            axios.get('api/imageLibrary')
            .then (response => {
                this.libraryImages = response.data.data
            })
            .catch (errorResponse => {
                console.log(errorResponse, 'erer')
            })
        },
        uploadImage(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.uploadImages(files[0]);
        },
        uploadImages(files) {
            this.ACTION_CHANGE_STATE(['loader', true])
            var data = new FormData();
            var file = files;
            data.append("image", file);
            data.append("type", 1);
            axios.post("api/imageLibrary", data)
            .then(response => {
                this.libraryImages = []
                this.libraryImages = response.data.data;
                document.getElementById("uploadImage").value = "";
                this.setImage(response.data.uploadImage)
                $('#fileModalClose').click()
                this.ACTION_CHANGE_STATE(['loader', false])
            })
            .catch(errorResponse => {
                console.log(errorResponse, "errorResponse");
                this.ACTION_CHANGE_STATE(['loader', false])
            });
        },
        setImage(image){
            this.$parent.selectedImage(image);
        },
    }
}
</script>

<style>

</style>
