import "./leaderboard.scss";
import { leaderboardData } from "../../data.js";

function Leaderboard() {
  return (
    <div className="leaderBoard">
      <h3>Leaderboard</h3>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th className="span-username">Username</th>
            <th className="span-points">Points</th>
            <th className="span-rank">Rank</th>
            <th className="span-achievements">Achievements</th>
          </tr>
        </thead>
        <tbody>
        {leaderboardData.map((user, index) => (
            <tr className="listItem" key={user.id}>
                <td className="user-info">
                    <img src={user.img} alt={user.username} className="user-avatar" />
                    <div className="user-details">
                        <div className="user-username">{user.username}</div>
                         <div className="user-id">{index + 1}</div>
        </div>
      </td>
      <td className="user-points">{user.points}</td>
      <td className="user-rank">{user.rank}</td>
      <td className="user-achievements">{user.achievements}</td>
    </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
