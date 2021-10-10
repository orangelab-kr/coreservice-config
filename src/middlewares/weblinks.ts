import { Callback, InternalError, OPCODE, Weblink, Wrapper } from '..';

export function WeblinksMiddleware(): Callback {
  return Wrapper(async (req, res, next) => {
    try {
      req.weblinks = await Weblink.getWeblinks();
    } catch (err: any) {
      console.log(err);
    }
    next();
  });
}

export function WeblinkMiddleware(): Callback {
  return Wrapper(async (req, res, next) => {
    const { weblinkId } = req.params;
    if (!weblinkId) {
      throw new InternalError('웹링크를 찾을 수 없습니다.', OPCODE.ERROR);
    }

    req.weblink = await Weblink.getWeblinkOrThrow(weblinkId);
    next();
  });
}
