import {
  Body,
  Controller,
  Get,
  Post,
  Route,
  SuccessResponse,
  Tags,
} from "tsoa";
import { TagResponse } from "./TagResponse";
import { TagSaveRequest } from "./TagSaveRequest";

@Route("tag")
@Tags("Tag")
export class TagController extends Controller {
  /**
   * タグを全取得する
   */
  @Get()
  public async getTags(): Promise<TagResponse[]> {
    const tags: TagResponse[] = [
      {
        tagId: 1,
        tagName: "test_tag",
      },
    ];
    return tags;
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createTag(@Body() requestBody: TagSaveRequest): Promise<void> {
    this.setStatus(201);
    return;
  }
}
