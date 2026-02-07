"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Brain,
  FileText,
  BarChart3,
  UserCheck,
  BellRing,
  Settings,
  LogOut,
  GraduationCap,
} from "lucide-react";

const menu = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },

  { name: "Students", href: "/admin/student", icon: Users },


  { name: "Counselling", href: "/admin/counsellorperformance", icon: Brain },

  { name: "Reports", href: "/admin/reports", icon: FileText },

  { name: "Course Analytics", href: "/admin/analytics", icon: BarChart3 },

//   { name: "Counsellors", href: "/admin/counsellors", icon: UserCheck },

  { name: "Alerts & Flags", href: "/admin/alerts", icon: BellRing },

  { name: "Settings", href: "/admin/users", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-72 bg-gradient-to-b from-slate-900 to-slate-950 text-white flex flex-col shadow-xl fixed left-0 top-0">

      {/* LOGO */}
      <div className="h-20 flex items-center px-6 border-b border-white/10">
        <GraduationCap className="text-blue-400 mr-2" size={28} />
        <div>
          <h2 className="text-lg font-bold">Admin Pannel</h2>
          <p className="text-xs text-gray-400">Counselling System</p>
        </div>
      </div>

      {/* MENU */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menu.map((item, i) => {
          const active = pathname === item.href;

          return (
            <Link
              key={i}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                ${
                  active
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
            >
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition"
        >
          <LogOut size={18} />
          Logout
        </button>

        <p className="text-xs text-gray-500 mt-3 text-center">
          © 2026 Career AI System
        </p>
      </div>
    </aside>
  );
}
