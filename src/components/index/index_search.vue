<template>
	<div id="index_search">
		<div class="header">
			<div class="position">
				<span>
					宁波
				</span>
			</div>
			<div class="search">
				<span>
					目的地/关键词
				</span>
			</div>
			<div class="messageImg">
				<img src="../../assets/message.png"/>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	#index_search{
		width: 100%;
		height: .98rem;
	}
	#index_search .header{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #ff6600;
		padding-left: 0.3rem;
		padding-right: 0.3rem;
	}
	#index_search .header .messageImg{
		width: 0.46rem;
		height: 0.46rem;
	}
	#index_search .header .messageImg img{
		width: 100%;
		height: 100%;
	}
	#index_search .header .search{
		width: 7.24rem;
		height: 0.6rem;
		background: white;
		display: flex;
		align-items: center;
		padding-left: 0.6rem;
	}
	#index_search .header .search span{
		color: #CBCBCB;
		font-size: 0.32rem;
	}
	#index_search .header .position span{
		color: white;
		font-size: 0.32rem;
	}
</style>