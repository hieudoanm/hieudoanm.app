import { gql } from '@apollo/client';
import { Badge, Box, Card, CardBody, CardHeader, Divider, Heading, Icon, List,
  ListItem, Stat, StatHelpText, StatLabel, StatNumber, Table, TableContainer,
  Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { GAP, TITLED_ABBREVIATIONS } from '@chess/common/constants';
import flags from '@chess/common/data/flags.json';
import { apolloClient } from '@chess/common/graphql';
import { logger } from '@chess/common/libs/logger';
import { Container } from '@chess/components/atoms/Container';
import { ChessHistogramChart } from '@chess/components/molecules/ChessHistogramChart';
import { Layout } from '@chess/layout';
import { Player, Title } from '@prisma/client';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { FaBolt, FaClock, FaRocket } from 'react-icons/fa';

const RapidHistogramChart: React.FC<{ players: Player[]; }> = ({
  players = []
}) => {
  const ratedPlayers = players.filter(
    (player: Player) => player.statsRapidRatingLast > 0
  );
  const ratings = ratedPlayers.map(
    ({ statsRapidRatingLast }) => statsRapidRatingLast
  );
  const max: number = Math.round(Math.max(...ratings) / GAP) * GAP;
  const min: number = Math.round(Math.min(...ratings) / GAP) * GAP;
  const range: number[] = Array.from({ length: (max - min) / GAP }).map(
    (_value: unknown, index: number) => min + index * GAP
  );

  if (range.length === 0) {
    return <></>;
  }

  const data = range.map((point: number) => {
    const label = `${point} - ${point + 100}`;
    const value = ratedPlayers.filter(
      ({ statsRapidRatingLast }) =>
        statsRapidRatingLast >= point && statsRapidRatingLast < point + 100
    ).length;
    return { label, value };
  });

  return <ChessHistogramChart title="Rapid" data={data} />;
};

const BlitzHistogramChart: React.FC<{ players: Player[]; }> = ({
  players = []
}) => {
  const ratedPlayers = players.filter(
    (player: Player) => player.statsBlitzRatingLast > 0
  );
  const ratings = ratedPlayers.map(
    ({ statsBlitzRatingLast }) => statsBlitzRatingLast
  );
  const max: number = Math.round(Math.max(...ratings) / GAP) * GAP;
  const min: number = Math.round(Math.min(...ratings) / GAP) * GAP;
  const range: number[] = Array.from({ length: (max - min) / GAP }).map(
    (_value: unknown, index: number) => min + index * GAP
  );

  if (range.length === 0) {
    return <></>;
  }

  const data = range.map((point: number) => {
    const label = `${point} - ${point + 100}`;
    const value = ratedPlayers.filter(
      ({ statsBlitzRatingLast }) =>
        statsBlitzRatingLast >= point && statsBlitzRatingLast < point + 100
    ).length;
    return { label, value };
  });

  return <ChessHistogramChart title="Blitz" data={data} />;
};

const BulletHistogramChart: React.FC<{ players: Player[]; }> = ({
  players = []
}) => {
  const ratedPlayers = players.filter(
    (player: Player) => player.statsBulletRatingLast > 0
  );
  const ratings = ratedPlayers.map(
    ({ statsBulletRatingLast }) => statsBulletRatingLast
  );
  const max: number = Math.round(Math.max(...ratings) / GAP) * GAP;
  const min: number = Math.round(Math.min(...ratings) / GAP) * GAP;
  const range: number[] = Array.from({ length: (max - min) / GAP }).map(
    (_value: unknown, index: number) => min + index * GAP
  );

  if (range.length === 0) {
    return <></>;
  }

  const data = range.map((point: number) => {
    const label = `${point} - ${point + 100}`;
    const value = ratedPlayers.filter(
      ({ statsBulletRatingLast }) =>
        statsBulletRatingLast >= point && statsBulletRatingLast < point + 100
    ).length;
    return { label, value };
  });

  return <ChessHistogramChart title="Bullet" data={data} />;
};

const PlayersTable: React.FC<{ total: number; players: Player[]; }> = ({
  total = 0,
  players = []
}) => {
  return (
    <Card className="border border-gray-200 shadow">
      <CardHeader>
        <Heading as="h1" className="text-xl">
          Players ({total})
        </Heading>
      </CardHeader>
      <Divider />
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th className="w-4">Title</Th>
              <Th>Username</Th>
              <Th isNumeric className="w-4">
                Bullet
              </Th>
              <Th isNumeric className="w-4">
                Blitz
              </Th>
              <Th isNumeric className="w-4">
                Rapid
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {players.map(
              ({
                title = '',
                username = '',
                avatar = '',
                statsBulletRatingLast = 0,
                statsBlitzRatingLast = 0,
                statsRapidRatingLast = 0
              }) => {
                return (
                  <Tr key={username}>
                    <Td>
                      {(title ?? '').length > 0
                        ? (
                          <Link href={`/titled/${title}`}>
                            <Badge colorScheme="red">{title}</Badge>
                          </Link>
                        )
                        : <></>}
                    </Td>
                    <Td>
                      <Link href={`/${username}`}>
                        <div className="inline-flex items-center gap-x-2">
                          {avatar.length > 0
                            ? (
                              <div
                                className="aspect-square w-8 rounded bg-contain bg-center"
                                style={{
                                  backgroundImage: `url(${avatar})`
                                }}
                              />
                            )
                            : (
                              <div className="aspect-square w-8 rounded border">
                              </div>
                            )}
                          <Text>{username}</Text>
                        </div>
                      </Link>
                    </Td>
                    <Td isNumeric>{statsBulletRatingLast}</Td>
                    <Td isNumeric>{statsBlitzRatingLast}</Td>
                    <Td isNumeric>{statsRapidRatingLast}</Td>
                  </Tr>
                );
              }
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

const CountryStats: React.FC<{
  title: string;
  average: number;
  max: number;
  icon: any;
}> = ({ title = '', average = 0, max = 0, icon }) => {
  return (
    <Card className="border border-gray-200 shadow">
      <CardBody>
        <div className="flex items-center justify-between">
          <Stat>
            <StatLabel>Average {title}</StatLabel>
            <StatNumber>{average.toLocaleString()}</StatNumber>
            <StatHelpText>Highest: {max}</StatHelpText>
          </Stat>
          {icon
            ? (
              <div>
                <Box
                  bgColor={'teal.500'}
                  color={'white'}
                  className="rounded p-2"
                >
                  <Icon as={icon} boxSize={6} />
                </Box>
              </div>
            )
            : <></>}
        </div>
      </CardBody>
    </Card>
  );
};

type CountryPageProperties = {
  countryCode: string;
  averageRapidRating: number;
  averageBlitzRating: number;
  averageBulletRating: number;
  maxRapidRating: number;
  maxBlitzRating: number;
  maxBulletRating: number;
  total: number;
  players: Player[];
  titles: { title: Title; total: number; }[];
};

const CountryPage: NextPage<CountryPageProperties> = ({
  countryCode = '',
  averageRapidRating = 0,
  averageBlitzRating = 0,
  averageBulletRating = 0,
  maxRapidRating = 0,
  maxBlitzRating = 0,
  maxBulletRating = 0,
  total = 0,
  players = [],
  titles = []
}) => {
  return (
    <Layout>
      <Container>
        <div className="py-4 md:py-8">
          <div className="flex flex-col gap-y-4 md:gap-y-8">
            <Heading style={{ wordSpacing: '16px' }}>
              {(flags as Record<string, string>)[countryCode]} {countryCode}
            </Heading>
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-8">
              <div className="col-span-1">
                <CountryStats
                  title="Rapid"
                  average={averageRapidRating}
                  max={maxRapidRating}
                  icon={FaClock}
                />
              </div>
              <div className="col-span-1">
                <CountryStats
                  title="Blitz"
                  average={averageBlitzRating}
                  max={maxBlitzRating}
                  icon={FaBolt}
                />
              </div>
              <div className="col-span-1">
                <CountryStats
                  title="Bullet"
                  average={averageBulletRating}
                  max={maxBulletRating}
                  icon={FaRocket}
                />
              </div>
            </div>
            {players.length > 1
              ? (
                <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-8">
                  <div className="col-span-1">
                    <RapidHistogramChart players={players} />
                  </div>
                  <div className="col-span-1">
                    <BlitzHistogramChart players={players} />
                  </div>
                  <div className="col-span-1">
                    <BulletHistogramChart players={players} />
                  </div>
                </div>
              )
              : <></>}
            <Card className="border border-gray-200 shadow">
              <CardHeader>
                <Heading className="text-xl">Titles</Heading>
              </CardHeader>
              <List>
                {titles.map(({ title, total }) => {
                  return (
                    <ListItem key={title} className="border-t px-4 py-2">
                      <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                      >
                        <Link href={`/titled/${title}`}>
                          <div className="inline-flex items-center gap-x-2">
                            <Badge colorScheme="red">{title}</Badge>
                            <Text>{TITLED_ABBREVIATIONS[title]}</Text>
                          </div>
                        </Link>
                        <Text>{total}</Text>
                      </Box>
                    </ListItem>
                  );
                })}
              </List>
            </Card>
            <PlayersTable total={total} players={players} />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

const query = gql`
  query CountryQuery($code: String!) {
    country(code: $code) {
      averageRapidRating
      averageBlitzRating
      averageBulletRating
      maxRapidRating
      maxBlitzRating
      maxBulletRating
      total
      titles {
        title
        total
      }
      players {
        id
        username
        name
        followers
        avatar
        location
        country
        countryCode
        twitchUrl
        isStreamer
        verified
        lastOnline
        joined
        status
        title
        league
        archives
        statsDailyRatingBest
        statsDailyRatingLast
        statsDailyRatingDeviation
        statsDailyRecordWin
        statsDailyRecordDraw
        statsDailyRecordLoss
        statsRapidRatingBest
        statsRapidRatingLast
        statsRapidRatingDeviation
        statsRapidRecordWin
        statsRapidRecordDraw
        statsRapidRecordLoss
        statsBlitzRatingBest
        statsBlitzRatingLast
        statsBlitzRatingDeviation
        statsBlitzRecordWin
        statsBlitzRecordDraw
        statsBlitzRecordLoss
        statsBulletRatingBest
        statsBulletRatingLast
        statsBulletRatingDeviation
        statsBulletRecordWin
        statsBulletRecordDraw
        statsBulletRecordLoss
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps<
  CountryPageProperties
> = async (context: GetServerSidePropsContext) => {
  const code: string = context.query.code?.toString() ?? '';
  try {
    const {
      data: {
        country: {
          averageRapidRating = 0,
          averageBlitzRating = 0,
          averageBulletRating = 0,
          maxRapidRating = 0,
          maxBlitzRating = 0,
          maxBulletRating = 0,
          total = 0,
          players = [],
          titles = []
        }
      }
    } = await apolloClient.query<{ country: CountryPageProperties; }>({
      query,
      variables: { code }
    });
    return {
      props: {
        countryCode: code,
        averageRapidRating,
        averageBlitzRating,
        averageBulletRating,
        maxRapidRating,
        maxBlitzRating,
        maxBulletRating,
        total,
        players,
        titles
      }
    };
  } catch (error) {
    logger.error(`getServerSideProps error=${error}`);
    return {
      props: {
        countryCode: code,
        averageRapidRating: 0,
        averageBlitzRating: 0,
        averageBulletRating: 0,
        maxRapidRating: 0,
        maxBlitzRating: 0,
        maxBulletRating: 0,
        total: 0,
        players: [],
        titles: []
      }
    };
  }
};

export default CountryPage;
