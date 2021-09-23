import { EndpointStatus } from '@prisma/client';
import { prisma } from '..';

export interface EndpointView {
  [key: string]: {
    status: EndpointStatus;
    url: string;
  };
}

export class Endpoint {
  public static async getEndpointViews(): Promise<EndpointView> {
    const endpointView: EndpointView = {};
    const endpoints = await prisma.endpointModel.findMany({ where: {} });
    endpoints.forEach(
      ({ serviceName, url, status }) =>
        (endpointView[serviceName] = { url, status })
    );

    return endpointView;
  }
}
