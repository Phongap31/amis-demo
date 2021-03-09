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
          <div v-for="(title, index) in titles" :key="index" :class="{'filter-background': title.isChecked}">
          <label class="container-filter"
            >{{title.Caption}}
            <input type="checkbox" />
            <span @click="title.isChecked = !title.isChecked" class="checkmark-filter"></span>
          </label>
          <div class="filter-choose" v-if="title.isChecked">
            <DxSelectBox
                ref="name"
                placeholder=""
                class="filter-combobox"
                :search-enabled="true"
                :data-source="names"
              />
            <DxTextBox class="filter-combobox"/>
          </div>
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
import DxSelectBox from "devextreme-vue/select-box";
import DxTextBox from "devextreme-vue/text-box";


export default {
  components: { msInput, MsButton,DxSelectBox,DxTextBox },
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
    },
    test(){
      this.isChecked = !this.isChecked
    }
  }
};
</script>