import { HeroPresets } from "./HeroPresets";
import type { HeroProps, HeroPresetKey } from "./HeroTypes";

export function ResolveHero(P: HeroProps) {
    const key: HeroPresetKey = P.Preset || "modern-dark";
    const preset = HeroPresets[key];

    return {
        container: preset.container,

        title: `
      ${preset.title}
      ${
            P.Effects?.GradientText
                ? "bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent"
                : ""
        }
    `,

        subtitle: preset.subtitle,

        overlay:
            P.Background?.Overlay?.Color ||
            preset.overlay ||
            "",

        button: (variant?: "primary" | "secondary" | "ghost") =>
            preset.button?.[variant || "primary"] || ""
    };
}