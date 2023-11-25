<template>
<teleport to="body">
      <div @click="$emit('close')"></div>
      <dialog open>
      <header>
          <slot name="header">
            <div class="mb-5 pb-5 item-box">
      <div class="row mx-5 p-1 rounded-top-3 id-header bg-dark">
        <div class="row">
            <div class="col-6 input-time"><h5><b>Order ID: </b>order</h5></div>
            <div class="col-6 text-right pe-0 input-time d-flex justify-content-end "><h5><b>Location: </b>hrhtreht</h5></div>
        </div>
        <div class="row" >
            <div class="col-6 input-time"><h5><b>Customer Name:</b> Mamdfd</h5></div>
            <div class="col-6 text-right pe-0 input-time"><h5><b>Order Time: </b>gfhgher</h5></div>
         </div>
      </div>
      </div>
          </slot>
      </header>
      <section>
          <slot></slot>
      </section>
      <section>
          <slot name="actions">
              <button @click="$emit('close')">Close</button>
          </slot>
      </section>
  </dialog>
  </teleport>
  
  
</template>






<script>
export default {
    data() { 
        return{ 
            dialog: false,
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
            location:'Ambalapuzha', price: 400, items:[{item: 'Meals', quantity: 4}], decision: 'completed'}
        ]
        // orders: [{id:'123456', orderNo: 1, paymentId: 'DRST1234', status:'success', orderNum: 1, item: 'Biriyani', quantity: 2, orderTime: 10.45,
            // location:'Alappuzha', price: 540, decision: 'pending',customerName:'Roy'}, 
            // {id:'123456', orderNo: 1, paymentId: 'DRST1234', status:'success', orderNum: 2, item: 'Masala Dosa',
            // quantity: 1, orderTime: 10.45, location:'Alappuzha', price: 540, decision: 'pending',customerName:'Roy'}, 
            // {id:'123457', orderNo: 2, paymentId: 'KRST1235', status:'success', orderNum: 1, item: 'Alfaham',
            // quantity: 1, orderTime: 11.26, location:'Kommady', price: 190, decision: 'completed',customerName:'Anita'}, 
            // {id:'123458', orderNo: 3, paymentId: 'LRST1236', status:'success', orderNum: 1, item: 'Mixed Fried Rice',
            // quantity: 1, orderTime: 1.15, location:'Alappuzha', price: 280, decision: 'pending',customerName:'Vipin'},
            // {id:'123458', orderNo: 3, paymentId: 'LRST1236', status:'success', orderNum: 2, item: 'Chilli Gobi',
            // quantity: 1, orderTime: 1.15, location:'Alappuzha', price: 280, decision: 'pending',customerName:'Vipin'},
            // {id:'123459', orderNo: 4, paymentId: 'FRST1237', status:'success', orderNum: 1, item: 'Meals',
            // quantity: 4, orderTime: 1.45, location:'Ambalapuzha', price: 400, decision: 'completed', customerName:'Fathima'}], // Your list of orders fetched from the database
        
    };
}
}

</script>
