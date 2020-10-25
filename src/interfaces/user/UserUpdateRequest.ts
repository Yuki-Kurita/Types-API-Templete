/**
 * ユーザ情報の更新用オブジェクト
 */
export interface UserUpdateRequest {
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
