<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-primary">Edit contact</p>
        <p>
          <i
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            officia unde doloremque rem ex dolorum? Eaque reiciendis quos vitae
            tempore expedita quas, iusto optio, omnis nemo harum cum, iste
            cupiditate.</i
          >
        </p>
      </div>
    </div>
  </div>
  <!-- loding -->
  <div v-if="loading">
    <div class="container">
      <div class="row">
        <div class="col">
          <LodingSpinner />
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
  <div class="container mt-3" v-if="notEmpty()">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="contactUpdate()">
          <div class="mb-2">
            <input
              v-model="contact.name"
              type="text"
              class="form-control"
              name="name"
              id=""
              placeholder="name"
            />
          </div>

          <div class="mb-2">
            <input
              v-model="contact.photo"
              type="text"
              class="form-control"
              name="name"
              id=""
              placeholder="Photo url"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="contact.email"
              type="text"
              class="form-control"
              name="name"
              id=""
              placeholder="Email"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="contact.mobile"
              type="number"
              class="form-control"
              name="name"
              id=""
              placeholder="Mobile"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="contact.company"
              type="text"
              class="form-control"
              name="name"
              id=""
              placeholder="Company"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="contact.title"
              type="text"
              class="form-control"
              name="name"
              id=""
              placeholder="Title"
            />
          </div>
          <div class="mb-2">
            <select
              v-model="contact.groupId"
              class="form-control"
              v-if="groups.length > 0"
            >
              <option :value="group.id" v-for="group of groups" :key="group.id">
                {{ group.name }}
              </option>
            </select>
          </div>

          <div class="md-2">
            <div class="row">
              <div class="col-md-3">
                <input
                  type="submit"
                  class="form-control btn btn-primary"
                  value="Update"
                />
              </div>
              <div class="col-md-3">
                <router-link to="/" class="btn btn-danger brn-sm"
                  >Back</router-link
                >
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img :src="contact.photo" alt="" class="contact-img" />
      </div>
    </div>
  </div>
</template>

<script>
import LodingSpinner from "@/components/LodingSpinner.vue";
import { ContactService } from "@/services/ContactService";

export default {
  name: "editContact",
  data: function () {
    return {
      contactID: this.$route.params.id,
      loading: false,
      contact: {
        name: "",
        company: "",
        email: "",
        title: "",
        mobile: "",
        photo: "",
        groupId: "",
      },
      groups: [],
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await ContactService.getContact(this.contactID);
      let responseGroup = await ContactService.getAllGroups();
      this.contact = response.data;
      this.groups = responseGroup.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods: {
    notEmpty: function () {
      return (
        Object.keys(this.contact).length > 0 &&
        Object.keys(this.groups).length > 0
      );
    },
    contactUpdate: async function () {
      try {
        let insert = await ContactService.updateContact(this.contact, this.contactID);
        if (insert) {
          return this.$router.push("/");
        } else {
            return this.$router.push("/contacts/edit/"+ this.contactID);
        }
      } catch (error) {
        alert(error);
      }
    },
  },
  components: { LodingSpinner },
};
</script>

<style></style>
