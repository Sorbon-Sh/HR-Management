import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery: fetchBaseQuery({}),
  tagTypes: [
    "employees",
    "attendance",
    "payroll",
    "performance",
    "leave",
    "dashboard",
  ],
  // Собераем все в одном для очистки кэша
  endpoints: () => ({}), // пока пусто, потом подключим отдельные слайсы
});
