<template>
  <div class="late-in-early-out">
    <div class="top-content">
      <div class="top-content-left">
        <div class="content-left-text">Đơn đi muộn về sớm</div>
        <div class="content-status">
          <div class="status-text">Trạng thái:</div>
          <ms-dropdown><b>Tất cả</b></ms-dropdown>
        </div>
      </div>
      <FormDetail :ishide="isHideForm" @closeForm="toCloseForm" ref="details"/>
      <div class="top-content-right">
        <ms-input class="input1" placeholder="Tìm kiếm" icon="search-icon" width="400px"></ms-input>
        <ms-button @buttonEvent="btnAddOnClick()"  class="btn-add" bgcolor="bg-color" icon="target-icon">Thêm</ms-button>
        <ms-button @buttonEvent="filterOpen = !filterOpen" class="btn-filter" bgcolor="bg-color-filter" icon="filter-icon"></ms-button>
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
      <ms-filter :open="filterOpen"></ms-filter>
    </div>
  </div>
  
</template>
<script>
import MsButton from '@/components/button/msButton.vue';
import MsFilter from '@/components/filter/msFilter.vue';
import MsGrid from '@/components/grid/msGrid.vue';
import msInput from '@/components/input/msInput.vue';
import FormDetail from './lateInEarlyOutDetail';
export default {
  components: { msInput, MsButton, MsGrid, MsFilter,FormDetail },
  data() {
    return {
      filterOpen: true,
      isHideForm: true,
    }
  },
  methods: {
    btnAddOnClick(){
      this.isHideForm = false;
      console.log(this.isHideForm);

      // this.$nextTick(() => {
      //   this.$refs.details.$refs.employeeCode.$refs.input.focus();
      // })
    },
    toCloseForm(value){
      this.isHideForm = value
    }
  }
};
</script>
<style>

</style>
MsDropdown
