import type { Metadata } from 'next';
import DpdpaLanding from './DpdpaLanding';

export const metadata: Metadata = {
  title: 'DPDPA Compliance — K Raghav & Associates',
  description:
    "DPDPA 2023 compliance assessment and implementation services for schools in India — by K Raghav & Associates.",
};

export default function DpdpaPage() {
  return <DpdpaLanding />;
}
