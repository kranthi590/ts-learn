import mongoose from 'mongoose';

const { Schema, model } = mongoose;

export enum Gender {
  male = 'male',
  female = 'female',
  undisclosed = 'undisclosed',
}

export interface Address {
  street: string;
  city: string;
  postCode: string;
}

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  gender?: Gender;
  address?: Address;
}

const UserSchema: mongoose.Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    // Gets the Mongoose enum from the TypeScript enum
    gender: { type: String, enum: Object.values(Gender) },
    address: {
      street: { type: String },
      city: { type: String },
      postCode: { type: String },
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

// Export the model and return your IUser interface
export default model<IUser>('User', UserSchema);
