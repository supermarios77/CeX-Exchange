import { Button } from "@/components/ui/button";
import { FeatureCard } from "./featureCard";
import { ClockIcon, LockIcon, SmartphoneIcon } from "@/config/icons";

export function Features() {
  return (
    <div className="container mx-auto px-4 py-16 dark:text-gray-50">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon={<ClockIcon className="h-10 w-10" />}
          backgroundColor="#e50914"
          title="Portfolio Manager"
          description="Easily manage your digital currency portfolio in one place with our intuitive and user-friendly platform. Stay on top of your investments and make informed decisions."
          buttonLabel="Learn More"
          buttonHref="#"
        />
        <FeatureCard
          icon={<LockIcon className="h-10 w-10" />}
          backgroundColor="#6cc644"
          title="Vault Protection"
          description="Secure your funds with our advanced vault protection, ensuring the safety of your digital assets. Rest easy knowing your investments are safeguarded."
          buttonLabel="Learn More"
          buttonHref="#"
        />
        <FeatureCard
          icon={<SmartphoneIcon className="h-10 w-10" />}
          backgroundColor="#0082fc"
          title="Mobile Apps"
          description="Stay connected to the markets with our feature-rich mobile apps, allowing you to trade and manage your portfolio on-the-go. Never miss a beat in the fast-paced world of cryptocurrency."
          buttonLabel="Learn More"
          buttonHref="#"
        />
      </div>
      <div className="mt-16 text-center md:text-left">
        <h2 className="text-4xl font-extrabold md:text-5xl">
          The Most Trusted Cryptocurrency Platform for Secure and Seamless
          Trading
        </h2>
        <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 leading-relaxed md:text-xl">
          CeX offers a secure and user-friendly platform for all your
          cryptocurrency needs, empowering you to manage your digital assets
          with confidence. Our cutting-edge technology and robust security
          measures ensure your investments are in safe hands.
        </p>
        <div className="flex justify-center md:justify-start mt-8 gap-6">
          <Button
            className="font-semibold py-4 px-8 rounded-md transition-colors duration-500 bg-card dark:text-white border-accent hover:bg-secondary"
            variant="outline"
          >
            Start Trading
          </Button>
          <Button
            className="border-2 font-semibold py-4 px-8 rounded-md transition-colors duration-500 bg-card dark:text-white border-accent hover:bg-secondary"
            variant="outline"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
