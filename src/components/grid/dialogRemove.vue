<template>
  <div>
    <div
      class="delete-dialog"
      title="Xóa nhân viên"
      :class="{ isHide: isHideDialog }"
    >
      <div class="dialog-modal"></div>
      <div class="dialog-content">
        <div class="dialog-header">
          <div class="dialog-header-title">Cảnh báo</div>
          <div @click="btnCancelOnClick" class="close-icon"></div>
        </div>
        <div class="dialog-body">
          <div class="dialog-body-query">
            Bạn có chắc muốn xóa Ca làm việc này không?
          </div>
        </div>
        <div class="dialog-footer">
          <div class="dialog-footer-groupButton">
            <ms-button @buttonEvent="btnCancelOnClick" class="cancle-filter" bgcolor="bg-color-filter"
              >Hủy</ms-button
            >
            <ms-button @buttonEvent="deleteOnClick" class="apply-filter" bgcolor="bg-color"
              >Xóa</ms-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isHideDialog"],
  methods: {
    //hàm xóa bản ghi
    deleteOnClick() {
      this.$emit('callDeleteOnClick')
      this.btnCancelOnClick()
    },
      
    //đóng popup
    btnCancelOnClick() {
      this.$emit("closeFormRemove", true);
    },
  },

  data() {
    return {
      deleteObject: Object,
    };
  },
};
</script>

<style scoped>
/* .isHide {
  display: none;
} */
.delete-dialog {
  z-index: 9999999 !important;
}
.delete-dialog .close-icon{
  right: 28px;
    top: 15px;
    cursor: pointer;
}
.delete-dialog .apply-filter{
  padding: 0 27px;
}

.dialog-header{
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 5px;
}

.dialog-content {
  position: fixed;
  border-radius: 5px;
  border-top: none;
  width: 450px;
  background-color: #fff;
  left: calc(50% - 275px);
  top: calc(50% - 190px);
}
.dialog-body {
  height: auto;
  font-size: 15px;
  /* margin-left: 5px; */
}
.delete-dialog .dialog-body{
  padding-top: 5px;
}
.dialog-footer-groupButton {
  display: flex;
  align-items: center;
}
</style>