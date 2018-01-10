<template>
	<div>
		
		<button  @click="nub1AddComp1">{{comp1nub1}}</button>
		<div v-for="param in $route.params" @click="showPa">{{param}}</div>
		<router-view/>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Vuex from 'vuex'
	Vue.use(Vuex)
	
	export default {
		name: 'user',
		computed: {
			comp1nub1 (state) {
				return this.$store.state.nub1
			}
		},
		methods: {
			nub1AddComp1(){
				this.$store.commit('nubAdd')
			},
			showPa () {
				console.log(this.$route)		// 即 路由参数
				console.log(this.$router)		// VueRouter 实例 ？
			}
		},
	
	}
</script>

<style>
</style>