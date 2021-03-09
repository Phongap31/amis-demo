<template>
  <div id="ms-grid">
    <DxDataGrid
      id="gridContainer"
      :data-source="employees"
      :allow-column-reordering="true"
      :allow-column-resizing="true"
      :show-borders="true"
      :hoverStateEnabled="true"
      :show-row-lines="true"
      height="calc(100vh - 195px)"
      :onContentReady="onContentReady"
    >
      <DxSelection :deferred="false" mode="multiple" show-check-boxes-mode='always' select-all-mode='page'/>
      <DxColumnFixing :enabled="true" />
      <!-- <DxPaging :page-size="10"/> -->
      <!-- <DxPager
      :show-page-size-selector="true"
      :allowed-page-sizes="pageSizes"
      :show-info="true"
    /> -->
      <DxColumn
        :width="60"
        :fixed="true"
        alignment="center"
        header-cell-template="icon-header"
      />
      <template #icon-header>
        <div id="link4" @click="toggleCustom()" class="custome-icon"></div>
      </template>

      <DxColumn
        v-for="(column, index) in titles"
        :key="index"
        :width="200"
        :caption="column.Caption"
        :data-field="column.FieldName"
      />

      <template #custom-header="data">
        <slot :name="data.data.column.dataField" :data="data"></slot>
      </template>
      <DxColumn
        :width="100"
        :fixed="true"
        fixed-position="right"
        alignment="center"
        cell-template="actions"
      />
      <template #actions="{ data }">
        <div :class="{ isHide: false }" class="col-actions">
          
          <div
            @click="clickOnEdit(data)"
            class="edit-icon"
          ></div>
          <div @click="clickOnRemove(data)" class="remove-icon"></div>
        </div>
      </template>
    </DxDataGrid>
    <div class="paging">
      <div class="paging-left">Tổng số bản ghi: <b>{{employees.length}}</b></div>
      <div class="paging-right">
        <select class="page-size" name="" id="">
          <option value="">5</option>
          <option value="">10</option>
          <option value="">50</option>
          <option value="">100</option>
        </select>
        <div class="from-to">Từ <b>1</b> đến <b>{{employees.length}}</b> bản ghi</div>
        <div class="pre-icon"></div>
        <div class="next-icon"></div>
      </div>
    </div>
    <DialogRemove :isHideDialog="isDialog" @closeFormRemove="callCloseFormRemove" @callDeleteOnClick="onRemoved"/>
    <DxPopover
      ref="popupCustome"
      :width="255"
      :height="450"
      :show-borders="true"
      :visible="isCustome"
      target="#link4"
      position="bottom"
      @hidden="isCustome = false"
    >
      <div class="custome-header">
        <div class="c-column-text">Tùy chỉnh cột</div>
        <div @click="isCustome = false" class="c-column-close">
          <i class="close-icon"></i>
        </div>
      </div>
      <div>
        <ms-input ref="searchInput" placeholder="Tìm kiếm"></ms-input>
      </div>
      <draggable class="custome-body"
        :titles="titles"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="dragging = false"
      >
        <div
          class="custome-element"
          v-for="(title, index) in titles"
          :key="index"
        >
          <label class="container"
            >{{ title.Caption }}
            <input type="checkbox" checked="checked"/>
            <span class="checkmark"></span>
          </label>
          <div class="menu-icon"></div>
        </div>
      </draggable>
      <div class="custome-footer">
        <ms-button bgcolor="bg-color-filter">Mặc định</ms-button>
        <ms-button class="btn-apply" bgcolor="bg-color">Lưu</ms-button>
      </div>
    </DxPopover>
  </div>
</template>
<script>
import {
  DxDataGrid,
  DxColumn,
  DxColumnChooser,
  DxColumnFixing,
  DxPaging,
  DxSelection,
  DxPager,
} from "devextreme-vue/data-grid";
import { DxPopover } from "devextreme-vue/popover";
import DialogRemove from './dialogRemove'
import service from "../../data.js";
import draggable from "vuedraggable";

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxColumnChooser,
    DxColumnFixing,
    DxPaging,
    DxSelection,
    DxPopover,
    DxPager,
    DialogRemove,
    draggable
  },
  data() {
    return {
      employees: service.getEmployees(),
      titles: service.getTitles(),
      dragging: false,
      isCustome: false,
      isAction: false,
      isDialog: true,
      pageSizes: [5, 10, 50, 100],
      animationConfig: {
        show: {
          type: "pop",
          from: {
            scale: 0,
          },
          to: {
            scale: 1,
          },
        },
        hide: {
          type: "fade",
          from: 1,
          to: 0,
        },
      },
      idForRemove: String
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    }
  },
  methods: {
    // Mở form Edit
    clickOnEdit(data){
      this.$emit('openEditForm', data.row.data)
    },
    // Mở form xóa đơn và lấy ID
    clickOnRemove(data) {
      this.isDialog = false;
      this.idForRemove = data.row.data.ID;
    },

    //Thực hiện xóa theo ID
    onRemoved(){
      this.employees = this.employees.filter(emp => emp.ID != this.idForRemove)
      this.$notify({
        group: "foo",
        type: "success",
        text: "Xóa đơn thành công!!!",
        speed: 1000,
      });
    },

    //Set lại vị trí selection
    onContentReady: (e) => {
      e.component.columnOption("command:select", "visibleIndex", 0);
    },
    calculateCellValue(data) {
      return [data.Title, data.FirstName, data.LastName].join(" ");
    },

    //Sự kiện đóng mở form tùy chỉnh
    toggleCustom() {
      this.isCustome = !this.isCustome;

      this.$nextTick(() => {
        this.$refs.searchInput.$refs.input.focus();
      });
    },

    callCloseFormRemove(value){
      this.isDialog = value
    }
  },
};
</script>
<style scoped>
#gridContainer {
  height: 440px;
}
</style>
<style>
.dx-datagrid .dx-row-lines > td {
  border-left: none !important;
  border-right: none !important;
}
.dx-datagrid-headers .dx-datagrid-table .dx-row > td {
  border-left: none !important;
}
</style>
