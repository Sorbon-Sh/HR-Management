export interface ICloseModal {
  closeModal: (value: boolean) => void;
}

export interface IEmployerForm {
  employer: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  address: string;
  created_at: string;
  user_id: string;
}
