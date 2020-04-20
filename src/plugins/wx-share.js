!(function (win, doc, $, fehelper) {

	// 页面配置
	const globalConfig = {
		CODE_SUCCESS: 0,
		CODE_ERROR: 1,

		baseUrl: '{your_weixin_share_api}'
	}

	// 接口列表
	const api = {
		/** 获取微信分享配置 */
		getWXShare(params) {
			const url = globalConfig.baseUrl + '/share/share';

			return new Promise((resolve, reject) => {
				$.ajax({
					url: url,
					type: 'GET',
					data: params,
					success: function (res) {
						resolve(res);
					},
					fail: function (err) {
						reject(err);
					}
				})
			})
		}
	}

	const wx_share = {

		/** 默认配置 */
		default_config: {
			title: '',
			desc: '',
			link: '',
			imgUrl: '',

			apiUrl: ''
		},

		init(config = {}) {
			const nowPageUrl = this.getNowPageShareUrl();
			const self = this;

			// 如果传递了分享设置则使用传递的参数内容.
			if (config) {
				this.default_config = config;
			}

			api.getWXShare({ url: nowPageUrl })
				.then(res => {
					const { code, msg, data } = res;
					const { CODE_SUCCESS } = globalConfig;
					if (code === CODE_SUCCESS) {
						self.setWXShareConfig(data);
					} else {
						console.log('err', msg);
					}
				})
				.catch(err => {
					console.log('err', err);
				});
		},

		setWXShareConfig(config) {
			wx.config(config);
			this.wxSetShareCon();
		},

		getNowPageShareUrl() {
			// return encodeURIComponent(window.location.href.split('#')[0]);
			return window.location.href.split('#')[0];
		},

		wxSetShareCon() {
			const self = this;
			wx.ready(function () {
				console.log('===== wx.ready =====');
				const shareDefaultConfig = self.default_config;
				const shareTitle = shareDefaultConfig.title || '武汉恒大科技旅游城';
				const shareDesc = shareDefaultConfig.desc || '武汉恒大科技旅游城';
				const shareImgUrl = shareDefaultConfig.imgUrl || 'https://weixin.shinycg.com/sites/hdkjlyc/menu-total/resources/img/common/logo.png';
				const shareLink = shareDefaultConfig.link || self.getNowPageShareUrl();

				console.table(shareTitle, shareDesc, shareImgUrl, shareLink);

				// 分享到朋友圈
				wx.onMenuShareTimeline({
					title: shareTitle, // 分享标题
					desc: shareDesc,
					link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: shareImgUrl, // 分享图标
					success: function () {
						// 用户点击了分享后执行的回调函数
						console.log('分享成功1');
					},
					fail: function (err) {
						console.log('===== List =====');
						console.log(err);
					}
				});

				wx.onMenuShareAppMessage({
					title: shareTitle, // 分享标题
					desc: shareDesc, // 分享描述
					link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: shareImgUrl, // 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function () {
						// 用户点击了分享后执行的回调函数
						console.log('分享成功2');
					},
					fail: function (err) {
						console.log('===== List =====');
						console.log(err);
					}
				});

				wx.onMenuShareQQ({
					title: shareTitle, // 分享标题
					desc: shareDesc, // 分享描述
					link: shareLink, // 分享链接
					imgUrl: shareImgUrl, // 分享图标
					success: function () {
						// 用户确认分享后执行的回调函数
						console.log('分享成功3');
					},
					cancel: function () {
						// 用户取消分享后执行的回调函数
					},
					fail: function (err) {
						console.log('===== List =====');
						console.log(err);
					}
				});

				wx.onMenuShareWeibo({
					title: shareTitle, // 分享标题
					desc: shareDesc, // 分享描述
					link: shareLink, // 分享链接
					imgUrl: shareImgUrl, // 分享图标
					success: function () {
						// 用户确认分享后执行的回调函数
						console.log('分享成功4');
					},
					cancel: function () {
						// 用户取消分享后执行的回调函数
					},
					fail: function (err) {
						console.log('===== List =====');
						console.log(err);
					}
				});
			});

			wx.error(function (res) {
				console.log('err', res);
			})
		}
	}

	// wx_share.init();

  fehelper.wx_share = wx_share;

})(window, document, jQuery, fehelper = window.fehelper || {});