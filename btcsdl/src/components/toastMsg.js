import styled from "styled-components";

export const ToastContainer = styled.div`
  

  @-webkit-keyframes fadein {
    from {
      right: 0;
      opacity: 0;
    }
    to {
      right: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      right: 0;
      opacity: 0;
    }
    to {
      right: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      right: 30px;
      opacity: 1;
    }
    to {
      right: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      right: 30px;
      opacity: 1;
    }
    to {
      right: 0;
      opacity: 0;
    }
  }
`;

export const Toast = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  padding: 4px 0 8px;
  border-bottom: 1px solid #f1f4f9;
  margin-bottom: 8px;
`;

export const ToastMsg = styled.p`
  font-size: 14px;
	padding: 2px 0;
`
