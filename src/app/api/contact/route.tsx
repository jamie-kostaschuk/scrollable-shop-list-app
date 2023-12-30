import nodemailer from "nodemailer"

export async function POST(req: any, res:any){
    const user = process.env.user;
    const data = await req.json();


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465, 
        secure: true, 
        auth: {
            user: user,
            pass: process.env.pass,
        },
    });
    
    
    try {
        const mail = await transporter.sendMail({
            from: "user",
            to: "JamiePersonalProgramming@gmail.com",
            subject: `Contact from Kuramae`,
            html: `
                <p>This is inputted content<p>
                <p>${data.input}<p>
            `
        });

        //return res.status(200).json({message: "success"})
        return new Response("success", {
            status: 200,
        });

    } catch (error) {
        console.log(error)
        //res.status(500).json({message: "Could not send the input. Your message was not sent."})
        return new Response("Could not send the input. Your message was not sent.", {
            status: 500,
        });
    };
};