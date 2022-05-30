import React, { useState } from 'react';
import styled from "styled-components";
import { db, collection } from "../firebase/Firebase";
import { addDoc, serverTimestamp} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setLoadingTrue, setLoadingFalse } from "../redux/appSlice";

function ChatInput({ roomId, channelName, chatRef }) {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        if (!roomId){
            alert('Please select a channel first')
            return false;
        }

        if(!input || input.length ===0){
            alert("Message cannot be empty")
            return false
        }

        dispatch(setLoadingTrue());
        const newMsg = await addDoc(collection(db, "rooms", roomId, "messages"),{
            message: input,
            timestamp: serverTimestamp(),
            user: "Wolande"
        });
        dispatch(setLoadingFalse());
        console.log(`New message added with id: `, newMsg.id)

        // scroll the div with ref={chatref} into view
        // Makes the last message pop up onscreen 
        chatRef?.current?.scrollIntoView({
            behavior: "smooth"
        })

        setInput("")
    }

    return (
        <ChatInputContainer>
            <form onSubmit={handleSubmit}>
                <div>
                    <input placeholder = {`Message #${channelName}`}
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                        />
                    <button type="submit" hidden>
                        SEND
                    </button>
                </div>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    > form{
        /* position: relative; */
        display: flex;
        justify-content: center;
    }

    > form > div{
        display: flex;
        position: fixed;
        bottom: 30px;
        width: 60%;


    }
    > form > div > input{
        flex: 1;
        padding: 20px;
        outline: none;
        border: 1px solid gray;
        border-radius: 3px;
    }

`;



// db.collection("users").doc(user?.id).collection("orders").doc(paymentIntent.id).set({
//             basket: basket,
//             amount: paymentIntent.amount,
//             created: paymentIntent.created,
//         });

// const paymentRef = doc(db, "users", user?.id, "orders", paymentIntent.id);
// setDoc(paymentRef, {
//     basket: basket,
//     amount: paymentIntent.amount,
//     created: paymentIntent.created,
// });