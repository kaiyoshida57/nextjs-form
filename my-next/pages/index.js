import Router from "next/router";
import React from "react";
import Header from '../components/Header';


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
      <div>
        <Header />

        <div className="container mx-auto px-4 mt-[80px]">
          <h2 className="text-5xl font-bold text-[dodgerblue]">
              NextJS + Sendgrid LP
          </h2>
          <h3 className="text-4xl text-[dodgerblue] mt-4">
            ようこそ こちらはNextJS + Sendgridで作っているサンプルのLPです。
          </h3>
        </div>

        <div id="about" class="w-full min-h-screen flex flex-col justify-center items-center py-8">
          <div class = "self-center text-center w-full sm:w-2/3 xl:w-1/2 px-4 sm:px:0" >
            <h2 class="font-bold text-gray-800 text-4xl  mt-[80px] mb-4" >
              About見出し
            </h2>
            <div class="font-light text-black text-2xl">
              <p>Aboutテキスト。AboutテキストAboutテキストAboutテキストAboutテキストAboutテキストAboutテキストAboutテキストAboutテキストAboutテキストAboutテキストAboutテキストAboutテキストAboutテキストAboutテキストAboutテキストAboutテキストAboutテキスト</p>
            </div>
            <ul class="font-light text-black text-2xl mt-8 [&>li]:py-2 [&>li]:text-[blueviolet] ">
              <li>AboutリストリストAboutリストリスト。</li>
              <li>AboutリストリストAboutリストリスト。</li>
              <li>AboutリストリストAboutリストリスト。</li>
              <li>AboutリストリストAboutリストリスト。</li>
              <li>AboutリストリストAboutリストリスト。</li>
            </ul>

            <figure className="mt-8">
              <img src="https://placehold.jp/80/999ff5/ffffff/1000x800.png?text=hoge hoge" alt="" />
            </figure>
          </div>
        </div>


        <div id="contact" className="container mx-auto px-4 pb-8 mt-[80px] ">

          <h2 class="text-center font-bold text-gray-800 text-4xl  mt-8 mb-4" >
            Contact見出し
          </h2>

          <form onSubmit={sendForm} className="mt-[40px] max-w-[700px] mx-auto">
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
            <button type="submit" className="mt-2 font-medium text-white bg-[#3f5aad]">送信</button>
          </form>
        </div>
      </div>
    );
  }
}
