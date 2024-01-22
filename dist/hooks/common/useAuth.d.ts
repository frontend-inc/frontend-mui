import { User } from "../../types";
declare const useAuth: () => {
  loading: any;
  errors: any;
  authCookie: any;
  user: any;
  setUser: any;
  currentUser: any;
  setCurrentUser: any;
  fetchMe: () => Promise<any>;
  updateMe: (user: any) => Promise<any>;
  forgotPassword: (user: any) => Promise<any>;
  handleChange: any;
  authenticateFromToken: (token: string) => Promise<void>;
  login: (user: any) => Promise<any>;
  logout: () => Promise<void>;
  signup: (user: any) => Promise<any>;
  changePassword: (
    currentPassword: string,
    password: string,
    passwordConfirmation: string
  ) => Promise<any>;
  resetPassword: (
    email: string,
    password: string,
    passwordConfirmation: string,
    changePasswordToken: string
  ) => Promise<any>;
  sendPin: (user: any) => Promise<any>;
  verifyPin: (email: string, pin: string) => Promise<any>;
  sendOneTimePassword: (user: User) => Promise<any>;
  verifyOneTimePassword: (otp: string) => Promise<any>;
  googleLogin: (user: any) => Promise<any>;
  deleteAvatar: () => Promise<any>;
  loadingWrapper: (apiMethod: () => any) => Promise<any>;
};
export default useAuth;
