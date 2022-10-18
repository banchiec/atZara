import PodcastCard from '../Card/PodcastCard/PodcastCard'
import { ContainerPost } from './podcastListStyled'

const PodcastList = ({ podcasts }) => {
	console.log(podcasts)
	return (
		<ContainerPost>
			{podcasts?.map((podcast) => {
				return 
					<PodcastCard 
						podcast={podcast} key={podcast.id.attributes['im:id']} />
			})}
		</ContainerPost>
	)
}
export default PodcastList
