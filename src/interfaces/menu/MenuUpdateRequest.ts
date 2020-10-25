/**
 * メニューを更新するオブジェクト
 */
export interface MenuUpdateRequest {
  /**
   * メニューID
   */
  menuId: number;
  /**
   * トレーニング名
   */
  trainingName: string;
  /**
   * トレーニングの目的
   */
  purpose: string;
  /**
   * 戦術の内容
   */
  organize: string;
  /**
   * タグのID
   */
  tagId: number;
  /**
   * ユーザのID
   */
  userId: number;
  /**
   * 戦術図のURL
   */
  figureUrl: string;
  /**
   * 動画のURL
   */
  videoUrl: string;
}
