/**
 * ユーザ情報の保存用オブジェクト
 */
export interface UserSaveRequest {
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
