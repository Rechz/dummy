<template>
<div class="d-flex  flex-wrap items mx-5">
<ItemMenuCard v-for="(item, index) in items" :key="index" :item="item" :src="item.image" class="my-4 mx-5"/>
</div>
</template>
<script>
import ItemMenuCard from './ItemMenuCard.vue';
export default{
    components:{
        ItemMenuCard
    },
    data(){
        return{
            items: [
            {
                itemName:'Veg Thali meals', 
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse quibusdam qui exercitationem, natus earum nesciunt tempore est commodi quas ut.',
                price: 'Rs.90/-',
                image: require('@/assets/meals.webp')
            },
                {
                itemName:'Mutton Biriyani', 
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse quibusdam qui exercitationem, natus earum nesciunt tempore est commodi quas ut.',
                price: 'Rs.120/-',
                image: require('@/assets/biriyani.jpeg')
            },
           
            {
                itemName:'Vegetable Fried Rice', 
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse quibusdam qui exercitationem, natus earum nesciunt tempore est commodi quas ut.',
                price: 'Rs.110/-',
                image: require('@/assets/friedrice.jpg')
            },
            {
                itemName:'Parotta', 
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse quibusdam qui exercitationem, natus earum nesciunt tempore est commodi quas ut.',
                price: 'Rs.10/-',
                image: require('@/assets/parotta.jpg')
            },
            {
                itemName:'Desi Pasta', 
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse quibusdam qui exercitationem, natus earum nesciunt tempore est commodi quas ut.',
                price: 'Rs.120/-',
                image: require('@/assets/pasta.jpg')
            },
            {
                itemName:'Chicken Burger', 
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse quibusdam qui exercitationem, natus earum nesciunt tempore est commodi quas ut.',
                price: 'Rs.60/-',
                image: require('@/assets/burger.jpg')
            },
            {
                itemName:'Cheese Pizza', 
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse quibusdam qui exercitationem, natus earum nesciunt tempore est commodi quas ut.',
                price: 'Rs.80/-',
                image: require('@/assets/pizza.jpg')
            },
            {
                itemName:'Chicken Shawarma', 
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse quibusdam qui exercitationem, natus earum nesciunt tempore est commodi quas ut.',
                price: 'Rs.100/-',
                image: require('@/assets/shawarma.jpg')
            },
        ]
        };
    }
}
</script>
<style> 
.items{
    margin-top: 50px;
}
</style>