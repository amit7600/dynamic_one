import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponentOne from "./components/HomeComponent";
import ifcComponent from "./components/ifcComponent";
import insideBackCover from "./components/insideBackCoverComponent";
import BackCover from "./components/backCoverComponent";
import Preview from "./components/previewComponent";
import AllPreview from "./components/allPreviewComponent";
import loginComponent from './users/loginComponent';

Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
        {
            path: '/',
            component: loginComponent,
        },
        {
            path: '/front_cover',
            component: HomeComponentOne,
        },
        {
            path: '/ifc',
            component: ifcComponent,
        },
        {
            path: '/insideBackCover',
            component: insideBackCover,
        },
        {
            path: '/backCover',
            component:BackCover,
        },
        {
            path: '/preview',
            component:Preview,
        },
        {
            path: '/allpreview',
            component:AllPreview
        }
    ],
    mode: 'history',
})