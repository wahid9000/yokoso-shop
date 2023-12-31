import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const res = new NextResponse(JSON.stringify({
        message: "Logged out successfully"
    }));

    res.cookies.set("jwt-token", "", {
        expires: new Date(Date.now())
    });
  
  return res;
};