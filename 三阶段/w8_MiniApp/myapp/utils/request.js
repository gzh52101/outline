export const baseUrl = 'http://120.76.247.5:2001'
export const apiUrl = baseUrl + '/api'
function request(url, data, config = {}) {
    return new Promise((resolve, reject) => {
        wx.request({
            ...config,
            url: apiUrl + url,
            data,
            success: ({ data }) => {
                resolve(data);
            },
            fail() {
                reject()
            }
        })
    })
}

request.get = function(url,data,config={}){
    config.method = 'get';
    return request(url,data,config)
}
request.post = function(url,data,config={}){
    config.method = 'post';
    return request(url,data,config)
}
request.put = function(url,data,config={}){
    config.method = 'put';
    return request(url,data,config)
}
request.patch = function(url,data,config={}){
    config.method = 'patch';
    return request(url,data,config)
}
request.delete = function(url,data,config={}){
    config.method = 'delete';
    return request(url,data,config)
}

export default request;