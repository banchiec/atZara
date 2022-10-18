const PodcastList = ({ podcasts }) => {
	console.log(podcasts)
	return (
		<div>
			{podcasts?.map((podcast) => {
				return(
					<div p>
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
