import React from "react";
import Section from "./Section";
import Heading from "./Heading";

const MarketCard = ({ region, stats, focus, value }) => (
  <div className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15">
    <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
    <div className="relative z-1">
      <h4 className="h4 mb-4">{region}</h4>
      <p className="body-2 mb-4 text-n-3">{stats}</p>
      
      <div className="mb-6">
        <h5 className="h5 mb-2">Key Sectors</h5>
        <p className="body-2 text-n-3">{focus}</p>
      </div>
      
      <div>
        <h5 className="h5 mb-2">Value Proposition</h5>
        <p className="body-2 text-n-3">{value}</p>
      </div>
    </div>
  </div>
);

const Markets = () => {
  const marketData = [
    {
      region: "Dubai & UAE",
      stats: "Market growth at 28.54% CAGR, reaching $4.285B by 2030",
      focus: "Finance, Healthcare, Logistics, Government services",
      value: "Aligns with UAE's AI leadership goal by 2031. Enhances government productivity and supports finance/logistics sectors."
    },
    {
      region: "Saudi Arabia",
      stats: "$20B AI investment by 2030, market to hit $9.17B",
      focus: "Healthcare, Education, Tourism, Economic diversification",
      value: "Supports Vision 2030 by empowering AI startups and training experts. Targets healthcare and education sectors."
    },
    {
      region: "Singapore",
      stats: "Global tech hub with Smart Nation initiative",
      focus: "Finance, Logistics, Smart city solutions",
      value: "Integrates with smart city infrastructure, optimizing finance and logistics with cutting-edge AI automation."
    }
  ];

  return (
    <Section id="markets">
      <div className="container">
        <Heading
          title="Market Opportunity"
          text="Targeting high-growth AI markets across Asia"
        />

        <div className="relative z-1 grid gap-5 lg:grid-cols-3">
          {marketData.map((market, index) => (
            <MarketCard
              key={index}
              region={market.region}
              stats={market.stats}
              focus={market.focus}
              value={market.value}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Markets; 