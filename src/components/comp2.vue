<template>
	<div>
		<p>
			<!--  对应下面易错点   /user后面的/  user1c、user2c 为 指定 path 路径后面的 :uid 参数
			-->
			<router-link to="/user/user1c">:uid 参数： user1c</router-link>
			<router-link to="/user/user2c">:uid 参数：user2c</router-link>
			<router-link to="/user/checked/ccc">
				:checked 参数： {{ccc}}
				<button @click="getThis">getT</button>
			</router-link>
			<router-link to="/user/checked/ddd">:checked 参数：ddd</router-link>
		</p>
		<router-view/>
		<p>123</p>
	</div>
</template>

<script>
	import Vue from 'vue'
	import VueRt from 'vue-router'
	import User from './User'
	Vue.use(VueRt)
	
	const routes = [
		// ***********    易错点
		//  path 后的 路由参数  要加  /:  冒号后为参数  即  :uid = user1c / user2c
		{
			path: '/user/:uid', component: User
			
		},
		{
			path: '/user/:uid/:checkCD', component: User
		}
	]
	
	const router = new VueRt({
		routes
	})
	export default {
		name: 'comp2',
		router,
		computed: {
			ccc(){
				return '11c'
//				return this.$router.params.checked
			}
		},
		methods: {
			getThis(){
				console.log(this)
			}
		}
	}
</script>

<style>
</style>