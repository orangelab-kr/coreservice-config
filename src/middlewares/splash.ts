import { Callback, Splash, Wrapper } from '..';

export function SplashsMiddleware(): Callback {
  return Wrapper(async (req, res, next) => {
    try {
      req.splashs = await Splash.getSplashViews();
    } catch (err: any) {}
    next();
  });
}
