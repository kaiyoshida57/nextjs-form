import Router from "next/router";
import React from "react";

export default class Home extends React.Component {
  render() {
    const sendForm = async (event) => {
      event.preventDefault();

      const res = await fetch("/api/send", {
        body: JSON.stringify({
          name: event.target.name.value,
          email: event.target.email.value,
          message: event.target.message.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (res.ok) Router.push("/thanks");
    };

    return (
      <div className="container mx-auto px-4 my-4">
        <h2 className="text-4xl font-bold text-[dodgerblue] underline ">
          NextJS + Sendgrid
        </h2>
        <form onSubmit={sendForm} className="mt-[20px]">
          <div className="mt-2">
            <label htmlFor="name">名前</label>
            <input type="text" name="name" />
          </div>
          <div className="mt-2">
            <label htmlFor="email">メールアドレス</label>
            <input type="text" name="email" />
          </div>
          <div className="mt-2">
            <label htmlFor="message">問い合わせ内容</label>
            <textarea type="text" name="message" rows="4" />
          </div>
          <button type="submit">送信</button>
        </form>
      </div>
    );
  }
}
