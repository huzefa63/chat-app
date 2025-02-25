import { logoutAction } from "@/actions/chatAction";
// import { signOut } from "@/lib/googleAuth";
function SignoutBtn() {
    return (
      <form action={logoutAction}>
        <button
          className="bg-gray-700 top-1/2 -translate-y-1/2 text-white px-4 py-2 absolute right-5 rounded-md"
        >
          logout
        </button>
      </form>
    );
}

export default SignoutBtn
