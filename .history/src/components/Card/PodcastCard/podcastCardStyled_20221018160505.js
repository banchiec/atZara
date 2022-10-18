import styled from 'styled-components'

export const ContainerPodcastCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`
export const ImagePodcast = styled.img`
	width: 200px;
	border-radius: 50%;
	position: absolute;
	top: -110px;
`
export const Title = styled.h2`
	padding: 0px;
	margin: 50px 0 0 0;
	text-align: center;
	/* border: 1px solid green; */
	font-size: 1.2rem;
`
export const Info = styled.span`
	text-align: center;
	font-weight: 200;
	color: gray;
`
