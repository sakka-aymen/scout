// Send a text message to my Telegram chat.
async function sendTelegram(env, text) {
	const url = `https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/sendMessage`;
	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text: text }),
	});
	return response.ok;
}

export default {
	async fetch(request, env, ctx) {
		const sent = await sendTelegram(env, "Hello from Scout!");
		return new Response(sent ? "Message sent" : "Telegram error");
	},
};