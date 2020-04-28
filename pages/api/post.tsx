import {NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'
import Couchbase from 'couchbase'


export default async (request: NextApiRequest, response: NextApiResponse) => {

    const cluster = new Couchbase.Cluster("http://localhost:8091",{username:'Administrator', password:'password'})
    var bucket = cluster.bucket('default')
    var collection = bucket.defaultCollection();
    var myCollection = bucket.collection("my-collection");
    
    const method:string = request.method
    const query = request.query
    
    var id:string = query.id?query.id:uuidv4()
    console.log(id)

    if(method !== 'POST') 
        return response.status(405).send('use POST method')
    try{
        var upsertResult = await collection.upsert(id, request.body);
        return response.status(201).send(upsertResult)
    }catch(e){
        response.status(500).send(e.message)
    }
        
}