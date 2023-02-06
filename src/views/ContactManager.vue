<template>
    <div class="container mt-5">
        <div class="row">
        <div class="col">
           <p class="h3 text-primary fw-bold">Contact manager
            <router-link to="/contacts/create" class="btn btn-success btn-sm"> <i class="fa fa-plus-circle"></i> Add new</router-link></p>
            <p><i> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate id veniam dolore quas quod blanditiis a saepe, commodi nam deserunt? Sapiente recusandae quaerat expedita esse assumenda nesciunt tempore. Incidunt, est. </i></p>

            <form action="">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col">
                                <input type="text" name="" class="form-control" placeholder="Search name" >
                            </div>
                            <div class="col">
                                    <input type="submit" class="btn btn-outline-dark">
                            </div>
                        </div>
                    </div>
                </div>
            </form>
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
    <div class="container mt-5" v-if="contacts.length > 0">
        <div class="row">
            <div class="col-md-6" v-for="contact of contacts" :key="contact" >
                <div class="card my-2 list-group-item-success shadow-lg">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-4">
                                <img :src=" contact.photo" alt="image not found" class="contact-img">
                            </div>
                            <div class="col-md-7">
                                <ul class="list-group">
                                    <li class="list-group-item">Name : <span class="fw-bold">{{ contact.name }}</span></li>
                                    <li class="list-group-item">Email : <span class="fw-bold">{{ contact.email }}</span></li>
                                    <li class="list-group-item">Mobile : <span class="fw-bold">{{ contact.mobile }}</span></li>

                                </ul>
                            </div>
                            <div class="col-md-1 p-1">
                                <router-link :to="`/contacts/view/${contact.id}`" class="btn btn-warning btn-sm m-1">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link :to="`/contacts/edit/${contact.id}`" class="btn btn-success btn-sm m-1">
                                    <i class="fa fa-edit"></i>
                                </router-link>
                                <router-link :to="`/contacts/view/${contact.id}`" class="btn btn-danger btn-sm m-1">
                                    <i class="fa fa-trash"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LodingSpinner from '@/components/LodingSpinner.vue';
import { ContactService } from '@/services/ContactService';
export default {
    name: "ContactManager",
    data: function () {
        return {
            loading: false,
            contacts: [],
            errorMessage: null,
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getAllContacts();
            this.contacts = response.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    components: { LodingSpinner }
}
</script>

<style>
</style>