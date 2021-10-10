import { WeblinkModel } from '@prisma/client';
import { prisma, RESULT } from '..';

export class Weblink {
  public static async getWeblinks(): Promise<WeblinkModel[]> {
    return prisma.weblinkModel.findMany({ where: {} });
  }

  public static async getWeblink(
    weblinkId: string
  ): Promise<WeblinkModel | null> {
    return prisma.weblinkModel.findFirst({ where: { weblinkId } });
  }

  public static async getWeblinkOrThrow(
    weblinkId: string
  ): Promise<WeblinkModel> {
    const weblink = await Weblink.getWeblink(weblinkId);
    if (!weblink) throw RESULT.CANNOT_FIND_WEBLINK();
    return weblink;
  }
}
