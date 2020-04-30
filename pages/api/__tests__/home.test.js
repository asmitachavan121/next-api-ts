const {NextApiRequest, NextApiResponse} = require("next") 
const http = require('http')
const fetch = require('isomorphic-unfetch')
const listen = require('test-listen')
const {apiResolver} = require('next/dist/next-server/server/api-utils')
const handler = require('../get')

// import {handler} from "../home"
// import http from "http"
// import fetch from "isomorphic-unfetch"
// import listen from "test-listen"
// import { apiResolver } from "next-server/dist/next-server/server/api-utils"

describe("api/home handler", () => {
    test("responds 200 to authed GET", async () => {
        expect.assertions(1)
        
        try {
            // let requestHandler = (req, res) => {
            //     res.user = { username: "scooby"}
            //     return apiResolver(req, res, undefined, handler)
            // }
            // let server = http.createServer(requestHandler)
            // let url = await listen(server)
            let response = await fetch('http://localhost:3000/api/get')
            expect(response.status).toBe(200)
            return server.close()
        } catch(e) {
            return console.log(e)
        }
       
    })
})