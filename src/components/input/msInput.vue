<template>
    <div :width="width" class="ms-input">
        <div v-if="icon" :class="icon"></div>
        <input :type="type" :placeholder="placeholder" >
    </div>
</template>

<script>
export default {
    name: 'msInput',
    props: {
        icon:{
            type: String
        },
        placeholder:{
            type: String
        },
        type: {
            type: String,
            default: 'text'
        },
        width: {
            type: String
        }
    }
}
</script>

