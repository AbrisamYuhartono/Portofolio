export interface Project {
  id: string;
  title: string;
  short_description: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  github: string;

}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  dateIssued: string;
  description: string;
  skills: string[];
  image?:string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  location: string;
  phone: string;
}