/*
 * Created by Broccoli spring( gcx ) on 2017/9/19.
 * Routing configuration for the UI interface, this project selects element-ui as the UI framework.
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'cx-theme/dist/cx-theme.min.css';

Vue.use(ElementUI);

new Vue({
  ElementUI,
  $,
});
