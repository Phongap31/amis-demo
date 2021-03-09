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
            <div v-if="addOrEditChild=='Add'">Thêm đơn <span class="sub-title">- Đi muộn/Về sớm</span></div>
            <div v-if="addOrEditChild=='Edit'">Sửa đơn <span class="sub-title">- Đi muộn/Về sớm</span></div>
          </div>
          <div class="dialog-header-close">
            <div v-on:click="btnCancelOnClick">
              <i class="close-icon"></i>
            </div>
          </div>
        </div>
        <div class="dialog-body">
          <div class="dialog-body-left">
            <div class="row-body">
              <label for=""
                >Người nộp đơn <span class="input-require">*</span></label
              >
              <DxSelectBox
                v-model="obj.FullName"
                ref="name"
                class="ms-combobox"
                placeholder=""
                :search-enabled="true"
                :data-source="names"
                display-expr="value"
                value-expr="value"
              />
            </div>
            <div class="row-body">
              <label for=""
                >Đơn vị công tác <span class="input-require">*</span></label
              >
              <DxTextBox
                class="ms-combobox"
                :disabled="true"
                style="background: #bbb"
              />
            </div>
            <div class="row-body">
              <label for=""
                >Ngày nộp đơn <span class="input-require">*</span></label
              >
              <date-picker
                v-model="obj.HireDate"
                class="ms-combobox"
                format="DD/MM/YYYY"
                :lang="lang"
              ></date-picker>
            </div>
            <div class="row-body">
              <label for="">Từ ngày <span class="input-require">*</span></label>
              <date-picker
                v-model="obj.FromDate"
                class="ms-combobox"
              ></date-picker>
            </div>
            <div class="row-body">
              <label for=""
                >Đến ngày <span class="input-require">*</span></label
              >
              <date-picker
                v-model="obj.ToDate"
                class="ms-combobox"
              ></date-picker>
            </div>
            <div class="row-body" style="margin: 60px 0">
              <label for="">Áp dụng cho</label>
              <DxTagBox
                v-model="obj.ApplyFor"
                class="ms-combobox"
                style="height: 80px"
                placeholder="Áp dụng cho cả tuần"
                :search-enabled="false"
                :data-source="days"
                display-expr="value"
                value-expr="id"
              />
            </div>
            <div class="row-body" style="margin: 90px 0">
              <label for=""
                >Ca áp dụng <span class="input-require">*</span></label
              >
              <DxSelectBox
                v-model="obj.WorkShift"
                class="ms-combobox"
                style="height: 80px"
                placeholder=""
                :search-enabled="true"
                :data-source="names"
                display-expr="value"
                value-expr="id"
              />
            </div>
            <div class="row-body" style="margin: 90px 0">
              <label for=""
                >Lý do đi muộn/về sớm
                <span class="input-require">*</span></label
              >
              <DxTextArea
                v-model="obj.ResionFor"
                class="ms-combobox"
                style="height: 90px"
              />
            </div>
          </div>
          <div class="dialog-body-right">
            <div class="row-body">
              <label for="">Đi muộn đầu ca (phút)</label>
              <DxNumberBox
                v-model="obj.LateBegin"
                class="ms-combobox text-right"
                format="#,##0.##"
                :value="0"
                :min="0"
                :show-spin-buttons="true"
              />
            </div>
            <div class="row-body">
              <label for="">Về sớm giữa ca (phút)</label>
              <DxNumberBox
                v-model="obj.EarlyCenter"
                class="ms-combobox text-right"
                format="#,##0.##"
                :value="0"
                :min="0"
                :show-spin-buttons="true"
              />
            </div>
            <div class="row-body">
              <label for="">Đến muộn giữa ca (phút)</label>
              <DxNumberBox
                v-model="obj.LateCenter"
                class="ms-combobox text-right"
                format="#,##0.##"
                :value="0"
                :min="0"
                :show-spin-buttons="true"
              />
            </div>
            <div class="row-body">
              <label for="">Về sớm cuối ca (phút)</label>
              <DxNumberBox
                v-model="obj.EarlyEnd"
                class="ms-combobox text-right"
                format="#,##0.##"
                :value="0"
                :min="0"
                :show-spin-buttons="true"
              />
            </div>
            <div class="row-body">
              <label for=""
                >Người duyệt <span class="input-require">*</span></label
              >
              <DxSelectBox
                v-model="obj.ApprovedBy"
                class="ms-combobox"
                placeholder=""
                :search-enabled="true"
                :data-source="names"
                display-expr="value"
                value-expr="id"
              />
            </div>
            <div class="row-body" style="margin: 60px 0">
              <label for="">Người liên quan</label>
              <DxSelectBox
                v-model="obj.PersionRelation"
                class="ms-combobox"
                style="height: 80px"
                placeholder=""
                :search-enabled="true"
                :data-source="names"
                display-expr="value"
                value-expr="id"
              />
            </div>
            <div class="row-body" style="margin: 90px 0 60px 0">
              <label for="">Ghi chú</label>
              <DxTextArea
                v-model="obj.Note"
                class="ms-combobox"
                style="height: 80px"
              />
            </div>
            <div class="row-body">
              <label for=""
                >Trạng thái <span class="input-require">*</span></label
              >
              <DxSelectBox
                v-model="obj.Status"
                class="ms-combobox"
                placeholder=""
                :search-enabled="true"
                :data-source="status"
                display-expr="value"
                value-expr="id"
              />
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
          <ms-button
            @buttonEvent="btnAddOnClick"
            class="btn-apply"
            bgcolor="bg-color"
            >Lưu</ms-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DxNumberBox } from "devextreme-vue/number-box";
