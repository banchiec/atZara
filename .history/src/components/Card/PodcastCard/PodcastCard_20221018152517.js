import { ContainerPodcastCard, ImagePodcast } from './podcastCardStyled'

const PodcastCard = ({ podcast }) => {
	return (
		<ContainerPodcastCard>
			<ImagePodcast src={podcast['im:image'][0].label} alt="img" />
			<h1>{podcast.category.attributes.label}</h1>
			<h4>{podcast['im:name'].label}</h4>
			<p>{podcast['im:artist'].label}</p>
		</ContainerPodcastCard>
	)
}
export default PodcastCard
