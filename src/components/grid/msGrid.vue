<template>
  <div class="ms-grid">
    <DxDataGrid
      id="gridContainer"
      :data-source="employees"
      :allow-column-reordering="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      :show-borders="true"
      :show-row-lines="true"
      :show-column-lines="false"
      height="calc(100vh - 150px)"
      width="auto"
      :onContentReady="onContentReady"
    >
      <!-- <DxColumnChooser
      id="columnChooser"
        :enabled="true"
        mode="select"
        height="400"
        title="Tùy chỉnh cột"
        allowSearch="true"
      /> -->

      <DxColumnFixing :enabled="true" />
      <!-- <DxPaging :page-size="10"/> -->
      <DxColumn
        :height="50"
        alignment="center"
        header-cell-template="icon-header"
      />
      <template #icon-header>
        <div id="link4" @click="test()" class="custome-icon"></div>
      </template>

      <DxSelection :deferred="false" mode="multiple" :visible-index="2" />
      <!-- <DxColumn
        :height="50"
        header-cell-template="title-header"
      /> -->
      <!-- <template #title-header>
        <div style="color: #000; ">
          Người duyệt
        </div>
      </template> -->
      <DxColumn
        data-field="BirthDate"
        data-type="date"
        caption="Ngày lập"
        :height="50"
      />
      <DxColumn
        data-field="HireDate"
        data-type="date"
        caption="Đi muộn đầu ca"
        :height="50"
      />
      <DxColumn data-field="Position" caption="Về sớm giữa ca" :height="50" />
      <DxColumn
        :width="230"
        data-field="Address"
        caption="Vào muộn giữa ca"
        :height="50"
      />
      <DxColumn data-field="City" caption="Về sớm cuối ca" :height="50" />
      <DxColumn data-field="State" caption="Áp dụng cho" :height="50" />
      <DxColumn data-field="Zipcode" caption="Trạng thái" :height="50" />
    </DxDataGrid>
    <DxPopover
      :width="255"
      :height="450"
      :visible="isCustome"
      target="#link4"
      position="bottom"
      @hidden="isCustome = false"
    >
      <div class="custome-header">
        <div class="c-column-text">Tùy chỉnh cột</div>
        <div class="c-column-close">x</div>
      </div>
      <div>
        <ms-input placeholder=" Tìm kiếm"></ms-input>
      </div>
      <div class="custome-body">
        <div class="custome-element" v-for="(title, index) in titles" :key="index">
          <label class="container"
            >{{title}}
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
  },
  data() {
    return {
      employees: service.getEmployees(),
      titles: service.getTitles(),
      isCustome: false,
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
    onContentReady(e) {
      if (e.component.shouldSkipNextReady) {
        e.component.shouldSkipNextReady = false;
      } else {
        e.component.shouldSkipNextReady = true;
        e.component.columnOption("command:select", "visibleIndex", -1);
        e.component.updateDimensions();
      }
    },
    calculateCellValue(data) {
      return [data.Title, data.FirstName, data.LastName].join(" ");
    },
    onRowPrepared(e) {
      e.rowElement.style.height = "50px";
    },
    test() {
      this.isCustome = true;
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
