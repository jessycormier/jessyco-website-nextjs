import LightSwitch from "../light-switch";

export default function LayoutHeader() {
  return (
    <>
      <section className="absolute top-0 left-0 right-0 bg-gray-900 dark:bg-gray-700 w-full h-2"></section>
      <LightSwitch></LightSwitch>
    </>
  );
}
