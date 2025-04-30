import { loginUser } from './loginUser.service';
import { loginAdmin } from './loginAdmin.service';
import { logout } from './logout.service';
import { refreshToken } from './refreshToken.service';
import { registerPhone } from './registerPhone';
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
  registerPhone,
  resendRegisterPhone,
  verifyCodeRegister,
  setCredentials,
  forgetPassword,
  verifyCodeForgetPasword,
  resendForgetPassword,
  resetPassword,
};
