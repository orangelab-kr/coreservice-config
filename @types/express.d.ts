import { SplashModel } from '@prisma/client';
import 'express';
import { EndpointView, VersionView } from '../src';

declare global {
  namespace Express {
    interface Request {
      endpoints: EndpointView;
      versions: VersionView;
      splashs: string[];
      weblinks: WeblinkModel[];
      weblink: WeblinkModel;
    }
  }
}
