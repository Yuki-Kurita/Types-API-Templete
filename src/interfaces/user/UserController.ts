import {
  Body,
  Controller,
  Get,
  Patch,
  Path,
  Post,
  Route,
  SuccessResponse,
  Tags,
} from "tsoa";
import { UserResponse } from "./UserResponse";
import { UserSaveRequest } from "./UserSaveRequest";
import { UserUpdateRequest } from "./UserUpdateRequest";

@Route("user")
@Tags("User")
export class UserController extends Controller {
  /**
   * FirebaseのユーザIDを指定してUser情報を取得する
   * @param fireId FirebaseのUID
   */
  @Get("{fireId}")
  public async getUser(@Path() fireId: string): Promise<UserResponse> {
    const user: UserResponse = {
      fireId: "test_id",
      firstName: "fuga",
      lastName: "hoge",
      birthDay: "test_day",
    };
    return user;
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createUser(@Body() requestBody: UserSaveRequest): Promise<void> {
    this.setStatus(201);
    return;
  }

  @SuccessResponse("201", "Created")
  @Patch()
  public async updateUser(
    @Body() requestBody: UserUpdateRequest
  ): Promise<void> {
    this.setStatus(201);
    return;
  }
}
