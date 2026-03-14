import Link from "next/link";
import { BookOpen, Bell, User } from "lucide-react";

interface HeaderProps {
  notificationCount?: number;
}

export default function Header({ notificationCount = 0 }: HeaderProps) {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <BookOpen className="w-6 h-6" />
          <span>🏫 Quốc Học Huế</span>
        </Link>
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-full hover:bg-primary-foreground/10 transition-colors">
            <Bell className="w-5 h-5" />
            {notificationCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                {notificationCount}
              </span>
            )}
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-primary-foreground/10 transition-colors text-sm">
            <User className="w-4 h-4" />
            <span>Nguyễn Văn A ▾</span>
          </button>
        </div>
      </div>
    </header>
  );
}
