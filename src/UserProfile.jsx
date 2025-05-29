
// import "./App.css";

// function UserProfile(props) {
//   let user = props.name, props.email
//       console.log(props)
      
//       return (
//         <div className="row gy-3">
//           <div className="col-md-8 todo m-auto">
//             <div className="row pt-3 text-box">
//               {/* Note that we are using an embedded JS expression in our JSX */}
//               <p className="text">{props.name}</p>
//               <p>{props.email}</p>
//             </div>
//             <div className="row">
//               <div className="col-md-2 p-0">
//                 <button className="btn btn-danger w-100 px-0 m-0 my-0">
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
// }

// export default UserProfile;

//Define a functional component that takes a user object as a prop
function UserProfile({ user }) {
  return (
    <div className="user-profile">
      {/* we use curly brackets in JSX to insert JS expressions */}
      <img src={user.imgUrl} className="user-profile-image" alt={user.name} />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
     
  );
}
//Don't forget to export your UserProfile - this allows 
//App.jsx to import it and use it to render our User data
export default UserProfile
