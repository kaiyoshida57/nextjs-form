import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from "react-bootstrap";
import React, {useRef} from 'react';

export default function Home() {

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // submit送信によるページ更新防止
    // console.log(nameRef.current?.value);

    let data = {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value,
    }

    await fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
         "Content-Type": "application/json"  // json形式などを許容
      },
      // sendGmail関数のreq引数にて、何を送るかを指定（emailなど）
      body: JSON.stringify(data), // オブジェクトじゃダメなので、json化してから渡す
    }).then((res) => {
      if(res.status === 200) console.log("send email success");
    });
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-3">Next.js Gmailアプリ</h2>
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required ref={nameRef} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="email" required ref={emailRef} />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea name="message" id="message" className="form-control" ref={messageRef} ></textarea>
          </div>
          <button type="submit" className="btn btn-danger">Send E-mail</button>
        </form>
      </div>
    </>
  )
}
