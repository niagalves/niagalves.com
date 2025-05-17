import type { Handle } from '@sveltejs/kit';

// gambiarra para parar de zoar meu terminal com erros: https://github.com/sveltejs/kit/issues/13743
export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/.well-known/appspecific/com.chrome.devtools')) {
		return new Response(null, { status: 204 });
	}

	return await resolve(event);
};
