import { GetServerSidePropsContext } from 'next';

export type Features = {
  userProgress: boolean;
  userProgressProfilePreview: boolean;
};

export function extractFeaturesCookie(context: GetServerSidePropsContext) {
  const { req } = context;

  const userProgress = req.cookies.userProgress;
  const userProgressProfilePreview = req.cookies.userProgressProfilePreview;

  return {
    userProgress: userProgress === 'true',
    userProgressProfilePreview: userProgressProfilePreview === 'true',
  };
}
