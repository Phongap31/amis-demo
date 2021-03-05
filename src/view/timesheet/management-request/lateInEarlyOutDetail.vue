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
          <div class="dialog-header-title">Thêm đơn <span class="sub-title">- Đi muộn/Về sớm</span></div>
          <div class="dialog-header-close">
            <div v-on:click="btnCancelOnClick"><i class="fas fa-times"></i></div>
          </div>
        </div>
        <div class="dialog-body">
            <div class="dialog-body-left">
                <div class="row-body">
                    <label for="">Người nộp đơn <span class="input-require">*</span></label>
                    <ms-input ref="employeeCode" class="ms-combobox"></ms-input>
                </div>
                <div class="row-body">
                    <label for="">Đơn vị công tác <span class="input-require">*</span></label>
                    <ms-input type="number" class="ms-combobox" ></ms-input>
                </div>
                <div class="row-body">
                    <label for="">Ngày nộp đơn <span class="input-require">*</span></label>
                    <date-picker format="D MMMM YYYY" class="ms-combobox" ></date-picker>
                </div>
                <div class="row-body">
                    <label for="">Từ ngày <span class="input-require">*</span></label>
                    <date-picker class="ms-combobox" ></date-picker>
                </div>
                <div class="row-body">
                    <label for="">Đến ngày <span class="input-require">*</span></label>
                    <date-picker class="ms-combobox" ></date-picker>
                </div>
                <div class="row-body" style="margin: 60px 0;">
                    <label for="">Áp dụng cho</label>
                    <ms-input class="ms-combobox" style="height: 88px"></ms-input>
                </div>
                <div class="row-body" style="margin: 90px 0;">
                    <label for="">Ca áp dụng <span class="input-require">*</span></label>
                    <ms-input class="ms-combobox" style="height: 88px"></ms-input>
                </div>
            </div>
            <div class="dialog-body-right">
                <div class="row-body">
                    <label for="">Đi muộn đầu ca (phút)</label>
                    <ms-input class="ms-combobox"></ms-input>
                </div>
                <div class="row-body">
                    <label for="">Về sớm giữa ca (phút)</label>
                    <ms-input type="number" class="ms-combobox"></ms-input>
                </div>
                <div class="row-body">
                    <label for="">Đến muộn giữa ca (phút)</label>
                    <ms-input type='date' class="ms-combobox"></ms-input>
                </div>
                <div class="row-body">
                    <label for="">Về sớm cuối ca (phút)</label>
                    <ms-input type='date' class="ms-combobox"></ms-input>
                </div>
                <div class="row-body">
                    <label for="">Người duyệt <span class="input-require">*</span></label>
                    <ms-input type='date' class="ms-combobox"></ms-input>
                </div>
                <div class="row-body" style="margin: 60px 0;">
                    <label for="">Người liên quan</label>
                    <ms-input class="ms-combobox" style="height: 88px"></ms-input>
                </div>
                <div class="row-body" style="margin: 90px 0;">
                    <label for="">Ghi chú</label>
                    <ms-input class="ms-combobox" style="height: 88px"></ms-input>
                </div>
            </div>
        </div>
        <div class="dialog-footer">
            <ms-button id="cancle-filter" @buttonEvent="btnCancelOnClick" class="cancle-filter" bgcolor="bg-color-filter">Hủy</ms-button>
            <ms-button class="btn-apply" bgcolor="bg-color">Lưu</ms-button>
        </div>
      </div>
    </div>
  </div>
</template>
</template>

<script>
import msInput from '../../../components/input/msInput.vue';
import DatePicker from "vue2-datepicker";
import 'vue2-datepicker/index.css';
export default {
  components: { msInput,   DatePicker},
    name: 'lateInEarlyOutDetail',
    props: {
        ishide: {
            type: Boolean
        }
    },
    methods:{
        btnCancelOnClick(){
            this.$emit('closeForm', true)
        }
    }
}
</script>
<style scoped>
.isHide{
    display: none;
}
</style>