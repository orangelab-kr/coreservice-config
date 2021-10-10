import { WrapperCallback, Version, Wrapper } from '..';

export function VersionsMiddleware(): WrapperCallback {
  return Wrapper(async (req, res, next) => {
    try {
      req.versions = await Version.getVersionViews();
    } catch (err: any) {}
    next();
  });
}
