import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient";

export default function HomePage() {
  return (
    <>
      <HomeClient /> {/* This contains Header + product logic */}
      <Footer />
    </>
  );
}
