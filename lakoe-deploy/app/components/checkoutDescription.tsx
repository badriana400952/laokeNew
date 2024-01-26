import {
  Box,
  Heading,
  Text,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';

import React from 'react';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import Slider from 'react-slick';

export default function CheckoutDescription(props: any) {
  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={3}
        m={3}
        p={3}
        w={'90%'}
      >
        <Box>
          <Box display={'flex'} justifyContent={'center'}>
            <ImageSlide image={props.image} />
            {/* <Img w={'30%'} objectFit={'cover'} src={props.image}></Img> */}
          </Box>
        </Box>
        <Box mt={5} display={'flex'} flexDir={'column'} alignItems={'center'}>
          <Heading fontFamily={'serif'}>Introducing,</Heading>
          <Heading id="description">{props.name}</Heading>
          <Box>
            <Text fontSize={'26px'} textAlign={'justify'} mt={5}>
              {props.description}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function ImageSlide({ image }: any) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = image;

  return (
    <Box position={'relative'} height={'5%'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url: any, index: React.Key | null | undefined) => (
          <Box
            key={index}
            height={'lg'}
            position="relative"
            backgroundPosition="center top"
            backgroundRepeat="no-repeat"
            // backgroundSize="cover"
            backgroundSize={'40%'}
            backgroundImage={`url(${url.url})`}
          />
          // {/* <Box display={'flex'} justifyContent={'center'} key={index}> */}

          // {/* <Img src={url.url} alt="" /> */}
          // {/* </Box> */}
        ))}
      </Slider>
    </Box>
  );
}
