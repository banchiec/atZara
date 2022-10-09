import { Link } from 'react-router-dom'
import { BranchHeader, ContentHeader } from './headerStyled'

const Header = () => {
	return (
		<ContentHeaderk>
			<BranchHeader>
				<Link to={'/'}>Podcaster</Link>
			</BranchHeader>
		</ContentHeader>
	)
}
export default Header
