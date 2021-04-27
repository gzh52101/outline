const baseUrl = 'http://localhost:2101/api';
function request(url,{method='get',data={}}={}){
    return new Promise((resolve,reject)=>{
        url = baseUrl + url;
        method = method.toLocaleLowerCase();
    
        let params = [];
        for(let key in data){
            params.push(`${key}=${data[key]}`);  // [key=value,key=value,key=value]
        }
        params = params.join('&'); // key=value&key=value&key=value
    
    
        if(['get','delete','options'].includes(method)){
            url = url + (url.includes('?') ? '&' : '?') + params;
            params = null;
        }
    
        const xhr = new XMLHttpRequest();
        xhr.onload = function(){
            let result;
            if(xhr.status === 200){
                // try{
                //     result = JSON.parse(xhr.responseText)
                // }catch(err){
                //     result = xhr.responseText
                // }
                result = JSON.parse(xhr.responseText)
                resolve(result)
            }else{
                reject()
            }
        }
        xhr.open(method,url,true)
    
        if(['post','patch','put'].includes(method)){
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        }
    
        xhr.send(params)

    })
}

request.get = function(url,data){
    return request(url,{method:'get',data});
}
request.post = function(url,data){
    return request(url,{method:'post',data});
}
request.put = function(url,data){
    return request(url,{method:'put',data});
}
request.patch = function(url,data){
    return request(url,{method:'patch',data});
}
request.delete = function(url,data){
    return request(url,{method:'delete',data});
}