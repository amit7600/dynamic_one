<template>
  <div>
        <!-- alert error message -->   
        
        <div v-if="errorMessage.length > 0" class="alert alert-danger alert-dismissible">
            <a class="close" data-dismiss="alert" aria-label="close" @click="emptyMessage">&times;</a>
            <strong v-for="(er,index) in errorMessage" :key="index" > {{ er.message }} </strong>
        </div>
        <!-- alert success message -->
        <div v-if="successMessage.length > 0" class="alert alert-success alert-dismissible">
            <a class="close" data-dismiss="alert" aria-label="close" @click="emptyMessage">&times;</a>
            <strong v-for="(success,index) in successMessage" :key="index" > {{ success.message }}</strong>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
    computed: {
        ...mapState([
            'errorMessage',
            'successMessage'
        ])

    },
    methods: {
        ...mapMutations([
            'EMPTY_MESSAGE_LIST'
        ]),
        emptyMessage(){
            this.EMPTY_MESSAGE_LIST()
        }
    },
}
</script>

<style>

</style>
