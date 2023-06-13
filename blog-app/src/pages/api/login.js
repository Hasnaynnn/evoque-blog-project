import requestConfig from "@/src/utils/config";
import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  async function loginRoute(req, res) {
    const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "login", req.body, requestConfig)
    console.log("success:" + response.data.success)
    // get user from database then:
    if (response.data.success === true){
        req.session.user = {
            id: 230,
            admin: true,
          };
          await req.session.save();
          res.status(200).json({
            success: true
          })
    } else{
        res.status(404).json({
            success: false,
            message: "User not found with these credentials"
        })
    }
  },
  {
    cookieName: "blog_app_session",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 2400
    },
  },
);