import RequireAuth from "@/components/RequireAuth";

export default function Layout({ children }) {
  return <RequireAuth>{children}</RequireAuth>;
}
