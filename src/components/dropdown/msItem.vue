<template>
  <div class="item" @click="doFunc">
    <router-link class="link-item" :to="item.url">
      <slot />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "msItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    closeDropdown: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    doFunc() {
      console.log(this.item.link);
      this.closeDropdown();
    },
  },
};
</script>

<style scoped>
.item {
  display: block;
  width: 100%;
  padding: 10px 0;
  transition: 0.3s;
  position: relative;
  text-decoration: none;
}
.item:hover {
  background: #ddd;
  color: #000 !important;
  border-radius: 4px;
}
.link-item{
    text-decoration: none;
    padding: 0 5px;
    color: rgba(0,0,0,0.7);
}
</style>