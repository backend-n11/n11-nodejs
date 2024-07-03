import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Article } from "./schema/article.schema";
import { Model } from "mongoose";

@Injectable()
export class ArticleService {
  constructor(@InjectModel(Article.name) private readonly articleModule: Model<Article>) { }
  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const newArticle = await this.articleModule.create(createArticleDto);
    await newArticle.save()
    return newArticle
  }

  findAll() {
    return `This action returns all article`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
