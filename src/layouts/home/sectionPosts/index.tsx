import Container from '@/components/ui/Container';
import Headline from '@/components/ui/Headline';
import Image from 'next/image';
import Link from 'next/link';
import PostsList from './PostsList';

export default function SectionPosts() {
  return (
    <section>
      <Container>
        <div className="space-y-[72px]">
          <div className="flex w-full items-center justify-between">
            <Headline
              className="max-w-[360px]"
              title="Acompanhe o  nosso blog"
              textSupport="No meu blog o mundo financeiro tá explicado de um jeito que todo mundo entende."
            />
            <Link href="/blog" className="flex items-center gap-4">
              <p className="font-medium text-gray900">Ver todos os posts</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Icon"
                width={4}
                height={8}
              />
            </Link>
          </div>
          <PostsList />
        </div>
      </Container>
    </section>
  );
}
