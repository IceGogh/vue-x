<template>
	<div>
		<button  @click="nub1AddComp1">{{comp1nub1}}</button>
		<div>{{$route.params.id}}</div>
		<div>111111</div>
		<img  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
		<router-view/>
	</div>
</template>

<script>
	
	export default {
		name: 'comp1',
		computed: {
			comp1nub1 (state) {
				return this.$store.state.nub1
			}
		},
		methods: {
			nub1AddComp1(){
				this.$store.commit('nubAdd')
			}
		}
	}
</script>

<style>
</style>