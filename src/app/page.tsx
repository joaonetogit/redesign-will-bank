import SectionFeatures from '@/layouts/home/sectionFeatures';
import SectionFraud from '@/layouts/home/sectionFraud';
import SectionPosts from '@/layouts/home/sectionPosts';

export default function Home() {
  return (
    <>
      {/* <SectionHero /> */}
      <SectionFeatures />
      <SectionFraud />
      <SectionPosts />
    </>
  );
}
