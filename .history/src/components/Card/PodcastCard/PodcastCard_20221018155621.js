import { ContainerPodcastCard, ImagePodcast, Title } from './podcastCardStyled'

const PodcastCard = ({ podcast }) => {
	return (
		<ContainerPodcastCard>
			<ImagePodcast src={podcast['im:image'][2].label} alt="img" />
			<Title>{podcast['im:name'].label}</Title>
			<p>Autor: {podcast['im:artist'].label}</p>
		</ContainerPodcastCard>
	)
}
export default PodcastCard
