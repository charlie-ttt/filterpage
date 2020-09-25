import styled from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  & > hr {
    margin-bottom: 15px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;

  & > h3 {
    color: #b0b0b0;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  color: #828282;
  font-size: 14px;
  font-weight: 500;
  padding: 0;
`;
