// eslint-disable-next-line @typescript-eslint/naming-convention
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import {Container, NavWrap, StyledMobileNav} from "./NavStyles";

// 이미지 파일 임포트
import logo from "../../assets/img/nav/logo.png";
import archive from "../../assets/img/nav/archive.png";
import weather from "../../assets/img/nav/weather.png";
import chat from "../../assets/img/nav/chat-square-text.png";
import clothing from "../../assets/img/nav/window-stack.png";
import user from "../../assets/img/nav/person-vcard.png";

import login from "../../assets/img/nav/login.png";

const Nav: React.FC = () => {
	const [isLoggin, setIsLoggin] = useState<boolean>(false);

	useEffect(() => {
		const accessToken = localStorage.getItem("access_token");
		const refreshToken = localStorage.getItem("refresh_token");
		setIsLoggin(!!(accessToken && refreshToken));
	}, []);

	const onLogOut = () => {
		console.log("로그아웃 버튼 클릭");
		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");
		setIsLoggin(false);
	};

	return (
		<>
			<StyledMobileNav></StyledMobileNav>
			<Container>
				<Link to={"/"}>
					<h1>
						<img src={logo} alt="로고" />
					</h1>
				</Link>
				<NavWrap>
					<li>
						<Link to={"/"}>
							<span>
								<img src={weather} alt="오늘의 날씨" />
								오늘의 날씨
							</span>
						</Link>
					</li>
					<li>
						<Link to={"/chat"}>
							<span>
								<img src={chat} alt="지역 톡" />
								지역 톡
							</span>
						</Link>
					</li>
					<li>
						<Link to={"/feed"}>
							<span>
								<img src={clothing} alt="오늘 뭐 입지" />
								오늘 뭐 입지
							</span>
						</Link>
					</li>
					<li>
						<Link to={"/archive"}>
							<span>
								<img src={archive} alt="게시글 등록" />
								게시글 등록
							</span>
						</Link>
					</li>
					<li>
						<Link to={"/user"}>
							<span>
								<img src={user} alt="마이 페이지" />
								마이 페이지
							</span>
						</Link>
					</li>
				</NavWrap>
				{isLoggin && <button onClick={onLogOut}>로그아웃</button>}
				{!isLoggin && (
					<Link to={"/login"}>
						<button>
							<img src={login} alt="로그인" />
						</button>
					</Link>
				)}
			</Container>
		</>
	);
};

export default Nav;
