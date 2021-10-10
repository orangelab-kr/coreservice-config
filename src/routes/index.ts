import { Router } from 'express';
import {
  clusterInfo,
  EndpointsMiddleware,
  getWeblinksRouter,
  PromiseMiddleware,
  RESULT,
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
    Wrapper(async (req) => {
      const { versions, endpoints, splashs } = req;
      throw RESULT.SUCCESS({
        details: { ...clusterInfo, versions, endpoints, splashs },
      });
    })
  );

  router.get(
    '/endpoints',
    EndpointsMiddleware(),
    Wrapper(async (req) => {
      const { endpoints } = req;
      throw RESULT.SUCCESS({ details: { endpoints } });
    })
  );

  router.get(
    '/versions',
    VersionsMiddleware(),
    Wrapper(async (req) => {
      const { versions } = req;
      throw RESULT.SUCCESS({ details: { versions } });
    })
  );

  router.get(
    '/splashs',
    SplashsMiddleware(),
    Wrapper(async (req) => {
      const { splashs } = req;
      throw RESULT.SUCCESS({ details: { splashs } });
    })
  );

  return router;
}
