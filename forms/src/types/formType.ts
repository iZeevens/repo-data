enum gender {
  female = 'female',
  male = 'male',
}

interface formInput {
  name: string
  age: number
  email: string
  password: string
  confirmPassword: string
  gender: gender
  acceptTerms: boolean
  avatar: File
  country: string
}

export default formInput