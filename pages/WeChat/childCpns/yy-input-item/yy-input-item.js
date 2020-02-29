// pages/function/WeChat/childCpns/yy-input-item/yy-input-item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        focus: {
            type: Boolean,
            value: false,
            observer: function(newVal, oldVal) {
                console.log(newVal)
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        // 设备信息宽高
        deviceHeight: '0',
        deviceWidth: '0',

        // 初始化键盘input高度
        keyboardHeight: 0,

        //input输入内容
        inputVal: '',

        // 发送按钮样式
        sendBtnCss: {
            backgroundColor: 'var(--grayLight)',
            border: '#c6c6c6 1px solid',
            color: '#c6c6c6'
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // inputFocus(){
        //     this.setData({
        //         isFocus:true
        //     })
        // },
        _send() {
            // 判断是否为空
            if (this.inputVal == '') {
                return;
            }

            // 发出数据
            var myEventDetail = {
                contentText: this.data.inputVal
            }
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('inputMsg', myEventDetail, myEventOption)

            // 清空输入框
            this.setData({
                inputVal: ''
            })

            this.changeBtnCss('')


        },
        inputValue(e) {
            this.setData({
                inputVal: e.detail.value
            })
            this.changeBtnCss(e.detail.value);
        },
        changeBtnCss(val) {
            if (val == '') { //如果输入框没有有文字
                this.setData({
                    sendBtnCss: {
                        backgroundColor: 'var(--grayLight)',
                        border: '#c6c6c6 1px solid',
                        color: '#c6c6c6'
                    }
                })
            } else {
                this.setData({
                    sendBtnCss: {
                        backgroundColor: 'var(--green)',
                        border: 'var(--green) 1px solid',
                        color: '#ffffff'
                    }
                })
            }
        },
        rpxTorpx(rpx) {
            let deviceWidth = wx.getSystemInfoSync().windowWidth;
            let px = (deviceWidth / 750) * Number(rpx);
            return px;
        },
        pxTorpx(px) {
            let deviceWidth = wx.getSystemInfoSync().windowWidth;
            let rpx = (750 / Number(px)) * deviceWidth;
            return rpx;
        },
    },
    lifetimes: {
        attached() {
            // 获取设备宽高
            this.setData({
                deviceHeight: wx.getSystemInfoSync().windowHeight,
                deviceWidth: wx.getSystemInfoSync().windowWidth
            })

            //初始化键盘input高度
            let px = this.rpxTorpx(40);
            this.setData({
                keyboardHeight: px - 4
            })
        }
    }
})