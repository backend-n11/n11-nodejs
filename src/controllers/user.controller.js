import { findAllUsers, createUser, findOneUser } from '../services/user.service.js';

export const getUsers = async (_req, res) => {
  try {
    const users = await findAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await findOneUser(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



export const addUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
