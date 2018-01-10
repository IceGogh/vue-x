<template>
	<div>
			<input type="text" value="当前为comp3组件默认部分" readonly/>
			<br/>
			<div>设定 子组件默认显示的component 在设置里面 path =“”</div>
			<router-link to="/comp3/child1">child1</router-link>
			<router-link to="/comp3/child2">child2</router-link>
			<router-view/>
	</div>
</template>

<script>
	
	export default {
		name: 'comp3'
	}
</script>

<style>
</style>