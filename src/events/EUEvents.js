import { LOGICS } from '../logics/logics';
const baseStory = 'eu';

export const EUEvents = [
  {
    name: 'WHO Europe Created',
    url: 'WHO_Europe_Created',
    body: [
      {
        type: 'paragraph',
        content: `“Fighting during the Second World War had destroyed the continent’s infrastructure, including health care systems and hospitals, while epidemics spread quickly across the Region, owing to huge numbers of refugees and displaced people (estimated at 15 million by the United Nations in March 1945). In April 1947, Time magazine reported that tuberculosis (TB) had returned as Europe’s most deadly disease and was killing 150 people a week in Berlin alone. In response, the World Health Assembly called for a 'temporary special administrative office to deal with the health rehabilitation of war-devastated countries...The World Health Organisation Special Office for Europe faced a massive task when it opened in Geneva on 1 January 1949.” “The office now serves the so-called “WHO European Region, which comprises 53 countries, covering a vast geographical region from the Atlantic to the Pacific oceans.” “One of WHO’s constitutional functions is to provide objective and reliable information and advice in the field of human health. It fulfils this responsibility in part through its publications programmes, seeking to help countries make policies that benefit public health and address their most pressing public health concerns.” The above quotes were all taken from a document on the first sixty years of WHO Europe, which is available to view through the accompanying link.`
      },
 {
        type: 'paragraph',
        content: `During the Greek case presented here, WHO Europe was among the European governing bodies invited to advise on health screenings for the rising number of immigrants into the country and on a response to the documented rise of HIV among people who use drugs, both of which took place in Greece in 2011 and were described in interviews as factors that provoked and justified the actions of the Minister of Health in 2012, which are at the center of this story. WHO Europe was also taking part in joint risk assessment missions commissioned by the European Commission and conducted by the European Centre for Disease Control (ECDC) and the European Monitoring Centre for Drugs and Drug Addiction (EMCDDA) in 2012.`
      },

  ],
    externalLinks:[
{text:'www.euro.who.int/__data/assets/pdf_file/0004/98437/E93312.pdf',
url: 'www.euro.who.int/__data/assets/pdf_file/0004/98437/E93312.pdf'
}
],
    sources: [],
    startDate: `1949/01/01`,
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.evidence, LOGICS.bestPractice],
    linksWith: ['Joint_ECDC_FRA_EMCDDA', 'ECDC_Created', 'EMCDDA_Created', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'European_and_Greek_Governmental', 'Rapid_Risk_Assessment_on_HIV', '2_ECDC_Visits_to'],
    baseStory: baseStory,
  },

  {
    name: 'European Convention on Human Rights',
    url: 'European_Convention_on_Human',
    body: [
      {
        type: 'paragraph',
        content: `The Convention for the Protection of Human Rights and Fundamental Freedoms, better known as the European Convention on Human Rights, was opened for signature in Rome on 4 November 1950 and came into force in 1953. It was the first instrument to give effect to certain of the rights stated in the Universal Declaration of Human Rights and make them binding. Since its adoption in 1950, the Convention has been amended a number of times and supplemented with many rights in addition to those set forth in the original text. The full convention is available to view through the link accompanying this entry.
`
      },
{        type: 'paragraph',
        content: `In 2013, three cases emerging from the events presented here were brought to the European Court of Human Rights (ECtHR) by a group of lawyers, and are currently awaiting decisions. The articles alleged to have been violated in these cases include: Articles 3 (Prohibition of torture, or inhuman or degrading  treatment or punishment), 5 (Right to liberty and security), 8 (Right to respect for private and family life) and 13 (Right to an effective remedy).`
      }
    ],
    externalLinks: [
    {
    text: 'https://www.echr.coe.int/Documents/Convention_ENG.pdf',
    url: 'https://www.echr.coe.int/Documents/Convention_ENG.pdf'
    }
    ],
    sources: [],
    startDate: '1950/11/05',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.citizenship, LOGICS.securitisation],
    linksWith: ['Group_of_Lawyers_for', '3_Cases_Submitted_to'],
    baseStory: baseStory,
  },

{
    name: `HRW Created`,
    url: `HRW_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“Human Rights Watch began in 1978 with the creation of Helsinki Watch, designed to support the citizens groups formed throughout the Soviet bloc to monitor government compliance with the 1975 Helsinki Accords… By shining the international spotlight on human rights violations in the Soviet Union and Eastern Europe, Helsinki Watch contributed to the dramatic democratic transformations of the late 1980s. Americas Watch was founded in 1981 while bloody civil wars engulfed Central America… In rapid succession in the 1980s, Asia Watch (1985), Africa Watch (1988), and Middle East Watch (1989) were added to what was then known as ‘The Watch Committees’.” “In 1988, the organization formally adopted the all-inclusive name Human Rights Watch….Human Rights Watch broadened and strengthened its work on the rights of women, children, refugees, and migrant workers, bringing a human rights perspective to such issues as domestic violence, trafficking, rape as a war crime, and child soldiers… It helped spotlight previously ignored topics such as the rights of gays and lesbians. The 21st century has brought new challenges. The September 11, 2001 attacks and their aftermath highlighted the need for new forms of pressure on terrorist groups and their supporters and close monitoring of counterterrorism laws, policies, and practices that infringe upon basic human rights. The HIV/AIDS pandemic led to the creation of a Human Rights Watch program devoted to human rights and health. Human Rights Watch is increasingly applying its research methodology to economic, social, and cultural rights, particularly in the areas of education and housing.” These excerpts were taken from a presentation of the organisation’s history, which is available on its website and through the link accompanying this entry.
`
      },

      {
        type: 'paragraph',
        content: `The Human Rights Watch (HRW) sent a joint letter to the United Nations Special Rapporteur on Health and published a statement criticising the events of 2012. The organisation also published a report documenting and criticizing Operation 'Xenios Zeus' in which the Greek police detained thousands of migrants to verify their legal status. Some of the women implicated in this story were arrested during police raids conducted under the auspices of this operation.
`
      },
    ],
    externalLinks: [
      {
        url: `www.hrw.org/history`,
        text: `www.hrw.org/history`
      },
    ],
    sources: [],  
    startDate: '1978',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.publicHealth, LOGICS.socialJustice, LOGICS.evidence, LOGICS.humanitarianism, LOGICS.dissent],
    linksWith: ['Joint_Letter_to_UN', 'Operation_Xenios_Zeus', 'Transnational_NGOs_and_Activist'],
    baseStory: baseStory,
  },

  {
    name: `KETHEA Created`,
    url: `KETHEA_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“KETHEA was founded in 1983 and is a legal entity of private law, supervised by the Ministry of Health & Social Solidarity. KETHEA is mainly active in therapy, offering its services to more than 3,000 people who use drugs and their family members annually, using a nation-wide network of 90 units located in Athens and across the country. All programs are offered free of charge and include counseling, immediate intervention programs, therapy, education and vocational training, social integration and employment. KETHEA is also active in the fields of primary prevention, education and research. Furthermore, it has attained special consultative status with the UN Economic and Social Council (ECOSOC) and is one of the principal organizations to implement the National Action Plan on Drugs” and was thus included in the Inter-Ministerial Plan for Combating Addictions that was developed to respond to the documented HIV outbreak among people who use drugs.`
      },
      {
        type: 'paragraph',
        content: `KETHEA reflects a shift in the perception of people who use drugs from criminals to patients in Greece - a shift that was codified in law nº 1729/87 for the control and prohibition of narcotic drugs in Greece in 1987. As presented on the website of the European Monitoring Centre for Drugs and Drug Addiction, which is available through the accompanying link, the law's main philosophy was “the consideration of the drug addict as a ‘patient’ instead of as a criminal, dividing between drug addicts and non addicts as the threshold for prosecution rules. The law addressed all aspects of the problem (repression, therapy, rehabilitation, research and prevention).” `
      },
      {
        type: 'paragraph',
        content: `KETHEA was one of the institutions that provided support for the arrested women in pre-trial detention and may also have been among the first groups to meet with the women after their arrest. Several of the women implicated in this story benefited from the drug treatment services offered by KETHEA in the prison setting. Representatives of KETHEA were present at some of the weekly meetings that took place to organise a response to the ongoing testing and arrests of women at the heart of this story.`
      },

    ],
    externalLinks: [
      {
        url: `www.snf.org/en/grants/grantees/k/kethea-therapy-center-for-dependent-individuals/program-suppport/`,
        text: `www.snf.org/en/grants/grantees/k/kethea-therapy-center-for-dependent-individuals/program-suppport/`
      },
      {
        url: `www.emcdda.europa.eu/html.cfm/index5174EN.html?pluginMethod=eldd.countryprofiles&country=GR`,
        text: `www.emcdda.europa.eu/html.cfm/index5174EN.html?pluginMethod=eldd.countryprofiles&country=GR`
      },
    ],
    sources: [],
    startDate: '1983',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.humanitarianism],
    linksWith: ['Coalition_Members_Visit_Arrested', 'Inter-Ministerial_National_Plan_for',  'EMCDDA_Created', 'Inter-Organisational_Coalition_with_Weekly', 'Ongoing_Forced_HIV_Testing'],
    baseStory: baseStory,
  },

{
    name: `GNP+ Created`,
    url: `GNP+_Created`,
    body: [
      {
        type: 'paragraph',
        content: `According to their website, which is linked below in this entry, “GNP+ [Global Network of People Living with HIV - A.D., T.S.] is the global network for and by people living with HIV. We work to improve the quality of life of all people living with HIV. This means we advocate for, and support fair and equal access to treatment, care and support services for people living with HIV around the world. As a rights-based organisation, emancipation and self-determination are our core principles. Over the past decade we have spoken with, interviewed and surveyed tens of thousands living with HIV, getting to know – again and again – the issues of crucial importance to the lives of people living with HIV: our involvement, rights and treatment. It is our vision that people living with HIV will only enjoy a better quality of life if we keep demanding it. We support and nurture a powerful and united worldwide social movement of people living with HIV… GNP+ originates in the International Steering Committee of the International Conferences of People Living with HIV, founded in 1986. The Steering Committee organised conferences so people living with HIV could exchange information, develop joined activism and be involved in solving the HIV epidemic. When we started to develop our own programmes in 1992, we became GNP+.”`
      },
      {
        type: 'paragraph',
        content: `GNP+ was among several organisations to criticise the events of 2012 in a co-authored public statement, and they attended and reported on a workshop on Greek legal structures and HIV/AIDS several months after the initial arrests. Following the repeal and then the reinstatement of the decree that was said to render legal forced HIV/AIDS testing, GNP+ was also among several organisations to call for the repeal of the decree again.`
      },
    ],
    externalLinks: [
      {
        url: `www.gnpplus.net/who-we-are/about-us/`,
        text: `www.gnpplus.net/who-we-are/about-us/`
      },
    ],
    sources: [],
    startDate: '1986',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.publicHealth, LOGICS.evidence, LOGICS.mutualHelp, LOGICS.dissent],
    linksWith: ['transnational_NGOs_and_Activist_statements', 'Transnational_NGOs_and_Activist', 'Workshop_on_Greek_Justice', 'Legislation_and_HIV/AIDS'],
    baseStory: baseStory,
  },

  {
   name: `18 ANO Created`,
    url: `18_ANO_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“The 18 ANO drug dependence treatment unit and social rehabilitation centre (18 ANO) was founded in 1987 and is part of the Attica State Psychiatric Hospital. It is considered the first public centre for the prevention and treatment of drug dependency in Greece and, to date, is the largest drug dependency unit operating as part of the Greek national health system. During the late 1980s, the unit created a theatre group in an attempt to encourage recovering users to participate in theatre practice, and to further support their involvement in cultural and artistic activities.” (pg 262 of Zoe Zontou’s article “An allegory of addiction recovery: exploring the performance of Eumenides by Aeschylus, as adapted by 18 ANO theatre group”, 2013, in the journal Research in Drama Education). A link to their website is provided below. `
      },
      {
        type: 'paragraph',
        content: `ANO 18 was included in the Inter-Ministerial Plan for Combating Addictions that was developed in response to the documented HIV outbreak among people who use drugs, and representatives were actively involved in the inter-organisational interventions following the forced testing and arrests. Several women made use of the services of 18 ANO upon their release from pre-trial detention. A representative of 18ANO took part in a public discussion as part of a theater performance inspired by the events from 2012.`
      },
    ],
    externalLinks: [
      {
        url: `www.18ano.gr/`,
        text: `www.18ano.gr/`
      },
    ],
    sources: [],
    startDate: '1987',
    endDate: '',
    logics: [LOGICS.humanitarianism, LOGICS.publicHealth],
    linksWith: ['Inter-Organisational_Coalition_with_Weekly', 'Inter-Ministerial_National_Plan_for', 'Women_from_Earth_Performance'],
    baseStory: baseStory,
  },

  {
    name: `IAS Created`,
    url: `IAS_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“Founded in 1988, the International AIDS Society (IAS) is the world’s largest association of HIV professionals, with members from more than 180 countries working on all fronts of the global AIDS response. The IAS is also the steward of the world’s two most prestigious HIV conferences – the International AIDS Conference and the IAS Conference on HIV Science. These conferences have established a gold-standard meeting that convenes the world’s top scientists, civil society members and policymakers to jointly discuss the fight against HIV”. More information on the IAS is available through the accompanying link. `
      },
      {
        type: 'paragraph',
        content: `During a welcoming speech at an International AIDS Society conference in July 2013, the organisation’s then president, Françoise Barré-Sinoussi, represented one of many transnational non-governmental and activist groups to publicly criticised the reinstatement of a decree authorising forced HIV testing in Greece. `
      },
    ],
    externalLinks: [
      {
        url: `www.iasociety.org/About-IAS/about`,
        text: `www.iasociety.org/About-IAS/about`
      },
    ],
    sources: [],
    startDate: '1988',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.evidence, LOGICS.bestPractice],
    linksWith: ['Transnational_NGOs_and_Activist', 'Reinstatement_of_Provision_39a'],
    baseStory: baseStory,
  },

{
    name: `Centre for Life Created`,
    url: `Centre_for_Life_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“The Centre of Life is a recognized, non-governmental, non-profit organization, founded in 1991 as an initiative of friends. Frank Olcvary played a leading part and was the inspiration and driving force of the association during its first years. The foundation of Centre of Life came at a period where the existence of AIDS and its consequences were already known to the world; however the majority of people in Greece was ignorant and had little information on the issue. From the very beginning of its operation, a core goal of the Organization was, from the one hand, the education of people on AIDS and, on the other hand, the support of HIV positive people, in order for them not to live in an environment of isolation, fear and abandonment”. Additional information on the organisation is available through the accompanying link.`
      },
      {
        type: 'paragraph',
        content: `Additional information on the organisation is available through the accompanying link.`
      },
      {
        type: 'paragraph',
        content: `The Centre for Life was included within the network of organisations charged with distributing information under the Inter-Ministerial Plan for Combating Addictions that was developed to respond to the documented HIV outbreak among people who use drugs in 2011. Actively involved in the meetings and demonstrations surrounding the forced HIV testing and arrests of 2012, and in the related lawsuit brought against the public servants and responses to the instatement and reinstatement of the Ministerial decree that was said to legalise forced HIV testing, the Centre for Life was one of the key actors involved in this story.`
      },
    ],
    externalLinks: [
      {
        url: `www.kentrozois.gr/en/about-us/history-purpose/`,
        text: `www.kentrozois.gr/en/about-us/history-purpose/`
      },
    ],
    sources: [],
    startDate: '1991',
    endDate: '',
    logics: [LOGICS.humanitarianism, LOGICS.publicHealth],
    linksWith: ['Demonstrations_against_Provision', 'Protests_in_Front_of', 'Inter-Organisational_Coalition_with_Weekly', 'Lawsuit_Filed_Against_Public', 'Inter-Ministerial_National_Plan_for'],
    baseStory: baseStory,
  },

{
    name: `EATG Created`,
    url: `EATG_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“The European AIDS Treatment Group (EATG) is a patient-led advocacy NGO that defends the treatment-related interests of people living with or affected by HIV/AIDS and related co-infections within Europe. Founded in 1992, the EATG is a network of more than 180 nationally-based members from 47 countries in Europe. Our members are PLHIV [People living with HIV - A.D, T.S.] and representatives of different communities affected by HIV/AIDS and co-infections”. “Our mission is to achieve the fastest possible access to state of the art medical products, devices and diagnostic tests that prevent or treat HIV and improve the quality of life of people living with or who are at risk of HIV/AIDS. We aim for universal access to standard of care treatment, diagnostics and prevention to all countries in Europe and Central Asia. We aim to foster community engagement by providing knowledge and skills in the areas of research and development, clinical trial protocols, regulatory environment, advocacy and project management. We aim to develop financially healthy structures, an optimal framework for the implementation of the work plan and user-friendly systems for its members to be involved in the planning and implementation of its work plan and strategy.” More information on the organisation is available through the accompanying link.`
      },
      {
        type: 'paragraph',
        content: `EATG was a co-coordinator of the Civil Society Forum (CSF) on HIV, which came to discuss and respond to the events in Greece in 2012 at one of their meetings. A co-chair of EATG at the time was the director of Positive Voice, a Greek network of people living with HIV that was founded in 2009. EATG also co-authored a letter to the United Nations Special Rapporteur on Health calling for a response to the 2012 events, and was among several organisations to call for the repeal of provision 39a that was said to legalise forced HIV testing in Greece.`
      },
    ],
    externalLinks: [
      {
        url: `www.eatg.org/about-us/`,
        text: `www.eatg.org/about-us/`
      },
    ],
    sources: [],
    startDate: '1992',
    endDate: '',
    logics: [LOGICS.mutualHelp, LOGICS.collaborativeGovernance, LOGICS.evidence, LOGICS.bestPractice, LOGICS.publicHealth, LOGICS.socialJustice],
    linksWith: ['Positive_voice_Created', 'Transnational_NGOs_and_Activist', 'Joint_Letter_to_UN', 'CSF_on_HIV_Created', 'Situation_in_Greece_Discussed'],
    baseStory: baseStory,
  },

  {
    name: `KEELPNO Created`,
    url: `KEELPNO_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“The Hellenic Centre for Disease Control and Prevention (KEELPNO) is responsible for the surveillance and control of infectious diseases in Greece. It functions under the supervision of the Ministry of Health, and is in close collaboration with the local public health authorities. It was established in 1992 with the aim to develop activities on HIV/AIDS. KEELPNO covers a wide range of activities in the area of surveillance and intervention, nosocomial-acquired infections, public health support of immigrants, refugees and other minority groups, research, travel medicine consultation and guidelines issuing… The main activities of the department regard surveillance of communicable diseases and investigation of sporadic cases and outbreaks all over the country in close collaboration with local health authorities. Surveillance is based on the mandatory notification system, the system of laboratory reporting, the sentinel surveillance systems and several specialized laboratory networks.”`
      },
      {
        type: 'paragraph',
        content: `Given these responsibilities, KEELPNO was central in the development of measures to screen the health of migrants entering Greece, and it first documented and reported on the rise in new HIV infections among people who use drugs prior to the 2012 events. The organisation was also initially part of the Inter-Ministerial Plan for Combating Addictions, and met regularly with representatives of European-level institutions, including European Center for Disease Control and Prevention (ECDC) and WHO Europe, to determine and assess strategies for responding to the documented outbreak. Data from KEELPNO contradicted claims made by the Minister of Health at an UNGASS meeting just prior to the testing and arrests. Not without critical dissent from within the organisation, representatives of KEELPNO conducted forced HIV testing in relation to the events presented here, published research assessing the public response to these initiatives, and was thus also the target of a lawsuit brought against the implicated public servants. A subsequent president of the organisation ultimately apologised for the rights-violations without any further action.`
      },
    ],
    externalLinks: [
      {
        url: `www.ecdc.europa.eu/en/hellenic-centre-disease-control-and-prevention-keelpno-epiet`,
        text: `www.ecdc.europa.eu/en/hellenic-centre-disease-control-and-prevention-keelpno-epiet`
      },
    ],
    sources: [],
    startDate: '1992',
    endDate: '',
    logics: [LOGICS.securitisation, LOGICS.publicHealth, LOGICS.evidence, LOGICS.bestPractice],
    linksWith: ['New_KEELPNO_President', 'Research_on_Public_Response','Lawsuit_Filed_Against_Public', 'KEELPNO_Internal_Letter_of', 'UNGASS_Statement_by_Greek', 'Documented_HIV_Outbreak_Among', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Forced_Testing_and_Arrest', '1st_ECDC_and_EMCDDA', '2_ECDC_Visits_to', 'Inter-Ministerial_National_Plan_for', 'European_and_Greek_Governmental'],
    baseStory: baseStory,
  },

 {
    name: `NSWP Created`,
    url: `NSWP_Created`,
    body: [
      {
        type: 'paragraph',
        content: `"The Global Network of Sex Work Projects (NSWP) exists to uphold the voice of sex workers globally and connect regional networks advocating for the rights of female, male, and transgender sex workers. NSWP is a membership organisation. Our members are local, national or regional sex worker-led organisations and networks across five regions: Africa, Asia and the Pacific, Europe, Latin America and North America and the Caribbean. NSWP’s work is based on three core values: Acceptance of sex work as work; Opposition to all forms of criminalisation and other legal oppression of sex work (including sex workers, clients, third parties, families, partners and friends); Supporting self-organisation and self-determination of sex workers.” “A group of sex workers’ rights activists working in sex work projects around the world started networking in 1990 at the 2nd International Conference for NGOs working on AIDS in Paris. Two years later, NSWP was formally launched as an alliance of sex workers’ rights activists and sex work projects during the 1992 International AIDS Conference in Amsterdam. Over the years, NSWP has conducted activities in partnership with other organisations, and has influenced policy and built leadership among sex workers and facilitated the development of regional and national networks of sex workers and sex work projects. NSWP questioned the stigma of sex work and advocated for the greater recognition of sex workers as rights bearers, with the capacity to make a difference.” “NSWP, along with its regional networks, was also successful in urging UNAIDS to reconsider its 2007 policy guidelines on HIV and sex work.” For more information on the organisation, visit the accompanying link. `
      },
      {
        type: 'paragraph',
        content: `NSWP was among several transnational organisations to criticize the events of 2012 in a co-authored public statement; and they attended and reported on a workshop on Greek legal structures and HIV/AIDS several months after the initial arrests.`
      },
    ],
    externalLinks: [
      {
        url: `www.nswp.org/who-we-are and www.nswp.org/history`,
        text: `www.nswp.org/who-we-are and www.nswp.org/history`
      },
    ],
    sources: [],
    startDate: '1992',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.dissent, LOGICS.humanRights, LOGICS.socialJustice, LOGICS.collaborativeGovernance, LOGICS.mutualHelp, LOGICS.evidence, LOGICS.bestPractice],
    linksWith: ['transnational_NGOs_and_Activist_statements', 'Workshop_on_Greek_Justice', 'Legislation_and_HIVAIDS', 'Transnational_NGOs_and_Activist', 'UNAIDS_Guidance_Note_on_2012'],
    baseStory: baseStory,
  },
{
    name: `ACT UP Hellas Created`,
    url: `ACT_UP_Hellas_Created`,
    body: [
      {
        type: 'paragraph',
        content: `ACT UP Hellas, created in 1993, is a volunteer based non-governmental organisation and the only Greek affiliate of the transnational network of groups known as Aids Coalition to Unleash Power (ACT UP). Among its many activities, ACT UP Hellas has provided outreach services and other forms of education on human rights and HIV/AIDS for LGBTQI groups, migrants, sex workers, people who use drugs and persons living in prisons, and it is active in outreach and advocacy on the topic of sex trafficking. The group is also a member of the Transnational AIDS/STD Prevention Among Migrant Sex Workers in the European Union (TAMPEP). A history of the organisation is available in Greek through the accompanying link.`
      },
      {
        type: 'paragraph',
        content: `ACT UP Hellas was actively involved in the meetings and demonstrations surrounding the forced HIV testing and arrests of 2012, and in the related lawsuit brought against the public servants and responses to the instatement and reinstatement of the Ministerial decree that was said to legalise forced HIV testing. As one of the organisations supporting the forcibly tested and arrested women and their families with material resources and institutional interventions, ACT UP Hellas was one of the key actors involved in this story.`
      },
    ],
    externalLinks: [
      {
        url: `https://dinamiprosforas.gr/archives/2850`,
        text: `https://dinamiprosforas.gr/archives/2850`
      },
    ],
    sources: [],
    startDate: '1993',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.humanitarianism, LOGICS.socialJustice, LOGICS.dissent],
    linksWith: ['Inter-Organisational_Coalition_with_Weekly', 'Protests_in_Front_of','Coalition_Members_Visit_Arrested', 'Lawsuit_Filed_Against_Public', 'Demonstrations_against_Provision', 'Women_from_Earth_Performance'],
    baseStory: baseStory,
  },


  {
    name: `EMCDDA Created`,
    url: `EMCDDA_Created`,
    body: [
      {
        type: 'paragraph',
        content: `The European Monitoring Centre for Drugs and Drug Addiction (EMCDDA) was established in 1993. Inaugurated in Lisbon in 1995, it is one of the European Union’s decentralised agencies. The EMCDDA exists to provide the EU and its Member States with a factual overview of European drug production, distribution, and consumption, and thus a solid evidence base to support debates on drug policies. Today it offers policymakers the data they need for drawing up informed drug laws and strategies. It also helps professionals and practitioners working in the field to pinpoint best practices and new areas of research. More information on the Centre is available through the accompanying link.`
      },
      {
        type: 'paragraph',
        content: `EMCDDA was among the European agencies that pursued the mission to investigate the outbreak of HIV among people who use drugs in Greece in 2011, and it served as an advising agency at several European level meetings on the Greek outbreak.`
      },
    ],
    externalLinks: [
      {
        url: `www.emcdda.europa.eu/about`,
        text: `www.emcdda.europa.eu/about`
      },
    ],
    sources: [],
    startDate: '1993',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.evidence, LOGICS.bestPractice, LOGICS.securitisation, LOGICS.deCriminalisation],
    linksWith: ['Rapid_Risk_Assessment_on', '1st_ECDC_and_EMCDDA', '2_ECDC_Visits_to', '2nd_ECDC_and_EMCDDA', 'Joint_ECDC_FRA_EMCDDA'],
    baseStory: baseStory,
  },

  {
    name: `OKANA Created`,
    url: `OKANA_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“The Organisation Against Drugs (ΟΚΑΝΑ) was established pursuant to Law 2161/93 which was passed unanimously by the Greek Parliament, and has been operational since 1995 as a legal person that is governed by private law and reports to the Ministry of Health and Social Solidarity. Its constituent instrument stipulates that OKANA shall: plan, promote, coordinate and implement a national policy on prevention, treatment and rehabilitation of drug addicts; address the drug problem at a national level, provide valid and documented information, and raise public awareness; establish and effectively manage prevention centres, treatment units and social and professional reintegration centres.” “OKANA works together with national (ministries, treatment programmes, local government authorities, universities etc.), European and international organisations (the European Monitoring Centre for Drugs and Drug Addiction (EMCDDA), the Pompidou Group of the Council of Europe, the World Health Organisation, the United Nations etc.). To look into the drug problem in Greece, OKANA works closely with the National Documentation and Information Centre on Drugs and Drug Addiction (EKTEPN). When it comes to prevention, OKANA has liaised with local government authorities in order to create an extended network of Prevention Centres all over Greece alongside several treatment and social reintegration programmes meeting the different needs of addicted persons.” For more information, view the linked website. `
      },
      {
        type: 'paragraph',
        content: `OKANA was a member of the Inter-Ministerial Plan for Combating Addictions under which it was financed to create a network to provide outreach to people who use drugs. The organisation sent a request to the Minister of Health and received funding to provide needle exchange programs within the context of the documented HIV outbreak among people who use drugs in Greece in 2011. Several of the women arrested in 2012 were utilising the services of OKANA upon their release from prison.`
      },
    ],
    externalLinks: [
      {
        url: `www.okana.gr/2012-04-03-07-49-40/item/253-about-us`,
        text: `www.okana.gr/2012-04-03-07-49-40/item/253-about-us`
      },
    ],
    sources: [],
    startDate: '1993',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.humanitarianism, LOGICS.humanRights],
    linksWith: ['EMCDDA_Created', 'Inter-Organisational_Coalition_with_Weekly', 'Inter-Ministerial_National_Plan_for'],
    baseStory: baseStory,
  },

