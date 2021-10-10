import express from 'express';
import mongoose from 'mongoose';
import auth from "../models/auth.js";

export const getUserContent = async (req, res) => {
  try {
    const file = await auth.find({_id: req.params.userid});
    res.status(200).json(file);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getContent = async (req, res) => {
  try {
    const file = await auth.find();
    res.status(200).json(file);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUserContent = async (req, res) => {
  const file = req.body;
  const newFile = new auth(file);
  try {
    await newFile.save();
    res.status(201).json(newFile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


export const deleteUserContent = async (req, res) => {
  const { id } = req.params.id;
  const {userid} = req.params.userid;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await auth.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully."});
}