import matter from 'gray-matter';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const page = parseInt(url.searchParams.get('page') || '1');
	const pageSize = parseInt(url.searchParams.get('pageSize') || '5');

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const postFiles: any = import.meta.glob('/static/posts/*.{md,svx}', {
		query: '?raw',
		import: 'default'
	});

	const allPosts: Post[] = [];

	for (const path in postFiles) {
		const fileContent = await postFiles[path]();
		const slug =
			path
				.split('/')
				.pop()
				?.replace(/\.(md|svx)$/, '') || '';
		const { data } = matter(fileContent);

		allPosts.push({
			slug,
			...data
		} as Post);
	}

	allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const totalPosts = allPosts.length;
	const totalPages = Math.ceil(totalPosts / pageSize);

	const start = (page - 1) * pageSize;
	const end = start + pageSize;
	const paginatedPosts = allPosts.slice(start, end);

	return new Response(
		JSON.stringify({
			page,
			pageSize,
			posts: paginatedPosts,
			totalPages
		}),
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
};
