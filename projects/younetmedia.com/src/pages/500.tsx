import { ErrorTemplate } from '@younetmedia/templates/ErrorTemplate';
import { NextPage } from 'next';

export const InternalServerErrorPage: NextPage = () => (
  <ErrorTemplate code={500} message="Internal Server Error" />
);

export default InternalServerErrorPage;
