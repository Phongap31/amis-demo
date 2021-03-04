<template>
    <div @click="test" class="dropdown">
        <div>
        <slot /> <i class="fas fa-chevron-down"></i>
        </div>
        <ms-drop-down-menu :isHide="isHideDropdownMenu"></ms-drop-down-menu>
    </div>
</template>
<script>
export default {
    name: 'msDropdown',
    methods: {
        test(){
            this.isHideDropdownMenu = false
        }
    },
    data() {
        return {
            isHideDropdownMenu: true,
        }
    },

}
</script>
<style scoped>

</style>