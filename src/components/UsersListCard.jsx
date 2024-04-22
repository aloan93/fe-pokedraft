import { convertISOToDate } from "../../utilities/utils";

export default function UsersListCard({ user }) {
  return (
    <div className="usersListCardDiv">
      <p className="usersListCardUsername">{user.username}</p>
      <img src={user.avatar_url} alt={`Profile picture for ${user.username}`} />
      <p className="usersListCardJoinDate">{`Joined: ${convertISOToDate(
        user.join_date
      )}`}</p>
    </div>
  );
}
