import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ComputerIcon from '@mui/icons-material/Computer';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DvrIcon from '@mui/icons-material/Dvr';
import SecurityIcon from '@mui/icons-material/Security';
import Image from 'next/image'
const items = [
    {
      title: "July 2018",
      cardTitle: "Global Account Manager @Cisco",
      icons: <ImportantDevicesIcon/>,
      cardSubtitle:
      "Global responsibility for 360 degree ownership & Business in Two of India's Largest ITSP.",
    },
    {
      title: "Jun 2015",
      cardTitle: "Territory Account Manager @Cisco",
      icons: <ComputerIcon/>,
      cardSubtitle: `Lead the Education & Healthcare Vertical for North. Create relevance and Increase Market Share of Cisco in Specific Verticals by Aligning & Creating Solutions catering to this Vertical.`,
    },
    {
      title: "May 2014",
      cardTitle: "Business Development Manager @Aujas Networks",
      icons: <WorkOutlineIcon/>,
      cardSubtitle: `Territorial Account Manager for APAC, North & East India managing Telecom, Corporate, IT / ITeS Segment for the organization & increasing Share of Wallet for the organization with the ability to translate security threats into tangible goals.
      Key Achievements – Rated Outstanding (2015); Won the Largest deal (Org-wide)`,
    },
    {
      title: "November 2012",
      cardTitle: "Assistant Manager – Sales, Asia @Mahindra Comviva",
      icons: <DirectionsCarIcon/>,
      cardSubtitle: `Account Manager for the largest Telecom Account in India managing Value Added Services Line of Business & help in creating strategies & business models around new Applications & Products to increase revenue & acquisitions.`,
    },
    {
      title: "November 2009",
      cardTitle: "Senior Account Manager @Wipro Limited",
      icons: <DvrIcon/>,
      cardSubtitle: `Practice Sales Manager|Global Infrstructure service`,
    },
    {
      title: "May 2009",
      cardTitle: "Business Analyst, CEO’s Office @iViZ Security (Synopsys)",
      icons: <SecurityIcon/>,
      cardSubtitle: "Core member of the Internal Team for developing an Online Marketing Strategy by leveraging the Social Media Platform.",
    }

  ];



export default function About(){
    return(
        <div>
        <div className="about1">
            <Image
              className="image-container"
              src = '/profilepic1.jpg'
              width = '250px'
              height = '250px'
              />
            <h1>Hi, I'm Akshat Mohindra!</h1>
            <h3>An experienced sales professional, husband to a Professor, father of two kids and son to an amazing set of parents.</h3>
            <p>I am an accomplished professional whose passion lies in upping the growth for the industry I work in along with enhancing brand awareness of self & organization. A highly rewarded Sales & Business Development professional having worked & successfully delivered solutions across ITSP, Education, Healthcare, Telecom, IT, Manufacturing & Retail.<br/>
            Excellent capability & proven track record in creating & closing new opportunities, adept at door-opening strategies, sustain & enhance relationships with clients to bring about the greater good of the organization. Proficient at grasping new concepts, technology & businesses, quickly helps me to elucidate the overall Value Proposition to my clients and receive appreciation from key stakeholders (internal & external). Have led multi-disciplinary teams into Winning projects & campaigns ensuring growth for the organization & self.<br/>
            Key Focus Areas for me are Business Development, Wallet - Share increase, Key Account Management, Relationship & Stakeholder Management, and Sales Strategy, encompassing all these to bring about greater Customer Delight & Satisfaction for my clients.<br/>
            My pillars of Success are Respect, Recognition & Responsibility.</p>
            <h1>Experience</h1>
            </div>
            <div>
              <VerticalTimeline className="vertical-timeline-custom-line"  lineColor ='#000'>
                {items.map(item=>(
                    <VerticalTimelineElement
                    contentStyle={{ color: '#000', background: "rgb(250 188 61)" }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(250 188 61)' }}
                    iconClassName="vertical-timeline-element-icon bounce-in"
                    className="vertical-timeline-element--work"
                    date={item.title}
                    
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={item.icons}
                  >
                    <h3 className="vertical-timeline-element-title">{item.cardTitle}</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                      {item.cardSubtitle}
                    </p>
                  </VerticalTimelineElement> 
                  )
                )}
              </VerticalTimeline>
            </div>
            <style jsx>{`
                .about1 {
                  display: block;
                  text-align: center;
                  margin: 40px 20px;
                }
                .about1 h1{
                font-weight: 800;
                font-size: 52px;
                }
                .about1 h3{
                  font-weight: 400;
                  font-size: 24px;
                  color: #424243;
                  padding-bottom: 30px
                }
                .about1 p{
                    display: inline-block;
                    margin-left: auto;
                    margin-right: auto;
                    text-align: left;
                    font-weight: 350;
                    font-size: 20px;
                    padding-top: 10px;
                    line-height: 25px;
                    margin-bottom: 50px;
                }
                .about1 br{
                  display: block;
                  content: "";
                  margin-top: 20px;
               }
                .timeline{
                    width: "800px",
                    textAlign: 'center'
                }
                
            `}</style>
        </div>
    )
}