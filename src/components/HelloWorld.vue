<template>
  <div>
    <button @click="add1">{{ nub1 | addYrs }}</button>
    <button @click="add2">{{nub2}}</button>
    <button @click="add3">{{nub1}}</button>
    <button @click="add4">{{nub4}}</button>
    <button @click="add5">{{nub4}}</button>
    <div v-for="(item,index) in statusT" @click="changeS" :data-ind="index">{{item.text}}</div>
    <div>Length: {{ statesTLen }}</div>
    <div>2:{{getById(2)}}</div>
  	<div>
	  	<router-link to="/comp1/id1">comp1-1</router-link>
	  	<router-link to="/comp1/id2">comp1-2</router-link>
	  	<router-link to="/comp2">comp2</router-link>
	  	<router-link to="/comp3">comp3</router-link>
	  </div>
	  <router-view/>
	</div>
  
</template>

<script>
import Vue from 'vue'
import VueRt from 'vue-router'
import Comp1 from './comp1'
import Comp2 from './comp2'
import Comp3 from './comp3'
import ChildComp from './childComp'
import ChildComp2 from './childComp2'

Vue.use(VueRt)
// 引入 vuex 中的 mapState 方法

import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

const routes = [
	{ path: '/', redirect: '/comp2' },
  { path: '/comp1/:id', component: Comp1 },
  { path: '/comp2', component: Comp2 },
  { path: '/comp3', component: Comp3,
  	children: [
				{
					path: '', component: ChildComp 
				},
				{
					path: 'child1', component: ChildComp 
				},
				{
					path: 'child2', component: ChildComp2 
				}
			]
  }
]

const router = new VueRt({
	routes
})
export default {
  name: 'HelloWorld',
  router,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hello: {
      	a: '1'
      }
    }
  },

  // 原始写法
  //computed: {
  //  nub1 (){
  //    return this.$store.state.nub1
  //  },
  //  nub2 (){
  //    return this.$store.state.nub2
  //  }
  //},

  computed: {
    ...mapGetters([
      'getById'
    ]),
    
    // 原始写法
    //nub1: function(state){
    //  return state.nub1
    //},

    // 变形 ES6
    //nub1: state =>　state.nub1,

    // 简写
//  ...mapState({
//  nub1: 'nub1',
//  nub2: 'nub2',
//  nub4: 'nub4',
    
    ...mapState([
    	'nub1', 'nub2', 'nub4'
    ]),
    ...mapState({
  //  statusT: function(state){
  //    return this.$store.getters.doneTodos
  //  },
  //  statesTLen: function(state, getters){
  //    return this.$store.getters.doneTodos.length
  //  }
    statusT (state) {
        return this.$store.getters.doneTodos
    },
    statesTLen (state, getters){
      return this.$store.getters.doneTodos.length
    },

    // getters 传参 筛选
    //getId: function(state){
    //  return function(id){
    //    return this.$store.getters.getById(id)
    //  }
    //},
    getId: function(state){
      return function(id){
        return this.$store.getters.getById(id)
      }
    },

    // 简写成 箭头函数 this 指向发生错误
    //getId: (state) => (id) => {
    // return this.$store.getters.getById(id)
    //}


    })
  },

  // 当映射的计算属性的名称与 state 的子节点名称相同时, 直接传入 数组
  //computed: mapState([
  //  'nub1', 'nub2'
  //]),


  methods: {
  	
  	
//	...mapActions({
//		add1: 'nubAdd'
//	}),
    add1 (){
    	// 用 store中 dispatch方法 分发（可异步执行） 调用 store中 actions 的 nubAdd 然后 驱动 store 中的 mutations的 nubAdd方法
      this.$store.dispatch('nubAdd')
      // 直接用 store.commit 方法驱动 store中的 mutatins 的 nubAdd方法 （同步执行）
//    this.$store.commit('nubAdd')




      // 根据向上找 父级的方法 循环找到 Vue 实例
//    var _this = this.$parent
//    var __this = _this.$parent
//    if(__this){
//      console.log(__this)
//    }
//    __this.$set(__this.MainData, 'bbb', '在子组件中（主组件） 添加Vue 主组件的 data 属性')
//			this.$set(__this.MainData, 'bcbc', '尝试子组件驱动 主组件 添加 data 属性方法')
},
    add2 (){
    	// 子组件添加 自己 data 中 hello数据 cc 健
    	this.$set(this.hello,'cc',123)
      
//    this.$store.commit('nubAdd2')
    	this.$store.dispatch('nubAdd2', {nub: 3})
    
    },
    

    // 
    ...mapMutations([
      'add3'
    ]),
    ...mapMutations({
      'add5': 'SOME_MUTATIONccName'
    }),

    // add3 (){
    //  this.$store.commit('nubAdd3')
    //},
    // add5 (){
    //  this.$store.commit('SOME_MUTATIONcc')
    // },

    add4 (){
      // 原始方法 直接传参
//       this.$store.commit('nubAdd4', 10)

      // 变形  传一个对象  实参是 payload.amount
       this.$store.commit('nubAdd4', { amountSS: 33 })

      // 变形 通用对象
//    this.$store.commit({
//      type: 'nubAdd4',
//      amountSS: 10,
//      XX: 2
//    })
    },


    changeS (e){
    let Ind = e.target.getAttribute('data-ind')
      this.$store.commit('changeS',Ind)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
