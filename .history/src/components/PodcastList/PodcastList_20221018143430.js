const PodcastList = ({ podcasts }) => {
	console.log(podcasts)
	return (
		<div>
			{podcasts?.map((podcast) => {
				return(
					<div key={podcast.id}>
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
