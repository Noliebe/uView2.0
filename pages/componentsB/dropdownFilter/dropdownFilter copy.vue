<template>
	<page-meta
		:page-style="'overflow:' + (isShow ? 'hidden' : 'visible')"
	></page-meta>
	<view class="evalist">
		<u-navbar
			title="新房"
			:autoBack="true"
			bgColor="#fff"
			fixed
			:placeholder="true"
		>
		</u-navbar>
		<view class="opsugDetail-search-vue-box">
			<View class="header-u-search-wrap">
				<u-search
					placeholder="请输入要查找的房产名称"
					:label="null"
				></u-search>
			</View>
			<!-- filter start -->

			<!-- :menuTop="navFixedHeight" -->
			<l-filterDropdown
				:menuTop="$u.sys().statusBarHeight + 44 + 'px'"
				:filterData="filterData"
				:defaultSelected="defaultSelected"
				:updateMenuName="true"
				dataFormat="Object"
				@confirm="confirmSelectMen"
				@visible-change="handleTapFilterDropDownItem"
			></l-filterDropdown>
			<!-- filter end -->
		</view>
		<view>
			H<br />
			e<br />
			l<br />
			l<br />
			o<br />
		</view>
	</view>
</template>

<script>
import selectOptionData from "./data";
export default {
	data() {
		return {
			filterData: [],

			// 筛选条
			searchIndex: 0,
			// 楼、类型、区域
			titles1: [
				// {
				//   name: "状态",
				//   type: 1,
				// },
				{
					name: "时间",
					type: 4,
				},
			],
			delId: undefined,
			showDelPopup: false,

			// }),
			// 加载中
			isListLoading: false,
			// 没有更多
			isListNoMore: false,
			// 兼容用
			statusBarHeight: 0,
			navFixedHeight: "180px",

			tagList: [],
			// use id get content
			tagMap: undefined,

			replyPopupParams: {
				id: "",
				reply: "",
			},
			indexArr: [],
			valueArr: [],
		};
	},
	onLoad() {
		//定时器模拟ajax异步请求数据
		setTimeout(() => {
			this.filterData = selectOptionData;
		}, 100);

		//模拟ajax请求子菜单数据。
		setTimeout(() => {
			console.log("修改菜单");
			// 这是不行的
			// this.filterData[2] = {
			// 	name:'附近',
			// 	"type": 'hierarchy',
			// 	"submenu": [{"name": "附近","value": "附近"},{"name": "1km","value": "1km"}]
			// };

			// splice方法才行
			this.filterData.splice(2, 1, {
				name: "附近",
				type: "hierarchy",
				submenu: [
					{ name: "附近", value: "附近" },
					{ name: "1km", value: "1km" },
				],
			});
			console.log(
				"this.filterData[2]: " + JSON.stringify(this.filterData[2])
			);
		}, 5000);
		setTimeout(() => {
			console.log('this.changeSelected', this.changeSelected)
			//3秒后 修改defaultSelected
			this.changeSelected();
		}, 3000);
	},
	methods: {
		//接收菜单结果
		confirmSelectMen(e) {
			this.indexArr = e.index;
			console.log("this.indexArr", this.indexArr);
			this.valueArr = e.value;
			console.log("this.valueArr", this.valueArr);
		},
		//修改选中项-示例
		changeSelected() {
			//设置选中项
			// 一下的注释是针对测试数据说明结构的意思，具体传入什么数据，要看你自己数据。如果data.js数据有修改，注意defaultSelected也要修改
			//传入defaultSelected的结构不能错，错了就报错运行异常。 不想选中的请传入null
			console.log('aaa')

			this.defaultSelected = [];
			this.$nextTick(() => {
				this.defaultSelected = [
					[3, 0, 1], //第0个菜单选中 一级菜单的第6项，二级菜单的第0项，三级菜单的第1项
					[2, 0, 1], //第1个菜单选中 一级菜单的第2项，二级菜单的第0项，三级菜单的第1项
					[1], //第2个菜单选中 一级菜单的第1项 一级菜单的第1项
					[[0], [1, 2, 7], [1, 0]], //筛选菜单选中 第一个筛选的第0项，第二个筛选的第1,2,7项，第三个筛选的第1,0项
					[[0], [1], [1]], //单选菜单选中 第一个筛选的第0项，第二个筛选的第1项，第三个筛选的第1项
					[], //单选菜单选中 第一个筛选的第0项，第二个筛选的第1项，第三个筛选的第1项
				];
			});
		},
		handleTapFilterDropDownItem(isOpen, index) {
			console.log("isOpen", isOpen);
			console.log("index", index);
			// 调用上拉时间选择器
		},
	},
};
</script>

