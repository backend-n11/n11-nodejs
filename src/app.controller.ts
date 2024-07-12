import {
  Controller,
  FileTypeValidator,
  Get,
  ParseFilePipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from "@nestjs/common";
import { AnyFilesInterceptor, FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("upload")
  @UseInterceptors(AnyFilesInterceptor())
  uploadFile3(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }

  @Post("fileupload")
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./uploads",
        filename(req, file, callback) {
          console.log(file.originalname);
          callback(null, file.originalname);
        },
      }),
      // fileFilter(req, file, callback) {
      //   const mimetypes = ["image/png"]
      //   const mimetype = file.mimetype
      //   if (!mimetypes.includes(mimetype)) {
      //     return callback(new BadRequestException, false)
      //   }
      //   callback(null, true)
      // },
    }),
    // limits: {
    // },
  )
  fileUplod(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/ }),
          // new FileTypeValidator({ fileType: 'image/jpeg' })
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    // console.log(file);
    return file;
  }

  @Post("uploads")
  @UseInterceptors(
    FileInterceptor("files", {
      storage: diskStorage({
        destination: "./uploads",
      }),
    }),
  )
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return files;
  }
}
