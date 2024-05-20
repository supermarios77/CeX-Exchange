import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password, googlecode, captcha } = await request.json();

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  if (!password) {
    return NextResponse.json({ message: 'Password is required' }, { status: 400 });
  }

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login/`;
    console.log('Sending request to:', apiUrl);
    console.log('Request payload:', { email, password, googlecode, captcha });

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, googlecode, captcha }),
    });

    const data = await response.json(); // Parse the response as JSON

    if (!response.ok) {
      console.error('API responded with error:', data);
      return NextResponse.json({ message: data.detail || 'Invalid credentials', error: data }, { status: 401 });
    }

    return NextResponse.json({ token: data.access_token, refresh_token: data.refresh_token, user: data.user });
  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json({ message: 'An error occurred during login', error }, { status: 500 });
  }
}
