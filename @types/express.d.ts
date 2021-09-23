import 'express';
import { EndpointView } from '../src';

declare global {
  namespace Express {
    interface Request {
      endpoints: EndpointView;
    }
  }
}
