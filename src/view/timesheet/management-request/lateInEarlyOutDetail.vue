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
            <div v-if="addOrEditChild == 'Add'">
              Thêm đơn <span class="sub-title">- Đi muộn/Về sớm</span>
            </div>
            <div v-if="addOrEditChild == 'Edit'">
              Sửa đơn <span class="sub-title">- Đi muộn/Về sớm</span>
            </div>
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
              <div v-if="isError" class="mi-icon-error"></div>
              <DxSelectBox
                v-model="vFullName"
                ref="name"
                class="ms-combobox"
                placeholder=""
                :search-enabled="true"
                :data-source="names"
                display-expr="value"
                value-expr="value"
              />
              <!-- <DxValidator>
                  <DxRequiredRule message="This field must required" />
                </DxValidator> -->
              <!-- </DxSelectBox> -->
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
            <div class="row-body row-date">
              <label for=""
                >Ngày nộp đơn <span class="input-require">*</span></label
              >
              <div v-if="isErrorHireDate" class="mi-icon-error"></div>
              <date-picker
                v-model="vHireDate"
                class="ms-combobox"
                type="date"
                format="DD/MM/YYYY"
                valueType="format"
                :lang="lang"
              ></date-picker>
            </div>
            <div class="row-body row-date">
              <label for="">Từ ngày <span class="input-require">*</span></label>
              <div v-if="isErrorFromDate" class="mi-icon-error"></div>
              <date-picker
                v-model="vFromDate"
                class="ms-combobox"
                type="date"
                format="DD/MM/YYYY"
                valueType="format"
                :lang="lang"
              ></date-picker>
            </div>
            <div class="row-body row-date">
              <label for=""
                >Đến ngày <span class="input-require">*</span></label
              >
              <div v-if="isErrorToDate" class="mi-icon-error"></div>
              <date-picker
                v-model="vToDate"
                class="ms-combobox"
                type="date"
                format="DD/MM/YYYY"
                valueType="format"
                :lang="lang"
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
                value-expr="value"
              />
            </div>
            <div class="row-body" style="margin: 90px 0">
              <label for=""
                >Ca áp dụng <span class="input-require">*</span></label
              >
              <div v-if="isErrorWorkShift" class="mi-icon-error"></div>
              <DxSelectBox
                v-model="vWorkShift"
                class="ms-combobox"
                style="height: 80px"
                placeholder=""
                :search-enabled="true"
                :data-source="names"
                display-expr="value"
                value-expr="id"
              >
               
              </DxSelectBox>
            </div>
            <div class="row-body row-textarea" style="margin: 90px 0 40px 0">
              <label for=""
                >Lý do đi muộn/về sớm
                <span class="input-require">*</span></label
              >
              <div v-if="isErrorResionFor" class="mi-icon-error"></div>
              <DxTextArea
                v-model="vResionFor"
                class="ms-combobox"
                style="height: 90px"
              >
            
              </DxTextArea>
            </div>
            <br />
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
              <div v-if="isErrorApprovedBy" class="mi-icon-error"></div>
              <DxSelectBox
                v-model="vApprovedBy"
                class="ms-combobox"
                placeholder=""
                :search-enabled="true"
                :data-source="names"
                display-expr="value"
                value-expr="value"
              >
                <!-- <DxValidator>
                  <DxRequiredRule message="This field must required" />
                </DxValidator> -->
              </DxSelectBox>
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
                value-expr="value"
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
              <div v-if="isErrorStatus" class="mi-icon-error"></div>
              <DxSelectBox
                v-model="vStatus"
                class="ms-combobox"
                placeholder=""
                :search-enabled="true"
                :data-source="status"
                display-expr="value"
                value-expr="value"
              >
                <!-- <DxValidator>
                  <DxRequiredRule message="This field must required" />
                </DxValidator> -->
              </DxSelectBox>
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
// import {
//   DxGroupItem,
//   DxSimpleItem,
//   DxButtonItem,
//   DxLabel,
//   DxRequiredRule,
//   DxCompareRule,
//   DxRangeRule,
//   DxStringLengthRule,
//   DxPatternRule,
//   DxEmailRule,
//   DxAsyncRule,
// } from "devextreme-vue/form";
import {
  DxValidator,
  DxRequiredRule,
  DxCompareRule,
  DxEmailRule,
  DxPatternRule,
  DxStringLengthRule,
  DxRangeRule,
  DxAsyncRule,
} from "devextreme-vue/validator";
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

    DxValidator,
    DxRequiredRule,
    DxCompareRule,
    DxEmailRule,
    DxPatternRule,
    DxStringLengthRule,
    DxRangeRule,
    DxAsyncRule,
  },
  name: "lateInEarlyOutDetail",
  props: {
    ishide: {
      type: Boolean,
    },
    childEnitites: {
      type: Object,
      default: () => [],
    },
    addOrEditChild: {
      type: String,
      require: true,
      default: () => [],
    },
  },
  methods: {
    btnAddOnClick() {
      if (this.validate()) {
        if (this.addOrEditChild == "Add") {
          this.$emit("eventAdd", this.obj);
          this.btnCancelOnClick();
        }
        if (this.addOrEditChild == "Edit") {
          this.$emit("eventEdit", this.obj);
          this.btnCancelOnClick();
        }
      }
    },
    // Truyền boolean đóng form chi tiết
    btnCancelOnClick() {
      this.$emit("closeForm", true);
    },

    validate() {
      let result = true;
      if (this.obj.FullName == "") {
        this.isError = true;
        result = false;
      }
      if (this.obj.HireDate == null) {
        this.isErrorHireDate = true;
        result = false;
      }
      if (this.obj.FromDate == null) {
        this.isErrorFromDate = true;
        result = false;
      }
      if (this.obj.ToDate == null) {
        this.isErrorToDate = true;
        result = false;
      }
      if (this.obj.WorkShift == '') {
        this.isErrorWorkShift = true;
        result = false;
      }
      if (this.obj.ResionFor == '') {
        this.isErrorResionFor = true;
        result = false;
      }
      if (!this.obj.ApprovedBy) {
        this.isErrorApprovedBy = true;
        result = false;
      }
      if (!this.obj.Status) {
        this.isErrorStatus = true;
        result = false;
      }
      

      return result;
    },
  },
  updated() {
    this.obj = this.childEnitites;
  },

  //todo
  computed: {
    vFullName: {
      set(value) {
        if (!value) {
          this.isError = true;
        } else {
          this.isError = false;
        }
        this.obj.FullName = value;
      },
      get() {
        return this.obj.FullName;
      },
    },
    vHireDate: {
      set(value) {
        if (!value) {
          this.isErrorHireDate = true;
        } else {
          this.isErrorHireDate = false;
        }
        this.obj.HireDate = value;
      },
      get() {
        return this.obj.HireDate;
      },
    },
    vFromDate: {
      set(value) {
        if (!value) {
          this.isErrorFromDate = true;
        } else {
          this.isErrorFromDate = false;
        }
        this.obj.FromDate = value;
      },
      get() {
        return this.obj.FromDate;
      },
    },
    vToDate: {
      set(value) {
        if (!value) {
          this.isErrorToDate = true;
        } else {
          this.isErrorToDate = false;
        }
        this.obj.ToDate = value;
      },
      get() {
        return this.obj.ToDate;
      },
    },
    vWorkShift: {
      set(value) {
        if (!value) {
          this.isErrorWorkShift = true;
        } else {
          this.isErrorWorkShift = false;
        }
        this.obj.WorkShift = value;
      },
      get() {
        return this.obj.WorkShift;
      },
    },
    vResionFor: {
      set(value) {
        if (!value) {
          this.isErrorResionFor = true;
        } else {
          this.isErrorResionFor = false;
        }
        this.obj.ResionFor = value;
      },
      get() {
        return this.obj.ResionFor;
      },
    },
    vApprovedBy: {
      set(value) {
        if (!value) {
          this.isErrorApprovedBy = true;
        } else {
          this.isErrorApprovedBy = false;
        }
        this.obj.ApprovedBy = value;
      },
      get() {
        return this.obj.ApprovedBy;
      },
    },
    vStatus: {
      set(value) {
        if (!value) {
          this.isErrorStatus = true;
        } else {
          this.isErrorStatus = false;
        }
        this.obj.Status = value;
      },
      get() {
        return this.obj.Status;
      },
    },
  },
  data() {
    return {
      isError: false,
      isErrorHireDate: false,
      isErrorFromDate: false,
      isErrorToDate: false,
      isErrorWorkShift: false,
      isErrorResionFor: false,
      isErrorApprovedBy: false,
      isErrorStatus: false,
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