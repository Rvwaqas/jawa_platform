import MindtechHeader from "@/components/mindtech/MindtechHeader";
import MindtechFooter from "@/components/mindtech/MindtechFooter";
import PageBanner from "@/components/mindtech/PageBanner";
import ScrollToTop from "@/components/mindtech/ScrollToTop";
import Link from "next/link";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "@/components/mindtech/SocialIcons";


export const metadata = {
  title: "Our Team – JAWA IT Solutions",
};

export default function OurTeamPage() {
  const team = [
    {
      name: "Roxie Hodgson",
      role: "Chief Executive Officer",
      image: "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/3SUMAU.jpg",
      bio: "Visionary technology executive with 18+ years leading enterprise cloud transformation.",
    },
    {
      name: "Marianna Dudley",
      role: "Head of Cyber Security",
      image: "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/CASCKD8.jpg",
      bio: "Certified ethical hacker and zero-trust protocol architect protecting Tier-1 financial systems.",
    },
    {
      name: "Henley Burch",
      role: "VP of Cloud Engineering",
      image: "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/MKLVKTE.jpg",
      bio: "Kubernetes ecosystem pioneer leading multi-cloud deployments across global regions.",
    },
    {
      name: "Darian Vance",
      role: "Principal Solutions Architect",
      image: "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/creative-young-people-in-business-meeting-e1617452574465.jpg",
      bio: "Specialist in microservices orchestration, low-latency APIs, and AI workflow integration.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <MindtechHeader />
      <main className="flex-1">
        <PageBanner
          title="Our Team"
          breadcrumbs={[{ label: "Our Team" }]}
        />

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-sm font-bold uppercase tracking-widest text-[#FF4255]">
                Certified Specialists
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#272B36]">
                Meet Our Leadership &amp; Engineering Experts
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#E6E6E6]/70 flex flex-col e-animation-float group"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#272B36]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <div className="flex items-center gap-3">
                        <a href="#" className="w-8 h-8 rounded-full bg-white text-[#272B36] hover:bg-[#FF4255] hover:text-white flex items-center justify-center transition-colors">
                          <FacebookIcon className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white text-[#272B36] hover:bg-[#FF4255] hover:text-white flex items-center justify-center transition-colors">
                          <TwitterIcon className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white text-[#272B36] hover:bg-[#FF4255] hover:text-white flex items-center justify-center transition-colors">
                          <LinkedinIcon className="w-4 h-4" />
                        </a>
                      </div>

                    </div>
                  </div>

                  <div className="p-6 text-center space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#272B36]">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#FF4255]">
                        {member.role}
                      </p>
                      <p className="text-xs text-[#7A7A7A] font-light leading-relaxed mt-3">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <MindtechFooter />
    </div>
  );
}
