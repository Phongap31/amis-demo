<template>
  <div class="header">
    <div class="header-left">
      <div class="header-left-brand">
        <div class="toggle-icon"></div>
        <router-link to="/timesheet/management-request/late-in-early-out">
          <div class="logo-icon">
            
          </div>
        </router-link>
        <div class="brand-text">Chấm công</div>
      </div>
      <ms-menu :menuItems="menuItems"></ms-menu>
    </div>
    <div class="header-right">
      <div class="version-app">Beta 23.4</div>
      <div class="notifications-icon"></div>
      <div class="account-user"><span class="account-text">P</span></div>
    </div>
  </div>
</template>

<script>
import msDropdown from "../dropdown/msDropdown.vue";
import MsMenu from '../ms-menu/msMenu.vue';
export default {
  components: { msDropdown, MsMenu },
  data(){
    return {
      menuItems: [
        {id:'1', name: 'Tổng quan', ishasDropdown: false, url: '/timesheet/dashboard'},
        {id:'2', name: 'Chấm công', ishasDropdown: true, url: '/timesheet/timekeeping',
        dropdownItems: [
          {
            name: 'Bảng chấm công chi tiết',
            url: '/'
          },
          {
            name: 'Bảng chấm công tổng hợp',
            url: '/'
          },
          {
            name: 'Dữ liệu máy chấm công',
            url: '/'
          }
        ]
        },
        {id: '3', name: 'Ca làm việc', ishasDropdown: true, url: '/timesheet/timeworking',
        dropdownItems: [
          {
            name: 'Bảng phân ca tổng hợp',
            url: '/'
          },
          {
            name: 'Danh sách ca',
            url: '/'
          },
          {
            name: 'Danh sách phân ca chi tiết',
            url: '/'
          },
        ]
        },
        {id:'4', name: 'Quản lý đơn', ishasDropdown: true, url: '/timesheet/management-request',
        dropdownItems: [
          {
            name: 'Đơn xin nghỉ',
            url: '/'
          },
          {
            name: 'Đề nghị cập nhật công',
            url: '/'
          },
          {
            name: 'Đề nghị cộng tác',
            url: '/'
          },
          {
            name: 'Đơn làm thêm giờ',
            url: '/'
          },
          {
            name: 'Đơn đi muộn/về sớm',
            url: '/timesheet/management-request/late-in-early-out'
          },
          {
            name: 'Bảng tổng hợp nghỉ phép',
            url: '/'
          }
        ]
        },
        {id: '5', name: 'Báo cáo', ishasDropdown: false, url: '/timesheet/report'},
        {id: '6', name: 'Thiết lập', ishasDropdown: false, url: '/timesheet/setting'}
      ]
    }
  }
};
</script>

<style scoped>
</style>