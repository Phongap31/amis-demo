<template>
    <div  class="ms-input">
        <div v-if="icon" :class="icon"></div>
        <input :width="width" :value="value" @input="emit" ref="input" :type="type" :placeholder="placeholder" >
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
        },
        value: {
            type: String
        }
    },
    methods:{
        emit(e){
            this.$emit("update:value",e.target.value)
        }
    }
}
</script>

