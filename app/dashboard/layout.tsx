import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full">
      <SideNav />
      <main className="flex-1">{children}</main>
    </div>
  )
}