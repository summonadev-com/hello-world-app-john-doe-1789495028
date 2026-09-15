import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="px-6 text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
        Hello World
      </h1>
    </main>
  );
}
