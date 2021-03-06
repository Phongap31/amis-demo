<template>
  <div :id="id" class="dropdown">
    <div @click="isOpen = !isOpen" :class="{ isActive: isOpen }">
      <slot /> <i class="fas fa-chevron-down"></i>
    </div>
    <div class="dropdown-list" v-if="isOpen">
      <ms-item
        v-for="(item, index) in dropdownItems"
        :key="index"
        :item="item"
        :closeDropdown="callToClose"
      >
        {{ item.name }}
      </ms-item>
    </div>
  </div>
</template>
<script>
import msItem from "./msItem.vue";
export default {
  components: { msItem },
  name: "msDropdown",
  props: {
    dropdownItems: {
      type: Array,
      default: () => [],
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    test() {
      this.isHideDropdownMenu = false;
    },
    callToClose() {
      this.isOpen = false;
    },
    checkClickOn(event) {
      if (!document.getElementById(this.id).contains(event.target)) {
        this.isOpen = false;
      }
    },
  },
  created() {
    window.addEventListener("click", this.checkClickOn);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.checkClickOn);
  },
  data() {
    return {
      isHideDropdownMenu: true,
      isOpen: false,
    };
  },
};
</script>
<style scoped>
/* .isActive {
  border-radius: 50px;
  background: #fa6000;
  color: #fff !important;
} */
.dropdown {
  position: relative;
  width: fit-content;
}
.dropdown-list {
  background: var(--white);
  margin-top: 15px;
  position: absolute;
  z-index: 10;
  width: 200px;
  padding: 20px 10px;
  left: -80px;
  border-radius: 4px;
}
</style>