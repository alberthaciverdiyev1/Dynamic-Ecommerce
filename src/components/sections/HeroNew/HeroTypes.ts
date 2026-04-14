export type HeroPresetKey = "modern-dark" | "minimal-light" | "sale";

export interface HeroProps {
    Mode?: "Text" | "Image";

    Preset?: HeroPresetKey;

    Content?: {
        Title?: string;
        Subtitle?: string;
        Description?: string;
    };

    Background?: {
        Type?: "solid" | "gradient" | "image";
        Solid?: string;
        Gradient?: { From: string; To: string };
        Image?: string;
        Overlay?: { Color?: string };
    };

    Layout?: {
        Align?: "center" | "left" | "right";
        Vertical?: "top" | "center" | "bottom";
    };

    Buttons?: {
        Items?: Array<{
            Text: string;
            Url?: string;
            Variant?: "primary" | "secondary" | "ghost";
        }>;
    };

    Effects?: {
        GradientText?: boolean;
    };

    Slides?: Array<{
        Content?: {
            Title?: string;
            Subtitle?: string;
            Description?: string;
        };

        Background?: {
            Image?: string;
            Overlay?: { Color?: string };
        };

        Buttons?: {
            Items?: Array<{
                Text: string;
                Url?: string;
                Variant?: "primary" | "secondary" | "ghost";
            }>;
        };
    }>;
}