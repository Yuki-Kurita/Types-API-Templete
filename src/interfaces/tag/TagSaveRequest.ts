/**
 * タグ情報を保存するオブジェクト
 */
export interface TagSaveRequest {
  /**
   * タグを識別するID
   */
  tagId: number;
  /**
   * タグ名
   */
  tagName: string;
}
