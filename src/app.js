import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './Input'
import Row from './row'
import Col from './col'

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);

new Vue({
  el:'#app',
	data() {
  	return {
		  loading1:true,
		  message:''
	  }
	},
	methods: {
		handle(e) {
			console.log(e.target.value);
		},
		handleInput() {
			console.log(1);
		}
	}
});
