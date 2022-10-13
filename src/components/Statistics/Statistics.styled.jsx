import styled from 'styled-components';

export const StatisticsList = styled.ul`
  padding-left: 65px;
  padding-right: 65px;
`;

export const StatisticsItem = styled.li`
  background-color: #f0edf0;
  display: block;
  padding: 5px;
  margin-bottom: 10px;

  :nth-last-child(-n + 2) {
    font-weight: 700;
    background-color: #df63eb;
    color: white;
  }
  :nth-last-child() {
    margin-bottom: 0px;
  }
`;
