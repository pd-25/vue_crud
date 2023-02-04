<template>
  <!-- <LodingSpinner/> -->
 <MyNavBar/>
 <router-view/>
 
</template>


<script>
import MyNavBar from "./components/MyNavBar.vue";
// import LodingSpinner from "./components/LodingSpinner.vue";

export default {
  name: "app",
  components: {
    MyNavBar,
    // LodingSpinner,
  },
};



</script>

<style>

</style>
