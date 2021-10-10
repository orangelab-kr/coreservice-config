import { Router } from 'express';
import { RESULT, WeblinkMiddleware, WeblinksMiddleware, Wrapper } from '..';

export function getWeblinksRouter(): Router {
  const router = Router();

  router.get(
    '/',
    WeblinksMiddleware(),
    Wrapper(async (req) => {
      const { weblinks } = req;
      throw RESULT.SUCCESS({ details: { weblinks } });
    })
  );

  router.get(
    '/:weblinkId',
    WeblinkMiddleware(),
    Wrapper(async (req) => {
      const { weblink } = req;
      throw RESULT.SUCCESS({ details: { weblink } });
    })
  );

  router.get(
    '/:weblinkId/redirect',
    WeblinkMiddleware(),
    Wrapper(async (req, res) => {
      const { url } = req.weblink;
      res.redirect(302, url);
    })
  );

  return router;
}
