import { WrapperCallback, Endpoint, Wrapper } from '..';

export function EndpointsMiddleware(): WrapperCallback {
  return Wrapper(async (req, res, next) => {
    try {
      req.endpoints = await Endpoint.getEndpointViews();
    } catch (err: any) {}
    next();
  });
}
