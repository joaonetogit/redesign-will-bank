import Container from '@/components/ui/Container';
import Headline from '@/components/ui/Headline';
import Image from 'next/image';
import CardFraudList from './CardFraudList';

export default function SectionFraud() {
  return (
    <section>
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-full max-w-2xl space-y-[72px]">
            <Headline
              className="max-w-[344px]"
              title="Os fraudadores me odeiam."
              textSupport="é que o meu app conta com tecnologias incríveis pra deixar a sua grana segura:"
            />
            <CardFraudList />
          </div>
          <Image
            src="/images/fraud/hand-card.png"
            alt="Hand holding card"
            width={534}
            height={839}
          />
        </div>
      </Container>
    </section>
  );
}
