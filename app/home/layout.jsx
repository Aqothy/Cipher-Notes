import RequireAuth from "@/components/ux/RequireAuth";

export default function Layout({ children }) {
  return <RequireAuth>{children}</RequireAuth>;
}
