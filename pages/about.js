import Link from "next/link";
import { Chrono } from "react-chrono";
import { textAlign } from "styled-system";


const items = [
    {
      title: "July 2018",
      cardTitle: "Global Account Manager @Cisco",
      cardSubtitle:
      "Global responsibility for 360 degree ownership & Business in Two of India's Largest ITSP.",
      cardDetailedText: `Appointed as Global Account Manager.Global responsibility for 360 degree ownership & Business in Two of India's Largest ITSP.`
    },
    {
      title: "Jun 2015",
      cardTitle: "Territory Account Manager @Cisco",
      cardSubtitle: `Lead the Education & Healthcare Vertical for North. Create relevance and Increase Market Share of Cisco in Specific Verticals by Aligning & Creating Solutions catering to this Vertical.`,
      cardDetailedText: `Lead the Education & Healthcare Vertical for North. Create relevance and Increase Market Share of Cisco in Specific Verticals by Aligning & Creating Solutions catering to this Vertical.
      o Work with Ecosystem partners and create Joint GTM
      o Trusted Adviser to Clients via Consultative Selling & Architecting Solutions for Right Fitment
      o Leading a team of Specialists for Enhancing Reach into the Vertical and Grow the Market`
    },
    {
      title: "May 2014",
      cardTitle: "Business Development Manager @Aujas Networks",
      cardSubtitle: `Territorial Account Manager for APAC, North & East India managing Telecom, Corporate, IT / ITeS Segment for the organization & increasing Share of Wallet for the organization with the ability to translate security threats into tangible goals.
      Key Achievements – Rated Outstanding (2015); Won the Largest deal (Org-wide)`,
      cardDetailedText: `Consulting | Business Development | Account Management
      o Manage the Enterprise North & East Region in the domain of Information Risk.
      o Trusted Adviser to Enterprise Class customers ranging from Telecom, Manufacturing, Insurance, Retail.
      o Develop strategic, new or emerging partnerships in emerging territories for furthering business opportunities and increase the share in wallet.`
    },
    {
      title: "November 2012",
      cardTitle: "Assistant Manager – Sales, Asia @Mahindra Comviva",
      cardSubtitle: `Account Manager for the largest Telecom Account in India managing Value Added Services Line of Business & help in creating strategies & business models around new Applications & Products to increase revenue & acquisitions.`,
      cardDetailedText: `o Manage the largest Telecom Account in India for Value Added Services Line of Business & help them in creating strategies & business models to increase revenue.
      o Identifying & creating business development & sales opportunities for enhancing product reach of Mahindra Comviva’s suite of Products in the account.
      o Complete Ownership of Sales Cycle – RFP, Technical Qualification, Commercial Discussions & Negotiations, PO, Post Closure Implementation & Collection Reviews.
      o Responsible for generating Go-To-Market Strategies for Geographic expansion into new & emerging territories and ensure Mahindra Comviva’s Product Suite sales will result in additional revenue.`
    },
    {
      title: "November 2009",
      cardTitle: "Senior Account Manager @Wipro Limited",
      cardSubtitle: `Practice Sales Manager|Global Infrstructure service`,
      cardDetailedText: `Sales Consulting
      o Identifying, Creating & Developing Opportunities for Cisco in the domain of Borderless Architecture, Datacenter Architecture & Collaboration Architecture like IP Telephony, Tele-Presence & other communication products in the region.
      o Help customers define and refine their business requirements and IT requirements by working closely with them to understand their needs, goals and business priorities.
      o Enable Business-IT fitment by understanding IT Strategy, priorities, architectural / design goals ; and defining the overall landscape with various stakeholders
      o Work closely with the customer to roll-out the overall RFP / RFI / Tender while adhering to various internal and regulatory guidelines
      
      Solution Architect & Pre-Sales
      o Involved in Technical Discussions & Enabling the Architects to come out with Customer Centric Solutions and increasing the mindshare of the customer with the portfolio.
      o Define and create the overall solution landscape along with associated collaterals like RFP responses, ROI/TCO reports, Approach Papers, Solution documents, Benchmarks, Industry reports, SOWs, BOM/BOQs and Competitive comparisons
      o Presenting on overall Systems strategy, products and solutions to various stakeholders within the customer organization (CxO, GM, IT Managers)
      
      Business Development & Internal Enablement
      o Conducting Marketing Campaign & Road Shows in the region along with regular interlocks to enhance the reach of the Cisco Borderless, Datacenter & Collaboration Architecture Practices & create demand.
      o Conduct technical enablement sessions for direct and field sales teams on the latest technologies, both, internal and competitive.
      o Conduct regular account planning and technical enablement workshops with internal partners and Cisco Technology teams to drive business and track results.
      o Managing the Regional Alliance with Cisco and creating joint Go-To-Market strategies to build a field level entry strategy.`
    },
    {
      title: "May 2009",
      cardTitle: "Business Analyst, CEO’s Office @iViZ Security (Synopsys)",
      cardSubtitle: "Core member of the Internal Team for developing an Online Marketing Strategy by leveraging the Social Media Platform.",
      cardDetailedText: `- Developing the Go To Market (Entry, Pricing, Segmentation, Targeting, Positioning &amp; Competitor Analysis) strategy for iViZ to enter the European Market.
      - Analysis of the United Kingdom Market for creation of a subsidiary, to be responsible for catering the whole European Union.
      - Engaged in creating &amp; forging partnerships &amp; new alliances with Data Centers, Managed Service Providers &amp; Distributors.
      - Core member of the Internal Team for developing an Online Marketing Strategy by leveraging the Social Media Platform.`
    }

  ];



export default function About(){
    return(
        <div>
        <div className="about1">
            <h1>Hi,I'm Akshat Mohindra!</h1>
            <h3>An experienced sales professional, husband to a Professor, father of two kids and son to an amazing set of parents.</h3>
            <p>I am an accomplished professional whose passion lies in upping the growth for the industry I work in along with enhancing brand awareness of self & organization. A highly rewarded Sales & Business Development professional having worked & successfully delivered solutions across ITSP, Education, Healthcare, Telecom, IT, Manufacturing & Retail.</p>
            <p>Excellent capability & proven track record in creating & closing new opportunities, adept at door-opening strategies, sustain & enhance relationships with clients to bring about the greater good of the organization. Proficient at grasping new concepts, technology & businesses, quickly helps me to elucidate the overall Value Proposition to my clients and receive appreciation from key stakeholders (internal & external). Have led multi-disciplinary teams into Winning projects & campaigns ensuring growth for the organization & self.</p> 
            <p>Key Focus Areas for me are Business Development, Wallet - Share increase, Key Account Management, Relationship & Stakeholder Management, and Sales Strategy, encompassing all these to bring about greater Customer Delight & Satisfaction for my clients.</p>
            <p>My pillars of Success are Respect, Recognition & Responsibility.</p>
            <h1>Experience</h1>
            </div>
            
            <div className= "timeline" >
            
                <Chrono
                items={items}
                mode="VERTICAL_ALTERNATING"
                scrollable
                hideControls
                theme={{ 
                    primary: "grey",
                    secondary: "#000",
                    // cardBgColor: "yellow",
                    // cardForeColor: "violet",
                    titleColor: "#fff"
                }}
                />
            </div>
            <style jsx>{`
                .about1 {
                   
                text-align: center;
                margin: 40px 20px;
                }
                .title1 h1{
                font-weight: 500
                }
                .about1 h3{
                font-weight: 400
                }
                .about1 p{
                    font-weight: 350
                }
                .timeline{
                    width: "800px",
                    textAlign: 'center'
                }
                
            `}</style>
        </div>
    )
}