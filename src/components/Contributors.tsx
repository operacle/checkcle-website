import { useEffect, useState } from 'react';
import { AnimatedTestimonialGrid } from "@/components/ui/testimonial-2";

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

const Contributors = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/operacle/checkcle/contributors');
        const data = await response.json();
        setContributors(data.slice(0, 15)); 
      } catch (error) {
        console.error('Error fetching contributors:', error);
        setContributors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contributors</h2>
            <p className="text-xl text-gray-400">Loading contributors...</p>
          </div>
        </div>
      </section>
    );
  }

  const testimonials = contributors.map(contributor => ({
    imgSrc: contributor.avatar_url,
    alt: contributor.login,
    link: contributor.html_url,
  }));

  return (
    <div className="bg-black/20 backdrop-blur-sm">
      <AnimatedTestimonialGrid
        testimonials={testimonials}
        badgeText="Contributors"
        title={
          <>
            Meet the amazing people
            <br />
            behind CheckCle
          </>
        }
        description="Our project thrives thanks to the dedication and our contributors from around the world."
        ctaText="View on GitHub"
        ctaHref="https://github.com/operacle/checkcle"
      />
    </div>
  );
};

export default Contributors;