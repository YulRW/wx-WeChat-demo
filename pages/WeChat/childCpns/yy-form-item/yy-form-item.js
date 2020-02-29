// pages/function/WeChat/childCpns/yy-form-item/yy-form-item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title:{
            type:String,
            value:'标签内容'
        },
        icon:{
            type:String,
            value:'good'
        },
        arrow:{
            type:Boolean,
            observer:function(newVal,oldVal){
                // console.log(newVal)
            }
        },
        rightText:{
            type:String,
            value:''
        },
        finish:{
            type:Boolean,
            value:false
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

    },
    options: {
        styleIsolation: 'apply-shared'
    }
})
