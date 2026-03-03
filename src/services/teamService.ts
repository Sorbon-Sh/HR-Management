import supabase from "../shared/api/supabaseClient";

export async function createTeam(teamName: string, userId: string) {
  const { data: team, error } = await supabase
    .from("teams")
    .insert({
      name: teamName,
      owner: userId,
      invite_code: crypto.randomUUID().slice(0, 8),
    })
    .select()
    .single();

  if (error) throw error;

  await supabase
    .from("profiles")
    .update({
      team_id: team.id,
      role: "manager",
    })
    .eq("id", userId);

  return team;
}
