import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './Input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Content from './content'
import Toast from './toast'
import plugin from './plugins'

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout',Layout);
Vue.component('g-header',Header);
Vue.component('g-footer', Footer);
Vue.component('g-sider', Sider);
Vue.component('g-content', Content);
Vue.component('g-toast', Toast);
Vue.use(plugin);

new Vue({
  el:'#app',
	data() {
  	return {
		  loading1:true,
		  message:''
	  }
	},
	mounted() {
  //	this.showToast();
	},
	methods: {
		handle(e) {
			console.log(e.target.value);
		},
		handleInput() {
			console.log(1);
		},
		showToast(){
			this.$toast('玩蛋');
		},
		clickMe() {
			this.$toast('出来吧',{
				closeButton: {
					text:"关闭",
					callback() {
						console.log('明白了');
					}
				}
			});
		}
	}
});
