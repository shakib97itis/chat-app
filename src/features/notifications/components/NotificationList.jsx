import React from "react";
import { FiBell } from "react-icons/fi";

const notifications = [
  "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  "So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.",
  "How a visual artist redefines success in graphic design",
  "For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete’s performance will generally be better at high altitude.",
  "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue",
  "In fermentum posuere urna nec",
  "ID: 22739",
  "How We Keep Brand Consistency in Our Visual Language — A Design System for Illustrations",
];

const NotificationList = () => {
  return (
    <div className="mt-10 space-y-4 rounded-xl p-4">
      {notifications.map((note, idx) => (
        <div
          key={idx}
          className="flex items-start space-x-3 border-b pb-4 last:border-b-0 last:pb-0"
        >
          <FiBell className="text-gray-700 mt-1 shrink-0" />
          <p className="text-gray-800 text-sm leading-relaxed">{note}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
