<template>
  <div class="late-in-early-out">
    <div class="top-content">
      <div class="top-content-left">
        <div class="content-left-text">Đơn đi muộn về sớm</div>
        <div class="content-status">
          <div class="status-text">Trạng thái:</div>
          <select class="status-dropdown" name="" id="">
            <option value="all">Tất cả</option>
            <option value="value1">Value 1</option>
            <option value="value1">Value 2</option>
            <option value="value1">Value 3</option>
          </select>
        </div>
      </div>
      <FormDetail :ishide="isHideForm" @closeForm="toCloseForm" ref="details" />
      <div class="top-content-right">
        <ms-input
          class="input1"
          placeholder="Tìm kiếm"
          icon="search-icon"
          width="400px"
        ></ms-input>
        <ms-button
          @buttonEvent="btnAddOnClick()"
          class="btn-add"
          bgcolor="bg-color"
          icon="target-icon"
          >Thêm</ms-button
        >
        <ms-button
          @buttonEvent="toggleFilter()"
          class="btn-filter"
          bgcolor="bg-color-filter"
          icon="filter-icon"
        ></ms-button>
      </div>
    </div>
    <div class="content-feature">
      <ms-grid>
        <!-- <template v-slot:FirstName="{data}">
          <div style="color: red;">
            {{data.data.column.caption}}
          </div>
        </template> -->
      </ms-grid>
      <ms-filter
        ref="searchFilter"
        @closeFilter="toCloseFilter"
        :open="filterOpen"
      ></ms-filter>
    </div>
  </div>
</template>
<script>
import MsButton from "@/components/button/msButton.vue";
import MsFilter from "@/components/filter/msFilter.vue";
import MsGrid from "@/components/grid/msGrid.vue";
import msInput from "@/components/input/msInput.vue";
import FormDetail from "./lateInEarlyOutDetail";
import DxSelectBox from "devextreme-vue/select-box";

export default {
  components: { msInput, DxSelectBox, MsButton, MsGrid, MsFilter, FormDetail },
  data() {
    return {
      filterOpen: false,
      isHideForm: true,
    };
  },
  methods: {
    // Event mở form thông tin chi tiết
    btnAddOnClick() {
      this.isHideForm = false;

      //Tự động focus vào select box đầu tiên
      this.$nextTick(() => {
        this.$refs.details.$refs.name.instance.focus();
      });
    },

    //Đóng mở form lọc cột
    toggleFilter() {
      this.filterOpen = !this.filterOpen;
      if (this.filterOpen) {
        document.getElementById("ms-grid").style.width = "calc(100% - 250px)";
        //Tự động focus vào ô input
        this.$nextTick(() => {
          this.$refs.searchFilter.$refs.inputFilter.$refs.input.focus();
        });
      } else {
        document.getElementById("ms-grid").style.width = "100%";
      }
    },

    //Đóng form chi tiết
    toCloseForm(value) {
      this.isHideForm = value;
    },

    //Đóng form lọc
    toCloseFilter(value) {
      this.filterOpen = value;
    },
  },
  // watch: {
  //   filterOpen: function() {
  //     document.getElementsByClassName('filter-icon').style.backgroundColor = 'red';
  //   }
  // }
};
</script>
<style>
</style>
