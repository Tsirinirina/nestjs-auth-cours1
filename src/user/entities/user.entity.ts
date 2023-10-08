import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Role {
  ADMIN = 'Admin',
  USER = 'User',
}

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({ type: String, required: true })
  fullName: string;

  @Prop({ type: String, required: true })
  userName: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, enum: Object.values(Role), required: true })
  roleName: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
