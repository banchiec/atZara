import { ContainerPodcastCard, ImagePodcast, Title } from './podcastCardStyled'

const PodcastCard = ({ podcast }) => {
	return (
		<ContainerPodcastCard>
			<ImagePodcast src={podcast['im:image'][2].label} alt="img" />
			<Title>{podcast['im:name'].label}</Title>
			<Inf>Autor: {podcast['im:artist'].label}</Info>
		</ContainerPodcastCard>
	)
}
export default PodcastCard