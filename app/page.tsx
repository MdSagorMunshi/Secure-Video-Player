import Link from 'next/link';
import { Shield, Upload, Trash2, Eye, Lock } from 'lucide-react';
import VideoUploader from '@/components/VideoUploader';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Secure Video Player</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Upload and play your videos securely with complete privacy. No data retention, no tracking, just secure playback.
          </p>
          <VideoUploader />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Secure Processing"
              description="Client-side processing ensures your videos never touch a server"
            />
            <FeatureCard
              icon={<Upload className="h-8 w-8" />}
              title="Easy Upload"
              description="Simple drag-and-drop interface for quick video uploads"
            />
            <FeatureCard
              icon={<Trash2 className="h-8 w-8" />}
              title="Auto Cleanup"
              description="Videos are automatically deleted after viewing"
            />
            <FeatureCard
              icon={<Eye className="h-8 w-8" />}
              title="Full Control"
              description="Complete playback controls including quality selection"
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8" />}
              title="Privacy First"
              description="No data retention or tracking of any kind"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-8">
            <Step
              number="1"
              title="Upload Your Video"
              description="Drag and drop your video file or use the file selector"
            />
            <Step
              number="2"
              title="Secure Processing"
              description="Your video is processed entirely in your browser"
            />
            <Step
              number="3"
              title="Watch Securely"
              description="Play your video with full controls and privacy"
            />
            <Step
              number="4"
              title="Automatic Cleanup"
              description="Your video is automatically deleted when you're done"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-background border">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}