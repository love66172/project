import Vue from 'vue'
import Router from 'vue-router'
//导入各个组件
import Index from "@/components/index/index";
import Destination from "@/components/destination/destination";
import Plan from "@/components/plan/plan";
import My from "@/components/my/my";
import Error from "@/components/error"
Vue.use(Router)

export default new Router({
	//配置路由
  routes: [
    {
      path:"/",
      redirect:"/index"
    },
    {
    	path:"/index",
    	name:"index",
    	component:Index
    },
    {
    	path:"/destination",
    	name:"destination",
    	component:Destination
    },
    {
    	path:"/plan",
    	name:"plan",
    	component:Plan
    },
    {
    	path:"/my",
    	name:"my",
    	component:My
    },
    
    
    
    
    {
    	path:"**",
    	component:Error
    }
  ]
})
