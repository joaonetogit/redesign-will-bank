import Image from 'next/image';
import NavList from '../NavList';
import Button from './Button';
import Container from './Container';

export default function Header() {
  return (
    <header className="border-b border-gray200 py-6">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Image
              priority
              src="/images/logo-company.svg"
              alt="Logo Will Bank"
              width={104}
              height={45}
            />
          </div>
          <NavList />
          <Button label="Vem ser Will" />
        </div>
      </Container>
    </header>
  );
}
