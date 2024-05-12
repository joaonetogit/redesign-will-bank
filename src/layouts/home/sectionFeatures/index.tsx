import Container from '@/components/ui/Container';
import Headline from '@/components/ui/Headline';
import CardsFeatures from './CardsFeatures';

export default function SectionFeatures() {
  return (
    <section className="pb-[115px] pt-[112px]">
      <Container>
        <div className="space-y-16">
          <Headline
            className="mx-auto max-w-[600px]"
            alignment="center"
            title="E que serviços você tem de graça pra mim, will?"
            textSupport="Vários! deixa eu contar pra você um pouquinho sobre eles:"
          />
          <div className="flex justify-between gap-10">
            <CardsFeatures />
          </div>
        </div>
      </Container>
    </section>
  );
}
