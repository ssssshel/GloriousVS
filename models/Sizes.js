import mongoose from "mongoose";

const SizesSchema = new mongoose.Schema({
  size1: {
    size: {
      type: String
    },
    stock: {
      type: Number
    },
    prize: {
      type: String
    },
  },
  size2: {
    size: {
      type: String
    },
    stock: {
      type: Number
    },
    prize: {
      type: String
    },
  },
  size3: {
    size: {
      type: String
    },
    stock: {
      type: Number
    },
    prize: {
      type: String
    },
  },
  size4: {
    size: {
      type: String
    },
    stock: {
      type: Number
    },
    prize: {
      type: String
    },
  },
})

export default mongoose.models.Size || mongoose.model("Size", SizesSchema)