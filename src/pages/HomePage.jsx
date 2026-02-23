import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30">
      <Header />
      <main className="flex-1">
        <HeroSection />
      </main>
    </div>
  );
};

export default HomePage;
