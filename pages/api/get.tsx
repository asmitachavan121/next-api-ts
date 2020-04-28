import {NextApiRequest, NextApiResponse } from 'next'
import Couchbase from 'couchbase'

export default async (request: NextApiRequest, response: NextApiResponse) => {

    const cluster = new Couchbase.Cluster("http://localhost:8091",{username:'Administrator', password:'password'})
    var bucket = cluster.bucket('default')
    var collection = bucket.defaultCollection();
    var myCollection = bucket.collection("my-collection");
    
    const method:string = request.method
    const query = request.query
    
    if(query.id != undefined)
        var id:string = query.id.toString()
    else {
        response.status(400).send(`provide document id in request query`)
    }
    
    if(method !== 'GET') 
        return response.status(405).send('use GET method')
    try{
        var result = await collection.get(id)
        response.send(result.value)
    }catch(e){
        if(e.cause.code == 301) {
            return response.status(404).send(e.message)
        }
        response.status(500).send(e)
    }
        
}