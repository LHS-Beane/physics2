// Cloudflare Worker example for secure OpenAI explanations.
// Put your OpenAI API key in Cloudflare Worker secrets as OPENAI_API_KEY.
// Then set AI_EXPLANATION_ENDPOINT in index.html to this Worker URL.

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }
    if (request.method !== 'POST') {
      return json({ error: 'Use POST' }, 405);
    }

    const { prompt } = await request.json();
    if (!prompt || prompt.length > 6000) {
      return json({ error: 'Missing or too-long prompt' }, 400);
    }

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        input: prompt,
        max_output_tokens: 450
      })
    });

    const data = await response.json();
    const explanation = data.output_text || data.output?.[0]?.content?.[0]?.text || 'No explanation returned.';
    return json({ explanation });
  }
};

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders() }
  });
}
