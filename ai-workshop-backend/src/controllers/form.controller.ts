import { Request, Response } from "express";
import Form from "../models/form.model.js";

const validateMail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const formSubmission = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.status(400).json({ message: "Request body is required" });
  }
  try {
    const { name, email, phone } = req.body as {
      name: string;
      email: string;
      phone: string;
    };

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (name.trim().length < 3) {
      return res
        .status(400)
        .json({ message: "Name must be at least 3 characters long" });
    }

    if (phone.trim().length < 10) {
      return res
        .status(400)
        .json({ message: "Phone number must be at least 10 digits long" });
    }

    if (!validateMail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const form = new Form({ name, email, phone });
    await form.save();

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error: unknown) {
    console.error(error);
    res.status(500).json({ message: "Failed to submit form" });
  }
};

export default formSubmission;
