import styled from "styled-components";
import { mobile, mobileSE } from "../../responsive";

export const Container = styled.div``;

export const Title = styled.h1`
	margin: 20px;
`;
export const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${mobileSE({ flexDirection: "column" })}
`;
export const Filter = styled.div`
	margin: 20px;
	display: flex;
	align-items: center;
	gap: 4px;
	padding: 4px;

	${mobile({ flexDirection: "column" })}
`;

export const FilterText = styled.span`
	font-size: 20px;
	font-weight: 400;
`;

export const SelectContainer = styled.div`
	display: flex;
	gap: 8px;
`;

export const Select = styled.select`
	padding: 5px;
	font-size: 16px;
`;

export const Option = styled.option`
	font-size: 16px;
`;
