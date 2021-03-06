import { LOGICS } from '../logics/logics'
const baseStory = 'uk'

export const UkEvents = [
  {
    name: 'R v Clarence',
    url: 'r_v_clarence',
    body: [
      {
        type: 'paragraph',
        content:
          'A man is found guilty of grievous bodily harm after transmitting gonorrhoea to his wife through sexual intercourse while knowing he had the infection and not telling her. The prosecution is overturned on appeal and it is found that the transmission of an STI does not meet the requirements for a prosecution for the infliction of grievous bodily harm under the Offences Against the Person Act 1861. This is partly because the term “inflict” is interpreted as meaning a direct attack/act of aggression but also because, at the time, a woman is not able to refuse consent to sex with her husband.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1888',
    endDate: '',
    logics: [LOGICS.deCriminalisation],
    linksWith: [
      'legislating_the_criminal_code',
      'roy_cornes',
      'violence_reforming_the_offences',
    ],
    baseStory: baseStory,
  },

  {
    name: 'Public Health (Control of Diseases) Act 1984',
    url: 'public_health_control_of',
    body: [
      {
        type: 'paragraph',
        content:
          'Legislation mandating certain powers where a notifiable disease (for the purposes of the legislation: cholera, plague, relapsing fever, smallpox, typhus) is suspected or confirmed, including: mandatory medical examination, removal to a hospital, detention in hospital.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1984',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['public_health_infectious_diseases'],
    baseStory: baseStory,
  },

  {
    name: 'Public Health (Infectious Diseases) Regulations 1985',
    url: 'public_health_infectious_diseases',
    body: [
      {
        type: 'paragraph',
        content:
          'After considering whether AIDS should become classified as a notifiable disease, it is decided - in consultation with the government Expert Advisory Group on AIDS and after seeking the opinions of medical specialists - that this is not necessary. Instead, regulations from the Public Health (Control of Disease) Act 1984 are extended to include AIDS. The Public Health (Infectious Disease) Regulations 1985 thus introduce powers to detain a patient who is thought to be a risk to others and in a ‘dangerously infectious state’. This legislation is only used once, in September 1985 in Manchester.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1985',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['public_health_control_of'],
    baseStory: baseStory,
  },

  {
    name: 'Roy Cornes',
    url: 'roy_cornes',
    body: [
      {
        type: 'paragraph',
        content:
          'Roy Cornes is accused of deliberately transmitting HIV to four women. There is extensive media coverage, but following R v Clarence, it is thought that no law applies.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1992',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.moralizing],
    linksWith: ['r_v_clarence'],
    baseStory: baseStory,
  },

  {
    name:
      'Legislating the Criminal Code: Offences Against the Person and General Principles: A Consultation Paper (LCCP 122)',
    url: 'legislating_the_criminal_code',
    body: [
      {
        type: 'paragraph',
        content:
          'As part of a broader project of codifying the criminal law in England and Wales, in this document the Law Commission asks for comment on law reform proposals of the Offences Against the Person Act (1861) and draft Bill. The document draws heavily on a Draft Code that was published in 1989. The document is concerned primarily with non-fatal offences against the person, as well as general principles. The transmission of disease is only mentioned once in the document.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1992',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.moralizing],
    linksWith: ['r_v_clarence', 'legislating_the_criminal_code'],
    baseStory: baseStory,
  },

  {
    name:
      'Legislating the Criminal Code: Offences Against the Person and General Principles (Law Com No. 218)',
    url: 'law_com_no_218',
    body: [
      {
        type: 'paragraph',
        content:
          'Presents a Criminal Law Bill very closely based on the draft Bill presented in the 1992 Consultation Paper, along with selected responses to the earlier draft Bill. For the purposes of the transmission of disease, the report proposes that the Offences against the Person Act should be reformed such that both the intentional and reckless transmission of a disease is a criminal offence. The document acknowledges that ‘the criminal law is not the most obvious or principal means of addressing the problem of containing the spread of such diseases’ (pg. 33) but that these proposals amount merely to the removal of a technical bar to conviction.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1993',
    endDate: '',
    logics: [LOGICS.deCriminalisation],
    linksWith: [
      'r_v_clarence',
      'legislating_the_criminal_code',
      'violence_reforming_the_offences',
      'reform_of_offences_against',
    ],
    baseStory: baseStory,
  },

  {
    name: 'Disability Discrimination Act 1995',
    url: 'disability_discrimination_act_1995',
    body: [
      {
        type: 'paragraph',
        content:
          '‘An Act to make it unlawful to discriminate against disabled persons in connection with employment, the provision of goods, facilities and services or the disposal or management of premises; to make provision about the employment of disabled persons; and to establish a National Disability Council’',
      },
      {
        type: 'paragraph',
        content:
          'For the purposes of this Act, a person is considered to have a disability if, ‘he has a physical or mental impairment which has a substantial and long-term adverse effect on his ability to carry out normal day-to-day activities’. As such, the Act protects the rights of people living with HIV but only where they are symptomatic.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1995',
    endDate: '',
    logics: [LOGICS.citizenship],
    linksWith: ['disability_discrimination_act_2005'],
    baseStory: baseStory,
  },

  {
    name: 'Ndagga',
    url: 'ndagga',
    body: [
      {
        type: 'paragraph',
        content:
          'A 25 year-old woman is convicted of administering a noxious thing after injecting her male partner with HIV positive blood. She is sentenced to spend two years in prison before being deported.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1995',
    endDate: '',
    logics: [LOGICS.deCriminalisation],
    linksWith: ['disability_discrimination_act_2005'],
    baseStory: baseStory,
  },

  {
    name: 'Introduction of effective treatments',
    url: 'introduction_of_effective_treatments',
    body: [
      {
        type: 'paragraph',
        content:
          'At the 11th International Conference on AIDS in Vancouver, findings are presented which demonstrate the effectiveness of triple combination therapy in treating HIV.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1996',
    endDate: '',
    logics: [],
    linksWith: ['bhiva_hiv_transmission_the'],
    baseStory: baseStory,
  },

  {
    name: 'Violence: Reforming the Offences Against the Person Act 1861',
    url: 'violence_reforming_the_offences',
    body: [
      {
        type: 'paragraph',
        content:
          'Based in part on the proposals set out by the Law Commission five years earlier. However, in contrast to the proposals by the Law Commission, this White Paper suggests that there should be legislation making only the intentional transmission of disease an offence (i.e. this does not include reckless transmission).',
      },
      {
        type: 'paragraph',
        content: 'Amongst a number of arguments made includes a concern that,',
      },
      {
        type: 'paragraph',
        content:
          '‘the law should not seem to discriminate against those who are HIV positive, have AIDS or viral hepatitis or who carry any kind of disease. Nor do we want to discourage people from coming forward for diagnostic tests and treatment, in the interests of their own health and that of others, because of an unfounded fear of criminal prosecution.’',
      },
    ],
    externalLinks: [
      {
        url: `https://webarchive.nationalarchives.gov.uk/20100303144945/http://www.homeoffice.gov.uk/documents/cons-1998-violence-reforming-law/index.html`,
        text: `Read 'Violence: Reforming the Offences Against the Person Act 1861'`,
      },
    ],
    sources: [],
    startDate: '1998',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.deCriminalisation],
    linksWith: [
      'r_v_clarence',
      'criminal_prosecution_of_hiv',
      'reform_of_offences_against',
      'policing_transmission',
    ], // FIX law_commission_proposal
    baseStory: baseStory,
  },

  {
    name: 'Stephen Kelly',
    url: 'stephen_kelly',
    body: [
      {
        type: 'paragraph',
        content:
          '[SCOTLAND] Stephen Kelly is convicted of “culpable and reckless conduct” under Scots law. Kelly had contracted HIV in Glenochil Prison, Scotland in 1993, where he was one of at least 14 people serving a custodial sentence to become HIV positive.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2001',
    endDate: '',
    logics: [LOGICS.deCriminalisation],
    linksWith: ['mohammed_dica'],
    baseStory: baseStory,
  },

  {
    name: 'Mohammed Dica',
    url: 'mohammed_dica',
    body: [
      {
        type: 'paragraph',
        content:
          'Dica is convicted of two counts of reckless transmission in 2003, which is the first conviction in an English court. An appeal is launched and won in 2004, then subsequently retrialled three times before being convicted on one count of recklessly inflicting grievous bodily harm in 2005.',
      },
      {
        type: 'paragraph',
        content:
          'Although there had been warnings – such as the Stephen Kelly conviction in Scotland a couple of years earlier – this case comes as a shock to the HIV sector. Positions and tactics on the matter are variable both within and between HIV organisations.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2003',
    endDate: '',
    logics: [LOGICS.deCriminalisation],
    linksWith: [
      'stephen_kelly',
      'roy_cornes',
      'prosecutorial_guidance_launched',
      'reform_of_offences_against',
    ],
    baseStory: baseStory,
  },

  {
    name:
      'Crown Prosecution Service agree to develop working group on prosecutorial guidelines',
    url: 'crown_prosecution_service_agree',
    body: [
      {
        type: 'paragraph',
        content:
          'Crown Prosecution Service agree (in discussion with National AIDS Trust (NAT) and Terrence Higgins Trust (THT)) to create a working group on Prosecutorial Guidelines. This is a result, in part, of NAT employing existing equalities legislation to persuade them, on the grounds that black migrants are affected disproportionately.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2004',
    endDate: '',
    logics: [LOGICS.collaborativeGovernance, LOGICS.deCriminalisation],
    linksWith: ['draft_prosecutorial_guidance'],
    baseStory: baseStory,
  },

  {
    name: 'Disability Discrimination Act 2005',
    url: 'disability_discrimination_act_2005',
    body: [
      {
        type: 'paragraph',
        content:
          'Extends the protections under the 1995 Act, such that, for the purposes of the Act, all people living with HIV, cancer or multiple sclerosis are considered to be disabled from the moment they are diagnosed. In The Criminalisation of the Transmission of HIV [witness seminar] held by the UK EUROPACH researchers, links were made with the requirement that employers make accommodations in the workplace and its effects on wellbeing, access to treatment and risk-taking behaviour. As such, as well as speaking to the broader legal context for people living with HIV, it was felt by some in the Witness Seminar that any barriers to testing and accessing treatment could come to be implicated in the potentiality of criminal liability.',
      },
    ],
    externalLinks: [
      {
        url: `http://europach.phils.uj.edu.pl/assets/Witness-Seminars/criminalisation-WS-Published.pdf`,
        text: `Read 'The Criminalisation of HIV Transmission in the UK' Witness Seminar`,
      },
    ],
    sources: [],
    startDate: '2005',
    endDate: '',
    logics: [LOGICS.citizenship],
    linksWith: ['disability_discrimination_act_1995'],
    baseStory: baseStory,
  },

  {
    name: 'Draft Prosecutorial Guidance',
    url: 'draft_prosecutorial_guidance',
    body: [
      {
        type: 'paragraph',
        content:
          'Crown Prosecution Service (CPS) makes a draft of their Prosecutorial Guidance paper available for public consultation. The paper outlines draft prosecutorial policy on the sexual transmission of infections causing grievous bodily harm.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2006',
    endDate: '',
    logics: [LOGICS.collaborativeGovernance, LOGICS.deCriminalisation],
    linksWith: [
      'prosecutorial_guidance_launched',
      'crown_prosecution_service_agree',
      'bhiva_respond_to_prosecutorial',
    ],
    baseStory: baseStory,
  },

  {
    name: 'Criminal Prosecution of HIV Transmission: NAT Policy Update',
    url: 'criminal_prosecution_of_hiv',
    body: [
      {
        type: 'paragraph',
        content:
          'National AIDS Trust (NAT) calls for clarification on a number of issues regarding the criminal prosecution of HIV transmission and outlines its concerns. These concerns include the potential for sexual health interventions such as HIV testing to be undermined, an increase in stigma and a shift from shared to individual responsibility with regards to HIV transmission. Further, the policy briefing draws on the Governments own argumentation in its 1998 White Paper:',
      },
      {
        type: 'paragraph',
        content:
          '‘The Government in 1998 cited the resulting stigma and discrimination against those living with HIV and relevant communities as the main reason not to prosecute for reckless HIV transmission. That argument still stands – and its prediction is unfortunately being fulfilled’ (pg 10).',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2006',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.publicHealth],
    linksWith: ['violence_reforming_the_offences'],
    baseStory: baseStory,
  },

  {
    name: 'BHIVA Respond to Prosecutorial Guidance Draft',
    url: 'bhiva_respond_to_prosecutorial',
    body: [
      {
        type: 'paragraph',
        content:
          'The British HIV Association (BHIVA) responds to the draft paper with a series of concerns. They are concerned that a, ‘lack of a clear understanding of HIV infection and its transmission could be construed as an adequate defence against a charge of reckless transmission’ from the draft guidance, pointing out that advice given to patients is likely to have changed to keep up with both scientific developments and the individuals own circumstances. Further, as it is likely to be unclear the quality or quantity of advice a doctor has given their patient or the extent to which it is understood, the document asks what the legal position of medical practitioners might be. ',
      },
      {
        type: 'paragraph',
        content:
          'The response also points out that the criminalisation of HIV transmission is likely to increase stigma and risks a reduction in the number of people testing for HIV. This reduction in testing is discussed as both being a result of increased stigma, but also that those who engage in high risk activities may choose not to test despite thinking they may be at high risk of HIV infection.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2006',
    endDate: '',
    logics: [LOGICS.publicHealth],
    linksWith: ['draft_prosecutorial_guidance'],
    baseStory: baseStory,
  },

  {
    name: 'Expert Witness Testimony on Phylogentic Testing',
    url: 'expert_witness_testimony_on',
    body: [
      {
        type: 'paragraph',
        content:
          'A gay man is acquitted after defence team challenge phylogenetic analysis evidence. In previous HIV transmission cases in England and Wales, phylogenetic analysis evidence had been accepted by defendants, however, after expert testimony by Anna-Maria Geretti – brought in by the defence team – the judge directs the jury to acquit on the basis of the unreliability of the scientific evidence (cf. NAM, 2013; Weait, 2007) ',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2006',
    endDate: '',
    logics: [LOGICS.evidence],
    linksWith: ['nat_and_nam_briefing'],
    baseStory: baseStory,
  },

  {
    name: 'NAT and NAM Briefing Paper on Phylogenetic Testing',
    url: 'nat_and_nam_briefing',
    body: [
      {
        type: 'paragraph',
        content:
          'The Use of Phylogenetic Analysis as Evidence in Criminal Investigation of HIV Transmission, a briefing paper published by National AIDS Trust and NAM, presents advice on the use of phylogenetic testing in criminal cases and argues that transmission cannot be proven on the basis of scientific evidence alone.',
      },
    ],
    externalLinks: [
      {
        url: `http://www.aidsmap.com/files/file1001199.pdf`,
        text: `Read 'The use of phylogenetic analysis as evidence in criminal investigation of HIV transmission'`,
      },
    ],
    sources: [],
    startDate: '2007',
    endDate: '',
    logics: [LOGICS.evidence],
    linksWith: ['expert_witness_testimony_on'],
    baseStory: baseStory,
  },

  {
    name: 'Prosecutorial Guidance Launched',
    url: 'prosecutorial_guidance_launched',
    body: [
      {
        type: 'paragraph',
        content:
          'After some delay, Prosecutorial Guidance is published by the Crown Prosecution Service (CPS).',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2008',
    endDate: '',
    logics: [LOGICS.collaborativeGovernance],
    linksWith: ['expert_witness_testimony_on'],
    baseStory: baseStory,
  },

  {
    name: 'UNAIDS Policy Brief',
    url: 'unaids_policy_brief',
    body: [
      {
        type: 'paragraph',
        content:
          'In Criminalization of HIV Transmission governments around the world are urged to limit the criminalisation of HIV transmission to those who know they are HIV positive, act with intention to transmit the virus and do transmit it.',
      },
    ],
    externalLinks: [
      {
        url: `http://www.unaids.org/en/resources/documents/2008/20081110_jc1601_policy_brief_criminalization_long_en.pdf`,
        text: `Read the UNAIDS Policy Brief`,
      },
    ],
    sources: [],
    startDate: '2008',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.humanRights],
    linksWith: ['bhiva_hiv_transmission_the'],
    baseStory: baseStory,
  },

  {
    name: 'Policing Transmission',
    url: 'policing_transmission',
    body: [
      {
        type: 'paragraph',
        content:
          'A review by Terrence Higgins Trust (THT) of the police handling of cases, including recommendations. The review is the result of a research project wherein a Community Advisory Panel (CAP), Metropolitan Police Service (MPS) and the Association of Chief Police Officers (ACPO) reviewed written digests of six cases and explored police practice in HIV transmission investigations. As stated in the document, this followed THT Direct, the THT Policy Team and other community organisations being contacted by police officers asking for guidance.',
      },
      {
        type: 'paragraph',
        content:
          'The report focusses on five themes: disclosure, access to medical records, ‘how the case arose and who within the police handled it’, additional support or advice from outside the police force and media interaction. Good practice and opportunities for improvement are also identified.',
      },
      {
        type: 'paragraph',
        content:
          'Although the report indicates that they found many instances of good practice, it also details issues where cases could have been handled more appropriately, for example, the report details a case where an unknown number of people known to the accused had been informed of the accused’s HIV status and that a media strategy had been considered in order to trace or alert other potential witnesses (this idea did not come to fruition, as it was deemed to be inappropriate).',
      },
      {
        type: 'paragraph',
        content:
          'The report also states that – until Prosecutorial Guidance had been produced – the Offences Against the Person Act had often been misinterpreted, including by local Crown Prosecution Service (CPS) offices, which had led to a number of investigations where it was clear a crime had never occurred.',
      },
    ],
    externalLinks: [
      {
        url: `https://www.tht.org.uk/sites/default/files/2018-02/Policing%20Transmissions.pdf`,
        text: `Read 'Policing Transmission'`,
      },
    ],
    sources: [],
    startDate: '2009',
    endDate: '',
    logics: [LOGICS.collaborativeGovernance],
    linksWith: [
      'association_of_the_chief',
      'violence_reforming_the_offences',
      'prosecutorial_guidance_launched',
    ],
    baseStory: baseStory,
  },

  {
    name:
      'Prosecutions for HIV Transmission: A Guide for People Living with HIV in England and Wales',
    url: 'prosecutions_for_hiv_transmission',
    body: [
      {
        type: 'paragraph',
        content:
          'A document produced by NAT and THT which explains the law and how it operates in cases of HIV transmission in straightforward language aimed at people living with HIV. It includes advice on what to do if you are accused of transmitting HIV, and what to do if you want to make a complaint about someone transmitting HIV to you.', //fix
      },
    ],
    externalLinks: [
      {
        url: `https://www.nat.org.uk/sites/default/files/online-guides/May_2010_Prosecutions_for_HIV_Transmission.pdf`,
        text: `Read 'Prosecutions for HIV Transmission'`,
      },
    ],
    sources: [],
    startDate: '2010',
    endDate: '',
    logics: [LOGICS.citizenship],
    linksWith: ['association_of_the_chief'],
    baseStory: baseStory,
  },

  {
    name:
      'Association of the Chief Police Officers (ACPO) Investigation Guidance',
    url: 'association_of_the_chief',
    body: [
      {
        type: 'paragraph',
        content:
          'Investigation Guidance relating to the Criminal Transmission of HIV is published by the Association of the Chief Police Officers (ACPO) and National AIDS Trust (NAT) in order to advise police officers when conducting investigations. It states that it was produced in order to put an end to inappropriate investigations and ensure that future investigations are in-line with Crown Prosecution Service (CPS) policy, respectful of human rights and confidentiality, and appropriate.',
      },
    ],
    externalLinks: [
      {
        url: `https://www.nat.org.uk/sites/default/files/publications/ACPO_Guidance.pdf`,
        text: `Read the ACPO Guidance`,
      },
    ],
    sources: [],
    startDate: '2010',
    endDate: '',
    logics: [LOGICS.deCriminalisation],
    linksWith: ['prosecutorial_guidance_launched', 'policing_transmission'],
    baseStory: baseStory,
  },

  {
    name: 'Oslo Declaration',
    url: 'oslo_declaration',
    body: [
      {
        type: 'paragraph',
        content:
          'Representatives from international civil society come together to prepare a declaration on HIV criminalisation. The Declaration argues that there is growing evidence that the criminalisation of HIV exposure, non-disclosure and non-intentional transmission is harmful to public health and human rights. In addition, HIV-specific criminal laws should be repealed and prosecutions should be limited only to rare cases where the transmission of HIV is intentional.',
      },
    ],
    externalLinks: [
      {
        url: `https://vimeo.com/37232529`,
        text: `HIV Justice Network video on the Oslo Declaration`,
      },
      {
        url: `http://www.hivjustice.net/oslo/oslo-declaration/`,
        text: `Read the Oslo Declaration`,
      },
    ],
    sources: [],
    startDate: '2012',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.publicHealth],
    linksWith: ['prosecutorial_guidance_launched', 'policing_transmission'],
    baseStory: baseStory,
  },

  {
    name: 'Amendment to the NHS (Charges to Overseas Visitors) Regulations',
    url: 'amendment_to_the_nhs',
    body: [
      {
        type: 'paragraph',
        content:
          'Changes to NHS charging regulations makes it possible for any overseas visitor to access HIV treatment free of charge. Although this may not appear to be directly related to issues of HIV criminalisation, as effective HIV treatment has been shown to greatly reduce the chances of transmission, access to treatment makes a successful prosecution less likely. This is all the more relevant considering that many of the early transmission cases were brought against black African migrants.',
      },
      {
        type: 'paragraph',
        content:
          '"From 1 October 2012, an amendment to the Charging Regulations means that HIV treatment is no longer chargeable to any overseas visitors and is provided in the same way as treatment for other sexually transmitted infections for which NHS treatment is free to all. This amendment responds to the significant evidence on the benefits to public health of providing HIV treatment to all in clinical need. Left untreated, HIV presents a significant risk of transmission to people in the UK." (DoH 2012, pg. 1)',
      },
    ],
    externalLinks: [
      {
        url: `https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/212952/DH-Guidance-HIV-and-NHS-Charging-fORMATED.pdf`,
        text: `Read the HIV treatment for overseas visitors guidance`,
      },
    ],
    sources: [],
    startDate: '2012',
    endDate: '',
    logics: [LOGICS.publicHealth],
    linksWith: [
      'new_regulations_on_charging',
      'bhiva_hiv_transmission_the',
      'introduction_of_effective_treatments',
    ],
    baseStory: baseStory,
  },

  {
    name:
      'BHIVA: HIV Transmission, the Law and the Work of the Clinical Team (position paper)',
    url: 'bhiva_hiv_transmission_the',
    body: [
      {
        type: 'paragraph',
        content:
          'Opens by stating that the British HIV Association (BHIVA) and the British Association for Sexual Health and HIV (BASHH) support UNAIDS recommendations and the Oslo Declaration that a non-punitive approach be taken to HIV. The document offers recommendations for clinicians in the context of British criminal law. ',
      },
      {
        type: 'paragraph',
        content:
          'It acknowledges that in, ‘most situations, the appropriate use of antiretroviral treatment is at least as effective as condoms in preventing sexual transmission of HIV’ (pg. 10) and, although this has not yet been tested in court, if a defendant is able to demonstrate that they have been taking antiretroviral medications this is likely to be an appropriate defence against a charge of reckless transmission.',
      },
    ],
    externalLinks: [
      {
        url: `https://journals.sagepub.com/doi/full/10.1177/0956462413498338`,
        text: `Read the BHIVA Position Paper`,
      },
    ],
    sources: [],
    startDate: '2013',
    endDate: '',
    logics: [LOGICS.publicHealth],
    linksWith: [
      'oslo_declaration',
      'unaids_policy_brief',
      'introduction_of_effective_treatments',
      'amendment_to_the_nhs',
    ],
    baseStory: baseStory,
  },

  {
    name: 'Reform of Offences Against the Person (Law Com. 361)',
    url: 'reform_of_offences_against',
    body: [
      {
        type: 'paragraph',
        content:
          'Proposals for reform of the Offences Against the Person Act, including detailed discussion of responses from their earlier Scoping Consultation Paper (2014). Describes the 1998 draft Bill (Violence: Reforming the Offences Against the Person Act 1861) as intending to describe the law as it was and, as such, disease transmission was not thought to amount to ‘injury’ under the Offences Against the Person Act. Following Dica (2003), however, this is no longer the case. ',
      },
      {
        type: 'paragraph',
        content:
          'After detailed discussion regarding both the responses from the consultation and weighing up of arguments submitted, it is concluded that: both intentional and reckless transmission of infection should remain punishable under the Offences Against the Person Act; that if the reckless transmission of disease is to be excluded, this should be following a wider review; and that exposure or non-disclosure should not be considered punishable under the Offences Against the Person Act.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2015',
    endDate: '',
    logics: [LOGICS.deCriminalisation],
    linksWith: [
      'mohammed_dica',
      'r_v_clarence',
      'legislating_the_criminal_code',
      'violence_reforming_the_offences',
    ],
    baseStory: baseStory,
  },

  {
    name: 'Daryll Rowe',
    url: 'daryll_rowe',
    body: [
      {
        type: 'paragraph',
        content:
          'Rowe is convicted in November 2017 of five counts of causing grievous bodily harm and five counts of attempted grievous bodily harm. This is the first conviction in the UK of intentional transmission of HIV.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2017',
    endDate: '',
    logics: [LOGICS.deCriminalisation],
    linksWith: [],
    baseStory: baseStory,
  },

  {
    name:
      '"New regulations on charging migrants will have a severe impact upon public health"',
    url: 'new_regulations_on_charging',
    body: [
      {
        type: 'paragraph',
        content: `National AIDS Trust (NAT) publish a briefing in response to new regulations addressing charges for medical care for those not entitled to free treatment.  The new regulations extend these charges to community healthcare services and place a requirement that NHS trusts ascertain a patient's eligibility for free care by checking passports or other documents and charging up front where applicable. The briefing suggests that these checks on eligibility may also be applicable where care is not chargeable (e.g. HIV), and whether or not this is revealed to be the case, it may act as a deterrent for undocumented migrants to access healthcare. In addition, the extension of charges to drug and alcohol services is likely to reduce access to harm reduction strategies.`,
      },
    ],
    externalLinks: [
      {
        url: `https://www.nat.org.uk/sites/default/files/publications/new_regulations_on_charging_migrants_2017.pdf`,
        text: `Read the NAT briefing`,
      },
    ],
    sources: [],
    startDate: '2017',
    endDate: '',
    logics: [LOGICS.publicHealth],
    linksWith: ['amendment_to_the_nhs'],
    baseStory: baseStory,
  },

  {
    name: 'Police trial the use of spit hoods',
    url: 'police_trial_the_use',
    body: [
      {
        type: 'paragraph',
        content:
          'A number of police forces announce trials to use ‘spit hoods’ or ‘spit guards’ to stop officers being bitten or spat at. Spit hoods are mesh fabric bags which are placed over the heads of suspects. Links are publicly made between biting/spitting and HIV or hepatitis transmission.',
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2017',
    endDate: '',
    logics: [LOGICS.securitisation],
    linksWith: ['ngos_respond_to_use', 'assaults_on_emergency_workers'],
    baseStory: baseStory,
  },

  {
    name: 'NGOs Respond to use of Spit Hoods',
    url: 'ngos_respond_to_use',
    body: [
      {
        type: 'paragraph',
        content:
          'Terrence Higgins Trust (THT) and National AIDS Trust (NAT) and the Hepatitis C Trust put forward statements urging police forces to stop linking spitting with the transmission of HIV and, in the latter, Hepatitis C.',
      },
    ],
    externalLinks: [
      {
        url: `https://www.tht.org.uk/news/terrence-higgins-trust-statement-spit-hoods`,
        text: `Terrence Higgins Trust statement on spit hoods`,
      },
      {
        url: `https://www.nat.org.uk/press-release/hepatitis-c-trust-and-nat-respond-police-spit-hoods-debate`,
        text: `National AIDS Trust and Hepatitis C Trust statement on spit hoods`,
      },
    ],
    sources: [],
    startDate: '2017',
    endDate: '',
    logics: [LOGICS.evidence],
    linksWith: ['police_trial_the_use', 'assaults_on_emergency_workers'],
    baseStory: baseStory,
  },

  {
    name: 'Assaults on Emergency Workers (Offences) Bill 2017-19',
    url: 'assaults_on_emergency_workers',
    body: [
      {
        type: 'paragraph',
        content:
          'Private Member’s Bill which would introduce a new offence for assaulting an emergency service worker and could lead to a person suspected of offences against an emergency service worker having to give bodily samples for testing (e.g. for HIV or Hepatitis).',
      },
      {
        type: 'paragraph',
        content:
          'At the Committee Stage, the author of the Bill, Chris Bryant – in response to concerns raised by HIV civil society organisations – acknowledges that the Bill could contribute to the stigmatisation of people living with HIV. He suggests that although he would like to keep these clauses in the Bill, he is open to finding ways to navigate the issue, by introducing provisions for the actual risk of particular communicable diseases to be made clear. Following the Committee sitting, Bryant tables amendments to the Bill which would remove the clauses regarding bodily samples due to the practical difficulties these clauses would raise.',
      },
    ],
    externalLinks: [
      {
        url: `https://researchbriefings.parliament.uk/ResearchBriefing/Summary/CBP-8113#fullreport`,
        text: `Read the Assaults on Emergency Workers (Offences) Bill 2017-19 Briefing`,
      },
    ],
    sources: [],
    startDate: '2017',
    endDate: '',
    logics: [LOGICS.securitisation],
    linksWith: ['police_trial_the_use', 'ngos_respond_to_use'],
    baseStory: baseStory,
  },
]
