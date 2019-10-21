<template>
    <div class="login_form">
        <div class="container">
            <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                <div class="card-body">
                    <h5 class="card-title text-center">Sign In</h5>
                    <form class="form-signin" @submit.prevent ="onSubmit">
                    <div class="form-label-group">
                        <label for="inputEmail">Email address</label>
                        <input type="text" id="inputEmail" v-model="email" class="form-control" placeholder="Email address"  autofocus>
                    </div>
                    <div class="form-label-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password" >
                    </div>
                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            email : '',
            password : ''
        }
    },
    methods:{
        ...mapActions([
            'ACTION_CHANGE_STATE'
        ]),
        onSubmit(){
            this.ACTION_CHANGE_STATE(['loader',true])
            var data = {
                email : this.email,
                password : this.password
            }
            axios.post('/api/userLogin',data)
            .then(response => {
                console.log(response)
                var access = 'Bearer ' + response.data.accessToken;
                var userId = response.data.data.id;
                var userDetail = response.data.data
                this.$session.set('accessToken', access)
                this.$session.set('userId', userId)
                this.$session.set('userDetail', userDetail)
                this.ACTION_CHANGE_STATE(['loader',false])
                
                setTimeout( () => {
                    this.$router.push('/front_cover')
                }, 1000)
            })
            .catch(error => {
                this.alertError(error.response.data.message)
                this.ACTION_CHANGE_STATE(['loader',false])
            })
        }
    }
}
</script>