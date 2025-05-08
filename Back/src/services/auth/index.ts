import { loginUser } from './loginUser.service';
import { loginAdmin } from './loginAdmin.service';
import { logout } from './logout.service';
import { refreshToken } from './refreshToken.service';
import { registerUser } from './registerUser';
import { resendRegisterPhone } from './resendRegisterPhone';
import { verifyCodeRegister } from './verifyCodeRegister';
import { setCredentials } from './setCredentials';
import { forgetPassword } from './forgetPassword';
import { verifyCodeForgetPasword } from './verifyCodeForgetPasword';
import { resendForgetPassword } from './resendForgetPassword';
import { resetPassword } from './resetPassword';

export default {
  loginUser,
  loginAdmin,
  logout,
  refreshToken,
  registerUser,
  resendRegisterPhone,
  verifyCodeRegister,
  setCredentials,
  forgetPassword,
  verifyCodeForgetPasword,
  resendForgetPassword,
  resetPassword,
};
