import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../../../responsive";

export const MenuItem = styled(Link)`
	font-size: 14px;
	cursor: pointer;
	color: black;

	${tablet({ display: "none" })}
`;
