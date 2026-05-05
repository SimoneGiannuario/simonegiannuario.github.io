import React from 'react'
import {
  // Frontend
  FaReact, FaAngular, FaVuejs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap,
  // Backend
  FaNodeJs, FaPython, FaPhp, FaJava,
  FaFire,
  // DevOps
  FaGitAlt, FaDocker, FaAws, FaJenkins,

  // OS
  FaWindows, FaLinux, FaApple,
  FaFilePdf
} from 'react-icons/fa'
import {
  SiTypescript, SiTailwindcss, SiSass, SiExpress, SiDjango, SiLaravel,
  SiSpringboot, SiSharp, SiDotnet, SiMongodb, SiPostgresql, SiMysql,
  SiRedis, SiSqlite, SiGraphql, SiPrisma, SiTypeorm, SiVercel, SiNetlify,
  SiKubernetes, SiNginx, SiApache, SiJest, SiCypress,
  SiMocha, SiChai, SiEslint, SiPrettier, SiSonarqube, SiPytest,
  SiUbuntu, SiCentos, SiDebian,
  SiJquery,
  SiNgrx,
  SiNx,
  SiVite,
  SiCloudflare,
  SiClaude,
  SiGithubcopilot
} from 'react-icons/si'
import { BiGitBranch, BiLogoAdobe } from 'react-icons/bi'
import skillsData from '../data/skills.json'
import { DiScrum, DiW3C } from 'react-icons/di'
import { RiCodeAiFill, RiUserCommunityFill } from 'react-icons/ri'
import { MdDesignServices, MdLeaderboard, MdOutlineReportProblem } from 'react-icons/md'
import { IoAnalytics } from 'react-icons/io5'
import { SiAntigravity } from './SiAntigravity'

// Icon mapping function
const getIconComponent = (iconName: string): React.ReactNode => {
  const iconMap: Record<string, React.ReactNode> = {
    // Frontend
    FaReact: <FaReact />,
    FaAngular: <FaAngular />,
    FaVuejs: <FaVuejs />,
    FaHtml5: <FaHtml5 />,
    FaCss3Alt: <FaCss3Alt />,
    FaJs: <FaJs />,
    SiTypescript: <SiTypescript />,
    SiTailwindcss: <SiTailwindcss />,
    FaBootstrap: <FaBootstrap />,
    SiSass: <SiSass />,
    SiJquery: <SiJquery />,
    DiW3C: <DiW3C />,
    SiNx: <SiNx />,
    SiNgrx: <SiNgrx />,
    FaFilePdf: <FaFilePdf />,
    MdDesignServices: <MdDesignServices />,

    // Backend
    FaNodeJs: <FaNodeJs />,
    SiExpress: <SiExpress />,
    FaPython: <FaPython />,
    SiDjango: <SiDjango />,
    FaPhp: <FaPhp />,
    SiLaravel: <SiLaravel />,
    FaJava: <FaJava />,
    SiSpringboot: <SiSpringboot />,
    SiSharp: <SiSharp />,
    SiDotnet: <SiDotnet />,

    // Database
    SiMongodb: <SiMongodb />,
    SiPostgresql: <SiPostgresql />,
    SiMysql: <SiMysql />,
    FaFire: <FaFire />,
    SiRedis: <SiRedis />,
    SiSqlite: <SiSqlite />,
    SiGraphql: <SiGraphql />,
    SiPrisma: <SiPrisma />,
    SiTypeorm: <SiTypeorm />,

    // DevOps & Tools
    FaGitAlt: <FaGitAlt />,
    FaDocker: <FaDocker />,
    FaAws: <FaAws />,
    SiVercel: <SiVercel />,
    SiNetlify: <SiNetlify />,
    BiGitBranch: <BiGitBranch />,
    FaJenkins: <FaJenkins />,
    SiKubernetes: <SiKubernetes />,
    SiNginx: <SiNginx />,
    SiApache: <SiApache />,
    BiLogoAdobe: <BiLogoAdobe />,
    DiScrum: <DiScrum />,
    RiCodeAiFill: <RiCodeAiFill />,
    SiVite: <SiVite />,
    SiCloudflare: <SiCloudflare />,

    // Testing & Quality
    SiJest: <SiJest />,
    SiCypress: <SiCypress />,
    SiMocha: <SiMocha />,
    SiChai: <SiChai />,
    SiEslint: <SiEslint />,
    SiPrettier: <SiPrettier />,
    SiSonarqube: <SiSonarqube />,
    SiPytest: <SiPytest />,

    // Operating Systems
    FaWindows: <FaWindows />,
    FaLinux: <FaLinux />,
    FaApple: <FaApple />,
    SiUbuntu: <SiUbuntu />,
    SiCentos: <SiCentos />,
    SiDebian: <SiDebian />,

    //AI Tools
    SiAntigravity: <SiAntigravity />,
    SiClaude: <SiClaude />,
    SiGithubcopilot: <SiGithubcopilot />,

    // Soft Skills
    MdLeaderboard: <MdLeaderboard />,
    RiUserCommunityFill: <RiUserCommunityFill />,
    IoAnalytics: <IoAnalytics />,
    MdOutlineReportProblem: <MdOutlineReportProblem />
  }

  return iconMap[iconName] || <span>⚡</span> // Fallback icon
}

const Skills: React.FC = () => {
  const { skillCategories } = skillsData

  return (
    <section className="section">
      <h1>Skills & Technologies</h1>
      <p>My expertise spans across various domains of software development</p>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.name} className="skill-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.name}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <span key={skill.name} className="skill-item">
                  <span className="skill-icon">{getIconComponent(skill.icon)}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
