import MindtechHeader from "@/components/mindtech/MindtechHeader";
import MindtechHero from "@/components/mindtech/MindtechHero";
import MindtechFeatures from "@/components/mindtech/MindtechFeatures";
import MindtechAbout from "@/components/mindtech/MindtechAbout";
import MindtechServices from "@/components/mindtech/MindtechServices";
import MindtechTestimonials from "@/components/mindtech/MindtechTestimonials";
import MindtechCases from "@/components/mindtech/MindtechCases";
import MindtechQuoteForm from "@/components/mindtech/MindtechQuoteForm";
import MindtechClients from "@/components/mindtech/MindtechClients";
import MindtechBlog from "@/components/mindtech/MindtechBlog";
import MindtechFooter from "@/components/mindtech/MindtechFooter";
import ScrollToTop from "@/components/mindtech/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <MindtechHeader />
      <main className="flex-1">
        <MindtechHero />
        <MindtechFeatures />
        <MindtechAbout />
        <MindtechServices />
        <MindtechTestimonials />
        <MindtechCases />
        <MindtechQuoteForm />
        <MindtechClients />
        <MindtechBlog />
      </main>
      <MindtechFooter />
    </div>
  );
}
