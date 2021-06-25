/**
 * 命名空间
 * 
 */

// js命名空间
let lx = {
    username: 'laoxie',
    age:18,
}
let jj = {
    username:'jingjing',
    age:38
}
lx.username;
jj.username;


// ts命名空间
/// <reference path="ns/lx.ts" />
LX.username;

// 建议使用
import {IGoods} from './module/goods';

const goods:IGoods = {
    id:10,
    name:'goods',
    price:198
}
