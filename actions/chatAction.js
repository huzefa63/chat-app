"use server";
import { io } from "socket.io-client";
import {signOut} from '@/lib/googleAuth';
const socket = io("http://localhost:4000");
export async function sendChat(data){
    if(data.get('message')) {
    socket.emit('newMessage',data.get('message'));
    }

}
export async function logoutAction(){
    await signOut({redirectTo:'/'});
}