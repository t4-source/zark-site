import type { Metadata } from 'next';
import DpdpaLanding from './DpdpaLanding';

export const metadata: Metadata = {
  title: 'DPDPA Compliance for Schools in Lucknow | K Raghav & Associates',
  description:
    'DPDPA 2023 compliance services for schools in Lucknow and Uttar Pradesh — parental consent, student data protection, gap assessment and DLP. K Raghav & Associates, Chartered Accountants since 1997.',
};

export default function DpdpaPage() {
  return <DpdpaLanding />;
}
