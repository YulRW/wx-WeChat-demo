// pages/function/WeChat/childCpns/yy-comment-module/yy-comment-module.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        commentData:{
            type:Object,
            observer:function(newVal,oldVal){
                let num = newVal.goodUserAvatarList;
                let tempArray = []
                for (let i = 0; i < num; i++) {
                    tempArray.push(`/assets/avatar/${i}.jpg`);
                }
                this.setData({
                    goodUserList: tempArray
                })
            }
        },
        selfGood:{
            type:Boolean,
            value:false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        goodUserList: [],
    },

    /**
     * 组件的方法列表
     */
    methods: {
        showSelect(e) {
            // detail对象，提供给事件监听函数
            var myEventDetail = {
                x:e.detail.x,
                y:e.detail.y,
                msg:' x , y 传入yy-long-select-item组件'
            }
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('showSelect', myEventDetail, myEventOption)
        },
    },


    lifetimes: {
        attached() {
            let num = this.properties.commentData.goodUserAvatarList;

        }
    }
})