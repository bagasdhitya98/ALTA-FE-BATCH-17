import { useNavigate, useLocation } from "react-router-dom";

export function withRouter(Component: any) {
  function Wrapper(props: any) {
    const navigate = useNavigate();
    const location = useLocation();
    return <Component navigate={navigate} location={location} {...props} />;
  }
  return Wrapper;
}
