const PodcastList = ({ podcasts }) => {
	console.log(podcasts)
	return (
		<div>
			{podcasts?.map((podcast) => {
				return(
					<div key={podcast.id}>
						<h1>{podcast.category}</h1>
						{
							console.log(podcast)
						}

					</div>
				) 
			})}
		</div>
	)
}
export default PodcastList
