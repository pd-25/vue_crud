<template>
 <MyNavBar/>
 <router-view/>
 
</template>


<script>
import MyNavBar from "./components/MyNavBar.vue";

export default {
  name: "app",
  components: {
    MyNavBar,
  },
};



</script>

<style>

</style>
