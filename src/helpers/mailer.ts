import User from "@/models/userModel";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verfiyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "131533cd04fcae",
        pass: "********e01b",
      },
    });

    const mailOptions = {
      from: "ashish@gmail.com", // sender address
      to: "email", // list of receivers
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      // text: "Hello world?", // plain text body
      html: `<p>
Click <a href="${process.env.DOMAIN}/ veriffyemail?token=${hashedToken}">here</a> to $ {emailType === "VERIFY" ? "verify your email" : "reset your password"}
or copy and paste the link below in your brower. <br> 
${process.env.DOMAIN}/verifyemail?token=${hashedToken}
</p>`, // html body
    };
    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
