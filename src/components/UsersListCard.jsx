// import { Link } from "react-router-dom";

export default function UsersListCard({ user }) {
  return (
    <div className="usersListCardDiv">
      <p>{user.username}</p>
      <img src={user.avatar_url} alt={`Profile picture for ${user.username}`} />
    </div>
  );
}
