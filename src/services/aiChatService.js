// AI Chat Service
// Live Endpoint: https://shreeram.tail902341.ts.net/api/chat
// Bearer Token: nsai_cd3fa04e25ed4ef485d11242903c7119970fc325664e408da0d8a016db57296c

const DIRECT_URL = "https://shreeram.tail902341.ts.net/api/chat";
const PROXY_URL = "/api-proxy/chat";
const BEARER_TOKEN =
  "nsai_cd3fa04e25ed4ef485d11242903c7119970fc325664e408da0d8a016db57296c";

export const sendChatMessage = async (userMessage) => {
  const payload = { message: userMessage };
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${BEARER_TOKEN}`,
  };

  // 1. Try Direct URL first
  try {
    const res = await fetch(DIRECT_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      return {
        success: true,
        source: data.name || "Live AROOSHA TECHNOLOGIES AI",
        reply: data.response || data.message || JSON.stringify(data),
      };
    }
  } catch (directErr) {
    console.warn("Direct Chat API call error, trying Vite proxy:", directErr);
  }

  // 2. Try Vite Proxy (handles CORS in local dev environment)
  try {
    const res = await fetch(PROXY_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      return {
        success: true,
        source: data.name || "Live AROOSHA TECHNOLOGIES AI",
        reply: data.response || data.message || JSON.stringify(data),
      };
    }
  } catch (proxyErr) {
    console.warn("Proxy Chat API call failed:", proxyErr);
  }

  return {
    success: false,
    source: "Kalpasar Knowledge Base",
    reply: null,
  };
};
