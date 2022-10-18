import { ContainerPodcastCard, ImagePodcast, Info, Title } from './podcastCardStyled'

const PodcastCard = ({ image, title, info }) => {
	return (
		<ContainerPodcastCard>
			<ImagePodcast src={image} alt="img" />
			{/* <Title>{podcast['im:name'].label}</Title> */}
			{/* <Info>Autor: {podcast['im:artist'].label}</Info> */}
		</ContainerPodcastCard>
	)
}
export default PodcastCard
