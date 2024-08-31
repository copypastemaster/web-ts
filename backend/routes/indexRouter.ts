import { Router, Request, Response } from "express";

const indexRouter: Router = Router()

indexRouter.get('/', (req: Request, res: Response) => res.send("Hello world!!"))


export default indexRouter