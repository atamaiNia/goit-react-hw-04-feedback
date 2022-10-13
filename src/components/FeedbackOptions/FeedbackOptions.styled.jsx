import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
export const FeedbackItem = styled.li`
  font-weight: 700;
`;

export const FeedbackBtn = styled.button`
  background-color: #df63eb;
  box-shadow: 3px 3px rgb(0 0 0 / 15%);
  padding: 5px;
  width: 75px;
  border: none;
  color: white;
  text-transform: capitalize;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transform: scale(1.3);
  }
`;
