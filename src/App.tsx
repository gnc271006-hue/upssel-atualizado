import { MotionConfig } from 'motion/react';
import { PurchaseConfirmation } from './components/PurchaseConfirmation';
import { HeroSection } from './components/HeroSection';
import { UpsellOfferSection } from './components/UpsellOfferSection';
import { PlanComparisonSection } from './components/PlanComparisonSection';
import { ProductPresentation } from './components/ProductPresentation';
import { IncludedMaterials } from './components/IncludedMaterials';
import { FaqAccordion } from './components/FaqAccordion';
import { DisclaimerFooter } from './components/DisclaimerFooter';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-[#080F1E] text-[#080F1E]">
        <PurchaseConfirmation />

        <main>
          <HeroSection />
          <UpsellOfferSection />
          <PlanComparisonSection />
          <ProductPresentation />
          <IncludedMaterials />
          <FaqAccordion />
        </main>

        <DisclaimerFooter />
      </div>
    </MotionConfig>
  );
}
