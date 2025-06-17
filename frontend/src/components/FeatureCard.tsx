import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  Icon?: LucideIcon
}

const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => {
  return (
    <div
      className="
        bg-[#1d2124] text-white flex flex-col items-start p-5 rounded-xl border-gray-800 shadow-md w-60
        hover:shadow-2xl transition-transform duration-300 transform hover:scale-105
        animate-fade-in-up cursor-pointer
      "
    >
      {Icon && <Icon className="text-purple-500 mb-3" size={28} />}
      <h3 className="text-xl font-semibold mb-2 text-[#f0f6fc]">{title}</h3>
      <p className="text-sm text-[#8b949e]">{description}</p>
    </div>
  )
}

export default FeatureCard
