import styled from "styled-components";

import CoverBase from "./CoverBase";

const Cover = styled(CoverBase)`
  background: #283c86;
  background: linear-gradient(
    to right bottom,
    #7883a4,
    #454d66,
    #454d664f
  );

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .speakers {
    font-size: 21px;

    > * {
      margin-right: 8px;
    }
  }
`;

export default Cover;
