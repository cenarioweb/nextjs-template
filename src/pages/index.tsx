import Image from 'next/image';
import {
  Box,
  Code,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react';
import { BsArrowRightShort } from 'react-icons/bs';

interface HomeCardProps {
  title: string;
  description: string;
  url: string;
}

function HomeCard({ title, description, url }: HomeCardProps) {
  return (
    <GridItem
      bgColor="white"
      as="a"
      display="block"
      href={url}
      target="_blank"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="gray.300"
      borderRadius={4}
      padding={6}
      transition="all 0.2s ease"
      _hover={{
        borderColor: 'blue.400',
        color: 'blue.400',
      }}
    >
      <Heading
        as="h2"
        fontSize="xl"
        margin="0 0 1rem 0"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Text as="span" marginRight={2}>
          {title}
        </Text>
        <Icon as={BsArrowRightShort} />
      </Heading>
      <Text fontSize="lg" lineHeight="base">
        {description}
      </Text>
    </GridItem>
  );
}

export default function Home(): JSX.Element {
  return (
    <Flex direction="column" w="100vw" h="100vh">
      <Flex
        className="1"
        direction="column"
        flex="1"
        alignItems="center"
        justifyContent="center"
        width="100%"
        maxW="820px"
        margin="0 auto"
        p={{ base: '1rem', md: '0' }}
      >
        <Flex
          as="head"
          direction={{ base: 'column-reverse', md: 'row' }}
          align="center"
          justify="space-between"
          w="100%"
          p="2rem"
        >
          <Box>
            <Heading
              as="h1"
              fontSize="4xl"
              textAlign={{ base: 'center', md: 'left' }}
            >
              Welcome to{' '}
              <a href="http://www.nextjs.org" target="_blank" rel="noreferrer">
                Next.js!
              </a>
            </Heading>
            <Heading
              as="h3"
              fontSize="lg"
              marginTop="0.5rem"
              textAlign={{ base: 'center', md: 'left' }}
            >
              With Typescript, ESLint,Prettier, Chakra UI and React Icons.
            </Heading>
            <Text
              fontSize="xl"
              marginTop="1rem"
              textAlign={{ base: 'center', md: 'left' }}
            >
              Get started by editing{' '}
              <Code bgColor="gray.200" fontSize="large">
                pages/index.js
              </Code>
            </Text>
          </Box>

          <Box>
            <Image
              src="/man-with-laptop.svg"
              alt="Man with laptop"
              width={209}
              height={160}
            />
          </Box>
        </Flex>

        <Grid
          as="main"
          marginTop="4rem"
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={{ base: 4, md: 8 }}
        >
          <HomeCard
            title="Documentation"
            description="Find in-depth information about Next.js features and API."
            url="https://nextjs.org/docs"
          />
          <HomeCard
            title="Learn"
            description="Learn about Next.js in an interactive course with quizzes!"
            url="https://nextjs.org/learn"
          />
          <HomeCard
            title="Examples"
            description="Discover and deploy boilerplate example Next.js projects."
            url="https://github.com/vercel/next.js/tree/master/examples"
          />
          <HomeCard
            title="Deploy"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
            url="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          />
        </Grid>
      </Flex>

      <Flex as="footer" borderTop="1px solid #dfdfdf" p="2rem">
        <Flex
          as="a"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Box lineHeight="24px">Powered by</Box>
          <Box ml="0.5rem" h={4}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
