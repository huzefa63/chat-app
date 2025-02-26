"use server";
import { io } from "socket.io-client";
import {signIn, signOut} from '@/lib/googleAuth';
const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL);
export async function sendChat(data){
    console.log(data.get('message'));
    if(data.get('message')) {
    socket.emit('newMessage',data.get('message'));
    }

}
export async function logoutAction(){
    await signOut();
}
export async function logInAction(){
    await signIn("google", {callbackUrl:'/'});
}