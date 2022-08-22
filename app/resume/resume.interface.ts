import { ProfessionalExperienceSectionData } from "./professional-experience-section-data.interface";
import { ResumeOptions } from "./resume-options.interface";
import { Section } from "./section.enum";
import { SkillsAndAbilitiesSection } from "./skills-and-abilities-section.type";
import { SummarySectionData } from "./summary-section-data.type";

export interface Resume {
    contactInformation: {
        name: string,
        currentTitle: string,
        details: [string, string][]
    },
    sections: [Section,
        SummarySectionData
        | ProfessionalExperienceSectionData[]
        | SkillsAndAbilitiesSection[]
    ][],
    options: ResumeOptions,
}