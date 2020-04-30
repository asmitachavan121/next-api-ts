/* eslint-env jest */
const fetch = require('node-fetch')

describe('fetching data', () => {
    it('should return data for id:e875',async () => {
        expect.assertions(1)
        try {
            const res = await fetch('http://localhost:3000/api/get?id=e875')
            // console.log(res.body)
            expect(res.status).toBe(200)
        }catch(e) {
            console.log(e)
        }
    })

    it('should return http code 500',async () => {
        expect.assertions(1)
        try {
            const res = await fetch('http://localhost:3000/api/get?id=5')
            // console.log(res.body)
            expect(res.status).toBe(500)
        }catch(e) {
            console.log(e)
        }
    })
})

describe('posting data' ,() => {
    it('should post the data with response status 201', async () => {
        expect.assertions(1)
        try{
            const res = await fetch('http://localhost:3000/api/post?id=1', {
                method:'post',
                body: {
                    "title":"posted using fetch test"
                }
            })

            expect(res.status).toBe(201)

        } catch(e) {
            console.log(e)
        }
    })

    it('This should return response status 405', async () => {
        expect.assertions(1)
        try{
            const res = await fetch('http://localhost:3000/api/post')

            expect(res.status).toBe(405)

        } catch(e) {
            console.log(e)
        }
    })
})

describe('updating data' ,() => {
    it('This should update the data with response status 200', async () => {
        expect.assertions(1)
        try{
            const res = await fetch('http://localhost:3000/api/patch?id=1', {
                method:'patch',
                body: JSON.stringify({
                    "title":"updated using fetch test"
                })
            })

            expect(res.status).toBe(200)

        } catch(e) {
            console.log(e)
        }
    })

    it('This should update the data with response status 405', async () => {
        expect.assertions(1)
        try{
            const res = await fetch('http://localhost:3000/api/patch?id=1', {
                method:'post',
                body: JSON.stringify({
                    "title":"updated using fetch test"
                })
            })

            expect(res.status).toBe(405)

        } catch(e) {
            console.log(e)
        }
    })
})

describe('deleting data' ,() => {
    it('This should send response status 400', async () => {
        expect.assertions(1)
        try{
            const res = await fetch('http://localhost:3000/api/delete', {
                method:'delete'
            })

            expect(res.status).toBe(400)

        } catch(e) {
            console.log(e)
        }
    })
})