{
    name: `TAMPEP Created`,
    url: `TAMPEP_Created`,
    body: [
      {
        type: 'paragraph',
        content: `Created in 1993 as a European research project as well as an active intervention promoting awareness on HIV/AIDS and STDs among migrant sex workers, “TAMPEP (European Network for HIV/STI Prevention and Health Promotion among Migrant Sex Workers) is a network of community based service providers and sex workers’ organisations operating in 25 European countries. The main objective of TAMPEP is to reduce the HIV vulnerability of migrant and mobile sex workers through the development, exchange, promotion and implementation of appropriate policies and interventions across Europe” (page 7 of the TAMPEP’s report “Sex Work, Migration and Health” published in 2009). In 2016, TAMPEP re-established itself as a migrant sex worker-led network engaged in an advocacy on rights and health of migrant sex workers. More information on the network is available through the accompanying link.`
      },
      {
        type: 'paragraph',
        content: `Representatives of TAMPEP participated in the first Joint Technical Mission of European Center for Disease Control (ECDC), European Monitoring Center for Drugs and Drug Addiction (EMCDDA), WHO-Europe and Fundamental Rights Agency (FRA) to Athens in May 2012, and it was among several transnational non-governmental and activist groups to publicly criticise the forced testing and arrests of the women at the heart of this story.`
      },
    ],
    externalLinks: [
      {
        url: `www.tampep.eu/`,
        text: `www.tampep.eu/`
      },
    ],
    sources: [],
    startDate: '1993/09/01',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.evidence, LOGICS.bestPractice, LOGICS.dissent, LOGICS.citizenship],
    linksWith: ['Transnational_NGOs_and_Activist', '2_ECDC_Visits_to'],
    baseStory: baseStory,
  },


  {
    name: `UNAIDS Comes into Operation`,
    url: `UNAIDS_Comes_into_Operation`,
    body: [
      {
        type: 'paragraph',
        content: `Created in 1996 and based in Geneva, UNAIDS is: “leading and catalysing an expanded response to the epidemic to improve prevention and care, reduce people's vulnerability to HIV/AIDS, and alleviate the epidemic's devastating social and economic impact. UNAIDS has taken over the baton from WHO's Global Programme on AIDS, which led the fight against AIDS starting in 1986. Alongside WHO, other UN agencies and bodies have been active against the epidemic, each in its own sphere of action. There are two key reasons for the six agencies to join forces in UNAIDS: 1) The need for a broader-based, expanded response to the epidemic in sectors ranging from health to economic development...2) The need to provide leadership and better-coordinated UN system support to countries.” (Pages 1-2 from the 1996 report, “Facts about UNAIDS”)`
      },
      {
        type: 'paragraph',
        content: `“UNAIDS generates strategic information and analysis that increases the understanding of the state of the AIDS epidemic and progress made at the local, national, regional and global levels. It leads the world’s most extensive data collection on HIV epidemiology, programme coverage and finance and publishes the most authoritative and up-to-date information on the HIV epidemic—vital for an effective AIDS response. UNAIDS produces data for impact—no major report, speech or policy initiative on HIV has been launched or made without referring to data collected and released by UNAIDS.” More information on the organisation is available through the accompanying link.`
      },
      {
        type: 'paragraph',
        content: `The Joint United Nations Programme to Fight HIV/AIDS (UNAIDS) was one of the global health governing bodies to criticise the Greek government for violating the human rights of the women arrested and detained in 2012 (referred to by UNAIDS as “sex workers”). The UNAIDS Guidance Note on the Criminalisation of HIV and other recommendations published by the agency have been used by the team of lawyers in their legal defence of the women in national courts, and in the claims brought to the Greek justice system and the European Court of Human Rights against the Greek government by several of the impacted women. Further, they publicly criticised the reinstatement of provision 39a by the Greek government in 2013.`
      },
    ],
    externalLinks: [
      {
        url: `www.unaids.org/en`,
        text: `www.unaids.org/en`
      },
    ],
    sources: [],
    startDate: '1996/01/01',
    endDate: '',
    logics: [LOGICS.bestPractice, LOGICS.evidence, LOGICS.humanRights, LOGICS.publicHealth, LOGICS.deCriminalisation],
    linksWith: ['UNAIDS_Policy_Brief_on', 'UNAIDS_Guidance_Note_on_2012', 'Joint_Guide_on_HIV', 'Global_Commission_on_HIV_2010', 'UNAIDS_Guidance_Note_on_2013', 'UNAIDS_Press_Statement_on', 'Global_Commission_on_HIV_2012', 'UNAIDS_Calls_for_Repeal', 'Lawyers_Secure_Acquittals_and', '3_Cases_Submitted_to'],
    baseStory: baseStory,
  },

  {
    name: `Greek HIV Testing Guidelines`,
    url: `Greek_HIV_Testing_Guidelines`,
    body: [
      {
        type: 'paragraph',
        content: `In 1997, a document of principles were published in Greece stating that all HIV testing must be anonymous, confidential and free. These guidelines were referenced in interviews as having been violated during the forced testing of women at the heart of this story.`
      },
      ],
    externalLinks: [
    ],
    sources: [],
    startDate: '1997',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.publicHealth],
    linksWith: ['European_and_Greek_Governmental', 'Ministerial_Decree_39a_Published', 'Amendment_to_Greek_Immigration', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Forced_Testing_and_Arrest', 'Operation_Xenios_Zeus'],
    baseStory: baseStory,
  },
  
  {
    name: `Law Passed Legalising Sex Work in Greece`,
    url: `Law_Passed_Legalising_Sex`,
    body: [
      {
        type: 'paragraph',
        content: `The law 2734/1999 on “sex work and other provisions” provides that “sex workers are required to hold a work permit under the conditions that he/she is older than 18 years old; is single, widowed or divorced; does not suffer from sexually transmitted or other infectious diseases; does not suffer from any form of mental illness and is not a drugs user; and he/she has not been convicted by final judgment for murder, seduction of children, including facilitating debauchery, child pornography, forced prostitution, trafficking, sexual abuse with a minor for remuneration, robbery and extortion, and violation of the provisions of the laws on arms and drugs.” Persons holding a work permit shall, “every fifteen days, undergo a medical examination.” Furthermore, persons engaging in sex work without holding a work permit or without being subjected to the necessary health examination are “punishable with imprisonment of up to two years and a fine.” In addition, a sex worker engaging in “sexual intercourse while knowing that he/she has a sexually transmitted or other infectious disease, shall be punished with imprisonment of up to one year unless the act is punished more severely by another provision.” More information on the law is available in the linked joint letter by Positive Voice, the Human Rights Watch (HRW) and the European AIDS Treatment Group (EATG). The law has undergone several revisions over the past ten years thereby reducing the penalty of unregistered sex work, and it served as the legal grounds for the accusations that were brought against all of the arrested women. `
      },
      ],
    externalLinks: [
      {
        url: `www.hrw.org/news/2012/05/09/joint-letter-un-special-rapporteur-health`,
        text: `www.hrw.org/news/2012/05/09/joint-letter-un-special-rapporteur-health`
      },
    ],
    sources: [],
    startDate: '1999',
    endDate: '',
    logics: [LOGICS.securitisation, LOGICS.publicHealth, LOGICS.deCriminalisation],
    linksWith: ['Change_to_Greek_Sex', 'UNAIDS_Guidance_Note_on_2012', '2009_Greek_Legislative_Election', 'Ministerial_Decree_39a_Published', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Conference_on_Greek_Sex'],
    baseStory: baseStory,
  },


{
    name: `AIDS Action Europe Created`,
    url: `AIDS_Action_Europe_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“AAE is a regional network of a diverse group of more than 420 NGOs, national networks and community-based groups, most of which are AIDS service organisations, in 47 countries spanning the WHO European Region. Membership is free and open to all civil society organisations that endorse our mission, guiding principles and ethical code.” “The Open Forum on AIDS Action in Europe in March 2004 was a first public event to launch AIDS Action Europe. Three priority lines of action for AIDS Action Europe were defined: Addressing the rise of HIV and STIs in Western Europe; Supporting an effective response to HIV and AIDS in Central and Eastern Europe; Advocating for sufficient resource mobilisation for the global epidemic. In reality AIDS Action Europe has focused in its further actions mostly on the first two lines of action and has supported other actors in the field, when necessary, on action line number three.” More information on the network is available through the linked website.`
      },
      {
        type: 'paragraph',
        content: `In 2012, AIDS Action Europe (AAE), together with the European AIDS Treatment Group (EATG), co-chaired the European Commission’s Civil Society Forum (CSF) on HIV/AIDS, where discussion occurred about the forced testing and arrests of the women, and a decision was taken to write letters of concern to various European Commissioners. The CSF also participated in related meetings in Greece organised by European-level health governing bodies.`
      },
    ],
    externalLinks: [
      {
        url: `www.aidsactioneurope.org/en/about-aae/who-we-are/mission`,
        text: `www.aidsactioneurope.org/en/about-aae/who-we-are/mission`
      },
    ],
    sources: [],
    startDate: '2004',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.evidence, LOGICS.bestPractice, LOGICS.socialJustice],
    linksWith: ['CSF_on_HIV_Created', 'Situation_in_Greece_Discussed', '2_ECDC_Visits_to','28_May_2012-29'],
    baseStory: baseStory,
  },

{
    name: `ICRSE Created`,
    url: `ICRSE_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“The International Committee on the Rights of Sex Workers in Europe (ICRSE) is a sex worker-led network representing 103 organisations led by or working with sex workers in 32 countries in Europe and Central Asia, as well as more than 150 individuals including sex workers, academics, trade unionists, human-rights advocates, and women’s rights and LGBT+ rights activists. The core aim of ICRSE is to ensure that the voices of sex workers in the region are heard, listened to and respected. We strive to raise awareness about the social exclusion of female, male and transgender sex workers in Europe and Central Asia; to promote the human, health and labour rights of all sex workers at community, national and regional level; and to build alliances with key partners, including sex workers and their organisations globally, NGOs and other civil society organisations and key stakeholders at the level of EU policy and decision-making. ICRSE opposes all forms of criminalisation of sex work and strongly disputes the conflation of sex work with trafficking. We aim to raise awareness of the harmful impact of the conflation of sex work with trafficking on sex workers’ lives and seek to put forward a labour rights’ perspective of sex work, whereby the labour, health and human rights of all sex workers are recognised, protected and fulfilled by national, regional and international laws, policies and programmes.” More information on the Committee is available through the accompanying link.`
      },
      {
        type: 'paragraph',
        content: `Together with other transnational sex workers’ rights networks, ICRSE was among the first transnational non-governmental and activist groups to publicly respond to the arrests of women in 2012. In May 2017, ICRSE participated in a conference on Greek sex work policy advocating for the decriminalisation of sex work in the country.`
      },
    ],
    externalLinks: [
      {
        url: `http://www.sexworkeurope.org/about-us`,
        text: `http://www.sexworkeurope.org/about-us`
      },
    ],
    sources: [],
    startDate: '2004',
    endDate: '',
    logics: [LOGICS.dissent, LOGICS.citizenship, LOGICS.humanRights, LOGICS.bestPractice, LOGICS.evidence, LOGICS.deCriminalisation],
    linksWith: ['Transnational_NGOs_and_Activist', 'Conference_on_Greek_Sex'],
    baseStory: baseStory,
  },

{
    name: `PR.A.K.S.I.S. Created`,
    url: `PRAKSIS_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“A humanitarian non-profit association is being established, based on voluntary offer, under the name ‘PR.A.K.S.I.S. - Programmes of Development of Social Support and Medical Co-Operation.’...The Association is a non-governmental organisation...The Association's Objective is generally the creation, implementation and realisation of humanitarian action programmes, the development of a spirit of solidarity, and every action in general governed by charitable feelings within a broader social and hygienic context…” This quote was taken from the organisation’s original statutes, which are in English and linked below.
`
      },
      {
        type: 'paragraph',
        content: `PR.A.K.S.I.S. was one of the key actors involved in responding to the forced testing and arrests of the women at the heart of this story, and the psychologist from PR.A.K.S.I.S. was one of two persons to visit the first grouping of arrested women hours within their arrest. PR.A.K.S.I.S. was included in the network of organisations charged with distributing information under the Inter-Ministerial Plan for Combating Addictions that was developed to respond to the documented HIV outbreak among people who use drugs. The group also played a key role in the lawsuits brought against the civil servants implicated in the arrests and detention of the women, and contributed to the elaboration of the case brought to the European Court of Human Rights (ECtHR).
`
      },
    ],
    externalLinks: [
      {
        url: `www.cdn.praksis.gr.s3.amazonaws.com/statutes/index.html#1/`,
        text: `www.cdn.praksis.gr.s3.amazonaws.com/statutes/index.html#1/`
      },
    ],
    sources: [],
    startDate: '2004/07/23',
    endDate: '',
    logics: [LOGICS.humanitarianism, LOGICS.bestPractice, LOGICS.evidence, LOGICS.dissent, LOGICS.publicHealth, LOGICS.mutualHelp],
    linksWith: ['Inter-Organisational_Coalition_with_Weekly', 'Coalition_Members_Visit_Arrested', 'Protests_in_Front_of', 'Weekly_Prison_Visits_by', '2_ECDC_Visits_to', 'Inter-Ministerial_National_Plan_for', 'Forced_Testing_and_Arrest', 'Lawsuit_Filed_Against_Public', '3_Cases_Submitted_to', 'Demonstrations_against_Provision', 'Ruins_Premiere'],
    baseStory: baseStory,
  },


  {
    name: `ECDC Created`,
    url: `ECDC_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“The European Centre for Disease Prevention and Control (ECDC) was established in 2005. It is an EU agency aimed at strengthening Europe's defences against infectious diseases. It is located in Solna, Sweden. ECDC works in three key strategic areas: it provides evidence for effective and efficient decision-making, it strengthens public health systems, and it supports the response to public health threats. ECDC core functions cover a wide spectrum of activities: surveillance, epidemic intelligence, response, scientific advice, microbiology, preparedness, public health training, international relations, health communication, and the scientific journal Eurosurveillance.” More information on the organisation is available through the linked website.`
      },
      {
        type: 'paragraph',
        content: `ECDC was among the European agencies to pursue a mission to investigate the outbreak of HIV among people who use drugs in Greece in 2011 and served as an advising agency at several European level meetings on the Greek outbreak. They also issue guidance tools on HIV testing that were referenced by the team of lawyers in local and European courts, and co-authored a report on the reported increase of new HIV infections in Greece that criticised the Greek government for the rights’ violations presented here.`
      },
    ],
    externalLinks: [
      {
        url: `www.ecdc.europa.eu/en/about-us`,
        text: `www.ecdc.europa.eu/en/253-about-us`
      },
    ],
    sources: [],
    startDate: '2005',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.evidence, LOGICS.bestPractice, LOGICS.securitisation],
    linksWith: ['ECDC_Guidance_on_HIV', 'European_and_Greek_Governmental', 'Rapid_Risk_Assessment_on', 'European_Commission_Requests_Risk', '1st_ECDC_and_EMCDDA', '2_ECDC_Visits_to', '2nd_ECDC_and_EMCDDA', 'Joint_ECDC_FRA_EMCDDA', 'ECDC_Mission_in_Athens'],
    baseStory: baseStory,
  },

    {
    name: `TGEU Created`,
    url: `TGEU_Created`,
    body: [
      {
        type: 'paragraph',
        content: `Transgender Europe (TGEU) “is a member-based organisation created in 2005. Since then, TGEU has kept growing and established itself as a legitimate voice for the trans community in Europe and Central Asia with 112 member organisations in 44 different countries. Today, TGEU has an office in Berlin, Germany, as well as a team of 10 members of staff and a Steering Committee.” Based on the status of the association, its purpose is: “(1) To work for the application of the human rights of transgender people in Europe, their social and legal equality, and to work towards greater respect for transgender people; (2) to work towards the promotion of equality for all genders and the improvement of transgender persons’ social integration; (3) to promote the support of transgender persons in the health care system, especially the improvement of their access to healthcare; (4) to give advice, information and support on trans-related questions, particularly to transgender persons and their families in need of support from others due to their physical, mental or psychological condition or because they are in need of financial support; (5) The promotion of education, especially by trainings raising awareness regarding transgender issues, informing the public on the diversity of transgender lives and the representation of transgender persons’ interests in public debates in order to reduce prejudices and bring discriminations to an end; (6) As well the promotion of an international spirit and tolerance especially among transgender persons.”`
      },
      {
        type: 'paragraph',
        content: `TGEU was among several transnational non-governmental and activist groups to publicly criticise the forced testing and arrests of women in Athens in 2012. `
      },
    ],
    externalLinks: [
      {
        url: `www.tgeu.org/about-us/`,
        text: `www.tgeu.org/about-us/`
      },
    ],
    sources: [],
    startDate: '2005',
    endDate: '',
    logics: [LOGICS.dissent, LOGICS.socialJustice, LOGICS.evidence, LOGICS.bestPractice, LOGICS.humanRights, LOGICS.deCriminalisation],
    linksWith: ['Transnational_NGOs_and_Activist'],
    baseStory: baseStory,
  },

  {
    name: `CSF on HIV Created`,
    url: `CSF_on_HIV_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“The EU Civil Society Forum on HIV/AIDS is an informal advisory body established in 2005 by the European Commission to facilitate the participation of NGOs and networks, including those representing People Living with HIV/AIDS, in European policy development and implementation as well as to exchange information.” “The Forum includes about 40 organizations from all over Europe. It acts as an informal advisory body to the European Think Tank on HIV/AIDS... The CSF has been pro-actively involved in several Commission policies on HIV/AIDS.” More information is available on the linked website.
`
      },
      {
        type: 'paragraph',
        content: `At the time of the events, the European Commission’s Civil Society Forum (CSF) on HIV/AIDS was co-chaired by AIDS Action Europe (AAE) and European AIDS Treatment Group (EATG). A discussion occurred at one of their meetings about the forced testing and arrests of the women at the heart of this story, and a decision was taken to write letters of concern to various European Commissioners. The CSF also participated in related meetings and country missions to Greece organised by European-level health governing bodies. In 2017, the focus of the Civil Society Forum expanded to include Hepatitis and Tuberculosis, and the co-chairs now also include the Eurasian Harm Reduction Association (EHA), Correlation: European Harm Reduction Network, and Global Health Advocates (GHA).`
      },
    ],
    externalLinks: [
      {
        url: `https://www.aidsactioneurope.org/en/civil-society-forum`,
        text: `https://www.aidsactioneurope.org/en/civil-society-forum`
      },
    ],
    sources: [],
    startDate: '2005/09/05',
    endDate: '',
    logics: [LOGICS.collaborativeGovernance, LOGICS.publicHealth, LOGICS.evidence, LOGICS.bestPractice, LOGICS.dissent],
    linksWith: ['EATG_Created', 'AIDS_Action_Europe_Created', 'European_Commission_Requests_Risk', 'Situation_in_Greece_Discussed', '2_ECDC_Visits_to'],
    baseStory: baseStory,
  },

  {
    name: `Group of Lawyers for the Rights of Migrants and Refugees Created`,
    url: `Group_of_Lawyers_for`,
    body: [
      {
        type: 'paragraph',
        content: `The Group of Lawyers for the Rights of Migrants and Refugees was founded in 2006 in Athens, Greece. It offers pro-bono legal support and advice for refugees and migrants on a weekly basis, and primarily takes on cases involving rights violations in relation to migration, detention and asylum. An English-language website of the group is available through the accompanying link.`
      },
      {
        type: 'paragraph',
        content: `The group provided legal support to eighteen of the women forcibly tested and arrested in 2012. It represented all eighteen of these women in local and national courts; it represented five of them and four organisations in a case brought against the police, the KEELPNO and the Ministry of Health; and it brought three cases to the European Court of Human Rights in response to the events presented here. Representatives from the group were also among those who participated in regular meetings to develop an organised response to the events as they unfolded, visited women in the police station right after their arrests, and took part in weekly prison visits. They were among the organisations featured in a documentary that was made on the events, and also contributed to the development of, and discussion following, a theater play on the events.`
      },
    ],
    externalLinks: [
      {
        url: `www.omadadikigorwnenglish.blogspot.com/`,
        text: `www.omadadikigorwnenglish.blogspot.com/`
      },
    ],
    sources: [],
    startDate: '2006',
    endDate: '',
    logics: [LOGICS.humanitarianism, LOGICS.publicHealth, LOGICS.humanRights, LOGICS.citizenship, LOGICS.evidence, LOGICS.socialJustice, LOGICS.bestPractice, LOGICS.dissent],
    linksWith: ['Inter-Organisational_Coalition_with_Weekly', 'Protests_in_Front_of', 'Coalition_Members_Visit_Arrested', 'Lawsuit_Filed_Against_Public', '3_Cases_Submitted_to', 'Demonstrations_against_Provision', 'Ruins_Premiere', 'Lawyers_Secure_Acquittals_and', 'Women_from_Earth_Performance'],
    baseStory: baseStory,
  },


  {
    name: `SWAN Created`,
    url: `SWAN_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“The Sex Workers’ Rights Advocacy Network (SWAN) is a sex worker-led regional network in Central and Eastern Europe and Central Asia that advocates for the human rights of female, male and transgender sex workers. SWAN was founded in 2006 and was officially registered as the SWAN Foundation in January of 2012. SWAN is a regional network of sex worker-led organisations and their allies that works to create societies in Central-Eastern Europe and Central Asia where: sex work is depenalized and decriminalized, sex workers can live and work free from violence, stigma and discrimination; sex workers are empowered and actively engaged in issues that directly affect their lives and health.” For more information, visit the accompanying link to the network’s website.
`
      },
      {
        type: 'paragraph',
        content: `SWAN was one of the transnational sex workers’ rights networks to sign a statement condemning the Greek government for the violations of the rights of those women arrested and forcibly tested in 2012. SWAN representatives also participated in the workshop on Greek sex work policy that took place in May 2017.`
      },
    ],
    externalLinks: [
      {
        url: `www.swannet.org/`,
        text: `www.swannet.org/`
      },
    ],
    sources: [],
    startDate: '2006',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.dissent, LOGICS.evidence, LOGICS.bestPractice, LOGICS.deCriminalisation],
    linksWith: ['Transnational_NGOs_and_Activist', 'Conference_on_Greek_Sex'],
    baseStory: baseStory,
  },

