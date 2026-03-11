import { useState } from "react";
import { useNavigate } from "react-router";
import LogoutButton from "@/components/ui/buttons/LogoutButton";
import { createTeam } from "@/services/teamService";
import { joinTeam } from "@/services/joinTeamService";
import {
  useAppDispatch,
  useAppSelector,
} from "@/shared/hooks/useReduxTypedHooks";
import { setAuthData } from "@/shared/redux/slices/userProfile";

const OnboardingPage = () => {
  const [teamName, setTeamName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userProfile);
  const userId = useAppSelector((state) => state.userProfile.id);
  const email = useAppSelector((state) => state.userProfile.email);
  const full_name = useAppSelector((state) => state.userProfile.full_name);
  console.log("User Data: ", userData);
  const handleCreate = async () => {
    if (!userId) return;

    const team = await createTeam(teamName, userId);

    dispatch(
      setAuthData({
        id: userId,
        email: email!,
        full_name: full_name,
        team_id: team.id,
        role: "manager",
      }),
    );

    navigate("/");
  };

  const handleJoin = async () => {
    if (!userId) return;

    const team = await joinTeam(inviteCode, userId);

    dispatch(
      setAuthData({
        id: userId,
        email: email!,
        full_name: full_name,
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

export default OnboardingPage;
