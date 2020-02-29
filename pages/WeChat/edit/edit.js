// pages/funciton/edit/edit.js
Page({
    getTime(e) {
        this.setData({
            'pageData.article.date.time': e.detail.value,
            'status.item3': true
        })
    },
    getDate(e) {
        let res = this.dislodgeZero(e.detail.value);
        res = this.addYMD(res);
        res = res.replace(/-/g, '');
        this.setData({
            'pageData.article.date.date': res,
            'status.item2': true
        })

    },
    // 日期去掉0
    dislodgeZero(str) {
        let strArray = str.split('-');

        strArray = strArray.map(function(val) {
            if (val[0] == '0') {
                return val = val.slice(1)
            } else {
                return val
            }
        })
        return strArray.join('-');
    },
    // 加年月日
    addYMD(str) {
        let strArray = str.split('-');

        strArray = strArray.map(function(val, index) {
            if (index == 0) {
                return val + '年'
            } else if (index == 1) {
                return val + '月'
            } else {
                return val + '日'
            }
        })
        return strArray.join('-');
    },
    getFiles(e) {
        this.setData({
            'pageData.article.pictureList': e.detail
        })
    },
    getLink() {
        wx.showToast({
            title: '暂未支持该功能',
            icon: 'none'
        })
    },
    /**
     * 生成文章内容
     */
    send() {
        let data = JSON.stringify(this.data.pageData);
        wx.navigateTo({
            url: `../article/article?data=${(data)}`,
        })
    },

    /**
     * 页面的初始数据
     */
    data: {
        pageData: {
            article: {
                contentText: '不写点东西吗？...^_^',
                pictureList: [],
                date: {
                    date: '',
                    time: ''
                }

            },
            comment: {
                goodUserAvatarList: '',
                commentUserList: []

            }
        },
        multiArray: [
            ['0', '1'],
            ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        ],
        pickerNum: {
            multiIndex: [0, 5, 5]
        },

        status: {
            item1: false,
            item2: false,
            item3: false,
            item4: false
        },
        textareaValue:'',
        isClear:false
    },
    clearEdit() {
        this.setData({
            'status.item1': false,
            'pageData.comment.goodUserAvatarList': '',

            'status.item2': false,
            'pageData.article.date.date': '',

            'status.item3': false,
            'pageData.article.date.time': '',

            'pageData.article.pictureList':[],

            'pageData.article.contentText':'不写点东西吗？...^_^',

            'textareaValue':'',

            'isClear':true

        })
        this.setData({
            isClear:false
        })
    },
    getText(e) {
        this.setData({
            'pageData.article.contentText': e.detail.value
        })
    },
    getGoodNum(e) {
        let array = e.detail.value;
        array = array.reduce((pre, cur) => {
            return '' + pre + cur
        })
        this.setData({
            'pageData.comment.goodUserAvatarList': Number(array),
            'status.item1': true
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    onShow(){
        this.clearEdit();
    },

})