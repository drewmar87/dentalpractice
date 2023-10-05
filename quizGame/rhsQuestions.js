// image: "images/dental-tool.jpg",
// File: rhsQuestions.js
let rhsQuestions = [
  {
    question: "Concerning pregnant patients and radiation exposure, which statement is accurate?",
    answers: ["Dental imaging is delayed until the second trimester.",
              "ADA guidelines suggest delaying dental imaging during pregnancy.",
              "Lead aprons block radiation exposure to the fetus.",
              "Exposure time is shortened for pregnant patients."],
    correct: 2,
    category: "RHS",
    rationale: "The fetus is protected by the lead apron during all trimesters of pregnancy. According to the American Dental Association and the U.S. Food and Drug Administration Guidelines for Exposing Dental Radiographs, dental imaging procedures are not changed for pregnant patients. The ADA guidelines recommend necessary dental images for all patients, including pregnant patients; exposure time is not affected when exposing images on a pregnant patient."
  },

  {
    question: "What can be used to minimize the divergence of the x-ray beam?",
    answers: ["An 16-inch PID",
              "The paralleling technique",
              "The bisecting technique",
              "The short cone technique"],
    correct: 0,
    category: "RHS",
    rationale: "Divergence, or spreading out of the x-ray beam, is reduced with the longer (16-inch) PID, which is used in the paralleling technique. Greater divergence of the x-ray beam occurs with the shorter 8-inch cone used with the bisecting techniques, also known as the short cone technique."
  },

  {
    question: "What is the maximum permissible dose (MPD) for workers exposed to radiation occupationally?",
    answers: ["0.005 Sv/year",
              "0.05 Sv/year",
              "0.5 Sv/year",
              "5.0 Sv/year"],
    correct: 1,
    category: "RHS",
    rationale: "0.05 Sv/year is the MPD for occupationally exposed workers. 0.005 Sv/year, 0.5 Sv/year, and 5.0 Sv/year are not the MPD for occupationally exposed workers."
  },

  {
    question: "Which amount is the ideal occupational dose to aim for?",
    answers: ["0 rem/year",
              "0.01 rem/year",
              "1 rem/year",
              "0.05 rem/month"],
    correct: 0,
    category: "RHS",
    rationale: "Zero exposure is the desired amount for an occupationally exposed worker. In other words, a worker should not be exposed to any radiation if all safety measures are practiced. The maximum permissible dose for the general public is 0.01 rem/year. The maximum cumulative effective dose for an occupationally exposed worker is 1 rem/year × age of worker. The maximum permissible dose for a pregnant occupationally exposed worker is 0.05 rem/month."
  },

  {
    question: "What would be considered a suitable practice for a dental x-ray equipment operator?",
    answers: ["Only wearing a film badge at work",
              "Holding the film while entirely covered with a lead apron",
              "Standing 6 feet behind the patient",
              "Holding the tubehead to prevent drifting"],
    correct: 0,
    category: "RHS",
    rationale: "Film badges should be worn only at work; the operator should never hold the film, even if draped in a lead apron; proper positioning for the operator is 6 feet away and at 90–135 degrees to the primary beam, not behind the patient; the tubehead is never held–if a tubehead is drifting, it must be repaired."
  },

  {
    question: "What does a film badge monitor?",
    answers: ["Exposures to natural radiation",
              "Patient exposures",
              "Daily occupational radiation exposures of a radiographer",
              "Total office staff radiation exposures"],
    correct: 2,
    category: "RHS",
    rationale: "A film badge monitors the radiographer\\'s daily occupational exposure. Film badges do not monitor natural radiation or patient or total staff exposures."
  },

  {
    question: "Which dental structure is the hardest to visualize on a dental image?",
    answers: ["Pulp",
              "Cementum",
              "Dentin",
              "Enamel"],
    correct: 1,
    category: "RHS",
    rationale: "It is difficult to distinguish cementum from dentin on a dental image. The pulp is the most radiolucent part of the tooth tissue, the dentin composes the majority of the tooth, and the enamel is the most radiopaque structure"
  },

  {
    question: "Which of the following is a correct statement regarding safe operating procedures?",
    answers: ["Pregnant operators are not allowed to expose dental images.",
              "All states mandate that all dental staff members wear dosimeters.",
              "Dosimeters track operator exposure to x-rays.",
              "ALARA is applicable to patients but not operators."],
    correct: 2,
    category: "RHS",
    rationale: "Dosimeters monitor operator exposure to x-rays. A pregnant operator may expose dental images. Not all states require all dental personnel wear a monitoring device. A dosimeter may not be necessary for dental personnel who do not work in the radiography area. The ALARA concept—to keep exposure as low as reasonably achievable—also applies to patients and workers."
  },

  {
    question: "With a new dental x-ray machine in the office, the position indicating device (PID) length is changing from 16 to 8 inches. How does this impact the x-ray beam\\'s intensity and what adjustments are needed to maintain consistent image density?",
    answers: ["The resultant beam will be half as intense. You\\'ll need to increase exposure time.",
              "The resultant beam will be one-quarter as intense. You\\'ll need to increase exposure time.",
              "The resultant beam will be twice as intense. You\\'ll need to decrease exposure time.",
              "The resultant beam will be four times as intense. You\\'ll need to decrease exposure time."],
    correct: 3,
    category: "RHS",
    rationale: "Using the inverse square law, the beam in the example would be four times as intense. The inverse square law states “the intensity of radiation is inversely proportional to the square of the distance from the source of radiation.” When distance is decreased from 16 inches to 8 inches, intensity increases. When intensity increases, exposure time will need to be decreased for the same density to be maintained. The beam would be one-half as intense if the change in PID length had been from an 8 inches to 12 inches; the exposure time would need to be increased to maintain the same density. The beam would be one-quarter as intense if the PID had been changed from 8 inches to 16 inches; the exposure time would need to be increased to maintain the same density. The beam would be two times as intense if the PID had been changed from 16 inches to 12 inches; the exposure time would need to be decreased to maintain the same density."
  },

  {
    question: "Which type of position indicating device (PID) does not generate scatter radiation?",
    answers: ["Rectangular",
              "Round",
              "Conical",
              "Both Rectangular and Round"],
    correct: 0,
    category: "RHS",
    rationale: "Both the rectangular- and the cylinder-type position indicating devices (PIDs) do not produce scatter radiation; the pointed cone position indicating device produced scatter radiation. It is no longer made"
  },

  {
    question: "In a dental office that operates 4 days a week, you replace chemicals in two automatic processors every 4 weeks. When testing developer strength with a stepwedge, how many films should be taken each time the chemicals are altered?",
    answers: ["8",
              "16",
              "20",
              "32"],
    correct: 3,
    category: "RHS",
    rationale: "A total of 32 films should be taken when using a stepwedge to test developer strength. This is a 1-month supply of exposed film, one for each of the 4 days you are open each week, times 4 weeks, which is the length of time before the chemicals need to be changed. You have two machines. For each machine, you would process 16 films. On each day, 8 films would only provide testing once a week for each machine and are insufficient; testing must be done each day before each machine is used. Sixteen films only allow for testing every other day. Twenty films are the amount of film if you have one machine and are open 20 days of the month."
  },
  {
    question: "What is compared using a reference radiograph?",
    answers: ["Densities",
              "Film freshness",
              "Processing time",
              "Fixer solution freshness"],
    correct: 0,
    category: "RHS",
    rationale: "A reference radiograph is used to evaluate density and is compared with film that is processed daily to determine developer freshness. Film freshness is tested by developing an unexposed film in fresh chemicals and then comparing it to a reference image. Timers are checked for accuracy to make sure processing times are correct. Fixer freshness is checked with a clearing test."
  },
  {
    question: "What is the coin test used to check?",
    answers: ["Light leaks in the darkroom",
              "Proper functioning of the dental x-ray unit",
              "Proper safelighting",
              "Proper film density"],
    correct: 2,
    category: "RHS",
    rationale: "The coin test checks for proper safelighting. Light leaks in the darkroom are checked with the light leak test. Dental x-ray units are checked through a series of tests and calibration of the units. Film density is monitored with the reference radiograph that is compared with daily film, a stepwedge radiograph that is compared with a control film, or a normalizing device."
  },
  {
    question: "What should extraoral intensifying screens be periodically inspected for?",
    answers: ["Fixer contamination",
              "Developer contamination",
              "Dirt and scratches",
              "Gelatin buildup"],
    correct: 2,
    category: "RHS",
    rationale: "Dirt and scratches build up on extraoral intensifying screens; screens should be checked periodically. The intensifying screens should not be placed where they will come in contact with fixer or developer. Gelatin on the film will not leach onto the intensifying screens."
  },
  {
    question: "When there is a difference of more than two steps in densities on a stepwedge, what action should be taken?",
    answers: ["Replace the processing solutions.",
              "Stir the developer\'s contents and continue processing.",
              "Raise the tank\'s heat by 2 degrees.",
              "Increase kV."],
    correct: 0,
    category: "RHS",
    rationale: "Processing solutions should be replaced when densities differ by more than two steps on a stepwedge. Stirring the developer will not increase developer strength. Increasing the heat in the tank will increase the rate of development and could create film with increased density but will not increase the strength of the developer. Increasing the kV will increase density of the image but will not correct developer solution issues."
  },
  {
    question: "On average, how frequently should the processing solution be changed?",
    answers: ["Once a day",
              "Once a week",
              "Every 3-4 weeks",
              "Every 3-4 months"],
    correct: 2,
    category: "RHS",
    rationale: "On average, processing solution should be changed every 3–4 weeks; chemicals are replenished daily; it is not necessary to change chemicals daily or every week unless depleted; changing too frequently wastes chemicals; chemicals will be depleted if changed every 3–4 months."
  },
  {
    question: "According to the CDC, what should barriers be used to cover?",
    answers: ["Phosphor imaging plate",
              "Film",
              "Sensor",
              "Both sensor and phosphor imaging plate"],
    correct: 3,
    category: "RHS",
    rationale: "According to the CDC, barriers should be placed over a sensor and phosphor imaging plate. The outer plastic film cover acts as a barrier to the film; therefore, coverage of film with a barrier is optional."
  },
  {
    question: "If a radiograph is mounted labially, what would be the radiopaque restoration on tooth #19 in this image?",
	image: "images/rhs18.jpg",
    answers: ["Composite restoration with an overhang on the mesial surface",
              "Amalgam restoration with an overhang on the mesial surface",
              "Composite restoration with an overhang on the distal surface",
              "Amalgam restoration with an overhang on the distal surface"],
    correct: 1, // this is a placeholder as the actual image is not provided
    category: "RHS",
    rationale: "The radiopaque restoration on the mandibular first molar (#19) is an amalgam restoration with an overhang at the mesial cervical surface; a composite restoration will appear radiolucent to slightly radiopaque; the overhang is on the mesial surface of the tooth, not the distal surface."
  },

  {
    question: "What process is depicted in this image?",
	image: "images/rhs19.jpg",
    answers: ["External resorption",
              "Physiologic resorption",
              "Internal resorption",
              "Extrusion"],
    correct: 1, 
    category: "RHS",
    rationale: "Physiologic resorption occurs naturally as part of the normal exfoliation of primary teeth. External resorption involves the root of a tooth, usually at the apex; causes include trauma, forces, and infection, which result in shorter, blunted roots. Internal resorption is caused by trauma, chronic irritation, or pulp polyps; it begins at the pulp and appears radiolucent. The incisal edge or occlusal surface of an extruded tooth, abnormal displacement of the tooth outside of the bone, appears higher than the other teeth."
  },
  {
    question: "Which structure is appearing in this panoramic image?",
	image: "images/rhs20.jpg",
    answers: ["Orthodontic appliances",
              "Orthodontic bands",
              "Metal framework for two partial dentures",
              "Fused gold crowns"],
    correct: 2,
    category: "RHS",
    rationale: "The metal framework for both maxillary and mandibular partial dentures is visible. Orthodontic appliances vary in appearance based on the shape and dental materials used. Orthodontic bands are recognized by their shape. Fused gold crowns appear as large radiopaque restorations with smooth contours."
  },
  {
    question: "What landmark is being pointed out by the arrows?",
	image: "images/rhs21.jpg",
    answers: ["Coronoid process",
              "Condyle",
              "Internal oblique ridge",
              "Zygomatic process of the maxilla"],
    correct: 0,
    category: "RHS",
    rationale: "The coronoid process, a triangular eminence on the anterior superior border of the ramus of the mandible, appears radiopaque and is superimposed on the maxillary tuberosity in a maxillary molar image. The condyle, which extends from the posterior superior border of the ramus of the mandible, is seen on panoramic images but not on periapical radiographs. The internal oblique ridge appears as a radiopaque band that extends downward and forward from the ramus. The zygomatic process of the maxilla appears as a J- or U-shaped radiopacity in the maxillary sinus."
  },
  {
    question: "If using a digital imaging system, an image was taken but doesn\'t appear on the screen and the program doesn\'t advance to the next image space, what could be the issue and how should it be addressed?",
    answers: ["X-ray machine is off; switch on the machine",
              "PID is not aligned with receptor; align PID with receptor",
              "Sensor is backward in the holder; correctly position receptor in film holder",
              "All of the above"],
    correct: 3,
    category: "RHS",
    rationale: "All of the above: if the x-ray machine is turned off, the image will be clear and the program will not advance; the x-ray machine will need to be turned on. The PID may not have been aligned with the receptor; this will also cause a clear image and the program will not advance; align PID with the receptor. The sensor may also be in the film holder backward; the back side of the receptor may be facing the PID; the sensor will need to be placed in the film holder correctly."
  },
  {
    question: "In a dental image, how is the median palatine suture depicted?",
    answers: ["Almond-shaped radiolucency between teeth #8 and #9",
              "Thin radiolucent vertical line between teeth #8 and #9",
              "Radiopaque vertical line above teeth #8 and #9",
              "Pair of radiopaque diagonal lines starting by the apices of the maxillary centrals and ending above the apices of the maxillary canines"],
    correct: 1,
    category: "RHS",
    rationale: "On a maxillary periapical image, the median palatine suture appears as a thin radiolucent line between the maxillary central incisors to the base of the nasal spine. The incisive foramen appears as an almond-shaped radiolucency between the maxillary central incisors. The nasal septum is a radiopaque vertical line above the central incisors. The floor of the nasal cavity appears as a pair of radiopaque diagonal lines beginning by the apices of the maxillary centrals and ending above the apices of the maxillary canines."
  },
  {
    question: "In which of the following locations should film be stored?",
    answers: ["Dark room",
              "Cool, dry area",
              "Well-ventilated area",
              "In the refrigerator"],
    correct: 1,
    category: "RHS",
    rationale: "Film should be stored in a cool (50°–70°F), dry (40%–60% humidity) place. A lighted or dark room or well-ventilated area will not affect the film, but temperature and humidity are the key factors; the average refrigerator temperature is 37°, which is too cold for film."
  },
  {
    question: "Which of these structures would not be observable as a maxillary landmark on a panoramic image?",
    answers: ["Styloid process",
              "External auditory meatus",
              "Incisive canal",
              "Mental foramen"],
    correct: 3,
    category: "RHS",
    rationale: "The mental foramen is an opening or hole in the bone located on the external surface of the mandible in the region of the apices of the premolars and appears as a small round or oval radiolucency. The styloid process is a long, pointed, sharp radiopaque projection that extends from the temporal bone, anterior to the mastoid process. The external auditory meatus is an oval or round radiolucency in the temporal bone superior and anterior to the mastoid process. The incisive canal is a radiolucent cylinder with thin radiopaque borders located above the incisive foramen between teeth #8 and #9."
  },

  {
    question: "The patient chart should include all of the following except:",
    answers: ["Signed informed consent",
              "Duplicate images",
              "Signed HIPAA release",
              "Original records"],
    correct: 1,
    category: "RHS",
    rationale: "The patient chart should have the original images; duplicate images can be made if copies of the images are requested by another dental office or for legal purposes; they do not need to be stored in the chart. A signed informed consent and HIPAA release must be in the patient’s record. The dentist should keep the original record and send copies when necessary."
  },
  {
    question: "How does static electricity appear on a developed film?",
    answers: ["Black dots",
              "Clear dots",
              "Scratches",
              "Black branching lines"],
    correct: 3,
    category: "RHS",
    rationale: "Static electricity causes thin, black branching lines across film when film packets are opened too quickly, especially in low humidity conditions. Developer contamination prior to processing causes black dots on the film. Clear dots are caused by fixer contamination prior to processing. Scratches are caused by damage from a sharp object."
  },
  {
    question: "An informed consent consists of all of the following except:",
    answers: ["Number and type of exposures",
              "Permission to release records to a dentist or physician",
              "Potential harm if images are not taken",
              "Reason for the images"],
    correct: 1,
    category: "RHS",
    rationale: "Permission to release records to a dentist or physician is part of HIPAA. Informed consent informs the patient of the need for dental images, the purpose and benefits of such images, the number and types of exposures to be made, and potential harm that may occur if the dental image is not taken."
  },
  {
    question: "When preparing the radiography room for a patient, where should barriers be placed?",
    answers: ["On the headrest, control panel, and beam alignment device",
              "On the computer keyboard, work area, and sensor cord",
              "On the phosphor plate, PID and tubehead, and exposure control button",
              "On the sensor, computer mouse, and x-ray unit on/off button"],
    correct: 2,
    category: "RHS",
    rationale: "Phosphor plates, the PID and tubehead, and exposure control button should be covered with a barrier. These are difficult to disinfect and may be damaged with disinfectant. The phosphor plate is a semicritical item and must have a barrier because it cannot be sterilized; the headrest can be disinfected or covered with a barrier; the control panel should have a barrier; the beam alignment device is sterilized; the computer keyboard and work area should have a barrier; the sensor cord can be disinfected; the sensor and computer mouse should have a barrier; the x-ray unit on/off switch does not need a barrier if it is turned on prior to patient care."
  },
  {
    question: "Failure to obtain informed consent is an example of:",
    answers: ["Negligence",
              "Common law",
              "Statutory law",
              "Standard of care"],
    correct: 0,
    category: "RHS",
    rationale: "Failure to obtain informed consent prior to a dental procedure is an example of negligence or malpractice. Common laws are derived from customs or legal precedence. Statutory laws are created by the legislature. Standard of care is determined from the level of care provided by the average cautious practitioner."
  },

  {
    question: "The dental record is a legal document. Which of the following methods can be used to record patient information in the patient chart?",
    answers: ["Written in ink",
              "Written in pencil",
              "Data recorded on a computer",
              "Written in ink or data recorded on a computer"],
    correct: 3,
    category: "RHS",
    rationale: "The dental record is a legal record; documents must be permanent and should only be written on in ink or via data recorded on a computer. A pencil should not be used in a legal record."
  },
  {
    question: "Which of the following agencies enforces regulations to protect the safety of dental employees from hazardous materials in the dental office?",
    answers: ["Environmental Protection Agency (EPA)",
              "Occupational Safety and Health Administration (OSHA)",
              "Centers for Disease Control and Prevention (CDC)",
              "Organization for Safety, Asepsis, and Prevention (OSAP)"],
    correct: 1,
    category: "RHS",
    rationale: "OSHA enforces regulations to protect the safety of dental employees from hazardous materials in the dental office. The EPA develops policies to protect humans and the environment from pollutants. The CDC monitors and prevents health threats. OSAP provides training and education related to infection control."
  },
  {
    question: "Chemical-resistant gloves are used to perform which of the following?",
    answers: ["Set up the radiography room",
              "Remove barriers",
              "Disinfect surfaces",
              "Process film"],
    correct: 2,
    category: "RHS",
    rationale: "Chemical-resistant gloves should be used when disinfecting surfaces. The gloves protect hands from harmful chemicals in the disinfectants; chemical resistant gloves are not needed to set up the room, remove barriers, or process film."
  },
  {
    question: "Films are being taken to the daylight loader for automatic processing. Which of the following would not be done when developing film using a daylight loader?",
    answers: ["Place film in feed slot with ungloved hands",
              "Use clean gloves to open film packets",
              "Lift lid to daylight loader and place cup with exposed film packets in daylight loader",
              "Place dirty or used gloves through the cuff assembly"],
    correct: 3,
    category: "RHS",
    rationale: "Clean ungloved hands are placed through the cuff assembly to access the inside of the daylight loader; the film is placed in the feed slot with ungloved hands; clean gloves which have been placed in the daylight loader ahead of time are used to open the exposed film packets; the cup of exposed film is placed in the daylight loader prior to placing hands through the cuff assembly."
  },
  {
    question: "Current infection control guidelines come from the __________.",
    answers: ["Centers for Disease Control and Prevention",
              "American Dental Association",
              "Occupational Safety and Health Administration",
              "CDC, ADA, and OSHA"],
    correct: 3,
    category: "RHS",
    rationale: "All three agencies—CDC, ADA, and OSHA—offer infection control guidelines. The state dental society follows guidelines of these organizations and does not make regulations."
  },
  {
    question: "Which is the method used to prevent cross-contamination during use of a digital sensor?",
    answers: ["Heat sterilization",
              "Disinfection or barrier",
              "Barrier technique and disinfection",
              "Cold sterilization"],
    correct: 2,
    category: "RHS",
    rationale: "The CDC has recommended that both disinfection with a high-level disinfectant and barrier should be used with digital sensors. Sensors could be damaged with heat sterilization and cold sterilization."
  },
  {
    question: "The disinfectant required with the use of a digital sensor is an EPA registered __________.",
    answers: ["High-level disinfectant",
              "Intermediate-level disinfectant",
              "Low-level disinfectant",
              "Sterilant"],
    correct: 1,
    category: "RHS",
    rationale: "Digital sensors, which are non-critical instruments, should be disinfected with an EPA-registered intermediate-level disinfectant and then covered with a barrier. Immersion in high-level disinfectants will damage sensors. Low-level disinfectants are used to disinfect surfaces that can become contaminated. A sterilant solution will damage a sensor."
  },
  {
    question: "In addition to the barrier technique, which of the following is an infection control measure for the wire connections from the sensor to the digital image unit?",
    answers: ["Wiping down with soapy water solution",
              "Wiping down with an intermediate-level disinfectant",
              "Wiping down with a high-level hospital-grade disinfectant",
              "No specific infection control measures are required for the cords"],
    correct: 2,
    category: "RHS",
    rationale: "Wires from the sensor to the digital image unit should be wiped down with a high-level hospital-grade disinfectant. Wiping with soapy water or an intermediate-level disinfectant will not disinfect to the level required."
  },
  {
    question: "Which of the following statements is correct regarding the use of masks and protective eyewear during dental imaging procedures?",
    answers: ["Face masks are required, but protective eyewear is not.",
              "Protective eyewear is required, but face masks are not.",
              "Protective eyewear and face masks are optional.",
              "All PPE, including face masks and protective eyewear, must be worn at all times. Standard precautions apply."],
    correct: 3,
    category: "RHS",
    rationale: "There is minimal risk of splash or spatter during a dental imaging procedure; therefore, the use of a face mask, protective eyewear, and additional PPE is optional. The CDC requires a facemask and protective eyewear when there is a risk of splash or spatter."
  },
  {
    question: "Film contaminated with saliva should be __________.",
    answers: ["Placed in a high-level disinfectant solution to prevent cross-contamination",
              "Wiped off with soap and water and placed in a disposable cup",
              "Wiped free of saliva with an intermediate-level disinfectant",
              "Wiped free of saliva with alcohol"],
    correct: 2,
    category: "RHS",
    rationale: "Film contaminated with saliva should be wiped off and placed in a disposable cup. Placing the film in a high-level disinfectant, wiping with an intermediate-level disinfectant, or wiping with alcohol could damage the film."
  },

  {
    question: "Which of the following is placed in the daylight loader of an automatic film processor prior to opening the film packets?",
    answers: ["An empty cup",
              "Powdered gloves",
              "Powder-free gloves",
              "An empty cup and powder-free gloves"],
    correct: 3,
    category: "RHS",
    rationale: "The equipment placed in the daylight loader of an automatic processor before developing films includes the cup and a pair of powder-free gloves. Powdered gloves create an artifact on the x-rays."
  },
  {
    question: "The current patient was running, slipped and hit a picnic table with his front teeth. He fractured tooth number 9. Which image is preferred to evaluate this tooth?",
    answers: ["Occlusal",
              "Bitewing",
              "Periapical",
              "Panoramic"],
    correct: 2,
    category: "RHS",
    rationale: "The periapical image is recommended for the evaluation of a crown fracture. The periapical image allows the evaluation of the proximity of the pulp chamber to the fracture. The other views do not provide as clear an image for this condition as does a periapical view. The occlusal image and panoramic image are used to evaluate large areas of the maxilla or mandible. The bitewing image is used to evaluate interproximal surfaces. The panoramic image is recommended for the evaluation of mandibular jaw fractures."
  },
  {
    question: "In which situation would extraoral radiography not be used?",
    answers: ["To evaluate growth and development",
              "To evaluate impacted teeth",
              "To diagnose dental caries",
              "To evaluate the extent of large lesions"],
    correct: 2,
    category: "RHS",
    rationale: "Extraoral dental imaging is not used to diagnosis of dental caries. Bitewing radiographs are used for this procedure. Extraoral dental imaging is used to evaluate growth and development, impacted teeth, and the extent of large lesions."
  },
  {
    question: "All of the following must be documented in the patient record when exposing dental images except:",
    answers: ["Exposure settings (Unless changed)",
              "Reason for the images",
              "Number and type of images",
              "Diagnosis from the images"],
    correct: 0,
    category: "RHS",
    rationale: "Exposure setting would be good to include in the patient record but is not required. Reason for the images, number and type of images, and diagnosis from the images are all required record documentation."
  },
  {
    question: "You are mounting film with the orientation dot face up (convex side is facing you). Which method of mounting is being used and how are you viewing the film?",
    answers: ["Lingual mounting; you are viewing the patient\'s x-ray images as if you were inside his or her mouth looking out. The patient\'s left side is on your left side, and the patient\'s right side is on your right side.",
              "Labial mounting; you are viewing your patient\'s x-ray images as if you were inside his or her mouth looking out. Your patient\'s left side is on your left side, and your patient\'s right side is on your right side.",
              "Lingual mounting; you are viewing your patient\'s x-ray images as if you were facing your patient. Your patient\'s left side is on your right side, and your patient\'s right side is on your left side.",
              "Labial mounting you are viewing your patient\'s x-ray images as if you were facing your patient. Your patient\'s left side is on your right side, and your patient\'s right side is on your left side."],
    correct: 3,
    category: "RHS",
    rationale: "Labial film mounting orients the dot with the convex side facing the viewer. The dental professional views x-rays as if the viewer were facing the patient. The patient\'s left side is on the viewer\'s right side, and the patient\'s right side is on the viewer\'s left side. The lingual system of film mounting is not used frequently, but when it is used, the dental professional then views the radiographs from the lingual aspect, as if the viewer were sitting on the inside of the patient\'s mouth and looking out; the patient\'s left side is on the viewer\'s left side, and the patient\'s right side is on the viewer\'s right side."
  },
  {
    question: "You were replenishing the chemicals and mixed the chemicals, putting developer in the fixer and fixer in the developer. What occurred that alerted you that you had made a mistake?",
    answers: ["Strong ammonia smell",
              "Sediment of white crystals",
              "Clear amber color",
              "Green deposits in the developer"],
    correct: 0,
    category: "RHS",
    rationale: "Contamination of processing chemicals results in a strong ammonia smell. Crystals precipitate owing to the reaction of mineral salts in the water and the chemicals, but crystals are not considered a contamination. Old solutions begin to change colors to brown. Contaminated chemicals do not cause a green sediment"
  },
  {
    question: "You are in charge of the quality control procedures for the dental office, which of the following should be performed on a daily basis?",
    answers: ["Check the phosphor plates for artifacts.",
              "Run a test film to check processor solutions.",
              "Process an unexposed film to check the film.",
              "Check the scanner using an unexposed phosphor plate."],
    correct: 1,
    category: "RHS",
    rationale: "A test film is run through the processing solutions each day prior to developing exposed film to test the strength of the processing solutions; phosphor plates are checked regularly for artifacts; an unexposed film is processed each time a new box of film is opened; the scanner is checked on a schedule using processed plates."
  },
  {
    question: "What radiolucent landmark is circled on the dental image?",
	image: "images/rhs48.jpg",
    answers: ["Mental foramen",
              "Lingual foramen",
              "Mandibular canal",
              "Genial tubercles"],
    correct: 1,
    category: "RHS",
    rationale: "This is the lingual foramen. It is an opening or a hole in the bone located on the internal surface of the mandible near the midline; it is surrounded by the genial tubercles and appears radiolucent. The genial tubercles are radiopaque. The mental foramen is an opening or hole in the bone located on the external surface of the mandible in the region of the premolars. It would appear as a small ovoid or round radiolucent area located in the apical region of the mandibular premolars. The mandibular canal is radiolucent with thin superior and inferior radiolucent walls and is located below the submandibular fossa, between the mandibular foramen and the mental foramen."
  },
  {
    question: "Which of the following is not a factor in a missing apical area in a radiograph?",
    answers: ["The receptor was not placed high enough in the palate.",
              "The receptor was not placed low enough in the floor of the mouth.",
              "The horizontal angulation was incorrect.",
              "The patient was unable to completely close on the bite block."],
    correct: 2,
    category: "RHS",
    rationale: "Horizontal angulation does not play a role in a missing apex on a radiographic film. It can cause overlapping. A and B are both factors in a missing apical area due to the receptor not being placed high enough or low enough in the maxilla or mandible. A missing apical area can also be caused by the inability of the patient to bite down completely on the bite block."
  },
  {
    question: "Which of the following conditions exists on this image?",
	image: "images/rhs50.jpg",
    answers: ["A fixed bridge between the second premolar and second molar",
              "Open contacts between maxillary premolars",
              "Open contacts between the molars",
              "Pulp stone on the second molar"],
    correct: 1,
    category: "RHS",
    rationale: "This view indicates open contacts between the maxillary premolars as evidenced by the dark spaces between these teeth. The teeth in a fixed bridge would appear connected, and there should be at least one pontic present. The contacts between the molars are overlapped. There is no pulp stone."
  },

// Start here.


{
  question: "Which image is shown in this film?",
  image: "images/rhs51.jpg",
  answers: ["Frontal sinus",
            "Sphenoidal sinus",
            "Ethmoidal sinus",
            "Maxillary sinus"],
  correct: 3,
    category: "RHS",
  rationale: "The radiolucent area in this image is the floor of the maxillary sinus, which is one of a paired cavity or compartment of bone located within the maxilla. The paired frontal sinuses are found within the frontal bone superior to the nasal cavity, the sphenoidal sinuses are located deep within the body of the sphenoid bone, and the ethmoidal sinuses are located in small cavities located deep within each lateral mass of the ethmoid bone."
},


{
  question: "Which of the following would appear most radiopaque?",
  answers: ["Composite",
            "Amalgam",
            "Pulp",
            "Enamel"],
  correct: 1,
    category: "RHS",
  rationale: "Amalgam is a common restorative material used in dentistry and is the most radiopaque of the materials listed. Composite can appear radiopaque or radiolucent depending on content of materials but less radiopaque than amalgam. The pulp appears radiolucent. Enamel is radiopaque but less radiopaque than amalgam."
},


{
  question: "In this panoramic image, which of the following statements is true?",
  image: "images/rhs53.jpg",
  answers: ["The permanent mandibular second molars are erupted.",
            "There is no evidence of mandibular third molars.",
            "Unerupted maxillary canines are present.",
            "The primary maxillary first molars are still present."],
  correct: 2,
    category: "RHS",
  rationale: "The permanent maxillary canines are unerupted. In this panoramic image, the permanent mandibular second molars are unerupted, the mandibular third molars have begun to form, and the permanent first premolars are present in place of the primary first molars."
},


{
  question: "Which of the following affects the sharpness of a dental image?",

  answers: ["Tungsten filament",
            "Milliamperage",
            "Focusing cup position",
            "Focal spot size"],
  correct: 3,
    category: "RHS",
  rationale: "The size of the focal spot determines clarity or fuzziness on an image; the smaller the focal spot, the sharper the image. The tungsten filament produces the electrons; milliamperage determines the number of electrons produced; the focusing cup (or molybdenum cup) focuses the electron cloud that is directed at the tungsten target."
},


{
  question: "Distortion of an image describes which of the following characteristics?",

  answers: ["Characteristics of the beam of energy",
            "Radiolucent characteristics",
            "Geometric characteristics",
            "Radiopaque characteristics"],
  correct: 2,
    category: "RHS",
  rationale: "Distortion, magnification, and sharpness are all geometric characteristics affecting the quality of dental images. Quality, quantity, and intensity describe characteristics of the beam of energy; radiolucent and radiopaque describe the structures on the image related to their density."
},


{
  question: "An underdeveloped film may be caused by which error?",

  answers: ["Inadequate development time",
            "Solution that is too warm",
            "Excessive development time",
            "Concentrated developer solution"],
  correct: 0,
    category: "RHS",
  rationale: "An underdeveloped film will appear light and is caused by inadequate development time, developer solution that is too cool, and depleted or contaminated developer. Overdeveloped film will appear dark and is caused by excessive development time, developer solution that is too warm, or developer solution that is too concentrated."
},


{
  question: "The purpose of the intensifying screen in a panoramic cassette is to reduce:",

  answers: ["Exposure time",
            "Mounting time",
            "Radiation exposure",
            "Ghosting"],
  correct: 2,
    category: "RHS",
  rationale: "The intensifying screen glows with a green light or blue light when exposed to x-radiation. The illumination of the intensifying screen exposes the panoramic screen film. Less x-radiation is required to expose the screen film than x-ray film. Exposure time is actually longer for panoramic film. Mounting time and ghosting are not affected by the intensifying screen."
},


{
  question: "The office has just started using digital radiography. Analog film was used previously. Exposure time will be:",

  answers: ["About the same as for film",
            "Increased",
            "Decreased",
            "Unchanged"],
  correct: 2,
    category: "RHS",
  rationale: "Exposure times for digital images are decreased by 50%–90% compared with the use of conventional film."
},


{
  question: "What exposure control selection(s) controls the quality of the x-ray beam?",

  answers: ["Time",
            "Kilovoltage",
            "Milliamperage",
            "Both a and c"],
  correct: 1,
    category: "RHS",
  rationale: "The quality, or wavelength and energy, of the x-ray beam is controlled by kilovoltage. An increase in kilovoltage will increase the speed and energy of the electrons and increase the penetrating ability of the x-ray beam. The quantity or number of x-rays is controlled by milliamperage and exposure time. Both milliamperes and exposure time have a direct influence on the number of electrons produced by the cathode filament. When milliamperage is increased, the exposure time must be decreased and vice versa to maintain the density of the image."
},


{
  question: "Which of the following is a true statement regarding radiation and patient protection?",

  answers: ["X-ray images are routinely prescribed for 6-month recall patients.",
            "Round collimators are preferred over rectangular collimators.",
            "A patient may hold the image receptor in place when XCPs are not available.",
            "The benefit of dental x-ray images outweighs the risk of ionizing radiation."],
  correct: 3,
    category: "RHS",
  rationale: "The benefit of early diagnosis of dental disease far outweighs the risks related to ionizing radiation. Exposure of images is based on clinical need and not based on a “time” routine. Rectangular collimators reduce the area of exposure on the face more than round collimators. At no time should a patient hold an image receptor in place."
},

//61
{
  question: "Which of the following is a dose equivalent measurement?",

  answers: ["Coulombs per kilogram",
            "Rad",
            "Roentgen",
            "Sievert"],
  correct: 3,
    category: "RHS",
  rationale: "The sievert is the International System of Units (SI) unit of the dose equivalent. It is used to compare the biologic effects of different types of radiation. Coulombs per kilogram and the roentgens measure radiation exposure. Coulombs per kilogram measures the number of ion pairs in the air. The roentgen measures radiation exposure by measuring the amount of ionization that occurs in the air. Rad measures absorbed dose."
},

//62
{
  question: "Which traditional measurement and metric measurement are equal?",

  answers: ["Roentgen and sievert",
            "Rad and gray",
            "Rem and coulombs per kilogram",
            "Sievert and rad"],
  correct: 1,
    category: "RHS",
  rationale: "Rad, the traditional unit, and gray, the SI unit (International System of Units), refer to the absorbed dose. The roentgen, the traditional exposure measurement, measures the amount of ionization that occurs in the air. Coulombs per kilogram, the SI unit of exposure measurement, measures the number of ion pairs in the air. The sievert is the SI unit and the rem is the traditional unit of the dose equivalent. They are used to compare the biological effects of different types of radiation."
},

//63
{
  question: "Which of the following represents the maximum permissible dose (MPD) for the general public?",

  answers: ["0.05 rem/month",
            "0.1 rem/year",
            "5 rem/year",
            "20 rem"],
  correct: 1,
    category: "RHS",
  rationale: "A total of 0.1 rem/year or 0.001 Sv/year is the maximum permissible dose (MPD) of radiation per year for nonoccupationally exposed persons; 0.05 rems/month is the MPD for an occupationally exposed pregnant worker; 5 rems/year is the MPD of an occupationally exposed worker; 20 rems is the cumulative effective dose for an occupationally exposed 20-year-old worker (age × 1 rem)."
},

//64
{
  question: "Which of the following is a true statement regarding pediatric exposures to radiation?",

  answers: ["Uncooperative children require panoramic exposures.",
            "Pediatric patients do not require images.",
            "Immature tissues of pediatric patients are less susceptible to radiation than the tissues of adult patients.",
            "A child may be seated in a parent's lap for exposures."],
  correct: 3,
    category: "RHS",
  rationale: "A parent may hold a child with the child seated in the parent's lap, only if the child is uncooperative; both are covered by a lead apron. Although a panoramic exposure is an option, it may not be the best option. A panoramic image will not show decay as readily as a bitewing image. Children should be prescribed dental images when clinically necessary. Immature tissues found in children are more susceptible to ionizing radiation than adult tissues."
},

//65
{
  question: "Which of the following refers to operator protection during dental imaging procedures?",

  answers: ["Avoid the primary beam.",
            "Use a lead apron.",
            "Determine the need for dental images.",
            "Avoid retakes."],
  correct: 0,
    category: "RHS",
  rationale: "The operator should avoid the primary beam. The use of a lead apron and avoiding retakes protect the patient. Determining the need for the dental images is the responsibility of the dentist and protects the patient."
},

//66
{
  question: "During the exposure of a dental image, the operator:",

  answers: ["Stands more than 6 feet away and at a right angle to the tubehead",
            "Stands in front of and parallel to the primary beam",
            "Stands within 6 feet of and parallel to the primary beam",
            "Stands in back of the patient's head"],
  correct: 0,
    category: "RHS",
  rationale: "The operator must stand 6 feet away at right angles to the tubehead; standing in front of and parallel to the primary beam, standing within 6 feet of and parallel to the primary beam, and standing in back of the patient’s head can expose the operator to primary and scatter radiation."
},

//67
{
  question: "Multiple shades of gray on an image are controlled by which component of the x-ray machine?",

  answers: ["mA",
            "kV",
            "Timer",
            "Collimator"],
  correct: 1,
    category: "RHS",
  rationale: "The kV setting controls contrast, which is the range of gray shades or areas of black and white, on an image. The mA and the timer control the density on images. The kV setting also controls density on an image. The collimator limits the size of the primary beam that exits the position indicating device (PID) to 2.75 inches."
},

//68
{
  question: "During the production of x-rays, how much energy is lost as heat?",

  answers: ["1%",
            "8%",
            "70%",
            "99%"],
  correct: 3,
    category: "RHS",
  rationale: "X-ray production is very inefficient; 99% of the energy used to generate x-rays is lost as heat. Electrons travel from the cathode to the anode. When the electrons strike the tungsten target, their energy of motion, or kinetic energy, is converted to x-ray energy and heat. Less than 1% of the energy is converted to x-rays. Coherent scatter accounts for 8% of the scatter radiation. General radiation accounts for 70% of the x-ray photons produced."
},

//69
{
  question: "Which of the following causes cellular damage from x-radiation?",

  answers: ["Ionization",
            "Milliamperage",
            "Kilovoltage potential",
            "Filtration"],
  correct: 0,
    category: "RHS",
  rationale: "Cellular damage in the tissues occurs as a result of ionization when x-rays interact with the cells. Ionization occurs when an electron is ejected from the orbit of an atom. Milliamperage affects image density, and kilovoltage affects both image density and contrast. The filter removes long-wavelength, low-energy radiation from the primary beam."
},

//70
{
  question: "Which statement is true as it relates to the direct theory of radiation injury?",

  answers: ["Cell damage results when ionizing radiation directly hits critical areas or targets within the cell.",
            "Direct injuries from exposure to ionizing radiation occur frequently but seldom do noticeable damage.",
            "Most x-ray photons are absorbed by the cell and cause little or no damage.",
            "Indirect injuries occur at the same rate as direct injuries from exposure to ionizing radiation."],
  correct: 0,
    category: "RHS",
  rationale: "The direct theory of radiation injury suggests that cell damage results when ionizing radiation directly hits critical areas or targets within the cell. This occurs when the x-ray photon directly strikes the DNA within the cell, resulting in injury to the irradiated organism. Direct theory injuries from exposure to ionizing radiation occur infrequently; when it occurs, damage occurs. Most x-ray photons pass through the cell and cause little or no damage. The indirect theory of injury suggests ionizing radiation causes ionization of the water molecules, which result in free radicle formation that can reform into toxins. This occurs more frequently than direct damage to tissues and organs."
},


//71
{
  question: "Which of the following changes describes the development of cataracts in a person who has been exposed to excessive radiation?",

  answers: ["Genetic",
            "Generational",
            "Short term",
            "Somatic"],
  correct: 3,
    category: "RHS",
  rationale: "Somatic damage causes damage to the person who received the radiation exposure. It affects all cells except reproductive cells. Cataracts affect the person who is exposed and therefore are a somatic change. Generational or genetic effects are found in the offspring of a person receiving radiation. Cataracts are not a short-term effect; rather, they can be a long-term effect of radiation exposure."
},

//72
{
  question: "Which of the following requires less exposure for the patient?",

  answers: ["Large silver halide crystals",
            "Small silver halide crystals",
            "Phosphor storage plates",
            "Pixels"],
  correct: 3,
    category: "RHS",
  rationale: "Pixels, discrete units of information within digital sensors, are more sensitive to x-rays than the silver halide crystals in film emulsion and require 50%–90% less x-ray exposure than film. Phosphor storage plates use a similar amount of x-radiation as F-speed film. Digital sensors reduce the exposure time more than 50% over F-speed film and phosphor storage plates."
},

//73
{
  question: "Which of the following would actually increase exposure time to a patient?",

  answers: ["Exposing a panoramic image instead of four bitewings",
            "Decreasing target-to-image receptor distance",
            "Decreasing kV by 10%",
            "Using the bisecting angle technique"],
  correct: 2,
    category: "RHS",
  rationale: "In order to keep the same density of an image, if the kV is decreased, the mA or time would have to be increased. Both mA and time control the number of x-ray photons; kV controls the force or penetrating power of the electrons. Increasing the number of x-ray photons would increase exposure. A panoramic film and four bitewing x-rays require the same amount of radiation. Decreasing the target-to-film distance allows the exposure time to be decreased. The bisecting technique requires less exposure time with a shorter PID than the paralleling technique with longer PID."
},

//74
{
  question: "Which of the following statements best describes the primary beam of energy?",

  answers: ["It includes primary, secondary, and scatter radiation.",
            "It contains short waves.",
            "It is unfiltered.",
            "It is measured in coulombs per kilogram."],
  correct: 1,
    category: "RHS",
  rationale: "The primary x-ray beam consists of short-wavelength, high-energy x-rays. The long-wave, low-energy x-rays are removed by an aluminum filter. The primary beam is the x-ray beam that exits the tubehead before it interacts with matter. The x-rays that are created once the primary beam interacts with matter are known as secondary radiation. Scatter radiation, a type of secondary radiation, consists of x-rays that are deflected. Coulombs per kilogram, an exposure measurement, measures the amount of ionization in the air produced by x-rays."
},

//75
{
  question: "Which of the following is the acronym for the principle that governs exposure to radiation?",

  answers: ["NCRP",
            "ALARA",
            "MPD",
            "ANSI"],
  correct: 1,
    category: "RHS",
  rationale: "ALARA, keeping the amount of radiation as low as reasonably achievable, is the principle that governs the use of radiation. NCRP and ANSI are agencies and are not related to exposure to radiation, and MPD refers to the maximum permissible dose of radiation a person may receive in a given period of time."
},

//76
{
  question: "Which of the following best describes acute exposures to radiation?",

  answers: ["Genetic",
            "Chronic",
            "Short term",
            "Leukemia"],
  correct: 2,
    category: "RHS",
  rationale: "A short-term effect would result from an acute amount of radiation that is received all at once. A chronic exposure refers to small amounts of radiation received over a longer period of time. Genetic effects take a generation to become evident, and leukemia is a possible long-term effect of exposure to radiation."
},

//77
{
  question: "Which of the following has fairly low sensitivity to x-rays, but is a concern because of its risk of exposure due to its location?",

  answers: ["Lens of the eye",
            "Oral mucosa",
            "Bone marrow",
            "Thyroid gland"],
  correct: 3,
    category: "RHS",
  rationale: "The thyroid gland has low sensitivity to x-rays but is of concern because of its location on the neck where it could potentially receive radiation exposure from almost every exposure. The lens of the eye and oral mucosa are at high sensitivity and bone marrow is at highest sensitivity but are not positioned to receive exposure from multiple images."
},

//78
{
  question: "When should a full adult series of dental images be considered for a child or adolescent?",

  answers: ["7 years old",
            "9 years old",
            "12 years old",
            "When clinical evidence of generalized disease is present and the adolescent has first and second molars"],
  correct: 3,
    category: "RHS",
  rationale: "According to the American Dental Association and the U.S. Food and Drug Administration Guidelines for Prescribing Dental Radiographs, a full mouth series of dental images is recommended for adolescents (have both first and second molars) with generalized oral disease. There are no recommendations for a full mouth series of dental images on a child. A full adult series is based on need (generalized disease), not on age."
},

//79
{
  question: "After processing four bitewing films, the fourth film exits the processor and is completely black at one end of the image. What is the reason for the black portion of the image?",

  answers: ["Developer solution was too weak",
            "Processing chemicals were too cold",
            "Darkroom door was opened too early",
            "Receptor was not exposed to radiation"],
  correct: 0,
    category: "RHS",
  rationale: "Films accidentally exposed to white light will appear black. The darkroom door was opened before the film completely entered the processor. If the developer solution is too weak or too cold, a lighter film will be processed. If the receptor was not exposed to radiation the image would appear clear."
},

//80
{
  question: "You are using a complete series of dental images to educate your patient on the value of radiography. According to HIPAA, what should not be present in or on the film mount?",

  answers: ["The date",
            "The patient's name",
            "Radiographs showing impacted teeth",
            "Radiographs showing dental caries"],
  correct: 1,
    category: "RHS",
  rationale: "Health Insurance Portability and Accountability Act (HIPAA) regulations protect a patient's identity. Personal identification (e.g., patient's name) on a set of radiographs is not for public display. The date, images showing impacted teeth, and images showing dental caries can be displayed."
},


//81
{
  question: "How should you dispose of the used developer solution?",

  answers: ["Put it in a leakproof biohazard bag.",
            "Flush it down the sanitary drain sewer.",
            "Place it in the septic system.",
            "Place it in a special container to be picked up by a special service."],
  correct: 1,
    category: "RHS",
  rationale: "Used developer is considered nonhazardous waste and can be disposed of in the sanitary drain. There is no need to put used developer solution in a leakproof biohazard bag or in a special container to be picked up by a special service. It must never be put into a septic system."
},

//82
{
  question: "Which of the following should not be disposed of through a waste management system?",

  answers: ["Unused developer",
            "Film",
            "Lead foil",
            "Stabe bite block"],
  correct: 3,
    category: "RHS",
  rationale: "Unused developer, film, and lead foil should all be disposed of through a waste management system. Stabe bite blocks are disposed with basic waste not through the waste management system."
},

//83
{
  question: "You can dispose of the fixer solution and rinse water into sanitary drain systems when __________.",

  answers: ["They are mixed with equal parts of distilled water",
            "The temperature is equal to that of the room",
            "The solutions have evaporated by half",
            "All of the silver has been removed"],
  correct: 3,
    category: "RHS",
  rationale: "The only time fixer solution can be discharged down the sanitary drain is after it has been run through a silver recovery unit when and all the silver halide crystals have been removed. Mixing fixer with distilled water, equalizing the temperature, and allowing half of the solution to evaporate will not decrease the amount of silver halide crystals in the solution."
},

//84
{
  question: "Which method is used to dispose of silver that has been recovered from used fixer and rinse water solutions?",

  answers: ["Have it picked up and disposed of by an appropriate waste management service",
            "In the septic tank",
            "In the sanitary sewer",
            "In a biohazard bag"],
  correct: 0,
    category: "RHS",
  rationale: "Silver recovered from fixer solution must be picked up and disposed of by an appropriate waste management service. It cannot be discharged in the sanitary sewer, septic tank, or biohazard bag."
},

//85
{
  question: "Who/what determines who can expose dental images in the dental office?",

  answers: ["Occupational Health and Safety Association (OSHA)",
            "American Dental Association (ADA)",
            "Individual states",
            "Dentist"],
  correct: 2,
    category: "RHS",
  rationale: "Individual states regulate who may expose dental images and the specific educational or certification requirements for such persons. OSHA enforces regulations to protect the safety of dental employees from hazardous materials in the dental office. The purpose of the ADA is to help the dental profession and advance oral healthcare. The dentist determines who he will hire and what responsibilities he will allow in his office that are sanctioned by the state dental board."
},

//86
{
  question: "You are destroying old patient records. How do you dispose of the dental radiographs?",

  answers: ["As regulated waste",
            "As hazardous waste",
            "As normal office waste",
            "Have them collected by an approved waste removal service"],
  correct: 2,
    category: "RHS",
  rationale: "Developed dental film can be disposed of in normal office waste. There is no need to dispose of processed film in regulated waste, hazardous waste, or have them collected by an approved waste removal service."
},

//87
{
  question: "Which interaction with x-rays causes the radiopaque areas on a dental image?",

  answers: ["Compton’s scatter",
            "Photoelectric effect",
            "Coherent scatter",
            "No interaction"],
  correct: 1,
    category: "RHS",
  rationale: "The photoelectric effect or absorption is responsible for the radiopaque areas of a dental image. The x-ray photon collides with and ejects an inner shell electron expending all its energy to eject the electron and disappears. The x-rays do not reach the receptor which results in the radiopaque portions on the dental image. Compton scatter does not reach the receptor; the x-ray photon ejects an outer shell electron, loses the energy it took to eject the electron, and continues on in an alternate course with less energy. It could cause fogging of the image. Coherent scatter, unmodified, or Thompson scatter does not reach the receptor; an x-ray photon collides with but does not eject an outer shell electron; this interaction causes the photon to change course. It may cause fogging of the image. No interaction takes place; the x-ray photon passes through without interacting with matter and strikes the receptor causing the radiolucent areas on the dental image"
},

//88
{
  question: "You have a package of outdated dental film. How should you dispose of it?",

  answers: ["Put it in the trash receptacle.",
            "Store it for 6 years, then discard in regular trash.",
            "Shred it and place it in a biohazard bag.",
            "Contact an approved waste removal service."],
  correct: 3,
    category: "RHS",
  rationale: "Undeveloped dental film must be collected by an approved waste management removal service. It cannot be put in the trash receptacle, stored for 6 years and then disposed of, or shredded and placed in a biohazard bag."
},

//89
{
  question: "Exposed film and phosphor plates should be collected in __________ and transferred to the darkroom or scanning area.",

  answers: ["The lab coat pocket",
            "The operator's hand",
            "A cup",
            "The bracket tray"],
  correct: 2,
    category: "RHS",
  rationale: "Exposed receptors should be collected in a cup. Collecting receptors in the lab coat pocket, the operator's hand, or the bracket tray will cause cross-contamination."
},

//90
{
  question: "Infection control practiced during exposure involves all of the following except __________.",

  answers: ["The beam alignment device is placed on the uncovered countertop after the procedure",
            "The exposed film or phosphor plates are dried after use",
            "The beam alignment device is reassembled as needed",
            "The exposed film or phosphor plates are placed in a cup"],
  correct: 0,
    category: "RHS",
  rationale: "The beam alignment device and receptors are never to be placed on the uncovered countertop before, during, or after use. They are to be kept on the bracket tray or on a covered countertop. The disposal of all contaminated items occurs at the end of the exposure process, not during it. During the exposure of receptors, the exposed film or phosphor plates are dried and placed in a cup. The beam alignment device is reassembled as needed for receptor placement."
},




//91
{
  question: "Infection control practices during processing involve which of the following?",

  answers: ["Transport",
            "Assembly of beam alignment devices",
            "Checking kV settings",
            "Steadying the tubehead"],
  correct: 0,
    category: "RHS",
  rationale: "Receptor transport is considered to be part of processing. Assembling the beam alignment device, checking the kV settings, and steadying the tubehead are all part of the radiographic exposure process."
},

//92
{
  question: "During dental imaging procedures, exposure to pathogens occurs most frequently from which of the following?",

  answers: ["Touch",
            "Transfer",
            "Splash, spatter, and droplet",
            "A and B"],
  correct: 3,
    category: "RHS",
  rationale: "Dental imaging infection control is focused on touch and transfer of pathogens. Splash, spatter, and droplet occur infrequently."
},

//93
{
  question: "Which of the following is a single-use item used in a dental imaging procedure?",

  answers: ["Face mask",
            "Lead apron",
            "Beam alignment device",
            "Phosphor plate"],
  correct: 0,
    category: "RHS",
  rationale: "Face masks, cotton rolls, dental bibs, and any paper supplies are all disposable, single-use items used in a dental imaging procedure. The lead apron, beam alignment device, and phosphor plates are multiple-use items."
},

//94
{
  question: "Which describes proper storage of a lead apron?",

  answers: ["Folding and placing it on the chair for reuse",
            "Hanging it between uses",
            "Rolling it",
            "Any method may be used."],
  correct: 1,
    category: "RHS",
  rationale: "Lead aprons cannot be folded, creased, rolled, or placed near sharp objects. The correct method of storage is hanging."
},

//95
{
  question: "You are at greatest risk of contracting your patient's hepatitis C virus from which source?",

  answers: ["Your gloves",
            "The film packet",
            "The lead apron",
            "The beam alignment device"],
  correct: 1,
    category: "RHS",
  rationale: "The film packet is potentially the greatest source for cross-contamination in dental imaging. Improper handling of the film creates contamination issues in the operatory and in the darkroom. Gloves prevent cross-contamination; the lead apron is disinfected after every patient; and the beam alignment device is sterilized after each patient."
},

//96
{
  question: "Which of the following is not classified as a noncritical instrument?",

  answers: ["Beam alignment device",
            "Position indicating device of the dental x-ray tubehead",
            "Exposure button",
            "Lead apron"],
  correct: 0,
    category: "RHS",
  rationale: "The beam alignment device is a semicritical instrument because it touches mucous membrane but does not penetrate soft tissue. The lead apron, exposure button, and position indicating device are all noncritical instruments."
},

//97
{
  question: "In trying to explain to a patient about sequence of injury, you use the example of a sunburn. What stage of injury is being described?",

  answers: ["Recovery",
            "Latent period",
            "Period of injury",
            "Cumulative effect"],
  correct: 2,
    category: "RHS",
  rationale: "The period of injury is the period of time damage is occurring or symptoms are visible. The recovery period or cell recovery is the period of time when the body is recovering or repairing itself from the injury. The latent period is the time between exposure and the presence of symptoms. The cumulative effect is when irreparable injury occurs. The areas of the body that do not recover, but are irreparably damaged, can have long-term effects later and further injury/exposure will also lead to health issues later."
},

//98
{
  question: "Phosphor plates are cleaned with which of the following disinfectants?",

  answers: ["Low-level disinfectant",
            "Intermediate-level disinfectant",
            "High-level disinfectant",
            "Disinfectant specifically for phosphor plates"],
  correct: 3,
    category: "RHS",
  rationale: "Disinfectants specifically designed for phosphor plates are used to clean phosphor plates after they have been scanned. Low-level, intermediate-level, and high-level disinfectants could damage phosphor plates."
},

//99
{
  question: "An instrument that contacts mucous membranes but does not penetrate soft tissue or bone is considered __________.",

  answers: ["Critical",
            "Semicritical",
            "Noncritical",
            "Semicritical and noncritical"],
  correct: 1,
    category: "RHS",
  rationale: "An instrument that contacts mucous membranes but does not penetrate soft tissue or bone is considered a semicritical instrument. An instrument that contacts mucous membranes and penetrates soft tissue or bone is considered a critical instrument. An instrument that does not contact mucous membranes is considered a noncritical instrument."
},

//100
{
  question: "Which statement is correct concerning the use of gloves during a dental imaging procedure?",

  answers: ["Gloves must be washed before use, to remove powder residue.",
            "Gloves must be sterile for all procedures.",
            "New gloves must be worn for each patient.",
            "Gloves must be worn only when contact with saliva is anticipated."],
  correct: 2,
    category: "RHS",
  rationale: "Fresh gloves need to be worn for each new patient. Washing them with soap and water or chemicals would decrease their barrier-protection properties. Nonsterile examination gloves can be used; sterile gloves are not necessary. Gloves are worn for all patient procedures, not just when contact with saliva is anticipated."
},

//1
{
  question: "As the quality control officer for the dental office, you should do all of the following except:",

  answers: ["Calibrate and inspect the equipment regularly.",
            "Develop and maintain a monitoring schedule.",
            "Maintain a log of all tasks completed, date of performance, and person conducting the test.",
            "Develop a plan for evaluation and correction of problems."],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Calibration and inspection of the equipment is regularly performed by an authorized service technician. The office quality control officer would develop and maintain a monitoring schedule; maintain a log of all tasks completed, date of performance, and person conducting the test; and develop a plan for evaluation and correction of problems." // Fill this in with the explanation for the correct answer.
},
//2
{
  question: "Which of the following is not true as it relates to the components of a dental x-ray tube?",

  answers: ["The focusing cup has a negative electrostatic charge.",
            "The anode of the positive end of the x-ray tube is made of tungsten and copper.",
            "The cathode is the positively charged end of the x-ray tube.",
            "The collimator is a lead disk with an aperture of various sizes and shapes."],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The cathode is the negatively charged end of the x-ray tube. The focusing or molybdenum cup has a negative electrostatic charge. The anode of the positive end of the x-ray tube is made of tungsten and copper. The collimator is a lead disk with an aperture of various sizes and shapes." // Fill this in with the explanation for the correct answer.
},
//3
{
  question: "Which part of a dental film absorbs the x-radiation during x-ray exposure and stores the energy from the radiation?",

  answers: ["Film base",
            "Adhesive layer",
            "Silver halide crystals",
            "Protective gelatin layer"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The silver halide crystals in the emulsion absorb the x-radiation during x-ray exposure and store the energy from the radiation. The film base is a flexible piece of polyester plastic. The adhesive layer is a thin layer of adhesive material that covers both sides of the film base. The protective gelatin layer, which suspends the silver halide crystals, is a thin transparent coating placed over the emulsion." // Fill this in with the explanation for the correct answer.
},
//4
{
  question: "Which intraoral dental x-ray machine component is used to aim and direct the x-ray beam toward the image receptor?",

  answers: ["Yoke",
            "Control panel",
            "Extension arm",
            "Position indicating device"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The position indicating device (PID) is used to aim and direct the x-ray beam toward the image receptor. The yoke is the curved portion of the x-ray machine that is connected to the extension arm. The extension arm holds the tubehead and is connected to the main body of the x-ray unit. The control panel is the portion of the x-ray machine that houses the major controls including the line switch, timer, milliamperage and kilovoltage selectors, and exposure button." // Fill this in with the explanation for the correct answer.
},
//5
{
  question: "When taking an image of a maxillary premolar periapical, where should the mesial edge of the receptor (it will come up to or cover) be placed to obtain the correct image and what should be in the image?",

  answers: ["Center of the central incisor; distal half of the central incisor, lateral incisor, canine, first premolar, mesial portion of the second premolar",
            "Center of the lateral incisor; distal half of the lateral incisor canine, first premolar, second premolar, mesial portion of the first molar",
            "Center of the canine; distal half of the canine, first premolar, second premolar, first molar, mesial portion of the second molar",
            "Center of the first premolar; distal half of the first premolar, second premolar, first molar, second molar, mesial portion of the third molar"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "When taking a maxillary premolar periapical image, the mesial edge of the receptor will be placed at the center of the canine to get the distal half of the canine, first premolar, second premolar, first molar, and mesial portion of the second molar in the image. Placing the mesial of the receptor at the center of the central incisor or at the center of the lateral incisor will be too far mesial and will most likely overlap the premolar region. Placing the mesial of the receptor at the center of the first premolar will be too far distal and will miss the canine/premolar contact and at least half of the first premolar." // Fill this in with the explanation for the correct answer.
},

//6
{
  question: "When taking an image of the maxillary and mandibular crowns and alveolar crestal bone, where should you place the mesial edge of the receptor (it will come up to or cover) to get the correct image, and what should be in the image?",

  answers: ["Center of maxillary first premolar; distal half of maxillary first premolar, second premolar, first molar, second molar, mesial portion of the third molar",
            "Center of both first premolars (maxillary and mandibular); distal half of both first premolars, second premolars, first molars, second molars, mesial portion of the third molars",
            "Center of maxillary second premolar; distal half of maxillary premolar, first molar, second molar, and third molar",
            "Center of both second premolars (maxillary and mandibular); distal half of both second premolars, first molars, second molars, and third molars"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "When taking a horizontal molar bitewing, you will need to position the receptor to image the crown and alveolar crestal bone of both the mandibular and maxillary arches. You will need to place the mesial of the receptor at the center of both second premolars (you need to take into consideration occlusion and where both the maxillary and mandibular teeth are positioned); the image should have the distal half of both maxillary and mandibular premolars, first molars, second molars, and third molars in the image. If the teeth are large, you may not get all of the third molars in the image. Placing the receptor to cover the maxillary teeth would be placement for a maxillary periapical image, not a bitewing. Placing the mesial edge of the receptor at the center of both first premolars is too far mesial and may miss the second/third molar contacts." // Fill this in with the explanation for the correct answer.
},
//7
{
  question: "Which is the name of the sensor used in digital imaging systems?",

  answers: ["CCD (charge-coupled device)",
            "PID (position indicating device)",
            "MRI (magnetic resonance imaging)",
            "TLD (thermoluminescent dosimeter)"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "A charge-coupled device (CCD) is a solid-state electrical plate used to transmit signals directly into a computer in digital imaging systems. A position indicating device (PID) is a device that guides the direction of the x-ray beam during the exposure of dental radiographs. Magnetic resonance imaging (MRI) is a method used to produce images of the inside of a person's body by means of a strong magnetic field. A thermoluminescent dosimeter (TLD) is a device that measures exposure to ionizing radiation." // Fill this in with the explanation for the correct answer.
},
//8
{
  question: "Which is a vertical angulation error?",

  answers: ["Overlapping",
            "Blurred image",
            "Foreshortening",
            "Herringbone pattern"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Foreshortening is a vertical angulation error in which images of the teeth appear too short, resulting from excessive vertical angulation. Overlapping is horizontal angulation. Movement of the patient's head would result in a blurred image. A herringbone pattern is the result of the film being placed backward in the mouth." // Fill this in with the explanation for the correct answer.
},
//9
{
  question: "Which has occurred if there is no image on a film after processing?",

  answers: ["Film not exposed to radiation",
            "Movement of the patient's head",
            "X-ray beam misses part of the film",
            "Film placed backward in the mouth"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "If there is no image on a film after processing, the film has not been exposed to radiation. Movement of the patient's head would result in a blurred image. If the x-ray beam misses part of the film, the result is cone cutting. A herringbone pattern is the result of the film being placed backward in the mouth." // Fill this in with the explanation for the correct answer.
},
//10
{
  question: "Which occurs if a film is underexposed or underdeveloped?",

  answers: ["Light image",
            "Dark image",
            "Partial image",
            "Blurred image"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "A light image occurs if a film is underexposed or underdeveloped. Overdeveloping or developing solution temperature that is warm will result in a dark image. A partial image is the result of the film not completely immersed or tanks having low solution levels. A blurred image occurs if there is movement of the patient's head or the tubehead." // Fill this in with the explanation for the correct answer.
},

//11
{
  question: "Which error results in interproximal spaces overlapping on a radiograph?",

  answers: ["Level angulation",
            "Vertical angulation",
            "Horizontal angulation",
            "Perpendicular angulation"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Horizontal angulation results in interproximal spaces overlapping on a radiograph. Overlapping occurs when the PID is angled too far toward the distal or mesial surfaces instead of the interproximal areas. Foreshortening and elongation are caused by vertical angulation errors. When perpendicular angulation is used, the central ray is directed perpendicular to the film and the tooth." // Fill this in with the explanation for the correct answer.
},
//12
{
  question: "Which adjustment should be made when taking dental images for a patient who is a heavy set gentleman with a larger bone structure?",

  answers: ["Decrease the mA",
            "Increase exposure time",
            "Decrease exposure time",
            "There is no need to make a change to the settings"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Oral structures of greater density require an increase in exposure time, resulting in increased density of the image. A decrease in the mA will result in a lighter image because the overall exposure (blackness) of the image is controlled by mA and exposure time. A decreased exposure time lightens the film. If no change is made to the settings, the image will be too light." // Fill this in with the explanation for the correct answer.
},
//13
{
  question: "Which is a radiolucent restoration?",

  answers: ["Gold",
            "Acrylic",
            "Amalgam",
            "Post and core"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Acrylic is a radiolucent restorative material. Gold is a radiopaque restorative material. Amalgam is a radiopaque restorative material. A post and core is a radiopaque restorative material." // Fill this in with the explanation for the correct answer.
},
//14
{
  question: "Which is the least distance a person exposing radiographs should stand from the x-ray machine if shielding is not available?",

  answers: ["3 feet",
            "4 feet",
            "5 feet",
            "6 feet"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "A person exposing radiographs needs to stand at least 6 feet from the source of radiation. They also need to be at a 90–135 degree angle to the beam. Three, 4, and 5 feet are all too short a distance from the x-ray machine." // Fill this in with the explanation for the correct answer.
},
//15
{
  question: "Which radiographic technique error occurs when a partial image is created because the central beam misses the x-ray film?",

  answers: ["Elongation",
            "Cone cutting",
            "Foreshortening",
            "Double exposure"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Cone cutting is the radiographic technique error that occurs when a partial image is created because the central beam misses the x-ray film. Elongation is a radiographic technique error that elongates the image of the teeth. Foreshortening is a radiographic technique error, whereby the image of the teeth is shortened. Double exposure is a radiographic technique error in which film is exposed twice." // Fill this in with the explanation for the correct answer.
},

//16
{
  question: "How frequently is a cleaning film sent through the automatic processor?",

  answers: ["Daily",
            "Weekly",
            "Monthly",
            "When chemicals are changed"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The cleaning film is sent through the automatic processer each day before the processor is used to develop film. Using the cleaning film at weekly or monthly intervals or when the processor is changed will not keep the rollers clear of debris that may accumulate each day." // Fill this in with the explanation for the correct answer.
},
//17
{
  question: "Reticulation of a dental radiograph is indicative of__________",

  answers: ["Inadequate fixation",
            "Excessive exposure",
            "Moisture contamination of the film packet",
            "Sudden temperature changes during fixation"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Reticulation is produced by sudden temperature changes during processing, particularly from warm solutions to very cold water. Inadequate fixation produces a light milky film. Excessive exposure produces a dark film. Moisture contamination of the film packet will cause deterioration of the film." // Fill this in with the explanation for the correct answer.
},
//18
{
  question: "Which is the anatomic landmark located in the mandibular premolar area that can be mistaken for a periapical pathology?",

  answers: ["Mental fossa",
            "Mental foramen",
            "Mandibular canal",
            "Submandibular fossa"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The mental foramen can be mistaken for a periapical pathology. The mental fossa is a depression on the anterior aspect of the mandible above the mental ridge. The mandibular canal runs obliquely downward and forward in the ramus. The submandibular fossa is an impression on the medial side of the body of the mandible below the mylohyoid line." // Fill this in with the explanation for the correct answer.
},
//19
{
  question: "Which of the following is a reason for conducting a chart audit?",

  answers: ["Check image quality",
            "Track number of retakes",
            "Track reason for retakes and corrections",
            "All of the above"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Chart audits are used to check image quality and accuracy in charting." // Fill this in with the explanation for the correct answer.
},
//20
{
  question: "The hamular process is observed on intraoral films in a view of the__________",

  answers: ["Maxillary molar area",
            "Mandibular molar area",
            "Maxillary premolar area",
            "Mandibular premolar area"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The hamular process is located in the maxillary molar area. It is the inferior, hook-shaped extremity of the medial plate of the pterygoid process. This projection is not located in the maxillary premolar, mandibular premolar, or mandibular molar areas." // Fill this in with the explanation for the correct answer.
},
//21
{
  question: "You are in charge of taking care of the processing equipment each day. What do you need to do to replenish the automatic processor?",

  answers: ["Wait for oxidation to occur prior to replenishing the tanks",
            "Replenish 6 ounces of fixer solution daily",
            "Replenish 3 ounces of developer daily",
            "Replenish both developer and fixer each morning as needed"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Replenishing both fixer and developer will ensure properly developed images; oxidation occurs when chemicals are exposed to air and lose their strength; the specific amount of fixer and developer is determined by frequency of use; manual replenishment is required if processor doesn’t automatically replenish." // Fill this in with the explanation for the correct answer.
},
//22
{
  question: "In the paralleling technique, the central ray is at a __________ degree angle to the receptor",

  answers: ["60",
            "70",
            "80",
            "90"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The angle of the central ray to the film in the paralleling technique is 90 degrees. The paralleling technique requires placement of the film parallel to the teeth and positioning of the central ray perpendicular (90 degrees) to the teeth. Film placement at 60, 70, or 80 degrees would not meet the criterion that the film be perpendicular to the teeth." // Fill this in with the explanation for the correct answer.
},
//23
{
  question: "You have just scanned the dental images. You notice the following image. What do you see in the image? Do you need to take additional images? What do you record?",
  image: "images/rhs23.jpg",
  answers: ["The patient has multiple teeth showing germination. Additional images are not necessary. You would record this in the patient’s chart",
            "There is severe overlap in the image. You will need to retake the image, record the number of images exposed in the patient’s chart, and record the retake, the reason for the retake, and the correction in the retake log",
            "This image was double exposed, you should also have one unexposed image. You will need to retake both images, record two retakes in the patient chart, and record the two retakes, the reason for the retakes, and the correction in the retake log",
            "The image is normal, you would just record the number of images taken in the patient chart"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "This image was double exposed; you should also have one unexposed image. You will need to retake both images, record two retakes in the patient chart, and record the two retakes, the reason for the retakes, and the correction in the retake log. This image is not germination; if it was, additional images would not be necessary. You would record this in your patient’s chart. This image is not overlap; if it was, you would only retake the image if the interproximal areas were not visible in another image. If a retake was exposed, you would record the number of images exposed in the patient’s chart, and record the retake, the reason for the retake, and the correction in the retake log. If the image had been a diagnostic image, you would just record the number of images taken in the patient chart." // Fill this in with the explanation for the correct answer.
},
//24
{
  question: "Which is the correct vertical angulation for the central beam when exposing bitewing images using a bitewing tab?",

  answers: ["0 degrees",
            "+10 degrees",
            "+20 degrees",
            "+30 degrees"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The correct vertical angulation for the central beam when exposing bitewing images using a bitewing tab is +10 degrees. When the film is in the mouth, the maxillary portion of the film is angled at approximately +20 degrees and the mandibular portion of the film is at approximately 0 degrees. The average is +10 degrees. If the angle of the PID was at 0 degrees, the angle would not accommodate the maxillary arch. If the PID was angled at +20 or +30, it would not accommodate the mandibular arch." // Fill this in with the explanation for the correct answer.
},
//25
{
  question: "You are performing a quality assurance (QA) check on the phosphor plates using a step wedge. For what are you looking?",

  answers: ["Difference in density between the previous QA images and the current QA image for each specific phosphor plate",
            "Difference in density between each of the phosphor plate QA images developed that day",
            "The step wedge is clearly visible on the image",
            "You do not need to expose images to check for quality assurance of phosphor plates; you just need to visually check them for damage"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "You are looking for the difference in density between the baseline QA image and the current QA image for each specific phosphor plate; checking for QA is not accomplished comparing phosphor plate images each day or developing a clearly visible step-wedge; QA includes both comparing the current QA image against the baseline image and visually checking the plates for damage." // Fill this in with the explanation for the correct answer.
},

//26
{
  question: "Which occurred if the apices of the mandibular molar teeth in a periapical radiograph appear to be cut off the image?",

  answers: ["excessive vertical angulation",
            "inadequate vertical angulation",
            "excessive horizontal angulation",
            "inadequate horizontal angulation"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Inadequate vertical angulation results in the apices of the mandibular molar teeth in a periapical radiograph appearing to be cut off in the image on the film. Excessive vertical angulation results in foreshortening of the teeth on the film. Excessive horizontal angulation results in overlapping of the teeth on the film. Inadequate horizontal angulation can result in the primary beam not being angled between the contacts." // Fill this in with the explanation for the correct answer.
},
//27
{
  question: "You are in charge of quality control and have been instructed to test the quality of each new box of film. What test will be run?",

  answers: ["coin test",
            "fresh film",
            "light tight",
            "reference film"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "You will need to check the quality of each box of new using the fresh film test. You will develop an unexposed film. If the film is fresh, it will be clear with a blue tint. The coin test is a quality control test used to determine the adequacy of safelighting in the darkroom. Light tight is securing an area against all sources of white light. Reference image is a radiograph processed under ideal conditions, and then used to compare subsequent images." // Fill this in with the explanation for the correct answer.
},
//28
{
  question: "Which is used to determine the amount of radiation reaching the image receptor through each of the increments?",

  answers: ["coin test",
            "light tight",
            "step wedge",
            "reference film"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Step wedge is used to determine the amount of radiation reaching the image receptor through each of the increments. The coin test is a quality control test used to determine the adequacy of safelighting in the darkroom. Light tight is securing an area against all sources of white light. Reference film is a radiograph processed under ideal conditions, and then used to compare subsequent films." // Fill this in with the explanation for the correct answer.
},
//29
{
  question: "You are in charge of the supplies. You have just received a large order of film. There is out of date film and film that is ready to expire. Which film should you use first?",

  answers: ["film that is ready to expire",
            "film that is expired",
            "new film",
            "the order of use does not matter"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The film that is ready to expire should be used first. You should use film based on the last-in, first-out rule. You should not use expired film. The new film should be the last film used. The order does matter or you will end up with expired film that will need to be disposed of." // Fill this in with the explanation for the correct answer.
},
//30
{
  question: "A coin test has just been completed. The image of the coin appeared on the film. What if anything will you need to do?",

  answers: ["Change the safelight or filter, the light is too dark. If you are using the correct safelight or filter, you will need to move the safelight closer to your workspace and processor",
            "No changes need to be made, the safelight is adequate",
            "You need to change the safelight or filter, the safelight is too bright. If you are using the correct safelight or filter, you will need to move the safelight further away from your workspace and processor",
            "The safelight is not working. You need to replace the safelight"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The safelight is too bright if an image of a coin appears on a film during a coin test. Either the correct safelight or filter needs to be installed. The image of the coin would not appear if the safelight was too dark, adequate, or not working." // Fill this in with the explanation for the correct answer.
},

//31
{
  question: "After processing, fresh film that has been properly stored and protected will appear clear with a slight __________ tint.",

  answers: ["pink",
            "blue",
            "white",
            "brown"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "After processing, fresh film that has been properly stored and protected will appear clear with a slight blue tint. Processed fresh film will not have a pink, white, or brown tint." // Fill this in with the explanation for the correct answer.
},
//32
{
  question: "Which is the clearing test used to monitor?",

  answers: ["fixer strength",
            "water temperature",
            "developer strength",
            "darkroom lighting safety"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The clearing test is used to monitor fixer strength. The clearing test involves unwrapping films and placing them in the fixer; if films do not clear in 2 minutes, then the fixer strength is not adequate. The water temperature is tested with a thermometer. The developer solution is tested using the step wedge technique. Darkroom lighting safety is done using the safelight test." // Fill this in with the explanation for the correct answer.
},
//33
{
  question: "Factors that affect radiation injury include all of the following except:",

  answers: ["type of exposure",
            "how fast the exposure occurred",
            "how much exposure",
            "size of the area exposed"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The type of exposure is not a factor affecting radiation injury. How fast the exposure is (rate of exposure), how much exposure (total dose), and the size of the area exposed are all factors affecting radiation injury. Total dose is the total amount of radiation absorbed. Dose rate is the rate of exposure which is dose/time. Cells do not have time to recover with high-dose rate. The larger the area exposed, the more critical the injury. Cell sensitivity and age also affect radiation injury." // Fill this in with the explanation for the correct answer.
},
//34
{
  question: "What is the first thing you should do when implementing quality control procedures in the dental office?",

  answers: ["Maintain a monitoring schedule.",
            "Develop an overall plan.",
            "Assign duties for quality assurance procedures to staff members.",
            "Develop a plan for evaluation and correction of problems."],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The first step in implementing quality control procedures in your dental office is to develop an overall plan. The next thing is to assign duties for quality assurance to various staff members, and then develop a monitoring schedule to include maintenance and calibration of equipment. The monitoring schedule should be maintained and recorded in a log listing all tasks completed, date of performance, and person conducting the test. A plan should be developed for evaluation and correction of problems, and periodic in-service training should be provided to all staff members." // Fill this in with the explanation for the correct answer.
},
//35
{
  question: "Regulations regarding dental assistant certification vary from__________",

  answers: ["year to year",
            "state to state",
            "month to month",
            "county to county"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Regulations regarding dental assistant certification vary from state to state. Regulations regarding dental assistant certification do not vary from year to year, month to month, and county to county." // Fill this in with the explanation for the correct answer.
},

//36
{
  question: "The Consumer-Patient Radiation Health and Safety Act is a __________ law that requires all persons who take dental radiographs be certified.",

  answers: ["state",
            "local",
            "county",
            "federal"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The Consumer-Patient Radiation Health and Safety Act is a federal law that requires all persons who take dental radiographs be certified. States have additional laws regulating radiographic equipment and procedures. Local and county governments are not usually involved with the regulation of radiographic equipment and procedures." // Fill this in with the explanation for the correct answer.
},
//37
{
  question: "How long are the film and coin exposed when a coin test is conducted?",

  answers: ["30 seconds",
            "3 minutes",
            "15 minutes",
            "1 hour"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The film and coin should be exposed for 3-4 minutes when conducting a coin test. Thirty seconds is too short a time when conducting a coin test. Fifteen minutes and one hour are far too long a time when conducting a coin test." // Fill this in with the explanation for the correct answer.
},
//38
{
  question: "When the step wedge technique is used, if the density on the daily radiograph differs from that on the standard radiograph by more than __________ steps, the developer solution is depleted.",

  answers: ["two",
            "three",
            "four",
            "five"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "When the step wedge technique is used, if the density on the daily radiograph differs from that on the standard radiograph by more than two steps, the developer solution is depleted. Three, four, and five steps are too much deviation when using the step wedge technique." // Fill this in with the explanation for the correct answer.
},
//39
{
  question: "Velocity is:",

  answers: ["number of times a wave crest passes a given point during a specific amount of time",
            "distance from one wave crest to the next wave crest",
            "speed of a given object",
            "amount of force used to propel a given object"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Velocity is the speed of a given object, in this case an electron. A wavelength is the distance from one wave crest to the next wave crest. Frequency is the number of times a wave crest passes a given point during a specific amount of time. Force propels an object." // Fill this in with the explanation for the correct answer.
},
//40
{
  question: "Which effect will exposure to minor amounts of room light have on films being processed in a darkroom?",

  answers: ["Films will appear clear.",
            "Films will appear light.",
            "Films will appear black.",
            "Films will appear streaked."],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Films will appear black if they are exposed to minor amounts of room light while being processed in a darkroom. Films will appear clear if they have not been exposed to radiation. Films will appear light if they have inadequate exposure to radiation. Streaked films can be caused by dirty solutions, dirty film holders or hangers, or incomplete washing." // Fill this in with the explanation for the correct answer.
},


//41
{
  question: "Which condition will result in a radiographic image that is too light?",

  answers: ["inadequate safelight",
            "weak developing solutions",
            "processing solution that is too warm",
            "darkroom door opened during developing"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Weak developing solutions result in a radiographic image that is too light. Inadequate safelight and processing solution that is too warm results in a radiographic image that is too dark. A darkroom door opened during developing results in a radiographic image that is black." // Fill this in with the explanation for the correct answer.
},
//42
{
  question: "How can acceptable radiographs be produced if the temperature of the developing solution is slightly above normal?",

  answers: ["Lengthen time in the wash.",
            "Lengthen the exposure time.",
            "Shorten the time in the fixer.",
            "Shorten the time in the developer."],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Shortening the time in the developer is an acceptable technique to use if the temperature of the developing solution is slightly above normal. Lengthening the time in the wash will have no effect on the radiographic image. Lengthening the exposure time will produce a darker radiographic image. Shortening the time in the fixer will not adjust the image if the temperature of the developing solution is slightly above normal." // Fill this in with the explanation for the correct answer.
},
//43
{
  question: "Federal regulations require that round opening collimators restrict the x-ray beam to __________ inches at the patient end of the PID.",

  answers: ["1.75",
            "2.75",
            "3.75",
            "4.75"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Federal regulations require that round opening collimators restrict the x-ray beam to 2.75 inches at the patient end of the PID; 1.75, 3.75, and 4.75 are incorrect answers." // Fill this in with the explanation for the correct answer.
},
//44
{
  question: "Rectangular PIDs restrict the x-ray beam to the approximate size of a __________ image receptor.",

  answers: ["#1",
            "#2",
            "#3",
            "#4"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Rectangular PIDs restrict the x-ray beam to the approximate size of a #2 image receptor; a collimator the size of a #1 image receptor is too small an area and would cause a collimator cut on size 2 images; a collimator the size of a #3 or #4 image receptor would cause too much exposure when trying to limit patient exposure." // Fill this in with the explanation for the correct answer.
},
//45
{
  question: "Which of the following is a property of x-rays?",

  answers: ["Travel at the speed of sound.",
            "Diverge to a point.",
            "Have a negative charge.",
            "Penetrate matter."],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "X-rays penetrate matter. X-rays travel at the speed of light, diverge from a point, and have negative charge." // Fill this in with the explanation for the correct answer.
},

//46
{
  question: "You have an uncooperative child that you need to expose dental images on. Which of the following would be appropriate to do during an exposure?",

  answers: ["Have child sit on parent’s lap and cover both with a lead apron, parent stabilizes receptor holder, if needed.",
            "You stand next to the child and stabilize receptor holder; you have on a lead apron.",
            "You have the child sit on your lap and cover both of you with a lead apron; you stabilize the receptor holder, if needed.",
            "Both a and c"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "An uncooperative child can sit on the parent’s lap. You will need to cover both with a lead apron. The parent can stabilize the receptor holder, if needed, but cannot hold the receptor in the child’s mouth. You, as the operator are NEVER to stand next to the child and stabilize the receptor holder or have the child sit on your lap and stabilize the receptor holder. This is true, even if you have on a lead apron." // Fill this in with the explanation for the correct answer.
},
//47
{
  question: "The maximum permissible dose (MPD) for oral healthcare professionals is __________ mSv/year.",

  answers: ["50",
            "60",
            "70",
            "80"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The maximum permissible dose (MPD) for oral healthcare professionals is 50 mSv/year (millisieverts per year). Sixty, 70, or 80 mSv/year is too high a dose." // Fill this in with the explanation for the correct answer.
},
//48
{
  question: "Who is the person responsible for prescribing dental radiographs?",

  answers: ["dentist",
            "office manager",
            "dental assistant",
            "dental hygienist"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The dentist is the person responsible for prescribing dental radiographs. By law, the office manager, dental assistant, or dental hygienist may not prescribe dental radiographs." // Fill this in with the explanation for the correct answer.
},
//49
{
  question: "Which type of radiation is the most penetrating beam produced at the target of the anode?",

  answers: ["scatter",
            "primary",
            "ancillary",
            "secondary"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Primary radiation is the most penetrating beam produced at the target of the anode. Scatter radiation is a form of secondary radiation that occurs when an x-ray beam has been deflected from its path by interaction with matter. Ancillary is not a term used in association with types of radiation. Secondary radiation is created when the primary beam interacts with matter." // Fill this in with the explanation for the correct answer.
},
//50
{
  question: "Which is the metal disk with a small opening located inside the position indicating device in the path of the x-ray beam?",

  answers: ["transformer",
            "tubehead seal",
            "lead collimator",
            "filter"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The lead collimator is the metal disk with a small opening located inside the position indicating device in the path of the x-ray beam. The transformer alters the voltage of incoming electrical current. The tubehead seal is made of leaded glass or aluminum; it keeps the oil in the tubehead and acts as a filter to the x-ray beam. The aluminum filter is placed at the entrance to the PID to filter out the long, less penetrating wavelengths." // Fill this in with the explanation for the correct answer.
},

//51
{
  question: "Which are the majority of x-rays produced by dental x-ray machines?",

  answers: ["photo electric",
            "coherent scattering",
            "characteristic radiation",
            "Bremsstrahlung radiation"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Bremsstrahlung radiation is produced when high-speed electrons are stopped or slowed down by the tungsten atoms of the dental x-ray tube. Characteristic radiation accounts for only a very small part of the x-rays produced in an x-ray machine. Coherent scattering and photoelectric effect are types of interactions of x-rays with matter." // Fill this in with the explanation for the correct answer.
},
//52
{
  question: "Which tissue, organ, or cell is the most sensitive to radiation?",

  answers: ["bone",
            "muscle",
            "nerve",
            "reproductive"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Reproductive cells are the most sensitive to radiation. Bone has fairly low sensitivity to radiation; muscle and nerve tissue have low sensitivity to radiation." // Fill this in with the explanation for the correct answer.
},
//53
{
  question: "The x-ray room is prepared, and you have seated the patient. Which of the following procedures must you do before putting on your gloves?",

  answers: ["Prepare the beam alignment device.",
            "Adjust the headrest.",
            "Place the lead apron on the patient.",
            "Adjust the headrest and place the lead apron on the patient."],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "You should adjust the headrest and place the lead apron on your patient before you put on your gloves. You will prepare the beam alignment device with gloves on." // Fill this in with the explanation for the correct answer.
},
//54
{
  question: "The temperature of the water has been checked in the developer. It is 68°F. For how long will you develop and fix the film?",

  answers: ["4 minutes; 8 minutes",
            "4.5 minutes; 9 minutes",
            "5 minutes; 10 minutes",
            "5.5 minutes; 11 minutes"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "At 68 Degrees F, which is considered optimum temperature, film is developed for 5 minutes. Film is then fixed for 10 minutes which is double the development time. Film developed at 68°F for 4 minutes and fixed for 8 minutes or developed for 4.5 minutes and fixed for 9 minutes will be underdeveloped and under fixed. Film developed for 5.5 minutes at 68°F will be overdeveloped." // Fill this in with the explanation for the correct answer.
},
//55
{
  question: "A film processed under ideal conditions and used to compare subsequent radiographic images is called a __________ film.",

  answers: ["fresh",
            "fogged",
            "duplicate",
            "reference"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "A film processed under ideal conditions and used to compare subsequent radiographic images is called a reference film. Fresh film is unexposed film. Fogged film has been improperly stored or exposed to scatter radiation. Duplicate film is used to make a duplicate copy of a dental radiograph." // Fill this in with the explanation for the correct answer.
},

//56
{
  question: "After which year did all newly manufactured dental x-ray machines have to comply with federal regulations?",

  answers: ["1944",
            "1954",
            "1964",
            "1974"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "After 1974, all newly manufactured dental x-ray machines had to comply with federal regulations; 1944, 1954, and 1964 are incorrect answers." // Fill this in with the explanation for the correct answer.
},
//57
{
  question: "The x-ray beam is restricted to a diameter of no more than __________ at the surface of the skin.",

  answers: ["7 cm",
            "8 cm",
            "9 cm",
            "10 cm"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The x-ray beam is restricted to a diameter of no more than 7 cm at the surface of the skin. Eight, 9, and 10 centimeters is too large an area at the surface of the skin." // Fill this in with the explanation for the correct answer.
},
//58
{
  question: "Which is the definition for the acronym ALARA?",

  answers: ["as little as relatively allowable",
            "as low as reasonably achievable",
            "as likely as rationally attainable",
            "as little as realistically accomplished"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "ALARA is an acronym for as low as reasonably achievable. This is a radiation safety principle for minimizing radiation doses and release of radioactive materials by employing all reasonable methods. As little as relatively allowable, as likely as rationally attainable, and as little as realistically accomplished are incorrect answers." // Fill this in with the explanation for the correct answer.
},
//59
{
  question: "Dental radiographs are the property of the __________",

  answers: ["dentist",
            "patient",
            "insurance company",
            "dentist and the patient"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "By law, dental radiographs are the property of the dentist, not the patient. They are not the property of the insurance company, the patient, or shared by the patient." // Fill this in with the explanation for the correct answer.
},
//60
{
  question: "Which type of consent is necessary before exposing dental radiographs on a patient?",

  answers: ["implied",
            "inferred",
            "indicated",
            "informed"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Informed consent is necessary before exposing dental radiographs on a patient. Informed consent is permission granted with full knowledge of the possible risks and benefits. Implied consent is not adequate consent. Implied consent is consent that is not expressly granted by a person, but rather implicitly by a person's actions. Inferred consent and indicated consent are not terms used in reference to consent." // Fill this in with the explanation for the correct answer.
},

//61
{
  question: "Which limits the size of the primary beam?",

  answers: ["film",
            "filter",
            "collimator",
            "tungsten target"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The collimator limits the size of the primary beam. The film has no bearing on the size of the primary beam. An x-ray filter is a material placed in front of an x-ray source to reduce the intensity of particular wavelengths from its spectrum and selectively alter the distribution of x-ray wavelengths within a given beam. The tungsten target is a portion of the anode in the x-ray tube that serves as a focal point and converts bombarding electrons into x-ray photons." // Fill this in with the explanation for the correct answer.
},
//62
{
  question: "Which controls the quantity of an x-ray beam?",

  answers: ["cathode",
            "kilovoltage",
            "milliamperes",
            "tungsten target"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The milliamperes control the quantity of an x-ray beam. The cathode is the negative electrode in the x-ray tube. The kilovoltage is the x-ray tube voltage during an exposure, measured in kilovolts, that controls the quality of the beam. The tungsten target is a focal point in the anode." // Fill this in with the explanation for the correct answer.
},
//63
{
  question: "Which is a correct statement regarding the guidelines for prescribing dental radiographs for a pregnant patient according to the American Dental Association (ADA) and the Food and Drug Administration (FDA)?",

  answers: ["Radiographs should never be taken on a patient who is pregnant.",
            "Radiographic procedures do not need to be altered because of pregnancy.",
            "Radiographs can be taken if the patient is at least 12 weeks pregnant.",
            "Radiographic procedures require that a maximum of four radiographs be taken."],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "According to the ADA and FDA, radiographic procedures do not need to be altered because of pregnancy. It is incorrect to state that radiographs should never be taken on a patient who is pregnant, that they can be taken only if the pregnant patient is at least 12 weeks pregnant, or require that a maximum of four radiographs be taken." // Fill this in with the explanation for the correct answer.
},
//64
{
  question: "Which alters the voltage of incoming electrical current?",

  answers: ["x-ray tube",
            "transformer",
            "tubehead seal",
            "lead collimator"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The transformer alters the voltage of incoming electrical current. The x-ray tube is the generating system where x-rays are produced. The tubehead seal keeps the oil in the tubehead and acts as a filter to the x-ray beam. The lead collimator is a metal disk that limits the size of the x-ray beam." // Fill this in with the explanation for the correct answer.
},
//65
{
  question: "Which is the generating system where x-rays are produced?",

  answers: ["x-ray tube",
            "transformer",
            "tubehead seal",
            "lead collimator"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The x-ray tube is the generating system where x-rays are produced. The transformer alters the voltage of incoming electrical current. The tubehead seal keeps the oil in the tubehead and acts as a filter to the x-ray beam. The lead collimator is a metal disk that limits the size of the x-ray beam." // Fill this in with the explanation for the correct answer.
},

//66
{
  question: "Which is located in the PID and removes from the beam the x-rays with a longer, nonpenetrating wavelength?",

  answers: ["x-ray tube",
            "transformer",
            "lead collimator",
            "aluminum filter"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The aluminum filter is located in the PID and removes from the beam the x-rays with a longer, nonpenetrating wavelength. The x-ray tube is the generating system where x-rays are produced. The transformer alters the voltage of incoming electrical current. The lead collimator is a metal disk that limits the size of the x-ray beam." // Fill this in with the explanation for the correct answer.
},
//67
{
  question: "Which of the following provides for the development of performance standards for the regulation of radiation emission from an x-ray machine?",

  answers: ["National Committee on Radiation Protection and Measurements",
            "Consumer-Patient Radiation Health and Safety Act",
            "Radiation Control and Safety Act",
            "American Dental Association (ADA) Council on Scientific Affairs and the U.S. Department of Health and Human Services, Public Health Service, Food and Drug Administration (FDA)"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The Radiation Control and Safety Act standardized use of x-ray equipment and provides for the development of performance standards for the regulation of radiation emission from an x-ray machine. The National Committee on Radiation Protection (NCRP) establishes recommendations and measurements as to acceptable levels of exposure to ionizing radiation. Nationally Commissioned Radiation Plan, The Consumer-Patient Radiation Health and Safety Act, regulates education and certification of x-ray equipment operators. The American Dental Association (ADA) Council on Scientific Affairs and the U.S. Department of Health and Human Services, Public Health Service, and Food and Drug Administration (FDA) adopted recommendations for prescribing dental radiographs." // Fill this in with the explanation for the correct answer.
},
//68
{
  question: "The hotter the filament becomes, the more __________ are produced.",

  answers: ["atoms",
            "protons",
            "neutrons",
            "electrons"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The hotter the filament becomes, the more electrons are produced in the process known as thermionic emission. Ionization is the gain or loss of an electron; the rest of the atom, including the protons and neutrons, stay in place." // Fill this in with the explanation for the correct answer.
},
//69
{
  question: "In the production of x-rays, what percentage is lost to heat?",

  answers: ["1%",
            "99%",
            "70%",
            "30%"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "In the production of x-rays, 99% of the energy used is lost to heat, and x-rays come from the remaining 1% or less of the total energy expended. Bremsstrahlung radiation accounts for 70% of the x-rays produced. Thirty percent of the x-rays are absorbed by matter which produces the radiopaque areas of a dental image." // Fill this in with the explanation for the correct answer.
},
//70
{
  question: "Milliamperage controls heating of the__________",

  answers: ["anode",
            "cathode",
            "metal housing",
            "aluminum filter"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Milliamperage controls heating of the cathode. The anode is the positive pole of the x-ray tube. The metal housing is the enclosure that encases the parts of the tubehead. The aluminum filter filters out the nonpenetrating, longer-wavelength x-rays." // Fill this in with the explanation for the correct answer.
},

//71
{
  question: "The master switch does which of the following?",

  answers: ["sends the electrons to the anode.",
            "controls the force.",
            "controls the number of electrons.",
            "heats the tungsten filament."],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Turning the machine on heats the tungsten filament, which causes the release of electrons and formation of the electron cloud. Depressing the exposure control button sends the electrons to the anode. The force of the electrons is controlled by the kV, and the number of electrons is controlled by the mA. Control panel settings control the kV and mA." // Fill this in with the explanation for the correct answer.
},
//72
{
  question: "The purpose of the step-down transformer is to:",

  answers: ["increase the voltage from 110–220 volts to 60,000–100,000 volts",
            "decrease the voltage from 110–220 volts to 3–5 volts",
            "cause enough heat to create the electron cloud",
            "propels electrons to create x-rays"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The step-down transformer decreases the voltage entering the machine from 110–220 volts to 3–5 volts in order for the tungsten filament to warm enough to emit electrons for the electron cloud. The step-up transformer increases the voltage entering the machine from 110–220 volts to 60,000–100,000 volts to provide the kV to send the electron cloud from the cathode to the anode at a speed that would generate x-rays. The filament circuit uses the 3–5 volts to create enough heat to generate the electron cloud. The high voltage circuit propels the electrons to create x-rays." // Fill this in with the explanation for the correct answer.
},
//73
{
  question: "When using the bisecting technique, the angulation of the central ray is __________ degrees to the imaginary bisector.",

  answers: ["20",
            "40",
            "70",
            "90"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "When using the bisecting technique, the angulation of the central ray is 90 degrees to the imaginary bisector, creating a perpendicular angle. Twenty, 40, or 70 degrees do not create the perpendicular angle required for the bisecting angle technique." // Fill this in with the explanation for the correct answer.
},
//74
{
  question: "Which is the purpose of the lead foil in the film packets?",

  answers: ["to stop the backscatter radiation",
            "to add cushioning to the film packet",
            "to create a herringbone effect on a developed film",
            "to determine if the film packet is placed backward"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The purpose of the lead foil in the film packets is to stop the backscatter radiation. The purpose is not to add cushioning to the film packet, determine if the film packet is placed backward, or create a herringbone effect on a processed film." // Fill this in with the explanation for the correct answer.
},
//75
{
  question: "You have just completed taking the patient’s dental images and have developed them. You notice a problem with this image. What is the error, and how do you correct it?",
  image: "images/rhs75.jpg",
  answers: ["collimator cut off; correctly align film and collimator",
            "improper film placement; cover the area intended for examination",
            "overlapped films; allow sufficient time for film to move through processor before adding second film",
            "film reversal; place correct side of film facing teeth"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The error is film reversal, the wrong side of the film is facing the teeth; to correct this, the white side or front side of the film packet needs to be facing the teeth and PID. An image with collimator cut-off will have black straight edges, the shape of the collimator on one or more sides of the image; to correct this, correctly align receptor and collimator; with improper film placement, the correct teeth will not be visible in the image; to correct this, the receptor will need to be placed to cover the area intended for examination; films that are overlapped while processing will appear with lighter or darker areas where the two films overlapped; to prevent this, allow sufficient time for film to move through the processor or make sure they are not in contact on the film rack when manually processed." // Fill this in with the explanation for the correct answer.
},

//76
{
  question: "Which describes the use of a filter in a dental x-ray tubehead?",

  answers: ["removes low-energy x-rays",
            "removes high-energy x-rays",
            "reduces the size and shape of the beam",
            "stops the radiation from reaching the thyroid gland"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The use of a filter in a dental x-ray tubehead removes the longer, low-energy x-rays. The shorter, high-energy x-rays create the primary beam, a collimator reduces the size and shape of the beam, and a lead apron prevents the radiation from reaching the thyroid gland." // Fill this in with the explanation for the correct answer.
},
//77
{
  question: "Which type of illumination is allowed in the darkroom while a film packet is being opened?",

  answers: ["safelight",
            "fluorescent light",
            "incandescent light",
            "no light is allowed in the darkroom"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "A safelight is the only illumination allowed in the darkroom, while a film is being opened. A fluorescent light and incandescent light would be too bright for the darkroom. Without light, it would be too difficult to see to process films in a darkroom." // Fill this in with the explanation for the correct answer.
},
//78
{
  question: "Which cells of the body are least susceptible to x-rays?",

  answers: ["bone",
            "oral mucosa",
            "muscle",
            "reproductive cells"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Muscle tissue is the least susceptible to x-rays. Bone has fairly low susceptibility but is more susceptible than muscle tissue to x-rays. Oral mucosa has fairly high susceptibility. Reproductive cells are the most susceptible to x-rays." // Fill this in with the explanation for the correct answer.
},
//79
{
  question: "Which does not require a barrier before radiographic procedures?",

  answers: ["PID",
            "treatment chair",
            "exposure button",
            "image receptor holding device"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "An image receptor holding device does not require a barrier before radiographic procedures because it is sterilized after use. A PID, dental treatment chair, and exposure button are noncritical items that require a barrier." // Fill this in with the explanation for the correct answer.
},
//80
{
  question: "Transporting uncovered, processed phosphor storage plate (PSP) films should be done by placing them in __________",

  answers: ["a black box",
            "an envelope",
            "a plastic cup",
            "clean dry hands"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Transporting uncovered, processed phosphor storage plates (PSP) should be done by placing them in a black box to keep the plates from being exposed to light that can erase the image. An envelope, plastic cup, and clean dry hands do not give adequate protection against light exposure." // Fill this in with the explanation for the correct answer.
},

//81
{
  question: "Which is not an example of PPE (personal protective equipment)?",

  answers: ["mask",
            "gloves",
            "thyroid collar",
            "protective eyewear"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "A thyroid collar is an item worn by the patient during exposure of x-rays and is not part of PPE. A mask, gloves, and protective eyewear are worn by the person exposing to x-rays and are considered PPE." // Fill this in with the explanation for the correct answer.
},
//82
{
  question: "Which of the following is classified as a semicritical object?",

  answers: ["lead apron",
            "treatment chair",
            "image receptor holder",
            "tubehead support arm"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "An image receptor holder is classified as a semicritical object. Semicritical items are those that contact but do not penetrate mucous membrane. A lead apron, dental treatment chair, and protective eyewear are noncritical items." // Fill this in with the explanation for the correct answer.
},
//83
{
  question: "Which items of PPE (personal protective equipment) should be worn during exposure of intraoral dental radiographs?",

  answers: ["treatment gloves",
            "gown, treatment gloves",
            "gown, treatment gloves, protective eyewear",
            "gown, treatment gloves, mask, protective eyewear"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "According to the CDC, treatment gloves must be worn during exposure of intraoral dental radiographs. Other personal protective equipment (PPE) (e.g., protective eyewear, mask, gown) are worn as appropriate if spattering of blood or other body fluids is likely." // Fill this in with the explanation for the correct answer.
},
//84
{
  question: "Which should be used when opening contaminated dental film packets?",

  answers: ["over gloves",
            "utility gloves",
            "clean, dry hands",
            "treatment gloves"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Clean treatment gloves should be used when opening contaminated dental film packets. Utility gloves are worn to disinfect the treatment room. Over gloves are placed over treatment gloves. Clean dry hands would not be used to open contaminated dental film packets." // Fill this in with the explanation for the correct answer.
},
//85
{
  question: "Which should be used when loading opened dental films into the processor?",

  answers: ["over gloves",
            "utility gloves",
            "clean dry hands",
            "treatment gloves"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Clean, dry hands should be used when loading opened dental films into the processor. Over gloves are placed over treatment gloves if needed. Utility gloves are worn to clean and disinfect the treatment room. Treatment gloves should be used when opening contaminated dental film packets." // Fill this in with the explanation for the correct answer.
},

//86
{
  question: "Which infection control method is required for intraoral digital sensors?",

  answers: ["dry heat autoclave",
            "ultrasonic and air dry",
            "wash with soap and water",
            "disinfect and cover with a barrier"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Intraoral digital sensors are disinfected with an intermediate-level disinfectant and covered with a barrier for proper infection control. A dry heat autoclave would destroy an intraoral digital sensor. Ultrasonic and air drying would destroy an intraoral digital sensor and would not disinfect the sensor. Washing with soap and water is not enough disinfection for an intraoral digital sensor, it may also damage it." // Fill this in with the explanation for the correct answer.
},
//87
{
  question: "Which is a critical item used in radiography?",

  answers: ["PSP plates",
            "digital sensors",
            "image receptor holders",
            "none of the above"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "There are no critical items used in radiography. PSP plates, digital sensors, and image receptor holders are all semicritical items." // Fill this in with the explanation for the correct answer.
},
//88
{
  question: "When preparing film without barrier envelops for processing, you should do which of the following?",

  answers: ["Hold tab portion of the black paper wrapping, carefully pull out film by only touching the film edges, and place in the processer.",
            "Hold tab portion of black paper wrapping and drop the film on the paper towel.",
            "Open black paper wrapping and pull out the film, and place it in the processer.",
            "Open black paper wrapping and pull out the film and drop on the paper towel."],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Film that is not protected with a barrier envelope is contaminated. You will be working with gloved hands that will be contaminated once you have touched the film packet. In order to prevent cross-contamination, you will need to hold the tab portion of the black paper wrapping, being careful not to touch the film, and drop the film onto the paper towel. After all film has been opened, you will remove your gloves and process the film. If you hold the tab portion of the black paper wrapping and carefully pull out the film by only touching the film edges; or open the black paper wrapping, pull out the film, and place it in the processer; or open the black paper wrapping, pull out the film, and drop it on the paper towel before placing it in the processor, you will contaminate the film with your contaminated gloves." // Fill this in with the explanation for the correct answer.
},
//89
{
  question: "Which are single-celled organisms that are classified by their shape?",

  answers: ["fungi",
            "viruses",
            "bacteria",
            "parasites"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Bacteria are single-celled organisms that are classified by their shape. Fungi are yeasts and molds that may be present in the air, soil, or water. Viruses are the smallest microorganisms, visible only through the use of a microscope. Parasites are a group of host-requiring organisms that include external and internal parasites." // Fill this in with the explanation for the correct answer.
},
//90
{
  question: "Which stage of disease progression occurs between the invasion of the body by a pathogenic organism and the appearance of the first symptoms of disease?",

  answers: ["acute",
            "prodromal",
            "incubation",
            "convalescent"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The incubation period is the interval of time required for development, especially the time between invasion of the body by a pathogenic organism and appearance of the first symptoms of disease. The acute stage occurs at the height of the illness. During the prodromal stage, the person is visibly sick and has symptoms. The convalescent phase, also known as recovery, occurs when the infection and the symptoms regress." // Fill this in with the explanation for the correct answer.
},

//91
{
  question: "After the exposure of dental radiographs, the lead apron is removed with __________",

  answers: ["utility gloves",
            "surgical gloves",
            "clean dry hands",
            "treatment gloves"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Clean dry hands should be used when removing the lead apron after the exposure of dental radiographs. Utility gloves are worn during the disinfection of the room. Surgical gloves are not used in dental radiography procedures. Treatment gloves are worn during the exposure of dental radiographs." // Fill this in with the explanation for the correct answer.
},
//92
{
  question: "Which of the following should be used during the exposure of dental radiographs?",

  answers: ["utility gloves",
            "surgical gloves",
            "clean dry hands",
            "treatment gloves"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Treatment gloves are worn during the exposure of dental radiographs. Utility gloves are worn during the disinfection of the room. Surgical gloves are not used in dental radiography procedures. Clean dry hands should be used when removing the lead apron after the exposure of dental radiographs." // Fill this in with the explanation for the correct answer.
},
//93
{
  question: "All of the following are tuberculocidal except:",

  answers: ["sodium hypochlorite",
            "ethanol",
            "iodophor",
            "quaternary ammonia without alcohol"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Quaternary ammonia without alcohol is not tuberculocidal. If alcohol is added, it is tuberculocidal. Sodium hypochlorite, ethanol, and iodophor are tuberculocidal." // Fill this in with the explanation for the correct answer.
},
//94
{
  question: "It is important that you follow standard precautions because you can contract an infectious disease from which of the following surfaces:",

  answers: ["exposed receptors",
            "beam alignment device",
            "PID",
            "all of the above"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "You can catch an infectious disease from exposed receptors, beam alignment devices, and PID. You can receive an exposure any time you touch a contaminated surface and you are not protected." // Fill this in with the explanation for the correct answer.
},
//95
{
  question: "Any contaminated film that is processed emerges from the processor __________",

  answers: ["sterilized",
            "disinfected",
            "contaminated",
            "decontaminated"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Any contaminated film that is processed emerges from the processor contaminated. Contaminated film will not exit the processor sterilized, disinfected, or decontaminated because processing chemicals are not designed to be disinfectants." // Fill this in with the explanation for the correct answer.
},

//96
{
  question: "Immersing a contaminated exposed film packet in a disinfecting solution may/will __________",

  answers: ["lighten the image",
            "darken the image",
            "damage the image",
            "have no effect on the image"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Immersing a contaminated film packet in a disinfecting solution may damage the image. Only the areas contacted by the solution would be damaged. Lightening or darkening of the entire image would not occur." // Fill this in with the explanation for the correct answer.
},
//97
{
  question: "Which requires a plastic barrier to maintain infection control during the radiographic procedure?",

  answers: ["lead apron",
            "countertop",
            "exposure button",
            "image receptor holding device"],
  correct: 2, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The exposure button is a noncritical item that requires a barrier device. The lead apron is wiped with a disinfectant between patients, and the countertop is either covered or disinfected. An image receptor holding device does not require placement of a barrier before radiographic procedures because it is sterilized after use." // Fill this in with the explanation for the correct answer.
},
//98
{
  question: "Which can be heat sterilized after use?",

  answers: ["PSP plates",
            "thyroid collar",
            "digital sensors",
            "image receptor holder"],
  correct: 3, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The image receptor holder can be heat sterilized after use. Heat sterilization will damage PSP plates and digital sensors. They are disinfected. PSP plates are covered with a barrier envelope, and sensors are with an FDA cleared barrier. The thyroid collar is a noncritical item and only requires disinfection." // Fill this in with the explanation for the correct answer.
},
//99
{
  question: "Which of the following would be used to disinfect the patient treatment area after the radiographic procedure?",

  answers: ["utility gloves",
            "surgical gloves",
            "clean, dry hands",
            "treatment gloves"],
  correct: 0, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "Utility gloves are worn during the disinfection of the treatment room. Surgical gloves are not worn during dental radiography procedures. Hands should be clean and dry when removing the lead apron after the exposure of dental radiographs. Treatment gloves are worn while exposing dental radiographs." // Fill this in with the explanation for the correct answer.
},
//100
{
  question: "Which does not require a barrier during the exposure of dental intraoral radiographs?",

  answers: ["PID",
            "film badge",
            "treatment chair",
            "exposure button"],
  correct: 1, // assuming the right answer here, adjust it if not.
  category: "RHS",
  rationale: "The film badge worn by a person exposing dental x-rays does not require a barrier; it is not contaminated during the imaging procedure. The PID, treatment chair, and exposure button become contaminated during the procedure and require a barrier." // Fill this in with the explanation for the correct answer.
},

// rhs 3


//100
{
  question: "Films removed from the film packet that have not been in a barrier envelope are processed in a daylight loader with __________",
  answers: ["gloved hands",
            "ungloved hands",
            "hands with powder-free gloves",
            "hands with utility gloves"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//101
{
  question: "When image receptors are dispensed from the supply area, they should be transported to the radiology room __________.",
  answers: ["on the bracket tray",
            "in the operator's hand",
            "in a paper cup",
            "in the patient chart"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//102
{
  question: "Which level of disinfectant does the CDC recommend for disinfection of a sensor?",
  answers: ["high-level disinfectant",
            "intermediate-level disinfectant",
            "low-level disinfectant",
            "no recommendations are made regarding the disinfectant level"],
  correct: 1,
  category: "RHS",
  rationale: "#"
},
//103
{
  question: "Which best describes the function of a plastic barrier cover for a digital radiography sensor?",
  answers: ["The barrier allows the sensor to be reused easily without disinfection.",
            "The barrier cover protects the sensor from chemical erosion.",
            "The barrier keeps the positioning device in line with the top of the sensor.",
            "The barrier protects the sensor from saliva contamination."],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//104
{
  question: "Beam alignment devices must be __________.",
  answers: ["sterilized",
            "disinfected",
            "decontaminated",
            "wiped with alcohol between uses"],
  correct: 1,
  category: "RHS",
  rationale: "#"
},

//105
{
  question: "How should the receptor be placed for exposing a mandibular occlusal image?",
  answers: ["The image receptor is placed parallel to the long axis of the teeth with the white side facing the lingual surface of the teeth.",
            "The image receptor is placed between the occlusal surfaces of the maxillary and mandibular teeth with the white side down, facing the mandibular teeth.",
            "The image receptor is placed parallel to the long axis of the teeth with the colored side facing the lingual surface of the teeth.",
            "The image receptor is placed between the occlusal surfaces of the maxillary and mandibular teeth with the white side facing the maxillary teeth."],
  correct: 1,
  category: "RHS",
  rationale: "#"
},
//106
{
  question: "Which of the following is not true related to automatic processors?",
  answers: ["Rollers are removed at the end of each week; they are cleaned and soaked over the weekend.",
            "Processing solutions are checked each morning before radiographs are run through the processor.",
            "Machines are maintained based on a daily, weekly, and monthly cleaning schedule.",
            "Manufacturer’s instructions are followed related to solution usage."],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//107
{
  question: "You are using phosphor plates to take bitewings on a patient. Which of the following does not need to be completed before exposing the images?",
  answers: ["Expose a test image and process in scanner.",
            "Place phosphor side of receptor against black side of protective barrier sleeve.",
            "Check plates for damage prior to use.",
            "Check that machine settings are correct for phosphor plates."],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//108
{
  question: "Which statement regarding benefits to automatic processors compared to manual processing is not correct?",
  answers: ["Less time required for processing.",
            "Time and temperature are controlled.",
            "A daylight loader is required.",
            "There is no need for additional space."],
  correct: 2,
  category: "RHS",
  rationale: "#"
},

//109
{
  question: "A contact test should be performed regularly using which of the following?",
  answers: ["phosphor plate",
            "sensor",
            "screen film",
            "all of the above"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//110
{
  question: "A step wedge can be used with which of the following?",
  answers: ["film",
            "phosphor plate",
            "sensor",
            "all of the above"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//111
{
  question: "When the bisecting technique is used, the imaginary angle that is bisected is formed between the long axis of the tooth and the __________.",
  answers: ["long axis of the PID",
            "bite block",
            "plane of the receptor",
            "horizontal axis of the tubehead"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//112
{
  question: "What is the most common reason to see a completely clear receptor? The receptor was:",
  answers: ["exposed to light",
            "not exposed to x-radiation",
            "exposed backward in the mouth",
            "left in the developer too long"],
  correct: 1,
  category: "RHS",
  rationale: "#"
},
//113
{
  question: "Which of the following pieces of equipment requires heat sterilization before use?",
  answers: ["film",
            "digital sensor",
            "x-ray tubehead",
            "beam alignment devices"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//114
{
  question: "Which component of the x-ray film packet should be recycled?",
  answers: ["developed film",
            "lead foil",
            "black paper",
            "outer package wrapping"],
  correct: 1,
  category: "RHS",
  rationale: "#"
},

//115
{
  question: "Commercially available barrier envelopes __________.",
  answers: ["protect the film from damage",
            "minimize contamination after exposure of the film",
            "are made of a material that blocks the passage of photons",
            "are made of a material that blocks the passage of electrons"],
  correct: 1,
  category: "RHS",
  rationale: "#"
},
//116
{
  question: "After each use and before processing, each phosphor plate or dental film must be __________.",
  answers: ["disinfected",
            "dried with a paper towel",
            "placed in a barrier",
            "wiped with alcohol"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//117
{
  question: "You are reorganizing the office storage areas. Where should you store the boxes of x-ray film?",
  answers: ["on a shelf in the cabinet",
            "in the refrigerator",
            "under the sink with the chemicals",
            "on a shelf in the x-ray room"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//118
{
  question: "You are preparing to take dental images on a patient. You discussed with your patient what you will be taking and why the images are needed for treatment. The patient has refused the dental images. You explain to the dentist about the patient’s refusal. What should the dentist do?",
  answers: ["Have the patient sign a waiver and begin treatment.",
            "Change the treatment plan to exclude the images",
            "Refuse to treat the patient if the images are not taken.",
            "Force the patient to have dental images taken."],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//119
{
  question: "What is occurring inside the x-ray tubehead when you increase the kilovoltage setting on the exposure control panel?",
  answers: ["The speed of the electrons decreases from the cathode to the anode.",
            "The penetrating power of the x-ray beam increases.",
            "The number of x-rays produced is increased.",
            "The speed of the photons from anode to cathode is increased."],
  correct: 1,
  category: "RHS",
  rationale: "#"
},
//120
{
  question: "Your patient is a large man, on the obese side. What adjustments would you make, if any, to the control panel when exposing dental images?",
  answers: ["Increase the exposure time; leave the kV and the mA the same.",
            "Decrease the exposure time; leave the kV and the mA the same.",
            "Increase the exposure time, kV, and mA.",
            "You do not need to make any adjustments."],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//121
{
  question: "If you want to provide the lowest amount of exposure possible for your patient, which of the following settings should you use?",
  answers: ["70 kV, 6 mA, 0.40 impulses",
            "68 kV, 7 mA, 0.50 impulses",
            "66 kV, 7 mA, 0.60 impulses",
            "65 kV, 8 mA, 0.60 impulses"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//122
{
  question: "You noticed that the patient moved just as you pressed the exposure button. What effect will that have on the dental image?",
  answers: ["distortion",
            "alteration in image sharpness",
            "elongation",
            "image magnification"],
  correct: 1,
  category: "RHS",
  rationale: "#"
},
//123
{
  question: "If you decreased exposure time, and left the other exposure factors the same, what impact would this have on your dental image?",
  answers: ["The image would be lighter because the density would increase.",
            "The image would be darker because the density would increase.",
            "The image would be lighter because the density would decrease.",
            "The image would be darker because the density would decrease."],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//124
{
  question: "Which is not considered a critical organ in dental imaging?",
  answers: ["skin",
            "lens of the eye",
            "pituitary gland",
            "bone marrow"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},

//125
{
  question: "If you decreased the mA, and left the other exposure factors the same, what impact would this have on your dental image?",
  answers: ["The image would be lighter because the density would increase.",
            "The image would be darker because the density would increase.",
            "The image would be lighter because the density would decrease.",
            "The image would be darker because the density would decrease."],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//126
{
  question: "Which applies to producing dental images on pregnant patients?",
  answers: ["Dental images should be taken only during the third trimester.",
            "Dental images should never be taken on a pregnant patient.",
            "Guidelines are designed to protect all patients; no alterations are required.",
            "Dental images should be taken only during the first trimester."],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//127
{
  question: "The operator should clean and disinfect any uncovered areas while wearing __________.",
  answers: ["utility gloves",
            "vinyl gloves",
            "latex gloves",
            "nitrile gloves"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//128
{
  question: "Which is true regarding exposure of radiation on the body?",
  answers: ["The direct theory of radiation suggests that toxins form in the body and cause damage.",
            "The direct theory of radiation suggests that radiation damage occurs because of the high water content in the body.",
            "The indirect theory of radiation suggests that ionizing radiation creates the formation of free radicals.",
            "The indirect theory of radiation injury suggests that damage occurs as a result of ionizing radiation hitting critical areas."],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//129
{
  question: "If you decreased the distance, and left the exposure factors the same, what impact would this have on your dental image?",
  answers: ["The image would be lighter because the density would increase.",
            "The image would be darker because the density would increase.",
            "The image would be lighter because the density would decrease.",
            "The image would be darker because the density would decrease."],
  correct: 1,
  category: "RHS",
  rationale: "#"
},

//130
{
  question: "Which of the following is recommended by the CDC?",
  answers: ["immersion of film packets in disinfecting solutions",
            "disinfecting sensors with at least a low-level EPA-registered disinfectant",
            "cold-sterilizing noncritical items",
            "gloves worn by the operator"],
  correct: 1,
  category: "RHS",
  rationale: "#"
},
//131
{
  question: "You have a new patient. She is 7 years old, and she has her first molars. Which dental images should you take?",
  answers: ["bitewings",
            "panoramic",
            "occlusal",
            "bitewings and panoramic"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//132
{
  question: "Tests for tube drift should be performed at which frequency?",
  answers: ["annually",
            "twice annually",
            "every 4 months",
            "It depends on the volume of dental images exposed"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//133
{
  question: "A fresh film test should be exposed __________.",
  answers: ["whenever developer and fixer solutions are changed",
            "whenever developer and fixer solutions are replenished",
            "when a new box of film is opened",
            "once a month"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//134
{
  question: "How often should film cassettes be examined?",
  answers: ["annually",
            "twice annually",
            "monthly",
            "it depends on the volume of dental images exposed"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},

//135
{
  question: "The light leak test should be performed at which frequency?",
  answers: ["annually",
            "twice annually",
            "monthly",
            "it depends on the volume of dental images exposed"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//136
{
  question: "Which statement is not correct concerning the exposure sequence for periapical images?",
  answers: ["Anterior images are always exposed before posterior images.",
            "Either anterior or posterior images may be exposed first.",
            "In posterior quadrants, the premolar image is always exposed before the molar image.",
            "When exposing anterior images, work from the patient's right to left in the upper arch, and then work from the left to right in the lower arch."],
  correct: 1,
  category: "RHS",
  rationale: "#"
},
//137
{
  question: "What is the second compartment that the films will enter in an automatic processor?",
  answers: ["fixer",
            "water",
            "developer",
            "drying fan"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//138
{
  question: "Which is the proper technique to expose a bitewing image on a patient with mandibular tori?",
  answers: ["Place the receptor on the tori.",
            "Place the receptor on the tongue.",
            "Place the receptor between the tori and the tongue.",
            "Intraoral placement is not recommended on patients who have mandibular tori."],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//139
{
  question: "The thermometer should be placed in which solution of the manual processing tanks?",
  answers: ["fixer",
            "water",
            "developer",
            "water or developer"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//140
{
  question: "Which receptor would provide the most protection against radiation exposure for the patient?",
  answers: ["phosphor plate",
            "D-speed film",
            "F-speed film",
            "digital sensor"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//141
{
  question: "Which of the following statements is true regarding manual film mounting?",
  answers: ["The raised dot side of the film faces the viewer in a labial mounting method.",
            "The depressed dot side of the film faces the viewer in the lingual mounting method.",
            "The raised dot side of the film faces the viewer in a lingual mounting method.",
            "The depressed dot side of the film faces the viewer in the labial mounting method."],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//142
{
  question: "In which two lengths are PIDs typically available?",
  answers: ["6 and 12 inches",
            "12 and 24 inches",
            "8 and 16 inches",
            "12 and 16 inches"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//143
{
  question: "Which method is used to stabilize the receptor during exposure of an occlusal image?",
  answers: ["stable bite block",
            "hemostat",
            "patient gently biting on the receptor",
            "bitewing tab"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//144
{
  question: "If the length of the PID is changed from 8 to 12 inches, how does this affect the intensity of the x-ray beam?",
  answers: ["The resultant beam will be one-half as intense",
            "The resultant beam will be one-quarter as intense",
            "The resultant beam will be two times as intense",
            "The resultant beam will be four times as intense"],
  correct: 1,
  category: "RHS",
  rationale: "#"
},
//145
{
  question: "Which of the following decreases a patient's radiation exposure?",
  answers: ["use of an 8-inch PID rather than a 16-inch PID",
            "use of a circular collimator in place of a rectangular collimator",
            "use of the bisecting technique instead of the paralleling technique",
            "use of a higher kV setting to achieve the same density"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//146
{
  question: "Commercially available barrier envelopes are used to:",
  answers: ["protect the film from saliva",
            "provide comfort for the patient",
            "minimize contamination in the operatory",
            "minimize contamination in the darkroom"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//147
{
  question: "What is the best way to limit a patient’s radiation exposure?",
  answers: ["Prescribe only what is necessary.",
            "Use the fastest film speed available.",
            "Complete radiographs with no errors.",
            "Ensure the patient wears a lead apron."],
  correct: 0,
  category: "RHS",
  rationale: "#"
},

//148
{
  question: "Your 5-year-old patient has been coming regularly to the dental office for the last 2 years. The last set of dental images was taken 6 months ago. He has occlusal decay on #A, #B, #I, and #J, and his teeth are in tight contact. The last time he was in, he had restorations placed on teeth #K and #L. When should you next take dental images?",
  answers: ["today’s appointment",
            "next appointment, because insurance will cover dental images only once a year",
            "next appointment, because the guidelines recommend taking them once a year",
            "in 6–18 months, because the guidelines recommend taking them at 1- to 2-year intervals"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//149
{
  question: "Your 6-year-old patient has clinical caries and closed proximal contacts. Which of the following dental images should you take?",
  answers: ["posterior bitewings",
            "seven vertical bitewings",
            "full-mouth series",
            "panoramic"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//150
{
  question: "Which of the following position indicating devices exposes a patient to more radiation?",
  answers: ["conical",
            "rectangular 8 inch",
            "circular 8 inch",
            "circular 16 inch"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//151
{
  question: "Which is not an example of PPE (personal protective equipment)?",
  answers: ["mask",
            "gloves",
            "thyroid collar",
            "protective eyewear"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},


//152
{
  question: "Your adult recall patient has no clinical caries and is not at increased risk for caries. He had bitewing images taken 1 year ago. When should you take bitewing images of your patient?",
  answers: ["at this appointment",
            "at his appointment in 6 months",
            "at his appointment in 1 year",
            "24–36 months from his last bitewing images"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//153
{
  question: "What is the purpose of a collimator?",
  answers: ["filter out long wavelengths",
            "confine the beam",
            "restrict the size and shape of the beam",
            "filter out short wavelengths"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//154
{
  question: "What is the purpose of the receptor-holding device?",
  answers: ["stabilize receptor position in the mouth and reduce the chance for movement",
            "aid with paralleling technique but is not required",
            "easier for the patient to bite",
            "increased patient comfort"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//155
{
  question: "Which device/method provides patients the best protection against radiation exposure?",
  answers: ["long PID",
            "beam alignment device",
            "proper operator technique",
            "sensor instead of a phosphor plate"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//156
{
  question: "Which type of contrast would best help detect dental caries in a patient?",
  answers: ["low contrast with few shades of gray",
            "low contrast with many shades of gray",
            "high contrast with few shades of gray",
            "high contrast with many shades of gray"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//157
{
  question: "You have placed the sensor in your patient's mouth, you have positioned the PID, and you are ready to press the control button. What will exit the PID?",
  answers: ["Compton scatter",
            "coherent scatter",
            "secondary radiation",
            "primary beam"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//158
{
  question: "An important way for the operator to avoid primary beam exposure is to:",
  answers: ["stand 4 feet behind the patient",
            "position himself or herself at a 90- to 135-degree angle to the primary beam",
            "position himself or herself at a 30- to 45-degree angle from the primary beam",
            "wear protective covering"],
  correct: 1,
  category: "RHS",
  rationale: "#"
},
//159
{
  question: "You notice that the roots of your maxillary anterior images are consistently too long and seem out of proportion. What is the error, and how should you correct it?",
  answers: ["Foreshortening; the receptor needs to be parallel to the teeth, and the x-ray beam needs to be perpendicular to both.",
            "Magnification; the receptor needs to be parallel to the teeth, and the x-ray beam needs to be perpendicular to both.",
            "Elongation; the receptor needs to be parallel to the teeth, and the x-ray beam needs to be perpendicular to both.",
            "Magnification; the receptor needs to be closer to the tooth, or the target–image receptor distance needs to be increased."],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//160
{
  question: "Your last patient was an average-size man. Your next patient is a slender 12-year-old girl. What adjustment would you make, if any, to the control panel when exposing dental images?",
  answers: ["Increase the exposure time; leave the kV and the mA the same.",
            "Decrease the exposure time; leave the kV and the mA the same.",
            "Decrease the exposure time, kV, and mA.",
            "You do not need to make any adjustments."],
  correct: 1,
  category: "RHS",
  rationale: "#"
},
//161
{
  question: "Which of the following components of the tubehead protects the patient by removing long-wavelength, low-energy x-rays?",
  answers: ["tungsten target",
            "filter",
            "lead-lined PID",
            "collimator"],
  correct: 1,
  category: "RHS",
  rationale: "#"
},

//162
{
  question: "How often should processing solutions be changed?",
  answers: ["biweekly",
            "every 3–4 weeks",
            "every 5–7 weeks",
            "when patient images appear too light"],
  correct: 1,
  category: "RHS",
  rationale: "#"
},
//163
{
  question: "Correct solution maintenance for manual film processing includes__________.",
  answers: ["diluting fixer to keep the level at optimal levels",
            "never adding new solutions to the developer or fixer until they are ready to be completely changed",
            "changing the developer solution if the image appears yellow",
            "changing both developer and fixer at the same time"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//164
{
  question: "Which statement is true concerning the anode?",
  answers: ["It carries a negative charge.",
            "Electrons are generated at the anode.",
            "It converts the bombarding electrons into x-ray photons.",
            "It consists of a tungsten filament in a focusing cup."],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//165
{
  question: "The quality administration procedures within the quality assurance plan should include which of the following basic elements?",
  answers: ["description of the plan with assignment of duties",
            "collimation-beam alignment test results",
            "kilovoltage test",
            "tubehead stability test"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//166
{
  question: "Adjusting the chair and headrest, placing the lead apron on a patient, and removing metal objects from the head and neck area of a patient should be completed by the dental professional __________?",
  answers: ["before washing hands, prior to gloving",
            "after gloving",
            "after gloving and over gloving with vinyl gloves",
            "while wearing utility gloves"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//167
{
  question: "The optimal storage temperature for dental film is __________:",
  answers: ["30°–45°F",
            "50°–70°F",
            "70°–80°F",
            "80°–85°F"],
  correct: 1,
  category: "RHS",
  rationale: "#"
},
//168
{
  question: "You are assisting the dental hygienist. She is performing the oral assessment and would like to compare dental images to the probing depths. Which type of contrast would provide the best image for this purpose?",
  answers: ["high contrast; few shades of gray",
            "high contrast; many shades of gray",
            "low contrast; few shades of gray",
            "low contrast; many shades of gray"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//169
{
  question: "Which statement is correct concerning the use of gloves during a dental imaging procedure?",
  answers: ["Gloves must be washed prior to use to remove powder residue.",
            "Gloves must be sterile for all procedures.",
            "New gloves must be worn for each patient.",
            "Gloves must be worn only when contact with saliva is anticipated."],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//170
{
  question: "Which of the following persons should perform the calibration of dental x-ray machines?",
  answers: ["dentist",
            "dental hygienist",
            "dental assistant",
            "qualified technician"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//171
{
  question: "A lead apron is used when performing which of the following?",
  answers: ["panoramic image",
            "full-mouth series",
            "periapical image",
            "all of the above"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//172
{
  question: "You are performing a quality assurance test on your stored film. The unexposed, properly stored, fresh film will appear __________ when processed.",
  answers: ["clear with a slight blue tint",
            "cloudy with a blue tint",
            "fogged",
            "totally black"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//173
{
  question: "Unexposed film that has not been stored properly or is out of date will appear ________ when processed.",
  answers: ["clear with a slight blue tint",
            "cloudy with a blue tint",
            "fogged",
            "totally black"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//174
{
  question: "When functioning properly, a view box will emit a __________.",
  answers: ["uniform, subdued light",
            "brilliant light from the center portion of the viewbox",
            "soft flickering light",
            "uniform bright light"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//175
{
  question: "Who is responsible for the diagnostic quality of dental images?",
  answers: ["the dental professional exposing the receptors",
            "the dentist",
            "the dental assistant",
            "the hazard communication officer"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},


//176
{
  question: "In a dental practice in which many HIV-positive patients are treated, the film rollers in the automatic processor should be __________",
  answers: ["scrubbed with an abrasive cleaner every day",
            "autoclaved every day",
            "disinfected after every use",
            "treated in the usual accepted manner"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//177
{
  question: "Dental x-ray equipment is classified as __________.",
  answers: ["critical instruments",
            "semicritical instruments",
            "noncritical instruments",
            "semicritical and noncritical instruments"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//178
{
  question: "Which of the following steps should be followed when exposing a panoramic image?",
  answers: ["Place lead apron with thyroid collar on patient and secure it.",
            "Instruct patient to place posterior teeth in the deep groove on bite block and bite firmly.",
            "Radiodense objects may remain in place from the head and neck area for the duration of exposure",
            "Instruct patient to close lips on bite block, to swallow once, then place tongue against roof of mouth, and maintain that position during exposure"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//179
{
  question: "Which is a correct statement concerning disinfection procedures for the darkroom?",
  answers: ["Countertops and areas touched by gloved hands must be disinfected.",
            "Countertops do not need to be disinfected, because aerosolization does not occur during dental x-ray film processing.",
            "Countertops must be covered with a barrier before each clinical use.",
            "A high-level disinfectant is required to disinfect the area surrounding the processor."],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//180
{
  question: "EPA-registered chemical germicides labeled as hospital disinfectants are:",
  answers: ["classified as high-level disinfectants",
            "classified as intermediate-level disinfectants",
            "classified as low-level disinfectants",
            "not designated a disinfectant level"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//181
{
  question: "Why does digital imaging require less radiation than traditional film-based radiography?",
  answers: ["Sensor is more sensitive to x-radiation.",
            "Images are instantly viewed on the computer.",
            "Images may be enhanced with density and contrast controls.",
            "Computer software is designed to eliminate common placement errors."],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//182
{
  question: "Following an exposure, beam alignment devices are __________ using __________ hands.",
  answers: ["disinfected; ungloved",
            "disinfected; gloved",
            "prepared for sterilization; ungloved",
            "prepared for sterilization; gloved"],
  correct: 1,
  category: "RHS",
  rationale: "#"
},
//183
{
  question: "What is the function of intensifying screens used in extraoral radiography?",
  answers: ["increase sharpness of image",
            "decrease magnification of image",
            "help patient remain still during exposure.",
            "decrease patient’s exposure to radiation"],
  correct: 3,
  category: "RHS",
  rationale: "#"
},
//184
{
  question: "All of the following are examples of inherent filtration, except:",
  answers: ["aluminum filter",
            "leaded glass window",
            "insulating oil",
            "tubehead seal"],
  correct: 0,
  category: "RHS",
  rationale: "#"
},
//185
{
  question: "Which choice describes infection control protocol for an interrupted dental imaging procedure?",
  answers: ["removing gloves, and upon return, regloving with the same gloves",
            "donning overgloves, and upon return, removing the over gloves",
            "removing gloves, washing hands, and upon return, washing hands and regloving with new gloves",
            "removing gloves, washing hands, and upon return, washing hands and regloving with the same gloves"],
  correct: 2,
  category: "RHS",
  rationale: "#"
},
//186
{
  question: "Image receptors that have been removed from barrier envelopes are processed with __________.",
  answers: ["gloved hands",
            "ungloved hands",
            "powder-free gloves",
            "utility gloves"],
  correct: 0,
  category: "RHS",
  rationale: "#"
}












	
	































];
