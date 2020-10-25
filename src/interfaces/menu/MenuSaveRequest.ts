/**
 * メニューを保存するオブジェクト
 */
export interface MenuSaveRequest {
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
