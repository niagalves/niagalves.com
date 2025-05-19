import matter from 'gray-matter';
import type { RequestHandler } from '@sveltejs/kit';

const formatDate = (dateString: string): string => {
	const [year, month, day] = dateString.split('-').map(Number);
	const date = new Date(year, month - 1, day);

	const dd = String(date.getDate()).padStart(2, '0');
	const mm = String(date.getMonth() + 1).padStart(2, '0');
	const yyyy = date.getFullYear();

	return `${dd}/${mm}/${yyyy}`;
};

export const GET: RequestHandler = async ({ url }) => {
	try {
		const page = parseInt(url.searchParams.get('page') || '1');
		const pageSize = parseInt(url.searchParams.get('pageSize') || '10');

		const postFiles = import.meta.glob('/static/posts/*.{md,svx}', {
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
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const { data } = matter(fileContent as any);

			allPosts.push({
				slug,
				...data,
				date: formatDate(data.date)
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
	} catch (error) {
		console.error('Erro ao carregar posts:', error);

		return new Response(
			JSON.stringify({
				error: 'Erro ao carregar posts'
			}),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}
};