{
    name: `First Documented Greek Conviction of HIV Transmission`,
    url: `First_Documented_Greek_Conviction_of`,
    body: [
      {
        type: 'paragraph',
        content: `In 2007, a man living within HIV was accused of intentionally causing grievous bodily harm following unprotected sex with two women in Greece, one of whom became infected with the virus. He was the first person in Greece to be convicted for transmitting the virus. Evidence from the case demonstrated that he presented both women with falsified negative HIV test results, thereby deliberately misleading them, and he refused to use condoms while engaging in sexual intercourse with them.`
      },
      {
        type: 'paragraph',
        content: `As reported by interviewees from the Group of Lawyers for the Rights of Migrants and Refugees who reviewed the case, “there were witnesses, there was a real criminal proceedings where the rights of the defendant were respected” - unlike in the 2012 case at the heart of this story. In their legal arguments, the group of lawyers relied on this case and differentiated it from the cases involving the women presented here.`
      },
    ],
    sources: [],
    externalLinks: [],
    startDate: '2007',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.citizenship, LOGICS.publicHealth, LOGICS.securitisation, LOGICS.evidence],
    linksWith: ['Lawsuit_Filed_Against_Public', '3_Cases_Submitted_to','Lawyers_Secure_Acquittals_and'],
    baseStory: baseStory,
  },

   {
    name: `FRA Created`,
    url: `FRA_Created`,
    body: [
      {
        type: 'paragraph',
        content: `Established in 2007 and based in Vienna, “The European Union Agency for Fundamental Rights (FRA) is the EU’s centre of fundamental rights expertise. It is one of the EU’s decentralised agencies... The Agency helps to ensure that the fundamental rights of people living in the EU are protected… It does this by: collecting pertinent and timely data and information; sharing evidence-based insights and advice with policy- and decision-makers; raising rights awareness and promotes fundamental rights through cutting-edge communications; engaging with a wide array of diverse stakeholders from the local to international level with targeted assistance and in-depth knowledge that is the hallmark of Europe’s centre of fundamental rights expertise, FRA.” For more information on the Agency, visit their website linked below.`
      },
      {
        type: 'paragraph',
        content: `Following the outbreak of HIV among people who use drugs, the Fundamental Rights Agency was one of the European bodies engaged in the technical mission to Greece that was requested by the European Commission in 2012. Together with other European institutions participating in this mission, the FRA co-authored a report urging for the investigation of the arrests and forced testing of women in Greece in 2012. `
      },
    ],
    externalLinks: [
      {
        url: `www.fra.europa.eu/en`,
        text: `www.fra.europa.eu/en`
      },
    ],
    sources: [],
    startDate: '2007/02/15',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.evidence],
    linksWith: ['2_ECDC_Visits_to', 'European_Commission_Requests_Risk', 'Joint_ECDC_FRA_EMCDDA'],
    baseStory: baseStory,
  },

  {
    name: `UNAIDS Policy Brief on Criminalisation of HIV Transmission`,
    url: `UNAIDS_Policy_Brief_on`,
    body: [
      {
        type: 'paragraph',
        content: `In 2008, Joint United Nations Programme on HIV/AIDS has published its first policy brief criticising governmental policies criminalising unintentional HIV transmission and exposure. It reads: “In some countries, criminal law is being applied to those who transmit or expose others to HIV infection. There are no data indicating that the broad application of criminal law to HIV transmission will achieve either criminal justice or prevent HIV transmission. Rather, such application risks undermining public health and human rights. Because of these concerns, UNAIDS urges governments to limit criminalization to cases of intentional transmission i.e. where a person knows his or her HIV positive status, acts with the intention to transmit HIV, and does in fact transmit it. In other instances, the application of criminal law should be rejected by legislators, prosecutors and judges. In particular, criminal law should not be applied to cases where there is no significant risk of transmission or where the person: did not know that s/he was HIV positive; did not understand how HIV is transmitted;disclosed his or her HIV-positive status to the person at risk (or honestly believed the other person was aware of his/her status through some other means); did not disclose his or her HIV-positive status because of fear of violence or other serious negative consequences; took reasonable measures to reduce risk of transmission, such as practising safer sex through using a condom or other precautions to avoid higher risk acts; or previously agreed on a level of mutually acceptable risk with the other person.” (UNAIDS 2008: 1) The full Brief is available through the accompanying link.`
      },
      {
        type: 'paragraph',
        content: `Together with the UNAIDS Guidance Note on the Criminalisation of HIV, which was published in 2013 and expanded on this brief, the group of lawyers relied on this policy brief in their defence of the women in the local courts. It was also referenced in the claims brought to the Greek justice system against the public authorities involved in the forced testing and arrests, and in the cases brought to the European Court of Human Rights against the Greek government.`
      },
    ],
    externalLinks: [
      {
        url: `www.unaids.org/sites/default/files/media_asset/jc1601_policy_brief_criminalization_long_en.pdf`,
        text: `www.unaids.org/sites/default/files/media_asset/jc1601_policy_brief_criminalization_long_en.pdf`
      },
    ],
    sources: [],
    startDate: '2008',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.deCriminalisation, LOGICS.publicHealth, LOGICS.evidence, LOGICS.bestPractice],
    linksWith: ['UNAIDS_Comes_into_Operation', 'UNAIDS_Press_Statement_on', 'UNAIDS_Guidance_Note_on_2012', 'Lawsuit_Filed_Against_Public', 'Lawyers_Secure_Acquittals_and', '3_Cases_Submitted_to'],
    baseStory: baseStory,
  },

