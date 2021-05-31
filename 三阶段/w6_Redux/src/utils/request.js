export const baseUrl = process.env.NODE_ENV==='production' ? 'http://120.76.247.5:2002' : '';
export const apiUrl = baseUrl + '/api'
function request(url, data = {}, config = {}) {
    url = url.startsWith('http') ? url : apiUrl + url;
    let { method = 'get' } = config;
    method = method.toLowerCase();
    config.method = method;

    if (!config.headers) {
        config.headers = {}
    }

    if (['get'].includes(method)) {
        const params = []; // ['a=1','b=2','c=3']
        for (let key in data) {
            params.push(`${key}=${data[key]}`)
        }
        if(params.length>0){
            // '/api/class'-> '/api/class?a=1&b=2&c=3
            // '/api/class?username=lx'-> '/api/class?username=lx&a=1&b=2&c=3
            url = url + (url.includes('?') ? '&' : '?') + params.join('&'); //'a=1&b=2&c=3'
        }
    } else if (['post', 'put', 'patch','delete'].includes(method)) {

        config.body = JSON.stringify(data);

        // 设置请求头content-type=application/json
        config.headers['Content-Type'] = 'application/json'
    }

    config.headers.authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imxhb3hpZSIsImlhdCI6MTYyMjQyNzI2NCwiZXhwIjoxNjIyNDM0NDY0fQ.bQtwxMBs65-4LY3i8H2YaZc8gh7BYMZF8w06YFsct38'

    return fetch(url, {
        ...config
    }).then(response=>{
        return response.json();
    })
}

request.get = function(url,data,config={}){
    config.method = 'get';
    return request(url,data,config);
}
request.post = function(url,data,config={}){
    config.method = 'post';
    return request(url,data,config);
}
request.put = function(url,data,config={}){
    config.method = 'put';
    return request(url,data,config);
}
request.patch = function(url,data,config={}){
    config.method = 'patch';
    return request(url,data,config);
}
request.delete = function(url,data,config={}){
    config.method = 'delete';
    return request(url,data,config);
}

export default request;