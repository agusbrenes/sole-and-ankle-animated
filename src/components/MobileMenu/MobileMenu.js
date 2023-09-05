/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
	return (
		<Overlay isOpen={isOpen} onDismiss={onDismiss}>
			<Content aria-label="Menu">
				<InnerContent>
					<CloseButton onClick={onDismiss}>
						<Icon id="close" />
						<VisuallyHidden>Dismiss menu</VisuallyHidden>
					</CloseButton>
					<Filler />
					<Nav>
						<NavLink href="/sale">Sale</NavLink>
						<NavLink href="/new">New&nbsp;Releases</NavLink>
						<NavLink href="/men">Men</NavLink>
						<NavLink href="/women">Women</NavLink>
						<NavLink href="/kids">Kids</NavLink>
						<NavLink href="/collections">Collections</NavLink>
					</Nav>
					<Footer>
						<SubLink href="/terms">Terms and Conditions</SubLink>
						<SubLink href="/privacy">Privacy Policy</SubLink>
						<SubLink href="/contact">Contact Us</SubLink>
					</Footer>
				</InnerContent>
			</Content>
		</Overlay>
	);
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  85% {
    transform: translateX(-2px);
  }
  100% {
    transform: translateX(0);
  }
`;

const Overlay = styled(DialogOverlay)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: var(--color-backdrop);
	display: flex;
	justify-content: flex-end;
	animation: ${fadeIn} 250ms ease-in;
`;

const Content = styled(DialogContent)`
	background: white;
	width: 300px;
	height: 100%;
	padding: 24px 32px;
	opacity: 1;
	@media (hover: hover) and (prefers-reduced-motion: no-preference) {
		animation: ${slideIn} 400ms cubic-bezier(0.17, 0.67, 0.63, 1.07) both;
		animation-delay: 50ms;
	}
`;

const InnerContent = styled.div`
	display: flex;
	flex-direction: column;
	animation: ${fadeIn} 200ms both;
	animation-delay: 300ms;
	height: 100%;
`;

const CloseButton = styled(UnstyledButton)`
	position: absolute;
	top: 10px;
	right: 0;
	padding: 16px;
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 16px;
	animation: ${fadeIn} 200ms both;
	animation-delay: 350ms;
`;

const NavLink = styled.a`
	color: var(--color-gray-900);
	font-weight: ${WEIGHTS.medium};
	text-decoration: none;
	font-size: 1.125rem;
	text-transform: uppercase;

	&:first-of-type {
		color: var(--color-secondary);
	}
`;

const Filler = styled.div`
	flex: 1;
`;
const Footer = styled.footer`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 14px;
	justify-content: flex-end;
	animation: ${fadeIn} 200ms both;
	animation-delay: 350ms;
`;

const SubLink = styled.a`
	color: var(--color-gray-700);
	font-size: 0.875rem;
	text-decoration: none;
`;

export default MobileMenu;
