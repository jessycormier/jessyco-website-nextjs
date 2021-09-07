import LayoutFooter from "../layout/footer";
import LayoutHeader from "../layout/header";

export default function CenterContentLayout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <LayoutHeader></LayoutHeader>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center max-w-lg">
        {children}
      </main>
      <LayoutFooter></LayoutFooter>
    </div>
  );
}
