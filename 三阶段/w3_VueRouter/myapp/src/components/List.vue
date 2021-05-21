<template>
    <div>
        List
        <ul>
            <li v-for="(item,idx) in datalist" :key="item+idx">{{item}}</li>
        </ul>
        <p>
            价格：{{price.toFixed(2)}}
        </p>
        <p>
            索引值：{{index}}
        </p>
    </div>
</template>
<script>
export default {
    name:'List',
    // 普通用法
    // props:['datalist','price'],

    // props数据类型校验
    props:{
        // 限定单个类型
        // datalist:Array,

        // 必填
        datalist:{
            type:Array,
            required:true
        },

        // 设置默认值：当不传递时采用的值
        price:{
            type:Number,
            default:100
        },
        index:{
            type:[Number,String],
            default:1
        },

        // 自定义类型校验
        age:{
            type:[Number,String],
            validator: function (value) {
                // 这个值必须大于等于60，否则报错
                return value>=18&&value<=30
            }
        }
    },
    data(){
        return {

        }
    }
}
</script>
<style>

</style>
