import type { HeroPresetKey } from "./HeroTypes";

export const HeroPresets: Record<HeroPresetKey, any> = {
    "modern-dark": {
        container: "w-full min-h-screen flex items-center justify-center px-6 text-center",
        title: "text-white text-5xl md:text-6xl font-extrabold",
        subtitle: "text-gray-300 text-lg",
        overlay: "rgba(0,0,0,0.5)",
        button: {
            primary: "bg-indigo-600 hover:bg-indigo-500 text-white",
            secondary: "border border-white/30 text-white",
            ghost: "text-white"
        }
    },

    "minimal-light": {
        container: "w-full py-24 px-6 bg-white text-center",
        title: "text-black text-4xl md:text-5xl font-bold",
        subtitle: "text-gray-600",
        button: {
            primary: "bg-black text-white",
            secondary: "border border-black text-black",
            ghost: "text-black"
        }
    },

    "sale": {
        container: "w-full min-h-screen flex items-center justify-center text-center",
        title: "text-white text-6xl font-extrabold uppercase",
        subtitle: "text-red-100 text-xl",
        overlay: "rgba(127,29,29,0.6)",
        button: {
            primary: "bg-red-600 text-white",
            secondary: "border border-white text-white",
            ghost: "text-white"
        }
    }
};