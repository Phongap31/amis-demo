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
      <div class="top-content-right">
        <ms-input class="input1" placeholder="Tìm kiếm" icon="search-icon" width="400px"></ms-input>
        <ms-button @toggleFilter="test()"  class="btn-add" bgcolor="bg-color" icon="target-icon">Thêm</ms-button>
        <ms-button @toggleFilter="filterOpen = !filterOpen" class="btn-filter" bgcolor="bg-color-filter" icon="filter-icon"></ms-button>
      </div>
    </div>
    <div class="content-feature">
      <ms-grid></ms-grid>
      <ms-filter :open="filterOpen"></ms-filter>
    </div>
  </div>
</template>
<script>
import MsButton from '@/components/button/msButton.vue';
import MsFilter from '@/components/filter/msFilter.vue';
import MsGrid from '@/components/grid/msGrid.vue';
import msInput from '@/components/input/msInput.vue';
export default {
  components: { msInput, MsButton, MsGrid, MsFilter },
  data() {
    MsButton
    return {
      filterOpen: true,
    }
  },
  methods: {
    test(){
      console.log('abc');
    }
  }
};
</script>
<style>

</style>
MsDropdown
