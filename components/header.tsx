export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-800">
          Бьютичь — онлайн-демо
        </h1>
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="/login" className="hover:text-black transition">Войти</a>
          <a href="/upload" className="hover:text-black transition">Загрузка</a>
          <a href="/history" className="hover:text-black transition">История</a>
        </nav>
      </div>
    </header>
  );
}