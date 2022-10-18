import { ContainerPodcastCard } from './podcastCardStyled'

const PodcastCard = ({ podcast }) => {
	return (
		<ContainerPodcastCard>
			<img src={podcast['im:image'][0].label} alt="img" />
			<h4>{podcast['im:name'].label}</h4>
			<p>{podcast['im:artist'].label}</p>
		</ContainerPodcastCard>
	)
}
export default PodcastCard
