import { logInAction } from "@/actions/chatAction";

function SignInBtn() {
    return (
      <form action={logInAction}>
        <button className="text-blue-500">signing in</button>
      </form>
    );
}

export default SignInBtn
