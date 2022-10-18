import { useState } from 'react'

const PodcastList = ({ podcasts }) => {
	console.log(podcasts)
	return (
		<div>
			{podcasts.map((podcast) => {
				return (<div>{podcast.iM}</div>)
			})}
		</div>
	)
}
export default PodcastList
