import { ContainerPodcastCard, ImagePodcast, Info, Title } from './podcastCardStyled'

const PodcastCard = ({ image, title, info }) => {
	return (
		<ContainerPodcastCard>
			<ImagePodcast src={image} alt="img" />
			<Title>{title}</Title>
			<Info>Autor: {info}</Info>
		</ContainerPodcastCard>
	)
}
export default PodcastCard

