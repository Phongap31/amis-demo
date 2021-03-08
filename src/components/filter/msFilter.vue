<template>
  <div v-if="open" class="ms-filter">
    <div class="filter-content">
      <div class="header-filter">
        <div class="header-filter-text">Bộ lọc</div>
        <div @click="closeFilter()" class="header-close"><i class="close-icon"></i></div>
      </div>
      <div class="abc">
        <ms-input
        ref="inputFilter"
          class="input2"
          placeholder="Tìm kiếm"
          icon="search-icon"
        ></ms-input>
      </div>
      <div class="body-filter">
          <div v-for="(title, index) in titles" :key="index">
          <label class="container-filter"
            >{{title.Caption}}
            <input type="checkbox" />
            <span class="checkmark-filter"></span>
          </label>
        </div>
      </div>
      <div class="footer-filter">
        <ms-button class="cancle-filter" bgcolor="bg-color-filter">Bỏ lọc</ms-button>
        <ms-button class="apply-filter" bgcolor="bg-color">Áp dụng</ms-button>
      </div>
    </div>
  </div>
</template>
<script>
import MsButton from "../button/msButton.vue";
import msInput from "../input/msInput.vue";
import service from "../../data.js";
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
  methods: {
    closeFilter(){
      document.getElementById('ms-grid').style.width = '100%';
      this.$emit('closeFilter', false);
    }
  }
};
</script>