{
    name: `Strategic Plan on Drugs 2008-2012`,
    url: `Strategic_Plan_on_Drugs`,
    body: [
      {
        type: 'paragraph',
        content: `“In 2008, the Strategic Plan on Drugs 2008-2012 was published, which originally moved in the right direction despite its shortcomings, by presenting all the then existing stakeholders in addressing the issue of drugs, the lines of design and intervention, the organizations in charge of each action, a timetable for implementation and budget. Whether the distribution of work among lines of action and organizations is proper or not, is an important issue that ought to be discussed. However, the most important issue concerns its implementation and evaluation. The Strategic Plan 2008-2012 seems to have been another attempt among the various national strategic plans prepared by the then Ministry of Health, which lacked actual implementation though and, of course, were not accompanied by any publication of activities or by an evaluation.” (Page 8 of Marianella Kloka’s 2014 article in the series “Drug Policy Dialogue in South East Europe” entitled “The HIV epidemic among injecting drug users in Greece during the economic crisis”).`
      },
      {
        type: 'paragraph',
        content: `The poor implementation and monitoring of this plan was identified by our interviewees as a factor contributing to the documented outbreak of HIV among people who use drugs in 2011, which provided a backdrop for the case in question.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2008',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.securitisation, LOGICS.collaborativeGovernance],
    linksWith: ['Documented_HIV_Outbreak_Among', 'Inter-Ministerial_National_Plan_for'],
    baseStory: baseStory,
  },

 {
    name: `Joint Guide on HIV for Persons who Inject Drugs`,
    url: `Joint_Guide_on_HIV`,
    body: [
      {
        type: 'paragraph',
        content: `“This document provides technical guidance to countries on setting ambitious, but  achievable national targets for scaling up towards universal access to HIV/AIDS prevention, treatment and care for injecting drug users (IDUs). This document has been developed collaboratively by three United Nations (UN) agencies (the World Health Organization [WHO], United Nations Office on Drugs and Crime [UNODC] and Joint United Nations Programme on HIV/AIDS [UNAIDS]) and international experts in the field. It builds on previous UNODC and UNAIDS guidelines and adheres to the principles therein. It serves to provide more consistent methods of measuring and comparing countries’ progress towards national targets to scale up comprehensive programmes for universal access to prevention, treatment, care and support for HIV/AIDS by 2010. These aims are based upon the 2006 Political Declaration on HIV/AIDS at which countries committed to scale up towards universal access, and the  earlier Declaration of Commitment on  HIV/AIDS. The UNAIDS Secretariat  and its cosponsors supported the launch of this broader effort with more specific operational guidance to countries.” The guide is available for download through the accompanying link.`
      },
      {
        type: 'paragraph',
        content: `During our interviews, interlocutors referenced this guide as presenting the best practices that were not respected with regards to the specificity of harm reduction services including, for example, the recommended number of clean needles and syringes to be distributed per person who uses drugs per year. Interviewees believed that this failure to abide by best practices contributed to the outbreak of HIV infections among people who use drugs in Greece in 2011.`
      },
    ],
    externalLinks: [
      {
        url: ` www.unaids.org/sites/default/files/sub_landing/idu_target_setting_guide_en.pdf`,
        text: ` www.unaids.org/sites/default/files/sub_landing/idu_target_setting_guide_en.pdf`
      },
    ],
    sources: [],
    startDate: '2009',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.bestPractice, LOGICS.publicHealth, LOGICS.evidence],
    linksWith: ['Documented_HIV_Outbreak_Among'],
    baseStory: baseStory,
  },

{
    name: `Positive Voice Created`,
    url: `Positive_voice_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“Positive Voice is the Association of People Living with HIV in Greece. The Association was created in 2009 and its goal is to defend the rights of people living with HIV, to deal with the spread of HIV/AIDS, as well as the restriction of its social and economic consequences in Greece… The backbone of the Union’s actions consists of elements like the amount of visibility of the people living with HIV, the spread of the relevant information in order to raise awareness to the general population, the claim of rights of seropositive people towards the state and the creation of working relationships with partners from both Greece and abroad. For this purpose Positive Voice has long created a position for advocacy and communication thus investing in that position.” Central methods include: the empowerment of people living with HIV, the provision of non-clinical prevention, education and testing for bloodborne conditions, and outreach to persons in prisons, men who have sex with men, people who inject drugs, and, most recently through the newly developed Red Umbrella Athens project, also to sex workers. The accompanying link provides additional information on the organisation as presented through a European Union website.`
      },
      {
        type: 'paragraph',
        content: `Positive Voice was one of the key actors involved in responding to the forced testing and arrests of the women at the heart of this story, especially by advocating for the case at the European level through their director of the time, who was co-chair of EATG and on the European Commission's Civil Society Forum for HIV/AIDS. Positive Voice was included in the network of organisations charged with distributing information under the Inter-Ministerial Plan for Combating Addictions that was developed to respond to the documented HIV outbreak among people who use drugs.`
      },
    ],
    externalLinks: [
      {
        url: `https://europa.eu/youth/volunteering/organisation/921789740_lt`,
        text: `https://europa.eu/youth/volunteering/organisation/921789740_lt`
      },
    ],
    sources: [],
    startDate: '2009',
    endDate: '',
    logics: [LOGICS.humanitarianism, LOGICS.publicHealth, LOGICS.collaborativeGovernance, LOGICS.mutualHelp],
    linksWith: ['EATG_Created', 'CSF_on_HIV_Created', 'Inter-Organisational_Coalition_with_Weekly', 'Protests_in_Front_of', 'Coalition_Members_Visit_Arrested', 'Lawsuit_Filed_Against_Public', '3_Cases_Submitted_to', 'Demonstrations_against_Provision', 'Transnational_NGOs_and_Activist', 'Ruins_Premiere', 'Conference_on_Greek_Sex', 'Red_Umbrella_Athens_Created'],
    baseStory: baseStory,
  },

  {
    name: `Greek Economic Crisis`,
    url: `Greek_Economic_Crisis`,
    body: [
      {
        type: 'paragraph',
        content: `The financial crisis and subsequent political turmoil were regularly referenced in interviews as central factors that produced the conditions enabling the events from this story to occur. “The global economic crisis has affected the Greek economy with unprecedented severity, making Greece an important test of the relationship between socioeconomic determinants and a population’s well-being. Suicide and homicide mortality rates among men increased by 22.7% and 27.6%, respectively, between 2007 and 2009, and mental disorders, substance abuse, and infectious disease morbidity showed deteriorating trends during 2010 and 2011. Utilization of public inpatient and primary care services rose by 6.2% and 21.9%, respectively, between 2010 and 2011, while the Ministry of Health’s total expenditures fell by 23.7% between 2009 and 2011. In a time of economic turmoil, rising health care needs and increasing demand for public services collide with austerity and privatization policies, exposing Greece’s population health to further risks.” (extracted from Elias Kondilis et. al article ‘Economic Crisis, Restrictive Policies, and the Population’s Health and Health Care: The Greek Case’ published in 2013). `
      },
      {
        type: 'paragraph',
        content: `While there was general agreement that the economic crisis contributed to the increase in both drug use and sex work in Greece, it was also reported that the Minister of Health at the time, Andreas Loverdos, took advantage of the fears and uncertainties experienced by persons living in Greece by constructing another type of threat and producing easily targetable “others” as the source of this uncertainty. Some also felt that the crisis was wrongly used to justify a reduction in harm reduction services.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2009/08/01',
    endDate: '2018/08/20',
    logics: [],
    linksWith: ['2009_Greek_Legislative_Election', 'Documented_HIV_Outbreak_Among', 'UNGASS_Statement_by_Greek', 'Ministerial_Decree_39a_Published', '2012_Greek_Legislative_Election', 'Amendment_to_Greek_Immigration'],
    baseStory: baseStory,
  },


  {
    name: `2009 Greek Legislative Election`,
    url: `2009_Greek_Legislative_Election`,
    body: [
      {
        type: 'paragraph',
        content: `With the Greek financial crisis intensifying, the election of October 2009 resulted in a coalition of three parties, each of whom took hold of a different ministry. George Papandreou of the PASOK became the Prime Minister of Greece and had liberal views on sex work and drugs but he made little headway in both realms of policy and was forced to resign in 2011. Andreas Loverdos became the Minister of Health and Social Security - the position in which he made the UNGASS speech and subsequent Ministerial Decree that sparked this case.`
      },
      ],
    externalLinks: [],
    sources: [],
    startDate: '2009/10/04',
    endDate: '',
    logics: [],
    linksWith: ['Greek_Economic_Crisis', 'Change_to_Greek_Sex', 'European_and_Greek_Governmental', 'UNGASS_Statement_by_Greek', 'Ministerial_Decree_39a_Published'],
    baseStory: baseStory,
  },

{
    name: `Publication of Photos of Persons Facing Criminal Charges`,
    url: `Publication_of_Photos_of`,
    body: [
      {
        type: 'paragraph',
        content: `The Convention for the Protection of Human Rights and Fundamental Freedoms, better known as the European Convention on Human Rights, was opened for signature in Rome on 4 November 1950 and came into force in 1953. It was the first instrument to give effect to certain of the rights stated in the Universal Declaration of Human Rights and make them binding. Since its adoption in 1950, the Convention has been amended a number of times and supplemented with many rights in addition to those set forth in the original text. The full convention is available to view through the link accompanying this entry. `
      },
      {
        type: 'paragraph',
        content: `In 2013, three cases emerging from the events presented here were brought to the European Court of Human Rights (ECtHR) by a group of lawyers, and are currently awaiting decisions. The articles alleged to have been violated in these cases include: Articles 3 (Prohibition of torture, or inhuman or degrading  treatment or punishment), 5 (Right to liberty and security), 8 (Right to respect for private and family life) and 13 (Right to an effective remedy).`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2010',
    endDate: '',
    logics: [LOGICS.securitisation, LOGICS.deCriminalisation],
    linksWith: ['First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Research_on_Public_Response', 'Lawyers_Secure_Acquittals_and'],
    baseStory: baseStory,
  },

  {
    name: `Change to Greek Sex Work Law`,
    url: `Change_to_Greek_Sex`,
    body: [
      {
        type: 'paragraph',
        content: `In 2010, under the government of Georgios Papandreou from the Panhellenic Socialist Movement (PASOK), the legal framework criminalising sex work was modified to reduce the penalty faced for practicing sex work unlawfully. Evidencing what was described as a more “humanitarian” approach to sex work policy, one interviewee understood this shift to reflect Papandreou’s desired policy for dealing with drug use as well, even if shifts reflecting this approach never came into fruition due to his early resignation in November 2011.`
      },
          ],
    sources: [],
    startDate: '2010',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.humanitarianism],
    linksWith: ['Law_Passed_Legalising_Sex', 'Conference_on_Greek_Sex', 'Ministerial_Decree_39a_Published'],
    baseStory: baseStory,
  },

{
    name: `Global Commission on HIV and the Law Created`,
    url: `Global_Commission_on_HIV_2010`,
    body: [
      {
        type: 'paragraph',
        content: `“The Global Commission on HIV and the Law was launched in June 2010 by UNDP [United Nations Development Found - A.D., T.S.] on behalf of the UNAIDS [Joint United Nations Programme on HIV/AIDS - A.D., T.S.] family to provide global leadership on HIV-related legal and human rights issues by analysing what is known about the interactions between the legal environments, human rights and HIV; fostering evidence-informed public dialogue on the need for rights-based law and policy in the context of HIV; and identifying clear and actionable recommendations with a concrete plan for follow-up.” For more information on the Commission, visit their website linked below.`
      },
      {
        type: 'paragraph',
        content: `In their report “Risks, Rights and Health,” which focused on the intersections of criminal law and HIV globally, the Global Commission on HIV and the Law criticised Greece for the forced testing and arrests of women in Athens in 2012.`
      },
    ],
    externalLinks: [
      {
        url: `www.hivlawcommission.org/`,
        text: `www.hivlawcommission.org/`
      },
    ],
    sources: [],
    startDate: '2010/06/01',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.evidence, LOGICS.bestPractice, LOGICS.deCriminalisation ],
    linksWith: ['Global_Commission_on_HIV_2012', 'UNAIDS_Press_Statement_on',],
    baseStory: baseStory,
  },
  
{
    name: `HIV Justice Network Created`,
    url: `HIV_Justice_Network_Created`,
    body: [
      {
        type: 'paragraph',
        content: `“The HIV Justice Network is a global information and advocacy hub for individuals and organisations working to end the inappropriate use of the criminal law to regulate and punish people living with HIV. The HIV Justice Network’s mission is to collate, create and disseminate information and resources enabling individuals and communities to effectively advocate against inappropriate criminal prosecutions for HIV non-disclosure, potential or perceived exposure and transmission. HIV Justice Network was launched the HIV Justice Network (under its former name HIV Action – the HIV Anti-Criminalisation Network) at the satellite meeting ‘Criminalisation of HIV Exposure and Transmission: Global Extent, Impact and The Way Forward’ prior to the International AIDS Conference in Vienna in July 2010.” For more information on the network, visit the accompanying link.`
      },
      {
        type: 'paragraph',
        content: `The HIV Justice Network was an organisation that extensively published in English on the Greek case and shared updates on the unfolding of events.`
      },
    ],
    externalLinks: [
      {
        url: `www.hivjustice.net/site/about/`,
        text: `www.hivjustice.net/site/about/`
      },
    ],
    sources: [],
    startDate: '2010/07/18',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.socialJustice, LOGICS.dissent, LOGICS.evidence, LOGICS.bestPractice, LOGICS.deCriminalisation],
    linksWith: ['Workshop_on_Greek_Justice'],
    baseStory: baseStory,
  },

{
    name: `ECDC Guidance on HIV testing`,
    url: `ECDC_Guidance_on_HIV`,
    body: [
      {
        type: 'paragraph',
        content: `In November 2010, the European Centre for Disease Control (ECDC) published a guidance report on HIV testing entitled “HIV testing: increasing uptake and effectiveness in the European Union”, which was in effect at the time of the core events of this story. The guidelines read: “It is recognised that the countries of Europe currently vary widely in their political and social approaches to HIV but to ensure that a national HIV testing strategy takes an ethical  approach based on human rights, countries need to adhere to the following principles. As far as possible, these principles are based on evidence, but in some cases they are aspirational and have their basis in accepted best practice and expert consensus. HIV testing should be voluntary, confidential and undertaken with informed consent. A national HIV testing strategy must primarily serve the needs of those who are infected and as yet undiagnosed. People must be able to choose to test for their own benefit rather than be coerced or compelled, even where this would be deemed to be in the interests of the wider public health. Their decision to test must be based on informed consent. Confidentiality is a fundamental principle of all healthcare and is of particular importance to HIV testing. Fear of a breach of confidentiality will deter individuals from seeking HIV testing or accepting it when it is offered. In Europe, the communities most affected by HIV are socially marginalised and this, combined with HIV-related stigma, can create a barrier to HIV testing. Services therefore need to be designed in such a way that members of those communities can come forward without fear of reprisal or blame. This is best achieved by making HIV testing available in a wide range of settings, both medical and non-medical, delivered by appropriately trained and competent staff. There should be clear referral pathways to, and support from, HIV specialist services.” (ECDC 2010: 2-3) The full guidance report is available through the accompanying link.`
      },
      {
        type: 'paragraph',
        content: `Together with UNAIDS recommendations on criminalisation of HIV, the group of lawyers relied on this HIV testing guide in their defence of the women in the local courts to argue that the Greek government and the implicated public organisations and civil servants failed to abide by these minimum European guidelines in the forced testing and arrests of women who tested positive for HIV in Athens in 2012. It was also referenced in the claims brought to the Greek justice system against the public authorities involved in these events, and in the related cases brought to the European Court of Human Rights against the Greek government.`
      },
    ],
    externalLinks: [
      {
        url: `www.ecdc.europa.eu/en/publications-data/public-health-guidance-hiv-testing-increasing-uptake-and-effectiveness-european`,
        text: `www.ecdc.europa.eu/en/publications-data/public-health-guidance-hiv-testing-increasing-uptake-and-effectiveness-european`
      },
    ],
    sources: [],
    startDate: '2010/11/30',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.bestPractice, LOGICS.evidence, LOGICS.publicHealth],
    linksWith: ['Greek_HIV_Testing_Guidelines', 'UNAIDS_Guidance_Note_on_2012', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Transnational_NGOs_and_Activist', 'UNAIDS_Press_Statement_on'],
    baseStory: baseStory,
  },

  {
    name: `European and Greek Governmental Initiatives on Health Screening of Migrants`,
    url: `European_and_Greek_Governmental`,
    body: [
      {
        type: 'paragraph',
        content: `“Upon request from the Greek Ministry of Health and Social Solidarity [Andreas Loverdos - A.D., T.S.], a joint ECDC/WHO Regional Office for Europe mission was undertaken to Greece to assess the situation at the Greek–Turkish border. The objective of the mission was to assist Greek health authorities in assessing the public health risks related to the increased migration and to communicable diseases in particular.” “One of the aims of the mission was to evaluate the implementation of the EU funded project: ‘Implementation of healthcare and psychosocial support activities for third country nationals that may require international protection in the area of Evros, Greece’ initiated in March 2011 (end closed in July 2011).” As suggested by some of our interviewees, Loverdos may have also requested the visit to legitimise his upcoming policies, which came to allow for the forced testing of undocumented migrants and other overlapping communities by indicating that migrants constitute a public health threat in Greece and ultimately to all of Europe. `
      },
      {
        type: 'paragraph',
        content: `As per a discussion in the European Parliament, for example, the Greek Minister for Health and Social Solidarity, Andreas Loverdos, wrote in April 2011 “to the European Regional Office of the World Health Organisation (WHO) to request assistance in managing the risks posed to public health by illegal immigration. ‘Greece is the gateway for thousands of clandestine immigrants seeking a better standard of living in EU countries,’ says the Minister in his letter, emphasising that ‘it is clear that this significant danger recognises no borders and, if it is not dealt with effectively, may potentially affect many European countries.’”`
      },
      {
        type: 'paragraph',
        content: `However, rather than justifying Loverdos concerns, the report from the ECDC mission to Greece stated: “[t]he main recommendation is to urgently improve the very poor humanitarian conditions, primarily related to the massive overcrowding and the poor hygiene in the detention centres. These conditions significantly influence the risk for communicable disease outbreaks.” Simultaneously, the ECDC mission report encouraged the Greek government to introduce measures to surveil migrants’ health conditions: “[t]o ensure that the current early warning component of the surveillance of communicable diseases of migrants is strengthened, standardised reporting of selected clinical syndromes using case definitions should be considered”. Several interviewees suggested that this recommendation might have contributed to a subsequent amendment to the immigration law per presidential decree: On 11 of April, the immigration law provision, law 4075/11.04.2012, amended article 13 of Presidential Decree 114/2010 on the “establishment of a single procedure for granting the status of refugee or of beneficiary of subsidiary protection to aliens or to stateless persons in conformity with Council Directive 2005/85/EC on minimum standards on procedures in Member States for granting and withdrawing refugee status (Law 326/13.12.2005)” allowing for health screening of undocumented migrants.`
      },
    ],
    externalLinks: [
      {
        url: `http://www.europarl.europa.eu/sides/getDoc.do?pubRef=-//EP//TEXT+WQ+E-2011-003569+0+DOC+XML+V0//EN&language=EN`,
        text: `http://www.europarl.europa.eu/sides/getDoc.do?pubRef=-//EP//TEXT+WQ+E-2011-003569+0+DOC+XML+V0//EN&language=EN`
      },
      {
        url: `www.euro.who.int/__data/assets/pdf_file/0012/144012/Greece_mission_rep_2011.pdf`,
        text: `www.euro.who.int/__data/assets/pdf_file/0012/144012/Greece_mission_rep_2011.pdf`
      },
    ],
    sources: [],
    startDate: '2011/03/01',
    endDate: '2011/07/31',
    logics: [LOGICS.publicHealth, LOGICS.securitisation, LOGICS.bestPractice, LOGICS.evidence],
    linksWith: ['WHO_Europe_Created', 'KEELPNO_Created', 'ECDC_Created', '2012_Greek_Legislative_Election', 'UNGASS_Statement_by_Greek', 'Ministerial_Decree_39a_Published', 'Amendment_to_Greek_Immigration'],
    baseStory: baseStory,
  },


  {
    name: `Documented HIV Outbreak Among People Who Use Drugs`,
    url: `Documented_HIV_Outbreak_Among`,
    body: [
      {
        type: 'paragraph',
        content: `“During the first days of June 2011, the HCDCP sent an invitation for a special meeting in the operational offices of the National Centre for Health Operations (Greek acronym: EKEPI), in light of an unprecedented increase of HIV diagnosis among IDUs (Intravenous Drug Users) - for the first time during the epidemiological surveillance period until the end of May 2011. During that meeting, the HCDCP informed all the directors of the country's Infectious Diseases Units, along with directors of AIDS Reference Centres, as well as the leadership of the Organisation against Drugs (Greek acronym: OKANA) and the NGOs operating in the field of HIV. ‘We are facing a new epidemiological phenomenon and everyone's assistance and effort will be indispensable,’ according to the then member of the Management Board of the HCDCP and now director of the Infectious Diseases Units of the Hospital RED CROSS.” (Kloka 2014, 1) “The first annual epidemiological assessment of the situation after the first outbreak of the epidemic among IDUs, showed an annual increase of positive HIV diagnoses in people who inject drugs by almost 1500% in 2011.” (ibid. 2) `
      },
      {
        type: 'paragraph',
        content: `In interviews, reported causes for the outbreak included inadequate outreach and needle exchange programs, which were explained by state actors in relation to the economic crisis, but criticised by NGO representatives and activists as failing to abide by the established strategic plan and the recommended and economically achievable best practice standards. This documented outbreak provoked a series of meetings with European governing bodies to evaluate and advise on the situation, and may have contributed to the subsequent Minister's speech at the UNGASS meeting and decree even as this data did not seem to inform the content of either. It ultimately led to the creation of a program designed to test people who use drugs for HIV with their consent, and then refer them to institutions of care. The documented outbreak was a reference point in a workshop on Greek legal structures and HIV, in a film about the events recounted here, and may have been a factor that contributed to the formation of the first organisation of people who use drugs in Greece.`
      },
    ],
    externalLinks: [
      {
        url: `www.eurosurveillance.org/content/10.2807/ese.16.36.19962-en`,
        text: `www.eurosurveillance.org/content/10.2807/ese.16.36.19962-en`
      },
    ],
    sources: [],
    startDate: '2011/06/01',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.evidence, LOGICS.securitisation],
    linksWith: ['KEELPNO_Created', 'OKANA_Created', 'Positive_voice_Created', 'PRAKSIS_Created', 'Centre_for_Life_Created', 'Greek_Economic_Crisis', 'Strategic_Plan_on_Drugs', 'Joint_Guide_on_HIV', 'Rapid_Risk_Assessment_on', '1st_ECDC_and_EMCDDA', 'European_Commission_Requests_Risk', '2_ECDC_Visits_to', '2nd_ECDC_and_EMCDDA', 'ECDC_Mission_in_Athens', 'UNGASS_Statement_by_Greek', 'Ministerial_Decree_39a_Published', 'ARISTOTLE_Commenced', 'Workshop_on_Greek_Justice', 'Legislation_and_HIVAIDS', 'Ruins_Premiere', 'PeNUPS_Created'],
    baseStory: baseStory,
  },
  {
    name: `UNGASS Statement by Greek Minister of Health`,
    url: `UNGASS_Statement_by_Greek`,
    body: [
      {
        type: 'paragraph',
        content: `In a statement at the sixty-fifth session of the General Assembly of the UN, High Level Meeting on the comprehensive review of the progress achieved in realizing the Declaration of Commitment on HIV/AIDS and the Political Declaration on HIV/AIDS (UNGASS) in New York City (USA), Andreas Loverdos, Greek Minister of Health and Social Solidarity, suggests that women from Sub-Saharan Africa who have been brought to Greece by sex traffickers are at the root of the HIV/AIDS epidemic in the country: “Efforts in Greece against AIDS have led us to some remarkable results over the past thirty years. Our basic objective was to ensure access to public health services. Currently, all people in need can receive medical and hospital treatment, even if they lack the means for it, even if they are poor, uninsured, financial or illegal immigrants. Another priority of ours was to protect human rights and promote actions against discrimination. Through campaigns in schools, the army, prisons and elsewhere, through blood safety controls we seek to strengthen prevention.” “our main concern is the scourge of human trafficking. We had a significant increase of recorded AIDS infections last year. Many of these infections concern women from the sub-Saharan Africa, who have been brought to the country illegally and they were forced to work as prostitutes.” `
      },
      {
        type: 'paragraph',
        content: `In interviews, public health practitioners and advocates working on the ground in the field of HIV/AIDS in Greece reported that these claims were not at all supported by existing epidemiological data, and suggested that political interests were motivating the statement rather than concerns about public health and security.`
      },
    ],
    externalLinks: [
      {
        url: `http://www.un.org/en/ga/aidsmeeting2011/greece.shtml`,
        text: `http://www.un.org/en/ga/aidsmeeting2011/greece.shtml`
      },
      {
        url: `http://webtv.un.org/media/watch/high-level-meeting-on-aids-92nd-plenary-meeting-9-june-2011-am/5246760839001/?term=&sort=popular#player`,
        text: `http://webtv.un.org/media/watch/high-level-meeting-on-aids-92nd-plenary-meeting-9-june-2011-am/5246760839001/?term=&sort=popular#player`
      },
      {
        url: `www.youtube.com/watch?v=NQTwpF_YmaY`,
        text: `www.youtube.com/watch?v=NQTwpF_YmaY`
      },
    ],
    sources: [],
    startDate: '2011/06/08',
    endDate: '2011/06/10',
    logics: [LOGICS.securitisation, LOGICS.publicHealth, LOGICS.humanitarianism],
    linksWith: ['KEELPNO_Created', 'European_and_Greek_Governmental', 'Documented_HIV_Outbreak_Among', 'Ministerial_Decree_39a_Published', 'Amendment_to_Greek_Immigration', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', '2012_Greek_Legislative_Election', 'Operation_Xenios_Zeus'],
    baseStory: baseStory,
  },

  {
    name: `Rapid Risk Assessment on HIV Requested by European Commission `,
    url: `Rapid_Risk_Assessment_on`,
    body: [
      {
        type: 'paragraph',
        content: `“In November 2011, the European Commission requested ECDC and EMCDDA to carry out a rapid risk assessment on the situation of HIV among people who inject drugs in the EU/EEA. This rapid risk assessment confirmed the significant increase in HIV case reports among people who inject drugs in Greece and identified a temporal association with low levels of HIV prevention coverage. The rapid risk assessment recommended an increased focus on prevention programmes, including needle and syringe programmes and opioid substitution treatment, combined with enhanced testing and treatment.” (ECDC Athens May 2012, 2) “It is important to note that all reports that ensued the visits of the European institutions, namely ECDC, EMCDDA and WHO-EUROPE, made particular reference to coordination issues, in which they found a large deficit. Special emphasis is given, whenever is possible, to the assumption of political responsibility at every level (the engagement of the local government and several Ministries -with the exception of the Ministry of Health- is not strong). Emphasis is also given the importance of harm reduction interventions in prison, as the number of people who are in prison for offenses connected to drug use reaches 50% of the total prison population.” (Kloka 2014, 7-8) “A risk assessment performed in November 2011 by the European Centre for Disease Prevention and Control (ECDC) and the European Monitoring Centre on Drugs and Drug Addiction (EMCDDA) documented an increase in newly detected HIV cases among people who inject drugs in Greece and Romania.” (EMCDDA 2012, Agenda from 2nd joint expert meeting in Lisbon) Report from risk assessment is available in link.`
      },
      ],
    externalLinks: [
      {
        url: `www.ecdc.europa.eu/sites/portal/files/media/en/publications/Publications/120112_TER_Joint-EMCDDA-and-ECDC-rapid-risk-assessment-HIV-IDU.pdf`,
        text: `www.ecdc.europa.eu/sites/portal/files/media/en/publications/Publications/120112_TER_Joint-EMCDDA-and-ECDC-rapid-risk-assessment-HIV-IDU.pdf`
      },
    ],
    sources: [],
    startDate: '2011/11/29',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.evidence, LOGICS.bestPractice, LOGICS.securitisation],
    linksWith: ['EMCDDA_Created', 'ECDC_Created', 'WHO_Europe_Created', 'Documented_HIV_Outbreak_Among', '2_ECDC_Visits_to'],
    baseStory: baseStory,
  },

  {
    name: `Inter-Ministerial National Plan for Combating Addictions`,
    url: `Inter-Ministerial_National_Plan_for`,
    body: [
      {
        type: 'paragraph',
        content: `“In December 2011, the Inter-Ministerial Commission for the Coordination of the Combat against Addictions (Greek acronym: DESKE) - consisted of representatives from the ministries involved and from specialized agencies in the field of addictions (OKANA, KATHEA, 18ANO, Psychiatric Hospital of Thessaloniki, National Centre of Documentation and Information on Drugs)- completed the Biennial National Plan for Combating Addictions 2011-2012 (Greek acronym: ESKE), which was submitted to the Prime Minister for approval in January 2011. A key provision was included in this National Plan, according to which OKANA should receive financing from the Ministry of Health in order to create, inter alia, new Substitution Treatment Units.” (Kloka 2014, 6) “Initial Distribution Network: HCDCP and NGOs (Doctors of the World, Positive Voice, Centre for Life, PR.A.K.S.I.S.), as well as  of workers and volunteers in steretwork, with the aim of ensuring the distribution of material to active IDUs in the centre of Athens.” OKANA “sent a request to the Ministry of Health and eventually received funding, in order to...create and prepare a distribution network with the participation of the HCDCP and NGOs (DOCTORS OF THE WORLD, POSITIVE VOICE, CENTRE FOR LIFE, PR.A.K.S.I.S.), as well as of workers and volunteers in streetwork...Streetwork officially began in February 2012. Almost at the same period, the HCDCP withdrew from the partnership, although its logo had been printed on the package, and went on to create its own sanitary material package. The reasons for this withdrawal have still not been explained by the board or management of the organisation.” (ibid. 2) “The implementation of the plan coincided with the increase in HIV diagnoses among injecting drug users in 2011 (several diagnoses were perhaps recorded during the examinations that drug users were subjected to upon their admission to substitution programs). The creation of these new units resulted in the abolition of waiting lists across the country; more specifically, in Attica, where the largest volume of demand was to be found, waiting time was reduced from 7.5 years to 42 months. The above mentioned situation is described with great clarity in the biennial OKANA Assessment Report on the 2010-2012 Activities, published in March 2012.” (ibid., 6) Through this plan, KEELPNO outreach workers were sent into the streets to conduct HIV tests in the same vans that were used to forcibly test women in April and May of 2012.`
      },
    ],
    externalLinks: [
      {
        url: `www.okana.gr/2012-02-03-13-20-56/entupo-yliko-ekdoseis`,
        text: `www.okana.gr/2012-02-03-13-20-56/entupo-yliko-ekdoseis`
      },
    ],
    sources: [],
    startDate: '2011/12/01',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.bestPractice, LOGICS.evidence],
    linksWith: ['PRAKSIS_Created', 'KEELPNO_Created', 'OKANA_Created', 'Centre_for_Life_Created', 'Positive_voice_Created', 'KETHEA_Created', '18_ANO_Created', 'Rapid_Risk_Assessment_on', 'Ongoing_Forced_HIV_Testing'],
    baseStory: baseStory,
  },


  {
    name: `1st ECDC and EMCDDA Joint Expert Meeting`,
    url: `1st_ECDC_and_EMCDDA`,
    body: [
      {
        type: 'paragraph',
        content: `Subsequent to the increase in reported HIV infections among people who use drugs in Greece and the UNGASS statement by the Greek Minister of Health implying that migrant women who were victims of sex trafficking are at the root of the HIV/AIDS epidemic in the country, a first of two joint meetings took place between the European Center for Disease Control (ECDC), the European Monitoring Center for Drugs and Drug Addiction (EMCDDA) and local organisation working in the field of HIV/AIDS in and outside of Greece. The agenda from the meeting, available through the link accompanying this entry, informed: “In order to share most recent information on developments and best practice experiences on monitoring and responding to the risk of HIV among people who inject drugs, the ECDC, together with the EMCDDA, organised an expert meeting in March 2012 entitled ‘Detecting and responding to outbreaks of HIV among people who inject drugs: Best practices in HIV prevention and control’ in Tallinn, Estonia, attended by national HIV surveillance and prevention contact points as well as representatives of national drug monitoring focal points.” (EMCDDA 2012)`
      },
      {
        type: 'paragraph',
        content: `The Organisation Against Drugs, OKANA, which works closely with the Greek government on issues related to drug use, presented the following on the planned Greek response to the recorded HIV outbreak among people who use drugs: “scale up OST (opening 34 new units); expand NSP [needle and syringe programmes - A.D., T.S.], mainly through street outreach; condom distribution; and HIV testing of all IDUs in treatment and mobilising voluntary testing. Recommended next steps as developed by small working groups: expand syringe provision and OST [Opioid Substitution Treatment - A.D., T.S.], enhance HIV surveillance; increase behavioural surveillance; active participation of IDUs in prevention and response.” (EMCDDA 2012: 4-5; 9)`
      },
      {
        type: 'paragraph',
        content: `Contradicting assertions made by the Minister of Health at the UNGASS meeting and somewhat anticipating the subsequent ministerial decree and forced testing and arrests of women in Greece, the report includes the following statement: “in Greece, immigrants are implicated in the outbreak, but only compromise 15% of HIV cases notified. In all settings, there may be an overlap between IDU and sex work, but this is not well documented in any setting.” (EMCDDA 2012: 8)`
      },
    ],
        externalLinks: [
      {
        url: `www.ecdc.europa.eu/sites/portal/files/media/en/publications/Publications/MER-IDU-outbreaks.pdf`,
        text: `www.ecdc.europa.eu/sites/portal/files/media/en/publications/Publications/MER-IDU-outbreaks.pdf`
      },
    ],
    sources: [],
    startDate: '2012/03/29',
    endDate: '2012/03/30',
    logics: [LOGICS.publicHealth, LOGICS.bestPractice, LOGICS.securitisation, LOGICS.evidence],
    linksWith: ['Documented_HIV_Outbreak_Among', 'ARISTOTLE_Commenced', '2nd_ECDC_and_EMCDDA'],
    baseStory: baseStory,
  },
  
