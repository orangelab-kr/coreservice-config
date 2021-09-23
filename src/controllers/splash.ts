import { prisma } from '..';

export class Splash {
  public static async getSplashViews(): Promise<string[]> {
    return prisma.splashModel
      .findMany({ where: {} })
      .then((splashs) => splashs.map((splash) => splash.url));
  }
}
