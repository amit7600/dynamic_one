<template>
    <div class="gjs-pn-buttons top_preview">
			<router-link to="/preview" target="_blank" title="Preview"><button class="icon_top" @click="preiviewTab()"><span class="ti ti-eye"></span></button></router-link>
			<button class="icon_top" @click="save(1)" title="save"><span class="ti ti-check"></span></button>
			<button class="icon_top" @click="save(2)" title="Download"><span class="ti ti-download"></span></button>
			<button class="icon_top" @click="logout" title="Logout"><span class="ti ti-power-off"></span></button>
	</div>
</template>
<script>
export default {
    mounted(){
        if(this.$session.get('accessToken') == undefined){
            this.alertError('You must login first!')
            this.$session.destroy();
            this.$router.push('/');
        }
    },
    methods:{
        save(value){
            if(value == 1){
                this.$parent.saveCover()
            }else if(value == 2){
                this.$parent.downloadCover()
            }
        },
        logout(){
            axios.defaults.headers.common['Authorization'] = this.$session.get('accessToken') 
            axios.get("api/logout")
            .then(response => {
                this.alertSuccess('Logout successfully!')
                this.$session.destroy();
                this.$router.push('/');
            })
            .catch(error => {
                console.log(error)
            })
            
        }
    }
}
</script>