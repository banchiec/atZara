const PodcastList = ({ podcasts }) => {
	console.log(podcasts)
	return (
		<div>
			{podcasts?.map((podcast) => {
				return(
					<div key={podcast.}>
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
