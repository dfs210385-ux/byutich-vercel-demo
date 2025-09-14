import Link from "next/link";
import BeforeAfter from "../components/BeforeAfter";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-8 md:py-10">
      <header className="mb-6 flex items-center gap-4">
        <h1 className="text-2xl font-extrabold md:text-3xl">Бьютичь — онлайн-демо</h1>
        <nav className="ml-auto flex gap-4 text-primary">
          <Link href="/login">Войти</Link>
          <Link href="/upload">Загрузка</Link>
          <Link href="/history">История</Link>
        </nav>
      </header>

      <p className="text-slate-600">Здесь в режиме реального времени вы можете оценить изменения.</p>

      <section className="mt-6">
        <h2 className="mb-3 text-xl font-semibold md:text-2xl">Визуализация «До / После»</h2>
        <BeforeAfter before="/demo/before.jpg" after="/demo/after.jpg" ratio={16 / 9} />
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
          <li>Классическая шторка (как у QOVES)</li>
          <li>Работает мышью и на touch-экранах</li>
          <li>Без внешних библиотек</li>
        </ul>
      </section>
    </main>
  );
}
