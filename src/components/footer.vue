<template>
	<div id="footer">
		<ul>
            <li v-for="(item,index) in tabBar" @click="handleImgHover(index)">
            	<router-link :to="item.path">
	                <img :src="item.img"/>
	                <span>{{item.name}}</span>
            	</router-link>
            </li>
        </ul>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				tabBar:[
					{
						img:"https://m.iflying.com/images/index/travel_hover.png",
						name:"首页",
						path:"/index"
					},
					{
						img:"https://m.iflying.com/images/index/destina.png",
						name:"目的地",
						path:"/destination"
					},
					{
						img:"https://m.iflying.com/images/index/tourPlan.png",
						name:"出游计划",
						path:"/plan"
					},
					{
						img:"https://m.iflying.com/images/index/home.png",
						name:"我的",
						path:"/my"
					}
				]
			}
		},
		methods:{
			handleImgHover(index){
				if(index == 0){
					this.tabBar[0].img = "https://m.iflying.com/images/index/travel_hover.png";
					this.tabBar[1].img = "https://m.iflying.com/images/index/destina.png";
					this.tabBar[2].img = "https://m.iflying.com/images/index/tourPlan.png";
					this.tabBar[3].img = "https://m.iflying.com/images/index/home.png";
				}else if(index == 1){
					this.tabBar[0].img = "https://m.iflying.com/images/index/travel.png";
					this.tabBar[1].img = "https://m.iflying.com/images/index/destina_hover.png";
					this.tabBar[2].img = "https://m.iflying.com/images/index/tourPlan.png";
					this.tabBar[3].img = "https://m.iflying.com/images/index/home.png";
				}else if(index == 2){
					this.tabBar[0].img = "https://m.iflying.com/images/index/travel.png";
					this.tabBar[1].img = "https://m.iflying.com/images/index/destina.png";
					this.tabBar[2].img = "https://m.iflying.com/images/index/tourPlan_hover.png";
					this.tabBar[3].img = "https://m.iflying.com/images/index/home.png";
				}else if(index == 3){
					this.tabBar[0].img = "https://m.iflying.com/images/index/travel.png";
					this.tabBar[1].img = "https://m.iflying.com/images/index/destina.png";
					this.tabBar[2].img = "https://m.iflying.com/images/index/tourPlan.png";
					this.tabBar[3].img = "https://m.iflying.com/images/index/home_hover.png";
				}
				
			}
		}
	}
</script>

<style scoped>
	#footer{
        width: 100%;
        height: .98rem;
        background: #fff;
        border-top:1px solid #868686;
        position: fixed;
        left: 0;
        bottom: 0;
    }

    #footer>ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    #footer>ul>li,#footer>ul>li>a{
        width: 100%;
        height: 100%;
    }

   #footer>ul>li>a{
       display: flex;
       flex-direction: column;
       justify-content: space-around;
       align-items: center;
    }
	#footer>ul>li>a>img{
		width: 0.5rem;
		height: 0.5rem;
		margin: 0 auto;
	}
    #footer>ul>li>a>span{
         display: block;
         font-size: .28rem
     }
    #footer>ul>li>a:hover span{
    	color: #ff6600;
    }
    
</style>