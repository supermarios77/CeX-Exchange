import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { emailOrUsername, password, googlecode, captcha } =
    await request.json();

  if (!emailOrUsername) {
    return NextResponse.json(
      { message: "Email or username is required" },
      { status: 400 }
    );
  }

  if (!password) {
    return NextResponse.json(
      { message: "Password is required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      "https://cex.cryptodevworks.com/api/v1/auth/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailOrUsername,
          password,
          googlecode,
          captcha,
        }),
      }
    );

    const text = await response.text(); // Read response as text

    try {
      const data = JSON.parse(text); // Try to parse response as JSON

      if (!response.ok) {
        return NextResponse.json(
          { message: data.detail || "Invalid credentials", error: data },
          { status: 401 }
        );
      }

      return NextResponse.json({ token: data.token, user: data.user });
    } catch (e) {
      // If JSON parsing fails, log the response text
      console.error("Response is not valid JSON:", text);
      return NextResponse.json(
        { message: "Invalid response from server", error: text },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { message: "An error occurred during login", error },
      { status: 500 }
    );
  }
}
