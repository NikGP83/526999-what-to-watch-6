import {useSelector} from "react-redux";
import {AuthorizationStatus} from "../const";

export const useAuthorize = () => useSelector((state) => {
  if (typeof state.authInfo.id !== `undefined`) {
    return AuthorizationStatus.AUTH;
  }
  if (typeof state.authInfo.error !== `undefined`) {
    return AuthorizationStatus.NO_AUTH;
  }
  return AuthorizationStatus.UNKNOWN;

});
