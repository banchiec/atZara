import { useState } from 'react'

const PodcastList = ({ podcasts }) => {
	console.log(podcasts)
	return <div>
		{podcasts.map(())}
	</div>
}
export default PodcastList
