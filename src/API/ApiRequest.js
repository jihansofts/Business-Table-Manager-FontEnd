import axios from "axios";
import store from "../redux/store/store";
import { ShowLoader, HideLoader } from "../redux/state-slice/settingSlice";
import { ErrorToast } from "../helper/FormHelper";
import { SetAllProduct, SetTotal } from "../redux/state-slice/productSlice";
const baseURL = "http://localhost:5500/api/v1";
export async function GetProductList(pageNo, perPage, searcKey) {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/ProductList/" + pageNo + "/" + perPage + "/" + searcKey;
  try {
    let result = await axios.get(URL);
    store.dispatch(HideLoader());
    // console.log(result);
    if (result.status === 201 && result.data["status"] === "success") {
      if (result.data["data"][0]["Rows"].length > 0) {
        store.dispatch(SetAllProduct(result.data["data"][0]["Rows"]));
        store.dispatch(SetTotal(result.data["data"]["0"]["Total"][0]["count"]));
      } else {
        store.dispatch(SetAllProduct([]));
        store.dispatch(SetTotal("0"));
        ErrorToast("No Data Found");
      }
    } else {
      ErrorToast("Something Went Wrong");
    }
  } catch (err) {
    store.dispatch(HideLoader());
  }
}
