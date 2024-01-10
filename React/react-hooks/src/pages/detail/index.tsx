import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useModeContext } from "../../context/modeContext";

import Cookies from "js-cookie";
import Swal from "sweetalert2";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const news = location?.state?.item;
  const { toggle } = useModeContext();

  useEffect(() => {
    const username = Cookies.get("username");
    if (!username) {
      Swal.fire({
        title: "Cannot access this page",
        text: "You`re not logged in",
        icon: "error",
        confirmButtonText: "OK",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/auth/login");
        }
      });
    }
  }, []);

  return (
    <section
      className={`w-screen h-screen ${
        toggle ? "bg-slate-700" : "bg-white"
      } flex flex-col justify-center items-center`}
    >
      <div className="flex flex-col gap-y-4 text-center">
        <p className="font-semibold">{news?.title}</p>
        <p className="font-medium">{news?.content}</p>
      </div>
    </section>
  );
};

export default Detail;
