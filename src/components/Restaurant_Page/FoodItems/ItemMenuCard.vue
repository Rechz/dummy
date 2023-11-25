<template>
    <div style="height: 470px; width:250px; position:relative; " class="d-flex flex-column justify-content-end align-items-center">
        <v-img :src="src" class="item-image"/>
    <div class="menu-card d-flex flex-column justify-content-end ">
        <div class="d-flex justify-content-between ">
            <h4>{{item.itemName}}</h4>
        </div>
        <h6>{{item.description}}</h6>
        <h4 class="text-right">{{item.price}}</h4>
        <h6 class="mb-0 pb-0">Availability</h6>
        <div class="inline">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">Yes</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">No</label>
        </div>
    </div>
    </div>

    

</div>
</template>

<script>
export default{
    props: ['item','src']
}
</script>
<style scoped>
.menu-card{
    background-color: #f2efe2cf;
    height: 380px;
    width: 260px;
    border-radius: 20px;
    padding: 10px;
    color: #6b4306;
    border: 2px solid #efc729;
    box-shadow: 0px 0px 8px rgba(150, 108, 46, 0.693);
}
.item-image{
    height: 190px;
    width:190px;
    border-radius: 50%;
    position: absolute;
    z-index: 10; 
    top:0;
    border: 2px solid #efc729;
    box-shadow: 0px 0px 8px rgba(150, 108, 46, 0.693);
}
</style>