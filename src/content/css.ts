import type { Category } from "./types";

export const cssCategory: Category = {
  id: "css",
  title: "CSS & Layout",
  shortTitle: "CSS",
  description:
    "Box model, positioning, flex, display, spanning, and responsive design.",
  items: [
    {
      id: "box-model",
      question: "What is the CSS box model?",
      answer:
        "Every element is content → padding → border → margin. box-sizing: border-box includes padding+border in width/height (common reset).",
      tags: ["basics"],
    },
    {
      id: "position-relative-absolute",
      question: "position: relative vs absolute?",
      answer:
        "relative: offset from its normal position; still occupies original space; becomes containing block for absolute children. absolute: removed from flow; positioned relative to nearest positioned ancestor (or initial containing block).",
      tags: ["position"],
    },
    {
      id: "inline-vs-inline-block",
      question: "inline vs inline-block?",
      answer:
        "inline: flows with text; width/height ignored; no vertical margins the same way. inline-block: flows inline but accepts width/height/margins like a block.",
      tags: ["display"],
    },
    {
      id: "flex",
      question: "What is Flexbox?",
      answer:
        "One-dimensional layout. Parent: display: flex; direction, justify-content, align-items, gap, wrap. Children: flex-grow/shrink/basis, align-self, order.",
      tags: ["layout"],
    },
    {
      id: "colspan-rowspan",
      question: "colspan vs rowspan?",
      answer:
        "HTML table attributes: colspan spans columns; rowspan spans rows. In CSS Grid, use grid-column / grid-row spans instead.",
      tags: ["tables"],
    },
    {
      id: "spacing",
      question: "What is spacing in CSS/UI?",
      answer:
        "Consistent gaps via margin, padding, and gap (flex/grid). Design systems often use a spacing scale (4/8px).",
      tags: ["basics"],
    },
    {
      id: "adaptive-vs-responsive",
      question: "Adaptive vs responsive design?",
      answer:
        "Responsive: fluid layouts that reflow continuously (flex/grid, media queries). Adaptive: distinct layouts for fixed breakpoints/device classes (often separate templates). Many products mix both.",
      tags: ["responsive"],
    },
    {
      id: "html-element-types",
      question: "HTML element types (block / inline / etc.)?",
      answer:
        "Default display: block (div, p, section), inline (span, a), inline-block, and replaced elements (img, input). Semantic elements are usually block-level.",
      tags: ["html"],
    },
  ],
};
