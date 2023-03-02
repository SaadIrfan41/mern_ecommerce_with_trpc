import { NextRequest, NextResponse, userAgent } from 'next/server'
export async function GET(request: NextRequest) {
  return new Response('Hello, Next.js! From ' + request.geo?.country)
}
