import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Zap, UserPlus } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export default function JoinUsPage() {
  return (
    <>
      <PageHeader
        title="Join Us"
        description="Become a part of our growing community of innovators, creators, and leaders. Reach out to us to start your journey with TechAthon."
      />
      <AnimatedSection className="container pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-headline text-3xl font-bold">Why Join TechAthon?</h2>
            <p className="text-muted-foreground font-mono">
              By joining us, you get access to exclusive workshops, networking opportunities, and a platform to work on real-world projects.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-md mt-1"><Zap className="h-5 w-5 text-primary"/></div>
                <div>
                  <h3 className="font-bold">Skill Development</h3>
                  <p className="text-sm text-muted-foreground font-mono">Participate in workshops and projects that sharpen your technical skills.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-md mt-1"><Users className="h-5 w-5 text-primary"/></div>
                <div>
                  <h3 className="font-bold">Networking</h3>
                  <p className="text-sm text-muted-foreground font-mono">Connect with peers, alumni, and industry professionals.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-md mt-1"><Lightbulb className="h-5 w-5 text-primary"/></div>
                <div>
                  <h3 className="font-bold">Project Experience</h3>
                  <p className="text-sm text-muted-foreground font-mono">Gain hands-on experience by contributing to exciting tech projects.</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="border-primary/40 shadow-[0_0_30px_-10px_hsl(var(--primary))]">
            <CardContent className="flex h-full flex-col items-center justify-center p-8 text-center md:p-12">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary/60 bg-primary/10">
                <UserPlus className="h-7 w-7 text-primary" />
              </div>
              <h2 className="font-headline text-2xl font-bold md:text-3xl">Become a Member</h2>
              <p className="mt-4 max-w-md font-mono text-sm text-muted-foreground md:text-base">
                Interested students can reach out to the society executive committee or send an email to become part of upcoming programs, hackathons, and technical workshops.
              </p>
              <Button asChild size="lg" className="mt-8 font-mono shadow-[0_0_20px_hsl(var(--primary)/0.6)]">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=techathon@arsd.du.ac.in&su=Membership%20Enquiry%20-%20TechAthon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email techathon@arsd.du.ac.in
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </>
  );
}
