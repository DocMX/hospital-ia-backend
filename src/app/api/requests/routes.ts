import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { triggerAIAgent } from "@/lib/n8n";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { patient_name, request_type, department } = body;
    // Guardar solicitud
    const { data, error } = await supabase
      .from("hospital_requests")
      .insert({ patient_name, request_type, department })
      .select()
      .single();
    if (error) {
      throw error;
    }
    // Disparar agente IA
    await triggerAIAgent({
      requestId: data.id,
      patient_name,
      request_type,
      department,
    });
    return NextResponse.json({
      success: true,
      message: "Solicitud procesada por AI Agent",
      data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Error processing request" },
      { status: 500 },
    );
  }
}
