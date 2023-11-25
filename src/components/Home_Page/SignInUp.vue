<template>
  <div class="my-5 ">
    <div class="card mb-3 w-100 h-100 side">
  <div class="row g-0">
    <div class="col-md-7">
      <SideImage/>
    </div>
    <div class="col-md-5 d-flex align-items-start" id="sign">
      <div class="card-body" >
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import SideImage from './SideImage.vue';
export default {
  components: {
    SideImage
},
}
</script>

<style scoped>
.card {
  border: none;
}
.side{
  background-color: transparent;
}
</style>