{
    name: `UNAIDS Guidance Note on HIV and Sex Work`,
    url: `UNAIDS_Guidance_Note_on_2012`,
    body: [
      {
        type: 'paragraph',
        content: `In April of 2012, the United Nations Joint Programme on HIV/AIDS (UNAIDS) published an updated version of a Guidance Note on HIV and Sex Work, which had been first published in 2008. At least two excerpts from this note anticipate the events that were to unfold in Greece in the coming months: “Many countries criminalise HIV transmission and exposure. These laws are often unevenly applied, but sex workers are particularly vulnerable to charges under these laws, which in many cases do not correspond to UN guidelines. In addition, male and transgender sex workers are disproportionately vulnerable to criminal charges in places where sex between men and transgender are criminalised.” (UNAIDS 2012: 4)  “States should move away from criminalising sex work or activities associated with it. Decriminalisation of sex work should include removing criminal laws and penalties for purchase and sale of sex, management of sex workers and brothels, and other activities related to sex work. To the degree that states retain non-criminal administrative law or regulations concerning sex work, these should be applied in ways that do not violate sex workers’ rights or dignity and that ensure their enjoyment of due process of law.” (UNAIDS 2012: 6) The entire guidance note is available through the accompanying link.
`
      },
      ],
    externalLinks: [
      {
        url: `www.unaids.org/en/resources/documents/2012/20120402_UNAIDS-guidance-note-HIV-sex-work`,
        text: `www.unaids.org/en/resources/documents/2012/20120402_UNAIDS-guidance-note-HIV-sex-work`
      },
    ],
    sources: [],  
    startDate: '2012/04/02',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.bestPractice, LOGICS.deCriminalisation, LOGICS.humanRights, LOGICS.evidence],
    linksWith: ['UNAIDS_Comes_into_Operation', 'UNAIDS_Press_Statement_on', 'transnational_NGOs_and_Activist_statements'],
    baseStory: baseStory,
  },

  {
    name: `Ministerial Decree 39a Published`,
    url: `Ministerial_Decree_39a_Published`,
    body: [
      {
        type: 'paragraph',
        content: `"In early April 2012,... the then Minister for Health and Social Solidarity, Andreas Loverdos signed a health provision with which he attempted to answer the need identified by the HCDCP and the then Secretary of Health, in order to shield the country from infectious diseases.” (Kloka 2014, 3) Regulation No. GY/39A (1) obligated health examinations, isolation and treatment for diseases of public health importance, explicitly including HIV/AIDS, (2) enabled police involvement in forced testing for those diseases, and (3) targeted people who use intravenous drugs, sex workers, undocumented migrants from so-called “high-prevalence countries”, and people living below the “minimum standards” of hygiene.`
      },
      ],
    externalLinks: [
      {
        url: `http://isx.gr/sites/default/files/ceb1cf80-_ceb3cf8539ceb1_cebbcebfceb9cebccf8eceb4ceb7_cf86ceb5ceba_1002_2-4-2012_6.pdf`,
        text: `http://isx.gr/sites/default/files/ceb1cf80-_ceb3cf8539ceb1_cebbcebfceb9cebccf8eceb4ceb7_cf86ceb5ceba_1002_2-4-2012_6.pdf`
      },
    ],
    sources: [],
    startDate: '2012/04/02',
    endDate: '',
    logics: [LOGICS.securitisation, LOGICS.publicHealth],
    linksWith: ['Documented_HIV_Outbreak_Among', 'UNGASS_Statement_by_Greek', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Inter-Organisational_Coalition_with_Weekly', 'Forced_Testing_and_Arrest', 'Operation_Xenios_Zeus', 'Joint_Letter_to_UN'],
    baseStory: baseStory,
  },


  {
    name: `Amendment to Greek Immigration Law`,
    url: `Amendment_to_Greek_Immigration`,
    body: [
      {
        type: 'paragraph',
        content: `In April 2012, an amendment to the Greek immigration law enabled the detention of irregularised migrants who were perceived to be a threat to public health and safety. Interviewees grasped this policy shift together with the provision 39a as a coordinated strategy to bolster fear within Greek society, and to create a division between good Greek citizens and threatening “others.” In the context of the pre-election period and the financial crisis, this was thought to have created an impression that these government pursuits of perceived threats from within Greek society were necessary, and to have helped garner support for the governing socialist party.`
      },
      {
        type: 'paragraph',
        content: `In one book, the international security scholar Nick Vaughan-Williams argues that these policy initiatives were accompanied by and supported with a particular political discourse: “In April 2012 Andreas Loverdos, then Greek Minister of Health and Social Solidarity, described ‘irregular’ migrant populations living in Athens as a ‘hygiene bomb’ and announced the introduction of mandatory health examinations for all new arrivals” (Pro Asyl 2012a, 11). Legislative change in Greece under Amendment 4075/11.04.2012 has allowed for the detention of ‘irregular’ migrants if they are deemed by immigration authorities to pose a threat to public health security for a period of up to ninety days or a maximum of 180 pending deportation (Open Access Now! 2013). Individuals may be detained on the grounds that they are suspected of suffering from an infectious disease, belonging to groups with infectious diseases, or living in conditions that do not meet the minimum standards of hygiene (Human Rights Watch 2012). On arrest, ‘irregular’ migrants are required to undergo a series of medical tests involving both a questionnaire about their medical histories and an invasive clinical examination.” (Vaughan-Williams 2015: 94)`
      },
    ],
    sources: [],
    startDate: '2012/04/11',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.deCriminalisation, LOGICS.securitisation],
    linksWith: ['European_and_Greek_Governmental', 'UNGASS_Statement_by_Greek', 'Ministerial_Decree_39a_Published', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Joint_Letter_to_UN', 'Operation_Xenios_Zeus', 'UN_Letter_to_Greek'],
    baseStory: baseStory,
  },

{
    name: `European Commission Requests Risk Assessment from ECDC`,
    url: `European_Commission_Requests_Risk`,
    body: [
      {
        type: 'paragraph',
        content: `Following from the “rapid” risk assessment from November 2011: “On 20 April 2012, the European Commission requested ECDC to perform a risk assessment on the HIV situation in Greece. According to the request, this assessment should focus on all priority groups affected by HIV in order to draw a complete picture of the HIV epidemic in Greece." (ECDC 2012, 2)`
      },
      ],
    sources: [],  
    startDate: '2012/04/20',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.securitisation,  LOGICS.evidence,  LOGICS.bestPractice],
    linksWith: ['ECDC_Created', 'AIDS_Action_Europe_Created', 'CSF_on_HIV_Created', 'Documented_HIV_Outbreak_Among', 'Positive_voice_Created', 'Rapid_Risk_Assessment_on', '1st_ECDC_and_EMCDDA', '2_ECDC_Visits_to', '2nd_ECDC_and_EMCDDA'],
    baseStory: baseStory,
  },

    {
    name: `First Forced Testing and Arrest in “Illegal Brothel”`,
    url: `First_Forced_Testing_and_Arrest_in`,
    body: [
      {
        type: 'paragraph',
        content: `A single woman, originally from Russia, was coerced into being tested for HIV in a venue for selling sex that was not legalised. In our interview, she recounted that she tested positive, was incarcerated, and that her name, photograph, and country of origin were posted onto the website of the local police. Former clients were encouraged to test for HIV. Representatives of KEELPNO were reported to have entered the premises to conduct the testing.`
      },
    ],
    externalLinks: [
      {
      },
    ],
    sources: [],
    startDate: '2012/04/27',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['Law_Passed_Legalising_Sex', 'Greek_HIV_Testing_Guidelines', 'Publication_of_Photos_of', 'UNGASS_Statement_by_Greek', 'Ministerial_Decree_39a_Published', 'Amendment_to_Greek_Immigration', 'Ongoing_Forced_HIV_Testing', 'Lawyers_Secure_Acquittals_and'],
    baseStory: baseStory,
}, 

  {
    name: `Ongoing Forced HIV Testing in Omonia`,
    url: `Ongoing_Forced_HIV_Testing`,
    body: [
      {
        type: 'paragraph',
        content: `After the first testings and arrest in the brothel, forced testing and arrests took place in a particular neighborhood in Athens where sex work and drug use is common. Below are excerpts from interviews with various persons familiar with the situation, including one with one of the arrested women`
      },
      ],
    sources: [],
    startDate: '2012/04/28',
    endDate: '2012/07/31',
    logics: [LOGICS.deCriminalisation, LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['Law_Passed_Legalising_Sex', 'Greek_HIV_Testing_Guidelines', 'Publication_of_Photos_of', 'UNGASS_Statement_by_Greek', 'Ministerial_Decree_39a_Published', 'Amendment_to_Greek_Immigration', 'First_Forced_Testing_and_Arrest_in', 'Forced_Testing_and_Arrest', 'Lawyers_Secure_Acquittals_and'],
    baseStory: baseStory,
  },

{
    name: `Inter-Organisational Coalition with Weekly Meetings`,
    url: `Inter-Organisational_Coalition_with_Weekly`,
    body: [
      {
        type: 'paragraph',
        content: `Soon after the forced testing and arrests, activists and representatives from across organisations began to meet in the evenings at the offices of PR.A.K.S.I.S. to respond to the unfolding events. The first meetings were attended by around 35 people, mostly by representatives of civil society organisations working in the fields of HIV, drug use, harm reduction and migration. A daily report was published by the inter-organisation committee to coordinate the response and distribute responsibilities.`
      },
         ],
    sources: [],  
    startDate: '2012/04/30',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.dissent, LOGICS.humanitarianism, LOGICS.socialJustice, LOGICS.mutualHelp, LOGICS.citizenship],
    linksWith: ['Centre_for_Life_Created', 'ACT_UP_Hellas_Created', 'PRAKSIS_Created', 'Group_of_Lawyers_for', 'Positive_Voice_Created', 'First_Forced_Testing', 'Ongoing_Forced_HIV_Testing', 'Protests_in_Front_of', 'Weekly_Prison_Visits_by', '3_Cases_Submitted_to', 'Lawyers_Secure_Acquittals_and'],
    baseStory: baseStory,
  },

  {
    name: `Coalition Members Visit Arrested Women`,
    url: `Coalition_Members_Visit_Arrested`,
    body: [
      {
        type: 'paragraph',
        content: `The day after the arrests, on the April 30th 2012, representatives of various organisations, including psychologist from PR.A.K.S.I.S., lawyer from the Group of Lawyers for Migrants and Refugees and two social workers from Kethea, visited the arrested women in prison to provide them with support and gather data about the arrests. Those visits continued in subsequent days.`
      },
    ],
    sources: [],
    startDate: '2012/04/30',
    endDate: '',
    logics: [LOGICS.dissent, LOGICS.humanitarianism, LOGICS.socialJustice, LOGICS.citizenship],
    linksWith: ['KETHEA_Created', 'PRAKSIS_Created', 'First_Forced_Testing_and', 'Ongoing_Forced_HIV_Testing', 'Protests_in_Front_of', 'Weekly_Prison_Visits_by', 'Lawyers_Secure_Acquittals_and', '3_Cases_Submitted_to', '5_Women_Win_Compensation' ],
    baseStory: baseStory,
  },

  {
    name: `Protests in Front of Courts and Minister of Health`,
    url: `Protests_in_Front_of`,
    body: [
      {
        type: 'paragraph',
        content: `Immediately following the first arrests, local activists organised multiple protests in from the of the courts and the office of the Minister of Health. Below are two interview excerpts describing the formation and make-up of the demonstrations.`
      },
        ],
    externalLinks: [
      {
        url: `https://www.echr.coe.int/Documents/Convention_ENG.pdf`,
        text: `https://www.echr.coe.int/Documents/Convention_ENG.pdf`
      },
    ],
    sources: [],
    startDate: '2012/05/01',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.dissent, LOGICS.citizenship, LOGICS.humanitarianism],
    linksWith: ['Centre_for_Life_Created', 'ACT_UP_Hellas_Created', 'PRAKSIS_Created', 'Group_of_Lawyers_for', 'Positive_Voice_Created', 'First_Forced_Testing_and', 'Ongoing_Forced_HIV_Testing'],
    baseStory: baseStory,
  },

