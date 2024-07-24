function Avatar() {
  return (
    <div>
      <h3>My Profile</h3>
      <img
        className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg"
        alt="Lin Lanying"
        width={100}
        height={100}
      />
      </div>
    );
  }
  
  export default function Profile() {
    return (
      <Avatar />
    );
  }