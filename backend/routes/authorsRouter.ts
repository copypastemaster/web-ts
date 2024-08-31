import { Router, Request, Response } from 'express'

const authorsRouter: Router = Router();

authorsRouter.get('/', (req: Request, res:Response) => res.send('All authors!'))
authorsRouter.get('/:authorId', (req: Request, res: Response) => {
  const { authorId } = req.params;
  res.send(`Author ids: ${authorId}`)
})

export default authorsRouter