{
    name: `2012 Greek Legislative Election`,
    url: `2012_Greek_Legislative_Election`,
    body: [
      {
        type: 'paragraph',
        content: `In interviews, many respondents believed that the forced testing and arrests were timed by the Greek Minister of Health, Andreas Loverdos, to consolidate support leading up to the parliamentary elections that took place in the first week of May 2012. Numerous interviewees were convinced that publicity around the 2012 events helped to secure Loverdos’ success in what one person described as an “election game”. Excerpts from exemplary interviews follow.`
      },
      ],
    sources: [],  
    startDate: '2012/05/06',
    endDate: '',
    logics: [],
    linksWith: ['Greek_Economic_Crisis', 'UNGASS_Statement_by_Greek', 'Ministerial_Decree_39a_Published', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing'],
    baseStory: baseStory,
  },


  {
    name: `Transnational NGOs and Activist Groups Issue Statements`,
    url: `transnational_NGOs_and_Activist_statements`,
    body: [
      {
        type: 'paragraph',
        content: `Already within the first days and weeks, several transnational NGO and activist groups responded to the forced testing and arrests by publishing critical statements. Below are excerpts from several of those statements, and links to the full statements are provided as well.`
      },
      {
        type: 'paragraph',
        content: `The first networks to respond, on 07 May 2012, were from the international sex worker rights community with a joint letter that was signed by the International Committee on the Rights of Sex Workers in Europe (ICRSE), the European Network for HIV/STI Prevention and Health Promotion among Migrant Sex Workers (TAMPEP International Foundation), the Sex Worker’s Rights Advocacy Network of Central and Eastern Europe and Central Asia (SWAN), and the Global Network of Sex Work Project (NSWP).  The letter read: “Forcible testing is a violation of bodily integrity and autonomy. The UN’s expert health agencies have affirmed that HIV testing should only be done with informed consent, meaning testing must be both informed and voluntary; furthermore, testing should be accompanied by pre- and post-test counselling and the confidentiality of test results should be guaranteed…The European Court of Human Rights Judgment (18 October 2011, nr. 16188/07) in the case of a French woman classified as a “prostitute” for five years in Geneva police database, has sentenced that it was a violation of article 8, the right to respect for private life.“ the Court concluded that the storage in the police records of allegedly false data concerning her private life had breached Ms Khelili’s right to respect for her private life and considered that the retention of the word “prostitute” for years was neither justified nor necessary in a democratic society.”`
      },
      {
        type: 'paragraph',
        content: `Simultaneously, the international sex workers’ rights community developed an online petition to denounce the rights violations faced by sex workers in Greece. The petition, which was tited “Stop the forced testing and outing of sex workers”, read: “These practices are a violation of sex workers’ human rights, their right of freedom, privacy, and the confidentiality on their health condition. They are discriminatory and in complete contradiction with all international and EU treaties that Greece has ratified. They are archaic since they are only a new version of the Contagious Diseases Acts implemented during Victorian Britain. They are also completely counterproductive in terms of HIV prevention and the opposite of all recommendations made in the fight against HIV. The scapegoating of sex workers is not going to stop new infections, but only worsen the stigma and discriminations against sex workers and people living with HIV. The mandatory testing and the outing of sex workers living with HIV is only contributing to more distrust with medical institutions and sex workers avoiding access to medical care, when they should instead feel encouraged and respected. If sex workers ignore their status and avoid medical care, they won’t be able to access treatments which can improve their health and reduce the risk of new infection. The new climate of paranoia and fear will only discourage people to get tested and to disclose their status. It will force sex workers living with HIV to hide and to accept unsafe sex to avoid suspicion, and it will encourage clients to ask for unprotected sex thinking that sex workers are tested for their own safety.”`
      },
      {
        type: 'paragraph',
        content: `Additionally. the European Network for HIV/STI Prevention and Health Promotion among Migrant Sex Workers (TAMPEP International Foundation) issued a statement that pointed ut to the “[v]iolation of human rights and breaches of medical confidentiality by the Greek Police, Health Authorities and Media. Human and Civil Rights of Sex Workers in Greece are being ignored and violated. As part of a Government authorised crackdown on hundreds of unlicensed brothels around Greece, sex workers are being arrested, submitted to compulsory HIV testing, facing criminal charges without recourse to due process, and being publically identified in the media.” `
      },
      {
        type: 'paragraph',
        content: `On 11 May 2012, Transgender Europe (TGEU) published a press statement with the title “End Human Rights Violations Against Sex Workers in Greece”. It read: “Transgender Europe (TGEU) is highly worried about the recent systematic human rights violations against sex workers in Greece…Many trans women are sex workers and TGEU has been informed that trans sex workers have also been subjected to the screening and exposure. Further similar screenings are announced for the next couple of weeks…Forcefully subjecting a person to HIV testing, violates their bodily integrity, autonomy and free choice of health care. We strongly condemn the intentional violation of privacy by the police in its intend to “punish” those living with HIV by publishing their identities. This is not only contradictory to any public health standards but poses a direct threat to the individuals’ safety and security. Greek authorities have violated European and international human rights standards they have signed up to, including ICCPR (Article 17), ICESCR (Article 12) and ECHR (Article 8) which all guarantee respect for private life, prohibit arbitrary interference to a person’s privacy and obliges states to respect human dignity. Moreover, Greece signed up to the Council of Europe’s Committee of Ministers LGBT recommendation (2010(5)) to promote equality and non-discrimination of all transgender persons in Greece.”  `
      },
      {
        type: 'paragraph',
        content: `Four days later, on May 17th 2012, a joint press statement by the Global Network of People living with HIV (GNP+) and the Global Network of Sex Work Projects (NSWP) was published to denounce the violation of human rights and breaches of medical confidentiality by the Greek police and health authorities. Signatories of the press release stated: “As part of a Government authorised crackdown on hundreds of unlicensed brothels around Greece, sex workers are being arrested, submitted to forced HIV testing and facing criminal charges without recourse to due process, as well as being publically identified in the media. As a result of these actions women are to face prosecution on charges of intentionally causing grievous bodily harm merely because they are HIV positive. There is no proof of exposure or transmission to others nor is it clear that any of these women knew their HIV status prior to this test. They are facing further charges for misdemeanours related to alleged illegal prostitution. These actions of the Greek Police and the Ministry of Health and KEELPNO violate fundamental human rights. They also contravene fundamental public health principles of informed consent and voluntary access to services.”`
      },
      {
        type: 'paragraph',
        content: `Also on 17 May 2012, Amnesty International issued a press release entitled “Greece Must Stop the Criminalization and Stigmatisation of Alleged Sex Workers Found to be HIV Positive”. The document read: “Amnesty International believes that the measures adopted by the Greek authorities are completely misguided and ineffective in terms of the stated policy goals, and that they will result in the further stigmatization of individuals who engage in sex work and of persons living with HIV. Punitive approaches to regulating sex work have proven ineffective in reducing HIV transmission among people who provide sexual services and their clients. Further, publication of names, photographs and positive HIV status is a fundamental breach of confidentiality and exposes sex workers to stigma and violence. Such measures are likely to result in further discrimination and could lead to reduced access to the health services they need.”`
      },
    ],
    externalLinks: [
      {
        url: `https://tampep.eu/violation-of-human-rights-and-breaches-of-medical-confidentiality-by-the-greek-p/`,
        text: `https://tampep.eu/violation-of-human-rights-and-breaches-of-medical-confidentiality-by-the-greek-p/`
      },
      {
        url: `http://www.change.org/petitions/to-mr-lucas-papademos-prime-minister-of-greece-stop-the-forced-testing-and-outing-of-sex-workers`,
        text: `http://www.change.org/petitions/to-mr-lucas-papademos-prime-minister-of-greece-stop-the-forced-testing-and-outing-of-sex-workers`
      },
      {
        url: `www.tampep.eu/human-rights-and-compulsory-testing-disclosure-of-a-persons-health-statusfor/`,
        text: `www.tampep.eu/human-rights-and-compulsory-testing-disclosure-of-a-persons-health-statusfor/`
      },
      {
        url: `www.tgeu.org/tgeu-demands-end-human-rights-violations-against-sex-workers-in-greece/`,
        text: `www.tgeu.org/tgeu-demands-end-human-rights-violations-against-sex-workers-in-greece/`
      },
      {
        url: `www.old.nswp.org/news-story/press-statement-greece-nswp-gnp/`,
        text: `www.old.nswp.org/news-story/press-statement-greece-nswp-gnp`
      },
      {
        url: `www.change.org/petitions/to-mr-lucas-papademos-prime-minister-of-greece-stop-the-forced-testing-and-outing-of-sex-workers`,
        text: `www.change.org/petitions/to-mr-lucas-papademos-prime-minister-of-greece-stop-the-forced-testing-and-outing-of-sex-workers`
      },
    ],
    sources: [],
    startDate: '2012/05/07',
    endDate: '2012/05/17',
    logics: [LOGICS.humanRights, LOGICS.socialJustice, LOGICS.dissent, LOGICS.bestPractice],
    linksWith: ['ICRSE_Created', 'SWAN_Created', 'TAMPEP_Created', 'EATG_Created', 'NSWP_Created', 'TGEU_Created', 'GNP+_Created', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Inter-Organisational_Coalition_with_Weekly'],
    baseStory: baseStory,
  },
  
{
    name: `Weekly Prison Visits by Newly Formed Group of Feminists Begin`,
    url: `Weekly_Prison_Visits_by`,
    body: [
      {
        type: 'paragraph',
        content: `(exact start and end dates unknown) Following the initial imprisonments, a great many organisations and activists mobilised to provide the detained women with various forms of help, including psychological and emotional support, material support and legal aid. Several of the self-identified feminists formed a collective, which secured permission to visit the women in the prison ward on a weekly basis. In addition, the detained women were visited by a psychologist and social workers from PR.A.K.S.I.S. Below are excerpts from interviews about or with several of the women who visited the prisons on behalf of the group of feminists.`
      },
      ],
    externalLinks: [
    ],
    sources: [],  
    startDate: '2012/05/08',
    endDate: '',
    logics: [LOGICS.mutualHelp, LOGICS.socialJustice, LOGICS.humanitarianism],
    linksWith: ['First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Inter-Organisational_Coalition_with_Weekly'],
    baseStory: baseStory,
  },
  
{
    name: `Joint Letter to UN Special Rapporteur on Health`,
    url: `Joint_Letter_to_UN`,
    body: [
      {
        type: 'paragraph',
        content: `In May 2012, Human Rights Watch (HRW), Positive Voice and the European AIDS Treatment Group (EATG) sent a joint letter to the United Nations Special Rapporteur on Health, Anand Grover, with regards to the documented human rights violations targeting immigrants and sex workers in Greece. An excerpt from the letter read: “Human Rights Watch considers that the actions of the police, and of the Government, violate human rights protected under international law. They also are inconsistent with sound, ethical public health practice and will likely serve to undermine efforts to protect and promote public health.Detaining individuals in order to conduct forced medical procedures, including testing for HIV, violates the right to security of the person, a right guaranteed under both the International Covenant on Civil and Political Rights (Article 9) and the European Convention on Human Rights (Article 5). Forcible testing is also a violation of bodily integrity and autonomy. The UN’s expert health agencies have affirmed that HIV testing should only be done with informed consent, meaning testing must be both informed and voluntary; furthermore, testing should be accompanied by pre- and post-test counseling and the confidentiality of test results should be guaranteed. In addition, forcibly testing someone for HIV is a violation of both bodily integrity and privacy. Disclosing by press release that some of those detained by police have tested HIV-positive, which is medical information that should be held confidential, implicates all those who were detained and whose identities and photos were broadcast by the media. The disclosure exposes sex workers and others to potential violence. Such excessive invasions of privacy serve no legitimate objective.” The entire joint letter is available through the accompanying link.`
      },
      ],
    externalLinks: [
      {
        url: `www.hrw.org/news/2012/05/09/joint-letter-un-special-rapporteur-health`,
        text: `www.hrw.org/news/2012/05/09/joint-letter-un-special-rapporteur-health`
      },
    ],
    sources: [],
    startDate: '2012/05/09',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.dissent, LOGICS.publicHealth, LOGICS.bestPractice, LOGICS.socialJustice],
    linksWith: ['Positive_voice_Created', 'EATG_Created', 'HRW_Created', 'UNAIDS_Comes_into_Operation', 'UNAIDS_Policy_Brief_on', 'UNAIDS_Guidance_Note_on_2012', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Inter-Organisational_Coalition_with_Weekly'],
    baseStory: baseStory,
  },
  
{
    name: `UNAIDS Press Statement on the Greek Case`,
    url: `UNAIDS_Press_Statement_on`,
    body: [
      {
        type: 'paragraph',
        content: `Implicitly referring back to the UNAIDS guidance note on HIV and sex work published just a month prior to these events, “[t]he Joint United Nations Programme on HIV/AIDS (UNAIDS) expresses its concern over recent actions by Greek authorities involving the arrest, detention, mandatory HIV testing, publication of photographs and personal details, and pressing of criminal charges against at least 12 sex workers. There is no evidence that punitive approaches to regulating sex work are effective in reducing HIV transmission among sex workers and their clients. The initiation of criminal prosecution against sex workers living with HIV for intentional gross bodily harm raises concerns about the inappropriate application of criminal law, particularly in a context where clients have the social and economic power to insist upon condom use. In addition, publication of names, photographs and positive HIV status drive sex workers into hiding and reduces their trust in health care services. UNAIDS is further concerned by a recent amendment to immigration legislation adopted in April 2012 that appears to provide for automatic detention of migrants and asylum-seekers who have an infectious disease, or belong to a group at high risk of infection, without consideration of whether they pose an actual risk. This includes sex workers, people who inject drugs and could be applied to people living with HIV. To the degree the law assumes that people living with HIV, sex workers and people who use drugs pose a public health threat based only on their health and social status, it is overly broad and discriminatory, and represents an HIV-related restriction on entry, stay and residence.” The full press release is available for view through the accompanying link.`
      },
      ],
    externalLinks: [
      {
        url: `http://www.unaids.org/en/resources/presscentre/pressreleaseandstatementarchive/2012/may/20120510psgreece`,
        text: `http://www.unaids.org/en/resources/presscentre/pressreleaseandstatementarchive/2012/may/20120510psgreece`
      },
    ],
    sources: [],  
    startDate: '2012/05/10',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.dissent, LOGICS.publicHealth, LOGICS.bestPractice, LOGICS.socialJustice],
    linksWith: ['UNAIDS_Comes_into_Operation', 'CSF_on_HIV_Created', 'UNAIDS_Policy_Brief_on', 'UNAIDS_Guidance_Note_on_2012', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Inter-Organisational_Coalition_with_Weekly'],
    baseStory: baseStory,
  },

{
    name: `KEELPNO Internal Letter of Critique`,
    url: `KEELPNO_Internal_Letter_of`,
    body: [
      {
        type: 'paragraph',
        content: `(exact date unknown) A medical doctor who worked at KEELPNO at the time explained in an interview that an internal letter was written by KEELPNO employees criticising the involvement of KEELPNO in the events that led to the ultimate arrests, detention and charges brought against women who tested positive for HIV.`
      },
      ],
    sources: [],  
    startDate: '2012/05/11',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.dissent, LOGICS.bestPractice],
    linksWith: ['KEELPNO_Created', 'First_Forced_Testing_and_Arrest_in','Ongoing_Forced_HIV_Testing'],
    baseStory: baseStory,
  },


  {
    name: `2 ECDC Visits to Greece `,
    url: `2_ECDC_Visits_to`,
    body: [
      {
        type: 'paragraph',
        content: `“On 20 April 2012, the European Commission requested ECDC to perform a risk assessment on the HIV situation in Greece. According to the request, this assessment should focus on all priority groups affected by HIV in order to draw a complete picture of the HIV epidemic in Greece.” “[T]he European Commission was invited by the Greek health minister to participate in a high-level meeting on the impact of migration on public health as well as the recent increases in HIV infections in Greece and other EU Member States, together with ECDC, EMCDDA and the WHO Regional Office for Europe (WHO/Europe). This meeting, hosted by the Greek Ministry of Health and Social Solidarity, was scheduled for 21 June 2012, but was cancelled shortly after the completion of this mission. In order to provide well-informed input to this high-level meeting, ECDC, EMCDDA and WHO/Europe conducted this joint technical mission to Greece from 28 to 29 May 2012. The EU Agency for Fundamental Rights (FRA) was also invited to participate as an observer” (ECDC 2013, p.2). “The report, which followed a two-day visit on the 28th and 29th of May was countersigned by the three organizations mentioned above plus the FRA (Fundamental Rights Agency) that also sent a representative (thus marking the beginning of a series of ECDC visits to Greece in the context of closely following the epidemic), states, among other findings, on the particular issue of immigrants: 'Although there has been much speculation about the role of migrants and migration in HIV transmission in Greece, the epidemiological data show that: - most of those reported to be HIV-positive during the period 2006-2010 were Greek nationals.” (Kloka 2014, 4). The full report from this meeting was published in January 2013 and is available for download by clicking on the accompanying link.`
      },
      {
        type: 'paragraph',
        content: `“A second visit to Athens was carried out by ECDC on 10–12 September 2012. Both country visits included a series of meetings with participants from government agencies, academia, and non-governmental organisations (NGOs), and were facilitated by KEELPNO and OKANA, who provided open access to data and programmes” (ECDC 2012, 2).`
      },
    ],
    externalLinks: [
      {
        url: `www.ecdc.europa.eu/sites/portal/files/media/en/publications/Publications/hiv-joint-technical%20mission-HIV-in-Greece.pdf`,
        text: `www.ecdc.europa.eu/sites/portal/files/media/en/publications/Publications/hiv-joint-technical%20mission-HIV-in-Greece.pdf`
      },
    ],
    sources: [],
    startDate: '2012/05/28',
    endDate: '2012/09/12 ',
    logics: [LOGICS.publicHealth, LOGICS.evidence, LOGICS.securitisation, LOGICS.bestPractice, LOGICS.dissent],
    linksWith: ['KEELPNO_Created', 'OKANA_Created', 'ECDC_Created', 'WHO_Europe_Created', 'EMCDDA_Created', 'CSF_on_HIV_Created', 'PRAKSIS_Created', 'FRA_Created', 'TAMPEP_Created', 'Positive_voice_Created', 'ECDC_Guidance_on_HIV', 'Documented_HIV_Outbreak_Among', 'European_and_Greek_Governmental', 'Rapid_Risk_Assessment_on', '1st_ECDC_and_EMCDDA', 'European_Commission_Requests_Risk', '2nd_ECDC_Visit_to', '2nd_ECDC_and_EMCDDA', 'Joint_ECDC_FRA_EMCDDA', 'ECDC_Mission_in_Athens'],
    baseStory: baseStory,
  },

 {
    name: `Situation in Greece Discussed by the CSF on HIV/AIDS`,
    url: `Situation_in_Greece_Discussed`,
    body: [
      {
        type: 'paragraph',
        content: `During the 15th Civil Society Forum (CSF) on HIV/AIDS that took place in Luxembourg on the 4-5th of June 2012, attendees discussed the events that took place in Greece in April and May 2012. A report from the meeting informed that members of the CSF sent a “Letter to Commissioners Dalli and Reding expressing our concern with the alarming situation in Greece concerning discrimination and criminalisation of sex workers and migrants” that May. John Dalli was the European Commissioner for Health and Consumer Policy between 2010 and 2012, and Viviane Reding was the European Commissioner for Justice, Fundamental Rights and Citizenship between 2010 and 2014. According to the report, two CSF members from Greece reported on the situation at the meeting: “Nikos [Dedes] explained how the new immigration law was implemented by the Greek centre for disease control and how the law on sex work is abused to criminalise sex workers and subduing them to forced HIV-testing. The disclosing of information is currently continuing. Marianella Kloka mentioned that civil society has complained to the data protection authority. Government officials declared that the practice of disclosing information would stop but this is not the case. Prosecution is continuing.” Wolfgang Philip, representative of the Directorate-General for Health and Consumers (DG SANCO) of the European Commission, informed CFS participants that “Greece is organising a high level meeting in June on HIV and migration, with Health Ministers from neighbouring countries, ECDC, WHO, EC. ECDC was mandated to carry out a risk assessment mission in preparation of the meeting, which took place at the end of May.” and that the ‘Think Tank will look into developments in member states, starting with Greece”. As noted in the report, Yusef Azad, CSF representative from the Joint Technical Mission to Greece, added that “The EU mission report to Greece will be published mid June. ECDC cannot publish it, since this was a request from the European Commission. If it decides not to publish the report, civil society should push for it.” In the Action List from the minutes of the meeting, members of the CSF urged themselves to “Check if monitoring report on Greece is published by the EC - otherwise follow up with Commission to ensure publication” (Report of the 15th HIV/AIDS Civil Society Forum, Luxembourg, 4/5 June 2012). The report mentioned by the members of the CSF was published jointly by European Center for Disease Control, Fundamental Rights Agency, European Monitoring Center for Drugs and Drug and Addiction and World Health Organisation, Europe, in December 2012.`
      },
      ],
    externalLinks: [
      {
        url: `https://www.aidsactioneurope.org/en/civil-society-forum`,
        text: `https://www.aidsactioneurope.org/en/civil-society-forum`
      },
    ],
    sources: [],
    startDate: '2012/06/04',
    endDate: '2012/06/05',
    logics: [LOGICS.humanRights, LOGICS.collaborativeGovernance, LOGICS.dissent, LOGICS.publicHealth],
    linksWith: ['CSF_on_HIV_Created', 'WHO_Europe_Created', 'EATG_Created', 'AIDS_Action_Europe_Created', 'ECDC_Created', 'Positive_voice_Created', 'European_Commission_Requests_Risk', '2_ECDC_Visits_to', '2nd_ECDC_and_EMCDDA', 'Joint_ECDC_FRA_EMCDDA'],
    baseStory: baseStory,
  },

  {
    name: `Forced Testing and Arrest of Trans Women`,
    url: `Forced_Testing_and_Arrest`,
    body: [
      {
        type: 'paragraph',
        content: `(exact date unknown) Police raids also occurred in an area frequented by trans women, many of whom sell sex. According to our interviewees, one of the women arrested in the course of those raids was diagnosed with HIV. Unlike the other women, however, she was released upon receiving her diagnosis and was not charged with intentional grievous bodily harm or attempted bodily harm and illegal sex work.`
      },
      ],
    sources: [],
    startDate: '2012/06/06',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['Law_Passed_Legalising_Sex', 'Ministerial_Decree_39a_Published', 'KEELPNO_Created', 'Greek_HIV_Testing_Guidelines', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing'],
    baseStory: baseStory,
  },


  {
    name: `5 Women Attempt Suicide in Prison`,
    url: `Women_Attempt_Suicide`,
    body: [
      {
        type: 'paragraph',
        content: `(exact date unknown) It was repeatedly reported during interviews that women implicated in this story were exposed to harsh, unhygienic and unsupportive conditions of life in the prison. Several of the informants familiar with the events that occurred in pre-trial detention reported during interviews of at least one collective attempt at suicide. The women who were hired to clean the cells were unwilling to clean up the blood that followed from this event because they, like the majority of prison guards, were ignorant about the modes of transmission of the virus. These and other forms of stigmatisation and discrimination were a result, including the use of gloves to touch the women and the plates on which they were served. This attempt at suicide might be viewed as an act of dissent under such conditions of extremely limited autonomy and agency.`
      },
      ],
    sources: [],
    startDate: '2012/06/15',
    endDate: '',
    logics: [LOGICS.dissent],
    linksWith: ['Ongoing_Forced_HIV_Testing', 'Ministerial_Decree_39a_Published', 'Weekly_Prison_Visits_by'],
    baseStory: baseStory,
  },

  {
    name: `Lawsuit Filed Against Public Servants`,
    url: `Lawsuit_Filed_Against_Public`,
    body: [
      {
        type: 'paragraph',
        content: `In July of 2012, the group of lawyers filed a lawsuit against the police and the doctors, arresting officers, director and board of directors of KEELPNO for the violation of the rights of the women at the heart of this story. In total, five women and four NGOs (Centre for Life, Positive Voice, Act-Up and PR.A.K.S.I.S.) were involved in this suit. Having decided that the actions were justly done to protect the public health of Greece, the judges of the first and second instances, and then also of the supreme court, opted to dismiss all charges.`
      },
      ],
    externalLinks: [
      {
        url: `https://tomov.gr/en/2014/10/16/%ce%b4%ce%b9%cf%89%ce%ba%cf%8c%ce%bc%ce%b5%ce%bd%ce%b5%cf%82-%ce%bf%cf%81%ce%bf%ce%b8%ce%b5%cf%84%ce%b9%ce%ba%ce%ad%cf%82-%ce%b3%cf%85%ce%bd%ce%b1%ce%af%ce%ba%ce%b5%cf%82-%ce%ba%ce%b1%ce%bc/`,
        text: `https://tomov.gr/en/2014/10/16/%ce%b4%ce%b9%cf%89%ce%ba%cf%8c%ce%bc%ce%b5%ce%bd%ce%b5%cf%82-%ce%bf%cf%81%ce%bf%ce%b8%ce%b5%cf%84%ce%b9%ce%ba%ce%ad%cf%82-%ce%b3%cf%85%ce%bd%ce%b1%ce%af%ce%ba%ce%b5%cf%82-%ce%ba%ce%b1%ce%bc/`
      },
    ],
    sources: [],
    startDate: '2012/07/02',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.dissent, LOGICS.humanRights, LOGICS.evidence, LOGICS.citizenship, LOGICS.socialJustice],
    linksWith: ['Centre_for_Life_Created', 'ACT_UP_Hellas_Created', 'PRAKSIS_Created', 'Group_of_Lawyers_for', 'Positive_voice_Created', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Inter-Organisational_Coalition_with_Weekly', 'Coalition_Members_Visit_Arrested', 'Protests_in_Front_of', 'Weekly_Prison_Visits_by', '3_Cases_Submitted_to', 'New_KEELPNO_President'],
    baseStory: baseStory,
  },


  {
    name: `Global Commission on HIV and the Law Criticizes Greece`,
    url: `Global_Commission_on_HIV_2012`,
    body: [
      {
        type: 'paragraph',
        content: `In the based practice recommendations that were based on “18 months of extensive research, consultation, analysis and deliberation”, the Global Commission on HIV and the Law, an independent body convened by the United Nations Development Programme (UNDP) on behalf of the Joint UN Programme on HIV/AIDS (UNAIDS), criticized Greece in it’s report “Risks, Rights and Health” for subjecting sex workers to mandatory and enforced HIV testing. While calling for governments to “[d]ecriminalise private and consensual adult sexual behaviours, including same-sex sexual acts and voluntary sex work” (Global Commission on HIV and the Law 2012: 7-10), the Global Commission stressed that “[u]nfortunately, decriminalisation sometimes replaces punishment with regulation, which in its details is enforced through criminal law. Greece, Latvia and parts of Australia all have mandatory and forced medical testing, a human rights abuse and thus a form of punishment.” (ibidem: 41).`
      },
      ],
    externalLinks: [
      {
        url: `https://hivlawcommission.org/report/`,
        text: `https://hivlawcommission.org/report/`
      },
    ],
    sources: [],
    startDate: '2012/07/01',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.bestPractice, LOGICS.evidence, LOGICS.deCriminalisation],
    linksWith: ['UNAIDS_Comes_into_Operation', 'Law_Passed_Legalising_Sex', 'Global_Commission_on_HIV_2012', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing'],
    baseStory: baseStory,
  },
  
{
    name: `Operation 'Xenios Zeus'`,
    url: `Operation_Xenios_Zeus`,
    body: [
      {
        type: 'paragraph',
        content: `(exact date unknown) “In August 2012, three months after the national elections, Nikos Dendias, then Minister of Public Order and Citizen’s Protection, launched Operation ‘Xenios Zeus’. The operation, named after ancient Greek god Zeus – king of gods, patron of the stranger and God of hospitality – aimed at controlling irregular immigration. According to the minister, the operation’s twofold purpose was to ‘restore order and security’ in the centre of Athens and to ‘close the country’s borders’ to flows of lathrometanastes (illegal immigrants) from Asia and Africa . ‘Operation Xenios Zeus’ initiated document checks in the streets of Athens (and other areas of the country), during which people were stopped on the basis of racial profiling and ethnic difference, their documents were checked, several people were taken to police stations and those without residence permits were transferred to detention centres.” (Rozakou 2017: 197). `
      },
      {
        type: 'paragraph',
        content: `As per a report published on the events by Human Rights Watch: “Announcing the operation, Minister of Public Order Nikos Dendias said that: ‘[W]hole areas of Athens have become inaccessible and in these areas … delinquent behavior is booming. Drug trafficking, prostitution, trafficking of illegal goods, thefts, robberies, serious injuries, murders, and even crimes for low-value goods.… I want to clarify that victims of this unacceptable situation are first the immigrants themselves, who live in tragic conditions and are forced… to become drug traffickers, pimps, forgers, thieves … to survive. Dendias stressed that ‘We do not care about the color, ethnicity, religion of the illegals. The only criterion is the compliance with legality, with full respect for human rights....’A key tactic of Operation Xenios Zeus is the use of existing general police powers to conduct identity checks to verify the legal status of individuals presumed to be irregular migrants. While such police stops were frequent before the launch of the operation, official statistics indicate a significant intensification since the onset of the operation.” (HRW 2013: 13)`
      },
      {
        type: 'paragraph',
        content: `“The Migration and Detention Assessment Project (MIDAS) reported in 2014 that “[a] total of 65,000 were stopped from the beginning of the operation in August until 24 December 2012, out of whom only 4,128 were arrested for illegally staying in the country” (MIDAS Report 2014)`
      },
      {
        type: 'paragraph',
        content: `As suggested by one of the lawyers defending the women in court, the Operation ‘Xenious Zeus’ was the context in which two of the women facing criminal charges for intentional grievous bodily harm were tested and arrested.`
      },
    ],
    externalLinks: [
      {
        url: `www.hrw.org/report/2013/06/12/unwelcome-guests/greek-police-abuses-migrants-athens`,
        text: `www.hrw.org/report/2013/06/12/unwelcome-guests/greek-police-abuses-migrants-athens`
      },
      {
        url: `http://diana-n.iue.it:8080/bitstream/handle/1814/33431/MIDAS_REPORT_2014_10.pdf?sequence=1&isAllowed=y`,
        text: `http://diana-n.iue.it:8080/bitstream/handle/1814/33431/MIDAS_REPORT_2014_10.pdf?sequence=1&isAllowed=y`
      },
    ],
    sources: [],  
    startDate: '2012/08/01',
    endDate: '',
    logics: [LOGICS.securitisation, LOGICS.deCriminalisation, LOGICS.humanitarianism],
    linksWith: ['HRW_Created', 'European_and_Greek_Governmental', 'UNGASS_Statement_by_Greek', 'Ministerial_Decree_39a_Published', 'Amendment_to_Greek_Immigration', 'UN_Letter_to_Greek', 'Lawyers_Secure_Acquittals_and'],
    baseStory: baseStory,
  },

  {
    name: `ARISTOTLE Commenced`,
    url: `ARISTOTLE_Commenced`,
    body: [
      {
        type: 'paragraph',
        content: `(exact date unknown) Following the documented increase in reported HIV infections among people who use drugs, a research project, under the title ARISTOTLE, was initiated to better assess, monitor and work to improve the state of the epidemic among this population. One publication introduced the programme as follows: "The ARISTOTLE programme was initiated in August 2012, in collaboration with the National and Kapodestrian University of Athens and OKANA and it enjoys the support of NGOs (PR.A.K.S.I.S., POSITIVE VOICE). The aim of the programme is to intervene in communities of injecting drug users in the centre of Athens, in order to identify IDUs, to examine and refer them to the Infectious Diseases Units in case they are found HIV-positive after consensual examination. The programme is bound to be completed in five cycles. So far, the results of the first four cycles have been published. By way of illustration, ARISTOTLE has examined 3.007 individual users so far, with 523 (17.4%) having been found HIV-positive, and half of them having been diagnosed as positive for the first time. At this point, it should be noted that all users that are found HIV-positive are granted full priority on the waiting list for admission to substitution treatment units, if they wish to do so. Equally impressive were two additional findings of the first four cycles of the programme: more than 30% of IDUs who were diagnosed as HIV-positive were homeless, whereas more than 80% are co-infected with hepatitis C." (Kloka 2014, 3) `
      },
      ],
    externalLinks: [
      {
        url: `http://pag.aids2014.org/Abstracts.aspx?AID=8169`,
        text: `http://pag.aids2014.org/Abstracts.aspx?AID=8169`
      },
    ],
    sources: [],
    startDate: '2012/08/01',
    endDate: '',
    logics: [LOGICS.evidence, LOGICS.publicHealth],
    linksWith: ['OKANA_Created', 'PRAKSIS_Created', 'Positive_voice_Created', 'Documented_HIV_Outbreak_Among', 'Greek_Economic_Crisis', 'Inter-Ministerial_National_Plan_for', '1st_ECDC_and_EMCDDA'],
    baseStory: baseStory,
  },

{
    name: `UN Letter to Greek Government`,
    url: `UN_Letter_to_Greek`,
    body: [
      {
        type: 'paragraph',
        content: `On 21 August 2012, the three Special Rapporteurs at the United Nations - namely the Special Rapporteur on contemporary forms of racism, racial discrimination, xenophobia and related intolerance; Special Rapporteur on the human rights of migrants; and Special Rapporteur on the right of everyone to the enjoyment of the highest attainable standard of physical and mental health - issued a letter to the Greek Prime Minister to inquire about possible rights violation faced by migrants living with HIV in the country. This letter was likely a response to the Joint Letter to UN Special Rapporteur on Health by the European AIDS Treatment Group (EATG), Human Rights Watch (HRW) and Positive Voice. "We have the honour to address you in our capacities as Special Rapporteur on contemporary forms of racism, racial discrimination, xenophobia and related intolerance; Special Rapporteur on the human rights of migrants; and Special Rapporteur on the right of everyone to the enjoyment of the highest attainable standard of physical and mental health pursuant to Human Rights Council resolutions 15/22, 17/12, and 16/33. In this connection, we would like to bring to the attention of your Excellency’s Government information we have received regarding the increase in xenophobic and racist attacks, the entry for the first time into Parliament of the far right wing political party Golden Dawn, as well as the implementation of policy measures targeting migrants and asylum seekers in the area of health including the mandatory medical testing and administrative detention of migrants and asylum seekers based on health status. These incidents and developments illustrate a worrying general pattern of racism, racial discrimination and xenophobia against foreign nationals, migrants, asylum seekers and refugees which is emerging in Greece....It was also reported that an amendment to article 13 of Presidential Decree 114/2010 on the establishment of a single procedure for granting refugee status or subsidiary protection to aliens or to stateless persons was adopted in April 2012 (Law 4075/11.04.2012). The amendment reportedly provides for detention of migrants and asylum seekers if they represent a “danger to public health”, when they “suffer from an infectious disease”, “belong to groups vulnerable to" infectious diseases” (assessment is permissible on the basis of country of origin, status as an intravenous drug user or a sex worker), and are living in “conditions that do not meet minimum standards of hygiene”. The amendment allegedly requires mandatory health examinations and appropriate hospitalization for individuals in these categories. It was also alleged that the amendment was formally justified on grounds that high concentration of irregular migrants, particularly in Athens and other major urban centres, creates serious risks to public health considering the living conditions of migrants and the infectious diseases prevalent in their home countries...We would also like to refer to the recommendations made by the Special Rapporteur on contemporary forms of racism, racial discrimination, xenophobia and related intolerance regarding the responsibility that political leaders and political parties have in refraining from disseminating discourses that scapegoat vulnerable groups, condemning all political messages that disseminate ideas based on racial superiority or hatred and that incite racial discrimination or xenophobia, and promoting multiculturalism, tolerance, mutual understanding and respect with their societies (A/HRC/20/38)...And finally, the right to health contains both freedoms, including from interference and non-consensual medical treatment, and entitlements, including the right to a system of health protection which provides equality of opportunity for people to enjoy the highest attainable level of health (para.8).”`
      },

    ],
    externalLinks: [
      {
        url: `www.spdb.ohchr.org/hrdb/22nd/public_-_AL_Greece_21.08.12_(2.2012).pdf`,
        text: `www.spdb.ohchr.org/hrdb/22nd/public_-_AL_Greece_21.08.12_(2.2012).pdf`
      },
    ],
    sources: [],  
    startDate: '2012/08/21',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.socialJustice, LOGICS.deCriminalisation],
    linksWith: ['Joint_Letter_to_UN', 'Amendment_to_Greek_Immigration', 'European_and_Greek_Governmental', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing'],
    baseStory: baseStory,
  },

  {
    name: `2nd ECDC and EMCDDA Joint Expert Meeting`,
    url: `2nd_ECDC_and_EMCDDA`,
    body: [
      {
        type: 'paragraph',
        content: `A second joint expert meeting was organised by the ECDC and the EMCDDA to follow up on the responses to the documented increases in reported HIV infections among people who inject drugs in Greece and Romania. Representatives from several other Southern and Central European countries, where similar increases were reported, were also invited to attend. The agenda, report and individual presentations from national representatives from the conference are available for view through the accompanying link. According to the agenda, the objectives of the meeting were to: “continue information exchange between countries to support the response to the current HIV outbreaks in Greece and Romania, to prevent the acceleration of HIV infections among people who inject drugs in these and other countries and to strengthen the capacity of all participating countries to monitor and prevent HIV infections in this population. To achieve its objective, the meeting will provide a series of presentations which: (1) Review the current epidemiological situation with respect to the HIV among people who inject drugs and the potential risk for acceleration of HIV transmission due to coverage of prevention services and changing drug use patterns among people who inject drugs. (2) Share experiences in controlling outbreaks among people who inject drugs and review the opportunities and challenges with respect to: i) surveillance and monitoring; ii) harm reduction interventions; iii) drug treatment for people who inject drugs; and iv) integration of responses and collaboration between public health and drugs authorities to maximize the efficacy of prevention interventions.” (EMCDDA 2012, Agenda from meeting)`
      },
      ],
    externalLinks: [
      {
        url: `www.emcdda.europa.eu/html.cfm/index195202EN.html`,
        text: `www.emcdda.europa.eu/html.cfm/index195202EN.html`
      },
    ],
    sources: [],
    startDate: '2012/11/12',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.securitisation, LOGICS.evidence, LOGICS.bestPractice],
    linksWith: ['ECDC_Created', 'EMCDDA_Created', 'CSF_on_HIV_Created', 'OKANA_Created', 'KEELPNO_Created', 'Documented_HIV_Outbreak_Among', '1st_ECDC_and_EMCDDA', 'European_Commission_Requests_Risk', '2_ECDC_Visits_to'],
    baseStory: baseStory,
  },

  {
    name: `Ombudsman Report to Ministry of Health`,
    url: `Ombudsman_Report_to_Ministry`,
    body: [
      {
        type: 'paragraph',
        content: `"A few months later, in November 2012, the report of the Ombudsman was submitted to the Ministry of Health, in which the weaknesses of health provision 39a were listed (this was the first time that HIV was criminalized on a massive scale, through the conduction of mandatory tests at police stations and the use of a medical procedure in order to press charges against people found to be HIV-positive), together with the problems that arose by its implementation as a policy for public health protection. In his conclusions, the Ombudsman states among others that: Investigation is required as to whether the provision was preceded by reasoned opinions or recommendations by scientific bodies, which documented the risks for public health grom communicable diseases and microbial infections and indicated the application of sanitary controls in specific population groups; It is questioned whether HIV and hepatitis B and C fall into the category of infectious diseases that are dangerous to public health, given that they are mainly spread through unprotected sex or sharing needles. From the perspective of the principle of proportionality, the necessity of compulsory measures is questioned, in connection with the exhaustion of moderate measures that were implemented until then and proved ineffective in protecting public health" (Kloka 2014, 4-5). `
      },
      ],
    sources: [],
    startDate: '2012/11/01',
    endDate: '',
    logics: [LOGICS.evidence, LOGICS.publicHealth],
    linksWith: ['Ministerial_Decree_39a_Published', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Forced_Testing_and_Arrest', 'FRA_Acknowledges_Rights_Violation'],
    baseStory: baseStory,
  },


  {
    name: `Resignation of Papandreou Government`,
    url: `Resignation_of_Papandreou_Government`,
    body: [
      {
        type: 'paragraph',
        content: `“After the resignation of Papandreou government in November 2011, the government of L Papadimos was formed (November 2011 - May 2012) and elections were conducted in May 2012, although elected parties were unable to form a government; under the provisional government of Mr. Pikramenos, runoff elections were held in June 2012. The newly-formed government which comprised three parties (New Democracy, Pan-Hellenic Socialist Movement and Democratic Left) proceeded to changes in the political leadership of the Ministry of Health. The portfolio of public health changed hands and was assigned to Foteini Skopouli. The pressure coming from abroad was intensified, when international organizations and NGOs realized that this was the ideal moment to inform the new Deputy Minister of Health for the abovementioned health provision and its impact.” (Kloka 2014, 4). The subsequent government made the abolition of the Ministerial Decree 39a possible.`
      },
      ],
    sources: [],
    startDate: '2012/11/01',
    endDate: '',
    logics: [],
    linksWith: ['2009_Greek_Legislative_Election', '2012_Greek_Legislative_Election', 'Ministerial_Decree_39a_Published', 'Abolition_of_Health_Provision'],
    baseStory: baseStory,
  },
{
    name: `Research on Public Response Published by KEELPNO`,
    url: `Research_on_Public_Response`,
    body: [
      {
        type: 'paragraph',
        content: `Just following the arrests of the women and publication of several of their photos, KEELPNO commissioned a poll on the public perception of the decision to subject sex workers to mandatory HIV testing and publish photos of the arrested women on the website of the police department. Results of this research were published in December of 2012, a few days before the workshop on Greek Justice, Legislation and HIV/AIDS organised by the Positive Voice. According to the report, 80 % of respondents were in favour of this decision despite the obvious rights violations. At least one interviewee suggested that this research might have been planned well in advance of the initial testings and arrests. Others suggested that it designed to justify and legitimise the actions undertaken by KEELPNO in 2012.`
      },
      ],
    sources: [],
    startDate: '2012/11/01',
    endDate: '',
    logics: [LOGICS.evidence, LOGICS.securitisation, LOGICS.bestPractice, LOGICS.publicHealth],
    linksWith: ['KEELPNO_Created', 'Ministerial_Decree_39a_Published', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'KEELPNO_Internal_Letter_of', 'Lawsuit_Filed_Against_Public'],
    baseStory: baseStory,
  },
{
    name: `Workshop on Greek Justice, Legislation and HIV/AIDS`,
    url: `Workshop_on_Greek_Justice`,
    body: [
      {
        type: 'paragraph',
        content: `As reported by the HIV Justice Network and the Global Network of People Living with HIV (GNP+), “[i]n collaboration with AIDS Healthcare Foundation, Positive Voice held a two-day workshop entitled ‘Greek Justice, Law and HIV/AIDS’ in Athens in December 2012 attended by lawyers, prosecutors and  judges, that featured a keynote speech by The Hon. Michael Kirby, a member of the Global Commission on HIV and the Law. The meeting provided education on international human rights and legal standards relating to HIV and the criminal law." `
      },
      {
        type: 'paragraph',
        content: `In his speech, which was titled ‘Tale of Five Cities and Five Commandments’, the Honorable Michael Kirby, a former Justice of the High Court of Australia working extensively on issues around the criminalisation of HIV, referred directly to the 2012 case: “In Greece there is no needle exchange system in place. Some statistical information suggests the risks of the epidemic in Greece moving to mirror the epidemic in neighbouring countries of Eastern Europe and the former Soviet Union. In those countries the major vector for HIV is injecting drug use. There is no more efficient way to pass HIV than by direct injection into the bloodstream. The use and reuse of infected needles is highly risky in this respect. The IJUs reflect the sexuality of the majority population. It is therefore vital to nip in the bud the growth of this risky mode of transmission. Attempts to stamp out all drug use have not succeeded. Harm reduction is a much more effective and sensible option; Likewise, in Greece, sex workers are often disempowered. They are disrespected, at least in public discourse, largely because of religious and social stigma towards them. The well known event in April/May 2012, in which sex workers in Athens were arrested, photographed and had their personal data (including HIV positive findings) widely publicised, on the supposed ground of protecting public health, is a shocking and counterproductive course of conduct. It is likely to drive sex workers underground and to place them outside the reach of healthcare messages and protective strategies.” This speech was made available on the website of the Global Commission on HIV and the Law, which is accessible via the link below.`
      },
      {
        type: 'paragraph',
        content: `Following the workshop, HIV Justice Network and GNP+ included the Greek case in their 2013 report ‘Advancing HIV Justice. A Progress Report on Achievements and Challenges in Global Advocacy Against HIV Criminalisation’.`
      },
      ],
    externalLinks: [
      {
        url: `http://www.hivjustice.net/wp-content/uploads/2013/05/Advancing-HIV-Justice-June-2013.pdf`,
        text: `http://www.hivjustice.net/wp-content/uploads/2013/05/Advancing-HIV-Justice-June-2013.pdf`
      },
      {
        url: `https://hivlawcommission.org/2012/12/11/speech-by-the-hon-michael-kirby-at-the-workshop-on-greek-justice-legislation-and-hivaids-11-december-2012/`,
        text: `https://hivlawcommission.org/2012/12/11/speech-by-the-hon-michael-kirby-at-the-workshop-on-greek-justice-legislation-and-hivaids-11-december-2012/`
      },
      {
        url: `http://www.hivjustice.net/wp-content/uploads/2013/05/Advancing-HIV-Justice-June-2013.pdf`,
        text: `http://www.hivjustice.net/wp-content/uploads/2013/05/Advancing-HIV-Justice-June-2013.pdf`
      },
    ],
    startDate: '2012/12/11',
    endDate: '2012/12/12',
    logics: [LOGICS.humanRights, LOGICS.publicHealth, LOGICS.bestPractice, LOGICS.evidence, LOGICS.citizenship, LOGICS.socialJustice, LOGICS.deCriminalisation],
    linksWith: ['GNP+_Created', 'UNAIDS_Comes_into_Operation', 'Positive_voice_Created', 'Global_Commission_on_HIV_2012', 'HIV_Justice_Network_Created', 'UNAIDS_Guidance_Note_on_2012', 'Documented_HIV_Outbreak_Among', 'Ministerial_Decree_39a_Published', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'UNAIDS_Policy_Brief_on'],
    baseStory: baseStory,
  },
  
{
    name: `3 Cases Submitted to ECtHR`,
    url: `3_Cases_Submitted_to`,
    body: [
      {
        type: 'paragraph',
        content: `(exact date unknown) A total of 12 women were referred to the European Court of Human Rights based on 3 different applications from 2012 and 2013. These applications relied on Articles 3 and 8 of the European Convention of Human Rights with the arguments that: (1) the women were subjected to compulsory HIV testing whilst under withdrawal from drugs and on police premises, in disregard of the recommended HIV protocol, and (2) the women were denied adequate medical care and hygienic conditions while in detention by the General Police Directorate of Athens, which all amounted to humiliating and degrading treatment. Additionally, applications were based on Article 13 of the Convention, as the lawyers argued that the claimants did not have access to a lawfully effective remedy before a national authority, and on Article 5 of the Convention due to the unlawful detention of the implicated women. `
      },
      ],
    externalLinks: [
    ],
    startDate: '2012/12/15',
    endDate: '2013',
    logics: [LOGICS.humanRights, LOGICS.evidence, LOGICS.citizenship, LOGICS.dissent, LOGICS.socialJustice],
    linksWith: ['European_Convention_on_Human', 'Group_of_Lawyers_for', 'First_Documented_Greek_Conviction_of', 'Greek_HIV_Testing_Guidelines', 'UNAIDS_Policy_Brief_on', 'Ongoing_Forced_HIV_Testing', 'Weekly_Prison_Visits_by', 'Inter-Organisational_Coalition_with_Weekly', 'Lawsuit_Filed_Against_Public'],
    baseStory: baseStory,
  },

  {
    name: `Lawyers Secure Acquittals and the Removal of Photos`,
    url: `Lawyers_Secure_Acquittals_and`,
    body: [
      {
        type: 'paragraph',
        content: `The first trial of the women implicated in this case took place in January 2013. It was a collective trial of 3 women, none of whom were aware of their positive HIV status at the moment of the arrests, and none of whom went to rehabilitation or substitution programmes in lieu of pre-trial detention. A second trial of 5 women took place in March 2013. All of the women were accused of attempted bodily harm and the illegal provision of sexual services. All women were acquitted of these charges. In interviews, representatives of the team of lawyers explained that they relied on a legal theory known as self-endangerment, meaning that one must take responsibility for acts that might put themselves in danger, and on UNAIDS guidelines on the criminalisation of HIV transmission, which were published around the same time.`
      },
      {
        type: 'paragraph',
        content: `The single arrested woman from Ukraine was trialed alone in June 2014. She was arrested as part of the Operation “Xenious Zeus”. According to both lawyers, she was treated differently in the court because of the fact she was aware of her HIV status and carried considerable amount of condoms with her, which was considered by the police and the court as proof of her engagement in sex work. The also believed that she was treated differently because she was among the only non-Greek women on trial. She was initially sentenced for both attempted bodily harm and illegal involvement in sex work in the first and second instances. However, she was ultimately acquitted of all charges upon appeal to the Supreme Court of Greece thanks to the evidence that was laid down in the UNAIDS Guidelines, and the health booklet that was maintained by the accused, which proved that she was on effective treatment and posed only very minimal risk of transmitting the virus to her clients..`
      },
      {
        type: 'paragraph',
        content: `Three more women were acquitted on 06 December 2016. An English translation of articles from Greek news outlets provide information about the reasons for the decision to acquit: “Lawyers for two of the three women, Kostas Farmakidis and Chara Papageorgiou, called the acquittal a great victory, emphasizing that apart from establishing the women’s innocence, the court accepted that earlier testimony by Sp. Sapounas -the doctor who performed forcible tests on behalf of the Greek Centre for Disease Control/KEELPNO- was in breach of the law, and that their arrest by police officers was based on insufficient evidence. The court also made the unprecedented judgement that the women’s mugshots must be removed from websites where they have been posted since 2012 along with names, dates of birth and other personal data following original publication on the website of the Greek police. In his closing argument, the prosecutor Ioannis Panagopoulos recommended the women’s acquittal saying that the authorities responsible for the operation exceeded the limits of proportionality in the protection of public health.”`
      },
      {
        type: 'paragraph',
        content: `A group of eleven women were acquitted on Friday, 16 December 2016, although, according to reports, three of the eleven women had already died. “An Athens court on Friday exonerated 11 HIV positive women, three of whom have died, of the charge of intentionally infecting people while allegedly working as prostitutes. The prosecutor at the trial said there was no evidence to suggest the women worked as prostitutes nor that they had unprotected sex with people, with the exception of one of the defendants. The women had been arrested back in 2012 for allegedly working illegally as prostitutes and their names were publicized, causing outrage among rights groups. They were arrested after the health minister at the time, Andreas Loverdos, called for the criminalization of unprotected sex with prostitutes. The women had always maintained their innocence and people in the courtroom broke out in loud applause once the verdict was read out.”`
      },
      {
        type: 'paragraph',
        content: `The first woman to be tested and arrested in April of 2012, a migrant woman born in Russia, was the last one to be acquitted. Following her arrest, she faced criminal charges for grievous bodily harm and was subjected to pre-trial detention in Koridallos prison. She was not placed in the same ward as all of the other arrested women, and she was released after several months. She was initially convicted of attempted bodily harm in the first instance, and then later contacted the inter-organisational alliance for support. The Group of Lawyers for Undocumented Migrants and Refugees brought her case to the court of appeal where she was acquitted in 2017.`
      },
    ],
    externalLinks: [
      {
        url: `www.ruins-documentary.com/blog/three-more-hiv-positive-women-acquitted/`,
        text: `www.ruins-documentary.com/blog/three-more-hiv-positive-women-acquitted/`
      },
      {
        url: `www.ekathimerini.com/214647/article/ekathimerini/news/hiv-positive-women-finally-acquitted-of-charges `,
        text: `www.ekathimerini.com/214647/article/ekathimerini/news/hiv-positive-women-finally-acquitted-of-charges `
      },
    ],
    startDate: '2013',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.publicHealth, LOGICS.evidence, LOGICS.humanitarianism, LOGICS.dissent, LOGICS.citizenship],
    linksWith: ['Group_of_Lawyers_for', 'UNAIDS_Guidance_Note_on_2012', 'Inter-Organisational_Coalition_with_Weekly', 'Ongoing_Forced_HIV_Testing', 'Operation_Xenios_Zeus', 'PRAKSIS_Created', 'Law_Passed_Legalising_Sex', 'Change_to_Greek_Sex', 'First_Forced_Testing_and_Arrest_in', 'Ministerial_Decree_39a_Published', 'Inter-Organisational_Coalition_with_Weekly'],
    baseStory: baseStory,
  },

  {
    name: `Joint ECDC, FRA, EMCDDA and WHO Europe Report Urging Greek Investigation`,
    url: `Joint_ECDC_FRA_EMCDDA`,
    body: [
      {
        type: 'paragraph',
        content: `Following the joint technical mission to Greece in May 2012, the European Center for Disease Prevention and Control (ECDC), the Fundamental Rights Agency (FRA) of the European Union, the European Monitoring Center for Drugs and Drug Addiction (EMCDDA) and the European office of the World Health Organisation, published a report urging the Greek government to “[i]nvestigate thoroughly and promptly the recent actions taken against migrants, PWID and alleged sexworkers.” The report advised that “[f]uture policy formulation directed at populations vulnerable to HIV, like irregular immigrants, PWID, or sex workers, should always consider and mediate potential negative public health consequences." To view the full report, visit the accompanying link. `
      },
      ],
    externalLinks: [
      {
        url: `www.ecdc.europa.eu/sites/portal/files/media/en/publications/Publications/hiv-joint-technical%20mission-HIV-in-Greece.pdf`,
        text: `www.ecdc.europa.eu/sites/portal/files/media/en/publications/Publications/hiv-joint-technical%20mission-HIV-in-Greece.pdf`
      },
    ],
    startDate: '2013/01/01',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.publicHealth, LOGICS.evidence, LOGICS.dissent],
    linksWith: ['ECDC_Created', 'FRA_Created', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', '2_ECDC_Visits_to', 'Operation_Xenios_Zeus', 'Forced_Testing_and_Arrest'],
    baseStory: baseStory,
  },


  {
    name: `ECDC Mission in Athens to Control HIV Outbreak`,
    url: `ECDC_Mission_in_Athens`,
    body: [
      {
        type: 'paragraph',
        content: `According to a published concluding report from the mission, the European Centre for Disease Prevention and Control (ECDC) “conducted a mission in Athens to review the quality of needle and syringe programmes in Athens as part of controlling the HIV outbreak among people who inject drugs. ECDC produced a risk assessment of the HIV situation in Greece in 2012. The quality of needle and syringes programmes (NSP) was identified as an area for further work as activities have scaled up quickly during the previous year in response to the outbreak. A project was tendered through a negotiated procedure and Finnish THL was awarded the contract. The mission was prepared by ECDC in collaboration with the Hellenic Center for Disease Control and Prevention (KEELPNO) and the Greek Organisation Against Drugs (OKANA). It included an update of the response to the HIV outbreak, detailed discussions with various stakeholders and field observations during outreach work in the streets and squares of Athens." The entire concluding report is available through the accompanying link. `
      },
      ],
    externalLinks: [
      {
        url: `www.okana.gr/2012-01-12-13-29-02/anakoinoseis/item/download/117_6b5175b605a24b8abf7f32671e7f1a21`,
        text: `www.okana.gr/2012-01-12-13-29-02/anakoinoseis/item/download/117_6b5175b605a24b8abf7f32671e7f1a21`
      },
    ],
    startDate: '2013/03/20',
    endDate: '2013/03/22',
    logics: [LOGICS.publicHealth, LOGICS.bestPractice, LOGICS.evidence],
    linksWith: ['OKANA_Created', 'ECDC_Created', 'KEELPNO_Created', 'Documented_HIV_Outbreak_Among', 'European_Commission_Requests_Risk', '2_ECDC_Visits_to'],
    baseStory: baseStory,
  },

  {
    name: `5 Women Win Compensation for Time in Prison`,
    url: `5_Women_Win_Compensation`,
    body: [
      {
        type: 'paragraph',
        content: `The groups of lawyers and of feminists informed the surviving women who had been arrested about the possibility that they seek financial compensation for the time that they unjustly spent in prison. Interviewees indicated that many of the women were reluctant or uninterested in further engagement with the police and courts. The few who did decide to pursue with the claim were awarded with compensations of 10 to 20 Euro per day spent in jail. The maximum legally permissible compensation would have been 30 Euro per day, which none of them were awarded.`
      },
      ],
    startDate: '2013',
    endDate: '',
    logics: [LOGICS.socialJustice, LOGICS.citizenship],
    linksWith: ['Group_of_Lawyers_for', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Weekly_Prison_Visits_by', 'Lawyers_Secure_Acquittals_and'],
    baseStory: baseStory,
  },

  {
    name: `Abolition of Health Provision 39a`,
    url: `Abolition_of_Health_Provision`,
    body: [
      {
        type: 'paragraph',
        content: `Subsequent to the outpouring of criticism, advocacy and activism, the Greek Deputy Minister of Health, Foteini Skopouli, abolished Health Provision 39a, which constituted the legal grounds for the forced testing and arrests of women from 2012. “Another initiative by the outgoing political leadership (the Deputy Minister of Health Fotini Skopouli) that may be deemed positive was the abolition of health provision 39a (after unanimous recommendation of a relevant committee that was formed, in April 2013, where the civil society participated through a representative). This initiative was launched after the first court acquittals involving the women who had been arrested, while international pressure kept unabated for almost a whole year.” (Kloka 2014, 5).`
      },
      ],
    externalLinks: [
    ],
    startDate: '2013',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.bestPractice, LOGICS.evidence, LOGICS.publicHealth],
    linksWith: ['Ministerial_Decree_39a_Published', 'Protests_in_Front_of', 'Transnational_NGOs_and_Activist', 'Global_Commission_on_HIV_2012', 'UNAIDS_Press_Statement_on', 'UN_Letter_to_Greek', 'Joint_ECDC_FRA_EMCDDA', 'Reinstatement_of_Provision_39a', 'Lawyers_Secure_Acquittals_and'],
    baseStory: baseStory,
  },

{
    name: `UNAIDS Guidance Note on Criminalisation of HIV`,
    url: `UNAIDS_Guidance_Note_on_2013`,
    body: [
      {
        type: 'paragraph',
        content: `The UNAIDS Guidance Note “Ending overly broad criminalisation of HIV non-disclosure, exposure and transmission: critical scientific, medical and legal considerations” was published in May 2013, and referenced by the team of lawyers in cases brought to the national and European courts. “As stated in the Policy brief on criminalisation of HIV transmission—issued in 2008 by UNAIDS and the United Nations Development Programme (UNDP)—the concerns raised by the overly broad criminalisation of HIV non-disclosure, exposure and transmission can be addressed in part by limiting the application of criminal law to cases of intentional transmission (i.e. where a person knows his or her HIV-positive status, acts with the intention to transmit HIV, and does in fact transmit it).” The included “considerations and recommendations are based on the general position that the use of criminal law in relation to HIV should (i) be guided by the best available scientific and medical evidence relating to HIV, (ii) uphold the principles of legal and judicial fairness (including key criminal law principles of legality, foreseeability, intent, causality, proportionality and proof), and (iii) protect the human rights of those involved in criminal law cases. A rational application of criminal law in the context of HIV should reflect this general position. In particular, it should be guided by the following considerations and recommendations”: with regard to the assessment of the harm caused by HIV, the risk of HIV transmission, and the mental culpability of the person accused; with regard to the determination of defences to prosecution or conviction; with regard to the assessment of elements of proof; with regard to the determination of penalties following conviction for HIV non-disclosure, exposure or transmission; and with regard to prosecutorial guidelines. (UNAIDS 2013, 2-6) `
      },
      ],
    externalLinks: [
      {
        url: `www.hivlawandpolicy.org/resources/ending-overly-broad-criminalisation-hiv-non-disclosure-exposure-and-transmission-critical`,
        text: `www.hivlawandpolicy.org/resources/ending-overly-broad-criminalisation-hiv-non-disclosure-exposure-and-transmission-critical`
      },
    ],
    startDate: '2013',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.deCriminalisation, LOGICS.publicHealth, LOGICS.evidence, LOGICS.bestPractice],
    linksWith: ['UNAIDS_Comes_into_Operation', 'UNAIDS_Policy_Brief_on', 'UNAIDS_Press_Statement_on', '3_Cases_Submitted_to', 'Lawyers_Secure_Acquittals_and'],
    baseStory: baseStory,
  },

