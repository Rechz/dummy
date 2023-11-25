<template>
  <NavImage/>
  <OrderPath/>
  <SignInUp/>
  <FooterCard/>
</template>

<script>
import NavImage from './NavImage.vue';
import OrderPath from './OrderPath.vue';
import SignInUp from './SignInUp.vue';
import FooterCard from './FooterCard.vue';
export default {
components: { 
            NavImage, 
            OrderPath, 
            SignInUp,
            FooterCard,
        }
}
</script>
