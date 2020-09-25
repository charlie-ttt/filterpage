import React from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import { SectionWrapper, SectionHeader, ClearButton } from "./styles";

const FilterSection = ({ filterName, onClearFilter, children }) => (
  <SectionWrapper>
    <Divider />
    <SectionHeader>
      <h3>{filterName}</h3>
      <ClearButton onClick={onClearFilter}>Clear</ClearButton>
    </SectionHeader>
    {children}
  </SectionWrapper>
);

FilterSection.propTypes = {
  filterName: PropTypes.string,
  onClearFilter: PropTypes.func,
  loading: PropTypes.bool,
  children: PropTypes.any,
};

export default FilterSection;
