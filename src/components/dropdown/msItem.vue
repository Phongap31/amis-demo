<template>
  <div class="item" @click="doFunc">
    <router-link class="link-item" :to="item.url">
      <slot />
      <div :class="{isHide: !isActiveDropdown}" class="dropdown-icon"></div>
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
      this.closeDropdown();
      this.isActiveDropdown = true;
    },
  },
  data() {
    return {
      isActiveDropdown: false
    }
  },
};
</script>

<style scoped>
.isHide{
  display: none;
}
.item {
  display: block;
  width: 100%;
  padding: 10px 0;
  transition: 0.3s;
  position: relative;
  text-decoration: none;
}
.item:hover {
  background: var(--dropdown-item-hover);
  color: #000 !important;
  border-radius: 4px;
}
.link-item{
    text-decoration: none;
    padding: 0 5px;
    color: var(--black);
    display: flex;
    align-items: center;
    position: relative;
}
.link-item:hover{
  color: var(--dropdown-item-active-color);
}
</style>