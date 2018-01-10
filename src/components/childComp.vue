<template>
	<div>
		<button @click="reduceNub">childCom1</button>
		设置每次点击递减数值<input type="number" v-model="reduceX"/>
		<div>{{$store.state.nub1}}</div>
	</div>
</template>

<script>
	export default {
		name: 'child1',
		data (){
			return {
				reduceX	: 1
			}
		},
		methods: {
			reduceNub () {
				let nub = this._data.reduceX
				this.$store.commit('reduceNub1', nub)
			}
		}
	}
</script>

<style>
</style>