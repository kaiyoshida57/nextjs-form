import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function sendGmail (req: NextApiRequest, res: NextApiResponse) {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAILUSER,
            pass: process.env.GMAILPASSWORD,
        },
    });

    // 管理人が受け取るメール
    const toHostMailData = {
        from: req.body.email, // クライアント側の項目emailの値を受け取る
        to: "kaibukuro@gmail.com",
        subject: `[お問い合わせ] ${req.body.name}様より`,
        text: `${req.body.message} Send from ${req.body.email}`,
        html: `
            <p>【名前】</p>
            <p>${req.body.name}</p>
            <p>【メッセージ内容】</p>
            <p>${req.body.message}</p>
            <p>【メールアドレス】</p>
            <p>${req.body.email}</p>
        `
    };

    // sendMailは公式の関数
    transporter.sendMail(toHostMailData, function(err, info) {
        if (err) console.log(err);
        else console.log(info);
    });

    return res.send("成功しました");
}