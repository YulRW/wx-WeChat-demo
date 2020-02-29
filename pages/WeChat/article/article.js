Page({
    // 点击了评论按钮
    clickComment(){
        this.setData({
            isFocus:true
        })
    },
    //点击了赞按钮
    clickGood(e){
        this.setData({
            selfGood:e.detail.selfGood
        })
    },
    /**
     * 展开长按选择数据传递（传入组件long-select-item坐标信息）
     */
    showSelect(e) {
        this.setData({
            longSelectHidden: false,
            coordinate: e.detail,
        })
    },

    getComment(e){
        let array = this.data.pageData.comment.commentUserList;
        array.push(e.detail);
        this.setData({
            'pageData.comment.commentUserList':array
        })
    },

    /**
     * 页面的初始数据
     */
    data: {
        //长按展开的坐标
        coordinate: {},
        //选择Item的开启状态
        longSelectHidden: false,

        //页面数据
        pageData: {
            article: {
                username: 'YulRW',
                avatar: '',
                contentText: '开发者可以将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用；也可以将复杂的页面拆分成多个低耦合的模块，有助于代码维护。自定义组件在使用时与基础组件非常相似。',
                pictureList: [],
                date: {
                    date: '',
                    time: ''
                }
            },
            comment: {
                goodUserAvatarList: 0, //临时为数字
                commentUserList: [{
                    username: '',
                    avatar: '',
                    contentText: '',
                    date: {
                        date: '2020年2月8日',
                        time: '15: 40'
                    }
                }]

            }

        },

        //是否聚焦input
        isFocus:false,

        // 是否自赞
        selfGood:false

    },
    clearEvenTouch() {
        this.setData({
            longSelectHidden: true,
        })
    },
    clearEvenTap() {
        console.log(1111)
        this.setData({
            isFocus: false
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

        options.data && this.setData({
            pageData: JSON.parse(options.data)
        })
        // console.log(options)
    },
})