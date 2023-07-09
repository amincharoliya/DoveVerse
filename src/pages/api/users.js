import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
	const prisma = new PrismaClient();

	const users = await prisma.user.findMany({
		select: {
			id: true,
			name: true,
			image: true,
		},
	});
	res.status(200).json(users);
}