import DxTagBox from "devextreme-vue/tag-box";
import DxTextBox from "devextreme-vue/text-box";
import DxTextArea from "devextreme-vue/text-area";
import msInput from "../../../components/input/msInput.vue";
import DxSelectBox from "devextreme-vue/select-box";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/vi";
export default {
  components: {
    msInput,
    DxTextBox,
    DatePicker,
    DxSelectBox,
    DxTextArea,
    DxNumberBox,
    DxTagBox,
  },
  name: "lateInEarlyOutDetail",
  props: {
    ishide: {
      type: Boolean,
    },
    childEnitites: {
      type: Object,
      default: () => {},
    },
    addOrEditChild: {
      type: String,
      require: true
    },
  },
  methods: {
    btnAddOnClick() {
      if (this.addOrEditChild == "Add") {
        this.$emit("eventAdd", this.obj);
        this.btnCancelOnClick();
      }
      if(this.addOrEditChild == "Edit"){
        this.$emit("eventEdit", this.obj);
        this.btnCancelOnClick();
      }
    },
    // Truyền boolean đóng form chi tiết
    btnCancelOnClick() {
      this.$emit("closeForm", true);
    },
  },
  updated() {
    this.obj = this.childEnitites;
  },
  data() {
    return {
      obj: Object,
      names: [
        {
          id: 1,
          value: "Lê Hồng Phong",
        },
        {
          id: 2,
          value: "Lê Thanh Hương",
        },
        {
          id: 3,
          value: "Trần Thái Nguyên",
        },
      ],
      status: [
        {
          id: 1,
          value: "Chờ duyệt",
        },
        {
          id: 2,
          value: "Từ chối",
        },
        {
          id: 3,
          value: "Đã duyệt",
        },
      ],
      days: [
        {
          id: 1,
          value: "Thứ 2",
        },
        {
          id: 2,
          value: "Thứ 3",
        },
        {
          id: 3,
          value: "Thứ 4",
        },
        {
          id: 4,
          value: "Thứ 5",
        },
        {
          id: 5,
          value: "Thứ 6",
        },
        {
          id: 6,
          value: "Thứ 7",
        },
        {
          id: 7,
          value: "Chủ nhật",
        },
      ],
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
        monthBeforeYear: true,
      },
    };
  },
};
</script>
<style scoped>
.isHide {
  display: none;
}
</style>