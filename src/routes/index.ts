import { Router } from 'express';
import {
  clusterInfo,
  EndpointsMiddleware,
  getWeblinksRouter,
  OPCODE,
  PromiseMiddleware,
  SplashsMiddleware,
  VersionsMiddleware,
  Wrapper,
} from '..';

export * from './weblinks';

export function getRouter(): Router {
  const router = Router();

  router.use('/weblinks', getWeblinksRouter());

  router.get(
    '/',
    PromiseMiddleware(
      EndpointsMiddleware(),
      VersionsMiddleware(),
      SplashsMiddleware()
    ),
    Wrapper(async (req, res) => {
      const { versions, endpoints, splashs } = req;
      res.json({
        opcode: OPCODE.SUCCESS,
        ...clusterInfo,
        versions,
        endpoints,
        splashs,
      });
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

  router.get(
    '/splashs',
    SplashsMiddleware(),
    Wrapper(async (req, res) => {
      const { splashs } = req;
      res.json({ opcode: OPCODE.SUCCESS, splashs });
    })
  );

  return router;
}
