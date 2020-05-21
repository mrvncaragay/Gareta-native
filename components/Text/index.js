import styled from "styled-components";

export default styled.Text`
  font-size: 10px;
  letter-spacing: 0.5px;
  font-weight: bold;
  color: ${(props) => props.theme.common.main}
`;
