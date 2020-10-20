import Router from '@koa/router'

const router = new Router()

router.get('/', async(ctx) =>{
    try {
        ctx.status=200
        ctx.body != { 
            'hello':'world'
        }
    } catch (error) {
        console.error(error)
    }
})

export default router