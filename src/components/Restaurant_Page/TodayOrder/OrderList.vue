<template>
    
    <div class="mb-5 pb-5 item-box">
      <div class="row mx-5 p-1 rounded-top-3 id-header bg-dark">
        <div class="row">
            <div class="col-6 input-time"><h5><b>Order ID: </b>{{ selectedOrderId }}</h5></div>
            <div class="col-6 text-right pe-0 input-time d-flex justify-content-end "><h5><b>Location: </b>{{filteredOrders.location}}</h5></div>
        </div>
        <div class="row" >
            <div class="col-6 input-time"><h5><b>Customer Name:</b> {{filteredOrders.customerName}}</h5></div>
            <div class="col-6 text-right pe-0 input-time"><h5><b>Order Time: </b>{{filteredOrders.orderTime}}</h5></div>
         </div>
      </div>
    

      <div class="row mx-5 text-center" style="font-family: 'EB Garamond', serif;">
            <div class="col-2 item-header input-time bg-dark item-border" >
                <h5 class="text-white ">Item No.</h5>
            </div>
            <div class="col-5  item-header input-time bg-dark">
                <h5 class="text-white">Item</h5>
            </div>
            <div class="col-5  item-header input-time bg-dark item-border">
                <h5 class="text-white">Quantity</h5>
            </div>
      </div>
        <div class="row mx-5 text-center" v-for="(order,index) in filteredItems" :key="index">
            <div class="col-2 sub border-top-0 border-right-0 ">
                 <b>{{index+1}}</b>
            </div>
            <div class="col-5 sub border-top-0">
                <b>{{order.item}}</b>
            </div>
            <div class="col-5 sub border-top-0">
                <b>{{order.quantity}}</b>
            </div>
        </div>
        <div class="row mx-5">
            <div class="col-6 py-2 footer-border bg-dark ">
                <!-- <label class="input-time">Expected time:<input type="text" style="width:35px;" class="input-time"/></label> -->
            </div>
             <div class="col-6 text-right py-2 footer-border footer-border-2 bg-dark ">
                <button class="me-4"><v-icon class="mdi mdi-check" color="#f2efe2"></v-icon></button>
                <button><v-icon class="mdi mdi-close" color="#f2efe2"></v-icon></button>
             </div>
        </div>
    </div>

</template>

<script>


export default {

    props: ['filteredItems', 'filteredOrders', 'selectedOrderId']
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=EB+Garamond&family=PT+Serif:ital@1&display=swap');
.item-header{
    border: 1px solid #bf770b;
    /* height: 60px; */
    /* border-top: none; */
    border-right: none;
    border-left: none;
}
.item-border{
    border: 1px solid #bf770b;
}
.id-header, .id-header-2{
    border-right: 1px solid #bf770b;
    border-left: 1px solid #bf770b;
}
.id-header{
    border-top: 1px solid #bf770b;
    /* background: linear-gradient(to bottom, #efc729, #ec9c33);  */
    font-family: 'EB Garamond', serif; 
}
.sub{
    border: 1px solid #bf770b;
    background-color: #f2efe2;   
    color: #6b4306;
}
.input-time{
    color: white;
}
.footer-border {
    border-left: 1px solid #bf770b; 
    border-bottom: 1px solid #bf770b; 
    /* background: linear-gradient(to bottom, #efc729, #ec9c33) */
}
.footer-border-2{
    border-right: 1px solid #bf770b; 
    border-left: none;
}
</style>