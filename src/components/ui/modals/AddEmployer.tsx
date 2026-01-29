import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../buttons/Button";
import ModalWrapper from "./ModalWrapper";
import type { ICloseModal, IEmployerForm } from "../../../shared/types";
import { useAddEmployerMutation } from "../../../shared/api/employerRequest";
import { toast } from "react-toastify";
import { useEffect } from "react";

interface IAddEmployerProps extends ICloseModal {
  employerData: IEmployerForm;
}

const AddEmployer = ({ closeModal, employerData }: IAddEmployerProps) => {
  const [addEmployer] = useAddEmployerMutation();
  const { register, handleSubmit, setValue, reset } = useForm<IEmployerForm>();
  const handleCancel = () => {
    reset();
    // closeModal(false);
  };
  console.log("AddEmployer", "Start");
  const submit: SubmitHandler<IEmployerForm> = async (data) => {
    const toastId = toast.loading("Добавление сотрудника...");
    await addEmployer(data);
    toast.update(toastId, {
      type: "success",
      isLoading: false,
      render: "Сотрудник успешно добавлен",
      autoClose: 3000,
    });
  };

  useEffect(() => {
    console.log("employerData", employerData);
    if (employerData) {
      setValue("employer", employerData.employer);
      setValue("email", employerData.email);
      setValue("phone", employerData.phone);
      setValue("department", employerData.department);
      setValue("position", employerData.position);
    }
  }, [employerData, setValue]);

  return (
    <ModalWrapper closeModal={closeModal}>
      <form className="space-y-6" onSubmit={handleSubmit(submit)}>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          Добавить сотрудника
        </h2>

        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="employerName"
          >
            Имя
          </label>
          <input
            {...register("employer", { required: true })}
            type="text"
            id="employerName"
            placeholder="Введите имя"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="employerEmail"
          >
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="employerEmail"
            placeholder="Введите email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="employerPhone"
          >
            Телефон
          </label>
          <input
            {...register("phone", { required: true })}
            type="tel"
            id="employerPhone"
            placeholder="+7 (999) 999-99-99"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="employerDepartment"
          >
            Отдел
          </label>
          <input
            {...register("department", { required: true })}
            type="text"
            id="employerDepartment"
            placeholder="Отдел"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="employerPosition"
          >
            Направление
          </label>
          <input
            {...register("position", { required: true })}
            type="text"
            id="employerPosition"
            placeholder="Направление"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        <Button
          variant="primary"
          className="w-full py-3  text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md"
        >
          Добавить сотрудника
        </Button>
      </form>

      {/* Кнопка закрытия */}
      <Button
        variant="primary"
        className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition"
        onClick={handleCancel}
      >
        ✕
      </Button>
    </ModalWrapper>
  );
};

export default AddEmployer;
