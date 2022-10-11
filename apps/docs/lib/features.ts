import { GetServerSidePropsContext } from 'next';

export type Features = { userProgress: boolean };

export function extractFeaturesCookie(context: GetServerSidePropsContext) {
  const { req } = context;
  const userProgress = req.cookies.userProgress;

  return { userProgress: userProgress === 'true' };
}
