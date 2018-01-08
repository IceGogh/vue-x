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
  </div>
</template>

<script>
import Vue from 'vue'

// 引入 vuex 中的 mapState 方法

import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
    ...mapState({
    // 原始写法
    //nub1: function(state){
    //  return state.nub1
    //},

    // 变形 ES6
    //nub1: state =>　state.nub1,

    // 简写
    nub1: 'nub1',
    nub2: 'nub2',
    nub4: 'nub4',
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
    add1 (){
      this.$store.commit('nubAdd')
      var _this = this.$parent
      var __this = _this.$parent
      if(__this){
        console.log(__this)
      }
    },
    add2 (){
      this.$store.commit('nubAdd2')
    },

    // 
    ...mapMutations([
      'add3'
    ]),
    ...mapMutations({
      'add5': 'SOME_MUTATIONcc'
    }),

    // add3 (){
    //  this.$store.commit('nubAdd3')
    //},
    // add5 (){
    //  this.$store.commit('SOME_MUTATIONcc')
    // },

    add4 (){
      // 原始方法 直接传参
      // this.$store.commit('nubAdd4', 10)

      // 变形  传一个对象  实参是 payload.amount
      // this.$store.commit('nubAdd4', { amount: 33 })

      // 变形 通用对象
      this.$store.commit({
        type: 'nubAdd4',
        amountSS: 10,
        XX: 2
      })
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
