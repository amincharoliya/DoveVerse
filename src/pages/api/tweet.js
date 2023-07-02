import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
	const prisma = new PrismaClient();
	if (req.method === 'POST') {
		//Post a new tweet
		const { content, userEmail } = req.body;
		if (content === '') {
			res.status(403).json({
				err: 'Error occurred while adding a new tweet. Please make sure to add content',
			});
		} else {
			try {
				const tweets = await prisma.tweet.create({
					data: {
						content: content,
						user: { connect: { email: userEmail } },
					},
				});
				res.status(200).json(tweets);
			} catch (err) {
				console.log(err);
				res.status(403).json({
					err: 'Error occurred while adding a new tweet.',
				});
			}
		}
	} else if (req.method === 'GET') {
		// Get single tweet with id
		const { id } = req.query;
		console.log(req);

		if (!id) {
			res.status(403).send('Tweet ID not provided');
		} else {
			try {
				const tweet = await prisma.tweet.findMany({
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
					where: {
						id: id,
					},
				});
				if (Array.isArray(tweet) && tweet.length === 0) {
					res.status(403).json({
						err: 'Could not find a tweet with specific id',
					});
				} else {
					res.status(200).json(tweet);
				}
			} catch (err) {
				console.log(err);
				res.status(403).json({
					err: 'Error occurred while loading a tweet.',
				});
			}
		}
	}
}
