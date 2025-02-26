"use server";
import { io } from "socket.io-client";
import { signIn, signOut, auth } from '@/lib/googleAuth';
// const socket = io('https://chat-api-cfe5.onrender.com');
const socket = io(process.env.SOCKET_URL);

export async function sendChat(data) {
    // Emit the newMessage event with the correct object format
    socket.emit('newMessage', {
        image: data.get('image'),
        name: data.get('name'),
        message: data.get('message'),
    });
}

export async function logoutAction() {
    console.log('env: ' + process.env.SOCKET_URL);
    await signOut();
}

export async function logInAction() {
    await signIn("google", { callbackUrl: '/' });
}
