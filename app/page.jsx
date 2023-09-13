import Image from 'next/image'

export default function HomePage() {
  return (
<div className=''>
<Image
        alt="Avengers"
        src="/marvel1.jpg"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
</div>
  );
}

