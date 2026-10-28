import { ReactNode, CSSProperties } from 'react';

/** Rounded-square outline glyph used for "scan" / shutter actions (button icon, FAB). */
export interface ScanGlyphProps { size?: number; color?: string; weight?: number; }
export declare function ScanGlyph(props: ScanGlyphProps): JSX.Element;

/**
 * Pill button. primary = deep green CTA; secondary = white outline; ghost = mono utility; block = full-width mono outline ("Scan another label").
 */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'block';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;

/** Mono status badge — "3 / 3", "complete", "5 parsed", "5 ingredients found", "TAP TO TRY". */
export interface BadgeProps {
  tone?: 'green' | 'neutral' | 'orange';
  variant?: 'outline' | 'soft' | 'solid';
  shape?: 'rounded' | 'pill';
  size?: 'sm' | 'md';
  children?: ReactNode;
  style?: CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
/** Square-ish mono chip naming a regulatory source: FDA, EFSA, WHO. */
export interface SourceChipProps { children?: ReactNode; }
export declare function SourceChip(props: SourceChipProps): JSX.Element;

/** Spaced mono uppercase overline. accent (green) on marketing sections; muted (grey) for in-app section labels. */
export interface EyebrowProps { tone?: 'accent' | 'muted'; children?: ReactNode; aside?: ReactNode; style?: CSSProperties; }
export declare function Eyebrow(props: EyebrowProps): JSX.Element;

/** NutriWatch lockup: raster mark (assets/logo-mark.png) + two-tone wordmark. Pass markSrc relative to the consuming page. */
export interface WordmarkProps { size?: number; markSrc?: string; showMark?: boolean; }
export declare function Wordmark(props: WordmarkProps): JSX.Element;

/**
 * Donut showing the 0–100 health index with the letter grade centered.
 */
export interface GradeRingProps { grade?: string; score?: number; size?: number; stroke?: number; tone?: string; }
export declare function GradeRing(props: GradeRingProps): JSX.Element;
/** Ring + "HEALTH INDEX" label + big score + green verdict line (top of a result). */
export interface HealthSummaryProps { grade?: string; score?: number; verdict?: string; size?: number; }
export declare function HealthSummary(props: HealthSummaryProps): JSX.Element;

/** One nutrition-facts value. flagged = orange tint for values over guidance (sugar, added sugar). */
export interface NutrientTileProps { value: string | number; unit?: string; label: string; flagged?: boolean; }
export declare function NutrientTile(props: NutrientTileProps): JSX.Element;
/** 3-column grid of NutrientTiles. */
export interface NutrientGridProps { items: NutrientTileProps[]; columns?: number; }
export declare function NutrientGrid(props: NutrientGridProps): JSX.Element;

/** Parsed ingredient row. Green dot = clear; orange dot = flagged / added sugar. Optional grey note after a middot. */
export interface IngredientRowProps { name: string; note?: string; status?: 'ok' | 'flag'; onClick?: () => void; }
export declare function IngredientRow(props: IngredientRowProps): JSX.Element;

/** A "point of concern" — orange ! disc, title, grey detail, and either a cited source (WHO ↗) or a severity word. */
export interface ConcernItemProps { title: string; detail?: string; source?: string; severity?: 'low' | 'medium' | 'high'; }
export declare function ConcernItem(props: ConcernItemProps): JSX.Element;

/** Marketing proof figure with green left rule: "3 / EXPERT AGENTS". */
export interface StatFigureProps { value: string | number; label: string; }
export declare function StatFigure(props: StatFigureProps): JSX.Element;

/**
 * One agent in the analysis pipeline timeline — status disc, connector, title, mono status, description, result chip, duration.
 */
export interface AgentStepProps { title: string; status?: 'pending' | 'running' | 'complete'; description?: string; result?: string; duration?: string; last?: boolean; }
export declare function AgentStep(props: AgentStepProps): JSX.Element;

/** "How it works" card: STEP 0N, green glyph disc, title, body. */
export interface StepCardProps { step: string; glyph?: ReactNode; title: string; children?: ReactNode; }
export declare function StepCard(props: StepCardProps): JSX.Element;

/** "The agents" row: big grey mono index, title, description, right-aligned mono outputs. */
export interface AgentRowProps { index: string; title: string; children?: ReactNode; meta?: string[]; }
export declare function AgentRow(props: AgentRowProps): JSX.Element;

/** Sticky translucent site header with wordmark, text links and a primary pill CTA. */
export interface SiteHeaderProps { links?: string[]; cta?: string; onCta?: () => void; onLink?: (label: string) => void; markSrc?: string; }
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;

/** Minimal footer: wordmark left, lowercase mono links + © year right. */
export interface SiteFooterProps { links?: string[]; year?: string; markSrc?: string; }
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;

/** Mobile bottom bar: Saved (⌂), raised green scan FAB, Scan (◎). Active tab = green-800 semibold. */
export interface TabBarProps { active?: 'saved' | 'scan'; onChange?: (tab: 'saved' | 'scan') => void; onShutter?: () => void; }
export declare function TabBar(props: TabBarProps): JSX.Element;

/**
 * Camera viewfinder placeholder: diagonal-stripe field, green corner brackets, scan line, mono hint + status.
 */
export interface ViewfinderProps { hint?: string; status?: string; scanning?: boolean; height?: number; }
export declare function Viewfinder(props: ViewfinderProps): JSX.Element;

/** Camera shutter: green-800 disc with inner white ring and pale green halo. */
export interface ShutterProps { size?: number; onClick?: () => void; disabled?: boolean; }
export declare function Shutter(props: ShutterProps): JSX.Element;

/** Deep-green device bezel with notch, used to present the mobile app on marketing pages. */
export interface PhoneFrameProps { width?: number; height?: number; children?: ReactNode; }
export declare function PhoneFrame(props: PhoneFrameProps): JSX.Element;

export declare const logoMark: string;
export declare const logoLockup: string;
