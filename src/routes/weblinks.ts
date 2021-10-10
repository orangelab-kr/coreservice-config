import { Router } from 'express';
import { OPCODE, WeblinksMiddleware, WeblinkMiddleware, Wrapper } from '..';

export function getWeblinksRouter(): Router {
  const router = Router();

  router.get(
    '/',
    WeblinksMiddleware(),
    Wrapper(async (req, res) => {
      const { weblinks } = req;
      res.json({ opcode: OPCODE.SUCCESS, weblinks });
    })
  );

  router.get(
    '/:weblinkId',
    WeblinkMiddleware(),
    Wrapper(async (req, res) => {
      const { weblink } = req;
      res.json({ opcode: OPCODE.SUCCESS, weblink });
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
