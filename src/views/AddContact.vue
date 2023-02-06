<template>
  <div class="container mt-5">
    <div class="row">
        <div class="col">
            <p class="h3 fw-bold text-primary">
                Add new contact
            </p>
            <p><i>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt officia unde doloremque rem ex dolorum? Eaque reiciendis quos vitae tempore expedita quas, iusto optio, omnis nemo harum cum, iste cupiditate.</i></p>
            
        </div>
    </div>

  </div>
  <!-- {{ groupIds }} -->
  <div class="container mt-3">
    <div class="row">
        <div class="col-md-4">
            <form @submit.prevent="createContact()">
                <div class="mb-2">
                    <input v-model="contact.name" type="text" class="form-control" id="" placeholder="name">
                </div>

                <div class="mb-2">
                    <input v-model="contact.photo" type="text" class="form-control" id="" placeholder="Photo url">
                </div>
                <div class="mb-2">
                    <input v-model="contact.email" type="text" class="form-control" id="" placeholder="Email">
                    
                </div>
                <div class="mb-2">
                    <input v-model="contact.mobile" type="number" class="form-control" id="" placeholder="Mobile">
                </div>
                <div class="mb-2">
                    <input v-model="contact.company" type="text" class="form-control" id="" placeholder="Company">
                </div>
                <div class="mb-2">
                    <input v-model="contact.title" type="text" class="form-control" id="" placeholder="Title">
                </div>
                <div class="mb-2">
                    <select v-model="contact.groupId" id="" class="form-control">
                        <option value="">select group</option>
                        <option v-for="groupId of groupIds" :key="groupId.id" :value="groupId.id">{{ groupId.name }}</option>
                    </select>
                </div>

                <div class="md-2" >
                    <div class="row">
                        <div class="col-md-3">
                            <input type="submit" class="form-control btn btn-primary"  value="create">

                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-4">
            <img :src="contact.photo" alt="" class="contact-img">
        </div>
    </div>
<!-- {{ contact }} -->
  </div>
</template>

<script>
import { ContactService } from '@/services/ContactService';
export default {
    name: "addContact",
    data : function (){
        return {
            contact: {
                name: '',
                company: '',
                email: '',
                title: '',
                mobile: '',
                photo: '',
                groupId: '',
            },
            groupIds: [],
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getAllGroups();
            // console.log(response.data);
            this.groupIds = response.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {
        createContact: async function () {
            try {
                let insert = await ContactService.createContact(this.contact);
                if(insert){
                    return this.$router.push('/');
                }else {
                    return this.$router.push('/contacts/create');
                }
            } catch (error) {
               alert(error); 
            }
        }
    }
}
</script>

<style>
</style>