<template>
    <ul class="ms-menu">
        <template v-for="(item,index) in menuItems">
            <router-link class="nav-item" v-if="!item.ishasDropdown" :to="item.url" :key="index">{{item.name}}</router-link>  
            <ms-dropdown class="nav-item" v-if="item.ishasDropdown" :dropdownItems="item.dropdownItems" :id="item.id" :key="index">{{item.name}}</ms-dropdown>
        </template>
    </ul>
</template>

<script>
export default {
    name: 'msMenu',
    props:{
        menuItems: {
            type: Array,
            default: () => []
        },
        ManagementRequests: {
            type: Array,
            default: () => []
        },
        TimeKeeping: {
            type: Array,
            default: () => []
        },
        TimeWorkings: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.ms-menu{
    display: flex;
    align-items: center;
}

</style>