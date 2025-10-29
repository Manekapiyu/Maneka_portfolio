import { NextResponse } from 'next/server'

interface ContactRequestBody {
  name: string
  email: string
  mobile: string
  message: string
}

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON
    const body: ContactRequestBody = await request.json()

    // 🔹 Log the submitted message to the terminal
    console.log("New Contact Message:", body)

    // Respond back to the client
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to send message'
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    )
  }
}
