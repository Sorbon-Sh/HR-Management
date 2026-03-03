import supabase from "../shared/api/supabaseClient";

// export async function joinTeam(inviteCode: string, userId: string) {
//   // 1️⃣ Находим команду
//   const { data: team, error } = await supabase
//     .from("teams")
//     .select("*")
//     .eq("invite_code", inviteCode)
//     .single();

//   if (error || !team) {
//     throw new Error("Команда не найдена");
//   }

//   // 2️⃣ Обновляем профиль
//   await supabase
//     .from("profiles")
//     .update({
//       team_id: team.id,
//       role: "employee",
//     })
//     .eq("id", userId);

//   // 3️⃣ Создаём запись в employees
//   await supabase.from("employees").insert({
//     user_id: userId,
//   });

//   return team;
// }

export async function joinTeam(inviteCode: string, userId: string) {
  // 1. Находим команду
  const { data: team, error: teamError } = await supabase
    .from("teams")
    .select("id")
    .eq("invite_code", inviteCode)
    .single();

  if (teamError || !team) {
    throw new Error("Команда не найдена");
  }

  // 2. Обновляем профиль
  const { error: profileError } = await supabase
    .from("profiles")
    .update({
      team_id: team.id,
      role: "employee",
    })
    .eq("id", userId);

  if (profileError) {
    throw profileError;
  }

  // 3. Создаём запись в employees (ТОЛЬКО user_id)
  const { error: employeeError } = await supabase.from("employees").insert({
    user_id: userId,
  });

  if (employeeError) {
    throw employeeError;
  }

  return team;
}
