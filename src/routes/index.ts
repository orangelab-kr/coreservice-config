import { Router } from 'express';
import {
  clusterInfo,
  EndpointsMiddleware,
  OPCODE,
  PromiseMiddleware,
  Wrapper,
} from '..';

export function getRouter(): Router {
  const router = Router();

  router.get(
    '/',
    PromiseMiddleware(EndpointsMiddleware()),
    Wrapper(async (req, res) => {
      const { endpoints } = req;
      res.json({ opcode: OPCODE.SUCCESS, ...clusterInfo, endpoints });
    })
  );

  router.get(
    '/endpoints',
    EndpointsMiddleware(),
    Wrapper(async (req, res) => {
      const { endpoints } = req;
      res.json({ opcode: OPCODE.SUCCESS, endpoints });
    })
  );

  return router;
}
