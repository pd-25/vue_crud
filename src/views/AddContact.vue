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
  <div class="container mt-3">
    <div class="row">
        <div class="col-md-4">
            <form action="">
                <div class="mb-2">
                    <input type="text" class="form-control" name="name" id="" placeholder="name">
                </div>

                <div class="mb-2">
                    <input type="text" class="form-control" name="name" id="" placeholder="Photo url">
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" name="name" id="" placeholder="Email">
                    
                </div>
                <div class="mb-2">
                    <input type="number" class="form-control" name="name" id="" placeholder="Mobile">
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" name="name" id="" placeholder="Company">
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" name="name" id="" placeholder="Title">
                </div>
                <div class="mb-2">
                    <select name="" id="" class="form-control">
                        <option value="">Select group</option>
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJJSFcWEKr6nqzqWPn1KNSIqWTWJsiICKQLJFYQXIOjunf-nDlblfXPC3NNWGAz8HpsA&usqp=CAU" alt="" class="contact-img">
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: "addContact"
}
</script>

<style>
</style>