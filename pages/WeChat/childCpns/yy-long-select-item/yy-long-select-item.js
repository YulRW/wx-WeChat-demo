// pages/function/WeChat/childCpns/yy-long-select-item/yy-long-select-item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        coordinate: {
            type: Object,
            observer: function(newVal, oldVal) {
                // 展开选择item
                if (newVal.x || newVal.y) {
                    this._showSelect(newVal)
                }

            }
        },
        hidden: {
            type: Boolean,
            observer: function(newVal, oldVal) {
                //隐藏选择item
                if (newVal) {
                    this._hiddenSelect();

                }

            }
        }


    },

    /**
     * 组件的初始数据
     */
    data: {
        longActiveAm: '',
        showTop: '0rpx',
        showLeft: '0rpx',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //展开选择item
        _showSelect(e) {
            //短震动
            wx.vibrateShort({});

            this.setData({
                showLeft: e.x + 'px',
                showTop: e.y + 'px'
            })
            let animation = wx.createAnimation({
                duration: 200,
                timingFunction: 'ease',
            })
            animation.width('180rpx').height('330rpx').step();
            this.setData({
                longActiveAm: animation.export()
            })
        },
        //隐藏选择item
        _hiddenSelect() {
            let animation = wx.createAnimation({
                duration: 100,
                timingFunction: 'ease',
            })
            animation.width('0rpx').height('0rpx').step();
            this.setData({
                longActiveAm: animation.export()
            })
        },
    }
})