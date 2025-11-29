export interface ICloseModal {
    closeModal: (value: boolean) => void;
}


export interface IEmployerForm {
    employer: string;
    email: string;
    phone: string;
    department: string;
    position: string;
    created_at: string;
}