// pages/function/WeChat/childCpns/yy-article-item/yy-article-item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        articleData: {
            type: Object,
            observer: function(newVal, oldVal) {    
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        showBtnAm: '',
        showBtnAmStatus: false,

        //是否自赞
        selfGood:false,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        userComment(){
            this.showGoodCommentBtn();
            // detail对象，提供给事件监听函数
            var myEventDetail = {}
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('comment', myEventDetail, myEventOption)
        },
        // 用户点赞
        userGood(){
            this.showGoodCommentBtn();
            this.setData({
                selfGood:!this.data.selfGood
            })
            // detail对象，提供给事件监听函数
            var myEventDetail = {
                selfGood:this.data.selfGood
            }
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('selfGood', myEventDetail, myEventOption)

        },

        // 小程序点赞评论按钮动画效果
        showGoodCommentBtn() {
            //创建动画实例
            let animation = wx.createAnimation({
                duration: 200,
                timingFunction: 'ease',
                delay: 0,
            });
            if (this.data.showBtnAmStatus) {
                animation.width('0rpx').step();
                this.setData({
                    showBtnAmStatus: false
                })
            } else {
                animation.width('340rpx').step();
                this.setData({
                    showBtnAmStatus: true
                })
            }
            this.setData({
                showBtnAm: animation.export()
            })
        },
        deleteBtn() {
            wx.showModal({
                title: '提示',
                content: '确定删除吗？',
                success:res=>{
                    if (res.confirm){
                        wx.navigateBack({
                            delta:1
                        })
                    }
                }
            })
        },
        showSelect(e) {
            // detail对象，提供给事件监听函数
            var myEventDetail = {
                x: e.detail.x,
                y: e.detail.y,
                msg: ' x , y 传入yy-long-select-item组件'
            }
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('showSelect', myEventDetail, myEventOption)
        },
    },


    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
})