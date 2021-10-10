import { WeblinkModel } from '@prisma/client';
import { InternalError, OPCODE, prisma } from '..';

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
    if (!weblink) {
      throw new InternalError('웹링크를 찾을 수 없습니다.', OPCODE.ERROR);
    }

    return weblink;
  }
}
