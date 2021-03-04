<template>
    <ul :class="{isHide:isHide}">
        <slot />
    </ul>
</template>
<script>
export default {
    name: 'msDropdownmenu',
    props: ['isHide']
}
</script>
