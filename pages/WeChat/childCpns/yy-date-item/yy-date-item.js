// pages/function/WeChat/childCpns/yy-date-item/yy-date-item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        date: {
            type: Object
        }

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 获取当前日期和时间
        _getNowDate() {
            let date = new Date();
            let year = date.getFullYear() + '年';
            let month = date.getMonth() + 1 + '月';
            let day = date.getDate() + '日'
            let resDate = year + month + day;

            let hour = date.getHours().toString();
            if (hour.length == 1) {
                hour = '0' + hour
            }

            let min = date.getMinutes().toString();
            if (min.length == 1) {
                min = '0' + min
            }

            let time = hour + ':' + min;


            this.setData({
                nowDate: resDate,
                nowTime: time
            })
        },
    },
    lifetimes: {
        attached() {
            this._getNowDate();

        }
    }
})