// Content + links mirrored from jguni.in (links kept identical to the
// original site; copy lightly polished for clarity).

export const BASE = "https://jguni.in";

export const cta = {
  apply: `${BASE}/admission-open.html`,
  enquire: `${BASE}/enquire.html`,
  assessment: `${BASE}/start-assessment.html`,
  admissions: `${BASE}/admissions.html`,
  call: "tel:+917567756758",
};

export const socials: { label: string; href: string; icon: string }[] = [
  { label: "Facebook", href: "https://www.facebook.com/JGUnIIndia", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/jguniversity", icon: "instagram" },
  { label: "X (Twitter)", href: "https://twitter.com/_JGUniversity", icon: "twitter" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/99373780/", icon: "linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCyR1OyKN8l2Srj5G0H1WRyg/featured", icon: "youtube" },
  { label: "WhatsApp", href: "https://wa.me/+917567756758", icon: "whatsapp" },
];

export const faculty: {
  name: string;
  school: string;
  img: string;
  href: string;
}[] = [
  { name: "Dr. Namika Patel", school: "School of Management", img: `${BASE}/images/namika2o.webp`, href: `${BASE}/faculty.html#namika` },
  { name: "Dr. Hitesh Harwani", school: "School of Management", img: `${BASE}/images/hitesh-1.png`, href: `${BASE}/faculty.html#hitesh` },
  { name: "Dr. Sanjay Christian", school: "School of Management", img: `${BASE}/images/sanjay-1.png`, href: `${BASE}/faculty.html#sanjay-christian` },
  { name: "CA Parag Soni", school: "School of Commerce", img: `${BASE}/images/parag-1.png`, href: `${BASE}/faculty.html#parag-soni` },
  { name: "Dr. Megha Bhatt", school: "School of Commerce", img: `${BASE}/images/megha-1.jpg`, href: `${BASE}/faculty.html#megha-bhatt` },
  { name: "Prof. Dinesh Patel", school: "School of Commerce", img: `${BASE}/images/dinesh-1.jpg`, href: `${BASE}/faculty.html#dinesh-patel` },
  { name: "Dr. Aarti Shah", school: "School of Commerce", img: `${BASE}/images/aarti-1.jpg`, href: `${BASE}/faculty.html#arati-shah` },
  { name: "Dr. Delnaz Jokhi", school: "School of Commerce", img: `${BASE}/images/delnaz-1.jpg`, href: `${BASE}/faculty.html#jokhi-delnaz` },
  { name: "Prof. Vishwa Gandhi", school: "School of Commerce", img: `${BASE}/images/vish-1.jpg`, href: `${BASE}/faculty.html#vishwa-gandhi` },
  { name: "Dr. Vaibhav Shah", school: "Director (I/c) — School of Management", img: `${BASE}/images/vaibhav-1.jpg`, href: `${BASE}/faculty.html#vaibhav-shah` },
  { name: "Dr. Jigar Aggarwal", school: "School of Commerce", img: `${BASE}/images/jigar-1.jpg`, href: `${BASE}/faculty.html#aggarwal-omprakash` },
  { name: "Dr. Urvi Gajjar", school: "School of Commerce", img: `${BASE}/images/urvi-1.jpg`, href: `${BASE}/faculty.html#gajjar-urvi` },
  { name: "Dr. Vishwa Deuskar", school: "School of Commerce", img: `${BASE}/images/vishva-1.jpg`, href: `${BASE}/faculty.html#deuskar-vishwa` },
  { name: "Dr. Minnie Mattheew", school: "School of Commerce", img: `${BASE}/images/minniee-1.jpg`, href: `${BASE}/faculty.html#minnie-mattheew` },
  { name: "Dr. S Pushpalatha", school: "School of Computing", img: `${BASE}/images/pushpa-1.jpg`, href: `${BASE}/faculty.html#s-pushpalatha` },
  { name: "Dr. Mona Shah", school: "School of Computing", img: `${BASE}/images/mona-1.jpg`, href: `${BASE}/faculty.html#mona-shah` },
  { name: "Prof. Niku Brahmbhatt", school: "School of Computing", img: `${BASE}/images/niku-1.jpg`, href: `${BASE}/faculty.html#niku-brahmbhatt` },
  { name: "Rutuja Dhaigude", school: "School of Computing", img: `${BASE}/images/Rutuja2o.webp`, href: `${BASE}/faculty.html` },
];

export const partners: { name: string; img: string }[] = [
  { name: "Coding Pro", img: `${BASE}/images/coding.png` },
  { name: "IBM", img: `${BASE}/images/ibm.png` },
  { name: "ISRO", img: `${BASE}/images/isro.png` },
  { name: "SAC", img: `${BASE}/images/sac.png` },
  { name: "Yudiz", img: `${BASE}/images/yudiz.png` },
  { name: "Dev", img: `${BASE}/images/dev.png` },
  { name: "Aventure", img: `${BASE}/images/aventure.png` },
  { name: "Samy", img: `${BASE}/images/samy.png` },
  { name: "Asian-African CCI", img: `${BASE}/images/asian-african.png` },
  { name: "Virtual Height", img: `${BASE}/images/virtual-height.png` },
];

export const campusImages = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
  (n) => `${BASE}/images/campus/${n}.jpg`,
);

export const nav: {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}[] = [
  {
    label: "Discover",
    children: [
      { label: "Why JG University", href: `${BASE}/why-us.html` },
      { label: "Vision & Mission", href: `${BASE}/why-us.html#vision` },
      { label: "Our DNA", href: `${BASE}/our-dna.html` },
      { label: "Our Leaders", href: `${BASE}/our-leaders.html` },
      { label: "Faculty Members", href: `${BASE}/faculty.html` },
      { label: "FAQ", href: `${BASE}/faq.html` },
    ],
  },
  {
    label: "Programmes",
    children: [
      { label: "Undergraduate", href: `${BASE}/bba.html` },
      { label: "Postgraduate", href: `${BASE}/mba.html` },
      { label: "Doctoral (Ph.D)", href: `${BASE}/doctoral-programmes.html` },
      { label: "Certificate Courses", href: `${BASE}/metaverse.html` },
      { label: "School of Science & Technology", href: "https://sst.jguni.in" },
    ],
  },
  { label: "Campus", href: `${BASE}/campus.html` },
  { label: "Collaborations", href: `${BASE}/collaborations.html` },
  { label: "Career", href: `${BASE}/career.html` },
  { label: "Contact", href: `${BASE}/contact-us.html` },
];

export const stats = [
  { value: "1965", label: "Educating since" },
  { value: "17", label: "Colleges run by the trust" },
  { value: "06", label: "Schools across disciplines" },
  { value: "UGC", label: "Approved · NEP 2020 aligned" },
];

export const strengths = [
  {
    title: "Interdisciplinary Approach",
    body: "Students from a wide range of backgrounds connect, ideate and solve problems with different conceptual structures and methods of understanding.",
    tone: "indigo",
  },
  {
    title: "Immersive & Experiential Learning",
    body: "Continuous exposure to real-life projects and industry use-cases to develop genuine, hands-on expertise.",
    tone: "gold",
  },
  {
    title: "Whole-Brain Learning Pedagogy",
    body: "A pedagogy that empowers learners to acquire future-proof technical skills while moulding them into creative thinkers.",
    tone: "indigo",
  },
  {
    title: "Faculty from Academia & Industry",
    body: "Inspiration from dynamic, brilliant scholars who bring vast academic knowledge and real-world experience together.",
    tone: "gold",
  },
];

export type Programme = { name: string; meta: string; href: string };

export const programmes: {
  id: string;
  label: string;
  blurb: string;
  items: Programme[];
}[] = [
  {
    id: "ug",
    label: "Undergraduate",
    blurb: "Industry-aligned degrees across management, commerce, computing, engineering and law.",
    items: [
      { name: "BBA (Hons)", meta: "4 years · 8 semesters", href: `${BASE}/bba.html` },
      { name: "iMBA — Integrated BBA + MBA", meta: "5 years · 10 semesters", href: `${BASE}/imba.html` },
      { name: "B.Com (Hons) with ACCA", meta: "4 years · 8 semesters", href: `${BASE}/bcom-hons-acca.html` },
      { name: "BCA", meta: "3 & 4 years", href: `${BASE}/bca.html` },
      { name: "iMSc (IT) — Integrated", meta: "5 years · 10 semesters", href: `${BASE}/imsc-it.html` },
      { name: "B.Tech — CSE / AI / Data Science", meta: "4 years · 8 semesters", href: "https://sst.jguni.in" },
      { name: "B.Sc (Hons) — Forensic Science", meta: "Integrated iMSc track", href: `${BASE}/bsc-hons-imsc-forensic-science.html` },
      { name: "LL.B.", meta: "3 years · 6 semesters", href: `${BASE}/llb.html` },
    ],
  },
  {
    id: "pg",
    label: "Postgraduate",
    blurb: "Specialised masters built with foreign-university collaborations and on-the-job training.",
    items: [
      { name: "MBA", meta: "2 years · 4 semesters", href: `${BASE}/mba.html` },
      { name: "iMBA — International Trade & Finance", meta: "Integrated BBA + MBA", href: `${BASE}/ibbamba.html` },
      { name: "Masters — Aviation, Hospitality & Travel", meta: "2 years · 4 semesters", href: `${BASE}/ibbambaaht.html` },
      { name: "M.Com (Hons)", meta: "2 years · 4 semesters", href: `${BASE}/mcom.html` },
      { name: "MCA", meta: "2 years · 4 semesters", href: `${BASE}/mca.html` },
      { name: "M.Sc — Cyber Security", meta: "2 years · 4 semesters", href: `${BASE}/msc-cyber.html` },
      { name: "M.Sc — Forensic Science", meta: "2 years · 4 semesters", href: `${BASE}/msc-forensic.html` },
      { name: "LL.M.", meta: "1 year · 2 semesters", href: `${BASE}/llb.html` },
    ],
  },
  {
    id: "phd",
    label: "Doctoral",
    blurb: "Ph.D research pathways across commerce, management, computing, law and interdisciplinary studies.",
    items: [
      { name: "Ph.D — Commerce", meta: "Research programme", href: `${BASE}/doctoral-programmes.html` },
      { name: "Ph.D — Management", meta: "Research programme", href: `${BASE}/doctoral-programmes.html` },
      { name: "Ph.D — Computing", meta: "Research programme", href: `${BASE}/doctoral-programmes.html` },
      { name: "Ph.D — Law", meta: "Research programme", href: `${BASE}/doctoral-programmes.html` },
      { name: "Ph.D — Interdisciplinary", meta: "Research programme", href: `${BASE}/doctoral-programmes.html` },
    ],
  },
  {
    id: "cert",
    label: "Certificate",
    blurb: "Short, intensive credentials in the technologies shaping the next decade.",
    items: [
      { name: "Metaverse", meta: "Certificate course", href: `${BASE}/metaverse.html` },
      { name: "Data Science, AI/ML & Deep Learning", meta: "Certificate course", href: `${BASE}/data-science-ai-ml-&-deep-learning.html` },
      { name: "Blockchain", meta: "Certificate course", href: `${BASE}/blockchain.html` },
      { name: "Digital Marketing", meta: "Certificate course", href: `${BASE}/digital-marketing.html` },
      { name: "Cyber Security", meta: "Certificate course", href: `${BASE}/cyber-security.html` },
      { name: "Robotic Process Automation", meta: "Certificate course", href: `${BASE}/robotic-process-automation.html` },
      { name: "Industrial Internet of Things", meta: "Certificate course", href: `${BASE}/industrial-internet-of-things.html` },
      { name: "Azure DevOps", meta: "Certificate course", href: `${BASE}/azure-devops.html` },
    ],
  },
];

export const leaders = [
  {
    name: "M. P. Chandran",
    role: "President, JG University",
    image: `${BASE}/images/m-p-chandran.jpg`,
    bio: "A postgraduate in management with more than 30 years of experience in senior and board-level positions across public and private sectors in India and abroad. He chairs the Education Task Force of the Gujarat Chamber of Commerce & Industry and is Chairman of the ASIA Charitable Trust, which runs 3 schools, 17 colleges and JG University.",
    link: `${BASE}/our-leaders.html`,
  },
  {
    name: "Dr. CA Achyut Dani",
    role: "Director-General & Provost",
    image: `${BASE}/images/achyut-dani.jpg`,
    bio: "Over 21 years of experience across academics and industry, with a doctorate in management and commerce. A research guide and fellow of the ICAI's Committee for Review of Education and Training, recognised with the Bharat Jyoti Award, the Gem of CA Profession Award and the Brilliance in Education Award.",
    link: `${BASE}/our-leaders.html`,
  },
];

export const facilities = [
  { name: "IIoT Lab", note: "Hands-on industrial IoT" },
  { name: "R&D + Incubation", note: "Build & launch ventures" },
  { name: "Tech-Enabled Library", note: "Digital-first knowledge hub" },
  { name: "Wi-Fi Enabled Campus", note: "Connected, 24×7 access" },
];

export const features = [
  "National Education Policy (NEP) 2020 & UGC compliant programmes",
  "Faculty members with industry experience and academic expertise",
  "Collaboration with foreign universities for curriculum, delivery & student exchange",
  "Hands-on experience using industry use-cases and emerging tech",
  "Full-pay on-the-job training opportunities",
  "Cross-cultural and cross-sectoral internships",
  "Course-embedded capstone projects",
  "24×7 accessibility of facilities to students and faculty",
];

export const testimonials = [
  {
    quote:
      "It fills me with pride to say that I am an alumnus of JG. The faculty members were more than just teachers; they served as mentors who supported and guided us at every step.",
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer",
  },
  {
    quote:
      "They offer an exceptional academic curriculum that emphasises both theoretical and practical learning — it equipped me with the skills and knowledge necessary to succeed.",
    name: "Parth Rupareliya",
    role: "Art Director",
  },
  {
    quote:
      "The demanding academic programme and top-notch teachers enabled me to establish a solid foundation in my field of study.",
    name: "Parth Raval",
    role: "Creative Producer · Colors Gujarati, Viacom18",
  },
  {
    quote:
      "The BCA program gave me a strong foundation in IT, and the faculty's focus on real training let me apply that knowledge in real-world scenarios.",
    name: "Yatendra Sinh Joddha",
    role: "Technical Lead · TCS",
  },
  {
    quote:
      "The University places a strong emphasis on personality development in addition to academics, which helped me build a fulfilling profession.",
    name: "Krishna Soni",
    role: "Assistant Manager · ICICI Bank",
  },
  {
    quote:
      "The focus on experiential learning through internships and real-world projects stayed with me — I draw upon the knowledge and skills gained at JG each day.",
    name: "Parth Prajapati",
    role: "Sr. Business Development Manager · KGL India",
  },
];

export const footerColumns = [
  {
    title: "Programmes",
    links: [
      { label: "BBA (Hons)", href: `${BASE}/bba.html` },
      { label: "iMBA", href: `${BASE}/imba.html` },
      { label: "MBA", href: `${BASE}/mba.html` },
      { label: "B.Com (Hons) ACCA", href: `${BASE}/bcom-hons-acca.html` },
      { label: "BCA", href: `${BASE}/bca.html` },
      { label: "B.Tech (SST)", href: "https://sst.jguni.in" },
      { label: "LL.B.", href: `${BASE}/llb.html` },
      { label: "Doctoral (Ph.D)", href: `${BASE}/doctoral-programmes.html` },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Why Us", href: `${BASE}/why-us.html` },
      { label: "Our DNA", href: `${BASE}/our-dna.html` },
      { label: "Our Leaders", href: `${BASE}/our-leaders.html` },
      { label: "Faculty", href: `${BASE}/faculty.html` },
      { label: "Campus", href: `${BASE}/campus.html` },
      { label: "Collaborations", href: `${BASE}/collaborations.html` },
      { label: "FAQ", href: `${BASE}/faq.html` },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Admissions", href: `${BASE}/admissions.html` },
      { label: "Career", href: `${BASE}/career.html` },
      { label: "News", href: `${BASE}/news.html` },
      { label: "Blogs", href: `${BASE}/blogs.html` },
      { label: "Code of Conduct", href: `${BASE}/Code Of Coduct.pdf` },
      { label: "Mandatory Disclosure", href: `${BASE}/JG%20University%20Guidelines.html` },
      { label: "Contact Us", href: `${BASE}/contact-us.html` },
    ],
  },
];

export const contact = {
  address:
    "ASIA Campus, Drive In Rd, Thaltej, Ahmedabad-380054, Gujarat, India.",
  emails: ["connect@jguni.in", "admission@jguni.in"],
  phones: ["+91 7567 7567 58", "+91 7567 7567 59"],
};

export const legalLinks = [
  { label: "Terms & Conditions", href: `${BASE}/terms-conditions.html` },
  { label: "Privacy Policy", href: `${BASE}/privacy-policy.html` },
  { label: "Cyber Hygiene", href: `${BASE}/A_Handbook_on_Basics_of_Cyber_Hygiene.pdf` },
];
