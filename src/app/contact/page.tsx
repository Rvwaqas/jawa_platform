import MindtechHeader from "@/components/mindtech/MindtechHeader";
import MindtechFooter from "@/components/mindtech/MindtechFooter";
import PageBanner from "@/components/mindtech/PageBanner";
import MindtechQuoteForm from "@/components/mindtech/MindtechQuoteForm";
import ScrollToTop from "@/components/mindtech/ScrollToTop";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us – JAWA IT Solutions",
};

export default function ContactPage() {
  const contactCards = [
    {
      icon: MapPin,
      title: "Our Head Office",
      desc: "Jl. Raya Kuta No.70, Kuta - Bali 80361, Indonesia",
      sub: "Visit our innovation lab",
    },
    {
      icon: Mail,
      title: "Email Consultation",
      desc: "rvwaqas602@gmail.com",
      sub: "Average response: under 2 hours",
    },
    {
      icon: Phone,
      title: "Direct Support Line",
      desc: "+923480227414",
      sub: "Available 24/7/365",
    },
    {
      icon: Clock,
      title: "Operational Hours",
      desc: "Mon - Fri: 8:00 AM - 6:00 PM",
      sub: "Round-the-clock emergency support",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <MindtechHeader />
      <main className="flex-1">
        <PageBanner
          title="Contact Us"
          breadcrumbs={[{ label: "Contact" }]}
        />

        {/* 4 Contact Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-8 rounded-2xl bg-[#F4F6F9] border border-[#E6E6E6] text-center flex flex-col items-center justify-between e-animation-float"
                  >
                    <div className="w-14 h-14 rounded-full bg-white text-[#FF4255] shadow-md flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#272B36] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#272B36] mb-1">
                        {item.desc}
                      </p>
                      <p className="text-xs text-[#7A7A7A] font-light">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* MetForm Quote Section */}
        <MindtechQuoteForm />

        {/* Interactive Google Map Section */}
        <section className="h-[450px] w-full bg-[#E6E6E6] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.02619472917!2d115.1764619747761!3d-8.724651391325357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd244439c0179a5%3A0x6b8bc228c2ffcfef!2sJl.%20Raya%20Kuta%2C%20Kuta%2C%20Kabupaten%20Badung%2C%20Bali!5e0!3m2!1sen!2sid!4v1711200000000!5m2!1sen!2sid"
            className="w-full h-full border-0 grayscale contrast-125"
            loading="lazy"
            title="JAWA Office Map"
          />
        </section>
      </main>
      <MindtechFooter />
    </div>
  );
}