{
    name: `Reinstatement of Provision 39a`,
    url: `Reinstatement_of_Provision_39a`,
    body: [
      {
        type: 'paragraph',
        content: `(exact date unkown) The new Greek Minister of Health and Social Solidarity, Adonis Georgiadis, reinstated provision 39a within the first days of his appointment in June 2013. He explained the reinstatement of the provision in the following way: “ First of all, we respect the rights of all people. All people, however; not only drug users and female sex workers have rights; everyone has rights. The existence of the health decree is necessary in order to determine the rules based on which everyone’s rights will be respected: the rights of both those vulnerable social groups we want to protect primarily because they are [vulnerable] and the rights of the rest of the population to feel safe and to know that public health is being protected.”`
      },
      ],
    externalLinks: [
      {
        url: `http://international.radiobubble.gr/2013/07/greek-health-minister-says-he-will-not.html`,
        text: `http://international.radiobubble.gr/2013/07/greek-health-minister-says-he-will-not.html`
      },
    ],
    startDate: '2013/06/01',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.deCriminalisation, LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['Ministerial_Decree_39a_Published', 'Abolition_of_Health_Provision', 'Transnational_NGOs_and_Activist', 'UNAIDS_Calls_for_Repeal', 'Demonstrations_against_Provision', 'Provision_39a_Annulled_Second'],
    baseStory: baseStory,
  },

  {
    name: `FRA Acknowledges Rights Violation`,
    url: `FRA_Acknowledges_Rights_Violation`,
    body: [
      {
        type: 'paragraph',
        content: `In their annual report from 2013, which was entitled “Fundamental Rights Challenges and Achievement” and is available through the accompanying link, the Fundamental Rights Agency (FRA) denounced the rights violations that occurred in Greece: "... in May 2012 the Greek Police disclosed the names and photographs of HIV-positive sex workers, some of whom were in an irregular situation, after having arrested them and subjected them to compulsory HIV testing. This raised a number of concerns about breaches of confidentiality of personal health data, imposition of criminal charges based on HIV status and discrimination. The Greek Ombudsman said that publishing the photos and personal data of the HIV positive women ‘not only violates rights inextricably linked to the respect of human dignity and status of the patient but is also an ineffective means of prevention and protection of public health’. On 20 April 2012, the European Commission asked the European Centre for Disease Prevention and Control to perform a risk assessment mission on the HIV situation in Greece. FRA participated as an observer.”`
      },
      ],
    externalLinks: [
      {
        url: `www.fra.europa.eu/en/publication/2013/fundamental-rights-challenges-and-achievements-2012`,
        text: `www.fra.europa.eu/en/publication/2013/fundamental-rights-challenges-and-achievements-2012`
      },
    ],
    startDate: '2013/06/01',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.publicHealth, LOGICS.deCriminalisation, LOGICS.dissent],
    linksWith: ['FRA_Created', 'ECDC_Created', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Ombudsman_Report_to_Ministry', 'European_Commission_Requests_Risk', '2_ECDC_Visits_to', 'Joint_ECDC_FRA_EMCDDA'],
    baseStory: baseStory,
  },

  {
    name: `Transnational NGOs and Activist Groups Call for Repeal of Provision 39a`,
    url: `Transnational_NGOs_and_Activist`,
    body: [
      {
        type: 'paragraph',
        content: `Multiple transnational non-governmental and activist groups called for the repeal of Provision 39a, as is exemplified in the excerpts below from statements by the International AIDS  Society (IAS), Human Rights Watch (HRW), the European AIDS Treatment Group (EATG), and the Global Network of People Living with HIV (GNP +).`
      },
      {
        type: 'paragraph',
        content: `On 03 July 2013, at the IAS Conference, Françoise Barré-Sinoussi (President of the International AIDS Society, IAS) announced in a speech at the closing session: “As we keep repeating over the years, there will be no end to the HIV epidemic without advancing human rights in parallel…It is thus with strong disappointment then that we are receiving the news announced yesterday that the Greek Ministry of Health is re-introducing compulsory HIV testing via detainment for female sexworkers. As President of the IAS I strongly condemn this move and urge the Greek Government to re-think its position. HIV infections are already increasing in Greece due to the economic crisis and a mandatory policy of detainment and testing will only fuel the epidemic there.”`
      },
      {
        type: 'paragraph',
        content: `On 03 July 2013, the Human Rights Watch published a statement urging the Greek government to repeal provision 39a. “It’s deeply worrying that it took the new health minister only one day to bring back a regulation that violated human rights and stigmatized vulnerable groups, and that proved counterproductive to protecting public health,” stated Judith Sunderland, senior Western Europe researcher at Human Rights Watch. “If the government is serious about addressing HIV and other infectious diseases, it should focus on access to health care and public information.”`
      },
      {
        type: 'paragraph',
        content: `On 04 July 2013, the European AIDS Treatment Group called on “the Greek authorities to reverse their decision of 26 June to re-introduce mandatory HIV testing for vulnerable groups under the Health Regulation No. GY/39A. This decree had just been repealed on 30 April 2013.While it is legitimate for the authorities to identify responses in the case of infectious diseases epidemics, a decree used to detain vulnerable persons such as sex workers, drug users, undocumented migrants for isolation and coerced HIV testing is under no circumstances justifiable.The decree and its use represent an abuse of human rights and a public health risk. It fails to address the causes the epidemic, which lay in the impact of the economic crisis on individuals and insufficient prevention measures. Moreover, it serves to fuel the epidemic further by nourishing misconception, stigma and fear.” `
      },
      {
        type: 'paragraph',
        content: `On the 06 November 2013, the Global Network of People Living with HIV also issued a statement “in solidarity with Greek Positive Voice, European Treatment Action Group, HIV Europe and others in  calling on the Greek government to repeal the Health Regulation No. GY/39A. This regulation would roll back the significant advances that have been made in fighting the HIV epidemic in Greece, the region, and globally. This policy will further marginalize people, including people who inject drugs, sex workers and undocumented migrants, who are already stigmatized and criminalized in many societies and have little to no access to HIV, prevention and treatment services. Health Regulation No. GY/39A contradicts its intended impact. Instead of encouraging people to come forward voluntarily for an HIV test, it will discourage them from seeking the treatment and care that people living with HIV need. Good public health measures take into account not only epidemiology but also human rights. GY30A contravenes the human rights of Greek people and will, therefore, have a negative effect on their public health. Finally, this regulation is deeply worrying as it gives the police the authority to assist in enforcing this policy, including isolation, restriction quarantine, hospitalization, and treatment. We are appalled by this measure as it violates bodily integrity and autonomy. Moreover, there is a global consensus amongst the leading international and global health institutions that firmly assert that mandatory HIV testing is incongruent with public health and human rights. The initial introduction and implementation of this regulation in April 2012 has already deterred people at risk of HIV from seeking testing and services. The reinstatement, Health Regulation No. GY39/A will fuel the HIV epidemic through the stigma and fear it will create. We urge the Greek government to respect the human rights and interests of its citizens by repealing this regulation immediately.”`
      },
    ],
    externalLinks: [
      {
        url: `http://www.ias2013.org/WebContent/File/IAS2013_Closing_Session_Speech_Francoise_Barre-Sinoussi.pdf`,
        text: `http://www.ias2013.org/WebContent/File/IAS2013_Closing_Session_Speech_Francoise_Barre-Sinoussi.pdf`
      },
      {
        url: `www.hrw.org/news/2013/07/03/greece-repeal-abusive-health-regulation`,
        text: `www.hrw.org/news/2013/07/03/greece-repeal-abusive-health-regulation`
      },
      {
        url: `www.nswp.org/nswp-plus/topic/european-aids-treatment-group-calls-greek-authorities-not-re-introduce-manatory-hiv-`,
        text: `www.nswp.org/nswp-plus/topic/european-aids-treatment-group-calls-greek-authorities-not-re-introduce-manatory-hiv-`
      },
      {
        url: `www.gnpplus.net/the-global-network-of-people-living-with-hiv-calls-on-greece-to-repeal-its-policy-on-mandatory-testing-for-hiv/`,
        text: `www.gnpplus.net/the-global-network-of-people-living-with-hiv-calls-on-greece-to-repeal-its-policy-on-mandatory-testing-for-hiv/`
      },
    ],
    startDate: '2013/07/03',
    endDate: '2013/11/06',
    logics: [LOGICS.humanRights, LOGICS.dissent, LOGICS.socialJustice, LOGICS.bestPractice, LOGICS.evidence, LOGICS.publicHealth, LOGICS.mutualHelp],
    linksWith: ['IAS_Created', 'EATG_Created', 'GNP+_Created', 'Ministerial_Decree_39a_Published', 'Abolition_of_Health_Provision', 'Reinstatement_of_Provision_39a', 'Provision_39a_Annulled_Second'],
    baseStory: baseStory,
  },


  {
    name: `UNAIDS Calls for Repeal of Provision 39a`,
    url: `UNAIDS_Calls_for_Repeal`,
    body: [
      {
        type: 'paragraph',
        content: `On 31 July 2013, UNAIDS urges Greek Authorities to Repeal Provision 39a: “The Joint United Nations Programme on HIV/AIDS (UNAIDS) expresses deep concern over the reintroduction of a Sanitary Decree in Greece that could lead to infringements of human rights and prevent people from accessing HIV services. There is no evidence that punitive approaches—particularly those that single out members of key populations––are effective in responding to HIV. On the contrary, such measures deter people most affected by HIV from accessing lifesaving HIV prevention and care services. Initially introduced in April 2012, the Sanitary Decree allows for ‘specific control’ and ‘screening’ measures against sex workers, migrants and people who use drugs. Shortly after the Decree was introduced a number of sex workers were arrested, detained, tested for HIV, prosecuted and their photographs published. The Sanitary Decree was repealed in April 2013; however, the government reintroduced the Decree in June this year. UNAIDS is very concerned that the reintroduction of this legislation, with the same provisions, could serve to justify actions that violate human rights. UNAIDS urges the Greek authorities to repeal the Sanitary Decree and initiate dialogue with health experts, civil society organizations and other relevant stakeholders to develop appropriate evidence-informed and rights-based public health regulations. All people—including sex workers and their clients, people who use drugs, migrants and asylum-seekers—should have access to voluntary and confidential HIV services and be protected against discrimination.” The full text is available through the accompanying link.`
      },
      ],
    externalLinks: [
      {
        url: `http://www.unaids.org/en/resources/presscentre/pressreleaseandstatementarchive/2013/july/20130731greece`,
        text: `http://www.unaids.org/en/resources/presscentre/pressreleaseandstatementarchive/2013/july/20130731greece`
      },
    ],
    startDate: '2013/07/31',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.dissent, LOGICS.bestPractice, LOGICS.evidence, LOGICS.publicHealth, LOGICS.collaborativeGovernance],
    linksWith: ['Greek_Economic_Crisis', 'UNAIDS_Comes_into_Operation', 'Ministerial_Decree_39a_Published', 'Abolition_of_Health_Provision', 'Reinstatement_of_Provision_39a', 'Provision_39a_Annulled_Second'],
    baseStory: baseStory,
  },
  
