
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { triggerAIAgent } from "@/lib/n8n";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      patient_name,
      request_type,
      department,
    } = body;

    // 1. Guardar request inicial
    const { data: requestData, error } = await supabase
      .from("hospital_requests")
      .insert({
        patient_name,
        request_type,
        department,
        status: "processing",
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    // 2. Ejecutar agente IA
    const aiResponse = await triggerAIAgent({
      patient_name,
      request_type,
      department,
    });

    // 3. Guardar resultado IA
    await supabase
      .from("hospital_requests")
      .update({
        ai_priority: aiResponse.priority,
        ai_summary: aiResponse.summary,
        ai_decision: aiResponse.decision,
        ai_response: aiResponse,
        status: "completed",
      })
      .eq("id", requestData.id);

    // 4. Responder frontend
    return NextResponse.json({
      success: true,
      request: requestData,
      ai: aiResponse,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Error processing request",
      },
      {
        status: 500,
      }
    );
  }
}

