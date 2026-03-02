import BackgroundVideo from "@/assets/background.mp4";
import type { ReactNode } from "react";

interface VideoHeroProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  kicker?: string;
  className?: string;
  heightClass?: string;
  children?: ReactNode;
}

const VideoHero = ({
  title,
  highlight,
  subtitle,
  kicker,
  className,
  heightClass = "py-20",
  children,
}: VideoHeroProps) => {
  return (
    <section
      className={["relative overflow-hidden text-white", heightClass, className]
        .filter(Boolean)
        .join(" ")}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ pointerEvents: "none" }}
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        {kicker && (
          <p className="mb-4 inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm text-white/90">
            {kicker}
          </p>
        )}
        <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
          {title}
          {highlight && (
            <span className="text-blue-300 block"> {highlight}</span>
          )}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
};

export default VideoHero;
