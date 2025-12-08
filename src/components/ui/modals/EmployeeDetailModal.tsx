import { User, Phone, Mail, Briefcase, Calendar, X } from "lucide-react";
import { useGetEmployerQuery } from "../../../shared/api/employerRequest";
import type { ICloseModal } from "../../../shared/types";

export default function EmployeeDetailModal({ closeModal }: ICloseModal) {
  const { data: employer } = useGetEmployerQuery();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full relative">
        {/* Закрыть */}
        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <X className="w-5 h-5" />
        </button>

        {/* Заголовок */}
        <div className="flex items-center gap-2 mb-4">
          <User className="w-6 h-6 text-gray-700" />
          <h2 className="text-xl font-semibold">
            Детальная информация о сотруднике
          </h2>
        </div>

        {/* Контент */}
        <div className="space-y-3">
          {employer &&
            employer.map((eml) => (
              <InfoRow
                icon={<User className="w-5 h-5" />}
                label="Имя"
                email={eml.email}
                phone={eml.phone}
                address={eml.address}
                key={eml.user_id}
              />
            ))}
        </div>

        {/* Кнопка закрытия */}
        <div className="flex justify-end pt-4">
          <button className="rounded-xl px-4 py-2 bg-gray-200 hover:bg-gray-300">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, email }) {
  return (
    <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-xl">
      <div className="text-gray-700">{icon}</div>
      <p className="font-medium text-gray-600 min-w-[100px]">{label}:</p>
      <p className="text-gray-900">{email || "—"}</p>
    </div>
  );
}
