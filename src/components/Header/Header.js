import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
				<DesktopNav>
					<NavLink href="/sale">
						<NavTextWrapper>
							<NavText>Sale</NavText>
							<BoldNavText aria-hidden>Sale</BoldNavText>
						</NavTextWrapper>
						<DottedUnderline>
							<Dot />
							<Dot />
							<Dot />
						</DottedUnderline>
					</NavLink>
					<NavLink href="/new">
						<NavTextWrapper>
							<NavText>New&nbsp;Releases</NavText>
							<BoldNavText aria-hidden>New&nbsp;Releases</BoldNavText>
						</NavTextWrapper>
						<DottedUnderline>
							<Dot />
							<Dot />
							<Dot />
						</DottedUnderline>
					</NavLink>
					<NavLink href="/men">
						<NavTextWrapper>
							<NavText>Men</NavText>
							<BoldNavText aria-hidden>Men</BoldNavText>
						</NavTextWrapper>
						<DottedUnderline>
							<Dot />
							<Dot />
							<Dot />
						</DottedUnderline>
					</NavLink>
					<NavLink href="/women">
						<NavTextWrapper>
							<NavText>Women</NavText>
							<BoldNavText aria-hidden>Women</BoldNavText>
						</NavTextWrapper>
						<DottedUnderline>
							<Dot />
							<Dot />
							<Dot />
						</DottedUnderline>
					</NavLink>
					<NavLink href="/kids">
						<NavTextWrapper>
							<NavText>Kids</NavText>
							<BoldNavText aria-hidden>Kids</BoldNavText>
						</NavTextWrapper>
						<DottedUnderline>
							<Dot />
							<Dot />
							<Dot />
						</DottedUnderline>
					</NavLink>
					<NavLink href="/collections">
						<NavTextWrapper>
							<NavText>Collections</NavText>
							<BoldNavText aria-hidden>Collections</BoldNavText>
						</NavTextWrapper>
						<DottedUnderline>
							<Dot />
							<Dot />
							<Dot />
						</DottedUnderline>
					</NavLink>
				</DesktopNav>
				<MobileActions>
					<ShoppingBagButton>
						<Icon id="shopping-bag" />
						<VisuallyHidden>Open cart</VisuallyHidden>
					</ShoppingBagButton>
					<UnstyledButton>
						<Icon id="search" />
						<VisuallyHidden>Search</VisuallyHidden>
					</UnstyledButton>
					<UnstyledButton onClick={() => setShowMobileMenu(true)}>
						<Icon id="menu" />
						<VisuallyHidden>Open menu</VisuallyHidden>
					</UnstyledButton>
				</MobileActions>
				<Filler />
			</MainHeader>

			<MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
		</header>
	);
};

const MainHeader = styled.div`
	display: flex;
	align-items: baseline;
	padding: 18px 32px;
	border-bottom: 1px solid var(--color-gray-300);
	overflow: auto;

	--nav-text-animation-dur: 200ms;
	--nav-underline-animation-dur: 200ms;

	@media ${QUERIES.tabletAndSmaller} {
		justify-content: space-between;
		align-items: center;
		border-top: 4px solid var(--color-gray-900);
	}

	@media ${QUERIES.phoneAndSmaller} {
		padding-left: 16px;
		padding-right: 16px;
	}
`;

const DesktopNav = styled.nav`
	display: flex;
	gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
	margin: 0px 48px;

	@media ${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

const MobileActions = styled.div`
	display: none;

	@media ${QUERIES.tabletAndSmaller} {
		gap: 32px;
		display: flex;
	}

	@media ${QUERIES.phoneAndSmaller} {
		gap: 16px;
	}
`;

const LogoWrapper = styled.div`
	flex: 1;

	@media ${QUERIES.tabletAndSmaller} {
		flex: revert;
	}
`;

const ShoppingBagButton = styled(UnstyledButton)`
	transform: translateX(-2px);
`;

const Filler = styled.div`
	flex: 1;

	@media ${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

const Dot = styled.span`
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background-color: currentColor;
`;

const DottedUnderline = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	gap: 0;
	opacity: 0;
	width: 100%;
	pointer-events: none;

	@media (hover: hover) and (prefers-reduced-motion: no-preference) {
		transition: transform var(--nav-underline-animation-dur) ease-in-out,
			opacity var(--nav-underline-animation-dur) ease-in-out,
			gap var(--nav-underline-animation-dur) ease-in-out;
	}
`;

const NavTextWrapper = styled.div`
	position: relative;
	overflow: hidden;
`;

const NavText = styled.span`
	display: block;

	@media (hover: hover) and (prefers-reduced-motion: no-preference) {
		transition: transform var(--nav-text-animation-dur) ease-in-out;
	}
`;

const BoldNavText = styled(NavText)`
	position: absolute;
	transform: translateY(100%);
	font-weight: ${WEIGHTS.bold};
`;

const NavLink = styled.a`
	position: relative;
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: var(--color-gray-900);
	font-weight: ${WEIGHTS.medium};

	&:first-of-type {
		color: var(--color-secondary);
	}

	&:hover,
	&:focus {
		${NavText} {
			transform: translateY(-100%);
		}

		${DottedUnderline} {
			transform: translateY(100%);
			transition-delay: var(--nav-text-animation-dur);
			opacity: 1;
			gap: 8px;
		}
	}
`;

export default Header;
