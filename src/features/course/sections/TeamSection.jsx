import React from "react";
import { Card, Avatar, Badge } from "../ui";
import {
  useInteractiveCard,
  useAnimation,
  useTitleRotation,
} from "../shared/hooks";
import { withClickEffects } from "../shared/hoc";
import { useProfileImages } from "../shared/utils/imageUtils";
import teamData from "../data/team.json";
import byteForgeLogo from "../assets/byteforge.png";

function TeamSection() {
  const { teamInfo, stats } = teamData;
  const { members, loading, loadFunImages } = useProfileImages(
    teamData.members
  );

  React.useEffect(() => {
    loadFunImages();
  }, [loadFunImages]);

  return (
    <div
      className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800"
      data-section="team"
    >
      <div className="max-w-6xl mx-auto px-6">
        <TeamHeader teamInfo={teamInfo} />
        <TeamGrid members={members} loading={loading} />
        <TeamStats stats={stats} />
      </div>
    </div>
  );
}

function TeamHeader({ teamInfo }) {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-6 p-2">
        <img
          src={byteForgeLogo}
          alt={`${teamInfo.name} Logo`}
          className="w-full h-full object-contain rounded-full"
        />
      </div>

      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
        <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          {teamInfo.name}
        </span>{" "}
        Team
      </h2>

      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        {teamInfo.description}
      </p>
    </div>
  );
}

function TeamGrid({ members, loading }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
      {loading
        ? Array.from({ length: 6 }).map((_, index) => (
            <div key={`skeleton-${index}`} className="group relative p-2">
              <Card className="animate-pulse" padding="p-6">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto"></div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <div className="h-4 bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-700 rounded w-3/4 mx-auto"></div>
                </div>
              </Card>
            </div>
          ))
        : members.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
    </div>
  );
}

