<template>
  <div v-if="open" class="ms-filter">
    <div class="filter-content">
      <div class="header-filter">
        <div class="header-filter-text">Bộ lọc</div>
        <div @click="$emit('toggleFilter')" class="header-close">x</div>
      </div>
      <div class="abc">
        <ms-input
          class="input2"
          placeholder="Tìm kiếm"
          icon="search-icon"
        ></ms-input>
      </div>
      <div class="body-filter">
          <div v-for="(title, index) in titles" :key="index">
          <label class="container"
            >{{title}}
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      <div class="footer-filter">
        <ms-button bgcolor="bg-color-filter">Bỏ lọc</ms-button>
        <ms-button bgcolor="bg-color">Áp dụng</ms-button>
      </div>
    </div>
  </div>
</template>
<script>
import MsButton from "../button/msButton.vue";
import msInput from "../input/msInput.vue";
import service from "@/components/grid/data.js";
export default {
  components: { msInput, MsButton },
  props: {
    open: {
      type: Boolean,
    },
  },
  data() {
      return {
          titles: service.getTitles(),
      }
  },
};
</script>