import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from "src/user/schemas/user.schema";

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop({ required: true, isRequired: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }] })
  autherId: User
}

export const ArticleSchema = SchemaFactory.createForClass(Article);