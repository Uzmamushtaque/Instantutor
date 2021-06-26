const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  requests: [
    {
      request: {
        type: String,
      },
      course: {
        type: String,
      },
      grade: {
        type: String,
      },
      topic: {
        type: String,
      },
      help_time: {
        type: String,
      },
      availability: [
        String
      ],
      number_sessions: {
        type: Number,
      },
    },
  ],
});

module.exports = mongoose.model("request", RequestSchema);
