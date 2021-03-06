<template>
  <div class="ms-grid">
    <DxDataGrid
      id="gridContainer"
      :data-source="employees"
      :allow-column-reordering="true"
      :allow-column-resizing="true"
      :show-borders="true"
      :show-row-lines="true"
      :show-row-column="false"
      height="calc(100vh - 165px)"
      :onContentReady="onContentReady"
    >
      <DxSelection :deferred="false" mode="multiple"/>
      <DxColumnFixing :enabled="false" />
      <DxPaging :page-size="10"/>
      <DxPager
      :show-page-size-selector="true"
      :allowed-page-sizes="pageSizes"
      :show-info="true"
    />
      <DxColumn
      :width="60"
      :fixed="true"
        alignment="center"
        header-cell-template="icon-header"
      />
      <template #icon-header>
        <div id="link4" @click="test()" class="custome-icon"></div>
      </template>

      
      <DxColumn
      v-for="(column,index) in titles" :key="index"
      :width="200"
      :height="80"
        :caption="column.Caption"
        :data-field="column.FieldName"
      />

      <template #custom-header="data">
         <slot :name="data.data.column.dataField" :data="data"></slot>
        </template>
       <DxColumn 
        :width="100"
        caption="Actions"
       />
        
    </DxDataGrid>
    <DxPopover
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
        <div @click="isCustome=false" class="c-column-close"><i class="fas fa-times"></i></div>
      </div>
      <div>
        <ms-input placeholder="Tìm kiếm"></ms-input>
      </div>
      <div class="custome-body">
        <div class="custome-element" v-for="(title, index) in titles" :key="index">
          <label class="container"
            >{{title.Caption}}
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </label>
          <div class="menu-icon"></div>
        </div>
      </div>
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
  DxPager
} from "devextreme-vue/data-grid";
import { DxPopover } from "devextreme-vue/popover";

import service from "./data.js";

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxColumnChooser,
    DxColumnFixing,
    DxPaging,
    DxSelection,
    DxPopover,
    DxPager
  },
  data() {
    return {
      employees: service.getEmployees(),
      titles: service.getTitles(),
      isCustome: false,
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
    };
  },
  methods: {
    testdata(data){
      debugger
    },
    onContentReady: e => {
        e.component.columnOption("command:select", "visibleIndex", 0);
    },
    calculateCellValue(data) {
      return [data.Title, data.FirstName, data.LastName].join(" ");
    },
    onRowPrepared(e) {
      e.rowElement.style.height = "50px";
    },
    test() {
      this.isCustome = !this.isCustome;
    },
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
