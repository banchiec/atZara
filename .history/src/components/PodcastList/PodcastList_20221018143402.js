const PodcastList = ({ podcasts }) => {
	console.log(podcasts)
	return (
		<div>
			{podcasts?.map((podcast) => {
				return(
					<div>
				) 
				console.log(podcast)
			})}
		</div>
	)
}
export default PodcastList
