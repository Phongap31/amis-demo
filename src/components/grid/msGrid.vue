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
    >
      <DxColumnChooser
      id="columnChooser"
        :enabled="true"
        mode="select"
        height="400"
        title="Tùy chỉnh cột"
        allowSearch="true"
      />
      <DxColumnFixing :enabled="true" />
      <DxPaging :page-size="5"/>
      <DxColumn
        :width="150"
        :height="50"
      />
      <DxColumn
        v-for="(column, index) in columns" :key="index"
        :height="50"
        caption="Người duyệt"
      />
      <DxColumn data-field="BirthDate" data-type="date" caption="Ngày lập" :height="50"/>
      <DxColumn data-field="HireDate" data-type="date" caption="Đi muộn đầu ca" :height="50" />
      <DxColumn data-field="Position" alignment="center" caption="Về sớm giữa ca" :height="50"/>
      <DxColumn :width="230" data-field="Address" caption="Vào muộn giữa ca" :height="50"/>
      <DxColumn data-field="City" caption="Về sớm cuối ca" :height="50"/>
      <DxColumn data-field="State" caption="Áp dụng cho" :height="50"/>
      <DxColumn :visible="false" data-field="Zipcode" caption="Trạng thái" :height="50"/>
      <!-- <DxColumn data-field="HomePhone" :height="50"/>
      <DxColumn data-field="MobilePhone" :height="50"/>
      <DxColumn data-field="Skype" :height="50"/>
      <DxColumn data-field="Email" :height="50"/> -->
    </DxDataGrid>
  </div>
</template>
<script>
import {
  DxDataGrid,
  DxColumn,
  DxColumnChooser,
  DxColumnFixing,
  DxPaging, 
} from "devextreme-vue/data-grid";

import service from "./data.js";

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxColumnChooser,
    DxColumnFixing,
  },
  data() {
    return {
      employees: service.getEmployees(),
    };
  },
  methods: {
    calculateCellValue(data) {
      return [data.Title, data.FirstName, data.LastName].join(" ");
    },
  },
};
</script>
<style scoped>
#gridContainer {
  height: 440px;
}
</style>
