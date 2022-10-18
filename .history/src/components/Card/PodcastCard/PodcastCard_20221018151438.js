const PodcastCard = () => {
	return
<div key={podcast.id.attributes['im:id']}>
						<h1>{podcast.category.attributes.label}</h1>
						<img src={podcast['im:image'][0].label} alt="img" />
						<h4>{podcast['im:name'].label}</h4>
						<p>{podcast['im:artist'].label}</p>
					</div>
}
export default PodcastCard
