import { axiosProtected as instance } from "./axiosConfig";

const defaultErrorStatus = {
  success: false,
  error: { status: 500, data: {} }
};

export default class TokenAPI {
  static getNewToken() {
    return instance(`/api/auth/api-token`)
      .then(response => {
        if (response.status === 200) {
          return { success: true, data: response.data.data };
        }

        return defaultErrorStatus;
      })
      .catch(response => {
        if (!response.error) return defaultErrorStatus;

        return {
          success: false,
          error: response.error
        };
      });
    }
}
