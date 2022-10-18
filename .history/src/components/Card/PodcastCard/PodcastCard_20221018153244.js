import { ContainerPodcastCard, ImagePodcast } from './podcastCardStyled'

const PodcastCard = ({ podcast }) => {
	return (
		<ContainerPodcastCard>
			<ImagePodcast src={podcast['im:image'][2].label} alt="img" />
			{/* <h2>{podcast['im:name'].label}</h4> */}
			<h1>{podcast.category.attributes.label}</h1>
			<p>{podcast['im:artist'].label}</p>
		</ContainerPodcastCard>
	)
}
export default PodcastCard