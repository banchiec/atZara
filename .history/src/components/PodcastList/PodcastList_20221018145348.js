const PodcastList = ({ podcasts }) => {
	console.log(podcasts)
	return (
		<div>
			{podcasts?.map((podcast) => {
				return (
					<div key={podcast.id.attributes['im:id']}>
						<h1>{podcast.category.attributes.label}</h1>
						<img src={podcast.id.attributes['im:images']} alt="img" />
						{console.log(podcast)}
					</div>
				)
			})}
		</div>
	)
}
export default PodcastList
