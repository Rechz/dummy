<template>
    <div class="d-flex justify-content-around mt-5">
        <div class="d-flex flex-column">
            <h3 class="my-4">Total Orders</h3>
            <div class="content d-flex align-items-center justify-content-center mx-auto">
                <h2>{{totalOrders}}</h2>
            </div>
        </div>
        <div class="d-flex flex-column">
            <h3 class="my-4">Pending Orders</h3>
            <div class="content d-flex align-items-center justify-content-center mx-auto">
                <h2>{{pendingOrders}}</h2>
            </div>
        </div>
        <div class="d-flex flex-column">
            <h3 class="my-4">Completed Orders</h3>
            <div class="content d-flex align-items-center justify-content-center mx-auto">
                <h2>{{completedOrders}}</h2>
            </div>
        </div>
    </div>

</template>

<script>
export default{
    props: ['orders'],
    data() {
        return{

        };
    },
    computed: {
        totalOrders() {
            return this.orders.length;
        },
        pendingOrders() {
            return this.orders.filter(order => order.decision === 'pending').length;
        },
        completedOrders() {
            return this.orders.filter(order => order.decision === 'completed').length;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=PT+Serif:ital@1&display=swap');
.content{
    height: 100px;
    width: 100px;
    border: 3px dashed #c9b00e;
    border-radius: 50%;
    box-shadow: 0px 0px 8px rgba(43, 43, 42, 0.558);
    margin-bottom: 50px;
    /* background-image: url('@/assets/navbar.jpg'); */
}
.content h2,h3{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #c99a0e;
    font-family: 'Comfortaa', sans-serif;
    font-weight: 600;
}


</style>