import { LOGICS } from '../logics/logics';
const baseStory = 'poland';

export const PolandEvents = [
  {
    name: 'UN Single Convention on Narcotic Drugs',
    url: 'un_single_convention_on',
    body: [
      {
        type: 'paragraph',
        content: 'Poland ratified the UN Single Convention on Narcotic Drugs (1961) in 1966, but the state did not exert control over the cultivation of poppy, which in the 1970s was used for a domestic production of the ‘Polish heroin’. '
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'European Monitoring Centre for Drugs and Drug Addiction (2014)'
      },
      {
        type: 'text',
        content: 'Drug policy profile: Poland, EMCDDA Papers, Publications Office of the European Union, Luxembourg.'
      },
    ],
    startDate: '1966',
    endDate: '',
    logics: [],
    linksWith: ['polish_chemistry_students_discovered'],
    baseStory: baseStory,
  },

  {
    name: 'Polish chemistry students discovered ‘Polish heroin’',
    url: 'polish_chemistry_students_discovered',
    body: [
      {
        type: 'paragraph',
        content: '‘Polish heroin’ also known as ‘kompot’ dominated the drug scene in the 1980s. It was a home-brewed drug, produced from poppy straw or juice of poppy head and used in injections. Kompot became highly popular in Central and Eastern Europe because of the fact that poppies were rather easily available and relatively inexpensive. As Kasia Malinowska-Sempruch (2013) states, in the end of the 1970s 90% of patients, hospitalized for drug dependency, were using kompot. At that time “drug abusers” were treated primarily in psychiatric facilities, what helped to shape a perception of drug issue as a medical problem. This way of framing drug use was later radically changed (in the 1990s) due to introduction of criminal law to drug regulations.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: 'European Monitoring Centre for Drugs and Drug Addiction. (2014). Drug policy profile: Poland, EMCDDA Papers, Publications Office of the European Union, Luxembourg.'
      },
      {
        type: 'text',
        content: "Malinowska-Sempruch, K. (2013). HIV among Drug Users in Poland: The Paradoxes of an Epidemic, Columbia University."
      }
    ],
    startDate: '1976',
    endDate: '',
    logics: [],
    linksWith: ['un_single_convention_on', 'setting_up_monar'],
    baseStory: baseStory,
  },

  {
    name: 'Setting up MONAR',
    url: 'setting_up_monar',
    body: [
      {
        type: 'paragraph',
        content: `In August 1981 MONAR association was officially registered under the name of Youth Movement for Counteracting Drug Addiction MONAR (Młodzieżowy Ruch na rzecz Przeciwdziałania Narkomanii MONAR). At the beginning MONAR promoted mainly the drug-free treatment and proposed to see the 'drug problem' as an issue of "vulnerable human being[s], full of contradictions and fears, devoid of natural immunity to stress of every day existence" (Kotański 1984, 11). Throughout years MONAR became a synonym of the anti-drug actions in Poland and gained high visibility in media. The interviewees of the EUROPACH project claimed that MONAR occupied a monopolistic position over the years in the Polish drug politics. MONAR organized also supportive actions for people living with HIV/AIDS, by running charity events or creating shelters for this group at the beginning of the 1990s.`
      },
      {
        type: 'paragraph',
        content: 'The drug-free treatment has been promoted throughout the years as the best solution for dealing with drug dependency problems and has received much higher support from public funds than substitute treatment. However, the specific methods of  therapy  (e.g. isolation in the treatment facility;  lack of official common standards for therapists) raised a question about a possibility of human rights violations, especially in the realm of a lack of the systemic evaluation of these actions (Maresz 2012).'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "interviews conducted under the framework of EUROPACH project; Kotański, M. (1984). Ty zaraziłeś ich narkomanią. Warszawa: Państwowy Zakład Wydawnictw Lekarskich."
      },
      {
        type: 'link',
        content: "Maresz, M. (2012). Przemoc w terapii, Accessed 2 February, 2019.",
        url: "http://jump93.pl/portal/download/file_id/112/pid/30.html"
      }
    ],
    startDate: 'August 1981',
    endDate: '',
    logics: [LOGICS.humanitarianism, LOGICS.security],
    linksWith: ['polish_chemistry_students_discovered', 'first_syringe_exchange_programs', 'monar_in_krakow_introduces'],
    baseStory: baseStory,
  },


      {
    name: 'The 1985 drug law',
    url: 'the_1985_drug_law',
    body: [
      {
        type: 'paragraph',
        content: 'In the mid-1980s the state authorities decided to pass the first law entirely dedicated to illicit drugs and drug use. The regulation situated Poland among countries with a rather liberal approach towards personal possession due to the fact that it concerned primarily drug production and sale. At that time the main illicit substance used by drug users in injections was a homemade poppy-based product (kompot, also called Polish heroin). The drug became popular among young people already in the 1970s, but didn’t not receive any serious policy response. Personal possession was not criminalized, but production, supplies and sales were penalized.  Such a liberal approach towards drug possession could be related to a general more liberal atmosphere in Poland (e.g. Solidarity movement in the 1980s) or to the anti-American position of the Polish authorities during the Cold War. It was the first legal act in the Polish context that defined terms “addiction” or “addicted person”. The law provided also the foundations for medical and social care for people who use drugs – public healthcare centers responsible for treatment could cooperate with NGOs and Church-related initiatives, what was rather unexpected in the communist context.'
      },
      {
        type: 'paragraph',
        content: 'The drug-free treatment has been promoted throughout the years as the best solution for dealing with drug dependency problems and has received much higher support from public funds than substitute treatment. However, the specific methods of  therapy  (e.g. isolation in the treatment facility;  lack of official common standards for therapists) raised a question about a possibility of human rights violations, especially in the realm of a lack of the systemic evaluation of these actions (Maresz 2012).'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "Ustawa o zapobieganiu narkomanii z 31 stycznia 1985 roku (Dziennik Ustaw 1985 nr 4, poz. 15, art. 1"
      },
      {
        type: 'text',
        content: "European Monitoring Centre for Drugs and Drug Addiction. (2014). Drug policy profile: Poland, EMCDDA Papers, Publications Office of the European Union, Luxembourg."
      },
    ],
    startDate: '31 January 1985',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.security],
    linksWith: ['the_1997_drug_abuse', 'setting_up_monar'],
    baseStory: baseStory,
  },

  {
    name: 'MONAR accept drug users living with HIV in all of their centers',
    url: 'monar_accept_drug_users',
    body: [
      {
        type: 'paragraph',
        content: 'In response to the HIV epidemic MONAR decided to open the shelter and treatment centers for people living with HIV in 1988. Additionally, MONAR organized charity events, concerts and protests expressing their solidarity with this group. Over the next few years MONAR activists, however, expressed a skeptical attitude toward harm reduction services. '
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1988',
    endDate: '',
    logics: [LOGICS.humanitarianism, LOGICS.security],
    linksWith: ['setting_up_monar'],
    baseStory: baseStory,
  },

  {
    name: 'The 1988 UN Convention Against Illicit Traffic in Narcotic Drugs and Psychotropic Substances',
    url: 'the_1988_un_convention',
    body: [
      {
        type: 'paragraph',
        content: 'Poland ratified the 1988 UN Convention in 1994. The convention (especially Art. 3(2)) was used in a debate over criminalization of possession of drug use for personal use. The proponents of criminalization of drug use claimed that the convention required states to criminalize drug possession.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "European Monitoring Centre for Drugs and Drug Addiction. (2014). Drug policy profile: Poland, EMCDDA Papers, Publications Office of the European Union, Luxembourg."
      }
    ],
    startDate: '1988',
    endDate: '',
    logics: [LOGICS.criminalisation],
    linksWith: ['the_1997_drug_abuse'],
    baseStory: baseStory,
  },

  {
    name: 'The first HIV diagnosis among people who inject drugs',
    url: 'the_first_hiv_diagnosis',
    body: [
      {
        type: 'paragraph',
        content: 'The first diagnosis of HIV in Poland was made in 1985 while the first person to be diagnosed with AIDS occurred one year later. Through the 1990s, the highest number of infections was reported among people who inject drugs – they constituted 65% of all diagnosed infections until 1997 (between 1985 and 1992, this group made up 77,3% of all diagnosed infections, see Juszczyk, Gładysz, 1993). The first case of HIV infection among people who inject drugs was discovered in September 1988 (three years after the very first diagnosis). This could be related to the fact that the socialist state officially denied the existence of people who use drugs in Poland, or with the exclusion of this group from social and health services.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "Juszczyk, J. and Gładysz, A. (1993). AIDS: epidemiologia, patogeneza, klinika, leczenie, zapobieganie, poradnictwo. Wrocław: Volumed."
      }
    ],
    startDate: '1988',
    endDate: '',
    logics: [],
    linksWith: ['first_syringe_exchange_programs'],
    baseStory: baseStory,
  },


  {
    name: 'First syringe exchange programs',
    url: 'first_syringe_exchange_programs',
    body: [
      {
        type: 'paragraph',
        content: 'The interviewees of the EUROPACH project stated that the first syringe and needle exchange programs were introduced in Poland clearly “out of fear” of HIV/AIDS among people who inject drugs. These programs were rather fragmented and isolated actions.'
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1988', // 1988/89
    endDate: '',
    logics: [],
    linksWith: ['the_first_hiv_diagnosis'],
    baseStory: baseStory,
  },

  {
    name: 'Beginning of the political and economic transformation in Poland',
    url: 'beginning_of_the_political',
    body: [
      {
        type: 'paragraph',
        content: 'During the transition period, new social problems emerged and became visible, and new groups came into being and united into communities. At that time, LGBT communities and HIV/AIDS organizations started to form, and the issue of using drugs appeared in public discourses more and more often. The transformation also signaled the opening of borders, thus enabling international cooperation centered around HIV. It also resulted in the restoration of the freedom of association and development of civil society. Although for many people the social and economic changes related to the transition have been adventitious in terms of economic stability and social stratification, as well as for pursuing individual careers, within Polish society there were also vulnerable groups, for whom transformation meant a reduction in quality of life, an increase in poverty, and a lack of stability (Malinowska-Sempruch, 2013). The landscape of drug use was radically reconstructed by modernization processes taking place in Poland after 1989. Opening borders in 1989 also influenced the illicit drug market and new substances became available (e.g. amphetamine, cannabis, LSD, ecstasy). The cultivation of poppies become illegal in 1990 (a special permission from the authorities was required for cultivation).'
      },
      {
        type: 'paragraph',
        content: 'Citations from the interviews:'
      },

      {
        type: 'paragraph',
        content: 'It was a breakthrough, it was in 1989 when amnesty took place and many people became homeless, the situation of homeless [persons] or of people going out from prison due to the amnesty… at that time we [MONAR] were located close to the central railway station [in Warsaw], our clinic was there. And also people with HIV started to come to our place. [R7]'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "Malinowska-Sempruch, K. (2013). HIV among Drug Users in Poland: The Paradoxes of an Epidemic, Columbia University."
      }
    ],
    startDate: '4 July 1989',
    endDate: '',
    logics: [],
    linksWith: [], // FIX 'establishing_national_bureau_for'
    baseStory: baseStory,
  },

  {
    name: 'First methadone program in Poland',
    url: 'first_methadone_program_in',
    body: [
      {
        type: 'paragraph',
        content: 'In 1992 in the Institute of Psychiatry and Neurology in Warsaw the first substitution program was established. It lasted for six months, and then after a short break, it was continued. Importantly, this program was seen as a research, introduced to verify possible solutions for drug dependency. Thus, initially it was defined not as a policy tool. It was the first methadone program in Central and Eastern Europe. The first methadone program has been described by its founders as “the lesser evil”, abstinence was still perceived as an end goal of treatment for people who use drugs.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "Baran-Furga H., Chmielewska K. (1994). Terapia Metadonem,  Alkoholizm i Narkomania, 1(15), 25-45"
      },
      {
        type: 'text',
        content: "K, Steinbarth-Chmielewska, H. Baran-Furga. (1995). Pilotażowy program metadonowy. Zasady organizacyjne i cele. In: Program Metadonowy na tle innych programów rehabilitacyjnych osób uzależnionych w profilaktyce HIV/AIDS/ Konferencja Międzynarodowa. Jadwisin 12-14 września 1994. Warszawa: Biuro ds. Narkomanii, pp. 75-83"
      }
    ],
    startDate: '20 July 1992',
    endDate: '27 May 1993',
    logics: [LOGICS.bestPractice],
    linksWith: ['first_syringe_exchange_programs', 'a_conference_program_metadonowy', 'regulation_of_the_ministry'],
    baseStory: baseStory,
  },

  {
    name: 'A conference "Program metadonowy na tle innych programów rehabilitacyjnych osób uzależnionych w profilaktyce HIV/AIDS" (Methadone program in the context of other rehabilitation programs for addicts in HIV/AIDS prevention)',
    url: 'a_conference_program_metadonowy',
    body: [
      {
        type: 'paragraph',
        content: `The conference was organized by the National Bureau for Drug Prevention, AIDS Diagnosis and Therapy Centre, and the State University of New York. It could be perceived as an example of such events organized in Poland in the 1990s to discuss possible policy responses toward drug use and drug dependency. The conference included both voices that supported access to substitution treatment by using medical argumentation and framing people who use drugs primarily as 'medical patients' (perceived primarily through the prism of illness), and that rejected methadone treatment, but using to some extent similar arguments (e.g. therapists B. Karaczyńska and J. Sękiewicz framed drug users as deprived of self-control and emotional relations with relatives, living in 'learned helplessness' patients).`
      }
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "K, Steinbarth-Chmielewska, H. Baran-Furga. (1995). Pilotażowy program metadonowy. Zasady organizacyjne i cele. In: Program Metadonowy na tle innych programów rehabilitacyjnych osób uzależnionych w profilaktyce HIV/AIDS/ Konferencja Międzynarodowa. Jadwisin 12-14 września 1994. Warszawa: Biuro ds. Narkomanii, pp. 75-83"
      }
    ],
    startDate: '12-14 August 1994',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.humanitarianism, LOGICS.evidence],
    linksWith: ['first_methadone_program_in', 'setting_up_monar'],
    baseStory: baseStory,
  },

  {
    name: 'International Harm Reduction Development Program (IHRD) for the Central and Eastern Europe',
    url: 'international_harm_reduction_development',
    body: [
      {
        type: 'paragraph',
        content: 'The International Harm Reduction Program in Poland was established for Poland in 1995 despite the dominant model of drug policy, represented by MONAR and based on the abstinence-only rule. Harm reduction approach was still considered as highly controversial and for this reason the first candidate for running the program – Batory’s Foundation – refused to cooperate in organizing harm reduction services. Eventually Kasia Malinowska from the local United Nations Development Programs became an administrator for the program. She became IHRD director in January 2000.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "Coffin, P. O. (2002). Marketing harm reduction: a historical narrative of the International Harm Reduction Development Program. International Journal of Drug Policy, 13, 213-224."
      }
    ],
    startDate: '1995',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.humanRights, LOGICS.bestPractice],
    linksWith: ['monar_in_krakow_introduces', 'meeting_warsaw_to_found', 'undp_projects_for_poland'],
    baseStory: baseStory,
  },

  {
    name: 'MONAR in Kraków introduced harm reduction programs',
    url: 'monar_in_krakow_introduces',
    body: [
      {
        type: 'paragraph',
        content: 'The model of drug dependency treatment since the 1980s has been based on the drug-free approach, which in practice meant detoxification, participation in 2-years programs of residential treatment, strict rules of behaviors, and engaging ex-drug users as therapists. The model has been soon recognized by the state authorities as the right approach what translated itself into financial support for MONAR.  The organization was the biggest beneficiary of the public funds for drug dependency treatment. The association introduced syringe program in the late 1980s., but for a while it was not accepted by the whole organization, causing internal conflicts and tensions. The harm reduction approach was officially adopted by MONAR in 1995, but the first branch that introduced harm reduction approach and services was located in Kraków. The interviewees described the local branch from Kraków as the community with somehow separate ideas and a new approach toward drug use, based on human rights.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "Coffin, P. O. (2002). Marketing harm reduction: a historical narrative of the International Harm Reduction Development Program. International Journal of Drug Policy, 13, 213-224."
      }
    ],
    startDate: '1995',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.humanRights],
    linksWith: ['setting_up_monar', 'first_syringe_exchange_programs', 'international_harm_reduction_development'],
    baseStory: baseStory,
  },


  {
    name: 'UNDP projects for Poland: Support to Civil Society Organisations and Managing the Social and Public Health Consequences of HIV and AIDS',
    url: 'undp_projects_for_poland',
    body: [
      {
        type: 'paragraph',
        content: 'Between 1996 and 2000 UNDP Poland implemented two different programs (Support to Civil Society Organisations and Managing the Social and Public Health Consequences of HIV and AIDS) that tackled HIV epidemic. By promoting an approach based on human rights, public health principles and sharing best practices, both programs aimed at developing “the prevention and management of the HIV/AIDS epidemic in Poland” (Duda, Stroes 2001). The first one, however, addressed primarily raising the capacity of NGOs to provide harm reduction services, while the second one, introduced in cooperation with the Ministry of Health, was focused on strengthening NGOs’ skills to response to social, economic and political changes, including HIV epidemic. Among projects supported by the programs were: drop-in centre in Kraków, methadone program in Zgorzelec, needle & syringe exchange, street working, social events for people living with HIV,  workshops and conferences.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "CDuda, A. & Stroes, E.J. (2001). Terminal Evaluation Report UNDP Poland: AIDS and HIV Project. P0L1961003 Support to Civil Society Organisations, POL/97/003 Managing the Social and Public Health Consequences of HIV and AIDS. Warsaw."
      }
    ],
    startDate: '1996',
    endDate: '2000',
    logics: [LOGICS.publicHealth, LOGICS.humanRights, LOGICS.bestPractice],
    linksWith: ['international_harm_reduction_development'],
    baseStory: baseStory,
  },


  {
    name: 'The 1997 Drug Abuse Prevention Act',
    url: 'the_1997_drug_abuse',
    body: [
      {
        type: 'paragraph',
        content: 'After a couple of years since passing the 1985 drug law, the topic of drug use returned to public debates, when the 1985 regulation started to be considered too liberal by some politicians. Such reflection was provoked on the one hand by transformations of the illicit drug market, and on the other by the 1994 ratification of the UN Convention Against Illicit Traffic In Narcotic Drugs and Psychotropic Substances (1988) (Stasiowski 2009). Another reason for seeing the previous act insufficient could be high rates of HIV infections documented among people who use drugs. Such thought was expressed in a social anti-drug campaign led by a centrist politician - Barbara Labuda under the slogan “Better in prison, than in a cemetery” (Malinowska-Sempruch 2013). The 1985 act was also seen as an unwanted heritage from the previous regime. Another explanation of making drug regulations more restrictive was given by one of the interviewees, who claimed undeniable influence of the American diplomacy on local policy-makers (R10).'
      },
      {
        type: 'paragraph',
        content: 'This is my theory, many people don’t agree with me, and I accept it, but still I claim that it was like this because I observe the role of the United States in anti-drugs policies. I am 100% sure that the American embassy spoke out in this matter. And why do I think so? Because I see it everywhere else. (R10)'
      },
      {
        type: 'paragraph',
        content: 'Fighting for more restrictive anti-drug laws in the Polish Parliament met however with counterarguments, showing positive aspects of decriminalization of possession. As a result of these discussions, the 1997 Drug Abuse Prevention Act was passed with votes from all parliamentary parties. It made personal possession illegal, but allowed to suspend penalties in this matter. It criminalized possession in general, but de-penalized possessing drugs for own consumption (Kuźmicz et al., 2009). What is important here is the fact that “personal possession” was not defined – in every case police, prosecutors and judges had to decide separately. In practice, although the new law gave law enforcement agencies power to penalize drug use, they avoided to prosecute and penalize petty drug consumption. Although the legal solution was presented as modern and based on common sense (European Monitoring…, 2014, p.9), it also started a new path of thinking about drug use – since then it was framed as a legal/criminal issue (Malinowska-Sempruch 2013). The 1997 act was the beginning of further changes towards more restrictive anti-drug regulations. One of the interviewees mentioned that from her perspective the end of 1990s in Poland meant a certain shift towards the conservative social and political climate, in which “those without political power” (and their rights) were abandoned by the state. '
      },
      {
        type: 'paragraph',
        content: '“It is like this that when the shift towards right starts, who is the first to lose? The first are those people who don’t have any special political support, namely drug users, homeless people, different groups without political power, whom it’s easy to leave out and forget about. Nobody will fight for them. And this is not Polish specificity, it just works like this”. (R10)'
      },

    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "Ustawa z dnia 24 kwietnia 1997 roku o przeciwdziałaniu narkomanii (Dziennik Ustaw 1997 nr 75, poz. 468)"
      },
      {
        type: 'text',
        content: "Malinowska-Sempruch, K. (2013). HIV among Drug Users in Poland: The Paradoxes of an Epidemic, Columbia University."
      },
      {
        type: 'text',
        content: "Stasiowski, J. (2009).  Geneza obecnej ustawy o przeciwdziałaniu narkomanii, IN Karanie za posiadanie. Artykuł 62 ustawy o przeciwdziałaniu narkomanii – koszty, czas, opinie, Kuźmicz, Mielecka-Kubień, Wiszejko-Wierzbicka (eds.), Warszawa: Instytut Spraw Publicznych,  pp.13-18"
      },
      {
        type: 'text',
        content: "Kuźmicz, E., Mielecka-Kubień, Z., Stasiowski, J. and Wiszejko-Wierzbicka, D. (2009).Penalizacja Posiadania Narkotyków - Działania Instytucjonalne I Koszty. Warszawa: Instytut Spraw Publicznych."
      }
    ],
    startDate: '27 April 1997',
    endDate: '',
    logics: [LOGICS.security, LOGICS.criminalisation],
    linksWith: ['the_1985_drug_law', 'the_1988_un_convention', 'parliamentary_discussion_over_a', 'the_2000_amendment_to', 'the_2005_act_on'],
    baseStory: baseStory,
  },

  {
    name: 'Meeting in Warsaw to found a harm reduction network in CEE',
    url: 'meeting_warsaw_to_found',
    body: [
      {
        type: 'paragraph',
        content: 'In 1997 in Warsaw various organizations and activists from Central and Eastern Europe met in order to establish a harm reduction network in the region. This cooperation has been initiated by the involvement of UNDP and IHRD in Central and Eastern Europe. '
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: 'June 1997',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.publicHealth],
    linksWith: ['international_harm_reduction_development', 'undp_projects_for_poland'], // FIX 'social_and_public_health'
    baseStory: baseStory,
  },


  {
    name: 'Parliamentary discussion over a new proposal for stricter drug laws',
    url: 'parliamentary_discussion_over_a',
    body: [
      {
        type: 'paragraph',
        content: 'The 1997 act was the beginning of further changes towards more restrictive anti-drug regulations. Soon as it was passed, political debates started again with a clear demand for penalizing personal possession without exceptions. In 1998 the Christian National Union (Zjednoczenie Chrześcijańsko-Narodowe) proposed introducing total penalization of illicit drug possession, indicating possible “enormous educational impact” of this solution.   A debate in Parliament on this amendment evoked the issue of HIV infection, which has been framed as e.g. “dangerous disease”, financial costs of HIV and drug dependency treatment. It also equated drug use with social “pathologies”. Exemplary citations from the debates:'
      },
      {
        type: 'paragraph',
        content: 'I want to draw your attention to a particularly ignoble practice, which is acting of drug dealers in school, offering drugs to children, firstly free of charge. Encouraging [children] to use drugs leads often to a crime or prostitution related to addiction. In this moment I remind you, emphasizing this forcefully that drug users are a group of particular risk when it comes to HIV infections.[Zofia Krasicka-Domka, December 1998]'
      },
      {
        type: 'paragraph',
        content: 'It’s good that today’s debate takes place just after the celebration of the World AIDS Day – 1st December. In Poland we celebrated that day for the second time. In the atmosphere of this day once again we realize threats resulting from the liberalization of the drug use regulations. In Poland the biggest group among people infected with HIV are persons using drugs.[Andrzej Osnowski, December 1998]'
      },
      {
        type: 'paragraph',
        content: 'In the 1990s HIV infections spread also among drug users. The first case was diagnosed in 1997, and today 70% of the virus carriers are drug users. Multiple dangerous diseases, namely hepatitis, venereal diseases,  purulent skin infections, tuberculosis, find very good foundation for development in the body of drug user due to damages in his immunological system. These people require expansive treatment, and the costs are covered by the state [Szymon Józef Niemiec, December 1998]'
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '4 December 1998',
    endDate: '',
    logics: [LOGICS.security, LOGICS.criminalisation, LOGICS.humanitarianism, LOGICS.deCriminalisation],
    linksWith: ['the_1997_drug_abuse', 'the_2000_amendment_to'], // FIX 'social_and_public_health'
    baseStory: baseStory,
  },


  {
    name: 'Regulation of the Ministry of Health on substitution treatment',
    url: 'regulation_of_the_ministry',
    body: [
      {
        type: 'paragraph',
        content: 'The legal status of harm reduction services was determined by the 1997 Drug Abuse Prevention Act. The legal and formal requirements regarding substitution treatment were defined by the Regulation of the Ministry of Health issued in 1999. According to the Regulation, substitution treatment could be applied only after fulfilling special requirements (e.g. being addicted to opiates, or when there is no other method of treatment that could be applied). The aims assigned to substitution treatment were: re-adaptation of people with drug dependency, improvement of physical and psychological well-being of people with drug dependency, reducing HIV infections.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "Rozporządzenie Ministra Zdrowia i Opieki Społecznej z dnia 6 września 1999 r. w sprawie leczenia substytucyjnego (Dz.U. nr 77, poz. 873)"
      }
    ],
    startDate: '6 September 1999',
    endDate: '',
    logics: [LOGICS.criminalisation],
    linksWith: ['first_methadone_program_in'],
    baseStory: baseStory,
  },

  {
    name: 'The 2000 amendment to the drug law',
    url: 'the_2000_amendment_to',
    body: [
      {
        type: 'paragraph',
        content: `The amendment introduced the following three options of punishment for drug possession: \n
                  1. Incarceration for up to three years; \n
                  2. Incarceration for six months to five years  for considerable quantities of drugs; \n
                  3. Fine or incarceration for up to one year in cases of lesser gravity (Stasiowski 2009). \n
                  The 2000 law hampered needle and syringe programs by undermining their legality. According to some researchers (e.g. Malinowska-Sempruch 2013) the law constructed a new type of a criminal - a drug user.`
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "Prawa człowieka – osób zażywających narkotyki i osób zakażonych HIV. (2003) Konferencje i Seminaria 10(53)03,  Biuletyn Biura  Studiów i Ekspertyz Kancelarii Sejmu,  Warszawa: Kancelaria Sejmu."
      },
      {
        type: 'text',
        content: "Stasiowski, J. (2009).  Geneza obecnej ustawy o przeciwdziałaniu narkomanii, IN Karanie za posiadanie. Artykuł 62 ustawy o przeciwdziałaniu narkomanii – koszty, czas, opinie, Kuźmicz, Mielecka-Kubień, Wiszejko-Wierzbicka (eds.), Warszawa: Instytut Spraw Publicznych,  pp.13-18"
      },
    ],
    startDate: '26 October 2000',
    endDate: '',
    logics: [LOGICS.criminalisation, LOGICS.security],
    linksWith: ['the_1997_drug_abuse', 'parliamentary_discussion_over_a', 'consequences_of_the_2000', 'a_conference_on_people', 'the_2005_act_on'],
    baseStory: baseStory,
  },

  {
    name: 'Consequences of the 2000 drug law for harm reduction programs',
    url: 'consequences_of_the_2000',
    body: [
      {
        type: 'paragraph',
        content: 'The 2000 law hampered needle and syringe programs by undermining their legality. Introducing an amendment by the Bureau for Drug Addiction in 2001 stating that one of the state policy goals was harm reduction, “re-legalized” the programs (Ibid.). In 2002 twenty one needle & syringe exchange programs were available in Poland.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: " Prawa człowieka – osób zażywających narkotyki i osób zakażonych HIV. (2003) Konferencje i Seminaria 10(53)03,  Biuletyn Biura  Studiów i Ekspertyz Kancelarii Sejmu,  Warszawa: Kancelaria Sejmu."
      }
    ],
    startDate: '26 October 2000',
    endDate: '',
    logics: [LOGICS.criminalisation, LOGICS.security],
    linksWith: ['studies_showing_social_consequences'],
    baseStory: baseStory,
  },

  {
    name: 'A conference on people who use drugs and HIV in the Polish parliament',
    url: 'a_conference_on_people',
    body: [
      {
        type: 'paragraph',
        content: 'The conference "Human rights of people who use drugs and people living with HIV" was organized by the Committee for Justice and Human Rights, UNDP, Open Society Institute and Commissioner for Human Rights. It was addressed to members of the Polish parliament. During the conference such topics as decriminalization of drug use, consequences of criminalization, violation of human rights and limited access to treatment, healthcare and social services, experienced by people who use drugs, risk of HIV transmission among people who use drugs, were discussed.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "Prawa człowieka – osób zażywających narkotyki i osób zakażonych HIV. (2003) Konferencje i Seminaria 10(53)03,  Biuletyn Biura  Studiów i Ekspertyz Kancelarii Sejmu,  Warszawa: Kancelaria Sejmu."
      }
    ],
    startDate: '17 November 2003',
    endDate: '',
    logics: [LOGICS.humanitarianism, LOGICS.humanRights, LOGICS.criminalisation, LOGICS.deCriminalisation],
    linksWith: ['the_2000_amendment_to'],
    baseStory: baseStory,
  },

  {
    name: 'The 2005 Act on Counteracting Drug Addiction',
    url: 'the_2005_act_on',
    body: [
      {
        type: 'paragraph',
        content: 'The 2005 the Act on Counteracting Drug Addiction  introduced small changes in the regulations (e.g. the maximum penalty for considerable quantities of drugs was increased to 8 years), but didn’t not define “considerable amount of drugs” and “cases of lesser gravity”, what in practice allowed for various interpretations. In 2008 a half of all crimes related to the drug law was about possession. A common practice was that law enforcement authorities, wanting to improve the statistics in terms of work efficiency, focused on petty consumers – mainly young people. Furthermore, “instead of preventing drug abuse it had created a new category of criminals (i.e. drug users), kept police forces busy with minor instead of serious drug oﬀences, and was associated with additional public expenditures estimated at about EUR 20 million every year” (European Monitoring…, 2014, p. 15).'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "Ustawa z dnia 29 lipca 2005 r. o przeciwdziałaniu narkomanii (Dz.U. 2005 nr 179 poz. 1485) European Monitoring Centre for Drugs and Drug Addiction. (2014). Drug policy profile: Poland, EMCDDA Papers, Publications Office of the European Union, Luxembourg."
      }
    ],
    startDate: '29 July 2005',
    endDate: '',
    logics: [LOGICS.criminalisation, LOGICS.securitization],
    linksWith: ['the_1997_drug_abuse', 'the_2000_amendment_to', 'the_2016_2010_national'],
    baseStory: baseStory,
  },

  {
    name: 'Self-organizing for methadone therapy in Gdańsk',
    url: 'self_organizing_for_methadone',
    body: [
      {
        type: 'paragraph',
        content: 'No access to methadone treatment in the Pomeranian region of Poland provoked not only the public debate about right to health in the context of drug use, but also triggered self-organizing of people who use drugs. Władek, who initiated the mobilization in 2007, to receive buprenorphine had to travel to Kraków (located almost 600 km south of Gdańsk) or acquire the drug illegally, which ipso facto could criminalise his therapy. His home town – Gdańsk, one of the largest Polish cities – had offered only abstinence long-term programs for opioid-type substance dependencies. Władek wrote a letter demanding access to substitution treatment, which became viral and reached the President of Gdańsk and the Parliamentary Committee on Health, among others. In his request, Władek demanded respect for patient rights and access to harm reduction by demonstrating his vulnerable position (being  sick, without access to substitution treatment) but also expressed his resistance towards existing living conditions of people who use drugs, criminalization of their behaviors and inequalities in access to healthcare. Together with his friends decided to run an association aiming at promoting harm reduction approach in the region and offering mutual help for people who use drugs. Their story was broadly discussed in media.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'link',
        content: 'A story of criminalization of methadone has been described e.g. in the following article, [access: 4.07.2018]',
        url: "https://www.polityka.pl/tygodnikpolityka/spoleczenstwo/286523,1,metadon-zakazany-w-trojmiescie.read"
      },
      {
        type: 'link',
        content: 'More information available, [access: 4.07.2018]',
        url: "http://gdansk.naszemiasto.pl/artykul/relacja-ze-spotkania-metadon-w-gdansku,3002618,art,t,id,tm.html [access: 4.07.2018]"
      },
      {
        type: 'link',
        content: 'More information available, [access: 4.07.2018]',
        url: "http://wyborcza.pl/duzyformat/1,127290,9394026,Cud_metadonowy.html"
      },
    ],
    startDate: '2007',
    endDate: '2009',
    logics: [LOGICS.mutualHelp, LOGICS.humanRights, LOGICS.citizenship],
    linksWith: ['the_special_rapporteur_on'],
    baseStory: baseStory,
  },

  {
    name: 'Setting up Polish Network of Drug Policy',
    url: 'setting_up_polish_network',
    body: [
      {
        type: 'paragraph',
        content: 'The Polish Network of Drug Policy was set up in 2008 as a civil informal initiative and formalized as a foundation in 2014. The main aim of the network is to initiate and support a debate over drug policies and to promote more progressive approach toward psychoactive substances.'
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2008',
    endDate: '',
    logics: [LOGICS.humanRights],
    linksWith: ['the_prague_declaration', 'warsaw_declaration'],
    baseStory: baseStory,
  },

  {
    name: 'Studies showing social consequences of criminalization of drug use',
    url: 'studies_showing_social_consequences',
    body: [
      {
        type: 'paragraph',
        content: 'A debate on drug use became again vivid after publishing by Krzysztof Krajewski – a professor of law and criminologist from Jagiellonian University – results from a study on consequences of criminalization of drug use in 2008. As one of the respondents stated, the report was “shocking” to many policy-makers and activists: [this study] really set off an avalanche, maybe avalanche is too much to say, but the study moved the drug policy further, because without this research nobody would care about it, I think (R10).'
      },
      {
      type: 'paragraph',
      content: 'Krajewski indicated in his study that since 2000 Poland experienced an alarming increase of arrests in drug possession. While at the beginning of the 21st century a number of arrests was ca. 2000, six years later over 30000 people were arrested for drug possession (Malinowska-Sempruch 2013, 56-57). Furthermore, it has shown that 60% of all arrests was an outcome of the routine police work among young people, and only 20% were the result of special police operations  (Krajewski 2008). This suggested that police instead of focusing on drug trafficking, was improving the statistics by arresting petty consumers. In 55% of cannabis possession cases and almost 60% of amphetamines’ possessing the amount of drugs was less than 1 gram (Ibid.). Another important finding from the study indicated that 76% of defendants did not have a lawyer while negotiating with the prosecutor, what could suggest serious human rights violations. The discussion about the findings has shown that the drug regulations missed their primarily goals and did not reduce drug trafficking. The law also did not discourage young people from using drugs, as it was intended to, but only changed the pattern of drug use. The study was also exceptional, because it drew attention of politicians and policy-makers to the social consequences of the drug law  (R10). Another very influential study, conducted by the Institute of Public Affairs (Instytut Spraw Publicznych) more or less at the same time, has shown similar data and recommended several changes in drug law and policies (Kuźmicz, Mielecka-Kubień, Wiszejko-Wierzbicka 2009). Both studies provoked a 2-years debate on the one hand on social consequences of the 2000 regulations, and on the need of liberalization of the drug law on the other hand. It was the first moment that mobilized to such an extent both sides: liberal/leftist and right-wing media and communities.'
      }
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "Krajewski, K. (2008), Sprawy o posiadanie narkotyków w praktyce sadów krakowskich, raport z badań, Jagiellonian University, Kraków"
      },
      {
        type: 'text',
        content: "Kuźmicz, E., Mielecka-Kubień, Z., Stasiowski, J. and Wiszejko-Wierzbicka, D. (2009).Penalizacja Posiadania Narkotyków - Działania Instytucjonalne I Koszty. Warszawa: Instytut Spraw Publicznych."
      },
      {
        type: 'text',
        content: "Malinowska-Sempruch, K. (2013). HIV among Drug Users in Poland: The Paradoxes of an Epidemic, Columbia University."
      }
    ],
    startDate: '2008',
    endDate: '2009',
    logics: [LOGICS.criminalisation, LOGICS.humanRights],
    linksWith: ['the_2000_amendment_to', 'the_2005_act_on', 'consequences_of_the_2000'],
    baseStory: baseStory,
  },

  {
    name: 'The Special Rapporteur on the right of everyone to the enjoyment of the highest attainable standard of physical and mental health visited Poland',
    url: 'the_special_rapporteur_on',
    body: [
      {
        type: 'paragraph',
        content: 'The Special Rapporteur visited in 2009 Warsaw and Gdańsk where he met with representatives of local NGOs. In his report he underlined the Tri-City region (Gdańsk, Sopot, Gdynia) offered only drug-free programs and that people who use drugs did not have access to substitution treatment. The recommendations regarding harm reduction were: "The Special Rapporteur urges Poland to consider the following recommendations in the area of harm reduction policies and practices:'
      },
      {
        type: 'paragraph',
        content: '(a) Ensure that needle and syringe programmes, opioid substitution therapy and other harm reduction strategies become widely available throughout the country;'
      },
      {
        type: 'paragraph',
        content: '(b) To establish, without further delay, an opioid substitution programme in the Tri-City region of Gdansk, Sopot and Gdynia;'
      },
      {
        type: 'paragraph',
        content: '(c) Amend the National Law on Counteracting Drug Addiction to avoid penalization of the possession of minute quantities of drugs, in order to foster access to substitution therapy for people using drugs;'
      },
      {
        type: 'paragraph',
        content: '(d) Ensure the informed and active participation of people using drugs and other marginalized groups at the national, regional, and local level in the establishment of policies and programmes;'
      },
      {
        type: 'paragraph',
        content: '(e) Include the participation of people living with HIV and those groups most at risk of HIV in HIV/AIDS-related educational projects and campaigns;'
      },
      {
        type: 'paragraph',
        content: '(e) Include the participation of people living with HIV and those groups most at risk of HIV in HIV/AIDS-related educational projects and campaigns;'
      },
      {
        type: 'paragraph',
        content: '(f) Ensure the enactment and implementation of a comprehensive antidiscrimination and equality law to help ensure the full enjoyment of the right to health, based on equality and non-discrimination within the State."'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'link',
        content: 'Accessed 2 February, 2019.',
        url: "https://documents-dds-ny.un.org/doc/UNDOC/GEN/G10/134/03/PDF/G1013403.pdf?OpenElement"
      },
      {
        type: 'link',
        content: 'Accessed 2 February, 2019.',
        url: "http://fileserver.idpc.net/alerts/E-C12-POL-CO-5.pdf"
      }
    ],
    startDate: '05/05/2009',
    endDate: '05/11/2009',
    logics: [LOGICS.humanRights, LOGICS.criminalisation],
    linksWith: ['self_organizing_for_methadone'],
    baseStory: baseStory,
  },

  {
    name: 'Debate "Methadone in Gdańsk"',
    url: 'debate_methadone_in_gdansk',
    body: [
      {
        type: 'paragraph',
        content: 'In response to voices demanding access to substitution treatment in the Pomeranian region, different organizations: Klub Krytyki Politycznej w Gdańsku (Gdańsk Club of the Political Critique), Open Society Institute, Polska Sieć ds. Polityki Narkotykowej (Polish Network of Drug Policy), Stowarzyszenie Jump 93 (Jump 93 Association) organized a debate on a right to substitution treatment, access to health and human rights of people who use drugs. They invited harm reduction activists, medical doctors, and people who use drugs.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'link',
        content: "[access: 4.07.2018]",
        url: "http://krytykapolityczna.pl/narkopolityka/polskienarko/metadon-w-gdansku-relacja/"
      }
    ],
    startDate: '2 April 2009',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.mutualHelp],
    linksWith: ['self_organizing_for_methadone', 'the_special_rapporteur_on'],
    baseStory: baseStory,
  },

  {
    name: 'The Prague Declaration',
    url: 'the_prague_declaration',
    body: [
      {
        type: 'paragraph',
        content: 'The Prague Declaration on the principles of effective local drug policy was prepared during the conference Urban Drug Policies in the Globalised World (organized in September 30th – October 2nd, 2010 in Prague, Czech Republic), focused on substance use in the urban environment and the exchange of experiences in implementing evidence-informed policies to best mitigate its harms. The document promoted human rights approached in local drug polices, public health and public safety as goals of the effective drug policy, cooperation between national and local policy-makers and authorities in shaping, implementing and evaluating drug policies.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'link',
        content: "[access : 5.02.2019]",
        url: "http://www.praguedeclaration.com/en/"
      }
    ],
    startDate: '29 September 2009',
    endDate: '2 October 2009',
    logics: [LOGICS.publicHealth, LOGICS.evidence, LOGICS.humanRights],
    linksWith: ['setting_up_polish_network', 'warsaw_declaration'],
    baseStory: baseStory,
  },

  {
    name: 'The Polish government announces war against NPS',
    url: 'the_polish_government_announces',
    body: [
      {
        type: 'paragraph',
        content: 'In 2008 shops and websites legally selling ‘dopalacze’ (New Psychoactive Substances) emerged in the large Polish cities (a number of shops in 2010 came to 1000). Dopalacze were marketed primarily as legal ‘party drugs’. The media debate around NPS focused on a risk of poisonings, especially among young people.'
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2010',
    endDate: '',
    logics: [LOGICS.securitization],
    linksWith: ['introducing_npss_dopalacze_to', 'npss_dopalacze_treated_as'],
    baseStory: baseStory,
  },

  {
    name: 'Introducing NPS (‘dopalacze’) to the Polish drug law',
    url: 'introducing_npss_dopalacze_to',
    body: [
      {
        type: 'paragraph',
        content: 'In response to media debates over NPS, Polish government in 2009 and 2010 decided to introduce control and criminalize over 90 novel psychoactive substances. The amendment of the drug law from 2010 introduced a definition of NPS, understood as “a substance of natural or synthetic origin in any physical state or a product, plant, mushroom or any part thereof containing such a substance, used instead of a narcotic drug or a psychotropic substance or for the same purposes as a narcotic drug or a psychotropic substance, whose manufacture and placing on the market is not governed by separate regulations; regulations on the general safety of products do not apply to substitute drugs” and banned promoting the NPS.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'text',
        content: "The amended Act of 20 March 2009 on counteracting drug addiction [Dz.U. ‘Journal of Laws’ of 2009 No. 63 item 520]"
      },
      {
        type: 'text',
        content: "The amended Act of 10 June 2010 on counteracting drug addiction [Dz.U. ‘Journal of Laws’ of 2010 No. 143 item 962]"
      }
    ],
    startDate: '2009', // FIX 2009/2010
    endDate: '',
    logics: [LOGICS.securitization],
    linksWith: ['the_2005_act_on', 'the_polish_government_announces', 'npss_dopalacze_treated_as'],
    baseStory: baseStory,
  },

  {
    name: 'The Act counteracting drug addiction changed',
    url: 'introducing_npss_dopalacze_to',
    body: [
      {
        type: 'paragraph',
        content: 'Due to the article 62 on drug possession was slightly changed (prosecutors could suspend criminal charges when the amount of drugs for personal was small). However, Polish drug law remained as strict as it was before despite this amendment.'
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1 April 2011',
    endDate: '',
    logics: [LOGICS.criminalisation, LOGICS.deCriminalisation],
    linksWith: ['studies_showing_social_consequences', 'the_special_rapporteur_on'],
    baseStory: baseStory,
  },

  {
    name: '"Saying No to Costly Drug Laws" Article in New York Times',
    url: 'introducing_npss_dopalacze_to',
    body: [
      {
        type: 'paragraph',
        content: 'The former president of Poland – Aleksander Kwaśniewski – expressed regret over his past endorsement of the 2000 law and published an article in New York Times.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'link',
        content: 'https://www.nytimes.com/2012/05/11/opinion/saying-no-to-costly-drug-laws.html',
        url: "https://www.nytimes.com/2012/05/11/opinion/saying-no-to-costly-drug-laws.html"
      }
    ],
    startDate: '10 May 2012',
    endDate: '',
    logics: [LOGICS.criminalisation, LOGICS.deCriminalisation],
    linksWith: ['studies_showing_social_consequences'],
    baseStory: baseStory,
  },

  {
    name: 'The 2016-2010 National Health Program introduces harm reduction',
    url: 'the_2016_2010_national',
    body: [
      {
        type: 'paragraph',
        content: 'The National Health Program introduces harm reduction as one of its priorities and an official instrument of the state policy.'
      },
    ],
    externalLinks: [],
    sources: [
      {
        type: 'link',
        content: "Source: Rozporządzenie Rady Ministrów z dnia 4 sierpnia 2016 w sprawie Narodowego Programu Zdrowia na lata 2016-2016, Accessed 2 February, 2019.",
        url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20160001492/O/D20161492.pdf'
      },
    ],
    startDate: '2016',
    endDate: '2020',
    logics: [LOGICS.publicHealth],
    linksWith: ['the_2005_act_on'],
    baseStory: baseStory,
  },

  {
    name: 'Warsaw Declaration',
    url: 'warsaw_declaration',
    body: [
      {
        type: 'paragraph',
        content: 'As a result of the 2nd International Conference "Urban Drug Policy 2016" in Warsaw, Warsaw Declaration - a document with recommendations for European cities regarding urban  drug policies - has been prepared. The document was based on a critical evaluation of the Prague Declaration and stated that a drug-free world was unrealistic as a concept. It promoted developing and implementing evidence-informed drug policies, programs and harm reduction services at the local level.'
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '17 February 2016',
    endDate: '',
    logics: [LOGICS.evidence, LOGICS.publicHealth],
    linksWith: ['setting_up_polish_network', 'the_prague_declaration'],
    baseStory: baseStory,
  },

  {
    name: 'NPSs (‘dopalacze’) treated as drugs in the Polish drug law',
    url: 'npss_dopalacze_treated_as',
    body: [
      {
        type: 'paragraph',
        content: 'Polish right wing government introduced the new amendment to the anti-drug law, in which new substances are covered by the criminal law. According to the new regulation, the list of the controlled substances will be issued by the regulation of the Minister of Health, which means that criminalizing ‘legal highs’ faster than it was before.'
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '21 august 2018',
    endDate: '',
    logics: [LOGICS.criminalisation, LOGICS.securitization],
    linksWith: ['the_polish_government_announces', 'introducing_npss_dopalacze_to'],
    baseStory: baseStory,
  },
]