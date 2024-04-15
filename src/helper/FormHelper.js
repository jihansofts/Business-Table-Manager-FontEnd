import cogoToast from "cogo-toast";

class FormHelper {
  ErrorToast(msg) {
    cogoToast.error(msg, { position: "top-center" });
  }
  SuccessToast(msg) {
    cogoToast.success(msg, { position: "top-center" });
  }
}
export const { ErrorToast, SuccessToast } = new FormHelper();
