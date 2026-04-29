import { AnimatedReveal } from "@/components/animated-reveal";
import { CareersLivePosts } from "@/components/careers-live-posts";
import { buildMetadata } from "@/lib/metadata";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export const metadata = buildMetadata({
  title: "Careers | PetrolLink",
  description:
    "Join PetrolLink and build a career in high-impact energy projects across procurement, operations, engineering, and sustainability.",
  pathname: "/careers",
});

type CareerPost = {
  id: string;
  title: string;
  description: string;
  closing_date: string;
};

export default async function CareersPage() {
  let roles: CareerPost[] = [];
  let loadError: string | null = null;

  if (isSupabaseConfigured) {
    const { data, error } = await supabase
      .from("career_posts")
      .select("id,title,description,closing_date")
      .order("created_at", { ascending: false });

    if (error) {
      loadError = error.message;
    }

    roles = data ?? [];
  } else {
    loadError = "Supabase is not configured.";
  }

  return (
    <main>
      <section className="bg-[#0a1628] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedReveal>
            <article>
              <h1 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Careers at Petrowave Energy Limited
              </h1>
              <p className="mt-5 text-base leading-7 tracking-[-0.01em] text-slate-200 sm:text-lg">
                We hire curious professionals who thrive in technically
                demanding environments and care about safe, responsible
                execution.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto w-full max-w-5xl">
          {loadError ? (
            <CareersLivePosts initialRoles={roles} initialError={loadError} />
          ) : (
            <CareersLivePosts initialRoles={roles} />
          )}
        </div>
      </section>
    </main>
  );
}
