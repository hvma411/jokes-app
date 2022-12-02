export class Joke {
	id: string | undefined;
	category: string;
	content: string;

	constructor(category: string, content: string, id?: string,) {
		this.id = id;
		this.category = category;
		this.content = content;
	};
};
