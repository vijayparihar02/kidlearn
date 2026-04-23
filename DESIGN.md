# Design Brief

## Aesthetic
Playful maximalism with toy-like, joyful, uninhibited cartoon character. Bright saturated colors with high visual intensity optimized for ages 3-8. Educational but fun.

## Color Palette
| Name | OKLCH | Purpose |
|------|-------|---------|
| Red | 0.62 0.21 30 | Primary action, Alphabet, vibrant play |
| Blue | 0.65 0.18 280 | Ring token, interactive states |
| Yellow | 0.78 0.19 100 | Accent, warnings, cheerful feedback |
| Green | 0.72 0.16 150 | Success states, balance |
| Purple | 0.68 0.19 320 | Secondary action, creative sections |
| Off-White | 0.98 0 0 | Background, primary surfaces |
| Dark Charcoal | 0.2 0 0 | Text, UI layer contrast |

## Typography
| Layer | Font | Usage |
|-------|------|-------|
| Display | Bricolage Grotesque | Headings, buttons, high-emphasis UI |
| Body | Figtree | Body copy, labels, description text |
| Mono | Geist Mono | System feedback, scores, timers |

## Shape Language
Rounded geometry throughout: `rounded-full` (buttons, badges), `rounded-3xl` (cards), `rounded-xl` (inputs). No sharp corners. High border-radius for softness and approachability.

## Structural Zones
| Zone | Treatment |
|------|-----------|
| Header | Bright color-blocked bar with game title + home icon; full-width, 60px min height |
| Content | Light off-white background; card-based layout with 24px corner radius |
| Footer | Muted background with nav buttons; optional settings/help |
| Buttons | Large minimum 48px touch targets; high saturation with shadow depth; active scale-down |

## Component Patterns
- **Large Buttons**: Display font, bold, min 48px, rounded-full, shadows on hover
- **Card Layout**: rounded-3xl, border-2, light shadow, padding-6
- **Touch Targets**: Minimum 48px (height and width) for child usability
- **Sound Feedback**: All interactive elements trigger audio on state change

## Motion & Interaction
- **Smooth Transitions**: 300ms cubic-bezier(0.4, 0, 0.2, 1) on all state changes
- **Bounce Soft**: 600ms infinite for attention-grabbing UI elements
- **Pulse Glow**: 2s fade for ambient feedback (e.g., correct answer)
- **Slide In**: 400ms entrance for sequential content reveal
- **Active State**: scale-95 on button press for tactile feedback

## Constraints
- Offline capability: No external API calls
- Mobile-first responsive design
- Minimum 48px touch targets throughout
- High contrast for readability (AA+ WCAG)
- Sound feedback on most interactions

## Signature Detail
Playful scale-down on button press + soft bounce animations create a tactile, toy-like feel that delights young learners.
