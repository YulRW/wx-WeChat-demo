// pages/function/WeChat/childCpns/yy-upLoader/yy-upLoader.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        filesData: {
            type: Array,
            value: [],
            observer:function(newVal,oldVal){
                this.setData({
                    files:newVal
                })
            }
        },
        show: {
            type: Boolean,
            value: false
        },
        clearFiles:{
            type:Boolean,
            value:false,
            observer:function(newVal,oldVal){
                if(newVal){
                    this.setData({
                        files:[]
                    })
                }
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        // 预览图片列表
        files: [],

        //show为true时，单个图片样式
        firPicWidth: '0rpx',
        firPicHeight: '0rpx',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        chooseImage: function(e) {
            wx.chooseImage({
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                count: 9 - this.data.files.length,
                success: (res) => {
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    this.setData({
                        files: this.data.files.concat(res.tempFilePaths)
                    });
                    this.getPicture()
                    console.log(res)
                }
            })
        },
        previewImage: function(e) {
            wx.previewImage({
                current: e.currentTarget.id, // 当前显示图片的http链接
                urls: this.data.files // 需要预览的图片http链接列表
            })
        },
        //调整第一个图片的长宽
        imageLoad(e) {
            let width = e.detail.width;
            let height = e.detail.height;
            let scale = height / width;
            //判断图片高度和宽度
            if (height > width) {
                height = '390';
                width = height / scale;
            } else {
                width = '390';
                height = scale * width
            }
            this.setData({
                firPicWidth: width + 'rpx',
                firPicHeight: height + 'rpx'
            })
        },
        getPicture() {
            // detail对象，提供给事件监听函数
            var myEventDetail = this.data.files;
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('upLoader', myEventDetail, myEventOption)
        }
    }
})