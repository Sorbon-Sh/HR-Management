import type { ICloseModal } from "../../../shared/types"
import Button from "../buttons/Button"
import ModalWrapper from "./ModalWrapper"

const AddPerformance = ({closeModal}: ICloseModal) => {
    return (
     <ModalWrapper closeModal={closeModal}>
   <form className="space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Добавить сотрудника</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="employerName">Имя</label>
        <input
          type="text"
          id="employerName"
          placeholder="Введите имя"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="employerEmail">Email</label>
        <input
          type="email"
          id="employerEmail"
          placeholder="Введите email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="employerPhone">Телефон</label>
        <input
          type="tel"
          id="employerPhone"
          placeholder="+7 (999) 999-99-99"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="employerDepartment">Отдел</label>
        <input
          type="text"
          id="employerDepartment"
          placeholder="Отдел"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="employerPosition">Направление</label>
        <input
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
     onClick={() => closeModal(false)}
    >
      ✕
    </Button>
    </ModalWrapper>

    )
}

export default AddPerformance