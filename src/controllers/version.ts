import { prisma } from '..';

export interface VersionView {
  [key: string]: { [key: string]: string };
}

export class Version {
  public static async getVersionViews(): Promise<VersionView> {
    const versionView: VersionView = {};
    const versions = await prisma.versionModel.findMany({ where: {} });
    versions.forEach(({ versionName, versionStage, targetVersion }) => {
      if (!versionView[versionName]) versionView[versionName] = {};
      versionView[versionName][versionStage] = targetVersion;
    });

    return versionView;
  }
}
