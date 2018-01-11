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
const moduleA = {
	state: {
		aaa: 'aaa'
	}
}
const store = new Vuex.Store({
	modules: {
		Amo: moduleA
	},
  state: {
    nub1: 2018,
    nub2: 2000,
    nub4: 1,
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
        return state.todos.find(function(im){
          return im.id === id
        })
      }
    },
    changeSS: function(){
      return 'SSS'
    }
  },
  methods: {
  	// 未验证是否正确
//  setKey: function(){
//    this.$set(App2018.MainData, 'c', '通过子组件的事件添加')
//  }
  },
  actions: {
		nubAdd ({ commit: commit }) {
//			console.log('dispatch!')
			commit('nubAdd')
		},
//		nubAdd2 (context, nub){
//    context.commit('nubAdd2', nub)
// 	},
   	nubAdd2 ({commit, state},nub){
// 		console.log(state.nub2)
   		commit('nubAdd2', nub)
   	}
  },
  mutations: {
  	reduceNub1:
  		(state, payload) => state.nub1 -= payload
 		,
    nubAdd: function(state){
//  	console.log('mutations!')
      state.nub1 ++
    },
    // 动态 mutations 方法  真正方法名 在 mutation-types.js 中定义 对应到 子组件促发的事件
    [SOME_MUTATION] (state){
      state.nub4--
    },
    nubAdd2 (state, nub){
      state.nub2 +=nub.nub
    },
    add3 (state){
      state.nub1 +=5
    },
    nubAdd4 (state, payload){
    	if(typeof payload === 'number'){
    		state.nub4 += payload
    	}else if(typeof payload === 'object'){
    		state.nub4 += payload.amountSS
    		if('XX' in payload){
    			state.nub4 -= payload.XX
    		}
    	}
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
  beforeCreate(){
  	console.log('b4create! ',new Date().getTime(), new Date().getSeconds());
  	console.log('this.$el: ', this.$el)
  	console.log('this.$data: ', this.$data)
  	console.log('this.a: ', this.a)
  	
  },
  created(){
  	console.log('created ',new Date().getTime(), new Date().getSeconds())
  	console.log('this.$el: ', this.$el)
  	console.log('this.$data: ', this.$data)
		console.log('this.a: ', this.a)
  },
  beforeMount(){
  	console.log('b4Mount! ',new Date().getTime(),new Date().getSeconds())
  	console.log('this.$el: ', this.$el)
  	console.log('this.$data: ', this.$data)
		console.log('this.a: ', this.a)
  },
  mounted(){
  	console.log('Mounted! ',new Date().getTime(),new Date().getSeconds())
  	console.log('this.$el: ', this.$el)
  	console.log('this.$data: ', this.$data)
		console.log('this.a: ', this.a)
  },
  beforeUpdate(){
  	console.log('b4Update! ',new Date().getTime(),new Date().getSeconds())
  	console.log('this.$el: ', this.$el)
  	console.log('this.$data: ', this.$data)
		console.log('this.a: ', this.a)
	},
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
//  不能直接在 data 中添加对象  只能 在已存在对象上 添加 键
Vue.set(App2018.MainData, 'b', '新添加的键 b')
