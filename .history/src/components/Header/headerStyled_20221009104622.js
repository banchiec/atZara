import styled from 'styled-components'

export const ContentHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1.4em;
	height: 8vh;
	border-bottom: 1px solid gray;
	.header {
		display: flex;
		flex-direction: row;
	}
`

export const BranchHeader = styled.div`
	display: flex;
	a {
		text-decoration: ;
	}
`
export const Menu = styled.div`
	font-size: 1.4em;
	svg {
		padding: 0 5px;
	}
	@media (min-width: 768px) {
		display: none;
		svg {
		}
	}
`
