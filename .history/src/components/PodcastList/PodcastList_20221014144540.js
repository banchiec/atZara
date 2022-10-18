import { useState } from 'react'

const PodcastList = ({ podcasts }) => {
	console.log(podcasts)
	return <div>
		{podcasts.map((podcast) => {
			return(

			console.log(podcast);
			)
		})}
	</div>
}
export default PodcastList
