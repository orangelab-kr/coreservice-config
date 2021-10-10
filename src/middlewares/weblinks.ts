import { RESULT, Weblink, Wrapper, WrapperCallback } from '..';

export function WeblinksMiddleware(): WrapperCallback {
  return Wrapper(async (req, res, next) => {
    try {
      req.weblinks = await Weblink.getWeblinks();
    } catch (err: any) {}
    next();
  });
}

export function WeblinkMiddleware(): WrapperCallback {
  return Wrapper(async (req, res, next) => {
    const { weblinkId } = req.params;
    if (!weblinkId) throw RESULT.CANNOT_FIND_WEBLINK();
    req.weblink = await Weblink.getWeblinkOrThrow(weblinkId);
    next();
  });
}
