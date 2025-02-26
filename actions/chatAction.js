"use server";
import { io } from "socket.io-client";
import {signIn, signOut, auth} from '@/lib/googleAuth';
// const socket = io('https://chat-api-cfe5.onrender.com');
const socket = io(process.env.SOCKET_URL);
export async function sendChat(data){
    // console.log('hello from server')
    // console.log(data.get('message'));
    // if(data.get('message')) {
    // socket.emit('newMessage',data.get('message'));
    // }
    const session = await auth();
    if(!session) return;
    console.log(data.get('message'));
    if(data.get('message')) {
    socket.emit('newMessage',{name:session.user.name,image:session.user.image,message:data.get('message')});
    }

}
export async function logoutAction(){
    console.log('env: '+' '+process.env.SOCKET_URL)
    await signOut();
}
export async function logInAction(){
    await signIn("google", {callbackUrl:'/'});
}
