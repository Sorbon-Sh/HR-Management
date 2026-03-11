export interface ICloseModal {
  closeModal: (value: boolean) => void;
}

export interface IEmployerForm {
  full_name: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  joinDate: string;
}

export interface IEmployer {
  id: string;
  user_id: string;
  phone: string;
  department: string;
  position: string;
  created_at: string;
}

export interface IProfiles {
  id: string;
  full_name: string;
  email: string;
  role: string;
  team_id: string;
  employees: IEmployer;
}
