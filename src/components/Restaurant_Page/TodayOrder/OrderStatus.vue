<template>
        <div class="row mx-5 text-center header-style" style="background: linear-gradient(to bottom, #efc729, #ef9929)">
            <div class="col-1 sub-header">
                <h5>Order No.</h5>
            </div>
            <div class="col-2 sub-header">
                <h5>Order ID</h5>
            </div>
            <div class="col-2 sub-header">
                <h5>Price</h5>
            </div>
            <div class="col-2 sub-header">
                <h5>Payment ID</h5>
            </div>
            <div class="col-3 sub-header">
                <h5>Location</h5>
            </div>
            <div class="col-2 sub-header">
                <h5>Order Time</h5>
            </div>
        </div>

        <div class="row mx-5 text-center data-style" v-for="(order, index) in orders" :key="index">
            <div class="col-1 sub-header">
                {{ index + 1 }}
            </div>
            <div class="col-2 sub-data">
                <button @click="handleOrderClick(order.id)">{{order.id}}</button>
            </div>
            
            <div class="col-2 sub-header">
                Rs.{{ order.price }}/-
            </div>
            <div class="col-2 sub-data">
                {{order.paymentId}}
            </div>
            <div class="col-3 sub-header">
                {{order.location}}
            </div>
            <div class="col-2 sub-header">
                {{order.orderTime}}
            </div>
        </div>
        <br>
        <br><br>
        <DummyData/>
</template>

<script>
import DummyData from './DummyData.vue';
export default {
    components: {
    DummyData,
 
},
    emits:['orderClicked'],
    methods: {
       handleOrderClick(orderId) {
        this.$emit('orderClicked', orderId);
       },

    
       showOrderDetails(orderId) {
       this.selectedOrderId = orderId;
      },
    },
    data(){
        return{
            orders: [
            {id:'123456', paymentId: 'DRST1234', orderTime: 10.45, customerName:'Roy', customerId: '012D', 
            location:'Alappuzha', price: 300, items: [{item: 'Biriyani', quantity: 2, price: 240},{item: 'Masala Dosa',
            quantity: 1, price: 60}], decision: 'pending'}, 

            {id:'123457', paymentId: 'KRST1235', orderTime: 11.26, customerName:'Anita', customerId: '667P', 
            location:'Kommady', price: 190, items: [{item: 'Alfaham', quantity: 1,}], decision: 'completed'}, 

            {id:'123458', paymentId: 'LRST1236', orderTime: 1.15, customerName:'Vipin', customerId: '235M',
            location:'Alappuzha', price: 280, items: [{item: 'Mixed Fried Rice', quantity: 1}, {item: 'Chilli Gobi',
            quantity: 1}], decision: 'pending'},

            {id:'123459', paymentId: 'FRST1237', orderTime: 1.45, customerName:'Fathima', customerId: '963Q', 
            location:'Ambalapuzha', price: 400, items: [{item: 'Meals', quantity: 4}], decision: 'completed'}
          ]
        };
    },
};
</script>

<style scoped>
button{
    text-decoration: underline;
}
.header-style, .data-style{
    color: #6b4306;
    border: 1px solid  #bf770b;
    border-right: 0;
    height:60px;

}
.data-style{
    height:40px; 
    background-color: #f2efe2;
}
.sub-header, .sub-data{
    padding: 5px;
    border-right: 1px solid #bf770b;
}

</style>