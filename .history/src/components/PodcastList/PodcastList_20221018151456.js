import PodcastCard from '../Card/PodcastCard/PodcastCard'
import { ContainerPost } from './podcastListStyled'

const PodcastList = ({ podcasts }) => {
	console.log(podcasts)
	return (
		<ContainerPost>
			{podcasts?.map((podcast) => {
				return (
					<PodcastCard podcast_card/>
					
				)
			})}
		</ContainerPost>
	)
}
export default PodcastList
