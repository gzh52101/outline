import axios from 'axios';

export const baseUrl = 'http://120.76.247.5:2003';
export const apiUrl = baseUrl + '/api';
const request = axios.create({
    baseURL:apiUrl,
    withCredentials: true
})

request.get  = async function(url,data,config={}){
    const {data:result} = await request(url,{
        ...config,
        params:data,
        method:'get'
    });
    return result;
}

request.post  = async function(url,data,config={}){
    const {data:result} = await request(url,{
        ...config,
        data,
        method:'post'
    });
    return result;
}

request.delete  = async function(url,data,config={}){
    const {data:result} = await request(url,{
        ...config,
        params:data,
        method:'delete'
    })
    return result;
}
request.put  = async function(url,data,config={}){
    const {data:result} = await request(url,{
        ...config,
        data,
        method:'put'
    })
    return result;
}
request.patch  = async function(url,data,config={}){
    const {data:result} = await request(url,{
        ...config,
        data,
        method:'patch'
    })
    return result;
}
export default request;