const PodcastList = ({ podcasts }) => {
	return (
		<div>
			{podcasts.map((podcast) => {
				return console.log(podcast)
			})}
		</div>
	)
}
export default PodcastList