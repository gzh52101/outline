const {MongoClient} = require('mongodb');
const {formatId} = require('../utils')
//1.连接mongoDB
// MongoClient.connect("mongodb://localhost:27017", async function(err, client) {
//     // client: 客户端
//     if(err) throw err;

//     // 2. 连接具体数据库，无则自动创建，返回数据库对象
//     const db = client.db('h52101');

//     // 3. 获取集合
//     const user = db.collection('user');

//     // 4. 数据CRUD
//     // 查： 返回查询结果集
//     const result = user.find()

//     const data = await result.toArray();
//     console.log('data=',data);

//     // db.user.find()

//     // 5. 释放资源占用
//     client.close();
//   });

async function connect(){
    const client = await MongoClient.connect("mongodb://localhost:27017",{ useUnifiedTopology: true })
    const db = client.db('h52101');
    return {
        client,
        db
    }
}

exports.insert = async function(colName,data){
    const {client,db} = await connect();
    const col = db.collection(colName);

    

    try{
        if(Array.isArray(data)){
            await col.insertMany(data)
        }else{
            await col.insertOne(data)
        }
        result = true;
    }catch(err){
        result = false;
    }

    client.close();
    return result;
}
// insert('user',{username:'laoxie',age:18})
// insert('user',[{username:'laoxie',age:18},{username:'jj',age:36}])

exports.remove = async function(colName,query){
    const {client,db} = await connect();
    const col = db.collection(colName);

    // id->ObjectId
    if(query?._id){
        query._id = formatId(query._id)
    }

    let result;
    try{
        await col.deleteMany(query)
        result = true;
    }catch(err){
        result = false;
    }

    client.close();
    return result;
}

exports.update = async function(colName,query,data){
    const {client,db} = await connect();
    const col = db.collection(colName);

    // id->ObjectId
    if(query?._id){
        query._id = formatId(query._id)
    }

    let result;
    try{
        await col.updateMany(query,data);
        result = true;
    }catch(err){
        result = false;
    }

    client.close();
    return result;
}
// update('user',{username:'laoxie'},{$inc:{age:19}})

exports.find = async function(colName,query,{skip,limit,sort,projection}={}){
    const {client,db} = await connect();
    const col = db.collection(colName);

    // id->ObjectId
    // if(typeof query?._id === 'string'){ // 该写法等效于：query && query._id
    //     query._id = ObjectId(query._id)
    // }
    if(query?._id){
        query._id = formatId(query._id)
    }

    let result = col.find(query,{
        projection
    })

    if(sort !== undefined){
        result = result.sort(sort)
    }

    if(skip !== undefined){
        result = result.skip(skip);
    }

    if(limit !== undefined){
        result = result.limit(limit);
    }

    result = await result.toArray()
    client.close();
    return result;
}

// find('user',{age:26})
// find('goods',{age:26},{skip:10,limit:15,sort:{price:1}})

// module.exports = {
//     connect,
//     find,
// }