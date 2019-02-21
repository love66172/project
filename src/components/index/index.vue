<template>
	<div id="index">
		<Index_search-com></Index_search-com>
		<Banner_swiper-com :bannerImgs="bannerImgs"></Banner_swiper-com>
		<Index_nav-com></Index_nav-com>
		<Index_content-com :contentProduct="contentProduct"></Index_content-com>
		<Index_littleAd-com :littleAdImg="littleAdImg"></Index_littleAd-com>
	</div>
</template>

<script>
	//导入首页需要的组件
	import Banner_swiper from "./banner_swiper";
	import Index_search from "./index_search";
	import Index_nav from "./index_nav";
	import Index_content from "./index_content";
	import Index_littleAd from "./index_littleAd";
	export default {
		data(){
			return{
				bannerImgs:[],
				contentProduct:[],
				littleAdImg:[]
			}
		},
			
		components: {
			"Banner_swiper-com": Banner_swiper,
			"Index_search-com": Index_search,
			"Index_nav-com" : Index_nav,
			"Index_content-com" : Index_content,
			"Index_littleAd-com" : Index_littleAd
		},
		created() {
			//获取banner轮播的数据
			this.$axios({
				method: "get",
				url: "/api/Public/GetAdList?posid=5aa2268db0ae1c9477023056&stationid=1&typeid=&randomnumber=0.9125528414587747&fystid=nb"
			}).then((res) => {
				var bannerImgArray = res.data.data;
				this.bannerImgs = bannerImgArray;
			});
			//获取两个旅游推荐的数据
			this.$axios({
				method: "get",
				url: "/api/Public/GetProductRecmd?stationid=1&recmdid=5ab849d9b0ae1c6d4e02324c&ptypeid=&randomnumber=0.18979393487502172&fystid=nb"
			}).then((data) => {
				//console.log(data.data.data);
				var contentProductArray = data.data.data;
				this.contentProduct = contentProductArray;
			});
			//获取首页专题小广告的数据
			this.$axios({
				method: "get",
				url: "/api/Public/GetAdList?posid=5aa226c9b0ae1c5c7702305a&stationid=1&typeid=&randomnumber=0.5778379282334811&fystid=nb"
			}).then((data) => {
				console.log(data.data.data);
				var littleAdArray = data.data.data;
				this.littleAdImg = littleAdArray;
			})
		}
	}
</script>

<style>

</style>