const request = require('request');
const cheerio = require('cheerio');
const superagent = require('superagent')
const iconv = require('iconv-lite')
const fs = require('fs')
const path = require('path');

// request.get('http://localhost:2101/api/goodslist',(err,res,body)=>{
//     console.log('body=',body);

//     const $ = cheerio.load(body)

//     const goodslist = [];
//     $('.goodslist li').each((idx,el)=>{
//         const price = $(el).find('.price').text().match(/[\d\.]+/);
//         const goods = {
//             id:$(el).data('id'),
//             name:$(el).find('h4').text(),
//             price:price ? price[0] : 0,
//             imgurl:$(el).find('img').attr('src')
//         }

//         goodslist.push(goods);
//     });

//     console.log('goodslist=',goodslist);
// })

// superagent.get('https://www.wbiao.cn/search/share/list/?bCode=111&w=%E7%99%BE%E8%BE%BE%E7%BF%A1%E4%B8%BD&exposedFrom=1').then((body,a,b)=>{
//     console.log('body=',body,a,b)
// })


request({
    url:'http://www.4399.com/flash_fl/2_1.htm',
    encoding: null,
    // headers:{
    //     ':authority': 'www.wbiao.cn',
    //     ':method': 'GET',
    //     ':path': '/search/share/list/?bCode=111&w=%E7%99%BE%E8%BE%BE%E7%BF%A1%E4%B8%BD&exposedFrom=1',
    //     ':scheme': 'https',
    //     'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //     'accept-encoding': 'gzip, deflate, br',
    //     'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    //     'cache-control': 'max-age=0',
    //     'cookie': 'OZ_1U_2037=vid=v99db2c5c0b106.0&ctime=1503507140&ltime=0; WBIAOID=fee01e3d0da8c342b0de56e82347007f29bbf6e9%7Ef2031346363c8b8807ab7be46c2b09d7; NTKF_T2D_CLIENTID=guest8B459F5E-9418-A43B-AED3-100253872D6F; _ga=GA1.2.872240365.1503507142; wbiaoid=610335433b8829cb6219916ac2b25eb4; wbiaoid.sig=uU8RwfR6pEcgmMUG6JAeizOaW1jCk37sIllx9ZxEyqI; showNum=0; Hm_lvt_d8e95c635d8135c55060c556fd69e039=1619080456; nTalk_CACHE_DATA={uid:wx_1000_ISME9754_guest8B459F5E-9418-A4,tid:1619080456813673}; _gid=GA1.2.425909383.1619080457; acw_tc=0ed717ca16190804728124297ec0e8d444718410d5acaac3049cf53859; wTk=4z8NEd_CphES-tbthgoSGF8m; w_info=eyJlbnYiOiJwcm9kIn0=; Hm_lpvt_d8e95c635d8135c55060c556fd69e039=1619080535',
    //     'if-modified-since': 'Thu, 22 Apr 2021 08:34:33 GMT',
    //     'referer': 'https://www.wbiao.cn/',
    //     'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
    //     'sec-ch-ua-mobile': '?0',
    //     'sec-fetch-dest': 'document',
    //     'sec-fetch-mode': 'navigate',
    //     'sec-fetch-site': 'same-origin',
    //     'sec-fetch-user': '?1',
    //     'upgrade-insecure-requests': 1,
    //     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36'
    // }
},(err,res,body)=>{
    body = iconv.decode(body, 'gb2312');
    console.log('body=',body);
    const $ = cheerio.load(body)
    const games = []

    $('#classic li').each((idx,el)=>{
        const $el = $(el);
        const $img = $el.find('img');
        const imgurl = 'http:'+$img.attr('lz_src')
        
        // 下载图片: request请求一个图片地址，得到一个文件流
        const filename = path.basename(imgurl);
        // 创建一个写入流
        const writerStream = fs.createWriteStream('../public/img/'+filename)
        request(imgurl).pipe(writerStream);
        const item = {
            name: $img.attr('alt'),
            imgurl:filename
        }
        games.push(item);

    })


    console.log('games=',games);
    // 存入json文件
    fs.writeFile('./mock/games.json',JSON.stringify(games),(err)=>{
        if(err){
            console.log('文件写入失败')
        }else{
            console.log('文件写入成功')
        }
    });
})