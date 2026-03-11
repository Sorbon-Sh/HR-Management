import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "@/components/ui/buttons/Button";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import type { ICloseModal, IEmployerForm, IProfiles } from "@/shared/types";
import { useUpdateEmployeMutation } from "@/shared/api/employerRequest";
import { toast } from "react-toastify";
import { useEffect } from "react";

interface IAddEmployerProps extends ICloseModal {
  employerData: IProfiles;
  updateEmployer: boolean;
  setUpdateEmployer: (value: boolean) => void;
}

const EditeEmployees = ({
  closeModal,
  employerData,
  updateEmployer,
  setUpdateEmployer,
}: IAddEmployerProps) => {
  const [updateEmploye] = useUpdateEmployeMutation();
  const { register, handleSubmit, setValue, reset } = useForm<IEmployerForm>();

  const handleCancel = () => {
    reset();
    setUpdateEmployer(false);
    closeModal(false);
  };
  const submit: SubmitHandler<IEmployerForm> = async (formData) => {
    console.log("FormData: ", formData);
    if (updateEmployer && employerData) {
      const toastId = toast.loading("Обновление сотрудника...");
      await updateEmploye({ formData, employerData });
      toast.update(toastId, {
        type: "success",
        isLoading: false,
        render: "Обновление успешно добавлен",
        autoClose: 3000,
      });
      return;
    }

    // ===============================================================
  };

  useEffect(() => {
    console.log("UseEffect");
    if (employerData && updateEmployer) {
      setValue("full_name", employerData.full_name);
      setValue("email", employerData.email);
      setValue("phone", employerData.employees.phone);
      setValue("department", employerData.employees.department);
      setValue("position", employerData.employees.position);
    }
  }, [employerData, updateEmployer, setValue]);

  return (
    <ModalWrapper closeModal={closeModal} reset={handleCancel}>
      <form className="space-y-3" onSubmit={handleSubmit(submit)}>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          Редактировать
        </h2>

        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="employerName"
          >
            Имя
          </label>
          <input
            {...register("full_name", { required: true })}
            type="text"
            id="employerName"
            placeholder="Введите имя"
            className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
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
            className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
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
            className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
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
            className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
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
            className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="employerJoin"
          >
            Дата вступления
          </label>
          <input
            {...register("joinDate")}
            type="date"
            id="employerJoin"
            placeholder="Введите email"
            className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        <Button
          variant="primary"
          className="w-full py-3  text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md"
        >
          Изменить
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

export default EditeEmployees;
