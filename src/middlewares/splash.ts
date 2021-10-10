import { WrapperCallback, Splash, Wrapper } from '..';

export function SplashsMiddleware(): WrapperCallback {
  return Wrapper(async (req, res, next) => {
    try {
      req.splashs = await Splash.getSplashViews();
    } catch (err: any) {}
    next();
  });
}
