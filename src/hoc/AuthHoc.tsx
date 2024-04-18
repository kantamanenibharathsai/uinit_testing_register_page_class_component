// import { Navigate, Outlet } from "react-router-dom";

// const PrivateRoutes = () => {
//   const token = JSON.parse(localStorage.getItem("token") ?? "null");

//   return token ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoutes;



// const authHoc = (OriginalComponent: ComponentType<any>) => {

//   class NewComponent extends React.Component {

//     render() {
//       const loggedInUser = localStorage.getItem("loggedInUser");
//       if (loggedInUser && JSON.parse(loggedInUser) !== null) {
//         return <OriginalComponent />;
//       }
//       return <Navigate to={"/login"} />;
//     }
//   };
//   return NewComponent;
// };

// export default authHoc;



import React from "react";
import {  useNavigate } from "react-router-dom";

const withRouter = (WrappedComponent : React.ComponentState) => {
  const ComponentWithRouterProp = (Props : object) => {
    let navigate = useNavigate();

    return <WrappedComponent {...Props} navigate={navigate} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter