import mongoose from "mongoose";

export interface IForm extends Document {
  name: string;
  email: string;
  phone: string;
}

const formSchema: mongoose.Schema = new mongoose.Schema<IForm>({
  name: {
    type: String,
    required: true,
    trim: true,
    max: 100,
    min: 5,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    max: 100,
    min: 5,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: /^[0-9]{10}$/,
  },
});

const Form = mongoose.model<IForm>("Form", formSchema);
export default Form;