function TeamStats({ stats }) {
  return (
    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={`text-4xl font-bold ${stat.color} mb-2`}>
            {stat.value}
          </div>
          <div className="text-gray-400 text-sm uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function TeamMemberCard({ member }) {
  const { name, emoji, image, colors, phrases, comments, joinDate } = member;
  const { clickCount, isPartyMode, handleClick } = useInteractiveCard();
  const { isAnimating, triggerAnimation } = useAnimation();

  const memberStyleId = `member-pulse-${name
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  const handleCardClick = () => {
    handleClick();
    triggerAnimation();
  };

  return (
    <div className="group relative p-2">
      <Card
        onClick={handleCardClick}
        className={`
          hover:${colors.borderColor} 
          hover:scale-105 
          cursor-pointer 
          select-none 
          transform-gpu 
          origin-center
          ${isPartyMode ? "party-mode border-rainbow" : ""}
          ${isAnimating ? `custom-pulse ${memberStyleId}` : ""}
        `}
        padding="p-6"
      >
        {/* Avatar del miembro */}
        <MemberAvatar member={member} isPartyMode={isPartyMode} />

        {/* Información del miembro */}
        <MemberInfo
          member={member}
          clickCount={clickCount}
          isPartyMode={isPartyMode}
        />

        <MemberFooter
          comments={comments}
          joinDate={joinDate}
          isPartyMode={isPartyMode}
        />

        {isPartyMode && <PartyEffects />}
      </Card>

      <MemberStyles member={member} />
    </div>
  );
}

function MemberAvatar({ member, isPartyMode }) {
  const { name, emoji, image, colors } = member;

  return (
    <div className="relative mb-6">
      <Avatar
        src={image}
        alt={`${name} - Pokémon Avatar`}
        fallback={isPartyMode ? "🎉" : emoji}
        size="lg"
        gradientFrom={colors.gradientFrom}
        gradientTo={colors.gradientTo}
        className={`
          mx-auto 
          transition-all 
          duration-300
          ${isPartyMode ? "party-glow party-emoji" : ""}
        `}
      />

      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <Badge variant={getColorVariant(colors.bgColor)} size="sm">
          {name} ⚡
        </Badge>
      </div>
    </div>
  );
}

function MemberInfo({ member, clickCount, isPartyMode }) {
  const { name, phrases } = member;
  const { currentTitle, isRotating, isDisplayingFinal, startRotation } =
    useTitleRotation();

  React.useEffect(() => {
    if (isPartyMode && !isRotating && !isDisplayingFinal) {
      startRotation({
        rotationCount: 6,
        maxSpeed: 60,
        minSpeed: 900,
      });
    }
  }, [isPartyMode, isRotating, isDisplayingFinal, startRotation]);

  const getCurrentPhrase = () => {
    if (isDisplayingFinal && currentTitle) {
      return `${currentTitle} 🎊`;
    }

    if (isPartyMode) {
      if (isRotating && currentTitle) {
        return `${currentTitle} 🎊`;
      }
      if (isRotating) {
        return "🎲 Generando título épico... 🎊";
      }
    }

    if (clickCount > 0 && clickCount < 3) {
      return phrases.clickCount[clickCount - 1];
    }

    return phrases.default;
  };

  return (
    <div className="text-center mb-4">
      <blockquote
        className={`text-gray-300 italic text-sm mb-3 transition-all duration-200 ${
          isRotating ? "animate-pulse text-yellow-300" : ""
        }`}
      >
        {getCurrentPhrase()}
      </blockquote>
    </div>
  );
}

function MemberFooter({ comments, joinDate, isPartyMode }) {
  return (
    <Card.Footer className="space-y-2">
      <div className="text-xs text-gray-500">
        {isPartyMode ? "🎉 ¡Modo fiesta activado!" : "💭 Comentarios:"}
      </div>

      {isPartyMode ? (
        <div className="text-xs text-gray-600 italic">
          ¡Este desarrollador está en modo celebración!
        </div>
      ) : (
        <div className="text-xs text-gray-600 italic space-y-1">
          <div className="text-cyan-400 text-xs mb-2">📅 {joinDate}</div>
          {comments.map((comment, index) => (
            <div key={index}>
              <span className="text-gray-500">{comment.date}:</span>{" "}
              {comment.text}
            </div>
          ))}
        </div>
      )}
    </Card.Footer>
  );
}

function PartyEffects() {
  const stars = [
    {
      emoji: "⭐",
      position: "top-2 left-2",
      color: "text-yellow-400",
      delay: "",
    },
    {
      emoji: "✨",
      position: "top-2 right-2",
      color: "text-pink-400",
      delay: "delay-100",
    },
    {
      emoji: "🌟",
      position: "bottom-2 left-2",
      color: "text-green-400",
      delay: "delay-200",
    },
    {
      emoji: "💫",
      position: "bottom-2 right-2",
      color: "text-blue-400",
      delay: "delay-300",
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star, index) => (
        <div
          key={index}
          className={`absolute ${star.position} ${star.color} party-star ${star.delay}`}
        >
          {star.emoji}
        </div>
      ))}
    </div>
  );
}

function MemberStyles({ member }) {
  const getColorValues = (color) => {
    const colorMap = {
      "from-orange-500": {
        rgb: "249, 115, 22",
        shadow: "rgba(249, 115, 22, 0.4)",
      },
      "from-purple-500": {
        rgb: "168, 85, 247",
        shadow: "rgba(168, 85, 247, 0.4)",
      },
      "from-cyan-500": { rgb: "6, 182, 212", shadow: "rgba(6, 182, 212, 0.4)" },
      "from-green-500": {
        rgb: "34, 197, 94",
        shadow: "rgba(34, 197, 94, 0.4)",
      },
      "from-yellow-500": {
        rgb: "234, 179, 8",
        shadow: "rgba(234, 179, 8, 0.4)",
      },
      "from-indigo-500": {
        rgb: "99, 102, 241",
        shadow: "rgba(99, 102, 241, 0.4)",
      },
    };
    return colorMap[color] || colorMap["from-purple-500"];
  };

  const { rgb, shadow } = getColorValues(member.colors.gradientFrom);
  const styleId = `member-pulse-${member.name
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  return (
    <style>
      {`
        .custom-pulse.${styleId} {
          animation: memberPulse-${member.name
            .replace(/\s+/g, "-")
            .toLowerCase()} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes memberPulse-${member.name
          .replace(/\s+/g, "-")
          .toLowerCase()} {
          0%, 100% {
            box-shadow: 0 0 0 0 ${shadow};
            border-color: rgba(${rgb}, 0.3);
          }
          50% {
            box-shadow: 0 0 20px 5px ${shadow};
            border-color: rgba(${rgb}, 0.6);
          }
        }
      `}
    </style>
  );
}

/**
 * PartyStyles - Estilos CSS para las animaciones de fiesta
 */
function PartyStyles() {
  return (
    <style>
      {`
        @keyframes partyGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
            filter: brightness(1);
          }
          50% {
            box-shadow: 0 0 30px rgba(236, 72, 153, 0.6);
            filter: brightness(1.2);
          }
        }

        @keyframes partyPulse {
          0%, 100% {
            transform: scale(1);
            filter: hue-rotate(0deg);
          }
          50% {
            transform: scale(1.05);
            filter: hue-rotate(180deg);
          }
        }

        @keyframes emojiWiggle {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(-5deg) scale(1.1);
          }
          75% {
            transform: rotate(5deg) scale(1.1);
          }
        }

        .party-mode {
          animation: partyPulse 1s ease-in-out infinite;
          background: linear-gradient(45deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1));
        }

        .party-glow {
          animation: partyGlow 0.8s ease-in-out infinite;
        }

        .party-emoji {
          animation: emojiWiggle 0.6s ease-in-out infinite;
        }

        .party-star {
          animation: partyGlow 1.2s ease-in-out infinite;
          transform: scale(1);
        }

        .border-rainbow {
          border: 2px solid;
          border-image: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3) 1;
          animation: partyGlow 1s ease-in-out infinite;
        }
      `}
    </style>
  );
}

function getColorVariant(bgColor) {
  const colorMap = {
    "bg-orange-500": "orange",
    "bg-purple-500": "purple",
    "bg-cyan-500": "cyan",
    "bg-green-500": "green",
    "bg-yellow-500": "yellow",
    "bg-indigo-500": "indigo",
  };
  return colorMap[bgColor] || "gray";
}

export default withClickEffects(TeamSection);
