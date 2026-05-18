import stationeryImg from '../image/stationery.png';
import devopsImg from '../image/devops.png';
import compilationImg from '../image/compilation.png';
import datashardingImg from '../image/datasharding.png';
import farmlinkImg from '../image/farmlink.png';
import wineImg from '../image/wine.png';
export interface ProjectType {
    id: string;                  
    title: string;
    desc: string;
    tech: string;
    techBadges: { name: string; icon: string; glowClass: string }[];
    image: string;
    fullDesc: string;
    features: string[];
    liveLink: string;
    githubLink: string;
    isPrivate: boolean;
}

export const ProjectsData: ProjectType[] = [
    {
        id: "Programming",
        title: "Wine E_Commerce",
        desc: "Luxury E-Commerce with RBAC and decoupled Admin dashboard.",
        tech: "ASP.NET / React / Monogo DB",
        techBadges: [
            { name: "ASP.NET Core", icon: "default", glowClass: "border-white/10" },
            { name: "React.js", icon: "default", glowClass: "border-white/10" },
            { name: "Mongo DB", icon: "default", glowClass: "border-white/10" }
        ],
        image: wineImg,
        fullDesc: "A complete luxury e-commerce solution tailored for high-end beverages. Includes secure Role-Based Access Control and a completely decoupled administrative dashboard for inventory and order management.",
        features: ["Decoupled Admin Dashboard", "Role-Based Access Control (RBAC)", "Secure Authentication frameworks"],
        liveLink: "#",
        githubLink: "https://github.com/Rithika11-ui/Wine-Website.git",
        isPrivate: false
    },
    {
        id: "devops",
        title: "Automated DevOps Pipeline, FreeStyle",
        desc: "CI/CD execution for a Spring Boot architecture via Jenkins & Ansible.",
        tech: "Jenkins / Ansible / Spring Boot",
        techBadges: [
            { name: "Jenkins CI", icon: "jenkins", glowClass: "shadow-[0_0_15px_rgba(210,73,57,0.15)] border-[#D24939]/30 text-white" },
            { name: "Ansible Playbooks", icon: "ansible", glowClass: "shadow-[0_0_15px_rgba(238,0,0,0.15)] border-[#EE0000]/30 text-white" },
            { name: "Spring Boot", icon: "default", glowClass: "border-white/10 text-white" },
            { name: "Sonatype Nexus", icon: "default", glowClass: "border-white/10 text-white" }
        ],
        image: devopsImg,
        fullDesc: "An automated infrastructure and continuous delivery system configured for automated Java Spring Boot applications. Designed to completely replace error-prone manual deployment cycles with an immutable pipeline.",
        features: [
            "Automated Continuous Integration via customized Jenkins multi-stage build hooks",
            "Secure production artifact archiving using Sonatype Nexus private repositories",
            "Idempotent Ansible Playbooks to configure remote directory structures and system variables over secure SSH keys",
            "Traceable single-point server deployment hosting application states under live static IP access points"
        ],
        liveLink: "http://178.128.93.188/Midterm-2026/phe_rithika/",
        githubLink: "https://github.com/Rithika11-ui/I4A-FirstProjectJenkins/tree/midterm",
        isPrivate: false
    },
    {
        id: "sharding",
        title: "Data Sharding Logic",
        desc: "Implementation of horizontal scaling and database shifting.",
        tech: "MySQL / Docker",
        techBadges: [
            { name: "MySQL", icon: "default", glowClass: "border-white/10" },
            { name: "Docker", icon: "default", glowClass: "border-white/10" }
        ],
        image: datashardingImg,
        fullDesc: "A backend architecture project focusing on database optimization. Implemented horizontal sharding logic to distribute heavy data loads across multiple nodes seamlessly.",
        features: ["Horizontal Scaling", "Database Shifting Maps", "Docker Containerization"],
        liveLink: "#",
        githubLink: "#",
        isPrivate: false
    },
    {
        id: "Programming",
        title: "Farm Link ",
        desc: "Direct multi-role organic marketplace matching Cambodian regional growers with consumers.",
        tech: "Nuxt 3 / Nest.js / Supabase",
        techBadges: [
            { name: "Nuxt 3", icon: "default", glowClass: "border-white/10 text-white" },
            { name: "Nest.js", icon: "default", glowClass: "border-white/10 text-white" },
            { name: "Supabase DB", icon: "default", glowClass: "border-white/10 text-white" }
        ],
        image: farmlinkImg, 
        fullDesc: "A decoupled supply chain marketplace connecting localized agrarian producers straight with buyers. Engineered to automate region-based scheduling, clear intermediary logistics bloat, and distribute transparent payouts using an end-to-end framework ecosystem.",
        features: [
            "Three-sided structural user portal roles (Admin, User, Farmer)",
            "Automated regional geographic sorting engine queries",
            "Direct atomic transactional processing pipelines"
        ],
        liveLink: "#",
        githubLink: "https://github.com/Rithika11-ui/GIC26-G05.git",
        isPrivate: false
    },
    {
        id: "compilation",      
        title: "Compilation",
        desc: "Major project: Secure network communication protocols.",
        tech: "Bash / Linux",
        techBadges: [{ name: "Bash Scripting", icon: "default", glowClass: "border-white/10" }],
        image: compilationImg,
        fullDesc: "Engineered secure communication protocols across Linux environments using advanced bash scripting and network security fundamentals.",
        features: ["Custom Protocol Engineering", "Secure Shell Scripting", "Network Penetration Testing Concepts"],
        liveLink: "#",
        githubLink: "https://github.com/Rithika11-ui/GIC26-G05.git",
        isPrivate: false
    },
    {
        id: "stationery",
        title: "Stationery E-Commerce",
        desc: "Dedicated storefront for educational supplies with versatile payments.",
        tech: "Vue.js / Express / MongoDB",
        techBadges: [
            { name: "Vue.js", icon: "vue", glowClass: "shadow-[0_0_15px_rgba(66,184,131,0.05)] border-[#42b883]/20 text-white" },
            { name: "Express.js", icon: "express", glowClass: "border-white/10 text-white" },
            { name: "MongoDB", icon: "mongo", glowClass: "shadow-[0_0_15px_rgba(71,162,72,0.05)] border-[#47A248]/20 text-white" },
            { name: "Node.js Architecture", icon: "node", glowClass: "shadow-[0_0_15px_rgba(51,153,51,0.05)] border-[#339933]/20 text-white" }
        ],
        image: stationeryImg,
        fullDesc: "A full-stack e-commerce platform custom-engineered specifically to serve educational supply ecosystems. Users can interactively explore and purchase essential study tools including premium pens, books, bags, pencil boxes, and other educational materials.",
        features: [
            "Dynamic supply catalogs (Books, Bags, Pens, Boxes)",
            "Flexible Checkout: Cash on Delivery & Scan-to-Pay QR Codes",
            "Robust REST API integration handling heavy inventory updates"
        ],
        liveLink: "https://stationery-store-ip.vercel.app",
        githubLink: "https://github.com/Kimheng-SOK/Stationery-Store.git",
        isPrivate: false
    }
];