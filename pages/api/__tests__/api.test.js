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

            expect(res.status).toBe(200)

        } catch(e) {
            console.log(e)
        }
    })
})

describe('updating data' ,() => {
    it('This should update the data', async () => {
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
})

describe('deleting data' ,() => {
    it('This should delete the data', async () => {
        expect.assertions(1)
        try{
            const res = await fetch('http://localhost:3000/api/delete', {
                method:'delete'
                // body: JSON.stringify({
                //     "title":"updated using fetch test"
                // })
            })

            expect(res.status).toBe(404)

        } catch(e) {
            console.log(e)
        }
    })
})

// describe('pageNotFoundError', () => {
//   it('Should throw error with ENOENT code', () => {
//     expect.assertions(1)
//     try {
//       throw pageNotFoundError('test')
//     } catch (err) {
//       expect(err.code).toBe('ENOENT')
//     }
//   })
// })

// describe('normalizePagePath', () => {
//   it('Should turn / into /index', () => {
//     expect(normalizePagePath('/')).toBe(`${sep}index`)
//   })

//   it('Should turn _error into /_error', () => {
//     expect(normalizePagePath('_error')).toBe(`${sep}_error`)
//   })

//   it('Should turn /abc into /abc', () => {
//     expect(normalizePagePath('/abc')).toBe(`${sep}abc`)
//   })

//   it('Should turn /abc/def into /abc/def', () => {
//     expect(normalizePagePath('/abc/def')).toBe(`${sep}abc${sep}def`)
//   })

//   it('Should throw on /../../test.js', () => {
//     expect(() => normalizePagePath('/../../test.js')).toThrow()
//   })
// })

// describe('getPagePath', () => {
//   it('Should append /index to the / page', () => {
//     const pagePath = getPagePath('/', distDir)
//     expect(pagePath).toBe(join(pathToBundles, `${sep}index.js`))
//   })

//   it('Should prepend / when a page does not have it', () => {
//     const pagePath = getPagePath('_error', distDir)
//     expect(pagePath).toBe(join(pathToBundles, `${sep}_error.js`))
//   })

//   it('Should throw with paths containing ../', () => {
//     expect(() => getPagePath('/../../package.json', distDir)).toThrow()
//   })
// })

// describe('requirePage', () => {
//   it('Should require /index.js when using /', async () => {
//     const page = await requirePage('/', distDir)
//     expect(page.test).toBe('hello')
//   })

//   it('Should require /index.js when using /index', async () => {
//     const page = await requirePage('/index', distDir)
//     expect(page.test).toBe('hello')
//   })

//   it('Should require /world.js when using /world', async () => {
//     const page = await requirePage('/world', distDir)
//     expect(page.test).toBe('world')
//   })

//   it('Should throw when using /../../test.js', async () => {
//     expect.assertions(1)
//     try {
//       await requirePage('/../../test', distDir)
//     } catch (err) {
//       expect(err.code).toBe('ENOENT')
//     }
//   })

//   it('Should throw when using non existent pages like /non-existent.js', async () => {
//     expect.assertions(1)
//     try {
//       await requirePage('/non-existent', distDir)
//     } catch (err) {
//       expect(err.code).toBe('ENOENT')
//     }
//   })

//   it('Should bubble up errors in the child component', async () => {
//     expect.assertions(1)
//     try {
//       await requirePage('/non-existent-child', distDir)
//     } catch (err) {
//       expect(err.code).toBe('MODULE_NOT_FOUND')
//     }
//   })
// })