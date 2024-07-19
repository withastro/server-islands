import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ cookies }) => {
  let cartCookie = cookies.get('cart');
  let count = cartCookie?.number() ?? 0;
  let newCount = count + 1;
  cookies.set('cart', newCount.toString(), {
    path: '/'
  });

  return new Response(null, {
    status: 200
  });
}
