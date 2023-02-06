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

  <div class="container">
    <div class="row align-items-center">
        <div class="col-md-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJJSFcWEKr6nqzqWPn1KNSIqWTWJsiICKQLJFYQXIOjunf-nDlblfXPC3NNWGAz8HpsA&usqp=CAU" class="contact-img-big" alt="">
        </div>

        <div class="col-md-6">
            <ul class="list-group">
                <li class="list-group-item">Name : <span class="fw-bold">Pradipta Bhuin</span></li>
                <li class="list-group-item">Email : <span class="fw-bold">pradipta@gmail.com</span></li>
                <li class="list-group-item">Mobile : <span class="fw-bold">+91 9382950050</span></li>
                <li class="list-group-item">Company : <span class="fw-bold">Pradipta Bhuin</span></li>
                <li class="list-group-item">Title : <span class="fw-bold">pradipta@gmail.com</span></li>
                <li class="list-group-item">Group : <span class="fw-bold">+91 9382950050</span></li>

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
export default {
    name: "ViewContact",
    data: function () {
        return {
            // contactID = this.$router.params.contactID;
        }
    }
}
</script>

<style>
</style>