import styled from 'styled-components'

export const ContentHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: cnter;
	padding: 10px 5px;
	/* height: 4vh; */
	border-bottom: 1px solid gray;
	.header {
		display: flex;
		flex-direction: row;
	}
`

export const BranchHeader = styled.div`
	display: flex;
	a {
		text-decoration: none;
		font-weight: 600;
		color: blue;
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
