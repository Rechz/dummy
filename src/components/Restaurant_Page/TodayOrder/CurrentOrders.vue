<template>
<OrderHeading :orders="orders"/>
<OrderStatus  @orderClicked="showOrderDetails"/>
<OrderList v-if="selectedOrderId" :selectedOrderId="selectedOrderId" :filteredItems="filteredItems" :filteredOrders="filteredOrders"/>
<!-- <OrderStatus/> -->

</template>
<script>
import OrderHeading from './OrderHeading.vue';
import OrderList from './OrderList.vue';
import OrderStatus from './OrderStatus.vue';
export default {
    components: {
        OrderHeading, 
         OrderList, 
        OrderStatus
    },
    data() {
        return{
          selectedOrderId: false,
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
    computed: {
      filteredOrders() { 
      const order = this.orders.find(order => order.id === this.selectedOrderId);
      return order;
      },
    filteredItems() {
      const items = this.orders.find(order => order.id === this.selectedOrderId);
      return items.items;
      }
    },
   methods: {
     showOrderDetails(orderId) {
       this.selectedOrderId = orderId;
      },
   },
   
};
</script>