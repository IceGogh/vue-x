<template>
  <div id="app">
    <router-view :AppProps="AppPropsData"/>
  </div>
</template>

<script>
	export default {
	  name: 'app',
	  data(){
	  	return {
	  		AppPropsData: '定义在App里面的 props 传给它的子组件'
	  	}
	  },
	  mounted(){
	  	let t = this
	  	this.$on('changeByEmit', function(newVal){
	  		t.AppPropsData = newVal
	  	})
	  }
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
