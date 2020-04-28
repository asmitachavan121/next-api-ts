import {NextApiRequest, NextApiResponse } from 'next'
import Couchbase from 'couchbase'

export default async (request: NextApiRequest, response: NextApiResponse) => {

    const cluster = new Couchbase.Cluster("http://localhost:8091",{username:'Administrator', password:'password'})
    var bucket = cluster.bucket('default')
    var collection = bucket.defaultCollection();
    var myCollection = bucket.collection("my-collection");
    
    const method:string = request.method
    const query = request.query
    if(query.id != undefined) {
        var id:string = query.id.toString()
    }
    else {
       return response.status(400).send('provide document id in request and data in request body')
    }
    if(method !== 'PATCH') 
        return response.status(405).end('use PATCH method')
    try {
        var result = await collection.replace(id, request.body);
        response.send(result)
    }catch(e) {
        if(e.cause.code == 301) {
            response.status(404).send(e.message)
        }
        response.status(500).send(e.message)
    }
    response.end(`Patch page`)
}