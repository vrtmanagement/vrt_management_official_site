import { BusinessObstacles } from './business-obstacles';

// Example usage component showing how to integrate BusinessObstacles into your existing pages
export const BusinessObstaclesExample = () => {
  const handleDiscoveryCall = () => {
    // This would typically redirect to a booking form or open a modal
    console.log('Discovery call requested');
    // Example: router.push('/book-call') or setModalOpen(true)
  };

  return (
    <BusinessObstacles 
      title="The Most Common Obstacles to Growing a Small Business"
      subtitle="CAN YOU RELATE TO THESE STRUGGLES?"
      ctaText="BOOK YOUR FREE DISCOVERY CALL"
      onCtaClick={handleDiscoveryCall}
      className="my-16"
    />
  );
};

export default BusinessObstaclesExample;
