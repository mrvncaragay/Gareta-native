import React from "react";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components";
import Image from "../Image";
import Text from "../Text";

const Container = styled.View`
  ${(props) => props.root && css`
    height: 120px;
    flexDirection: row;
    marginTop: 8px;
    marginBottom: 8px;
  `}

  ${(props) => props.block && css`
    width: 100%;
    paddingLeft: 24px;
    justifyContent: center;
    backgroundColor: white;
`}

  ${(props) => props.image && css`
    width: 100px;
  `}
`;

const CategoryListItem = ({ item: { uri, label } }) => (
  <TouchableOpacity>
    <Container root>
      <Container image>
        <Image ratio={0.8} uri={uri} />
      </Container>

      <Container block>
        <Text bold size={16} letterSpacing={1}>{label}</Text>
      </Container>
    </Container>
  </TouchableOpacity>
);

export default CategoryListItem;
