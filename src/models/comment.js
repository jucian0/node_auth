const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    trim: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Post",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

CommentSchema.plugin(mongoosePaginate);
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
