
import { NextResponse } from "next/server";
import { triggerAIAgent } from "@/lib/n8n";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BODY RECEIVED:", body);

    const response = await triggerAIAgent(body);

    console.log("N8N RESPONSE:", response);

    return NextResponse.json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Error processing request",
      },
      { status: 500 }
    );
  }
}

