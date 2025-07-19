import React from "react";
import { DraggableCardContainer, DraggableCardBody } from "../components/ui/DragAbleCard";

export function DraggableCardDemo() {
  const reviews = [
  {
    name: "Hafiz",
    text: "The service has been professional from the beginning. The team consistently provides care for my mother, who has dementia, and usually assigns the same caregiver for continuity.",
    rating: 5,
    service: "Dementia Care",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    className: "absolute top-10 left-[20%] rotate-[-5deg] bg-green-100",
  },
  {
    name: "Lima",
    text: "The caregiver is friendly, informative, and punctual. I would recommend Empathy Care based on my experience. From Jane.",
    rating: 5,
    service: "Live-in Care",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    className: "absolute top-40 left-[25%] rotate-[-7deg] bg-blue-100",
  },
  {
    name: "Debbie",
    text: "The company is reliable and efficient in all aspects of my brother's care.",
    rating: 5,
    service: "Visiting Care",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    className: "absolute top-5 left-[40%] rotate-[8deg] bg-yellow-100",
  },
  {
    name: "Tina",
    text: "The manager at Empathy Care maintains a person-centred approach, which I have not often observed with other providers.",
    rating: 5,
    service: "Specialist Care",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    className: "absolute top-32 left-[55%] rotate-[10deg] bg-red-100",
  },
  {
    name: "Jalal",
    text: "I have found the carers to be attentive and punctual. They understand my needs and act professionally.",
    rating: 5,
    service: "Overnight Care",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    className: "absolute top-20 right-[35%] rotate-[2deg] bg-purple-100",
  },
  {
    name: "Layla",
    text: "The carers are reliable, timely, competent, and caring.",
    rating: 5,
    service: "Companionship Care",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    className: "absolute top-24 left-[45%] rotate-[-7deg] bg-pink-100",
  },
  {
    name: "Michelle",
    text: "The management responds when my needs change and conducts itself professionally. The team regularly cares for my mother, who has dementia, and they aim to provide consistent caregivers.",
    rating: 5,
    service: "Dementia Care",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    className: "absolute top-8 left-[30%] rotate-[4deg] bg-gray-100",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  whileHover: {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.3 }
  },
};
  const items = [
    {
      title: "Tyler Durden",
      image:
        "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
      image:
        "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Iceland",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Norway",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer
      className="relative flex min-h-screen w-full items-center justify-center overflow-clip ">
      <p
        className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        If its your first day at Fight Club, you have to fight.
      </p>
      {reviews.map((review, idx) => (
                  <DraggableCardBody
                    key={idx}
                    className={review.className}
                  >
                    {/* Header */}
                    <div className="border-green-300">
                      <div className="flex items-start space-x-4 mb-6">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg">{review.name}</h3>
                        <div className="flex items-center space-x-2 mb-1">
                          <StarRating rating={review.rating} />
                          <span className="text-sm text-gray-500">({review.rating}.0)</span>
                        </div>
                        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                          {review.service}
                        </span>
                      </div>
                    </div>
                    {/* Quote */}
                    <div className="relative">
                      <svg
                        className="absolute -top-2 -left-2 w-8 h-8 text-blue-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-700 leading-relaxed pl-6 overflow-auto">{review.text.split(" ").slice(0, 12).join(" ")}{review.text.split(" ").length > 5 ? "..." : ""}</p>
                    </div>
                    </div>
                  </DraggableCardBody>
                ))}
    </DraggableCardContainer>
  );
}
