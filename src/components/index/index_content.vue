<template>
	<div id="index_content">
		<section class="content">
			<h1 class="title">推荐产品</h1>
			<ul id="hotProduct">
				<li v-for="(item,index) in contentProduct">
					<div class="product-avatar"><img :src="item.DefaultPic"></div>
					<div class="product-header one-line">{{item.WebTitle}}</div>
					<div class="product-content">{{item.SubTitle}}</div>
					<div class="product-footer">
						<div>{{item.ProductType.name}}</div>
						<div><span class="price">¥{{item.MinPrice}}</span>起/人</div>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	export default{
		props:{
			contentProduct:Array
		}
	}
</script>

<style>
.content {
    box-sizing: border-box;
    margin: 0.267rem 0;
    padding: 0.133rem;
    background: #fff;
}
.content .title {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.267rem;
    font-weight: bold;
    font-size: 0.42rem;
}
.content ul {
    box-sizing: border-box;
    overflow: hidden;
}
.content li {
    float: left;
    box-sizing: border-box;
    width: 50%;
    padding: 0.133rem;
    line-height: 1.2;
    height: 4.5rem;
    min-height: 4.5rem;
}
.product-avatar {
    margin-bottom: 0.2rem;
    width: 4.6rem;
    height: 2.72rem;
}
.product-header.one-line {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    min-height: .36rem;
}
.product-header {
    margin-bottom: 0.107rem;
    color: #353535;
    font-size: 0.32rem;
}
.product-content {
    font-size: 0.32rem;
    color: #888;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    min-height: .36rem;
}
.product-footer {
    display: flex;
    align-items: center;
    font-size: 0.32rem;
    color: #888;
    justify-content: space-between;
}
.product-footer div:last-child span {
    font-size: 0.48rem;
    color: #ff6600;
}
</style>