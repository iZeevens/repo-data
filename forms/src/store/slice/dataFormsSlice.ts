import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormDataState {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  acceptTerms: boolean;
  img: File | null;
  country: string;
}

const initialState: FormDataState = {
  name: '',
  age: 0,
  email: '',
  password: '',
  gender: '',
  acceptTerms: false,
  img: null,
  country: '',
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    updateForm(state, action: PayloadAction<FormDataState>) {
      const { name, age, email, password, gender, acceptTerms, img, country } =
        action.payload;

      state.name = name;
      state.age = age;
      state.email = email;
      state.password = password;
      state.gender = gender;
      state.acceptTerms = acceptTerms;
      state.img = img;
      state.country = country;
    },
  },
});

export default formDataSlice.reducer;
export const { updateForm } = formDataSlice.actions;
