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
          @buttonEvent="filterOpen = !filterOpen"
          class="btn-filter"
          bgcolor="bg-color-filter"
          icon="filter-icon"
        ></ms-button>
      </div>
    </div>
    <div class="content-feature">
      <!-- <DxSelectBox
        class="ms-combobox"
        placeholder=""
        :search-enabled="true"
        :data-source="products"
        display-expr="value"
        value-expr="id"
      /> -->
      <ms-grid>
        <!-- <template v-slot:FirstName="{data}">
          <div style="color: red;">
            {{data.data.column.caption}}
          </div>
        </template> -->
      </ms-grid>
      <ms-filter @closeFilter="toCloseFilter" :open="filterOpen"></ms-filter>
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
      filterOpen: true,
      isHideForm: true,
      // products: [
      //   {
      //     'id': 1,
      //     'value': "value 1",
      //   },
      //   {
      //     'id': 2,
      //     'value': "value 2",
      //   },
      //   {
      //     'id': 3,
      //     'value': "value 3",
      //   },
      // ],
    };
  },
  methods: {
    btnAddOnClick() {
      this.isHideForm = false;
      console.log(this.isHideForm);

      // this.$nextTick(() => {
      //   this.$refs.details.$refs.employeeCode.$refs.input.focus();
      // })
    },
    toCloseForm(value) {
      this.isHideForm = value;
    },
    toCloseFilter(value) {
      this.filterOpen = value;
    },
  },
};
</script>
<style>
</style>
MsDropdown
