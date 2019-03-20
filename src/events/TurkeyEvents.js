import { LOGICS } from '../logics/logics';
const baseStory = 'turkey';

export const TurkeyEvents = [
  {
    name: `Civil Code of France (CC)`,
    url: `civil_code_of_france`,
    body: [
      {
        type: 'paragraph',
        content: `The Napoleonic Code (French: Code Napoléon; officially Code civil des Français, referred to as (le) Code civil) is the French civil code that was established under Napoleon in 1804. It was drafted by a commission of four jurists and entered into force on 21 March 1804. The Code, with its stress on clearly written and accessible law, significantly contributed to replacing the previous patchwork of feudal laws. Historian Robert Holtman regards it as one of the few documents that have influenced the whole world (see Robert B. Holtman, The Napoleonic Revolution. Baton Rouge: Louisiana State University Press, 1981) `
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1804',
    endDate: '',
    logics: [LOGICS.humanRights, LOGICS.securitisation],
    linksWith: ['turkish_civil_code_türk'],
    baseStory: baseStory,
  },

  {
    name: `Red Crescent (Kızılay)`,
    url: `red_crescent_kızılay`,
    body: [
      {
        type: 'paragraph',
        content: `The Turkish Red Crescent (Turkish: Türk Kızılayı (official) or Kızılay (for short) is the largest humanitarian organization in Turkey, and is part of the International Red Cross and the Red Crescent Movement. The organization was founded in the Ottoman Empire in 1868, partly in response to experiences from the Crimean War, in which disease overshadowed battle as the main cause of death and suffering among Turkish soldiers. It was the first Red Crescent society of its kind and one of the most important charity organizations in the Muslim world (https://en.wikipedia.org/wiki/Turkish_Red_Crescent). According to the Red Crescent (Kızılay), the mission of the organization is: "Providing aid for needy and defenseless people during disasters and regular periods as a proactive organization, developing cooperation in the society, providing safe blood (LINK TO BLOOD and BLOOD PRODUCTS LAW) and decreasing vulnerability". (see the website of KIZILAY: www.kizilay.org.tr/Kurumsal)`
      },
      {
        type: 'paragraph',
        content: `EXTRA INFO: In one of his statements, Ümit Ulukaya claimed to have been infected with HIV by way of an injection from Kızılay. However, he never elaborated further on this statement in court proceedings or in media reports. Red Crescent (Kızılay) also never referred back to the assertion. (See the report from 07 May 2006 in the newspaper Hürriyet: www.hurriyet.com.tr/kelebek/esine-bilerek-aids-bulastirmaktan-7-5-yil-ceza-alan-adam-yeniden-evlendi-4370590)`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1868',
    endDate: '2006',
    logics: [LOGICS.humanitarianism],
    linksWith: ['blood_and_blood_products', 'case_ümit_ulukaya'],
    baseStory: baseStory,
  },

  {
    name: `Zanardelli Code, the old Penal Code of Italy`,
    url: `zanardelli_code_the_old`,
    body: [
      {
        type: 'paragraph',
        content: `The 1889 Italian Penal Code, commonly known as the Zanardelli Code (Italian: Codice Zanardelli), was the penal code in force in the Kingdom of Italy from 1890 to 1930. It was named after Giuseppe Zanardelli, then Minister of Justice, who promoted the approval of the code. It unified the penal legislation in Italy, abolished capital punishment and recognised the right to strike. The old Turkish Criminal Law was based on the Zanardelli Code.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1889',
    endDate: '1930',
    logics: [LOGICS.deCriminalisation, LOGICS.securitisation],
    linksWith: ['the_old_turkish_penal', 'eu_access_and_harmonization'],
    baseStory: baseStory,
  },

  {
    name: `German Civil Code - Bürgerliches Gesetzbuch (BGB)`,
    url: `german_civil_code_bürgerliches`,
    body: [
      {
        type: 'paragraph',
        content: `The German Civil Code (BGB) was codified in 18 August 1896. It is the central instrument dictating German general private law according to which the state subject is understood as a national citizen (civis). The BGB defines rights between private persons and is thus to be distinguished from public law. Together with its statutory texts (ex. commonhold property law, the insurance contract act, the life partnership law, general equal treatment act), it constitutes the general private law. The general private law is extended through special civil laws, which establish unique terms of regulation for particular subject areas or professional groups, such as commercial law or collective bargaining laws for merchants. At the same time, aside from an annex, the BGB does not offer a comprehensive codification of civil law.`
      },
      {
        type: 'paragraph',
        content: `The BGB follows a modified pandectist structure, derived from Roman law: like other Roman-influenced codes, it regulates the law of persons, property, family and inheritance, but unlike the French or Austrian civil code, a chapter containing generally applicable regulations is placed first. Consequently, the BGB contains five main parts (or "books"): the general part (“allgemeiner Teil”), Articles 1 through 240, comprising regulations that have impact on all of the other four parts, such as personhood and civil status, emancipation, contractual capacity, declarations of will, rescission, formation of contracts, limitation periods, and agency; the law of obligations (“Schuldrecht”), Articles 241 through 853, describing contractual obligations and other civil obligations, including torts and unjust enrichment; property law (“Sachenrecht”), Articles 854 through 1296, describing possession, ownership, other property rights (e.g. servitudes, security interests, rent charge, land charge), and how those rights can be transferred; family law (“Familienrecht”), Articles 1297 through 1921, describing marriage, marital property schemes, legal guardianship, and other legal relationships among family members; inheritance law (“Erbrecht”), which regulates what happens to a deceased's estate; as well as the law of wills and contracts concerning succession (pacta successoria) (see C. Meyer-Kretschmer 2013: Die Entwicklung des Bürgerlichen Gesetzbuchs, in: Rechtsgeschichte. URL: www.juraindividuell.de/blog/die-entwicklung-des-buergerlichen-gesetzbuchs/)`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1896/08/18',
    endDate: '2018/07/01',
    logics: [LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['the_old_turkish_penal', 'the_new_turkish_civil'],
    baseStory: baseStory,
  },

  {
    name: `Swiss Civil Code`,
    url: `swiss_civil_code`,
    body: [
      {
        type: 'paragraph',
        content: `The Swiss Civil Code from 10 December 1907 (last referenced on 1 January 2018) dealt above all with the regulation of private law, including the regulation of marriage, faith, inheritance and family law. The old Turkish Civil Code was largely based on this Swiss Civil Code (see the website of the Swiss Federal Council through the portal of the Swiss government: www.admin.ch/gov/en/start.html)`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1907',
    endDate: '2018',
    logics: [LOGICS.securitisation],
    linksWith: ['the_old_turkish_penal'],
    baseStory: baseStory,
  },

  {
    name: `Turkish Civil Code (Türk Medeni Kanunu)`,
    url: `turkish_civil_code_türk`,
    body: [
      {
        type: 'paragraph',
        content: `The Turkish Civil Code deals comprehensively with the core areas of private law, including the relationship between individuals. The old Turkish Civil Code from 1926 is based on the Swiss Civil Code. During the EU reform process, the old law from 1926 was repealed and the new Civil Code was adopted on 02 November 2001. (see: Kaneti, S . "A General Review of the New Turkish Civil Code Project". İstanbul Üniversitesi Hukuk Fakültesi Mecmuası 52 (2011): 335-344; http://dergipark.gov.tr/download/article-file/95725)`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1926/02',
    endDate: '2001/11/02',
    logics: [LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['swiss_civil_code', 'eu_access_and_harmonization', 'the_old_turkish_penal'],
    baseStory: baseStory,
  },

  {
    name: `Health Certificate from a State Medical Institution for Marriage`,
    url: `health_certificate_from_a`,
    body: [
      {
        type: 'paragraph',
        content: `According to Turkish marriage requirements, persons who would like to legally enter into a marriage must acquire an official health certificate (LINK TO EVLENDİRME YÖNETMELİĞİ), which obligates that they are tested for various health conditions. According to these requirements, a positive HIV test does not hinder the possibility to get married.`
      },
      {
        type: 'paragraph',
        content: `EXTRA INFO: In the case of Ümit Ulukaya and Sevgi Ulukaya (following a divorce from Sevgi Zindan), both partners were tested in Antalya for various health conditions. At this time, Ümit Ulukaya was living with HIV. The results of his health tests were not shared with his former partner, Sevgi Ulukaya. For this reason, she wanted to bring the office providing the certificate to court for negligence. In a statement, she emphasized that the responsible health authorities in Antalya should have informed her of Ümit Ulukaya’s positive HIV status, and generally should forewarn individuals getting married to persons living with the virus. `
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1926',
    endDate: '2003',
    logics: [LOGICS.humanitarianism, LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['regulation_on_marriage_procedures', 'case_ümit_ulukaya', 'sevgi_zindan_ulukaya'],
    baseStory: baseStory,
  },

  {
    name: `The old Turkish Penal Code`,
    url: `the_old_turkish_penal`,
    body: [
      {
        type: 'paragraph',
        content: `Turkish Penal Code (Law No. 765 of March 1, 1926) (Eski Türk Ceza Kanunu TCK)`
      },
      {
        type: 'paragraph',
        content: `The old Turkish Penal Code was introduced on 1 March 1926 and then repealed on 5 June 2005. It was based on the old Italian Criminal Code from 1890, which is also known as the Zannerdelli Code (LINK TO ZANNERDELLI CODE). Among the changes made as part of EU accession negotiations, (LINK TO EU-Access and Harmonization packages), a new Penal Code was adopted on 29 September 2004 (LINK TO NEW TURKISH PENAL CODE).`
      },
      {
        type: 'paragraph',
        content: `EXTRA INFO: Ümit Ulukaya (LINK TO ÜMIT ULUKAYA) was first sentenced to 2 years, 2 months and 20 days in prison based on the old Penal Code. Both the claimant, Sevgi Ulukaya (LINK TO STORY SEVGI ULUKAYA), and accused, Ümit Ulukaya, appealed the decision. On 12 October 2002, the court determined that the decision was not valid due to “inadequate investigations” such that the case then needed to be determined based on renewed court proceedings.`
      },
      {
        type: 'paragraph',
        content: `In the second case, Ümit Ulukaya was sentenced to 8 years and 10 months in prison for “intentional bodily harm.” Ulukaya’s lawyer appealed for this decision to be reviewed by a higher instance. Due to the treatment and therapy needed by the accused, the case was not further negotiated (LINK TO The Law on the Execution of Penalties and Security Measures).`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1926/03/01',
    endDate: '2018/06',
    logics: [LOGICS.deCriminalisation, LOGICS.humanitarianism, LOGICS.securitisation],
    linksWith: ['zanardelli_code_the_old', 'eu_access_and_harmonization', 'turkish_criminal_code_new', 'the_law_on_the', 'case_ümit_ulukaya', 'sevgi_zindan_ulukaya'],
    baseStory: baseStory,
  },

  {
    name: `Turkish Armed Forces’ Health Eligibility Regulations for Recruits`,
    url: `turkish_armed_forces_health`,
    body: [
      {
        type: 'paragraph',
        content: `The “Turkish Armed Forces’ Health Eligibility Regulations” (Türk Silahlı Kuvvetleri Sağlık Yeteneği Yönetmeliği) defines the criteria for exclusion from military service. The law was adopted on 16 June 1926 and was last changed on 15 October 2015. It defines the physical, psychological and cognitive pre-conditions and capacities required for the exercise of military service. In addition to the height and weight of the candidate for service, indications for particular psychological and physical health conditions are assessed in an official clinic. If certain health criteria needed for the exercise of military service are not met, the person is freed from duty and marked as unfit for service. The law categorises military candidates into two groups: 1) fit for military service und 2) unfit for military service. These groupings occur based on a list of health conditions and restrictions. Although HIV and AIDS are not on this list, they have at times been used as reason to deem someone unfit for service (see TÜRK SİLAHLI KUVVETLERİ SAĞLIK YETENEĞİ YÖNETMELİĞİ. URL: www.mevzuat.gov.tr/MevzuatMetin/3.5.20158136.pdf).`
      },
      {
        type: 'paragraph',
        content: `EXTRA INFO: Based on the Turkish Armed Forces’ Health Eligibility Regulations for Recruits (LINK TO Turkish Armed Forces’ Health Eligibility Regulations for Recruits), Ümit Ulukaya was categorised as unfit for military service because he was living with HIV. Following a health assessment, he was given a certificate on which it was documented that he is unfit for duty (LINK TO ÜMIT ULUKAYA).`
      },
      {
        type: 'paragraph',
        content: `During certain processes, such as the pursuit of marriage (LINK TO Regulation on Marriage Procedures) or employment, people are often asked for proof that they have successfully completed military service. Whomever has been deemed unfit for service must present this certificate to the responsible authorities, agencies and institutions. Presenting this certificate often leads to people being denied access to certain jobs or other opportunities. Today, a diagnosis with HIV is often seen to inhibit the possibility of exercising military service (LINK TO Positive Living Association).`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1926/06/16',
    endDate: '2015/11/',
    logics: [LOGICS.humanitarianism, LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['case_ümit_ulukaya', 'regulation_on_marriage_procedures', 'positive_living_association_pozitif'],
    baseStory: baseStory,
  },

  {
    name: `Public Health Law (Umumi Hıfzıssıhha Kanunu)`,
    url: `public_health_law_umumi`,
    body: [
      {
        type: 'paragraph',
        content: `In 1930, the first Public Health Law (Umumi Hıfzıssıhha Kanunu) was passed in Turkey. This first law, which is still in force today, regulates the tasks, duties, and scope of the state in the area of public health. According to Article 122, which was changed on 2 July 2018, men and women who would like to enter into a marriage are to be tested for particular health conditions. Article 123 includes certain (also sexually transmissible) diseases, like Syphilis or Gonorrhoea, but HIV is not included. The law thus sees no reason to deny marriage to persons living with HIV. Article 57 of the Public Health Law plans for the registration of certain transmissible diseases, which can lead to the unintended outing of persons living with a given disease (see Umumi Hıfzıssıhha Kanunu, www.mevzuat.gov.tr/MevzuatMetin/1.3.1593.pdf).`
      },
      {
        type: 'paragraph',
        content: `EXTRA INFO: Ümit Ulukaya’s former wife, Sevgi Ulukaya, brought the health authorities to court with the argument that they did not provide her with the information that her then fiancé was living with HIV. Since 1985, HIV has been on the list of official notifiable diseases.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1930',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['regulation_on_marriage_procedures', 'reporting_cases_of_hivaids', 'case_ümit_ulukaya', 'sevgi_zindan_ulukaya'],
    baseStory: baseStory,
  },

  {
    name: `European Court of Human Rights`,
    url: `european_court_of_human`,
    body: [
      {
        type: 'paragraph',
        content: `The European Court of Human Rights (ECHR or ECtHR; French: Cour européenne des droits de l’homme) was established on 21 January 1959 on the basis of Article 19 of the European Convention on Human Rights, when its first members were elected by the Consultative Assembly of the Council of Europe. The court hears applications alleging that a contracting state has breached one or more of the human rights provisions concerning civil and political rights as set out in the Convention and its protocols (see: www.echr.coe.int/Pages/home.aspx?p=basictexts&c=#n1359128122487_pointer).`
      },
      {
        type: 'paragraph',
        content: `EXTRA INFO:  In February 2006, the lawyer of Ümit Ulukaya, Soner Ustaoğlu, warned the court that he would go to the European Court of Human Rights if it sentenced Ulukaya to jail time. (LINK TO ÜMIT ULUKAYA)`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1959/01/21',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.humanRights, LOGICS.humanitarianism],
    linksWith: ['case_ümit_ulukaya'],
    baseStory: baseStory,
  },

  {
    name: `Blood and Blood Products Law (KAN VE KAN ÜRÜNLERİ KANUNU)`,
    url: `blood_and_blood_products`,
    body: [
      {
        type: 'paragraph',
        content: `The European Court of Human Rights (ECHR or ECtHR; French: Cour européenne des droits de l’homme) was established on 21 January 1959 on the basis of Article 19 of the European Convention on Human Rights, when its first members were elected by the Consultative Assembly of the Council of Europe. The court hears applications alleging that a contracting state has breached one or more of the human rights provisions concerning civil and political rights as set out in the Convention and its protocols (see: www.echr.coe.int/Pages/home.aspx?p=basictexts&c=#n1359128122487_pointer).`
      },
      {
        type: 'paragraph',
        content: `EXTRA INFO:  In February 2006, the lawyer of Ümit Ulukaya, Soner Ustaoğlu, warned the court that he would go to the European Court of Human Rights if it sentenced Ulukaya to jail time. (LINK TO ÜMIT ULUKAYA)`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1983/06/23',
    endDate: '2007/05',
    logics: [LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['red_crescent_kızılay', 'regulation_on_marriage_procedures', 'eu_access_and_harmonization'],
    baseStory: baseStory,
  },

  {
    name: `Regulation on Marriage Procedures (EVLENDİRME YÖNETMELİĞİ)`,
    url: `regulation_on_marriage_procedures`,
    body: [
      {
        type: 'paragraph',
        content: `The Regulation on Marriage Procedures (EVLENDİRME YÖNETMELİĞİ) was adopted on 10 July 1985. This law was based on several Turkish laws, including the Public Health Law (Umumi Hıfzıssıhha Kanunu) from 1930 and the Turkish Civil Code from 2001. According to 20 of the Regulation on Marriage Procedures, couples are required to provide proof of a Healthcare Certificate from an official hospital. This certificate is issued following tests for various sexually transmissible infections, assessing the cognitive situation of the individuals, inheritable diseases, etc. With this certificate, applicants are categorised as either fit or unfit for marriage (see: EVLENDİRME YÖNETMELİĞİ www.mevzuat.gov.tr/MevzuatMetin/3.5.859747.pdf).`
      },
      {
        type: 'paragraph',
        content: `HIV status is not an official criterion in the assessment of one’s suitability for marriage. However, certain registry offices or hospitals determine the content based on their own judgements or arbitrarily on whether a person is fit for marriage. `
      },
      {
        type: 'paragraph',
        content: `EXTRA INFO: Based on the health assessment, Ümit Ulukaya was categorised as fit for marriage, which is why his former wife wanted to sue the health authorities. Her argument was that he should have been categorised as unfit for marriage because he was living with HIV, and that she should have been made aware of his HIV status.`
      },
    ],
    externalLinks: [
      {
        url: `www.mevzuat.gov.tr/MevzuatMetin/3.5.859747.pdf`,
        text: `EVLENDİRME YÖNETMELİĞİ www.mevzuat.gov.tr/MevzuatMetin/3.5.859747.pdf`
      },
    ],
    sources: [],
    startDate: '1985/07/10',
    endDate: '2006',
    logics: [LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['health_certificate_from_a', 'public_health_law_umumi', 'sevgi_zindan_ulukaya', 'the_new_turkish_civil', 'case_brought_to_health'],
    baseStory: baseStory,
  },

  {
    name: `Reporting Cases of HIV/AIDS`,
    url: `reporting_cases_of_hivaids`,
    body: [
      {
        type: 'paragraph',
        content: `When the first cases of HIV were announced in 1985, the Turkish Ministry of Health officially took on the fight against the spread of the virus, and made first steps in this direction. Turkey is one of the countries obligating that known cases of HIV/AIDS are nationally reported (see: Başer, Z. (1998). Türkiye ́de HIV/AIDS Mücadelesinde Yapılanma. In: Ünal, S. and Tümer, A. ed., Güncel Bilgiler Işığında HIV/AIDS.  1st ed. Ankara: Bilimsel Tıp Yayınevi.)`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1985/07/10',
    endDate: '2006',
    logics: [LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['regulation_on_marriage_procedures', 'case_ümit_ulukaya', 'sevgi_zindan_ulukaya', 'the_new_turkish_civil'],
    baseStory: baseStory,
  },

  {
    name: `Enzyme-linked immunosorbent assay (ELISA)`,
    url: `enzyme_linked_immunosorbent_assay`,
    body: [
      {
        type: 'paragraph',
        content: `Elisa has been used in Turkey since 1987. For preventative reasons, engaged couples are tested for various health conditions prior to getting married (www.edevlet.net/evlilik-icin-saglik-raporu/).`
      },
      {
        type: 'paragraph',
        content: `EXTRA INFO: Ümit Ulukaya was tested for HIV using the Elisa method both during his military service and prior to getting married. While he was categorised as unfit for military service due to his HIV status, the situation was different for marriage. According to the health authorities issuing the certificate, living with HIV does not render one unfit for marriage.  However, the former wife of Ümit Ulukaya was of the position that he should not have been deemed fit for marriage because she thought that he was a “danger” to her.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1987',
    endDate: '',
    logics: [LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['turkish_armed_forces_health', 'health_certificate_from_a', 'regulation_on_marriage_procedures'],
    baseStory: baseStory,
  },

  {
    name: `The Association for the Fight Against AIDS (AIDS Savaşım Derneği*)`,
    url: `the_association_for_the`,
    body: [
      {
        type: 'paragraph',
        content: `The first organizations explicitly devoted to fighting HIV and AIDS were founded in 1991 in Izmir  (AIDS ile Mücadele Derneği, or the Association for Combating AIDS) and in 1992 in Istanbul (AIDS Savaşım Derneği, or the Association for the Fight against AIDS). These associations viewed HIV and AIDS primarily from epidemiological and medical perspectives. The social dimensions of the epidemic became of greater relevance in the associations’ work only in later years, when their active doctors would also be confronted with the experiences of discrimination of their HIV and AIDS patients, and therefore recognised a need for action in their social spheres (see Çetin, Zülfukar (2017): Intertwined Movements, Interwoven Histories: HIV and AIDS in Turkey. Disentangling European HIV/AIDS Policies: Activism, Citizenship and Health (EUROPACH) Working Paper No. 17-001/2. Available at: europach.phils.uj.edu.pl/project-outcomes/library/workingpapers/)`
      },
      {
        type: 'paragraph',
        content: `EXTRA INFO: Existing associations did not intervene in the narrative presented here, and did not offer support to the impacted persons, or an official statement. Only a single former chairperson of an organisation, Prof. Dr. Selim Badur, gave an interview to a journalist on the topic of HIV/AIDS. In this interview, Dr. Badur was was asked whether HIV is curable and about the routes of transmission. Background for this interview was that Sevgi Ulukaya was infected with HIV through unprotected sexual contact with her former husband, Ümit Ulukaya, which is why he was initially sentenced. He was defended by his lawyer with the argument that his infection was regularly monitored and his virus load was below the detection limit, which meant that he could not transmit the virus to others.  He thus wanted to make clear that HIV could to some extent be cured. At the same time, the lawyer argued that he should not be put in prison because treatment would still be necessitated but not be guaranteed there. In this interview, Selim Badur informed that the virus level could be reduced so much so as to be rendered undetectable, but that the virus forever remains in the person’s blood`
      },
    ],
    externalLinks: [
      {
        url: `europach.phils.uj.edu.pl/project-outcomes/library/workingpapers/`,
        text: `europach.phils.uj.edu.pl/project-outcomes/library/workingpapers/`
      },
      {
        url: `http://www.hurriyet.com.tr/kelebek/esine-bilerek-aids-bulastirmaktan-7-5-yil-ceza-alan-adam-yeniden-evlendi-4370590`,
        text: `Report from 6 May 2006 http://www.hurriyet.com.tr/kelebek/esine-bilerek-aids-bulastirmaktan-7-5-yil-ceza-alan-adam-yeniden-evlendi-4370590`
      },
    ],
    sources: [],
    startDate: '1992',
    endDate: '2006',
    logics: [LOGICS.humanRights, LOGICS.humanitarianism, LOGICS.publicHealth],
    linksWith: ['case_ümit_ulukaya', 'sevgi_zindan_ulukaya', 'the_report_of_forensic'],
    baseStory: baseStory,
  },

  {
    name: `Case Ümit Ulukaya - Short Chronology`,
    url: `case_ümit_ulukaya`,
    body: [
      {
        type: 'paragraph',
        content: `During his military service, in 1997, Ümit Ulukaya was tested for several sexually transmitted infections at the military hospital of the Gülhane Military Medical Academy (Gülhane Askeri Tıp Akademisi - GATA), and this is how he learned that he was living with HIV. With the argument that he was unfit for duty, he was released from service as a result of his HIV infection as per the law “Turkish Armed Forces’ Health Eligibility Regulations for Recruits” (Türk Silahlı Kuvvetleri Sağlık Yeteneği Yönetmeliği). In 1999, he married Sevgi Zindan, who became infected with HIV over the course of their marriage. The next year, Sevgi (Zindan) Ulukaya sued him for attempted murder. The case lasted around six years.`
      },
      {
        type: 'paragraph',
        content: `EXTRA INFO: A short chronology of the court proceedings: the first instance case lasted from 2000-2005 and ended with him being sentenced to 2 years, 2 months and 20 days of prison; due to what was described as “inadequate investigations,” a second court process occurred in 2002.`
      },
      {
        type: 'paragraph',
        content: `In the second instance, he was sentenced to 8 years and 10 months of imprisonment. Over the course of this instance, a report from the Forensic Medicine Institute of Istanbul confirmed Ümit Ulukaya’s infection and its incurability, which was used to depict him as threat to his wife. Despite these official reports, he was sentenced to no prison time, as per the old Criminal Code, due to his HIV status and the necessitated therapy and treatment. The lawyers of both Ümit Ulukaya and Sevgi Zindan appealed this decision: to provoke a ruling that he is innocent on the one side, and to increase his punishment on the other. Thus, the case went to a third and higher instance. The lawyer of Ümit Ulukaya requested that the court case no longer be determined based on the old Criminal Code from 1926, but rather on the new Criminal Code from 2001. This request was approved.`
      },
      {
        type: 'paragraph',
        content: `During the third and final instance, the case was assessed based on the new Turkish Criminal Code. Ümit Ulukaya was sentenced to 7 years and 6 months of prison. However, due to the Law on the Execution of Penalties and Security Measures (CEZA VE GÜVENLİK TEDBİRLERİNİN İNFAZI HAKKINDA KANUN) (LINK TO THIS LAW), he was set free as a result of his HIV infection and the necessary therapy and treatment.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1997',
    endDate: '2006',
    logics: [LOGICS.deCriminalisation, LOGICS.humanRights, LOGICS.humanitarianism, LOGICS.publicHealth, LOGICS.securitisation],
    linksWith: ['the_old_turkish_penal', 'turkish_criminal_code_new', 'turkish_armed_forces_health', 'sevgi_zindan_ulukaya', 'the_report_of_forensic', 'the_law_on_the'],
    baseStory: baseStory,
  },

  {
    name: `Sevgi Zindan (Ulukaya)`,
    url: `sevgi_zindan_ulukaya`,
    body: [
      {
        type: 'paragraph',
        content: `Having engaged in unprotected sex with her then husband, Ümit Ulukaya, Sevgi Zindan became infected with HIV over the course of their marriage. According to her statements, she was not made aware of the HIV status of her husband, which is why she sued him in 2000 for attempted murder. The case lasted six years. Today, it is known and should be said that if Ümit Ulukaya had been on effective medication, which would have reduced the viral load so much that it would have rendered it undetectable, the virus would not have been transmissible. However, this had not yet been scientifically established at the time of the case.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1999/11',
    endDate: '2006/05',
    logics: [LOGICS.deCriminalisation, LOGICS.securitisation],
    linksWith: ['case_ümit_ulukaya'],
    baseStory: baseStory,
  },

  {
    name: `European Council Helsinki`,
    url: `european_council_helsinki`,
    body: [
      {
        type: 'paragraph',
        content: `Having engaged in unprotected sex with her then husband, Ümit Ulukaya, Sevgi Zindan became infected with HIV oDuring a meeting in Helsinki on 10 and 11 December, the European Council adopted the so-called Millennium Declaration. It has made a number of decisions marking a new stage in the enlargement process. Steps have also been taken to ensure that the Union itself will have effective, reformed institutions, a strengthened common security and defence policy, and a competitive, job-generating, sustainable economy. The European Council welcomed recent positive developments in Turkey as noted in the Commission's progress report, as well as its intention to continue its reforms towards complying with the Copenhagen criteria. Turkey was a candidate State destined to join the Union on the basis of the same criteria as applied to the other candidate States. Building on the existing European strategy, Turkey, like other candidate States, was to benefit from a pre-accession strategy to stimulate and support its reforms. This included enhanced political dialogue, with emphasis on progressing towards fulfilling the political criteria for accession with particular reference to the issue of human rights, as well as on the issues referred to in paragraphs 4 and 9(a). Turkey would also have the opportunity to participate in Community programmes and agencies and in meetings between candidate States and the Union in the context of the accession process. An accession partnership was to be drawn up on the basis of previous European Council conclusions while containing priorities on which accession preparations must concentrate in the light of the political and economic criteria and the obligations of a Member State, combined with a national programme for the adoption of the acquis. Appropriate monitoring mechanisms were to be established. With a view to intensifying the harmonisation of Turkey's legislation and practice with the acquis, the Commission was invited to prepare a process of analytical examination of the acquis. The European Council asked the Commission to present a single framework for coordinating all sources of European Union financial assistance for pre-accession (see http://www.europarl.europa.eu/summits/hel1_en.htm)`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '1999/11',
    endDate: '2006/05',
    logics: [LOGICS.humanRights, LOGICS.humanitarianism, LOGICS.securitisation],
    linksWith: ['eu_access_and_harmonization'],
    baseStory: baseStory,
  },


  {
    name: `EU-Access and Harmonization Packages`,
    url: `eu_access_and_harmonization`,
    body: [
      {
        type: 'paragraph',
        content: `After Turkey was officially recognized as a candidate for joining the European Union at the EU Summit in Helsinki in 1999, international expectations rose with regards to reforms aimed at improving due process and the conditions for minorities and for civil society in general. Ankara reacted by passing a series of so-called harmonization packages. The proposed legal and constitutional changes included above all those concerning freedom of thought and expression, the prevention of torture, the freedom and security of the individual, the right to privacy, the inviolability of the home, the freedom of communication, the freedom of residence and movement, the freedom of association and gender equality. At the level of civil society, changes were to be instituted in the areas of gender equality, protection of children and the infirm, as well as freedom of assembly.`
      },
    ],
    externalLinks: [
      {
        url: `www.swp-berlin.org/fileadmin/contents/products/arbeitspapiere/WP_RG_Europe_2016_01.pdf`,
        text: `www.swp-berlin.org/fileadmin/contents/products/arbeitspapiere/WP_RG_Europe_2016_01.pdf`
      },
    ],
    sources: [],
    startDate: '1999/11',
    endDate: '2006/05',
    logics: [LOGICS.humanRights, LOGICS.humanitarianism, LOGICS.securitisation],
    linksWith: ['european_council_helsinki'],
    baseStory: baseStory,
  },

  {
    name: `The New Turkish Civil Code`,
    url: 'the_new_turkish_civil',
    body: [
      {
        type: 'paragraph',
        content: `On 22 November 2001, the old Civil Code from 1926 was repealed and the new Civil Code was adopted. Turkey’s new civil code was based on the German, French and Swiss Civil Codes. Based on Article 136 of the new civil code, any person can be married if they do not have a health condition that inhibits the possibility to marry. Although an HIV infection is not included on this list of inhibiting conditions, it can at times be used to deem someone unfit for marriage.`
      },
      {
        type: 'paragraph',
        content: `EXTRA INFOS: Ümit Ulukaya was permitted, based on the health certificate issued to him by a state medical institution, to marry Sevgi Zeydan. `
      },
    ],
    externalLinks: [
      {
        url: `www.mevzuat.gov.tr/MevzuatMetin/1.5.4721.pdf`,
        text: `www.mevzuat.gov.tr/MevzuatMetin/1.5.4721.pdf`
      },
    ],
    sources: [],
    startDate: '1999/11',
    endDate: '2006/05',
    logics: [LOGICS.humanRights, LOGICS.humanitarianism, LOGICS.securitisation],
    linksWith: ['civil_code_of_france', 'german_civil_code_bürgerliches', 'swiss_civil_code', 'health_certificate_from_a', 'sevgi_zindan_ulukaya'],
    baseStory: baseStory,
  },

  {
    name: `The Report of Forensic Medicine Institute`,
    url: `the_report_of_forensic`,
    body: [
      {
        type: 'paragraph',
        content: `In the Report from the Forensic Medicine Institute of Istanbul from 2004, it was determined that Ümit Ulukaya was still infected with HIV up to the time of the court case and that a cure was not currently possible. The report also indicated that “AIDS” (sic) is a chronic syndrome. For this reason, the accused (LINK TO Ümit Ulukaya) should be sentenced based on Articles 456/3 and 457/1 of the old Turkish Criminal Code (LINK TO THIS LAW) pertaining to intended bodily harm.`
      },
    ],
    externalLinks: [
      {
        url: `www.hurriyet.com.tr/gundem/aids-bulastiran-kocaya-ceza-233792`,
        text: `www.hurriyet.com.tr/gundem/aids-bulastiran-kocaya-ceza-233792`
      },
    ],
    sources: [],
    startDate: '2004/10',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.securitisation],
    linksWith: ['case_ümit_ulukaya', 'the_old_turkish_penal'],
    baseStory: baseStory,
  },

  {
    name: `Case brought to Health Authorities for Negligence`,
    url: `case_brought_to_health`,
    body: [
      {
        type: 'paragraph',
        content: `Sevgi Ulukaya also brought a case against the health authorities for negligence. She criticised the practices of the health authorities in Antalya because she believed that they were informed about the HIV status of Ümit Ulukaya, and that they nonetheless issued a certificate stating that he was fit for marriage, thereby putting her own life at risk due to their perceived negligence. According to her, the health authorities should have informed Sevgi Ulukaya about the HIV status of Ümit Ulukaya. With this argument, she made a claim for damages to be paid.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2003/04',
    endDate: '2015/10',
    logics: [LOGICS.deCriminalisation, LOGICS.securitisation],
    linksWith: ['regulation_on_marriage_procedures', 'case_ümit_ulukaya', 'sevgi_zindan_ulukaya', 'law_of_misdemeanours_kabahatlar'],
    baseStory: baseStory,
  },

  {
    name: `Positive Living Association (Pozitif Yaşam Derneği)`,
    url: `positive_living_association_pozitif`,
    body: [
      {
        type: 'paragraph',
        content: `One of the most important organizations for combating HIV and AIDS was founded in Istanbul in 2005, one year after the passing of the new Associations Law, with the name “Positive Living Association” (Pozitif Yaşam Derneği). This association brings together people with HIV and AIDS, their families, activists, and experts. The group’s main goal is free and accessible medical care, as well as psychological support for people with HIV and AIDS.`
      },
      {
        type: 'paragraph',
        content: `According to the presentation on their website, the initiative “Positive Living” was formed in 2003 by people living with HIV as a self-help organisation. Over the course of the first few years, the group gained support from activists, medical doctors, and people working within UNAIDS. The first activities of the association were organised through an electronic mailing list entitled “HIV POZITIF”, which also served to enable networking among HIV-positive people. This was especially important for those who did not live in Istanbul and therefore were unable to obtain vital information on the ground. The mailing list also served as a kind of safer space where HIV-positive people could empower themselves. In this mailing list, the participants exchanged their experiences as people living with HIV, and were therefore exposed to different forms of discrimination and stigma. Through this exchange of experiences, one can assume that they supported each other and built a collective awareness of emancipatory self-organization. In 2004, some participants in this list decided to establish an association for and by HIV-positive people. Since that year, it was possible for almost all groups in the population to establish their own associations or to gain institutional status in the form of an organization. Thus, the Pozitif Yaşam Derneği association was founded in Istanbul in June 2005. The organisation has indicated that a diagnosis with HIV is often seen to inhibit the possibility of exercising military service.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2003/10',
    endDate: '2005/06',
    logics: [LOGICS.humanRights, LOGICS.humanitarianism],
    linksWith: ['turkish_armed_forces_health'],
    baseStory: baseStory,
  },

  {
    name: `Turkish Criminal Code (New version)`,
    url: `turkish_criminal_code_new`,
    body: [
      {
        type: 'paragraph',
        content: `The objective of the Criminal Code is to protect individual rights and freedoms, public order and security, the rule of law, peace in the community, public health and the environment and to prevent the commission of offences. To achieve this objective, criminal responsibility, specific criminal offences, penalties and security measures are regulated under this statute. `
      },
      {
        type: 'paragraph',
        content: `EXTRA INFO: Ümit Ulukaya was first sentenced based on the old Turkish Criminal Code of 1926, which was adopted based on the Italian Criminal Code. Up until 2004, the old Criminal Code had been changed 54 times. The new Turkish Criminal Code was introduced based on the model of the German Criminal Code. In the first instance, Ümit Ulukaya was sentenced for the attempted murder of his wife based on the old Turkish Criminal Code. Following the introduction of the new Turkish Criminal Code, his lawyer called for the case to be reviewed according to the new code.  `
      },
    ],
    externalLinks: [
      {
        url: `http://www.wipo.int/edocs/lexdocs/laws/en/tr/tr171en.pdf`,
        text: `http://www.wipo.int/edocs/lexdocs/laws/en/tr/tr171en.pdf`
      },
    ],
    sources: [
    ],
    startDate: '2004/09',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.securitisation],
    linksWith: ['zanardelli_code_the_old', 'german_civil_code_bürgerliches', 'the_old_turkish_penal'],
    baseStory: baseStory,
  },

  {
    name: `The Law on the Execution of Penalties and Security Measures`,
    url: `the_law_on_the`,
    body: [
      {
        type: 'paragraph',
        content: `The Law on the Execution of Penalties and Security Measures (CEZA VE GÜVENLİK TEDBİRLERİNİN İNFAZI HAKKINDA KANUN) calls for the postponement of sentencing due to an illness (ARTICLE 16.- (1)). It reads:`
      },
      {
        type: 'paragraph',
        content: `The prison sentence of a convict who is mentally ill shall be postponed and the convict shall be placed under protection and treatment in the health institution specified in Article 57 of the Turkish Criminal Code until he is rehabilitated. The period of time spent in the health institution shall be deemed to have been spent in prison. In any other case of illness, the execution of the prison sentence shall be continued in those parts of official health institutions that are allocated for convicts. However, if the execution of the prison sentence even in this way presents an absolute danger for the life of the convict, its execution shall be postponed until he is cured.`
      },
      {
        type: 'paragraph',
        content: `EXTRA INFO: Based on Article 16 of this law, the prison sentence of Ümit Ulukaya was indefinitely postponed due to his necessary therapy and treatment.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2004/12',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.securitisation],
    linksWith: ['case_ümit_ulukaya', 'enforcement_and_application_procedure'],
    baseStory: baseStory,
  },

  {
    name: `Enforcement and Application Procedure of the Criminal Procedure Code`,
    url: `enforcement_and_application_procedure`,
    body: [
      {
        type: 'paragraph',
        content: `Law No. 5320 of 23 March 2005 is about the Enforcement and Application Procedure of the Criminal Procedure Code (CEZA MUHAKEMESİ KANUNUNUN YÜRÜRLÜK VE UYGULAMA ŞEKLİ HAKKINDA KANUN). Based on this law, the prison sentence was abandoned due to the necessary und unavoidable treatment and therapy.`
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2004/12',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.humanitarianism],
    linksWith: ['case_ümit_ulukaya', 'the_law_on_the'],
    baseStory: baseStory,
  },

  {
    name: `Law of Misdemeanours (Kabahatlar Kanunu)`,
    url: `law_of_misdemeanours_kabahatlar`,
    body: [
      {
        type: 'paragraph',
        content: `Part one of the general provisions of the Law of Misdemeanours dictates its purpose and scope: to secure public order, public morality, public health, in order to protect the environment and economic order.`
      },
      {
        type: 'paragraph',
        content: `EXTRA INFO: The case of Ümit Ulukaya was also decided based on this Law of Misdemeanours, but it is not possible to locate more detailed information about which of the law’s articles were used. The Law of Misdemeanours provides for monetary punishment rather than imprisonment. In cases of sex workers who do not work on the streets, the following articles are used:`
      },
      {
        type: 'paragraph',
        content: `Misdemeanour Law, Article 32: “(1) Any person who disobeys the lawful orders which are given by the authorized agencies with a purpose of judicial procedures or in order to protect public security, public order or common wealth is fined 100 TRY. The authorized agency imposes the fine.” Article 36: “(1) Any person who makes noise with a purpose of disturbing or breaking the peace of others will be fined 50 TRY. … (3) The police and municipal force are authorized to fine.” Article 37: “(1) Any person who disturbs others to sell goods and services will be fined 50 TRY. (2) The police and municipal force are authorized to fine.”`
      },
    ],
    externalLinks: [
      {
        url: `https://www.global-regulation.com/translation/turkey/524179/turkish-grand-national-assembly-warning%253a-you-are-viewing-act%252c-the-parliamentary-general-assembly-has-already-adopted.-if-it-does-not-include-the-c.html`,
        text: `https://www.global-regulation.com/translation/turkey/524179/turkish-grand-national-assembly-warning%253a-you-are-viewing-act%252c-the-parliamentary-general-assembly-has-already-adopted.-if-it-does-not-include-the-c.html`
      },
    ],
    sources: [],
    startDate: '2005/03',
    endDate: '',
    logics: [LOGICS.deCriminalisation, LOGICS.humanRights, LOGICS.securitisation],
    linksWith: ['sevgi_zindan_ulukaya', 'the_new_turkish_civil'],
    baseStory: baseStory,
  },

  {
    name: `Vatan Gazetesi (Heimat Zeitung)`,
    url: `vatan_gazetesi_heimat_zeitung`,
    body: [
      {
        type: 'paragraph',
        content: `Based on the published 08 May 2006 report from the conservative newspaper Vatan Gazetesi, Ümit Ulukaya complained to The Turkish Press Council about the stigmatising reports of his private life. The Turkish Press Council criticised and reprimanded the newspaper on 12 July 2006 for violating the profession’s ethical principles. `
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '2006/05/08',
    endDate: '2006/07/12',
    logics: [LOGICS.humanRights, LOGICS.humanitarianism],
    linksWith: [],
    baseStory: baseStory,
  },
]