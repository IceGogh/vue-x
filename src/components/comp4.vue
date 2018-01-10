<template>
	<div>
		<div>111111144444</div>
		<ul>
			<li><router-link to="/">defa</router-link></li>
			<li><router-link to="BBB">BBB</router-link></li>
		</ul>
		
		
		<router-view class="view one"></router-view>
		<router-view class="view two" name="a"></router-view>
		<router-view class="view three" name="b"></router-view>
	</div>
</template>

<script>
	import Vue from 'vue'
	import VueRt from 'vue-router'
	Vue.use(VueRt)
	const Aa = { template: '<div>foo</div>' }
	const Bb = { template: '<div>bar</div>' }
	const Cc = { template: '<div>baz</div>' }
	
	const router = new VueRt({
  mode: 'history',
  routes: [
    { path: '/comp4',
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      components: {
        default: Aa,
        a: Bb,
        b: Cc
      }
    },
    {
      path: '/comp4/other',
      components: {
        default: Bb,
        a: Aa,
        b: Cc
      }
    }
  ]
})
	export default {
		name: 'comp4',
		router
	}
</script>

<style>
</style>