{
    name: `Demonstrations against Provision 39a`,
    url: `Demonstrations_against_Provision`,
    body: [
      {
        type: 'paragraph',
        content: `“Protests against the reinstatement of 39A are continuing with a gathering outside the Ministry of Health in Athens [on Monday July 8th].” “We cannot allow the implementation of practices that lead our society to the Middle Ages,” the statement by Positive Voice, Centre for Life and PR.A.K.S.I.S., among other groups, said. “Access to free and public health services, access to medical coverage and a respect for human rights are non-negotiable for us. Since the leadership of the Health Ministry obviously does not share this view, we have a responsibility to make it clear with our actions.” The report from where these excerpts were taken is available through the accompanying link.`
      },
      ],
    externalLinks: [
      {
        url: `www.hivjustice.net/news/greece-scientists-and-human-rights-campaigners-condemn-the-reinstatement-of-provision-39a-allowing-forced-hiv-testing-of-suspected-sex-workers-drug-users-and-undocumented-migrants/`,
        text: `www.hivjustice.net/news/greece-scientists-and-human-rights-campaigners-condemn-the-reinstatement-of-provision-39a-allowing-forced-hiv-testing-of-suspected-sex-workers-drug-users-and-undocumented-migrants/`
      },
      ],
    startDate: '2013/07/08',
    endDate: '2014',
    logics: [LOGICS.humanRights, LOGICS.citizenship, LOGICS.dissent, LOGICS.bestPractice, LOGICS.publicHealth],
    linksWith: ['Centre_for_Life_Created', 'PRAKSIS_Created', 'Positive_voice_Created', 'Ministerial_Decree_39a_Published', 'Abolition_of_Health_Provision', '39a2012', 'Reinstatement_of_Provision_39a', 'Provision_39a_Annulled_Second'],
    baseStory: baseStory,
  },
  
{
    name: `"Ruins" Premiere`,
    url: `Ruins_Premiere`,
    body: [
      {
        type: 'paragraph',
        content: `In collaboration with representatives from the various implicated individuals, groups and organisations, the artist and journalist Zoe Mavroudi made the documentary film “Ruins” about the networks and events from this story. Her film debuted at the Benaki Museum's Pireos St Annex, and was screened at Thessaloniki's Aristotle University two days later. Ultimately, it was made available free of charge on the film’s official website, and has been widely shared across activist and NGO websites in Greece and abroad. Interviews in the film were conducted with women who were arrested, and with representatives of Positive Voice, ACT UP Hellas, Centre for Life, the group of feminists, and the group of lawyers for undocumented migrants and refugees. The film included video footage of the UNGASS speech and of various interviews with the then Minister of Health. For more information, visit the accompanying link to the film’s website.`
      },
      ],
    externalLinks: [
      {
        url: `www.ruins-documentary.com/en/directors-statement/`,
        text: `www.ruins-documentary.com/en/directors-statement/`
      },
    ],
    startDate: '2013/09/08',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.citizenship, LOGICS.bestPractice, LOGICS.publicHealth, LOGICS.evidence, LOGICS.socialJustice, LOGICS.humanitarianism, LOGICS.dissent],
    linksWith: ['Centre_for_Life_Created', 'ACT_UP_Hellas_Created', 'Group_of_Lawyers_for', 'Positive_voice_Created', 'Greek_Economic_Crisis', '2012_Greek_Legislative_Election', 'Documented_HIV_Outbreak_Among', 'UNGASS_Statement_by_Greek', 'Ministerial_Decree_39a_Published', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'Inter-Organisational_Coalition_with_Weekly', 'Weekly_Prison_Visits_by'],
    baseStory: baseStory,
  },

{
    name: `Provision 39a Annulled Second Time`,
    url: `Provision_39a_Annulled_Second`,
    body: [
      {
        type: 'paragraph',
        content: `Subsequent to the outpouring of criticism and activism both at the national and international level, “[a]n official repeal of Health Decree 39A has been published on the Official Journal of the Hellenic Republic as of Friday, April 17 [2015]... The minister of health P. Kouroumplis has signed a repeal of the decree’s reinstatement by Adonis Georgiadis in July 2013 (a month after it was first repealed by former deputy minister Foteini Skopouli).” A report of the event is available through the linked webiste.`
      },
      ],
    externalLinks: [
      {
        url: `http://www.hivjustice.net/greece-repeal-of-health-decree-39a-must-be-followed-by-further-initiatives-to-protect-human-rights-and-to-reverse-the-hiv-stigma-left-on-greek-society-and-political-life/`,
        text: `http://www.hivjustice.net/greece-repeal-of-health-decree-39a-must-be-followed-by-further-initiatives-to-protect-human-rights-and-to-reverse-the-hiv-stigma-left-on-greek-society-and-political-life/`
      },
    ],
    startDate: '2015/04/17',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.citizenship, LOGICS.socialJustice, LOGICS.deCriminalisation,],
    linksWith: ['Ministerial_Decree_39a_Published', 'Reinstatement_of_Provision_39a', 'Transnational_NGOs_and_Activist', 'UNAIDS_Calls_for_Repeal', 'Demonstrations_against_Provision'],
    baseStory: baseStory,
  },

{
    name: `Red Umbrella Athens Created`,
    url: `Red_Umbrella_Athens_Created`,
    body: [
      {
        type: 'paragraph',
        content: `The Red Umbrella Athens project was created by Positive Voice in December 2015 in part as a response to the events from 2012. “Red Umbrella Athens (RUA) primarily offers a wide range of services to adult sex workers at the first Greek drop-in center, and secondary advocates for sex workers' rights at all levels… RUA team started as both community and science based with the long-term goal to be led and facilitated solely by community representatives. RUA team has core members (cis and trans female and male) who work or have worked in different areas of sex industry as well as people living with HIV/HCV/HBV, and/or using or have used psychoactive substances.” A more detailed presentation of the project is available through the accompanying link.`
      },
      ],
    externalLinks: [
      {
        url: `https://www.nswp.org/members/red-umbrella-athens`,
        text: `https://www.nswp.org/members/red-umbrella-athens`
      },
    ],
    startDate: '2015',
    endDate: '',
    logics: [LOGICS.socialJustice, LOGICS.bestPractice, LOGICS.evidence, LOGICS.mutualHelp, LOGICS.publicHealth,LOGICS.humanRights, LOGICS.citizenship],
    linksWith: ['Positive_voice_Created', 'Conference_on_Greek_Sex', 'Ongoing_Forced_HIV_Testing'],
    baseStory: baseStory,
  },

  {
    name: `PeNUPS Created`,
    url: `PeNUPS_Created`,
    body: [
      {
        type: 'paragraph',
        content: `The first organisation in Greece of people who use drugs was created in 2016 under the name PeNUPS, which stands for Peer Network of Users of Psychoactive Substances. Interviewees asserted that the creation of this network was in part inspired by the events of this story. Among other initiatives, PeNUPS has been active in the Greek involvement with the “Support Don’t Punish” campaign, which advocates for the decriminalisation of drug use based primarily on public health, human rights and social justice frameworks.`
      },
      ],
    externalLinks: [
      {
        url: `http://supportdontpunish.org/country/gr/`,
        text: `http://supportdontpunish.org/country/gr/`
      },
    ],
    startDate: '2016',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.citizenship, LOGICS.publicHealth, LOGICS.socialJustice, LOGICS.dissent, LOGICS.mutualHelp],
    linksWith: ['Documented_HIV_Outbreak_Among', 'Ongoing_Forced_HIV_Testing',],
    baseStory: baseStory,
  },

  {
    name: `New KEELPNO President Formally Apologizes`,
    url: `New_KEELPNO_President`,
    body: [
      {
        type: 'paragraph',
        content: `In 2016, the new president of KEELPNO, Theofilos Rosenberg, formally acknowledged and apologised for the actions taken by KEELPNO in relation to the events presented in this story. Interviewees emphasised that, as a professor of medicine at the time, he also organised discussions on the ethics of the actions taken as the events were unfolding in 2012.`
      },
    ],
    externalLinks: [
      {
      },
    ],
    startDate: '2016',
    endDate: '',
    logics: [LOGICS.moralizing],
    linksWith: ['KEELPNO_Created', 'Greek_HIV_Testing_Guidelines', 'First_Forced_Testing_and_Arrest_in', 'Ongoing_Forced_HIV_Testing', 'KEELPNO_Internal_Letter_of', 'Forced_Testing_and_Arrest', 'Operation_Xenios_Zeus', 'Research_on_Public_Response', 'Lawsuit_Filed_Against_Public'],
    baseStory: baseStory,
  },  

  {
    name: `Conference on Greek Sex Work Policy`,
    url: `Conference_on_Greek_Sex`,
    body: [
      {
        type: 'paragraph',
        content: `“On 25th of May 2017, ICRSE joined other experts at a conference in Athens, organised by Red Umbrella Athens and Positive Voice, to discuss the rights and working conditions of sex workers in Greece. Delegates unanimously agreed on the urgent necessity to change the current legal framework that restricts the rights of sex workers. The Conference was the first opportunity since 2004 to discuss the need to reform the current legislation on sex work. Although the current legislation allows sex work on premises, there are various obstacles to obtain a legal work permit. In the Attica region for example only 5-10 workplaces out of 500 have this permit. It is noteworthy that the conference was organized with the official support of the Greek Ministry of Interior. The Minister of Interior himself, Mr Skourletis, spoke of the need to examine all the social and cultural factors of the country as well as to study other models to effectively legislate on such a critical social issue as sex work.” The rest of a report from the conference is available through the link below.`
      },
      {
        type: 'paragraph',
        content: `The events from 2012 helped to provoke, and constituted a focus of, this conference. SWAN, PR.A.K.S.I.S. and Centre for Life were among the organisations in attendance.`
      },
    ],
    externalLinks: [
      {
        url: `http://www.sexworkeurope.org/news/general-news/greece-icrse-joins-first-policy-conference-sex-work-athens-sex-work-reality-and`,
        text: `http://www.sexworkeurope.org/news/general-news/greece-icrse-joins-first-policy-conference-sex-work-athens-sex-work-reality-and`
      },
    ],
    startDate: '2017/05/25',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.deCriminalisation, LOGICS.socialJustice, LOGICS.citizenship, LOGICS.dissent, LOGICS.collaborativeGovernance],
    linksWith: ['Law_Passed_Legalising_Sex', 'ICRSE_Created', 'SWAN_Created', 'Positive_Voice_Created', 'Centre_for_Life_Created', 'PRAKSIS_Created', 'Red_Umbrella_Athens_Created', 'Change_to_Greek_Sex', 'UNAIDS_Guidance_Note_on_2013', 'First_Forced_Testing_and', 'Ongoing_Forced_HIV_Testing'],
    baseStory: baseStory,
  },
  
{
    name: `"Sanitary Bomb" Performance in Omonia`,
    url: `Sanitary_Bomb_Performance_in`,
    body: [
      {
        type: 'paragraph',
        content: `On 29 September 2017, 24 women from the motov feminist collective, a feminist initiative that was developed explicitly to provide support for the women at the heart of this story, created the performance “Sanitary Bomb” within the framework of the “White Mirror of the City” project. The performance focused on the events of 2012, included the participation of other representatives of the inter-organisational coalition created in relation to these events, and took place on the Xouthou street located near to Omonia square. To view video documentation from this performance, see the link attached to this event. This performance inspired the creation of the theater play “Women from Earth”. `
      },
      ],
    externalLinks: [
      {
        url: `https://tomov.gr/2017/10/08/%CF%85%CE%B3%CE%B5%CE%B9%CE%BF-%CE%BD%CE%BF%CE%BC%CE%B9%CE%BA%CE%B7-%CE%B2%CE%BF%CE%BC%CE%B2%CE%B1-%CE%B4%CF%81%CF%89%CE%BC%CE%B5%CE%BD%CE%BF-%CE%BA%CE%B1%CF%84%CE%B1%CE%B3%CE%B3%CE%B5%CE%BB%CE%B9/`,
        text: `https://tomov.gr/2017/10/08/%CF%85%CE%B3%CE%B5%CE%B9%CE%BF-%CE%BD%CE%BF%CE%BC%CE%B9%CE%BA%CE%B7-%CE%B2%CE%BF%CE%BC%CE%B2%CE%B1-%CE%B4%CF%81%CF%89%CE%BC%CE%B5%CE%BD%CE%BF-%CE%BA%CE%B1%CF%84%CE%B1%CE%B3%CE%B3%CE%B5%CE%BB%CE%B9/`
      },
    ],
    startDate: '2017/09/29',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.humanitarianism, LOGICS.dissent],
    linksWith: ['Women_from_Earth_Performance', 'Ongoing_Forced_HIV_Testing', 'Inter-Organisational_Coalition_with_Weekly', 'Weekly_Prison_Visits_by'],
    baseStory: baseStory,
  },


  {
    name: `"Women from Earth" Performance and Discussion`,
    url: `Women_from_Earth_Performance`,
    body: [
      {
        type: 'paragraph',
        content: `The Andromeda Theatre Company in Athens develops the play Γυναίκες από χώμα [Women from Earth], which focuses on the arrests, forced testing, and imprisonment of the women at the heart of this story. The creation of the play was inspired by a performance that occured the previous year entitled “Sanitary Bomb”. On October 26th 2018, the performance in the Vault Theater Plus was followed by a discussion that brought together representatives of different activist groups, NGOs and governmental organisations that were engaged in the case over the years. Included among the panelists and audience members were representatives of 18 Ano, ACT UP Hellas and Group of Lawyers.`
      },
      ],
    externalLinks: [
      {
        url: `https://artplay.gr/theatro/oi-orothetikes-toy-%CE%8412-o-zak-toy-18-kai-oles-oi-gynaikes-apo-choma`,
        text: `https://artplay.gr/theatro/oi-orothetikes-toy-%CE%8412-o-zak-toy-18-kai-oles-oi-gynaikes-apo-choma`
      },
    ],
    startDate: '2018/10/26',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.humanitarianism, LOGICS.dissent],
    linksWith: ['Sanitary_Bomb_Performance_in', 'Ongoing_Forced_HIV_Testing', '18_Ano_Created', 'ACT_UP_Hellas_Created', 'Group_of_Lawyers_for'],
    baseStory: baseStory,
  },

]
