# Shopify Theme Case Study

## Overview
This project is a Shopify theme case study based on a Horizon starter theme.

It includes custom sections built from design specifications based on the case study provided, with a focus on:
- Mobile-first development
- Reusable section architecture
- Clean, maintainable code
- Responsive layouts

## Custom Sections

The main implementation is located in:

- `sections/hero.liquid`
- `sections/column-layout.liquid`
- `sections/fifty-fifty.liquid`
- `sections/comparison-table.liquid`
- `snippets/cta-button.liquid`

## Approach

- Tailwind CSS for consistent styling
- Mobile-first responsive design
- Reusable sections using schema + blocks
- Layout flexibility through section settings

## Fallback Assets

In Shopify, images are typically configured through section settings.

For this case study, fallback images and icons are included in `/assets` so the theme renders correctly without manual setup and the sections are visually ready out of the box.

These can be overridden via the Theme Editor.

## How to Use

1. Upload the theme to a Shopify store
2. Open the theme via the theme editor or a preview link
3. Configure content through section settings if desired

## Notes

- The theme is based on Horizon
- Only the custom sections listed above are part of the case study work
- Some layout decisions (e.g. comparison table mobile UX) were made without provided designs as the case study specified