<style lang="scss">
.header-u-search-wrap {
	padding: 14rpx 24rpx 0;
	background-color: #fff;
}
.opsugDetail-search-vue-box {
	position: relative;
	z-index: 2;

	.box-top,
	.box-sx {
		background: transparent !important;
	}
	.item-content-wrap {
		justify-content: start;
	}
	.item-content-item {
		width: unset !important;
		padding-left: 40rpx;
	}
}
.evalist .nz-search-bar {
	background-color: #fff;
}
</style>
<style lang="scss" scoped>
.grid-text {
	width: 154rpx;
	height: 56rpx;
	background: #ffffff;
	border-radius: 8rpx;
	text-align: center;
	line-height: 56rpx;
}

.box-cont {
	width: 710rpx;
	background: #ffffff;
	border-radius: 24rpx;
	margin: 20rpx auto;
	box-sizing: border-box;
	overflow: hidden;

	.reply-item-title {
		font-weight: 600;
		font-size: 24rpx;
		color: #0d0d0d;
		line-height: 33rpx;
	}
	.reply-item-content-text {
		font-weight: 400;
		font-size: 22rpx;
		color: #0d0d0d;
		line-height: 32rpx;
	}
	.reply-item-sub-title {
		font-weight: 400;
		font-size: 24rpx;
		color: #0d0d0d;
		line-height: 30rpx;
	}
	.reply-item-date-text {
		font-weight: 400;
		font-size: 20rpx;
		color: #8a8a8a;
		line-height: 28rpx;
	}
	.reply-item-reply-text {
		padding: 16rpx 26rpx;
		font-weight: 400;
		font-size: 22rpx;
		color: #666666;
		line-height: 36rpx;
		background: #f3f3f3;
		border-radius: 16rpx;
	}
}

.img-towlines-list-wrap {
	.box-cont-item {
		width: 710rpx;
		height: 220rpx;
		padding: 20rpx;
		box-sizing: border-box;
		background: #ffffff;
		border-radius: 16rpx;

		.box-cont-item-img-wrap {
			overflow: hidden;
			margin-right: 20rpx;
			flex-shrink: 0;
			.box-cont-item-img {
				width: 240rpx;
				height: 243rpx;
				display: block;
				background-color: #eee;
			}
		}

		.box-cont-title {
			font-weight: 500;
			font-size: 28rpx;
			color: #303741;
			line-height: 40rpx;
		}
		.box-cont-info {
			font-size: 24rpx;
			color: #9097a1;
			text {
				display: block;
			}
		}
		.box-cont-chart-btn,
		.box-cont-info-btn {
			display: inline-block;
			padding: 13rpx 4rpx;
			min-width: 132rpx;
			font-weight: 400;
			font-size: 24rpx;
			color: #ffffff;
			line-height: 30rpx;
			text-align: center;
			background: #1a7af8;
			border-radius: 6rpx;
		}
		.box-cont-chart-btn {
			background: #e3f0ff;
			color: #1a7af8;
		}
		.box-cont-info-btn {
			margin-left: 16rpx;
		}
	}
}

.pop-warp {
	.reply-popup-btn {
		width: 702rpx;
		height: 98rpx;
		background: #459b6a;
		border-radius: 16rpx;
		font-weight: 400;
		font-size: 36rpx;
		color: #ffffff;
		line-height: 98rpx;
		text-align: center;
		margin: 0 auto;
	}
	.reply-popup-reply-wrap {
	}
}

.box-footer-bot {
	.btn {
		width: 102rpx;
		height: 42rpx;
		border-radius: 6rpx;
		font-weight: 400;
		font-size: 24rpx;
		line-height: 30rpx;

		display: flex;
		align-items: center;
		justify-content: center;
		& + .btn {
			margin-left: 25rpx;
		}
		&.del {
			color: #8a8a8a;
			background-color: rgba(138, 138, 138, 0.1);
			border: 1rpx solid rgba(138, 138, 138, 0.1);
		}
		&.view {
			color: #0d0d0d;
			background-color: rgba(138, 138, 138, 0.1);
			border: 1rpx solid rgba(138, 138, 138, 0.3);
		}
		&.reply {
			color: #459b6a;
			background: rgba(69, 155, 106, 0.1);
			border: 1rpx solid rgba(69, 155, 106, 0.1);
		}
	}
}
</style>
