import styled from "styled-components";

export default styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  height: ${(props) => (props.height ? props.height : "60")}px;
  background-color: ${(props) => props.theme.common.main};
`;
