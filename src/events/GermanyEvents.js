import { LOGICS } from '../logics/logics';
const baseStory = 'germany';

export const GermanyEvents = [
  {
    name: `UN Standard Minimum Rules for the Treatment of Prisoners`,
    url: `1955_un_standard_minimum`,
    body: [
      {
        type: 'paragraph',
        content: `The United Nations release the Standard Minimum Rules for the Treatment of Prisoners as the first international human rights policy formulating basic principles for the treatment of prisoners and the management of prisons. The rules also address health care in prison settings.`
      },
      {
        type: 'paragraph',
        content: `Part I, 22 (1) states: “The medical services should be organised in close relationship to the general health administration of the community or nation.” This principle can be understood as predecessor of the later declared principle of equivalence that serves to advocate for equal prevention programmes within prisons as they exist extramurally. It will be adopted by other transnational governing bodies, such as WHO and COE as well as by national governments.`
      },
      {
        type: 'paragraph',
        content: `It also serves as a strong argument for human rights and AIDS activists to advocate for an improvement of prison health care, as well as for providing equivalent prevention measures such as syringe exchanges.`
      },
      {
        type: 'paragraph',
        content: `As the controversy on syringe exchanges shows, enacting such an abstract principle in specific health practices is highly contested; it is a matter of interpretation and negotiation whether the principle can be applied to harm reduction.`
      },
      {
        type: 'paragraph',
        content: `In 2015, these non-binding rules will be revised substantially and become known as the Nelson Mandela Rules.`
      },
    ],
    externalLinks: [
      {
        url: `https://www.unodc.org/pdf/criminal_justice/UN_Standard_Minimum_Rules_for_the_Treatment_of_Prisoners.pdf`,
        text: `https://www.unodc.org/pdf/criminal_justice/UN_Standard_Minimum_Rules_for_the_Treatment_of_Prisoners.pdf`
      },
    ],
    sources: [],
    startDate: '1955',
    endDate: '',
    logics: [LOGICS.humanRights],
    linksWith: ['1973_coe_european_prison', '1982_un_principles_of', '1990_un_basic_principles', '1989_reform_of_german', '1993_who_guidelines_on'],
    baseStory: baseStory,
  },

  {
    name: `COE European Prison Rules`,
    url: `1973_coe_european_prison`,
    body: [
      {
        type: 'paragraph',
        content: `The Council of Europe releases the European Prison Rules based on the UN's Standard Minimum Rules for the Treatment of Prisoners. The rules set the frame for European prison health care standards (e.g. principle of equivalence).`
      },
      {
        type: 'paragraph',
        content: `In 1987 and 2006, the rules will be substantially renewed. In 2006, a broad section on health care will be added, explicitly referring to the state´s obligation to safeguard the health of all prisoners, and demanding equivalent health care. Although this policy consists of non-binding recommendations for the member states, the Committee for the Prevention of Torture (CPT) will henceforth gradually base its decisions on the EPR. Consequently, the European Human Rights Court will use the EPR as standards for their rulings. Thus, the formulation of the rules in 1973 provides the foundation for successful legal actions in the future that claim harm reduction with reference to the EPR.`
      },
    ],
    externalLinks: [
      {
        url: `https://rm.coe.int/european-prison-rules-978-92-871-5982-3/16806ab9ae`,
        text: `https://rm.coe.int/european-prison-rules-978-92-871-5982-3/16806ab9ae`
      },
    ],
    sources: [
          {
        type: 'text',
        content: 'Bundesarbeitsgemeinschaft Straffälligenhilfe 2013. "Gesundheitsfürsorge in Haft sollte mindestens so gut wie in Freiheit sein". Interview mit Stefan Enggist. Informationsdienst Straffälligenhilfe 21(1):18-19. URL: http://www.bag-s.de/fileadmin/user_upload/PDF/Infodienst/1_2013_BAG-S_Infodienst_Webseite_Archiv.pdf'
      },
    ],
    startDate: '1973',
    endDate: '',
    logics: [LOGICS.humanRights],
    linksWith: ['1955_un_standard_minimum', '1987_coe_update_of', '1989_coe_european_convention'],
    baseStory: baseStory,
  },

  {
    name: `Reform of German penitentiary law`,
    url: `1977_reform_of_german`,
    body: [
      {
        type: 'paragraph',
        content: `The federal Penitentiary Law enters into force as part of the greater reform of the criminal code.
        The reform happens in the light of a political will towards more democracy and individual liberty. Hence, the new set of regulations declares re-integration of the imprisoned person as the highest aim of correction.`
      },
      {
        type: 'paragraph',
        content: `However, with the juxtaposition of the humanistic objective of re-integration next to the security aim of detention, sentencing becomes increasingly polarised: the convict is typically either treated with leniency and subjected to re-integration efforts - or judged with severity and subjected to security measures (Frommel 2008).`
      },
      {
        type: 'paragraph',
        content: `This ambivalence of the penitentiary will later contribute to a moral dilemma when dealing with harm reduction and drug use inside the prison. The humanistic approach towards detention aims to prevent prisoners from further harm, e.g. infectious diseases through needle sharing among prisoners who inject drugs. At the same time, the security ethos demands to prohibit drugs inside prisons to enable abstinence among prisoners, and to deprive the delinquent of any privileges. Wardens and prison authorities are faced with this contradiction when asked to provide sterile syringes to inmates and thus implicitly tolerate drug use.`
      },
    ],
    externalLinks: [
      {
        url: `https://www.gesetze-im-internet.de/stvollzg/BJNR005810976.html`,
        text: `https://www.gesetze-im-internet.de/stvollzg/BJNR005810976.html`
      },
    ],
    sources: [
          {
        type: 'text',
        content: 'Frommel, Monika 2008. 40 Jahre Strafrechtsreform. Neue Kriminalpolitik 20(4):133-139.'
      },
    ],
    startDate: '1977',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.securitisation],
    linksWith: ['1992_berlin_parliamentary_request', '1994_berlin_parliamentary_debate'],
    baseStory: baseStory,
  },

  {
    name: `UN Principles of Medical Ethics`,
    url: `1982_un_principles_of`,
    body: [
      {
        type: 'paragraph',
        content: `The United Nations General Assembly resolution 37/194 adopts the Principles of Medical Ethics relevant to the Role of Health Personnel, particularly Physicians, in the Protection of Prisoners and Detainees against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment. With the adoption of these principles, a governing body declared for the first time that health care inside prisons should equal public health care standards. The policy document states that "those charged with the medical care of prisoners and detainees have a duty to provide them with protection of their physical and mental health and treatment of disease of the same quality and standard as is afforded to those who are not imprisoned or detained."`
      },
    ],
    externalLinks: [
      {
        url: `http://www.un.org/documents/ga/res/37/a37r194.htm`,
        text: `http://www.un.org/documents/ga/res/37/a37r194.htm`
      },
    ],
    sources: [],
    startDate: '1982',
    endDate: '',
    logics: [LOGICS.humanRights],
    linksWith: ['1955_un_standard_minimum', '1987_who_statement_from', '1988_prisoners_complaint_for', '1989_coe_european_convention', '1989_reform_of_german', '1990_un_basic_principles', '1993_who_guidelines_on'],
    baseStory: baseStory,
  },

  {
    name: `First syringe exchanges in German cities`,
    url: `1984_first_syringe_exchanges`,
    body: [
      {
        type: 'paragraph',
        content: `The first needle exchange programmes for people who use drugs start in several German cities. Local organisations and initiatives distribute sterile injection equipment although the legal situation still criminalises this act.`
      },
      {
        type: 'paragraph',
        content: `AK Kommunale Drogenpolitik, a local non-governmental initiative of activists in support of a liberal and acceptance-based approach to drug use in Bremen, initiates syringe exchanges for people who use drugs together with the local Junkie Association (Junkie-Bund). After starting with the distribution of sterile needles in exchange for used ones in Bremen, activists in other German cities follow their example and start with needle exchanges, although the German Narcotic Substances Act (germ.: Betäubungsmittelgesetz) complicates the distribution of syringes.`
      },
      {
        type: 'paragraph',
        content: `The Narcotic Substances Act states that enabling unauthorised substance abuse is a criminal offense. Debates arise about whether syringe distribution can be considered as enabling substance abuse and thus needs to be penalised. In the following years, many legal experts, medical practitioners, pharmacies, politicians and advocacy organisations will engage in this debate. Some public prosecutors and police officers interpret the law in the criminalising sense and prosecute syringe distribution. On the other hand, the vagueness of the law opens the opportunity to local authorities, law enforcement and judges to tolerate syringe distribution.`
      },
      {
        type: 'paragraph',
        content: `In March 1987, for instance, the local AIDS service organisation in Frankfurt provides syringe exchange at Frankfurt main station. Through negotiations and an agreement with the local police the project is tolerated.`
      },
      {
        type: 'paragraph',
        content: `During the WHO Europe's international congress AIDS and drugs in August 1987 in Bremen, AK Kommunale Drogenpolitik installs the first two automatic syringe exchange machines without official permission. For installing a third machine, they finally get permission from local authorities. In Mai 1988, the Berlin AIDS service organisation installs their first automatic machine with the permission of local authorities.`
      },
      {
        type: 'paragraph',
        content: `In these first years, mainly small local initiatives for acceptance-based drug help and AIDS service organisations implement harm reduction projects. With their actions they oppose the established drug help organisations which are aiming for total abstinence. Often they face a lot of critique from established addiction medicine, drug help organisations, legal experts, and politicians. However, due to their demonstrable success in reducing needle sharing, step by step syringe exchange programmes get officially tolerated as an effective public health measure. And gradually, more and more drug help organisations start to offer syringe distribution. So it is through actions of civil disobedience and subsequent negotiations on the local level that new and successful social realities are created, and a more liberal approach to drug used becomes imaginable.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'Stöver, Heino 2014. Akzeptierende Gesundheitsförderung: Musterbeispiel HIV/AIDS-Prävention? In: Schmidt, Bettina (ed.), Akzeptierende Gesundheitsförderung: Unterstützung zwischen Einmischung und Vernachlässigung. Weinheim: Beltz Juventa, pp.244-228.'
      },
      {
        type: 'text',
        content: 'Paas, Susanne 1987. AIDS-Bekämpfung mit Spritzen-Automaten. Die Tageszeitung, 29.8.1987. Berlin.'
      },
       {
        type: 'text',
        content: 'Interviews conducted within the framework of EUROPACH project.'
      },
    ],
    startDate: '1984',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.dissent, LOGICS.deCriminalisation, LOGICS.publicHealth],
    linksWith: ['1988_public_throw_in', '1988_prisoners_complaint_for', '1989_jes_is_founded', '1990_1st_international_harm', '1992_amendment_of_narcotics', '6_jun_1996_berlin'],
    baseStory: baseStory,
  },

  {
    name: `Berlin: Parliament against syringe exchange`,
    url: `19_sep_1985_berlin`,
    body: [
      {
        type: 'paragraph',
        content: `In a plenary debate on September 12, the Parliament of the state of Berlin rejects the idea to distribute syringes to prisoners. The plenary debate is a reaction to prisoners' complaints: The prisoner magazine Der Lichtblick reported that the authorities of a prison in Berlin Tegel had denied access to an external specialised doctor, who had offered to test prisoners anonymously following prisoners' concerns that their test results would not be treated with confidentiality. After Der Lichtblick scandalised this decision, the Social Democratic Party (SPD) initiates a debate in parliament in which the party Alternative Liste (today: Die Grünen/the Green Party) suggests to provide free condoms and syringes inside Berlin's prisons. This suggestion is rejected by the governing parties. Concerning the condoms, the Senator argues that he had never heard of a prisoner who demands condoms. Michael Gähner, editor in chief of the prisoner journal Der Lichtblick and later policy advisor at Deutsche AIDS-Hilfe criticises this de-sexualisation of the prison, as well as the politicians´ decision to expose the prisoners to a high risk of HIV infection through needle sharing.`
      },
      {
        type: 'paragraph',
        content: `This is the first request by the Green Party on this issue. There is a close link between the oppositional Green Party, the AIDS movement and liberal drug activists. Through the party members, activists and advocates bring their claims into parliament. Thus, many requests for harm reduction follow – until in 1995, one finally passes the parliament and enables the start of two syringe exchange programmes.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'Gähner, Michael 1985. AIDS hinter Gittern. Problematik im Rechtsausschuss. Der Lichtblick 18(October):17-18.'
      },
      {
        type: 'text',
        content: 'Gähner, Michael 1989. AIDS und Strafvollzug. Der Lichtblick 21(March, April):12-13.'
      },
    ],
    startDate: '1985/09/19',
    endDate: '',
    logics: [LOGICS.collaborativeGovernance, LOGICS.dissent],
    linksWith: ['1992_berlin_plenary_debates', '1994_berlin_parliamentary_debate', '6_jun_1996_berlin'],
    baseStory: baseStory,
  },

  {
    name: `UN Convention against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment`,
    url: `1987_un_convention_against`,
    body: [
      {
        type: 'paragraph',
        content: `On June 26, the convention also known as UN Convention Against Torture enters into force. Also the convention is binding, effective control mechanisms are lacking. In 2002, the Optional Protocol to the Convention against Torture and other Cruel, Inhuman or Degrading Treatment or Punishment (OPCAT) will enter into force. With their signature, states such as Germany agree to allow regular visits by independent bodies to places where people are detained in order to report back on the adherence to the UN Convention Against Torture.`
      },
    ],
    externalLinks: [
      {
        url: `https://www.ohchr.org/en/professionalinterest/pages/cat.aspx`,
        text: `https://www.ohchr.org/en/professionalinterest/pages/cat.aspx`
      },
    ],
    sources: [],
    startDate: '1987',
    endDate: '',
    logics: [LOGICS.humanRights],
    linksWith: ['1989_coe_european_convention'],
    baseStory: baseStory,
  },

  {
    name: `WHO Statement from the Consultation on Prevention and Control of AIDS in Prisons`,
    url: '1987_who_statement_from',
    body: [
      {
        type: 'paragraph',
        content: `Deriving from an international expert consultation in November in Geneva, the WHO publishes the Statement from the Consultation on Prevention and Control of AIDS in Prisons.`
      },
      {
        type: 'paragraph',
        content: `This first consensus statement is going to have significant influence on the international discussion on AIDS in prison. Retrospectively, it is considered an important milestone in implementing the principle of equivalence because it states that the measures undertaken by national AIDS programmes "should apply equally to prisons as to the general community".`
      },
      {
        type: 'paragraph',
        content: `In the following years, the growing evidence of HIV infection in prisons worldwide will motivate the WHO to publish guidelines on HIV infection and AIDS in prison. WHO Europe is among the most progressive institutions when it comes to consider and recommend harm reduction.`
      },
    ],
    externalLinks: [
      {
        url: `http://apps.who.int/iris/bitstream/handle/10665/61825/WHO_SPA_INF_87.14.pdf?sequence=1&isAllowed=y`,
        text: `http://apps.who.int/iris/bitstream/handle/10665/61825/WHO_SPA_INF_87.14.pdf?sequence=1&isAllowed=y`
      },
    ],
    sources: [
      {
        type: 'text',
        content: 'Elger, Benice S. 2008. Gesundheitsfürsorge für Strafgefangene im Kanton Genf. In: Hillenkamp, Thomas/ Tag, Brigitte (eds.), Intramurale Medizin im internationalen Vergleich: Gesundheitsfürsorge zwischen Heilauftrag und Strafvollzug im Schweizerischen und internationalen Diskurs. Berlin: Springer, pp. 49-71.'
      },
      {
        type: 'text',
        content: 'Jürgens, Ralf 2006. HIV/AIDS and HCV in prisons: A select annotated bibliography (part 1). International Journal of Prisoner Health 2(1):21-34.'
      },
    ],
    startDate: '1987',
    endDate: '',
    logics: [LOGICS.humanRights],
    linksWith: ['1982_un_principles_of', '1988_prisoners_complaint_for', '1989_reform_of_german', '1990_un_basic_principles', '1993_who_guidelines_on'],
    baseStory: baseStory,
  },

  {
    name: `COE Update of European Prison Rules`,
    url: `1987_coe_update_of`,
    body: [
      {
        type: 'paragraph',
        content: `The Council of Europe revises the European Prison Rules, which function as legal guidelines for the member states' policies on prison health.`
      },
      {
        type: 'paragraph',
        content: `Although this policy consists of non-binding recommendations for the member states, the Committee for the Prevention of Torture (CPT) will gradually start to base its decisions on the EPR, so that the European Human Rights Court uses the EPR as standards for their rulings. Thus, the possibility is created to successfully take legal actions for harm reduction with reference to the EPR.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1987',
    endDate: '',
    logics: [LOGICS.humanRights],
    linksWith: ['1973_coe_european_prison', '1989_coe_european_convention'],
    baseStory: baseStory,
  },

  {
    name: `AIDS-Enquetekommission`,
    url: `1990_aids_enquetekommission`,
    body: [
      {
        type: 'paragraph',
        content: `After three years, the German parliament's study group on AIDS (Enquetekommission Gefahren von AIDS und wirksame Wege zu ihrer Eindämmung, 17 June 1987 – 31 May 1990) issues its final report, in which they make recommendations to the government for the fight against AIDS.`
      },
      {
        type: 'paragraph',
        content: `Harm reduction for people who inject drugs both inside and outside the prison are extensively debated. In many hearings, arguments for and against syringe distribution in prison are discussed. Among those who favour syringe distribution as a health care measure is the director of Bremen's prison Oslebshausen, Eberhard Hoffmann. Conversely, the doctor of the prison in Nurnberg as well as the director of the prison in Munich argue against syringe distribution. They state that there is no abuse of drugs happening and therefore harm reduction is not necessary.`
      },
      {
        type: 'paragraph',
        content: `In their final statement and in the name of public health, the study group recommends considering to make sterile syringes available to prisoners.`
      },
    ],
    externalLinks: [
      {
        url: `https://dipbt.bundestag.de/doc/btd/12/044/1204485.pdf`,
        text: `https://dipbt.bundestag.de/doc/btd/12/044/1204485.pdf`
      },
    ],
    sources: [
      {
        type: 'text',
        content: 'Deutscher Bundestag 1990. Endbericht der Enquete-Kommission "Gefahren von AIDS und wirksame Wege zu ihrer Eindämmung". 11. Wahlperiode. Drucksache 11/7200.'
      },
      {
        type: 'text',
        content: 'Stöver, Heino/Knorr, Bärbel 2014. Spritzenvergabe in (deutschen) Haftanstalten. In: Stöver, Heino/Knorr, Bärbel (eds.), HIV und Hepatitis-Prävention in Haft - keine Angst vor Spritzen! Oldenburg: BIS-Verlag, pp. 31-46.'
      },
      {
        type: 'text',
        content: 'Debus, B. 1987. "Letztlich ratlos" - Interview mit Eberhard Hoffmann, der seit 15 Jahren die Justizvollzuganstalt Oslebshausen leitet. Die Tageszeitung, 30.5.1987, Berlin.'
      },
    ],
    startDate: '1990',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.collaborativeGovernance],
    linksWith: ['1992_berlin_parliamentary_request', '1992_berlin_plenary_debates', '1994_berlin_parliamentary_debate'],
    baseStory: baseStory,
  },

  {
    name: `Prisoner's complaint for sterile syringes`,
    url: `1988_prisoners_complaint_for`,
    body: [
      {
        type: 'paragraph',
        content: `A prisoner jailed in the federal state of Bremen files a disciplinary complaint against the prison authority for confiscating his injection equipment, thereby exposing him to the risk of HIV infection. Drug use is not only prohibited inside prisons due to security and legal reasons. It is also prosecuted in the name of the dominant therapeutic aim of total drug abstinence. In his letter to the attorney general of Bremen, the prisoner expresses the difficulties of a drug-free life inside prison. Boredom, isolation, desolation, lack of social contacts, loneliness and depression make it nearly impossible to stay abstinent. He states: "I am addicted, I am not cured from my addiction just locked away." Since drugs and syringes are circulating inside the prison anyways, the confiscation would not stop him from consuming drugs but increase the risk of getting "punished with a deadly virus". He claims that the attorney general enacts an inconsistent legal stance towards drugs when tolerating the distribution of syringes outside the prison, but prosecuting it inside. This argument seems to point to the principle of equivalence that, although recommended by international governing bodes, has not entered into national legislation yet.`
      },
      {
        type: 'paragraph',
        content: `By referring to his physical and mental fragility, the prisoner further stresses his own vulnerability. He goes on to accuse the attorney general of ignoring his health concerns and his physical integrity and thus demanding the state to enact its duty to care and secure the well being of all citizens. The senior public prosecutor allows the complaint, and the prison authority has to hand the injection equipment back to the prisoner.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'Deutsche AIDS-Hilfe 1989. Chancen und Risiken aktueller Präventions- und Behandlungsansätze am Faktor AIDS bei Drogengebrauch und Abhängigkeit. Expertenhearing der Deutschen AIDS-Hilfe e.V. Berlin: DAH, pp. 212–214.'
      },
    ],
    startDate: '1988',
    endDate: '',
    logics: [LOGICS.citizenship, LOGICS.deCriminalisation, LOGICS.humanitarianism],
    linksWith: ['1984_first_syringe_exchanges', '1982_un_principles_of', '1987_who_statement_from', '1989_reform_of_german'],
    baseStory: baseStory,
  },

  {
    name: `Public "Throw In"`,
    url: `1988_public_throw_in`,
    body: [
      {
        type: 'paragraph',
        content: `In May as a public statement, activists of the AK Kommunale Drogenpolitik in Bremen gather in front of a prison and throw sterile syringes over the prison walls.`
      },
      {
        type: 'paragraph',
        content: `With this action of public civil disobedience, the activists call for the distribution of sterile syringes to drug using inmates as a means for harm reduction. Prisoners support the action and hang banners out of their windows. Afterwards, the director of that particular prison approves of the activists' claims, but cannot initiate syringe distribution without official permission.`
      },
      {
        type: 'paragraph',
        content: `The AK Kommunale Drogenpolitik was founded after two of its founding members travelled to Denmark, UK and the Netherlands to learn about liberal drug policies and harm reduction. Back in Bremen, they founded the working group aiming to advocate for a drug help system based on acceptance, harm reduction, and a humane approach towards drug use`
      },
      {
        type: 'paragraph',
        content: `While engaging with people who use drugs, the working group learns about the high risk of HIV transmission in prisons though needle sharing. As social workers, some of the members initiate counselling group sessions inside jails, and secretly hand sterile syringes to prisoners.`
      },
      {
        type: 'paragraph',
        content: `Later, the activists of the working group co-found Akzept e.V., the federal association for acceptance-based drug work and humane drug policy.`
      },
    ],
    externalLinks: [
      {
        url: `http://www.akzept.org/index.html`,
        text: `http://www.akzept.org/index.html`
      },
    ],
    sources: [
      {
        type: 'text',
        content: 'Interviews conducted within the framework of EUROPACH project'
      },
    ],
    startDate: '1988',
    endDate: '',
    logics: [LOGICS.dissent, LOGICS.deCriminalisation, LOGICS.humanRights],
    linksWith: ['1984_first_syringe_exchanges', '1991_akzept_ev_is'],
    baseStory: baseStory,
  },

  {
    name: `COE Co-ordinated European Health Policy to prevent the Spread of AIDS in Prisons`,
    url: `1988_coe_co_ordinated`,
    body: [
      {
        type: 'paragraph',
        content: `On June 30, the Council of Europe agrees in its Recommendation 1080 upon the Co-ordinated European Health Policy to Prevent the Spread of AIDS in Prisons. The policy recommends “to allow, in the last resort, clean, one-way syringes and clean needles being made available to intravenous drug abusers in prison”. The provision of sterile syringes to prisoners is very cautiously suggested. This policy exemplifies how a public health concern enables a more humane approach to drugs. In the course of fighting HIV/AIDS, chances arise for a productive entanglement of public health and human rights for drug users.`
      },
    ],
    externalLinks: [
      {
        url: `http://semantic-pace.net/tools/pdf.aspx?doc=aHR0cDovL2Fzc2VtYmx5LmNvZS5pbnQvbncveG1sL1hSZWYvWDJILURXLWV4dHIuYXNwP2ZpbGVpZD0xNTExNCZsYW5nPUVO&xsl=aHR0cDovL3NlbWFudGljcGFjZS5uZXQvWHNsdC9QZGYvWFJlZi1XRC1BVC1YTUwyUERGLnhzbA==&xsltparams=ZmlsZWlkPTE1MTE0`,
        text: `http://semantic-pace.net/tools/pdf.aspx?doc=aHR0cDovL2Fzc2VtYmx5LmNvZS5pbnQvbncveG1sL1hSZWYvWDJILURXLWV4dHIuYXNwP2ZpbGVpZD0xNTExNCZsYW5nPUVO&xsl=aHR0cDovL3NlbWFudGljcGFjZS5uZXQvWHNsdC9QZGYvWFJlZi1XRC1BVC1YTUwyUERGLnhzbA==&xsltparams=ZmlsZWlkPTE1MTE0`
      },
    ],
    sources: [],
    startDate: '1988',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.humanRights],
    linksWith: [],
    baseStory: baseStory,
  },

  {
    name: `Reform of German Health Care Law`,
    url: `1989_reform_of_german`,
    body: [
      {
        type: 'paragraph',
        content: `With the 1st of January, the principle of equivalence enters into the German Penitentiary Law. In the course of reforming the national health care legislation, other laws are amended that effect public and individual health. The Penitentiary Law is significantly changed through the reformulation of §61. The article now states that health care services inside prisons should be based upon the same principles and regulations that apply to the public. This paragraph adopts the principle of equivalence that has so far been promoted by transnational governing bodies as a matter of a humane treatment of prisoners.`
      },
      {
        type: 'paragraph',
        content: `The principle of equivalence serves as a strong argument for advocates of prison health to demand harm reduction programs inside prisons. In an interview, a social worker of a local AIDS service organisation explains how she argues for syringe exchanges in prisons: "They [prison authorities] know we are advocating for an acceptance-based approach to drug use. But we also know that drug use is part of a criminal offense. And it is a paradox for many. So they say: 'How can we have a syringe exchange machine here, when it is at the same time prohibited to consume drugs?' And then we say: 'Well, have a look at health care. We do this as a matter of health promotion and prevention. It is also not allowed outside of prisons, but we also find exchange machines outside. Therefore, we aim for the principle of equivalence: same standards inside as outside!'"`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1989',
    endDate: '',
    logics: [LOGICS.publicHealth],
    linksWith: ['1955_un_standard_minimum', '1982_un_principles_of', '1987_who_statement_from', '1988_prisoners_complaint_for', '1990_un_basic_principles'],
    baseStory: baseStory,
  },

  {
    name: `COE European Convention for the Prevention of Torture and Inhuman or Degrading Treatment or Punishment`,
    url: `1989_coe_european_convention`,
    body: [
      {
        type: 'paragraph',
        content: `In February, the European Convention for the Prevention of Torture and Inhumane or Degrading Treatment or Punishment of the Council of Europe enters into force. The convention builds on Article 3 of the European Convention on Human Rights which states that “no one shall be subjected to torture or to inhuman or degrading treatment or punishment”.`
      },
      {
        type: 'paragraph',
        content: `In order to control the adherence to the convention, the European Committee for the Prevention of Torture and Inhuman or Degrading Treatment or Punishment (CPT) starts its work as an independent monitoring body of the Council of Europe. The CPT visits places of detention in the respective member states and issues reports.`
      },
    ],
    externalLinks: [
      {
        url: `https://www.coe.int/en/web/conventions/full-list/-/conventions/treaty/126`,
        text: `https://www.coe.int/en/web/conventions/full-list/-/conventions/treaty/126`
      },
    ],
    sources: [],
    startDate: '1989',
    endDate: '',
    logics: [LOGICS.humanRights],
    linksWith: ['1973_coe_european_prison', '1982_un_principles_of', '1987_un_convention_against', '1987_coe_update_of', '1990_un_basic_principles'],
    baseStory: baseStory,
  },

  {
    name: `JES is founded`,
    url: `1989_jes_is_founded`,
    body: [
      {
        type: 'paragraph',
        content: `At a seminar hosted by Deutsche AIDS-Hilfe in Hamburg in June, the nation-wide network of Junkies, Ex-User and People on Substitution Treatment (German: Junkies, Ex-User und Substituierte, JES) is founded. The wish to create a self-help association exclusively of and for people who use drugs is now put into practice. JES aims at mutual help and advocacy from the perspective of those people mostly affected by drug policies. This includes the demand for decriminalising drug use, and granting a right to consume substances (germ. Recht auf Rausch). Until today, JES remains ambivalent and cautions towards medicalising drug use.`
      },
      {
        type: 'paragraph',
        content: `JES is among the first who promote an acceptance-based approach, and together with Akzept, Deutsche AIDS-Hilfe and local AIDS service organisations they start more and more low-threshold drop-in centres, counselling groups, and needle exchanges for people who use drugs. Their acceptance-based approach proves to be successful, and gradually the established drug help organisations adopt the low-threshold model.`
      },
      {
        type: 'paragraph',
        content: `Since many of its members have spent some time in prison, JES also advocates and protest for harm reduction inside prisons. In some prisons, local JES groups initiate counselling sessions. But after security in prison is going to tighten up during the 90s, many JES members will be denied access to the prison setting.`
      },
    ],
    externalLinks: [
      {
      url:   `http://www.jes-bundesverband.de/`
      },
    ],
    sources: [
      {
        type: 'text',
        content: 'Interviews conducted within the framework of EUROPACH project'
      },
    ],
    startDate: '1989',
    endDate: '',
    logics: [LOGICS.dissent, LOGICS.mutualHelp],
    linksWith: ['1984_first_syringe_exchanges', '1991_akzept_ev_is', '1995_action_week_syringes', '1996_lower_saxony_and'],
    baseStory: baseStory,
  },

  {
    name: `1st international Harm Reduction Conference, Liverpool`,
    url: `1990_1st_international_harm`,
    body: [
      {
        type: 'paragraph',
        content: `The 1st International Conference on the Reduction of Drug Related Harm is held in Liverpool, UK. Liverpool was chosen as hosting city because it was one of the first cities in the UK to introduce harm reduction policies. These policies include the first government-funded needle exchange.`
      },
      {
        type: 'paragraph',
        content: `German civil society organisations such as the Deutsche AIDS-Hilfe, JES and AK Kommunale Drogenpolitik travel to the conference in order to network and share best practice. `
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1990',
    endDate: '',
    logics: [LOGICS.bestPractice],
    linksWith: ['1984_first_syringe_exchanges'],
    baseStory: baseStory,
  },

  {
    name: `1st Münchner AIDS-Tage`,
    url: `1990_1st_münchner_aids`,
    body: [
      {
        type: 'paragraph',
        content: `At the first Münchner AIDS-Tage (engl. Munich AIDS Days) from January 19 to 21, 1990, the working group on prisons gathers and defines the role of the AIDS-Hilfen (engl. AIDS service organisations) within the prison setting. Previously, at the 62. meeting of the Strafvollzugsausschusses der Länder (the federal board of the penitentiary system's representatives of the different German states) from October, 15 to 18, 1988, the political authorities had decided to grant external service and self-help organisations access to the prison setting. The working group now states that the local AIDS-Hilfen should support HIV positive prisoners. Furthermore, it stresses the advocacy task: The AIDS-Hilfen should utter political critique and question the imprisonment of people living with HIV and AIDS; they should organise and lead the political discourse about the entanglement of drug therapy and repression, and create public awareness for the inhumane decisions about prisoners living with AIDS. `
      },
      {
        type: 'paragraph',
        content: `Since then, the main stance of the AIDS-Hilfe derives out of a human rights approach to imprisonment. In interviews with several activists and social workers from AIDS service organisation they repeatedly stated: “Prisoners are punished through deprivation of their liberty, not through deprivation of their right to health.”`
      },
      {
        type: 'paragraph',
        content: `During the emergence of HIV/AIDS, many civil society initiatives mobilised to fight the state´s initial repressive approach to the epidemic. All over Germany, local AIDS service organisations were established, mostly ran by volunteers, and organised under the umbrella of the national association Deutsche AIDS-Hilfe. Successful organising and advocacy helped change the government response to HIV/AIDS, which now builds on a strong partnership between state and civil society organisations. As part of this shift from dissent and opposition to cooperation, governments are starting to support the local and national organisations financially.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: '62. Sitzung des Strafvollzugsausschusses der Länder vom 15. Bis zum 18. Oktober 1985 TOP 4 – AIDS im Strafvollzug. Archival resource: Landesarchiv NRW, NW 0765-22 3/1985-1/1988, Blätter 203-206'
      },
      {
        type: 'text',
        content: 'Michels, Ingo 1990. Münchner AIDS-Tage, 19. bis 21.01.1990 AG Strafvollzug. Documentation of the conference.'
      },
      {
        type: 'text',
        content: 'Interviews conducted within the framework of EUROPACH project'
      },
    ],
    startDate: '1990',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.mutualHelp, LOGICS.dissent, LOGICS.collaborativeGovernance],
    linksWith: ['1996_lower_saxony_and', '6_jun_1996_berlin', 'berlin_end_of_one'],
    baseStory: baseStory,
  },

  {
    name: `UN Basic Principles for the Treatment of Prisoners`,
    url: `1990_un_basic_principles`,
    body: [
      {
        type: 'paragraph',
        content: `In December, the UN Basic Principles for the Treatment of Prisoners are issued and define the principle of equivalence. Principle 9 states that "prisoners shall have access to the health services available in the country without discrimination on the grounds of their legal status.” After the UN promotes the principle of equivalence, European institutions will follow: In 1993, the principle of equivalence will be adopted by the Council of Europe with the CPT's 31st annual report. In this report the CPT will define basic principles for prison health care: access to a doctor, equivalence of care, patient consent and confidentiality, preventive healthcare, humanitarian assistance, professional independence, and professional competence. Whereas in 1998 the Committee of Ministers of the Council of Europe will issue Recommendation No R (98) 7 concerning The Ethical and Organizational Aspects of Health Care in Prison in which they adopt the principle of equivalence. Nevertheless, the German government had already introduced the principle of equivalent into national legislation in 1989 in course of the health care reform.`
      },
    ],
    externalLinks: [
      {
        url: `https://www.ohchr.org/en/professionalinterest/pages/basicprinciplestreatmentofprisoners.aspx`,
        text: `https://www.ohchr.org/en/professionalinterest/pages/basicprinciplestreatmentofprisoners.aspx`
      },
    ],
    sources: [],
    startDate: '1990',
    endDate: '',
    logics: [LOGICS.humanRights],
    linksWith: ['1955_un_standard_minimum', '1982_un_principles_of', '1987_who_statement_from', '1989_coe_european_convention', '1977_reform_of_german', '1993_who_guidelines_on'],
    baseStory: baseStory,
  },

  {
    name: `Akzept e.V. is founded`,
    url: `1991_akzept_ev_is`,
    body: [
      {
        type: 'paragraph',
        content: `On April 28, Akzept e.V., the federal association for acceptance-based drug work and humane drug policy, is founded in Bremen by members of the AK Kommunale Drogenpolitik, Arbeitskreis Drogenhilfe from Cologne, Krisenhilfe from Essen, Junkie Bund from Essen, the AIDS service organisation from Ahlen as well as the Deutsche AIDS-Hilfe.  One year later, the first Akzept congress will be held in Berlin, with many congresses to follow. In 2004, together with Deutsche AIDS-Hilfe and the Wissenschaftliches Institut der Ärzte Deutschlands (WIAD, engl. Scientific Institute of Physicians in Germany), Akzept will start to biannually organise the European Conferences on Prison Health Promotion as an international exchange platform for German speaking countries.`
      },
      {
        type: 'paragraph',
        content: `Two of its founding members, Heino Stöver and Klaus Schuller, start with a transnational path of policy making: Commissioned by the WHO Europe, they conduct a study on practices and policies regarding the provision of sterile needles and syringes in selected European countries. This turn to transnational bodies marks a shift in activist strategies. Transnational bodies and guidelines on public health and human rights are increasingly referred to in order to put pressure on national policy making.`
      },
    ],
    externalLinks: [
      {
        url: `http://www.akzept.org/`,
        text: `http://www.akzept.org/`
      },
    ],
    sources: [
      {
        type: 'text',
        content: 'Aretz, Bernd 2015. „Als Gegengewicht zur Repression weiterhin gebraucht“. Magazin.hiv, 28.4.2015. URL: https://magazin.hiv/2015/04/28/als-gegengewicht-zur-repression-weiterhin-gebraucht/'
      },
            {
        type: 'text',
        content: 'Stöver, Heino/Schuller, Klaus 1992. Praxis und Politik der Vergabe von sterilem Spritz-besteck an Drogenabhängige zur HIV/AIDS-Prävention in einer ausgewählten Zahl von Mitgliedsstaaten der europäischen Region der Weltgesundheitsorganisation (WHO). In: Deutsche AIDS-Hilfe (ed.), AIDS und Drogen II. Berlin: DAH.'
      },
    ],
    startDate: '1991',
    endDate: '',
    logics: [LOGICS.dissent, LOGICS.bestPractice, LOGICS.humanRights],
    linksWith: ['1988_public_throw_in', '1989_jes_is_founded', '1992_berlin_parliamentary_request'],
    baseStory: baseStory,
  },

  {
    name: `Informal syringe exchange in Swiss prison`,
    url: `1992_informal_syringe_exchange`,
    body: [
      {
        type: 'paragraph',
        content: `Franz Probst, the medical practitioner at the Swiss prison Oberschöngrün, secretly gives away sterile syringes to prisoners who use drugs. He faces a moral dilemma since many inmates regularly inject drugs without clean equipment, and thus are put at high risk of HIV and HCV transmission. In order to resolve this dilemma, he disobeys the penitentiary regulations. When his actions come to light, instead of firing the doctor, the prison director listens to Probst's motives, and afterwards follows his suggestions to further distribute injection instruments to prisoners.`
      },
      {
        type: 'paragraph',
        content: `After becoming officially institutionalising, this project gains international attention. For example, a delegation from the state of Hessen travels to Switzerland. Part of this delegation is Wilfried Weyl, head of the nursing service of the prison in Butzbach. In an interview, he explains how this visit inspired to take action. After learning about the Swiss project and later about the pilot projects in Lower Saxony, Berlin and Hamburg, he strongly advocates for a syringe exchange in Hessen, drafts a detailed proposal together with a legal expert, and presents it to the Ministry of Justice of Hessen. The Minister supports the idea. But at a meeting of the union of penitentiary employees (germ. Bund der Strafvollzugsbediensteten Deutschlands) prison employees express their anxiety. According to Weyl, they fear that syringes could be used as weapons. Thus, the Minister refuses to act against the will of prison employees and stops the project.`
      },
    ],
    externalLinks: [
      {
        url: `https://ac.els-cdn.com/S0140673695920471/1-s2.0-S0140673695920471-main.pdf?_tid=9bedfbae-0290-46c0-a183-1e46142b65f0&acdnat=1540305971_67d0b4f9c9f03b3894e41b1dc746cf13`,
        text: `https://ac.els-cdn.com/S0140673695920471/1-s2.0-S0140673695920471-main.pdf?_tid=9bedfbae-0290-46c0-a183-1e46142b65f0&acdnat=1540305971_67d0b4f9c9f03b3894e41b1dc746cf13`
      },
    ],
    sources: [
      {
        type: 'text',
        content: 'Nelles, Joachim/Harding, Timothy 1995. Preventing HIV transmission in prison: a tale of medical disobedience and Swiss pragmatism. The Lancet 346(8989):1507-1508.'
      },
            {
        type: 'text',
        content: 'Interview with Wilfried Weyl'
      },
    ],
    startDate: '1992',
    endDate: '',
    logics: [LOGICS.dissent, LOGICS.humanitarianism, LOGICS.bestPractice, LOGICS.securitisation],
    linksWith: [],
    baseStory: baseStory,
  },

  {
    name: `Berlin: Parliamentary Request for syringes`,
    url: `1992_berlin_parliamentary_request`,
    body: [
      {
        type: 'paragraph',
        content: `The oppositional Green Party requests the governing parties of the state of Berlin to distribute sterile syringes and condoms to prisoners. In its proposal dated to the 4th of March 1992, the Green Party refers to a study conducted by the University of Bremen and the World Health Organisation, which attributes the high risk of HIV transmission in prisons to the penitentiary's prohibition of possessing injecting equipment. Security, criminalisation and HIV infections seem to be interrelated. In line with the recommendations of the Enquetekommission, the party requests to distribute syringes to prisoners in order to decrease the number of HIV infections within prisons.`
      },
      {
        type: 'paragraph',
        content: `The Senator of Justice rejects the proposal with the following arguments:`
      },
      {
        type: 'paragraph',
        content: `(1) Although the amendment of Narcotic Substances Act states that providing syringes cannot be considered as enabling drug use and will thus no longer be penalised, the provision of syringes would at least make drug use easier.`
      },
      {
        type: 'paragraph',
        content: `(2) The Senate has the duty to care for prison employees as well as other inmates and to protect them from potential dangers.`
      },
      {
        type: 'paragraph',
        content: `(3) Allowing needles while at the same time prosecuting drug use inside prisons would create a moral dilemma for the employees who are otherwise instructed to prohibit drug trafficking and use.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'Abgeordnetenhaus von Berlin, 12. Wahlperiode. Antrag der Fraktion Bündnis 90/Die Grünen /AL)/UFV, 4.3.1992. Drucksache 12/1224.'
      },
    ],
    startDate: '1992',
    endDate: '',
    logics: [LOGICS.citizenship, LOGICS.deCriminalisation, LOGICS.evidence, LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['1977_reform_of_german', '19_sep_1985_berlin', '1991_akzept_ev_is', '1990_aids_enquetekommission', '1992_amendment_of_narcotics', '1992_berlin_plenary_debates'],
    baseStory: baseStory,
  },

  {
    name: `Amendment of Narcotics Law`,
    url: `1992_amendment_of_narcotics`,
    body: [
      {
        type: 'paragraph',
        content: `On September 9 the amendment of the German Narcotic Substances Act enters into force. It fully legalises the distribution of syringes and needles to drug users.  In order to legalise the distribution of syringes to drug users by social workers, pharmacies and others, the legislation clarifies that the distribution is no longer considered as enabling an opportunity for unauthorised substance use. This legal amendment was made possible not last through the massive pressure that arose from the semi-illegal syringe distribution that provided evidence for this measure's success.`
      },
    ],
    externalLinks: [
      {
        url: `https://www.bgbl.de/xaver/bgbl/start.xav#__bgbl__%2F%2F*%5B%40attr_id%3D%27bgbl192s1593.pdf%27%5D__1540202105214`,
        text: `https://www.bgbl.de/xaver/bgbl/start.xav#__bgbl__%2F%2F*%5B%40attr_id%3D%27bgbl192s1593.pdf%27%5D__1540202105214`
      },
    ],
    sources: [
      {
        type: 'text',
        content: 'Pant, Anand 2000. Die HIV-Epidemie unter I.v.-Drogenbenutzern: Verlauf, Primärprävention und drogenpolitische Reaktion. In: Marcus, Ulrich (ed.), Glück gehabt? Zwei Jahrzehnte AIDS in Deutschland. Berlin: Blackwell Wissenschaftsverlag, pp.184-210.'
      },
    ],
    startDate: '1992',
    endDate: '',
    logics: [LOGICS.bestPractice, LOGICS.deCriminalisation, LOGICS.evidence, LOGICS.publicHealth],
    linksWith: ['1984_first_syringe_exchanges', '1992_berlin_parliamentary_request', '1992_berlin_plenary_debates', '1993_who_guidelines_on', '6_jun_1996_berlin'],
    baseStory: baseStory,
  },

  {
    name: `Berlin: Plenary debates on syringe distribution`,
    url: `1992_berlin_plenary_debates`,
    body: [
      {
        type: 'paragraph',
        content: `In September, the Green Party initiates a parliamentary debate about syringe programmes in prisons since the amendment of the Narcotic Substances Act decriminalised the distribution of syringes. The stance towards harm reduction in prison among the Members of Parliament remains highly controversial.`
      },
      {
        type: 'paragraph',
        content: `In October, The Green Party makes an oral question to the Parliament of Berlin, asking why prisoners are not provided with sterile syringes since this measure has been officially recommended and decriminalised. The Senator of Justice justifies his rejection decision referring to the obstacles mentioned in the course of an earlier debate. A Green Party member challenges this by arguing that the state's duty to care does also encompass the drug using prisoner; and since an HIV infection can actually be considered a death sentence, ethical reasons require the state to care for prisoner who inject drugs. The Senator explains that although an internal group of experts has recommended syringe exchange programmes, the government had decided otherwise. Among other reasons, to meet the concerns raised by wardens who fear that infected needles might be used as weapons against them.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'Abgeordnetenhaus von Berlin, 12. Wahlperiode. Inhaltsprotokoll Rechtsausschuß 29. Sitzung, 24.9.1992.'
      },
      {
        type: 'text',
        content: 'Abgeordnetenhaus von Berlin, 12.Wahlperiode. 38.Sitzung, 29.10.1992, Plenarprotokoll 12/38.'
      },
    ],
    startDate: '1992',
    endDate: '',
    logics: [LOGICS.citizenship, LOGICS.dissent, LOGICS.humanitarianism, LOGICS.securitisation],
    linksWith: ['19_sep_1985_berlin', '1990_aids_enquetekommission', '1992_amendment_of_narcotics'],
    baseStory: baseStory,
  },

  {
    name: `WHO Guidelines on HIV Infection and AIDS in Prisons`,
    url: `1993_who_guidelines_on`,
    body: [
      {
        type: 'paragraph',
        content: `WHO and UNAIDS publish the Guidelines on HIV Infection and AIDS in Prisons. With regard to health care and prevention of HIV, the authors emphasise that "all prisoners have the right to receive health care, including preventive measures, equivalent to that available in the community without discrimination, in particular with respect to their legal status or nationality." With this paper the WHO adopts the principle of equivalence as standard policy for prison health. Ingo Michels, policy advisor for drugs and prisons at Deutsche AIDS-Hilfe actively engages in drafting these guidelines. The guidelines explicitly apply the principle of equivalence to HIV/AIDS and recommend needle exchange programmes and the continuation of a substitution therapy starting before imprisonment: "In countries where clean syringes and needles are made available to injecting drug users in the community, consideration should be given to providing clean injecting equipment during detention and on release to prisoners who request this."`
      },
      {
        type: 'paragraph',
        content: `Heino Stöver, founding member of Akzept, in an interview calls these guidelines "the next big step". These guidelines could now be used by advocates like themselves to pressure national governments.`
      },
      {
        type: 'paragraph',
        content: `After the amendment of the German Narcotic Substances Law and the legalisation of syringe exchange, these guidelines enable to argue for the provision of harm reduction within the prison setting. Only Switzerland will implement these guidelines fully, Hungary and Italy will partially implement the recommendations (Jürgens 2006, 24).`
      },
      {
        type: 'paragraph',
        content: `Compared to other national and international governing bodies, the WHO can be considered the most progressive institution advocating for harm reduction starting as early as 1993. From 1993, the WHO publishes many influential policies advocating for harm reduction in prisons such as the Moscow Declaration (2003), a Policy Brief on Reducing HIV Transmission in Prisons (2004), Women's Health in Prison (2009), The Madrid Recommendation: Health Protection in Prisons as an Essential Part of Public Health (2010), and a Status Paper on Prisons, Drugs and Harm Reduction (2005). These policies provide "advocates and NGOs (non-governmental organisations) with tool to fight for national policy change." (Stöver/Lines 2006, 71)`
      },
    ],
    externalLinks: [
      {
        url: `http://www.unaids.org/sites/default/files/media_asset/jc277-who-guidel-prisons_en_0.pdf`,
        text: `http://www.unaids.org/sites/default/files/media_asset/jc277-who-guidel-prisons_en_0.pdf`
      },
    ],
    sources: [
      {
        type: 'text',
        content: 'Jürgens, Ralf 2006. HIV/AIDS and HCV in prisons: A select annotated bibliography (part 1). International Journal of Prisoner Health 2(1):21-34.'
      },
      {
        type: 'text',
        content: 'Stöver, Heino/ Lines, Rick 2006. Silence still=death: 25 years of HIV/AIDS in prisons. In: Matic, Srdan et al. (eds.), HIV/AIDS in Europe. Moving from death sentence to chronic disease management. Copenhagen: WHO Regional Office for Europe, pp. 67-85.'
      },
      {
        type: 'text',
        content: 'Interview with Ingo Michels'
      },
      {
        type: 'text',
        content: 'Interview with Heino Stöver'
      },
    ],
    startDate: '1993',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.publicHealth],
    linksWith: ['1955_un_standard_minimum', '1982_un_principles_of', '1987_who_statement_from', '1990_un_basic_principles', '1992_amendment_of_narcotics'],
    baseStory: baseStory,
  },

  {
    name: `ACT UP protest in front of women's prison`,
    url: `1994_act_up_protest`,
    body: [
      {
        type: 'paragraph',
        content: `In January, members of the Anti-AIDS movement ACT UP stage a protest in front of a women's prison. The activists protest in front of a prison in Preungesheim in the state of Hessen for the provision of sterile syringes to the imprisoned women. The Ministry of Justice of the state of Hessen calls explains their rejection with reference to the legal grey area, and the paradox of providing syringes to prisoners who are sentenced for violating the Narcotics Substances Act.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'Keine Spritzen für Gefangene. Frankfurter Rundschau, 17.1.1994, Frankfurt.'
      },
    ],
    startDate: '1994',
    endDate: '',
    logics: [LOGICS.dissent, LOGICS.mutualHelp],
    linksWith: [],
    baseStory: baseStory,
  },

  {
    name: `Berlin: Parliamentary debate on syringe exchanges in prisons`,
    url: `1994_berlin_parliamentary_debate`,
    body: [
      {
        type: 'paragraph',
        content: `In April, the oppositional Green Party brings a request to the Parliament of the state of Berlin to provide prisoners with sterile syringes in order to prevent the spread of HIV among people who inject drugs. The Members of Parliament debate about the proposal controversially. The Green Party combines different logics when arguing for syringe exchange. It refers to the amendment of the Narcotic Substances Act that legalises the distribution of syringes, and thus conquers legal concerns. The party points to the recommendations of the final report of the Enquetekommission and reminds the parliament of the public health concern of preventing the transmission of HIV. They further argue that there has so far been no evidence for any attack using needles as weapons against prison employees. Mobilising evidence should help to render the fear of potential attacks irrational. And by reminding the parliament of the lawsuit recently filed by a prisoner who got infected with the virus while sharing needles in prison, the party addresses the issue of citizenship rights to equivalent health care in prison.`
      },
      {
        type: 'paragraph',
        content: `In the following debate, a member of the Social Democratic Party acknowledges the state´s duty to provide prevention to drug using prisoners, based on the argument that drug use should be considered a pathology. In this sense, the medicalisation of drug use allows applying the right to equivalent health care to the drug using prisoner and make prevention measures available. Other parliamentarians argue that the provision of syringes would create a moral dilemma, since the state and the penitentiary are obliged to prosecute drug possession, and to work toward a drug-free prison, as well as to enable abstinence among drug users. Finally, the Senator of Justice declares her willingness to consult further evidence and expertise. Afterwards she would be willing to consider a small-scale pilot project.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1994',
    endDate: '',
    logics: [LOGICS.citizenship, LOGICS.deCriminalisation, LOGICS.deCriminalisation, LOGICS.dissent, LOGICS.evidence, LOGICS.publicHealth],
    linksWith: ['1977_reform_of_german', '19_sep_1985_berlin', '1990_aids_enquetekommission', '1992_amendment_of_narcotics', '1994_ex_prisoner_sues', '1995_positive_evaluation_of'],
    baseStory: baseStory,
  },

  {
    name: `Ex-prisoner sues state for HIV infection`,
    url: `1994_ex_prisoner_sues`,
    body: [
      {
        type: 'paragraph',
        content: `In September, Andreas Backes, a former Berlin prisoner and drug user, files a lawsuit against the state of Berlin. He claims for damage after he was infected with HIV through injecting drugs with used syringes. In an open letter, Backes explains that since he had regularly been tested and never had any homosexual contacts, his infection could only result from needle sharing during his time of imprisonment. He refers to the statement of the federal Minister of Justice, Sabine Leutheusser-Schnarrenberger, in which she argued that there has been no evidential proof of an increased risk of HIV transmission within the prison setting. Backes now claims that his case can provide clear evidence. Therefore, in order to fulfil the minister's promise to undertake all steps necessary to prevent transmission she would now have to allow needle exchange programmes inside prisons.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1994',
    endDate: '',
    logics: [LOGICS.citizenship, LOGICS.evidence],
    linksWith: ['1994_berlin_parliamentary_debate'],
    baseStory: baseStory,
  },

  {
    name: `Medical Association pro syringes`,
    url: `1994_medical_association_pro`,
    body: [
      {
        type: 'paragraph',
        content: `In October, the Clearing House for Substitution Therapy as part of the Medical Association of Berlin (Clearingstelle für Substitution der Berliner Ärztekammer) issues a statement in favour of syringe distribution in prisons. The Clearing House favours a pilot project in a Berlin prison. In a statement the author, Chaim Jellinek, explicitly argues that the state's duty to care does also encompass the drug using prisoner and thus stresses the prisoner's citizenship rights.`
      },
      {
        type: 'paragraph',
        content: `In his statement, Jellinek gives practical advice for a pilot project and explains how to deal with (1) the fear of potential attacks, (2) the moral dilemma for wardens, and (3) the risk to seduce others to using drugs.`
      },
      {
        type: 'paragraph',
        content: `To counter the fear of prison employees, the author suggests to only use syringes with extremely thin and short needles, and to educate prison staff about the very low transmission rates among incidents with contaminated needles (below 1 %). To solve the moral dilemma among prison authorities, the author suggests to provide education and information to inform about the high risk for drug users. Wardens need to acknowledge that the prison is not a drug-free setting, and thus the state's duty to care for prisoners needs to draw on syringe exchange as an inevitable, and the only effective measure.`
      },
      {
        type: 'paragraph',
        content: `Two years ago, the Medical Association had already expressed their stance: From a medical standpoint, syringe distribution in prisons is necessary. This view is shared by Berlin's Senator of Health, as well as by the federal Minister of Health, resulting in a conflict between the federal and the local Ministries of Health and Ministries of Justice.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'Ärztepräsident für sterile Spritzen im Gefängnis. Der Tagesspiegel, 25.11.1992. Berlin.'
      },
      {
        type: 'text',
        content: 'Clearingstelle für Substitution/Christian Bauer (Chaim Jellinek) 1994. “Vorschlag zur Planung und Durchführung eines "HIV- und Hepatitis-Präventionsprojekts" in einer Berliner Haftanstalt. Unpublished.'
      },
      {
        type: 'text',
        content: 'Christian Bauer (Chaim Jellinek) 1994. Besuch im all-schweizerischen Frauengefängnis Hindelbank, Treffen mit dem Direktor ad int., Herrn M. Lachat; 30.9.94, 10.00 Uhr bis 11.30 Uhr. Unpublished.'
      },
    ],
    startDate: '1994',
    endDate: '',
    logics: [LOGICS.citizenship, LOGICS.evidence, LOGICS.securitisation],
    linksWith: ['1994_survey_among_prison', '1995_positive_evaluation_of'],
    baseStory: baseStory,
  },

  {
    name: `Survey among prison employees`,
    url: `1994_survey_among_prison`,
    body: [
      {
        type: 'paragraph',
        content: `In December, the Senator of Justice of Berlin initiates a survey among prison employees to find out about their attitude towards syringe distribution in prisons. The results of the survey show a clear opposition against syringe distribution. The answers express the moral dilemma faced by wardens, as well as the security concerns that arise. 81,4 % of the employees reject this measure of harm reduction. 75 % consider syringe distribution to be a sign of tolerating drug use. More than three quarters see it as a risk and as a threat to their health, and 75 % fear that they might get attacked by a prisoner using a needle as weapon. More than 60 % are explicitly against a needle exchange pilot project.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1994',
    endDate: '',
    logics: [LOGICS.securitisation],
    linksWith: ['1994_medical_association_pro', 'berlin_end_of_one'],
    baseStory: baseStory,
  },

  {
    name: `Positive evaluation of Swiss syringe programme`,
    url: `1995_positive_evaluation_of`,
    body: [
      {
        type: 'paragraph',
        content: `In 1995, the first scientifically accompanied syringe exchange programme in a European prison is evaluated as effective. In 1994, the prison Hindelbank had started to distribute syringes to inmates through an automatic exchange machine. In their report Pilotprojekt Drogen- und HIV-Prävention in den Anstalten in Hindelbank: Evaluationsbericht (Joachim Nelles et al. 1995), the authors of the accompanying scientific study show the effectiveness of intramural syringe distribution in reducing the transmission of HIV. There was no seroconversion happening during the period of the pilot project.`
      },
      {
        type: 'paragraph',
        content: `The positive evaluation encourages the regional authorities to continue with intramural syringe distribution. Other regional governments follow this example and introduce syringe exchanges in other Swiss prisons.`
      },
      {
        type: 'paragraph',
        content: `During the different stages of the pilot project, delegations from Germany and other European countries visit the programme. Heino Stöver, part of one of these delegations, explains the objective in an interview: "We tried to reduce fears through making those projects more familiar."  Also in September 1994, Chaim Jellinek, member of the Medical Association of Berlin (Ärztekammer Berlin), Doctor and volunteering member of Berliner Justizvollzugsbeirat (a civil society council to control the penitentiary) travels to Hindelbank to meet with the prison's doctor. Back from his visit, he reports about the effectiveness of the programme and issues a proposal for a syringe exchange project in a Berlin prison.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'Nelles, Joachim et al. 1995. Pilotprojekt Drogen- und HIV-Prävention in den Anstalten in Hindelbank: Evaluationsbericht. Bern: Bundesamt fur Gesundheitswesen.'
      },
      {
        type: 'text',
        content: 'Interview with Heino Stöver'
      },
    ],
    startDate: '1995',
    endDate: '',
    logics: [LOGICS.bestPractice, LOGICS.evidence, LOGICS.securitisation],
    linksWith: ['1994_berlin_parliamentary_debate', '1994_medical_association_pro', '1995_scientific_study_shows', '6_jun_1996_berlin'],
    baseStory: baseStory,
  },

  {
    name: `Berlin: Senator of Justice against syringes`,
    url: `1995_berlin_senator_of`,
    body: [
      {
        type: 'paragraph',
        content: `In January, the Senator of Justice of the state of Berlin releases two statements about the fight against AIDS and harm reduction in prison in which she justifies the rejection of syringe exchange programmes in prisons. These statements react to two requests that were brought into parliament by the oppositional Green Party. The Green Party asked the Senate of Justice about its reaction to recent recommendations issued by transnational governing bodies such as the Commission of the European Community and the WHO. These recommendations also introduce syringe provision to drug using prisoners as a possible measure of prevention.`
      },
      {
        type: 'paragraph',
        content: `Heino Stöver noticed within the decades of activism that these international guidelines were only poorly recognised by the German government. Part of the advocacy includes to make international policies seen by the national state. Therefore, civil society organisations like Akzept, AIDS service organisations and JES work together with political parties, especially with those who represent a liberal approach toward drug use like the Green Party.`
      },
      {
        type: 'paragraph',
        content: `In the course of reminding the Berlin government of the international policies, the Senator of Justice reiterates her oppositional stance. She argues that providing needles could seduce other prisoners to intravenous drug use and that the syringes might be used as weapons against wardens. She claims that there is still no substantial evidence: neither is there proof for the causality between imprisonment and infection, nor is there any clear evidence for the harm reducing effects of needle exchanges. Therefore, she awaits the results of the current pilot project in Switzerland with great interest.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'Senatsverwaltung für Justiz, 20.1.1995. Antwort auf die Kleine Anfrage Nr. 6269 vom 12.12.1994.'
      },
      {
        type: 'text',
        content: 'Senatsverwaltung für Justiz, 26.1.1995. Antwort auf die Kleine Anfrage Nr. 6276 vom 16.12.1994.'
      },
      {
        type: 'text',
        content: 'Interview with Heino Stöver'
      },
    ],
    startDate: '1995',
    endDate: '',
    logics: [LOGICS.dissent, LOGICS.evidence, LOGICS.collaborativeGovernance, LOGICS.securitisation],
    linksWith: ['19_sep_1985_berlin', '1993_who_guidelines_on', '1994_survey_among_prison', '1995_positive_evaluation_of'],
    baseStory: baseStory,
  },

  {
    name: `Action week: Syringes into prison!`,
    url: `1995_action_week_syringes`,
    body: [
      {
        type: 'paragraph',
        content: `From June 9 to 16, a nation-wide action week takes place. Organised by the AIDS service organisations, activists claim: “Syringes into prisons!” Nation-wide local AIDS service organisations and other local groups participate in the action week and demand to make syringes available in prisons. In Oldenburg for example, the local AIDS service organisation and JES Oldenburg demonstrate in front of the prison and the district court. They show a banner and distribute leaflets, leading the head of the prison to release a statement to the press. `
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'JES Oldenburg e.V. 1995. Tätigkeitsbericht 1995.'
      },
    ],
    startDate: '1995/06/09',
    endDate: '1995/06/16',
    logics: [LOGICS.dissent, LOGICS.mutualHelp],
    linksWith: ['1989_jes_is_founded'],
    baseStory: baseStory,
  },

  {
    name: `Scientific study shows HIV risk in prisons`,
    url: `1995_scientific_study_shows`,
    body: [
      {
        type: 'paragraph',
        content: `A new research study about infectious diseases among prisoners who inject drugs is published. It clearly identifies imprisonment as high risk factor for getting HIV. A joint research project of the Institute for Tropical Medicine and the Institute for Medical Statistics at Freie University Berlin investigates ways of transmitting infectious diseases among drug users during imprisonment. For this study, the researchers cooperate with the local drug help initiatives Fixpunkt, Berliner AIDS-Hilfe and Strass. Through engaging with these street work initiatives, the researchers get in contact with drug users and are able to conduct interviews on ways of consuming drugs during imprisonment.`
      },
      {
        type: 'paragraph',
        content: `The study finds that needle sharing happens frequently during times of imprisonment, and is thus the main way of transmitting infectious diseases such as HIV and HCV. The researchers state: "The situation in prisons (no sterile injecting equipment, no effective disinfectants), however, is counteractive to prevention measures implemented outside prisons." Directed at policy makers, they recommend: "An important task for future strategies should be to enable IVDU to avoid HIV transmission while in prisons." The researchers present the results of their study to the Senator of Justice. Together with the positive evaluation of the Swiss pilot project, this study leads the minister to start a pilot project in Berlin prisons.`
      },
      {
        type: 'paragraph',
        content: `Conducting this research project became possible because at the beginning of the 90s and due to the emergence has of HIV/AIDS, public health emerged as an important issue of public interest, and funding was made available.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'Müller, R/Stark. K./Guggenmoos-Holzmann, I./Wirth, D./Bienzle, U.1995. Imprisonment: a risk factor for HIV infection counteracting education and prevention programmes for intravenous drug users. AIDS 9(2):183-190.'
      },
    ],
    startDate: '1995',
    endDate: '',
    logics: [LOGICS.evidence, LOGICS.publicHealth],
    linksWith: ['1995_positive_evaluation_of', '6_jun_1996_berlin'],
    baseStory: baseStory,
  },

  {
    name: `Lower Saxony and Hamburg: Yes to syringe exchanges`,
    url: `1996_lower_saxony_and`,
    body: [
      {
        type: 'paragraph',
        content: `The first German syringe exchange programme starts in the women´s prison in Vechta in the state of Lower Saxony on April 15. Automatic machines exchange a used syringe for a sterile one. A few months later, on July 15, a second pilot project in Lower Saxony starts. In the men's prison in Lingen, section Groß Hesepe, employees from medical service and drug counselling hand out sterile syringes in exchange for used ones. The pilot projects are conducted in collaboration with Deutsche AIDS-Hilfe, JES and the local AIDS service organisation (AIDS-Hilfe Emsland).`
      },
      {
        type: 'paragraph',
        content: `Karl-Heinz Keppler, prison doctor in the women´s prison is one of the driving forces behind the pilot project. At a conference on prison halth more than two decades later, he remembered how he conquered the fear of stabbing into a needle or even getting attacked with a needle: "I collected those syringes that were used and shared secretly by the women. Those syringes that were shared among many prisoners for a long time, sometimes self-made, often sharpened with the help of a matchbox, and that caused abcsesses. Together with a new sterile syringe, I went to the prison management and showed the different injection materials. I asked: 'Whould you rather be stabed with a sterile needle or with this one?." Heino Stöver, who conducted the scientific evaluation of the project, remembers how this influenced the Minister's decision: "I think this was another point that finally convinced the Minister of Justice. It needs understanding, of course. But it also needs a personality and courage to take this decision."`
      },
      {
        type: 'paragraph',
        content: `At around the same time, the state of Hamburg also starts a syringe exchange pilot project. In the prison Vierlande, a prison with mostly man on day-release, automatic exchange machines are installed. All pilot projects are scheduled for two years, and prolonged after successful evaluation.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'Stöver, Heino 2002. Drug and HIV/AIDS Services in European Prisons. Oldenburg: BIS-Verlag.'
      },
      {
        type: 'link',
        content: 'https://www.aidshilfe.de/sites/default/files/documents/Band-42-1-Lebhaft-klein_online.pdf',
        url: 'https://www.aidshilfe.de/sites/default/files/documents/Band-42-1-Lebhaft-klein_online.pdf'
      },
    ],
    startDate: '1996',
    endDate: '',
    logics: [LOGICS.bestPractice, LOGICS.collaborativeGovernance, LOGICS.evidence],
    linksWith: ['1989_jes_is_founded', '1990_1st_münchner_aids', '2001_hamburg_right_wing', '2003_lower_saxony_conservative'],
    baseStory: baseStory,
  },

  {
    name: `Berlin: Yes to syringe exchange in 2 prisons`,
    url: `6_jun_1996_berlin`,
    body: [
      {
        type: 'paragraph',
        content: `The Senator of Justice of Berlin decides to start syringe exchange programmes in two prisons on June 6.`
      },
      {
        type: 'paragraph',
        content: `After the Swiss pilot project is positively evaluated, the Berlin Parliament passes a proposal by the oppositional Green Party to start two pilot projects.  The Senator of Justice explains her decision by the fact that the amendment of the Narcotic Substances Act legalised and depenalised distribution of syringes, and needle exchange has proven to be an effective measure to provide HIV and Hepatitis transmission.`
      },
      {
        type: 'paragraph',
        content: `In 1998, a pilot project starts in the women´s prison JVA Lichtenberg. Here, a small automatic machine gives out a sterile syringe after a used one has been insert. The other pilot project is implemented in a men's prison where employees of Berliner AIDS-Hilfe give away syringes in exchange for used ones three times a week. Both are accompanied by a scientific evaluation. Additionally, Berliner AIDS-Hilfe and Fixpunk offer educational seminars to prison employees as well as inmates about drug use, emergency rescue, and infection protection.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'Mitteilung der Senatsverwaltung für Justiz an das Abgeordnetenhaus von Berlin über Vergabe von Einwegspritzen an Gefangene zur AIDS-Prophylaxe, 8.2.1997.'
      },
    ],
    startDate: '1996/06/06',
    endDate: '',
    logics: [LOGICS.bestPractice, LOGICS.deCriminalisation, LOGICS.evidence],
    linksWith: ['1984_first_syringe_exchanges', '19_sep_1985_berlin', '1990_1st_münchner_aids', '1992_amendment_of_narcotics', '1995_positive_evaluation_of', '1995_scientific_study_shows', 'berlin_end_of_one'],
    baseStory: baseStory,
  },

  {
    name: `Hamburg: Right wing government ends syringe programme`,
    url: `2001_hamburg_right_wing`,
    body: [
      {
        type: 'paragraph',
        content: `After the elections in the state of Hamburg, the new right wing populist party decides to stop the syringe exchange in Hamburg's prison Vierlande on October 19. The new government consists out of a coalition between the Christ Conservative Party (CDU) and a small right wing populist party. The conservatives and populists enforce the abolition of Hamburg's only intramural syringe exchange project. This political decision is part of a broader repressive strategy against drugs that focuses on criminalisation and abstinence as main tools. `
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'Stöver, Heino (n.d.). Jahre Spritzenvergabe an DrogenkonsumentInnen im Justizvollzug - das Ende für deutsche Projekte.'
      },
      {
        type: 'link',
        content: 'Published online for Akzept.org.',
        url: 'https://www.akzept.org/pdf/menu_aktuel/10_jahre_spritzenvergabe.pdf'
      },
    ],
    startDate: '2001',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.securitisation],
    linksWith: ['1996_lower_saxony_and'],
    baseStory: baseStory,
  },

  {
    name: `Lower Saxony: Conservative government ends syringe exchanges`,
    url: `2003_lower_saxony_conservative`,
    body: [
      {
        type: 'paragraph',
        content: `On June 1st, the new Minister of Justice (Christ Democratic Party) stops the running syringe exchange programmes in a women's and a men's prison. She bases her decision on legal uncertainties, security risks and ineffectiveness of the programmes to stop needle sharing entirely. Advocates for prison health and harm reduction point to the positive evaluations of both programmes, and criticise that there is neither proof for the concerns raised nor any technical need to end the programmes. Instead, they attribute the decision to political will ignoring scientific reasoning. Heino Stöver, who together with colleagues conducted the scientific evaluation of the project (Meyenberg 1998), concludes that a particular political ideology mobilises prison and prison health as a popular domain for punishment, prosecution and penitentiary. Social exclusion needs to be publicly exercised in order to avoid any sign of well-being, benefits or even hedonism for prisoners.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'Stöver, Heino 2009. Wie Infektionsgefahren  (HIV/AIDS, Hepatitis) im Strafvollzug ausgeblendet und wirksame Prophylaxe-Strategien nicht angewendet werden. In: Stöver, Heino/Pollähne, Helmut (eds.), Komplemente. In Sachen: Kriminologie, Drogenhilfe, Psychotherapie, Kriminalpolitik. Berlin: LIT.'
      },
      {
        type: 'text',
        content: 'Meyenberg, Rüdiger et al. 1998. Infektionsprophylaxe im Niedersächsischen  Justizvollzug. Oldenburg: BIS-Verlag. '
      },
    ],
    startDate: '2003/06/01',
    endDate: '',
    logics: [LOGICS.securitisation],
    linksWith: ['1996_lower_saxony_and'],
    baseStory: baseStory,
  },

  {
    name: `Berlin: End of one syringe programme`,
    url: 'berlin_end_of_one',
    body: [
      {
        type: 'paragraph',
        content: `The Senate of Justice decides to end the syringe exchange in the men's prison on February 28.`
      },
      {
        type: 'paragraph',
        content: `Before deciding on the closure of the exchange programme, the ministry consults different experts, and evaluates the scientific and subjective reports.`
      },
      {
        type: 'paragraph',
        content: `Berliner AIDS-Hilfe, who carried out the exchange manually, urgently demands to continue and institutionalise the project, and even expand it to another prison. They point to the high risk of HIV and HVC transmission through the increasing number of prisoners from Eastern Europe – a region with an "alarming" growth of HIV infections among drug users. At the same time, they criticise the prison authorities' lack of openness to the project. Besides the AIDS service organisation, the Justizvollzugsbeirat, Deutsche AIDS-Hilfe, as well as the Green Party advocate for prolonging the project. The scientific report also evaluates the project as effectively displaying the decrease of risk behaviour, and a very low rate of new infections. Furthermore, the two prison administrations report about their experiences. The report from the women's prison is short and positive. The report from the men's prison points to several difficulties related to the specific implementation: Since this prison had formerly been nearly drug free, the staff was not prepared to deal with the new prisoners who inject drugs, neither was the architecture of the building prepared to prevent drug trafficking. The report opts against the prolonging of the project.`
      },
      {
        type: 'paragraph',
        content: `The programme in the women's prison is carried on, and still exists today as the only syringe exchange programme in Germany.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2004/02/28',
    endDate: '',
    logics: [LOGICS.collaborativeGovernance, LOGICS.evidence, LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['1994_survey_among_prison', '1990_1st_münchner_aids', '6_jun_1996_berlin'],
    baseStory: baseStory,
  },
]
