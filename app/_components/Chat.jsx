import { ArrowRightCircleIcon } from "@heroicons/react/24/solid"
function Chat({session,chat}) {
    return (
        <div className="border-b-2 pb-4">
            <div className="flex pb-3 items-center gap-3  ">
                <img src={session?.user?.image} className="h-8 w-8 border rounded-full"></img>
                <h1 className="text-xl tracking-widest">{session?.user?.name}</h1>
            </div>
            <div className="flex gap-3 items-center">
                <p className="font-bold tracking-widest"><ArrowRightCircleIcon className="size-9"/></p>
                <p className="text-lg">{chat?.message}</p>
            </div>
        </div>
    )
}

export default Chat
