import { useState } from 'react'

const PodcastList = ({ podcasts }) => {
	console.log(podcasts)
	return (
		<div>
			{podcasts.map((podcast) => {
				return (<div>{podcast.im:name}</div>)
			})}
		</div>
	)
}
export default PodcastList
