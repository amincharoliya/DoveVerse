import React from 'react';
import { useSession } from 'next-auth/react';

const Tweet = () => {
	const { data: session } = useSession();

	const [feed, setFeed] = React.useState(null);
	const [tweet, setTweet] = React.useState('');

	React.useEffect(() => {
		fetch('/api/gettweets')
			.then((res) => res.json())
			.then((res) => setFeed(res));
	}, []);

	if (!session?.user) return null;

	const sendTweet = () => {
		try {
			fetch('/api/tweet', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					body: tweet,
					userEmail: session.user.email,
				}),
			});
			setTweet('');
		} catch (err) {
			console.log(err);
		}
	};

	if (feed === null) {
		return <p>loading</p>;
	}

	return (
		<>
			{feed.map((tweet) => (
				<p key={tweet.id}>
					<span>{tweet.user.name}</span>
					<span>{tweet.body}</span>
				</p>
			))}
			<textarea
				value={tweet}
				onChange={(e) => setTweet(e.target.value)}
			></textarea>
			<button onClick={() => sendTweet()}>Tweet it</button>
		</>
	);
};

export default Tweet;
