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

    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <div class="card my-2 list-group-item-success shadow-lg">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJJSFcWEKr6nqzqWPn1KNSIqWTWJsiICKQLJFYQXIOjunf-nDlblfXPC3NNWGAz8HpsA&usqp=CAU" alt="image not found" class="contact-img">
                            </div>
                            <div class="col-md-7">
                                <ul class="list-group">
                                    <li class="list-group-item">Name : <span class="fw-bold">Pradipta Bhuin</span></li>
                                    <li class="list-group-item">Email : <span class="fw-bold">pradipta@gmail.com</span></li>
                                    <li class="list-group-item">Mobile : <span class="fw-bold">+91 9382950050</span></li>

                                </ul>
                            </div>
                            <div class="col-md-1 p-1">
                                <router-link to="/contacts/view/:id" class="btn btn-warning btn-sm m-1">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link to="/contacts/edit/:id" class="btn btn-success btn-sm m-1">
                                    <i class="fa fa-edit"></i>
                                </router-link>
                                <router-link to="/contacts/view/:id" class="btn btn-danger btn-sm m-1">
                                    <i class="fa fa-trash"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2nd -->
            <div class="col-md-6">
                <div class="card my-2 list-group-item-success shadow-lg">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJJSFcWEKr6nqzqWPn1KNSIqWTWJsiICKQLJFYQXIOjunf-nDlblfXPC3NNWGAz8HpsA&usqp=CAU" alt="image not found" class="contact-img">
                            </div>
                            <div class="col-md-7">
                                <ul class="list-group">
                                    <li class="list-group-item">Name : <span class="fw-bold">Pradipta Bhuin</span></li>
                                    <li class="list-group-item">Email : <span class="fw-bold">pradipta@gmail.com</span></li>
                                    <li class="list-group-item">Mobile : <span class="fw-bold">+91 9382950050</span></li>

                                </ul>
                            </div>
                            <div class="col-md-1 p-1">
                                <router-link to="/contacts/view/:id" class="btn btn-warning btn-sm m-1">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link to="/contacts/edit/:id" class="btn btn-success btn-sm m-1">
                                    <i class="fa fa-edit"></i>
                                </router-link>
                                <router-link to="/contacts/view/:id" class="btn btn-danger btn-sm m-1">
                                    <i class="fa fa-trash"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 3rd -->
            <div class="col-md-6">
                <div class="card my-2 list-group-item-success shadow-lg">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJJSFcWEKr6nqzqWPn1KNSIqWTWJsiICKQLJFYQXIOjunf-nDlblfXPC3NNWGAz8HpsA&usqp=CAU" alt="image not found" class="contact-img">
                            </div>
                            <div class="col-md-7">
                                <ul class="list-group">
                                    <li class="list-group-item">Name : <span class="fw-bold">Pradipta Bhuin</span></li>
                                    <li class="list-group-item">Email : <span class="fw-bold">pradipta@gmail.com</span></li>
                                    <li class="list-group-item">Mobile : <span class="fw-bold">+91 9382950050</span></li>

                                </ul>
                            </div>
                            <div class="col-md-1 p-1">
                                <router-link to="/contacts/view/:id" class="btn btn-warning btn-sm m-1">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link to="/contacts/edit/:id" class="btn btn-success btn-sm m-1">
                                    <i class="fa fa-edit"></i>
                                </router-link>
                                <router-link to="/contacts/view/:id" class="btn btn-danger btn-sm m-1">
                                    <i class="fa fa-trash"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 4th -->
            <div class="col-md-6">
                <div class="card my-2 list-group-item-success shadow-lg shadow-md">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJJSFcWEKr6nqzqWPn1KNSIqWTWJsiICKQLJFYQXIOjunf-nDlblfXPC3NNWGAz8HpsA&usqp=CAU" alt="image not found" class="contact-img">
                            </div>
                            <div class="col-md-7">
                                <ul class="list-group">
                                    <li class="list-group-item">Name : <span class="fw-bold">Pradipta Bhuin</span></li>
                                    <li class="list-group-item">Email : <span class="fw-bold">pradipta@gmail.com</span></li>
                                    <li class="list-group-item">Mobile : <span class="fw-bold">+91 9382950050</span></li>

                                </ul>
                            </div>
                            <div class="col-md-1 p-1">
                                <router-link to="/contacts/view/:id" class="btn btn-warning btn-sm m-1">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link to="/contacts/edit/:id" class="btn btn-success btn-sm m-1">
                                    <i class="fa fa-edit"></i>
                                </router-link>
                                <button class="btn btn-danger btn-sm m-1">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactManager",
    data: function () {
        return {
            loading: false,
            contacts: [],
            errorMessage: null,
        }
    }
}
</script>

<style>
</style>