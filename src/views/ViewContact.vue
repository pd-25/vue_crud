<template>
   <div class="container mt-5">
    <div class="row">
        <div class="col">
            <p class="h3 fw-bold text-primary">
                View contact
            </p>
            <p><i>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt officia unde doloremque rem ex dolorum? Eaque reiciendis quos vitae tempore expedita quas, iusto optio, omnis nemo harum cum, iste cupiditate.</i></p>
            
        </div>
    </div>

  </div>
 <!-- loding -->
 <div v-if="loading">
    <div class="container">
        <div class="row">
            <div class="col">
            <LodingSpinner/>
            </div>
        </div>
    </div>
</div>
<!-- error -->
<div v-if="!loading && errorMessage">
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <p class="h4 text-danger fw-bold">{{ errorMessage }}</p>
            </div>
        </div>
    </div>

</div>
  <div class="container" v-if="!loading && notEmpty()">
    <div class="row align-items-center">
        <div class="col-md-4">
            <img :src="contact.photo" class="contact-img-big" alt="">
        </div>
<!-- {{ contact }} -->
        <div class="col-md-6">
            <ul class="list-group">
                <li class="list-group-item">Name : <span class="fw-bold">{{ contact.name }}</span></li>
                <li class="list-group-item">Email : <span class="fw-bold">{{ contact.email }}</span></li>
                <li class="list-group-item">Mobile : <span class="fw-bold">{{ contact.mobile }}</span></li>
                <li class="list-group-item">Company : <span class="fw-bold">{{ contact.company }}</span></li>
                <li class="list-group-item">Title : <span class="fw-bold">{{ contact.title }}</span></li>
                <li class="list-group-item">Group : <span class="fw-bold">{{ group.name }}</span></li>

            </ul>
        </div>
    </div>
    
    <div class="row mt-4">
        <div class="col">
            <router-link to="/" class="btn btn-danger brn-sm">Back</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import LodingSpinner from '@/components/LodingSpinner.vue';
import { ContactService } from '@/services/ContactService';
export default {
    name: "ViewContact",
    data: function () {
        return {
            contactID: this.$route.params.id,
            loading: false,
            contact: {},
            group: {},
            errorMessage: null
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getContact(this.contactID);
            let responseGroup = await ContactService.getGroup(response.data);
            this.contact = response.data;
            this.group = responseGroup.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {
        notEmpty: function (){
        return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0;
    }
    },
    components: { LodingSpinner }
}
</script>

<style>
</style>