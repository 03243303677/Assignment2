// src/pages/about.tsx
import Header from '../app/components/header';

export default function About() {
  return (
    <div>
      <Header/>
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">This is the About page content. Provide information about your site here.</p>
      </main>
    </div>
  );
}
