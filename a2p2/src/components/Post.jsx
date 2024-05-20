export function Post({userInfo}) {

const {name,email}=userInfo
  return (
    <div>
      <p>Name: {name.firstname} {name.lastname}</p>
      <p>Email : {email}</p>
    </div>
  );
}


