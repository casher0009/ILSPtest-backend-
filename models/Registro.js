const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RegSchema = new Schema(
  {
    name:String,
    inicial: {
      type: Number,
      default: 1,
      required: true
    },
    final: Number,
    primos: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = mongoose.model('Reg', RegSchema)
