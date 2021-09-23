import { Callback, Version, Wrapper } from '..';

export function VersionsMiddleware(): Callback {
  return Wrapper(async (req, res, next) => {
    try {
      req.versions = await Version.getVersionViews();
    } catch (err) {}
    next();
  });
}
