"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarMenu } from "@/config/sidebar"
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Sidebar(){
    // const [activeItem, setActiveItem] = useState("/dashboard");
    const pathname = usePathname(); // Get the current pathname from Next.js router
    // const [activeItem, setActiveItem] = useState(pathname);

    const menu = [
        { name: "Dashboard", href: "/dashboard" },
        { name: "Courses", href: "/courses" },
        { name: "Students", href: "/students" },
        { name: "Lecturers", href: "/lecturers" },
        { name: "Settings", href: "/settings" }
    ];
    return (
        <aside className="bg-dark-800 w-64 p-4">
            <ul className="space-y-2">
                {sidebarMenu.map((item) => (
                    <li key={item.href}>
                        <Link 
                            href={item.href} 
                            className={`text-white hover:text-blue-400 ${pathname === item.href ? "text-blue-400" : ""}`}
                        >
                            <i className={`${item.icon} me-2`}></i> <span>{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}