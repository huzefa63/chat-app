"use client"
import { logoutAction, sendChat } from '@/actions/chatAction';
import {ArrowUpIcon} from '@heroicons/react/24/solid'
import { useState } from 'react';
function ChatInput({session}) {
  const [value,setValue] = useState('');
    return (
      <div className="relative">
        <form action={sendChat}>
          <input
            type="text"
            placeholder="type a message here..."
            className="bg-gray-400 placeholder:text-white pl-5 pr-20 py-3 outline-none text-white font-semibold tracking-widest w-full"
            value={value}
            name='message'
            onChange={(e) => setValue(e.target.value)}
            required
            disabled={!session?.user}
          />
          <input type="hidden" name="image" value={session?.user?.image}/>
          <input type="hidden" name="name" value={session?.user?.name}/>
          <button className="hover:bg-black rounded-full p-1 transition-all duration-[0.2s] absolute right-4 top-1/2 -translate-y-1/2">
            <ArrowUpIcon className="size-6 text-white  " />
          </button>
        </form>
      </div>
    );
}

export default ChatInput



