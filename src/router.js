import { createRouter, createWebHistory } from 'vue-router';
import RegisterCard from './components/Home_Page/RegisterCard.vue';
import LoginCard from './components/Home_Page/LoginCard.vue';
import HomePage from './components/Home_Page/HomePage.vue';
import RestaurantHome from './components/Restaurant_Page/RestaurantHome.vue';
import OrderList from './components/Restaurant_Page/TodayOrder/OrderList.vue';
import OrderHistoryMenu from './components/Restaurant_Page/OrderHistoryMenu.vue';
import CurrentOrders from './components/Restaurant_Page/TodayOrder/CurrentOrders.vue';
import ItemMenu from './components/Restaurant_Page/FoodItems/ItemMenu.vue';
import CustomerHomePage from './components/Customer_Page/CustomerHomePage.vue';
import AdminHomePage from './components/Admin_Page/AdminHomePage.vue';
import DeliveryHomePage from './components/Delivery_Person_Page/DeliveryHomePage.vue';
import UserUpdateForm from './components/Restaurant_Page/UserUpdateForm.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            component: HomePage,
            children: [
                {
                    path: '/register', 
                    component: RegisterCard, 
                    alias: '/'
                },
                {
                    path: '/login', 
                    component: LoginCard
                }
            ]
        },
        {
            path: '/restaurant',
            component: RestaurantHome,
            children: [
                {
                    path: '/todayorders',
                    component: CurrentOrders
                },
                {
                    path: '/ordermenu',
                    component: OrderHistoryMenu
                },
                {
                    path: '/orderlists',
                    component: OrderList,
                },
                {
                    path:'/menu',
                    component: ItemMenu,
                    alias: '/restaurant'
                },
                {
                    path: '/updatedetails',
                    component: UserUpdateForm,
                },
            ]
        },
        {
            path:'/customer',
            component: CustomerHomePage 
        },
        {
            path:'/admin',
            component: AdminHomePage
        },
        {
            path:'/deliveryperson',
            component: DeliveryHomePage
        }
    ]
});

export default router;