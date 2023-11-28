const model = require("../model/clipboardmodel");
const generateUniqueId = require("generate-unique-id");
const asyncHandler = require("express-async-handler");
const addText = asyncHandler(async (req, res) => {
  const id = generateUniqueId({
    length: 5,
    useNumbers: true,
    useLetters: false,
  });
  const { text } = req.body;
  const data = await model.findOne({ id: id });
  if (data) {
    res.json({ message: "Id already exist", isIdExist: true, status: 400 });
  }
  const ClipBoard = await model.create({
    id: id,
    content: text,
  });
  if (ClipBoard) {
    res.json({
        message: "Note Added Sucessfully",
        id: id,
        isIdExist: false,
        status: 201,
      });
  } else {
    res.json({ message: "Some Error Occured", isIdExist: false, status: 400 });
  }
});




const getText = asyncHandler(async (req, res) => {
  const id = req.query.id;
  const data = await model.findOne({ id: id });
  await model.deleteOne({ id: id });
  if (data) {
    res.json({ text: data?.content,statue:200 });
  } else {
    res.json({ message: "No Data Found" });
  }
});

module.exports = { addText, getText };
