import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
	const prisma = new PrismaClient();

	const tweets = await prisma.tweet.findMany({
		select: {
			id: true,
			content: true,
			user: {
				select: {
					name: true,
					email: true,
					image: true,
				},
			},
		},
	});
	res.status(200).json(tweets);
}
