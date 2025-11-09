import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <Card className="border-purple-200/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Documentation</CardTitle>
              <CardDescription>
                We’re working on the details with our team. This page will soon
                have all of the information.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-slate-600 leading-relaxed">
              Thank you for your patience. If you need anything in the meantime,
              please contact us at{" "}
              <a
                href="mailto:info@ressy.ai"
                className="text-purple-600 hover:underline"
              >
                info@ressy.ai
              </a>
              .
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
