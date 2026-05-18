import axios from "axios";
export async function triggerAIAgent(payload: any) {
  const response = await axios.post(process.env.N8N_WEBHOOK_URL!, payload);
  return response.data;
}
