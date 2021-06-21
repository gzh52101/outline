<template>
	<!-- index.wxml -->
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="msg">msg</view>
		<button @click="goto('/pages/mine/mine')">Mine</button>
	</view>
</template>

<script>
	// index.js
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this.title = 'hello uni'
		},
		methods: {
			getData(){
				// uni.request()	-> wx.request
				// 				-> 
			},
			goto(path){
				uni.navigateTo({
					url:path
				})
			}
		}
	}
</script>

<style>
	/*index.wxss*/ 
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #f00;
	}
</style>
