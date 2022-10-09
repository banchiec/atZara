import { Link } from "react-router-dom"
import { BranchHeader, ContentHeader } from "./headerStyled"

const Header = () => {
	return (
		<ContentHeader>
			<BranchHeader>
				<Link to={'/'}>
				</Link>
			</BranchHeader>
		</ContentHeader>
	)
}
export default Header
