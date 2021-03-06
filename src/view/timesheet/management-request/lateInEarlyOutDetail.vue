<template>
  <div>
    <div
      class="m-dialog dialog-detail"
      title="Thông tin nhân viên"
      :class="{ isHide: ishide }"
    >
      <div class="dialog-modal"></div>
      <div class="dialog-content">
        <div class="dialog-header">
          <div class="dialog-header-title">
            Thêm đơn <span class="sub-title">- Đi muộn/Về sớm</span>
          </div>
          <div class="dialog-header-close">
            <div v-on:click="btnCancelOnClick">
              <i class="fas fa-times"></i>
            </div>
          </div>
        </div>
        <div class="dialog-body">
          <div class="dialog-body-left">
            <div class="row-body">
              <label for=""
                >Người nộp đơn <span class="input-require">*</span></label
              >
              <DxSelectBox class="ms-combobox" />
            </div>
            <div class="row-body">
              <label for=""
                >Đơn vị công tác <span class="input-require">*</span></label
              >
              <DxTextBox class="ms-combobox" :disabled="true" style="background: #bbb"/>
            </div>
            <div class="row-body">
              <label for=""
                >Ngày nộp đơn <span class="input-require">*</span></label
              >
              <date-picker v-model="time" class="ms-combobox"></date-picker>
            </div>
            <div class="row-body">
              <label for="">Từ ngày <span class="input-require">*</span></label>
              <date-picker class="ms-combobox"></date-picker>
            </div>
            <div class="row-body">
              <label for=""
                >Đến ngày <span class="input-require">*</span></label
              >
              <date-picker class="ms-combobox"></date-picker>
            </div>
            <div class="row-body" style="margin: 60px 0">
              <label for="">Áp dụng cho</label>
              <DxSelectBox class="ms-combobox" style="height: 80px" />
            </div>
            <div class="row-body" style="margin: 90px 0">
              <label for=""
                >Ca áp dụng <span class="input-require">*</span></label
              >
              <DxSelectBox class="ms-combobox" style="height: 80px" />
            </div>
            <div class="row-body" style="margin: 90px 0">
              <label for="">Lý do đi muộn/về sớm <span class="input-require">*</span></label>
              <DxTextArea class="ms-combobox" style="height: 90px" />
            </div>
          </div>
          <div class="dialog-body-right">
            <div class="row-body">
              <label for="">Đi muộn đầu ca (phút)</label>
              <DxNumberBox class="ms-combobox" format="#,##0.##" :value="0" :min="0" :show-spin-buttons="true" />
            </div>
            <div class="row-body">
              <label for="">Về sớm giữa ca (phút)</label>
              <DxNumberBox class="ms-combobox" format="#,##0.##" :value="0" :min="0" :show-spin-buttons="true" />
            </div>
            <div class="row-body">
              <label for="">Đến muộn giữa ca (phút)</label>
              <DxNumberBox class="ms-combobox" format="#,##0.##" :value="0" :min="0" :show-spin-buttons="true" />
            </div>
            <div class="row-body">
              <label for="">Về sớm cuối ca (phút)</label>
              <DxNumberBox class="ms-combobox" format="#,##0.##" :value="0" :min="0" :show-spin-buttons="true" />
            </div>
            <div class="row-body">
              <label for=""
                >Người duyệt <span class="input-require">*</span></label
              >
              <DxSelectBox class="ms-combobox" />
            </div>
            <div class="row-body" style="margin: 60px 0">
              <label for="">Người liên quan</label>
              <DxSelectBox class="ms-combobox" style="height: 80px" />
            </div>
            <div class="row-body" style="margin: 90px 0 60px 0">
              <label for="">Ghi chú</label>
              <DxTextArea class="ms-combobox" style="height: 80px" />
            </div>
            <div class="row-body">
              <label for=""
                >Trạng thái <span class="input-require">*</span></label
              >
              <DxSelectBox class="ms-combobox" />
            </div>
          </div>
        </div>
        <div class="dialog-footer">
          <ms-button
            id="cancle-filter"
            @buttonEvent="btnCancelOnClick"
            class="cancle-filter"
            bgcolor="bg-color-filter"
            >Hủy</ms-button
          >
          <ms-button class="btn-apply" bgcolor="bg-color">Lưu</ms-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DxNumberBox } from "devextreme-vue/number-box";
import DxTextBox from 'devextreme-vue/text-box';
import DxTextArea from "devextreme-vue/text-area";
import msInput from "../../../components/input/msInput.vue";
import DxSelectBox from "devextreme-vue/select-box";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: { msInput,DxTextBox, DatePicker, DxSelectBox, DxTextArea, DxNumberBox },
  name: "lateInEarlyOutDetail",
  props: {
    ishide: {
      type: Boolean,
    },
  },
  methods: {
    btnCancelOnClick() {
      this.$emit("closeForm", true);
    },
  },
  data() {
    return {
      products: null,
      values: ["value1", "value2"],
      time: new Date(),
    };
  },
};
</script>
<style scoped>
.isHide {
  display: none;
}
</style>