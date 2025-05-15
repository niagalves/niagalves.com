import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		const res = await fetch(
			'https://api.github.com/users/niagalves/repos?sort=created&direction=desc&per_page=3'
		);

		if (!res.ok) {
			throw new Error(`Erro HTTP: ${res.status}`);
		}

		const data: Repo[] = await res.json();

		const repositories =
			data
				.filter((repo) => !['estudos-go', 'niagalves'].includes(repo.name))
				.map((repo) => ({
					name: repo.name,
					description: repo.description,
					href: repo.html_url,
					date: new Date(repo.created_at).toLocaleDateString('pt-BR')
				})) || [];

		return { repositories };
	} catch (error) {
		console.error('Erro ao buscar os repositórios:', error);

		return { repositories: [] };
	}
};
