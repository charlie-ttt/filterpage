import React, { useState } from "react";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import FilterSection from "../components/FilterSection";
import {
  FilterChip,
  ChipContainer,
  SquareFilterChip,
  SquareFilterContainer,
} from "../components/FilterChips";
import BottomButton from "../components/BottomButton";
import { TimeFilterContainer, StyledPageWrapper } from "./styles";

const initialStartTime = moment().set("hour", 8).set("minute", 0);
const initialFinishTime = moment().set("hour", 18).set("minute", 0);
const initialBuildings = {
  0: { value: "Griffin", isSelected: false },
  1: { value: "Phoenix", isSelected: false },
};
const initialRoomTypes = {
  0: { value: "Common room", isSelected: false },
  1: { value: "Company room", isSelected: false },
};
const initialRoomSizes = {
  0: { value: "small", isSelected: false },
  1: { value: "medium", isSelected: false },
  2: { value: "large", isSelected: false },
};
const initialFloors = {
  1: { value: "1", isSelected: false },
  2: { value: "2", isSelected: false },
  3: { value: "3", isSelected: false },
  4: { value: "4", isSelected: false },
  5: { value: "5", isSelected: false },
  6: { value: "6", isSelected: false },
  7: { value: "7", isSelected: false },
  8: { value: "8", isSelected: false },
  9: { value: "9", isSelected: false },
};
const initialAmenities = {
  0: { value: `55" TV`, isSelected: false },
  1: { value: "Microphone & Speaker", isSelected: false },
  2: { value: "Projector", isSelected: false },
  3: { value: "HDMI", isSelected: false },
  4: { value: "Whiteboard", isSelected: false },
  5: { value: "Conference equipments", isSelected: false },
};

const ListFilters = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [finishTime, setFinishTime] = useState(null);
  const [buildings, setBuildings] = useState(initialBuildings);
  const [roomTypes, setRoomTypes] = useState(initialRoomTypes);
  const [roomSizes, setRoomSizes] = useState(initialRoomSizes);
  const [amenities, setAmenities] = useState(initialAmenities);
  const [floors, setFloors] = useState(initialFloors);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <StyledPageWrapper>
        <FilterSection
          filterName="Date"
          onClearFilter={() => setSelectedDate(null)}
        >
          <DatePicker
            label="Select a day"
            format="MM/DD/YYYY"
            inputVariant="outlined"
            minDate={new Date()}
            onChange={(date) => {
              setSelectedDate(date);
            }}
            value={selectedDate}
          />
        </FilterSection>
        <FilterSection
          filterName="Time"
          onClearFilter={() => {
            setStartTime(null);
            setFinishTime(null);
          }}
        >
          <TimeFilterContainer>
            <TimePicker
              label="Start time"
              inputVariant="outlined"
              minutesStep={30}
              value={startTime}
              initialFocusedDate={initialStartTime}
              onChange={(date) => setStartTime(date)}
            />
            <TimePicker
              label="Finish time"
              inputVariant="outlined"
              minutesStep={30}
              value={finishTime}
              initialFocusedDate={initialFinishTime}
              onChange={(date) => setFinishTime(date)}
            />
          </TimeFilterContainer>
        </FilterSection>
        <FilterSection
          filterName="Amenities"
          onClearFilter={() => setAmenities(initialAmenities)}
        >
          <ChipContainer>
            {Object.keys(amenities).map((index) => {
              const { value, isSelected } = amenities[index];
              return (
                <FilterChip
                  key={value}
                  label={value}
                  isSelected={isSelected}
                  onClick={() => {
                    setAmenities({
                      ...amenities,
                      [index]: { value, isSelected: !isSelected },
                    });
                  }}
                />
              );
            })}
          </ChipContainer>
        </FilterSection>
        <FilterSection
          filterName="Building"
          onClearFilter={() => setBuildings(initialBuildings)}
        >
          <ChipContainer>
            {Object.keys(buildings).map((index) => {
              const { value, isSelected } = buildings[index];
              return (
                <FilterChip
                  key={value}
                  label={value}
                  isSelected={isSelected}
                  onClick={() => {
                    setBuildings({
                      ...buildings,
                      [index]: { value, isSelected: !isSelected },
                    });
                  }}
                />
              );
            })}
          </ChipContainer>
        </FilterSection>
        <FilterSection
          filterName="Floor"
          onClearFilter={() => setFloors(initialFloors)}
        >
          <SquareFilterContainer>
            {Object.keys(floors).map((index) => {
              const { value, isSelected } = floors[index];
              return (
                <SquareFilterChip
                  type="floor"
                  key={value}
                  label={value}
                  isSelected={isSelected}
                  onClick={() => {
                    setFloors({
                      ...floors,
                      [index]: { value, isSelected: !isSelected },
                    });
                  }}
                />
              );
            })}
          </SquareFilterContainer>
        </FilterSection>
        <FilterSection
          filterName="Common/Company room"
          onClearFilter={() => setRoomTypes(initialRoomTypes)}
        >
          <ChipContainer>
            {Object.keys(roomTypes).map((index) => {
              const { value, isSelected } = roomTypes[index];
              return (
                <FilterChip
                  key={value}
                  label={value}
                  isSelected={isSelected}
                  onClick={() =>
                    setRoomTypes({
                      ...roomTypes,
                      [index]: { value, isSelected: !isSelected },
                    })
                  }
                />
              );
            })}
          </ChipContainer>
        </FilterSection>
        <FilterSection
          filterName="Room Size"
          onClearFilter={() => setRoomSizes(initialRoomSizes)}
        >
          <ChipContainer>
            {Object.keys(roomSizes).map((index) => {
              const { value, isSelected } = roomSizes[index];
              return (
                <FilterChip
                  key={value}
                  label={value}
                  isSelected={isSelected}
                  onClick={() =>
                    setRoomSizes({
                      ...roomSizes,
                      [index]: { value, isSelected: !isSelected },
                    })
                  }
                />
              );
            })}
          </ChipContainer>
        </FilterSection>
      </StyledPageWrapper>
      <BottomButton onClick={()=>{}} >
        {`Apply filters`}
      </BottomButton>
    </MuiPickersUtilsProvider>
  );
};

export default ListFilters;
