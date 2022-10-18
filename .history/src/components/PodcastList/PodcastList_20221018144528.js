const PodcastList = ({ podcasts }) => {
	console.log(podcasts)
	return (
		<div>
			{podcasts?.map((podcast) => {
				return (
					<div key={podcast.id.attributes.key('im:id')}>
						<h1>{podcast.category.attributes.label}</h1>
						{console.log(podcast.attributes)}
					</div>
				)
			})}
		</div>
	)
}
export default PodcastList
