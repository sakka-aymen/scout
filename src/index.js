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
		return new Response("Scout is running.");
	},

	async email(message, env, ctx) {
		const subject = message.headers.get("subject") || "(no subject)";
		await sendTelegram(env, `New email: ${subject}`);
	},
};