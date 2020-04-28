import {NextApiRequest, NextApiResponse } from 'next'
import Couchbase from 'couchbase'

export default async (request: NextApiRequest, response: NextApiResponse) => {

    const cluster = new Couchbase.Cluster("http://localhost:8091",{username:'Administrator', password:'password'})
    var bucket = cluster.bucket('default')
    var collection = bucket.defaultCollection();
    var myCollection = bucket.collection("my-collection");
    
    const method:string = request.method
    const query = request.query
    // var id
    // query?id=query.id
    if(query.id != undefined) {
        // console.log(query)
        var id:string = query.id.toString()
    }
    else {
       return response.status(400).send('provide document id in request')
    }
    if(method !== 'DELETE') 
        return response.status(405).end(`use DELETE method`)

    try {
        var result = await collection.remove(id)
        console.log(typeof(result))
        response.send(result)
    } catch(e) {
        if(e.cause.code == 301) {
            response.status(404).send(e.message)
        }
        response.status(500).send(e.message)
    }
   
}