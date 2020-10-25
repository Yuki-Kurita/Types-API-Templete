/**
 * ユーザ情報を含むレスポンスオブジェクト
 */
export interface UserResponse {
  /**
   * Firebase上のユーザID
   */
  fireId: string;
  /**
   * 氏名
   */
  lastName: string;
  /**
   * 名前
   */
  firstName: string;
  /**
   * 誕生日
   */
  birthDay: string;
}
