import Layout from '@/components/layout';

// replace the tailwind pieces with Chakra in here and the Layout
export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <p>🎉 hack the planet! 🎉</p>
      </div>
    </Layout>
  );
}
