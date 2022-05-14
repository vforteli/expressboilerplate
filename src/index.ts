import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

const app: Express = express()
const port = 3001

app.get('/', (req: Request, res: Response) => {

    res.send('Express + TypeScript Server huzzaah' + req.params['foo'])
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
});

process.on('SIGINT', () => {
    console.log('byebye...')
    process.exit(0)
})
