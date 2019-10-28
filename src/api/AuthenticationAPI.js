import instance from "./axiosConfig";

export default class AuthenticationAPI {
  static authorizeUser(endpoint, user) {
    return instance
      .post(`/api/auth/${endpoint}`, user )
      .then(response => {
        if (response.data.status === 'success') {
          return { success: true, content: response.data };
        }
      })
      .catch(response => {
        if(!response.error) return {
          success: false,
          error: { status: 500, data: {} }
        };

        return {
          success: false,
          error: response.error
        };
      });
    }
}
