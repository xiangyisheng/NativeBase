import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Text,
  Box,
} from 'native-base';

export default function () {
  const [onChangeValue, setOnChangeValue] = React.useState(70);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(70);
  return (
    <Stack mx={5} space={4} alignItems="center" w="100%">
      <Text>onChangeValue - {onChangeValue}</Text>
      <Text>onChangeEndValue - {onChangeEndValue}</Text>

      <Box mx={5} width="80%">
        <Slider
          defaultValue={70}
          colorScheme="cyan"
          onChange={(v: any) => {
            setOnChangeValue(Math.floor(v));
          }}
          onChangeEnd={(v: any) => {
            v && setOnChangeEndValue(Math.floor(v));
          }}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </Stack>
  );
}