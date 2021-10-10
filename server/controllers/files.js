import express from 'express';
import mongoose from 'mongoose';
import fileContent from "../models/fileContent.js";

export const getFiles = async (req, res) => {
  try {
    const file = await fileContent.find();
    res.status(200).json(file);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createFile = async (req, res) => {
  const file = req.body;
  const newFile = new fileContent(file);
  try {
    await newFile.save();
    res.status(201).json(newFile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await fileContent.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
}