import Container from '@/components/ui/Container';

export default function SectionHero() {
  return (
    <section className="h-hero">
      <Container className="flex items-center">
        <div className="max-w-[563px] space-y-6 text-left ">
          <h1 className="text-5xl font-semibold text-gray900">
            Com o will na mão, a vida de muita gente evoluiu.
          </h1>
          <p className="text-lg text-gray700">
            Só de deixar sua grana parada na conta, ela cresce mais do que na
            poupança. Deixa eu contar mais sobre o que tem oara você!
          </p>
        </div>
      </Container>
    </section>
  );
}
