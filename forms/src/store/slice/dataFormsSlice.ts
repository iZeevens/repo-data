import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFormData {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  acceptTerms: boolean;
  img: FileList | null;
  country: string;
}
interface IFormDataState {
  data: IFormData[];

  countryList: string[];
}

const initialState: IFormDataState = {
  data: [],
  countryList: [
    'Russia',
    'Ukraine',
    'Belarus',
    'Kazakhstan',
    'Uzbekistan',
    'Turkmenistan',
    'Kyrgyzstan',
    'Tajikistan',
    'Armenia',
    'Azerbaijan',
    'Moldova',
    'Georgia',
    'Lithuania',
    'Latvia',
    'Estonia',
    'Turkmenistan',
    'Tajikistan',
    'Armenia',
    'Azerbaijan',
    'Moldova',
  ],
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    addDataToForm(state, action: PayloadAction<IFormData>) {
        return {
          ...state,
          data: [...initialState.data, {...action.payload}]
        }
    },
  },
});

export default formDataSlice.reducer;
export const { addDataToForm } = formDataSlice.actions;
