import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const sweetAlertPopup = (type, message) => {
  const title = type === "success" ? "Success" : "Failed";
  MySwal.fire({
    title: <strong>{title}</strong>,
    html: <i>{message}</i>,
    icon: type === "success" ? "success" : "error",
    confirmButtonColor: "green",
    confirmButtonText: "Okay",
  });
};

export const POPUPTYPE = {
  success: "success",
  failed: "failed",
};
