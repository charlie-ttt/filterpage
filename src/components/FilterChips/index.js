import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';

export const FilterChip = styled(Chip).attrs(({ isSelected }) => ({
  variant: isSelected ? 'default' : 'outlined',
  color: 'secondary',
}))`
  && {
    margin-right: 8px;
    margin-bottom: 8px;
    width: fit-content;
    font-weight: bold;
    ${({ isSelected }) => isSelected && `color: #fff`};
  }
`;

export const ChipContainer = styled.div``;

export const SquareFilterContainer = styled.div`
  display: flex;
  overflow: scroll;
`;

export const SquareFilterChip = styled(Chip).attrs(({ isSelected }) => ({
  variant: isSelected ? 'default' : 'outlined',
  color: 'secondary',
}))`
  && {
    border-radius: 5px;
    margin-right: 8px;
    margin-bottom: 8px;
    height: 45px;
    font-size: 17px;
    width: 45px;
    font-weight: bold;
    text-align: center;
    ${({ isSelected }) => isSelected && `color: #fff`};

    & .MuiChip-label {
      width: 45px;
      ${({ type }) =>
        type === 'floor' &&
        `padding-left: 2px;
        padding-right: 2px;
        `}
    }
  }
`;
