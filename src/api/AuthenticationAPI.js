import instance from "./axiosConfig";

export default class AuthenticationAPI {
  static signup(user) {
    // if(true) return { success: false, error: { status: 400 } };

    return instance
      .post("/api/auth/signup", { user })
      .then(response => {
        if (response.data.user) {
          return { success: true, content: response.data.user };
        }
        return { success: false, error: { status: 400 } };
      })
      .catch(response => {
        return {
          success: false,
          error: { status: response.response.status }
        };
      });
    }
}
