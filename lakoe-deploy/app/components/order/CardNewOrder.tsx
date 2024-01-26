import { Box, Button, Card, Flex, Img, Text } from '@chakra-ui/react';
import { Link } from '@remix-run/react';
import type { IOrderList } from '~/interfaces/order';
export default function CardNewOrder(props: IOrderList) {
  return (
    <>
      <Card mb={5} boxShadow={'xs'}>
        <Box>
          <Box mt={5}>
            <Box>
              <Flex justifyContent={'space-between'} px={2}>
                <Button
                  bg={'#008F5D'}
                  color={'white'}
                  fontWeight={'bold'}
                  colorScheme="red.500"
                  size={'sm'}
                  pointerEvents={'none'}
                >
                  Pesanan Baru
                </Button>

                {/* SET WHAT DO YOU WANT TO DO WITH YOUR BUTTON HERE */}
                <Link to={`http://wa.me/${props.telephone}`}>
                  <Button
                    bg={'transparent'}
                    border={'1px solid #D5D5D5'}
                    borderRadius={'full'}
                    fontSize={'14px'}
                  >
                    Proses Pesanan
                  </Button>
                </Link>
                {/*  */}
              </Flex>
              <Text my={1} fontSize={'14px'} color={'gray.400'} px={2}>
                {props.invoice}
              </Text>
              <hr />
              <Flex justifyContent={'space-between'}>
                <Box display={'flex'} w={'80%'}>
                  <Img
                    w={'52px'}
                    h={'52px'}
                    display={'inline'}
                    src={props.imageProduct}
                    mt={3}
                  />
                  <Text
                    mt={4}
                    id="fm500"
                    fontSize={'16px'}
                    textOverflow={'ellipsis'}
                    overflow={'hidden'}
                    whiteSpace={'nowrap'}
                    fontWeight={'700'}
                  >
                    {props.title}
                    <Text color={'gray.400'} pb={3} fontWeight={'normal'}>
                      1 Barang
                    </Text>
                  </Text>
                </Box>
                <Box mt={4} w={'15%'}>
                  <Flex gap={1}>
                    <Text color={'#909090'} fontSize={'14px'}>
                      Total
                    </Text>
                    <Text color={'#909090'} fontSize={'14px'}>
                      Belanja
                    </Text>
                  </Flex>
                  <Text fontWeight={'bold'} fontSize={'14px'}>
                    Rp {props.totalAmount}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
}
