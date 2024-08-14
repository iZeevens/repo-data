interface IFormInput {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female';
  acceptTerms: boolean;
  img: FileList;
  country: string;
}

export type { IFormInput };
