
import  {signinService, removeToken, signupService, resetPaswordEmailService, resetPasswordService}  from "../services/auth.service";

   async function SignIn({username, password}: any): Promise<any> {
    const result = await signinService({username, password});
    return result
  }

  async function SignUp(username: string, password: string): Promise<any> {
     return await signupService(username, password);
  }

  async function ResetEmail(username: string): Promise<string> {
     return await resetPaswordEmailService(username)
  }

  async function ResetPassword({newPassword, token}: any): Promise<any> {
    return await resetPasswordService({newPassword, token})
  }

  async function SignOut() {
    removeToken();
  }

 export const userStore = {
    SignIn,
    SignUp,
    SignOut,
    ResetEmail,
    ResetPassword
  }

