import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Route,
  SuccessResponse,
  Tags,
} from "tsoa";
import { MenuResponse } from "./MenuResponse";
import { MenuSaveRequest } from "./MenuSaveRequest";
import { MenuUpdateRequest } from "./MenuUpdateRequest";

@Route("menu")
@Tags("Menu")
export class MenuController extends Controller {
  /**
   * メニューを全取得する
   */
  @Get()
  public async getMenus(): Promise<MenuResponse[]> {
    const menus: MenuResponse[] = [
      {
        menuId: 1,
        trainingName: "test_training",
        purpose: "test_purpose",
        organize: "test_organize",
        tagId: 1,
        userId: 1,
        figureUrl: "test_url_f",
        videoUrl: "test_url_v",
        createdAt: new Date(),
      },
    ];
    return menus;
  }

  /**
   * メニューを単体取得する
   */
  @Get()
  public async getMenu(): Promise<MenuResponse> {
    const menu: MenuResponse = {
      menuId: 1,
      trainingName: "test_training",
      purpose: "test_purpose",
      organize: "test_organize",
      tagId: 1,
      userId: 1,
      figureUrl: "test_url_f",
      videoUrl: "test_url_v",
      createdAt: new Date(),
    };
    return menu;
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createMenu(
    @Body() requestBody: MenuUpdateRequest
  ): Promise<void> {
    this.setStatus(201);
    return;
  }

  @SuccessResponse("201", "Created")
  @Patch()
  public async updateMenu(@Body() requestBody: MenuSaveRequest): Promise<void> {
    this.setStatus(201);
    return;
  }
}
