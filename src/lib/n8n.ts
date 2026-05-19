import axios from "axios";
export async function triggerAIAgent(payload: any) {
  const response = await axios.post(process.env.N8N_WEBHOOK_URL!, payload);
  // const responseTest = await axios.post(process.env.N8N_TEST_WEBHOOK_URL!, payload);
  console.log("RAW N8N RESPONSE:", response.data);
  //console.log("RAW N8N TEST RESPONSE:", responseTest.data);
  return response.data;
}
