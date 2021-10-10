import { Callback, Endpoint, Wrapper } from '..';

export function EndpointsMiddleware(): Callback {
  return Wrapper(async (req, res, next) => {
    try {
      req.endpoints = await Endpoint.getEndpointViews();
    } catch (err: any) {}
    next();
  });
}
