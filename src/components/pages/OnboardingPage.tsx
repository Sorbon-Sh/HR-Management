import { useState } from "react";
import { useNavigate } from "react-router";
import supabase from "../../shared/api/supabaseClient";
import LogoutButton from "../ui/buttons/LogoutButton";
import { createTeam } from "../../services/teamService";
import { useAppDispatch } from "../../shared/hooks/useReduxTypedHooks";
import { setProfile } from "../../shared/redux/slices/authData";
import { joinTeam } from "../../services/joinTeamService";

export const OnboardingPage = () => {
  const [teamName, setTeamName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCreate = async () => {
    const { data } = await supabase.auth.getUser();
    const userId = data.user?.id;
    if (!userId) return;

    const team = await createTeam(teamName, userId);

    dispatch(
      setProfile({
        team_id: team.id,
        role: "manager",
      }),
    );

    navigate("/");
  };

  const handleJoin = async () => {
    const { data } = await supabase.auth.getUser();
    const userId = data.user?.id;
    console.log("userData", data);
    if (!userId) return;

    const team = await joinTeam(inviteCode, userId);

    dispatch(
      setProfile({
        team_id: team.id,
        role: "employee",
      }),
    );

    navigate("/");
  };

  return (
    <div>
      <h1>Начало работы</h1>

      <div>
        <h3>Создать команду</h3>
        <input
          placeholder="Название команды"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <button onClick={handleCreate}>Создать</button>
      </div>

      <div>
        <h3>Вступить в команду</h3>
        <input
          placeholder="Код приглашения"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
        />
        <button onClick={handleJoin}>Вступить</button>
      </div>

      <LogoutButton />
    </div>
  );
};
