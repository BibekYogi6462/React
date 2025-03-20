const User = ({ user }) => {
  return (
    <div>
      {/* <h1>User Component</h1>
      <p>{name}</p>
      <p>{age}</p> */}

      <p>{user.name}</p>
      <p>{user.age}</p>
    </div>
  );
};

export default User;
