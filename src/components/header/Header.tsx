// eslint-disable-next-line @typescript-eslint/naming-convention
import React from "react";

import dateicon from "../../assets/img/header/date.png";
import region from "../../assets/img/header/region.png";
import {Container, CurrentInfo, RegionInfo, DateInfo} from "./HeaderStyles";

const Header: React.FC = () => {
	const date = new Date();
	const currentDate = `${date.getFullYear()}-${String(
		date.getMonth() + 1
	).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

	return (
		<Container>
			<CurrentInfo>
				<RegionInfo>
					<span>
						<img src={region} />
					</span>
				</RegionInfo>
				<DateInfo>
					<span>
						<img src={dateicon} /> {currentDate}
					</span>
				</DateInfo>
			</CurrentInfo>
		</Container>
	);
};

export default Header;
