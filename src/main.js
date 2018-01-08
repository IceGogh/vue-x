// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

// 引入常量替代 Mutation 事件
import { SOME_MUTATION } from './mutation-types'
Vue.config.productionTip = false
Vue.use(Vuex)
// 全局过滤器
Vue.filter('addYrs', function(val){
  return val + ' 年'
})
const store = new Vuex.Store({
  state: {
    nub1: 2018,
    nub2: 2000,
    nub4: 1,
    storeIn: this.MainData,
    todos: [
      {
        id: 1,
        text: '1text',
        done: true
      },
      {
        id: 2,
        test: '2text',
        done: false
      },
      {
        id: 3,
        text: '3text',
        done: true
      },
    ]
  },
  getters: {
    doneTodos: state => {
      //return state.todos.filter( todo => todo.done )

      return state.todos.filter(function(todo){
        return todo.done
      })
    },
    //getById: (state) => (id) => {
    //  return state.todos.find(todo => todo.id === id)
    //},
    getById: function(state){
      return function(id){
        // return state.todos.find(todo => todo.id === id)
        return state.todos.find(function(todo){
          return todo.id === id
        })
      }
    },
    changeSS: function(){
      return 'SSS'
    }
  },
  methods: {
    setKey: function(){
      this.$set(App2018.MainData, 'c', '通过子组件的事件添加')
    }
  },
  mutations: {
    nubAdd: function(state){
      state.nub1 ++

    },
    // 动态 mutations 方法  真正方法名 在 mutation-types.js 中定义 对应到 子组件促发的事件
    [SOME_MUTATION] (state){
      state.nub4--
    },
    nubAdd2 (state){
      state.nub2 +=2
    },
    add3 (state){
      state.nub1 +=5
    },
    nubAdd4 (state, payload){
      state.nub4 += payload.amountSS
      state.nub4 *= payload.XX
    },
    changeS (state,ind){
      state.todos[ind].done = false
    }
  }
})
/* eslint-disable no-new */
const App2018 = new Vue({
  el: '#app',
  store,
  router,
  data (){
    return {
      MainData: {
        a: 'aa'
      }
    }
  },
  template: '<App/>',
  components: { App }
})
console.log(App2018)
//  不能直接在 data 中添加对象  只能 在已存在对象上 添加 键
Vue.set(App2018.MainData, 'b', '新添加的键 b')
