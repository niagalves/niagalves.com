import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { RequestHandler } from '@sveltejs/kit';

export const config = {
	runtime: 'nodejs'
};

export const GET: RequestHandler = ({ url }) => {
	const page = parseInt(url.searchParams.get('page') || '1');
	const pageSize = parseInt(url.searchParams.get('pageSize') || '5');
	const postsDir = path.resolve('static/posts');
	const files = fs
		.readdirSync(postsDir)
		.filter((file) => file.endsWith('.svx') || file.endsWith('.md'));

	const allPosts: Post[] = files.map((file) => {
		const slug = file.replace(/\.(svx|md)$/, '');
		const fileContent = fs.readFileSync(path.join(postsDir, file), 'utf-8');
		const { data } = matter(fileContent);

		return {
			slug,
			...data
		} as Post;
	});

	allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const totalPosts = allPosts?.length;
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
