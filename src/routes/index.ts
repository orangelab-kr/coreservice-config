import { Router } from 'express';
import {
  clusterInfo,
  EndpointsMiddleware,
  OPCODE,
  PromiseMiddleware,
  VersionsMiddleware,
  Wrapper,
} from '..';

export function getRouter(): Router {
  const router = Router();

  router.get(
    '/',
    PromiseMiddleware(EndpointsMiddleware(), VersionsMiddleware()),
    Wrapper(async (req, res) => {
      const { versions, endpoints } = req;
      res.json({ opcode: OPCODE.SUCCESS, ...clusterInfo, versions, endpoints });
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

  router.get(
    '/versions',
    VersionsMiddleware(),
    Wrapper(async (req, res) => {
      const { versions } = req;
      res.json({ opcode: OPCODE.SUCCESS, versions });
    })
  );

  return router;
}
