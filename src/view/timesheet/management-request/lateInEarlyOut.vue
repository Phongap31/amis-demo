<template>
  <div class="late-in-early-out">
    <div class="top-content">
      <div class="top-content-left">
        <div class="content-left-text">Đơn đi muộn về sớm</div>
        <div class="content-status">
          <div class="status-text">Trạng thái:</div>
          <select class="status-dropdown" name="" id="">
            <option value="all">Tất cả</option>
            <option value="value1">Chờ duyệt</option>
            <option value="value1">Từ chối</option>
            <option value="value1">Đã duyệt</option>
          </select>
        </div>
      </div>
      <FormDetail
        :ishide="isHideForm"
        @closeForm="toCloseForm"
        @eventAdd="eventAddOn"
        @eventEdit="eventEditOn"
        ref="details"
        :childEnitites="entities"
        :addOrEditChild="addOrEdit"
      />
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
      <ms-grid @openEditForm="callEditForm">
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
import DxSelectBox from "devextreme-vue/select-box";
import FormDetail from './lateInEarlyOutDetail';
import service from "@/data.js";


export default {
  components: { msInput, DxSelectBox, MsButton, MsGrid, MsFilter,FormDetail },
  data() {
    return {
      employees: service.getEmployees(),
      filterOpen: false,
      isHideForm: true,
      addOrEdit: String,
      entities: Object,
      idForEdit: String,
      newApp: {
        ID: 13,
        FullName: "",
        Position: "",
        HireDate: new Date(),
        FromDate: null,
        ToDate: null,
        ApplyFor: "",
        WorkShift: "",
        ResionFor: "",
        LateBegin: 0,
        EarlyCenter: 0,
        LateCenter: 0,
        EarlyEnd: 0,
        ApprovedBy: "",
        PersionRelation: "",
        Note: "",
        Status: "",
      },
    };
  },
  methods: {
    // Event mở form thông tin chi tiết
    btnAddOnClick() {
      this.isHideForm = false;
      this.addOrEdit = "Add";
      this.entities = this.newApp;
      //Tự động focus vào select box đầu tiên
      this.$nextTick(() => {
        this.$refs.details.$refs.name.instance.focus();
      });
    },

    //Thực hiện thêm mới
    eventAddOn(obj){
      this.employees.push(obj);
      this.$notify({
        group: "foo",
        type: "success",
        // title: "Message",
        text: "Thêm đơn mới thành công!!!",
        speed: 1000,
      });
    },

    // Mở form edit
    callEditForm(data) {
      this.isHideForm = false;
      this.addOrEdit = "Edit";
      this.entities = data;
      this.idForEdit = data.ID;

      //Tự động focus vào select box đầu tiên
      // this.$nextTick(() => {
      //   this.$refs.details.$refs.name.instance.focus();
      // });
    },

    eventEditOn(data){
      this.employees = this.employees.map(emp => {
        if(emp.ID == data.ID){
          emp = data
        }
      });
      this.$notify({
        group: "foo",
        type: "success",
        text: "Sửa đơn thành công!!!",
        speed: 1000,
      });
    },

    //Đóng mở form lọc cột
    toggleFilter() {
      this.filterOpen = !this.filterOpen;
      if (this.filterOpen) {
        document.getElementById("ms-grid").style.width = "calc(100% - 280px)";
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
