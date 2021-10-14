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
      const { query, weblink } = req;
      const url = new URL(weblink.url);
      Object.entries(query).forEach(([key, value]: any) =>
        url.searchParams.append(key, value)
      );

      res.redirect(302, url.href);
    })
  );

  return router;
}
