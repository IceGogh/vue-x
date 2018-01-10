<template>
	<div>
		<button @click="routerPush">childCom2</button>
	</div>
</template>

<script>
	const Id = 'id2'
	export default {
		name: 'child2',
		methods: {
			routerPush: function(){
//				const Id = 'id2'
				this.$router.push({
//					path: '/comp1/id2'
					path: `/comp1/${Id}`
				})
			}
		}
	}
</script>

<style>
</style>