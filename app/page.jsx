import Chatbox from "@/app/_components/Chatbox"
import { auth } from "@/lib/googleAuth";
async function Page() {
  const res = await auth();
  console.log(res);
  console.log('from page: ' + process.env.SOCKET_URL);
  return (
    <div className="bg-gray-300 flex-1 flex justify-center items-center">
      <div className="flex-1 h-full w-full flex justify-center">
        <Chatbox session={res}/>
      </div>
    </div>
  );
}

export default Page
