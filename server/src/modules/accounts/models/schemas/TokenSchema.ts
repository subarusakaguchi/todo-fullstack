import { Schema } from "mongoose";

const TokenSchema = new Schema({
  token: {
    type: String,
    required: true,
    isUnique: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    isUnique: true,
  },
  expires_date: {
    type: Date,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export { TokenSchema };
