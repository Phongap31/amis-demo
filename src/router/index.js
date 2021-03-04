import Vue from 'vue'
import Router from 'vue-router'
import LateEarly from '../view/timesheet/management-request/lateInEarlyOut.vue'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/timesheet/management-request/late-in-early-out',
        component: LateEarly
    }]
})