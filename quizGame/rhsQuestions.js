let rhsQuestions = [
{
    question: "Concerning pregnant patients and radiation exposure, which statement is accurate?",
    answers: ["Dental imaging is delayed until the second trimester.",
              "ADA guidelines suggest delaying dental imaging during pregnancy.",
              "Lead aprons block radiation exposure to the fetus.",
              "Exposure time is shortened for pregnant patients."],
    correct: 2,
    category: "RHS",
    rationale: "Lead aprons effectively block radiation to the fetus during dental imaging. Imaging guidelines do not change for pregnant patients, and the ADA allows necessary imaging for all patients, including pregnant individuals."
  },

  {
    question: "What can be used to minimize the divergence of the x-ray beam?",
    answers: ["An 16-inch PID",
              "The paralleling technique",
              "The bisecting technique",
              "The short cone technique"],
    correct: 0,
    category: "RHS",
    rationale: "A 16-inch PID reduces the divergence of the x-ray beam. Shorter PIDs, like those in the bisecting technique, cause greater beam spread."
  },

  {
    question: "What is the maximum permissible dose (MPD) for workers exposed to radiation occupationally?",
    answers: ["0.005 Sv/year",
              "0.05 Sv/year",
              "0.5 Sv/year",
              "5.0 Sv/year"],
    correct: 1,
    category: "RHS",
    rationale: "0.05 Sv/year is the MPD for occupationally exposed workers. The other values are incorrect for occupational exposure limits."
  },

  {
    question: "Which amount is the ideal occupational dose to aim for?",
    answers: ["0 rem/year",
              "0.01 rem/year",
              "1 rem/year",
              "0.05 rem/month"],
    correct: 0,
    category: "RHS",
    rationale: "Zero radiation exposure is ideal for workers, though safety limits are set for permissible exposure levels."
  },

  {
    question: "What would be considered a suitable practice for a dental x-ray equipment operator?",
    answers: ["Only wearing a film badge at work",
              "Holding the film while entirely covered with a lead apron",
              "Standing 6 feet behind the patient",
              "Holding the tubehead to prevent drifting"],
    correct: 0,
    category: "RHS",
    rationale: "Film badges should be worn only at work. Operators should not hold film or tubeheads and must maintain proper positioning during x-rays."
  },

  {
    question: "What does a film badge monitor?",
    answers: ["Exposures to natural radiation",
              "Patient exposures",
              "Daily occupational radiation exposures of a radiographer",
              "Total office staff radiation exposures"],
    correct: 2,
    category: "RHS",
    rationale: "A film badge monitors the radiographer’s daily occupational radiation exposure, not natural or patient exposures."
  },
  
{
    question: "Which dental structure is the hardest to visualize on a dental image?",
    answers: ["Pulp",
              "Cementum",
              "Dentin",
              "Enamel"],
    correct: 1,
    category: "RHS",
    rationale: "Cementum is difficult to distinguish from dentin on a dental image. The pulp is radiolucent, and enamel is highly radiopaque."
  },

  {
    question: "Which of the following is a correct statement regarding safe operating procedures?",
    answers: ["Pregnant operators are not allowed to expose dental images.",
              "All states mandate that all dental staff members wear dosimeters.",
              "Dosimeters track operator exposure to x-rays.",
              "ALARA is applicable to patients but not operators."],
    correct: 2,
    category: "RHS",
    rationale: "Dosimeters monitor operator x-ray exposure. Pregnant operators can take images, and ALARA applies to both patients and staff."
  },

  {
    question: "With a new dental x-ray machine in the office, the position indicating device (PID) length is changing from 16 to 8 inches. How does this impact the x-ray beam's intensity and what adjustments are needed to maintain consistent image density?",
    answers: ["The resultant beam will be half as intense. You'll need to increase exposure time.",
              "The resultant beam will be one-quarter as intense. You'll need to increase exposure time.",
              "The resultant beam will be twice as intense. You'll need to decrease exposure time.",
              "The resultant beam will be four times as intense. You'll need to decrease exposure time."],
    correct: 3,
    category: "RHS",
    rationale: "Using the inverse square law, the shorter PID makes the beam four times as intense, so exposure time needs to be reduced."
  },

  {
    question: "Which type of position indicating device (PID) does not generate scatter radiation?",
    answers: ["Rectangular",
              "Round",
              "Conical",
              "Both Rectangular and Round"],
    correct: 0,
    category: "RHS",
    rationale: "Rectangular and cylindrical PIDs reduce scatter radiation, while conical PIDs generate scatter and are no longer made."
  },

  {
    question: "In a dental office that operates 4 days a week, you replace chemicals in two automatic processors every 4 weeks. When testing developer strength with a stepwedge, how many films should be taken each time the chemicals are altered?",
    answers: ["8",
              "16",
              "20",
              "32"],
    correct: 3,
    category: "RHS",
    rationale: "32 films are needed for daily testing over 4 weeks for 2 processors (16 films per processor)."
  },

  {
    question: "What is compared using a reference radiograph?",
    answers: ["Densities",
              "Film freshness",
              "Processing time",
              "Fixer solution freshness"],
    correct: 0,
    category: "RHS",
    rationale: "A reference radiograph is used to compare densities to check developer freshness."
  },

  {
    question: "What is the coin test used to check?",
    answers: ["Light leaks in the darkroom",
              "Proper functioning of the dental x-ray unit",
              "Proper safelighting",
              "Proper film density"],
    correct: 2,
    category: "RHS",
    rationale: "The coin test checks for proper safelighting in the darkroom."
  },

  {
    question: "What should extraoral intensifying screens be periodically inspected for?",
    answers: ["Fixer contamination",
              "Developer contamination",
              "Dirt and scratches",
              "Gelatin buildup"],
    correct: 2,
    category: "RHS",
    rationale: "Intensifying screens should be checked for dirt and scratches, which can affect image quality."
  },

  {
    question: "When there is a difference of more than two steps in densities on a stepwedge, what action should be taken?",
    answers: ["Replace the processing solutions.",
              "Stir the developer's contents and continue processing.",
              "Raise the tank's heat by 2 degrees.",
              "Increase kV."],
    correct: 0,
    category: "RHS",
    rationale: "Processing solutions should be replaced when the density difference exceeds two steps on a stepwedge."
  },
  
{
    question: "On average, how frequently should the processing solution be changed?",
    answers: ["Once a day",
              "Once a week",
              "Every 3-4 weeks",
              "Every 3-4 months"],
    correct: 2,
    category: "RHS",
    rationale: "Processing solution should be changed every 3-4 weeks. Daily replenishment is necessary, but full changes are not required more often unless heavily used."
  },
  {
    question: "According to the CDC, what should barriers be used to cover?",
    answers: ["Phosphor imaging plate",
              "Film",
              "Sensor",
              "Both sensor and phosphor imaging plate"],
    correct: 3,
    category: "RHS",
    rationale: "The CDC recommends covering both the sensor and phosphor imaging plate with barriers. The film is already protected by its cover."
  },

  {
    question: "If using a digital imaging system, an image was taken but doesn't appear on the screen and the program doesn't advance to the next image space, what could be the issue and how should it be addressed?",
    answers: ["X-ray machine is off; switch on the machine",
              "PID is not aligned with receptor; align PID with receptor",
              "Sensor is backward in the holder; correctly position receptor in film holder",
              "All of the above"],
    correct: 3,
    category: "RHS",
    rationale: "All of the above: X-ray machine off, PID misalignment, or a backward sensor can cause a clear image and prevent program advancement."
  },
  {
    question: "In a dental image, how is the median palatine suture depicted?",
    answers: ["Almond-shaped radiolucency between teeth #8 and #9",
              "Thin radiolucent vertical line between teeth #8 and #9",
              "Radiopaque vertical line above teeth #8 and #9",
              "Pair of radiopaque diagonal lines starting by the apices of the maxillary centrals and ending above the apices of the maxillary canines"],
    correct: 1,
    category: "RHS",
    rationale: "The median palatine suture appears as a thin radiolucent line between the maxillary central incisors on a periapical image."
  },
  {
    question: "In which of the following locations should film be stored?",
    answers: ["Dark room",
              "Cool, dry area",
              "Well-ventilated area",
              "In the refrigerator"],
    correct: 1,
    category: "RHS",
    rationale: "Film should be stored in a cool, dry area (50°–70°F, 40%–60% humidity). The refrigerator is too cold for storage."
  },
  {
    question: "Which of these structures would not be observable as a maxillary landmark on a panoramic image?",
    answers: ["Styloid process",
              "External auditory meatus",
              "Incisive canal",
              "Mental foramen"],
    correct: 3,
    category: "RHS",
    rationale: "The mental foramen is a mandibular landmark, not maxillary. The other structures are located in the maxilla."
  },

  {
    question: "The patient chart should include all of the following except:",
    answers: ["Signed informed consent",
              "Duplicate images",
              "Signed HIPAA release",
              "Original records"],
    correct: 1,
    category: "RHS",
    rationale: "Duplicate images are not required in the patient chart, but original records, signed consent, and HIPAA releases are."
  },
  {
    question: "How does static electricity appear on a developed film?",
    answers: ["Black dots",
              "Clear dots",
              "Scratches",
              "Black branching lines"],
    correct: 3,
    category: "RHS",
    rationale: "Static electricity causes black branching lines on film, typically from opening packets too quickly in low humidity."
  },
  {
    question: "An informed consent consists of all of the following except:",
    answers: ["Number and type of exposures",
              "Permission to release records to a dentist or physician",
              "Potential harm if images are not taken",
              "Reason for the images"],
    correct: 1,
    category: "RHS",
    rationale: "Permission to release records is part of HIPAA, not informed consent. Informed consent covers exposures, reasons, and potential harm."
  },
  {
    question: "When preparing the radiography room for a patient, where should barriers be placed?",
    answers: ["On the headrest, control panel, and beam alignment device",
              "On the computer keyboard, work area, and sensor cord",
              "On the phosphor plate, PID and tubehead, and exposure control button",
              "On the sensor, computer mouse, and x-ray unit on/off button"],
    correct: 2,
    category: "RHS",
    rationale: "Barriers should be placed on the phosphor plate, PID, tubehead, and exposure control button, as these are harder to disinfect and may be damaged by disinfectants."
  },
  {
    question: "Failure to obtain informed consent is an example of:",
    answers: ["Negligence",
              "Common law",
              "Statutory law",
              "Standard of care"],
    correct: 0,
    category: "RHS",
    rationale: "Failure to obtain informed consent is considered negligence or malpractice. It violates the patient’s rights before treatment."
  },

  {
    question: "The dental record is a legal document. Which of the following methods can be used to record patient information in the patient chart?",
    answers: ["Written in ink",
              "Written in pencil",
              "Data recorded on a computer",
              "Written in ink or data recorded on a computer"],
    correct: 3,
    category: "RHS",
    rationale: "Dental records must be permanent, so they should be written in ink or recorded electronically. Pencil is not acceptable."
  },
  {
    question: "Which of the following agencies enforces regulations to protect the safety of dental employees from hazardous materials in the dental office?",
    answers: ["Environmental Protection Agency (EPA)",
              "Occupational Safety and Health Administration (OSHA)",
              "Centers for Disease Control and Prevention (CDC)",
              "Organization for Safety, Asepsis, and Prevention (OSAP)"],
    correct: 1,
    category: "RHS",
    rationale: "OSHA enforces safety regulations regarding hazardous materials. The EPA, CDC, and OSAP focus on environmental and health safety policies."
  },
  {
    question: "Chemical-resistant gloves are used to perform which of the following?",
    answers: ["Set up the radiography room",
              "Remove barriers",
              "Disinfect surfaces",
              "Process film"],
    correct: 2,
    category: "RHS",
    rationale: "Chemical-resistant gloves are needed for disinfecting surfaces to protect hands from harmful chemicals."
  },
  {
    question: "Films are being taken to the daylight loader for automatic processing. Which of the following would not be done when developing film using a daylight loader?",
    answers: ["Place film in feed slot with ungloved hands",
              "Use clean gloves to open film packets",
              "Lift lid to daylight loader and place cup with exposed film packets in daylight loader",
              "Place dirty or used gloves through the cuff assembly"],
    correct: 3,
    category: "RHS",
    rationale: "Dirty gloves should not be placed in the daylight loader; clean hands and gloves are used to handle film and packets."
  },
  {
    question: "Current infection control guidelines come from the __________.",
    answers: ["Centers for Disease Control and Prevention",
              "American Dental Association",
              "Occupational Safety and Health Administration",
              "CDC, ADA, and OSHA"],
    correct: 3,
    category: "RHS",
    rationale: "Infection control guidelines are established by CDC, ADA, and OSHA."
  },
  {
    question: "Which is the method used to prevent cross-contamination during use of a digital sensor?",
    answers: ["Heat sterilization",
              "Disinfection or barrier",
              "Barrier technique and disinfection",
              "Cold sterilization"],
    correct: 2,
    category: "RHS",
    rationale: "Digital sensors should be disinfected and covered with a barrier to prevent cross-contamination."
  },
  {
    question: "The disinfectant required with the use of a digital sensor is an EPA registered __________.",
    answers: ["High-level disinfectant",
              "Intermediate-level disinfectant",
              "Low-level disinfectant",
              "Sterilant"],
    correct: 1,
    category: "RHS",
    rationale: "An intermediate-level disinfectant is recommended for digital sensors to avoid damage while maintaining proper disinfection."
  },
  {
    question: "In addition to the barrier technique, which of the following is an infection control measure for the wire connections from the sensor to the digital image unit?",
    answers: ["Wiping down with soapy water solution",
              "Wiping down with an intermediate-level disinfectant",
              "Wiping down with a high-level hospital-grade disinfectant",
              "No specific infection control measures are required for the cords"],
    correct: 2,
    category: "RHS",
    rationale: "The sensor wires should be wiped with a high-level hospital-grade disinfectant for proper infection control."
  },
  {
    question: "Which of the following statements is correct regarding the use of masks and protective eyewear during dental imaging procedures?",
    answers: ["Face masks are required, but protective eyewear is not.",
              "Protective eyewear is required, but face masks are not.",
              "Protective eyewear and face masks are optional.",
              "All PPE, including face masks and protective eyewear, must be worn at all times. Standard precautions apply."],
    correct: 3,
    category: "RHS",
    rationale: "Face masks and protective eyewear are required when there is a risk of splash or spatter, per standard precautions."
  },
  {
    question: "Film contaminated with saliva should be __________.",
    answers: ["Placed in a high-level disinfectant solution to prevent cross-contamination",
              "Wiped off with soap and water and placed in a disposable cup",
              "Wiped free of saliva with an intermediate-level disinfectant",
              "Wiped free of saliva with alcohol"],
    correct: 2,
    category: "RHS",
    rationale: "Saliva-contaminated film should be wiped with an intermediate-level disinfectant to prevent cross-contamination."
  },

  {
    question: "Which of the following is placed in the daylight loader of an automatic film processor prior to opening the film packets?",
    answers: ["An empty cup",
              "Powdered gloves",
              "Powder-free gloves",
              "An empty cup and powder-free gloves"],
    correct: 3,
    category: "RHS",
    rationale: "An empty cup and powder-free gloves should be placed in the daylight loader to avoid contamination and artifacts on x-rays."
  },
  
  {
    question: "The current patient was running, slipped and hit a picnic table with his front teeth. He fractured tooth number 9. Which image is preferred to evaluate this tooth?",
    answers: ["Occlusal",
              "Bitewing",
              "Periapical",
              "Panoramic"],
    correct: 2,
    category: "RHS",
    rationale: "A periapical image is preferred for evaluating a crown fracture as it provides a detailed view of the pulp and surrounding area. Other views do not offer the same detail for this condition."
  },
  {
    question: "In which situation would extraoral radiography not be used?",
    answers: ["To evaluate growth and development",
              "To evaluate impacted teeth",
              "To diagnose dental caries",
              "To evaluate the extent of large lesions"],
    correct: 2,
    category: "RHS",
    rationale: "Extraoral radiography is not used to diagnose dental caries; bitewings are typically used for this purpose."
  },
  {
    question: "All of the following must be documented in the patient record when exposing dental images except:",
    answers: ["Exposure settings (Unless changed)",
              "Reason for the images",
              "Number and type of images",
              "Diagnosis from the images"],
    correct: 0,
    category: "RHS",
    rationale: "Exposure settings are not required unless they are changed. The reason for the images, number and type of images, and diagnosis are required."
  },
  {
    question: "You are mounting film with the orientation dot face up (convex side is facing you). Which method of mounting is being used and how are you viewing the film?",
    answers: ["Lingual mounting; you are viewing the patient's x-ray images as if you were inside his or her mouth looking out. The patient's left side is on your left side, and the patient's right side is on your right side.",
              "Labial mounting; you are viewing your patient's x-ray images as if you were inside his or her mouth looking out. Your patient's left side is on your left side, and your patient's right side is on your right side.",
              "Lingual mounting; you are viewing your patient's x-ray images as if you were facing your patient. Your patient's left side is on your right side, and your patient's right side is on your left side.",
              "Labial mounting; you are viewing your patient's x-ray images as if you were facing your patient. Your patient's left side is on your right side, and your patient's right side is on your left side."],
    correct: 3,
    category: "RHS",
    rationale: "Labial mounting orients the film as if you are facing the patient. The patient's left side is on your right, and the patient's right side is on your left."
  },
  {
    question: "You were replenishing the chemicals and mixed the chemicals, putting developer in the fixer and fixer in the developer. What occurred that alerted you that you had made a mistake?",
    answers: ["Strong ammonia smell",
              "Sediment of white crystals",
              "Clear amber color",
              "Green deposits in the developer"],
    correct: 0,
    category: "RHS",
    rationale: "A strong ammonia smell indicates contamination of the processing chemicals. This happens when developer and fixer are mixed improperly."
  },
  {
    question: "You are in charge of the quality control procedures for the dental office, which of the following should be performed on a daily basis?",
    answers: ["Check the phosphor plates for artifacts.",
              "Run a test film to check processor solutions.",
              "Process an unexposed film to check the film.",
              "Check the scanner using an unexposed phosphor plate."],
    correct: 1,
    category: "RHS",
    rationale: "Running a test film daily ensures the strength and quality of the processing solutions before exposing patient films."
  },
  {
    question: "Which of the following is not a factor in a missing apical area in a radiograph?",
    answers: ["The receptor was not placed high enough in the palate.",
              "The receptor was not placed low enough in the floor of the mouth.",
              "The horizontal angulation was incorrect.",
              "The patient was unable to completely close on the bite block."],
    correct: 2,
    category: "RHS",
    rationale: "Incorrect horizontal angulation does not affect apical coverage; it can cause overlapping. The other factors can lead to missing the apex."
  },
  {
    question: "Which of the following would appear most radiopaque?",
    answers: ["Composite",
              "Amalgam",
              "Pulp",
              "Enamel"],
    correct: 1,
    category: "RHS",
    rationale: "Amalgam is the most radiopaque material due to its density. Composite may vary, and enamel is radiopaque but less so than amalgam."
  },
  {
    question: "Which of the following affects the sharpness of a dental image?",
    answers: ["Tungsten filament",
              "Milliamperage",
              "Focusing cup position",
              "Focal spot size"],
    correct: 3,
    category: "RHS",
    rationale: "Focal spot size directly impacts image sharpness; smaller focal spots produce sharper images."
  },
  {
    question: "Distortion of an image describes which of the following characteristics?",
    answers: ["Characteristics of the beam of energy",
              "Radiolucent characteristics",
              "Geometric characteristics",
              "Radiopaque characteristics"],
    correct: 2,
    category: "RHS",
    rationale: "Distortion is a geometric characteristic affecting the accuracy of an image, along with sharpness and magnification."
  },
  {
    question: "An underdeveloped film may be caused by which error?",
    answers: ["Inadequate development time",
              "Solution that is too warm",
              "Excessive development time",
              "Concentrated developer solution"],
    correct: 0,
    category: "RHS",
    rationale: "Inadequate development time or cool developer solution leads to underdeveloped, light films."
  },
  
  {
    question: "The purpose of the intensifying screen in a panoramic cassette is to reduce:",
    answers: ["Exposure time",
              "Mounting time",
              "Radiation exposure",
              "Ghosting"],
    correct: 2,
    category: "RHS",
    rationale: "The intensifying screen reduces radiation exposure by glowing when exposed to x-rays, which allows less radiation to be used. It does not affect mounting time or ghosting."
  },
  {
    question: "The office has just started using digital radiography. Analog film was used previously. Exposure time will be:",
    answers: ["About the same as for film",
              "Increased",
              "Decreased",
              "Unchanged"],
    correct: 2,
    category: "RHS",
    rationale: "Exposure times for digital radiography are reduced by 50%–90% compared to conventional film."
  },
  {
    question: "What exposure control selection(s) controls the quality of the x-ray beam?",
    answers: ["Time",
              "Kilovoltage",
              "Milliamperage",
              "Both a and c"],
    correct: 1,
    category: "RHS",
    rationale: "Kilovoltage (kV) controls the quality, or penetrating ability, of the x-ray beam. Time and milliamperage (mA) control the quantity of the beam."
  },
  {
    question: "Which of the following is a true statement regarding radiation and patient protection?",
    answers: ["X-ray images are routinely prescribed for 6-month recall patients.",
              "Round collimators are preferred over rectangular collimators.",
              "A patient may hold the image receptor in place when XCPs are not available.",
              "The benefit of dental x-ray images outweighs the risk of ionizing radiation."],
    correct: 3,
    category: "RHS",
    rationale: "The diagnostic benefits of x-rays outweigh the risks of radiation exposure when images are needed. Rectangular collimators reduce exposure more than round collimators, and patients should not hold receptors."
  },
  {
    question: "Which of the following is a dose equivalent measurement?",
    answers: ["Coulombs per kilogram",
              "Rad",
              "Roentgen",
              "Sievert"],
    correct: 3,
    category: "RHS",
    rationale: "The sievert (Sv) is the SI unit used to measure the biologic effects of different types of radiation, making it a dose equivalent measurement."
  },
  {
    question: "Which traditional measurement and metric measurement are equal?",
    answers: ["Roentgen and sievert",
              "Rad and gray",
              "Rem and coulombs per kilogram",
              "Sievert and rad"],
    correct: 1,
    category: "RHS",
    rationale: "Rad and gray are equal in terms of absorbed dose. The rem and sievert are equal for dose equivalents."
  },
  {
    question: "Which of the following represents the maximum permissible dose (MPD) for the general public?",
    answers: ["0.05 rem/month",
              "0.1 rem/year",
              "5 rem/year",
              "20 rem"],
    correct: 1,
    category: "RHS",
    rationale: "The MPD for the general public is 0.1 rem/year or 0.001 Sv/year. Occupational limits differ."
  },
  {
    question: "Which of the following is a true statement regarding pediatric exposures to radiation?",
    answers: ["Uncooperative children require panoramic exposures.",
              "Pediatric patients do not require images.",
              "Immature tissues of pediatric patients are less susceptible to radiation than the tissues of adult patients.",
              "A child may be seated in a parent's lap for exposures."],
    correct: 3,
    category: "RHS",
    rationale: "A child may sit on a parent's lap for exposures, both covered by a lead apron. Children's tissues are more sensitive to radiation than adults'."
  },
  {
    question: "Which of the following refers to operator protection during dental imaging procedures?",
    answers: ["Avoid the primary beam.",
              "Use a lead apron.",
              "Determine the need for dental images.",
              "Avoid retakes."],
    correct: 0,
    category: "RHS",
    rationale: "The operator must avoid the primary beam for protection. The other measures are focused on patient protection."
  },
  {
    question: "During the exposure of a dental image, the operator:",
    answers: ["Stands more than 6 feet away and at a right angle to the tubehead",
              "Stands in front of and parallel to the primary beam",
              "Stands within 6 feet of and parallel to the primary beam",
              "Stands in back of the patient's head"],
    correct: 0,
    category: "RHS",
    rationale: "The operator should stand at least 6 feet away and at a right angle to the tubehead to avoid radiation exposure."
  },
  {
    question: "Multiple shades of gray on an image are controlled by which component of the x-ray machine?",
    answers: ["mA",
              "kV",
              "Timer",
              "Collimator"],
    correct: 1,
    category: "RHS",
    rationale: "Kilovoltage (kV) controls the contrast and range of gray shades on an image. mA and the timer control density."
  },
  
  
{
    question: "During the production of x-rays, how much energy is lost as heat?",
    answers: ["1%",
              "8%",
              "70%",
              "99%"],
    correct: 3,
    category: "RHS",
    rationale: "99% of the energy during x-ray production is lost as heat, and less than 1% is converted into x-rays."
  },
  {
    question: "Which of the following causes cellular damage from x-radiation?",
    answers: ["Ionization",
              "Milliamperage",
              "Kilovoltage potential",
              "Filtration"],
    correct: 0,
    category: "RHS",
    rationale: "Ionization, caused by x-rays ejecting electrons from atoms, leads to cellular damage."
  },
  {
    question: "Which statement is true as it relates to the direct theory of radiation injury?",
    answers: ["Cell damage results when ionizing radiation directly hits critical areas or targets within the cell.",
              "Direct injuries from exposure to ionizing radiation occur frequently but seldom do noticeable damage.",
              "Most x-ray photons are absorbed by the cell and cause little or no damage.",
              "Indirect injuries occur at the same rate as direct injuries from exposure to ionizing radiation."],
    correct: 0,
    category: "RHS",
    rationale: "The direct theory suggests that ionizing radiation directly striking critical cell areas leads to cell damage."
  },
  {
    question: "Which of the following changes describes the development of cataracts in a person who has been exposed to excessive radiation?",
    answers: ["Genetic",
              "Generational",
              "Short term",
              "Somatic"],
    correct: 3,
    category: "RHS",
    rationale: "Cataracts are a somatic effect, as they impact the individual who received the radiation, not future generations."
  },
  {
    question: "Which of the following requires less exposure for the patient?",
    answers: ["Large silver halide crystals",
              "Small silver halide crystals",
              "Phosphor storage plates",
              "Pixels"],
    correct: 3,
    category: "RHS",
    rationale: "Pixels in digital sensors require less x-ray exposure compared to film and phosphor storage plates."
  },
  {
    question: "Which of the following would actually increase exposure time to a patient?",
    answers: ["Exposing a panoramic image instead of four bitewings",
              "Decreasing target-to-image receptor distance",
              "Decreasing kV by 10%",
              "Using the bisecting angle technique"],
    correct: 2,
    category: "RHS",
    rationale: "Decreasing kV requires increased exposure time to maintain image density."
  },
  {
    question: "Which of the following statements best describes the primary beam of energy?",
    answers: ["It includes primary, secondary, and scatter radiation.",
              "It contains short waves.",
              "It is unfiltered.",
              "It is measured in coulombs per kilogram."],
    correct: 1,
    category: "RHS",
    rationale: "The primary beam consists of short-wavelength, high-energy x-rays used for imaging."
  },
  {
    question: "Which of the following is the acronym for the principle that governs exposure to radiation?",
    answers: ["NCRP",
              "ALARA",
              "MPD",
              "ANSI"],
    correct: 1,
    category: "RHS",
    rationale: "ALARA stands for 'As Low As Reasonably Achievable,' guiding radiation exposure practices."
  },
  {
    question: "Which of the following best describes acute exposures to radiation?",
    answers: ["Genetic",
              "Chronic",
              "Short term",
              "Leukemia"],
    correct: 2,
    category: "RHS",
    rationale: "Acute exposure refers to a large dose of radiation over a short time, potentially causing immediate effects."
  },
  {
    question: "Which of the following has fairly low sensitivity to x-rays, but is a concern because of its risk of exposure due to its location?",
    answers: ["Lens of the eye",
              "Oral mucosa",
              "Bone marrow",
              "Thyroid gland"],
    correct: 3,
    category: "RHS",
    rationale: "The thyroid gland has low sensitivity but is often exposed due to its location near the beam."
  },
  {
    question: "When should a full adult series of dental images be considered for a child or adolescent?",
    answers: ["7 years old",
              "9 years old",
              "12 years old",
              "When clinical evidence of generalized disease is present and the adolescent has first and second molars"],
    correct: 3,
    category: "RHS",
    rationale: "A full series is based on clinical need, such as generalized disease and the presence of first and second molars, not age."
  },
 {
    question: "After processing four bitewing films, the fourth film exits the processor and is completely black at one end of the image. What is the reason for the black portion of the image?",
    answers: ["Developer solution was too weak",
              "Processing chemicals were too cold",
              "Darkroom door was opened too early",
              "Receptor was not exposed to radiation"],
    correct: 2,
    category: "RHS",
    rationale: "A black portion of the image is caused by accidental exposure to white light, which happens when the darkroom door is opened too early."
  },
  {
    question: "You are using a complete series of dental images to educate your patient on the value of radiography. According to HIPAA, what should not be present in or on the film mount?",
    answers: ["The date",
              "The patient's name",
              "Radiographs showing impacted teeth",
              "Radiographs showing dental caries"],
    correct: 1,
    category: "RHS",
    rationale: "Under HIPAA regulations, the patient's name should not be displayed publicly to protect their identity."
  },
  {
    question: "How should you dispose of the used developer solution?",
    answers: ["Put it in a leakproof biohazard bag.",
              "Flush it down the sanitary drain sewer.",
              "Place it in the septic system.",
              "Place it in a special container to be picked up by a special service."],
    correct: 2,
    category: "RHS",
    rationale: "Used developer is nonhazardous and can be safely flushed down the sanitary drain but should not go into a septic system."
  },
  {
    question: "Which of the following should not be disposed of through a waste management system?",
    answers: ["Unused developer",
              "Film",
              "Lead foil",
              "Stabe bite block"],
    correct: 3,
    category: "RHS",
    rationale: "Stabe bite blocks are basic waste and do not need to go through a specialized waste management system."
  },
  {
    question: "You can dispose of the fixer solution and rinse water into sanitary drain systems when __________.",
    answers: ["They are mixed with equal parts of distilled water",
              "The temperature is equal to that of the room",
              "The solutions have evaporated by half",
              "All of the silver has been removed"],
    correct: 3,
    category: "RHS",
    rationale: "Fixer solution can only be safely disposed of after running it through a silver recovery unit to remove all silver."
  },
  {
    question: "Which method is used to dispose of silver that has been recovered from used fixer and rinse water solutions?",
    answers: ["Have it picked up and disposed of by an appropriate waste management service",
              "In the septic tank",
              "In the sanitary sewer",
              "In a biohazard bag"],
    correct: 1,
    category: "RHS",
    rationale: "Recovered silver from fixer solution must be picked up by a licensed waste management service."
  },
  {
    question: "Who/what determines who can expose dental images in the dental office?",
    answers: ["Occupational Health and Safety Association (OSHA)",
              "American Dental Association (ADA)",
              "Individual states",
              "Dentist"],
    correct: 3,
    category: "RHS",
    rationale: "Individual states regulate who is allowed to expose dental images, setting specific certification requirements."
  },
  {
    question: "You are destroying old patient records. How do you dispose of the dental radiographs?",
    answers: ["As regulated waste",
              "As hazardous waste",
              "As normal office waste",
              "Have them collected by an approved waste removal service"],
    correct: 2,
    category: "RHS",
    rationale: "Processed dental film can be disposed of in regular office waste."
  },
  {
    question: "Which interaction with x-rays causes the radiopaque areas on a dental image?",
    answers: ["Compton’s scatter",
              "Photoelectric effect",
              "Coherent scatter",
              "No interaction"],
    correct: 2,
    category: "RHS",
    rationale: "The photoelectric effect causes radiopaque areas by absorbing x-rays, preventing them from reaching the receptor."
  },
  {
    question: "You have a package of outdated dental film. How should you dispose of it?",
    answers: ["Put it in the trash receptacle.",
              "Store it for 6 years, then discard in regular trash.",
              "Shred it and place it in a biohazard bag.",
              "Contact an approved waste removal service."],
    correct: 3,
    category: "RHS",
    rationale: "Undeveloped film must be disposed of by a licensed waste management service."
  },
  {
    question: "Exposed film and phosphor plates should be collected in __________ and transferred to the darkroom or scanning area.",
    answers: ["The lab coat pocket",
              "The operator's hand",
              "A cup",
              "The bracket tray"],
    correct: 2,
    category: "RHS",
    rationale: "Exposed film and phosphor plates should be placed in a cup to prevent cross-contamination."
  },
  {
    question: "Infection control practiced during exposure involves all of the following except __________.",
    answers: ["The beam alignment device is placed on the uncovered countertop after the procedure",
              "The exposed film or phosphor plates are dried after use",
              "The beam alignment device is reassembled as needed",
              "The exposed film or phosphor plates are placed in a cup"],
    correct: 1,
    category: "RHS",
    rationale: "Infection control guidelines prohibit placing contaminated items, like the beam alignment device, on an uncovered countertop."
  },
  {
    question: "Infection control practices during processing involve which of the following?",
    answers: ["Transport",
              "Assembly of beam alignment devices",
              "Checking kV settings",
              "Steadying the tubehead"],
    correct: 0,
    category: "RHS",
    rationale: "Receptor transport is part of infection control during processing. Assembly of beam alignment devices, checking kV settings, and steadying the tubehead are part of exposure procedures."
  },
  {
    question: "During dental imaging procedures, exposure to pathogens occurs most frequently from which of the following?",
    answers: ["Touch",
              "Transfer",
              "Splash, spatter, and droplet",
              "A and B"],
    correct: 3,
    category: "RHS",
    rationale: "In dental imaging, infection control focuses on touch and transfer, which are the primary means of pathogen transmission."
  },
  {
    question: "Which of the following is a single-use item used in a dental imaging procedure?",
    answers: ["Face mask",
              "Lead apron",
              "Beam alignment device",
              "Phosphor plate"],
    correct: 0,
    category: "RHS",
    rationale: "Face masks are single-use items. Lead aprons, beam alignment devices, and phosphor plates are reusable."
  },
  {
    question: "Which describes proper storage of a lead apron?",
    answers: ["Folding and placing it on the chair for reuse",
              "Hanging it between uses",
              "Rolling it",
              "Any method may be used."],
    correct: 1,
    category: "RHS",
    rationale: "Lead aprons should be hung to avoid creasing or damage. Folding or rolling can weaken the protective material."
  },
  {
    question: "You are at greatest risk of contracting your patient's hepatitis C virus from which source?",
    answers: ["Your gloves",
              "The film packet",
              "The lead apron",
              "The beam alignment device"],
    correct: 1,
    category: "RHS",
    rationale: "The film packet is the most likely source of cross-contamination. Proper handling is critical to prevent contamination."
  },
  {
    question: "Which of the following is not classified as a noncritical instrument?",
    answers: ["Beam alignment device",
              "Position indicating device of the dental x-ray tubehead",
              "Exposure button",
              "Lead apron"],
    correct: 0,
    category: "RHS",
    rationale: "Beam alignment devices are classified as semicritical because they contact mucous membranes."
  },
  {
    question: "In trying to explain to a patient about sequence of injury, you use the example of a sunburn. What stage of injury is being described?",
    answers: ["Recovery",
              "Latent period",
              "Period of injury",
              "Cumulative effect"],
    correct: 2,
    category: "RHS",
    rationale: "The period of injury refers to the time when damage is occurring or visible, similar to how a sunburn manifests."
  },
  {
    question: "Phosphor plates are cleaned with which of the following disinfectants?",
    answers: ["Low-level disinfectant",
              "Intermediate-level disinfectant",
              "High-level disinfectant",
              "Disinfectant specifically for phosphor plates"],
    correct: 3,
    category: "RHS",
    rationale: "Phosphor plates are cleaned with a disinfectant specifically designed for them to avoid damage."
  },
  {
    question: "An instrument that contacts mucous membranes but does not penetrate soft tissue or bone is considered __________.",
    answers: ["Critical",
              "Semicritical",
              "Noncritical",
              "Semicritical and noncritical"],
    correct: 1,
    category: "RHS",
    rationale: "Instruments that contact mucous membranes but do not penetrate soft tissue are classified as semicritical."
  },
  {
    question: "Which statement is correct concerning the use of gloves during a dental imaging procedure?",
    answers: ["Gloves must be washed before use, to remove powder residue.",
              "Gloves must be sterile for all procedures.",
              "New gloves must be worn for each patient.",
              "Gloves must be worn only when contact with saliva is anticipated."],
    correct: 3,
    category: "RHS",
    rationale: "New gloves must be worn for each patient. Nonsterile gloves are acceptable, and washing gloves compromises their integrity."
  },
  {
    question: "As the quality control officer for the dental office, you should do all of the following except:",
    answers: ["Calibrate and inspect the equipment regularly.",
              "Develop and maintain a monitoring schedule.",
              "Maintain a log of all tasks completed, date of performance, and person conducting the test.",
              "Develop a plan for evaluation and correction of problems."],
    correct: 0,
    category: "RHS",
    rationale: "Calibration and inspection of equipment should be done by an authorized technician, not the quality control officer."
  },
  {
    question: "Which of the following is not true as it relates to the components of a dental x-ray tube?",
    answers: ["The focusing cup has a negative electrostatic charge.",
              "The anode of the positive end of the x-ray tube is made of tungsten and copper.",
              "The cathode is the positively charged end of the x-ray tube.",
              "The collimator is a lead disk with an aperture of various sizes and shapes."],
    correct: 2,
    category: "RHS",
    rationale: "The cathode is the negatively charged end of the x-ray tube. The focusing cup and anode have specific roles in the tube's function."
  },
  {
    question: "Which part of a dental film absorbs the x-radiation during x-ray exposure and stores the energy from the radiation?",
    answers: ["Film base",
              "Adhesive layer",
              "Silver halide crystals",
              "Protective gelatin layer"],
    correct: 2,
    category: "RHS",
    rationale: "Silver halide crystals in the emulsion absorb x-radiation and store the energy for image formation."
  },
  {
    question: "Which intraoral dental x-ray machine component is used to aim and direct the x-ray beam toward the image receptor?",
    answers: ["Yoke",
              "Control panel",
              "Extension arm",
              "Position indicating device"],
    correct: 3,
    category: "RHS",
    rationale: "The position indicating device (PID) directs the x-ray beam toward the image receptor."
  },
  {
    question: "When taking an image of a maxillary premolar periapical, where should the mesial edge of the receptor (it will come up to or cover) be placed to obtain the correct image and what should be in the image?",
    answers: ["Center of the central incisor; distal half of the central incisor, lateral incisor, canine, first premolar, mesial portion of the second premolar",
              "Center of the lateral incisor; distal half of the lateral incisor canine, first premolar, second premolar, mesial portion of the first molar",
              "Center of the canine; distal half of the canine, first premolar, second premolar, first molar, mesial portion of the second molar",
              "Center of the first premolar; distal half of the first premolar, second premolar, first molar, second molar, mesial portion of the third molar"],
    correct: 2,
    category: "RHS",
    rationale: "The mesial edge should be placed at the center of the canine to capture the premolars and part of the molars in the image."
  },
  {
    question: "When taking an image of the maxillary and mandibular crowns and alveolar crestal bone, where should you place the mesial edge of the receptor (it will come up to or cover) to get the correct image, and what should be in the image?",
    answers: ["Center of maxillary first premolar; distal half of maxillary first premolar, second premolar, first molar, second molar, mesial portion of the third molar",
              "Center of both first premolars (maxillary and mandibular); distal half of both first premolars, second premolars, first molars, second molars, mesial portion of the third molars",
              "Center of maxillary second premolar; distal half of maxillary premolar, first molar, second molar, and third molar",
              "Center of both second premolars (maxillary and mandibular); distal half of both second premolars, first molars, second molars, and third molars"],
    correct: 3,
    category: "RHS",
    rationale: "For a horizontal molar bitewing, the receptor should be centered on the second premolars to capture the molars and surrounding structures."
  },
  
 {
    question: "Which is the name of the sensor used in digital imaging systems?",
    answers: ["CCD (charge-coupled device)",
              "PID (position indicating device)",
              "MRI (magnetic resonance imaging)",
              "TLD (thermoluminescent dosimeter)"],
    correct: 0,
    category: "RHS",
    rationale: "A charge-coupled device (CCD) is a solid-state sensor used in digital imaging systems. PID directs the x-ray beam, MRI is a medical imaging method, and TLD measures radiation exposure."
  },
  {
    question: "Which is a vertical angulation error?",
    answers: ["Overlapping",
              "Blurred image",
              "Foreshortening",
              "Herringbone pattern"],
    correct: 2,
    category: "RHS",
    rationale: "Foreshortening occurs due to excessive vertical angulation, making teeth appear shorter. Overlapping is a horizontal angulation error, and herringbone occurs when the film is placed backward."
  },
  {
    question: "Which has occurred if there is no image on a film after processing?",
    answers: ["Film not exposed to radiation",
              "Movement of the patient's head",
              "X-ray beam misses part of the film",
              "Film placed backward in the mouth"],
    correct: 0,
    category: "RHS",
    rationale: "If no image appears, the film was not exposed to radiation. Head movement results in a blurred image, and cone cutting occurs if the beam misses part of the film."
  },
  {
    question: "Which occurs if a film is underexposed or underdeveloped?",
    answers: ["Light image",
              "Dark image",
              "Partial image",
              "Blurred image"],
    correct: 0,
    category: "RHS",
    rationale: "Underexposure or underdevelopment results in a light image. Overexposure or overdevelopment results in a dark image."
  },
  {
    question: "Which error results in interproximal spaces overlapping on a radiograph?",
    answers: ["Level angulation",
              "Vertical angulation",
              "Horizontal angulation",
              "Perpendicular angulation"],
    correct: 2,
    category: "RHS",
    rationale: "Horizontal angulation errors cause overlapping of interproximal spaces, while vertical errors result in elongation or foreshortening."
  },
  {
    question: "Which adjustment should be made when taking dental images for a patient who is a heavy-set gentleman with a larger bone structure?",
    answers: ["Decrease the mA",
              "Increase exposure time",
              "Decrease exposure time",
              "There is no need to make a change to the settings"],
    correct: 1,
    category: "RHS",
    rationale: "Larger bone structures require increased exposure time to ensure proper image density."
  },
  {
    question: "Which is a radiolucent restoration?",
    answers: ["Gold",
              "Acrylic",
              "Amalgam",
              "Post and core"],
    correct: 1,
    category: "RHS",
    rationale: "Acrylic restorations are radiolucent. Gold, amalgam, and post-and-core restorations are radiopaque."
  },
  {
    question: "Which is the least distance a person exposing radiographs should stand from the x-ray machine if shielding is not available?",
    answers: ["3 feet",
              "4 feet",
              "5 feet",
              "6 feet"],
    correct: 3,
    category: "RHS",
    rationale: "The operator should stand at least 6 feet away from the x-ray source if shielding is unavailable."
  },
  {
    question: "Which radiographic technique error occurs when a partial image is created because the central beam misses the x-ray film?",
    answers: ["Elongation",
              "Cone cutting",
              "Foreshortening",
              "Double exposure"],
    correct: 1,
    category: "RHS",
    rationale: "Cone cutting occurs when the x-ray beam fails to cover the entire film, resulting in a partial image."
  },
  {
    question: "How frequently is a cleaning film sent through the automatic processor?",
    answers: ["Daily",
              "Weekly",
              "Monthly",
              "When chemicals are changed"],
    correct: 0,
    category: "RHS",
    rationale: "A cleaning film should be used daily in the automatic processor to prevent buildup of debris on the rollers."
  },
  {
    question: "Reticulation of a dental radiograph is indicative of __________.",
    answers: ["Inadequate fixation",
              "Excessive exposure",
              "Moisture contamination of the film packet",
              "Sudden temperature changes during fixation"],
    correct: 3,
    category: "RHS",
    rationale: "Reticulation, a crackling effect on the film, occurs when the film undergoes sudden temperature changes during processing."
  },
  {
    question: "Which is the anatomic landmark located in the mandibular premolar area that can be mistaken for a periapical pathology?",
    answers: ["Mental fossa",
              "Mental foramen",
              "Mandibular canal",
              "Submandibular fossa"],
    correct: 1,
    category: "RHS",
    rationale: "The mental foramen in the mandibular premolar region can be mistaken for periapical pathology on radiographs."
  },
  {
    question: "Which of the following is a reason for conducting a chart audit?",
    answers: ["Check image quality",
              "Track number of retakes",
              "Track reason for retakes and corrections",
              "All of the above"],
    correct: 3,
    category: "RHS",
    rationale: "A chart audit helps to check image quality, track retakes, and document reasons for retakes and corrections."
  },
  
 {
  question: "The hamular process is observed on intraoral films in a view of the __________",
  answers: ["Maxillary molar area",
            "Mandibular molar area",
            "Maxillary premolar area",
            "Mandibular premolar area"],
  correct: 0,
  category: "RHS",
  rationale: "The hamular process is located in the maxillary molar area, specifically the hook-shaped extremity of the medial pterygoid plate. It is not found in the premolar or mandibular areas."
},
{
  question: "You are in charge of taking care of the processing equipment each day. What do you need to do to replenish the automatic processor?",
  answers: ["Wait for oxidation to occur prior to replenishing the tanks",
            "Replenish 6 ounces of fixer solution daily",
            "Replenish 3 ounces of developer daily",
            "Replenish both developer and fixer each morning as needed"],
  correct: 3,
  category: "RHS",
  rationale: "Replenishing both the developer and fixer daily as needed ensures consistent image quality. Specific amounts may vary based on usage."
},
{
  question: "In the paralleling technique, the central ray is at a __________ degree angle to the receptor",
  answers: ["60",
            "70",
            "80",
            "90"],
  correct: 3,
  category: "RHS",
  rationale: "In the paralleling technique, the central ray is directed at a 90-degree angle to the receptor to ensure proper imaging."
},
{
  question: "Which is the correct vertical angulation for the central beam when exposing bitewing images using a bitewing tab?",
  answers: ["0 degrees",
            "+10 degrees",
            "+20 degrees",
            "+30 degrees"],
  correct: 1,
  category: "RHS",
  rationale: "The correct vertical angulation for bitewing images is +10 degrees to compensate for the natural curvature of the maxillary arch."
},
{
  question: "You are performing a quality assurance (QA) check on the phosphor plates using a step wedge. For what are you looking?",
  answers: ["Difference in density between the previous QA images and the current QA image for each specific phosphor plate",
            "Difference in density between each of the phosphor plate QA images developed that day",
            "The step wedge is clearly visible on the image",
            "You do not need to expose images to check for quality assurance of phosphor plates; you just need to visually check them for damage"],
  correct: 0,
  category: "RHS",
  rationale: "A QA check involves comparing the current image with a baseline image for each phosphor plate to ensure consistent density."
},
{
  question: "Which occurred if the apices of the mandibular molar teeth in a periapical radiograph appear to be cut off the image?",
  answers: ["excessive vertical angulation",
            "inadequate vertical angulation",
            "excessive horizontal angulation",
            "inadequate horizontal angulation"],
  correct: 1,
  category: "RHS",
  rationale: "Inadequate vertical angulation causes the apices to be cut off in the radiograph. Excessive angulation can cause foreshortening."
},
{
  question: "You are in charge of quality control and have been instructed to test the quality of each new box of film. What test will be run?",
  answers: ["coin test",
            "fresh film",
            "light tight",
            "reference film"],
  correct: 1,
  category: "RHS",
  rationale: "A fresh film test is used to check the quality of a new box of film. The film should appear clear with a blue tint when properly processed."
},
{
  question: "Which is used to determine the amount of radiation reaching the image receptor through each of the increments?",
  answers: ["coin test",
            "light tight",
            "step wedge",
            "reference film"],
  correct: 2,
  category: "RHS",
  rationale: "A step wedge is used to measure the amount of radiation passing through each increment to assess image density."
},
{
  question: "You are in charge of the supplies. You have just received a large order of film. There is out-of-date film and film that is ready to expire. Which film should you use first?",
  answers: ["film that is ready to expire",
            "film that is expired",
            "new film",
            "the order of use does not matter"],
  correct: 0,
  category: "RHS",
  rationale: "The film that is ready to expire should be used first to avoid waste. Expired film should not be used."
},
{
  question: "A coin test has just been completed. The image of the coin appeared on the film. What if anything will you need to do?",
  answers: ["Change the safelight or filter, the light is too dark. If you are using the correct safelight or filter, you will need to move the safelight closer to your workspace and processor",
            "No changes need to be made, the safelight is adequate",
            "You need to change the safelight or filter, the safelight is too bright. If you are using the correct safelight or filter, you will need to move the safelight further away from your workspace and processor",
            "The safelight is not working. You need to replace the safelight"],
  correct: 2,
  category: "RHS",
  rationale: "If the coin image appears on the film, the safelight is too bright and needs adjustment or replacement."
},
{
  question: "After processing, fresh film that has been properly stored and protected will appear clear with a slight __________ tint.",
  answers: ["pink",
            "blue",
            "white",
            "brown"],
  correct: 1,
  category: "RHS",
  rationale: "Properly processed fresh film should have a slight blue tint, indicating it has been stored and handled correctly."
},
{
  question: "Which is the clearing test used to monitor?",
  answers: ["fixer strength",
            "water temperature",
            "developer strength",
            "darkroom lighting safety"],
  correct: 0,
  category: "RHS",
  rationale: "The clearing test monitors fixer strength. If films don't clear within 2 minutes, the fixer strength is inadequate."
},
{
  question: "Factors that affect radiation injury include all of the following except:",
  answers: ["type of exposure",
            "how fast the exposure occurred",
            "how much exposure",
            "size of the area exposed"],
  correct: 0,
  category: "RHS",
  rationale: "The type of exposure does not affect radiation injury. Factors include dose, rate of exposure, and size of the area exposed."
},
{
  question: "What is the first thing you should do when implementing quality control procedures in the dental office?",
  answers: ["Maintain a monitoring schedule.",
            "Develop an overall plan.",
            "Assign duties for quality assurance procedures to staff members.",
            "Develop a plan for evaluation and correction of problems."],
  correct: 1,
  category: "RHS",
  rationale: "The first step is to develop an overall plan, followed by assigning duties and maintaining a monitoring schedule."
},
{
  question: "Regulations regarding dental assistant certification vary from __________",
  answers: ["year to year",
            "state to state",
            "month to month",
            "county to county"],
  correct: 1,
  category: "RHS",
  rationale: "Certification requirements vary from state to state, not by year, month, or county."
},
{
  question: "The Consumer-Patient Radiation Health and Safety Act is a __________ law that requires all persons who take dental radiographs be certified.",
  answers: ["state",
            "local",
            "county",
            "federal"],
  correct: 3,
  category: "RHS",
  rationale: "The Consumer-Patient Radiation Health and Safety Act is a federal law requiring certification for individuals who take dental radiographs."
},
{
  question: "How long are the film and coin exposed when a coin test is conducted?",
  answers: ["30 seconds",
            "3 minutes",
            "15 minutes",
            "1 hour"],
  correct: 1,
  category: "RHS",
  rationale: "The film and coin are exposed for 3-4 minutes during a coin test to assess safelight adequacy."
},
{
  question: "When the step wedge technique is used, if the density on the daily radiograph differs from that on the standard radiograph by more than __________ steps, the developer solution is depleted.",
  answers: ["two",
            "three",
            "four",
            "five"],
  correct: 0,
  category: "RHS",
  rationale: "A density difference of more than two steps indicates that the developer solution is depleted and needs replacement."
},
{
  question: "Velocity is:",
  answers: ["number of times a wave crest passes a given point during a specific amount of time",
            "distance from one wave crest to the next wave crest",
            "speed of a given object",
            "amount of force used to propel a given object"],
  correct: 2,
  category: "RHS",
  rationale: "Velocity refers to the speed of an object, such as an electron, not to wave frequency or distance between wave crests."
},
{
  question: "Which effect will exposure to minor amounts of room light have on films being processed in a darkroom?",
  answers: ["Films will appear clear.",
            "Films will appear light.",
            "Films will appear black.",
            "Films will appear streaked."],
  correct: 2,
  category: "RHS",
  rationale: "Exposure to room light during processing results in blackened films due to overexposure to light."
},
{
  question: "Which condition will result in a radiographic image that is too light?",
  answers: ["inadequate safelight",
            "weak developing solutions",
            "processing solution that is too warm",
            "darkroom door opened during developing"],
  correct: 1,
  category: "RHS",
  rationale: "Weak developer solution results in underdeveloped, light radiographs."
},
{
  question: "How can acceptable radiographs be produced if the temperature of the developing solution is slightly above normal?",
  answers: ["Lengthen time in the wash.",
            "Lengthen the exposure time.",
            "Shorten the time in the fixer.",
            "Shorten the time in the developer."],
  correct: 3,
  category: "RHS",
  rationale: "If the developer temperature is too high, shortening the developing time can produce acceptable images."
},
{
  question: "Federal regulations require that round opening collimators restrict the x-ray beam to __________ inches at the patient end of the PID.",
  answers: ["1.75",
            "2.75",
            "3.75",
            "4.75"],
  correct: 1,
  category: "RHS",
  rationale: "Federal law requires the x-ray beam to be restricted to 2.75 inches at the patient end of the PID."
},
{
  question: "Rectangular PIDs restrict the x-ray beam to the approximate size of a __________ image receptor.",
  answers: ["#1",
            "#2",
            "#3",
            "#4"],
  correct: 1,
  category: "RHS",
  rationale: "Rectangular PIDs restrict the beam to the size of a #2 image receptor, commonly used in bitewing and periapical images."
},
{
  question: "Which of the following is a property of x-rays?",
  answers: ["Travel at the speed of sound.",
            "Diverge to a point.",
            "Have a negative charge.",
            "Penetrate matter."],
  correct: 3,
  category: "RHS",
  rationale: "X-rays can penetrate matter, which is a key property that enables their use in diagnostic imaging."
},
{
  question: "You have an uncooperative child that you need to expose dental images on. Which of the following would be appropriate to do during an exposure?",
  answers: ["Have child sit on parent’s lap and cover both with a lead apron, parent stabilizes receptor holder, if needed.",
            "You stand next to the child and stabilize receptor holder; you have on a lead apron.",
            "You have the child sit on your lap and cover both of you with a lead apron; you stabilize the receptor holder, if needed.",
            "Both a and c"],
  correct: 0,
  category: "RHS",
  rationale: "An uncooperative child can sit on the parent’s lap with both covered by a lead apron. The parent may stabilize the receptor holder but must not hold the receptor themselves. Operators must never stabilize the receptor or have the child sit on their lap."
},
{
  question: "The maximum permissible dose (MPD) for oral healthcare professionals is __________ mSv/year.",
  answers: ["50",
            "60",
            "70",
            "80"],
  correct: 0,
  category: "RHS",
  rationale: "The MPD for oral healthcare professionals is 50 mSv/year."
},
{
  question: "Who is the person responsible for prescribing dental radiographs?",
  answers: ["dentist",
            "office manager",
            "dental assistant",
            "dental hygienist"],
  correct: 0,
  category: "RHS",
  rationale: "Only the dentist is responsible for prescribing dental radiographs."
},
{
  question: "Which type of radiation is the most penetrating beam produced at the target of the anode?",
  answers: ["scatter",
            "primary",
            "ancillary",
            "secondary"],
  correct: 1,
  category: "RHS",
  rationale: "Primary radiation is the most penetrating beam produced at the anode."
},
{
  question: "Which is the metal disk with a small opening located inside the position indicating device in the path of the x-ray beam?",
  answers: ["transformer",
            "tubehead seal",
            "lead collimator",
            "filter"],
  correct: 2,
  category: "RHS",
  rationale: "The lead collimator is the metal disk with a small opening inside the position indicating device (PID) to restrict the x-ray beam."
},
{
  question: "Which are the majority of x-rays produced by dental x-ray machines?",
  answers: ["photoelectric",
            "coherent scattering",
            "characteristic radiation",
            "Bremsstrahlung radiation"],
  correct: 3,
  category: "RHS",
  rationale: "Bremsstrahlung radiation makes up the majority of x-rays produced in dental x-ray machines."
},
{
  question: "Which tissue, organ, or cell is the most sensitive to radiation?",
  answers: ["bone",
            "muscle",
            "nerve",
            "reproductive"],
  correct: 3,
  category: "RHS",
  rationale: "Reproductive cells are the most sensitive to radiation."
},
{
  question: "The x-ray room is prepared, and you have seated the patient. Which of the following procedures must you do before putting on your gloves?",
  answers: ["Prepare the beam alignment device.",
            "Adjust the headrest.",
            "Place the lead apron on the patient.",
            "Adjust the headrest and place the lead apron on the patient."],
  correct: 3,
  category: "RHS",
  rationale: "You should adjust the headrest and place the lead apron on the patient before putting on gloves."
},
{
  question: "The temperature of the water has been checked in the developer. It is 68°F. For how long will you develop and fix the film?",
  answers: ["4 minutes; 8 minutes",
            "4.5 minutes; 9 minutes",
            "5 minutes; 10 minutes",
            "5.5 minutes; 11 minutes"],
  correct: 3,
  category: "RHS",
  rationale: "At 68°F, the standard development time is 5 minutes, and fixing time is 10 minutes."
},
{
  question: "A film processed under ideal conditions and used to compare subsequent radiographic images is called a __________ film.",
  answers: ["fresh",
            "fogged",
            "duplicate",
            "reference"],
  correct: 3,
  category: "RHS",
  rationale: "A reference film is processed under ideal conditions and used as a baseline for comparison."
},
{
  question: "After which year did all newly manufactured dental x-ray machines have to comply with federal regulations?",
  answers: ["1944",
            "1954",
            "1964",
            "1974"],
  correct: 3,
  category: "RHS",
  rationale: "After 1974, all newly manufactured dental x-ray machines had to comply with federal regulations."
},
{
  question: "The x-ray beam is restricted to a diameter of no more than __________ at the surface of the skin.",
  answers: ["7 cm",
            "8 cm",
            "9 cm",
            "10 cm"],
  correct: 0,
  category: "RHS",
  rationale: "The x-ray beam is restricted to a diameter of no more than 7 cm at the skin surface."
},
{
  question: "Which is the definition for the acronym ALARA?",
  answers: ["as little as relatively allowable",
            "as low as reasonably achievable",
            "as likely as rationally attainable",
            "as little as realistically accomplished"],
  correct: 1,
  category: "RHS",
  rationale: "ALARA stands for 'as low as reasonably achievable,' which is the guiding principle for radiation safety."
},

{
  question: "Dental radiographs are the property of the __________",
  answers: ["dentist",
            "patient",
            "insurance company",
            "dentist and the patient"],
  correct: 0,
  category: "RHS",
  rationale: "By law, dental radiographs are the property of the dentist, not the patient. They are not the property of the insurance company or shared between the patient and the dentist."
},
{
  question: "Which type of consent is necessary before exposing dental radiographs on a patient?",
  answers: ["implied",
            "inferred",
            "indicated",
            "informed"],
  correct: 3,
  category: "RHS",
  rationale: "Informed consent is required before exposing dental radiographs. This is consent with full understanding of the risks and benefits. Implied or inferred consent is not sufficient in this context."
},
{
  question: "Which limits the size of the primary beam?",
  answers: ["film",
            "filter",
            "collimator",
            "tungsten target"],
  correct: 2,
  category: "RHS",
  rationale: "The collimator limits the size of the primary beam. The filter removes longer, less-penetrating wavelengths. The tungsten target and film do not influence the beam's size."
},
{
  question: "Which controls the quantity of an x-ray beam?",
  answers: ["cathode",
            "kilovoltage",
            "milliamperes",
            "tungsten target"],
  correct: 2,
  category: "RHS",
  rationale: "Milliamperes control the quantity of the x-ray beam by determining the number of electrons. Kilovoltage affects the quality, not the quantity."
},
{
  question: "Which is a correct statement regarding the guidelines for prescribing dental radiographs for a pregnant patient according to the American Dental Association (ADA) and the Food and Drug Administration (FDA)?",
  answers: ["Radiographs should never be taken on a patient who is pregnant.",
            "Radiographic procedures do not need to be altered because of pregnancy.",
            "Radiographs can be taken if the patient is at least 12 weeks pregnant.",
            "Radiographic procedures require that a maximum of four radiographs be taken."],
  correct: 1,
  category: "RHS",
  rationale: "According to ADA and FDA guidelines, radiographic procedures do not need to be altered due to pregnancy. The other options are not based on these standards."
},
{
  question: "Which alters the voltage of incoming electrical current?",
  answers: ["x-ray tube",
            "transformer",
            "tubehead seal",
            "lead collimator"],
  correct: 1,
  category: "RHS",
  rationale: "The transformer alters the voltage of incoming electrical current. The x-ray tube generates the x-rays, while the tubehead seal and collimator manage beam quality and size."
},
{
  question: "Which is the generating system where x-rays are produced?",
  answers: ["x-ray tube",
            "transformer",
            "tubehead seal",
            "lead collimator"],
  correct: 0,
  category: "RHS",
  rationale: "The x-ray tube is the part of the machine where x-rays are produced."
},
{
  question: "Which is located in the PID and removes from the beam the x-rays with a longer, nonpenetrating wavelength?",
  answers: ["x-ray tube",
            "transformer",
            "lead collimator",
            "aluminum filter"],
  correct: 3,
  category: "RHS",
  rationale: "The aluminum filter removes nonpenetrating, longer-wavelength x-rays from the beam. The lead collimator limits the size of the beam, while the x-ray tube generates the x-rays."
},
{
  question: "Which of the following provides for the development of performance standards for the regulation of radiation emission from an x-ray machine?",
  answers: ["National Committee on Radiation Protection and Measurements",
            "Consumer-Patient Radiation Health and Safety Act",
            "Radiation Control and Safety Act",
            "American Dental Association (ADA) Council on Scientific Affairs and the U.S. Department of Health and Human Services, Public Health Service, Food and Drug Administration (FDA)"],
  correct: 2,
  category: "RHS",
  rationale: "The Radiation Control and Safety Act provides for the development of performance standards for regulating radiation emissions."
},
{
  question: "The hotter the filament becomes, the more __________ are produced.",
  answers: ["atoms",
            "protons",
            "neutrons",
            "electrons"],
  correct: 3,
  category: "RHS",
  rationale: "As the filament heats up, more electrons are produced in the process called thermionic emission."
},
{
  question: "In the production of x-rays, what percentage is lost to heat?",
  answers: ["1%",
            "99%",
            "70%",
            "30%"],
  correct: 1,
  category: "RHS",
  rationale: "99% of the energy in x-ray production is lost to heat. Only 1% of the energy is converted to x-rays."
},
{
  question: "Milliamperage controls heating of the__________",
  answers: ["anode",
            "cathode",
            "metal housing",
            "aluminum filter"],
  correct: 1,
  category: "RHS",
  rationale: "Milliamperage controls the heating of the cathode, which produces electrons."
},
{
  question: "The master switch does which of the following?",
  answers: ["sends the electrons to the anode.",
            "controls the force.",
            "controls the number of electrons.",
            "heats the tungsten filament."],
  correct: 3,
  category: "RHS",
  rationale: "The master switch heats the tungsten filament, which releases electrons. The number of electrons is controlled by milliamperes (mA), and the force is controlled by kilovolts (kV)."
},

{
  question: "The purpose of the step-down transformer is to:",
  answers: ["increase the voltage from 110–220 volts to 60,000–100,000 volts",
            "decrease the voltage from 110–220 volts to 3–5 volts",
            "cause enough heat to create the electron cloud",
            "propel electrons to create x-rays"],
  correct: 1,
  category: "RHS",
  rationale: "The step-down transformer decreases the voltage from 110–220 volts to 3–5 volts to heat the tungsten filament, enabling it to emit electrons and create the electron cloud. The step-up transformer increases the voltage to propel the electrons and generate x-rays."
},
{
  question: "When using the bisecting technique, the angulation of the central ray is __________ degrees to the imaginary bisector.",
  answers: ["20",
            "40",
            "70",
            "90"],
  correct: 3,
  category: "RHS",
  rationale: "In the bisecting technique, the central ray is at a 90-degree angle to the imaginary bisector, creating a perpendicular angle necessary for proper image capture."
},
{
  question: "Which is the purpose of the lead foil in the film packets?",
  answers: ["to stop the backscatter radiation",
            "to add cushioning to the film packet",
            "to create a herringbone effect on a developed film",
            "to determine if the film packet is placed backward"],
  correct: 0,
  category: "RHS",
  rationale: "The lead foil in film packets serves to stop backscatter radiation, preventing radiation from reaching the film a second time and reducing scatter. It does not add cushioning or serve as a marker for backward placement."
},
{
  question: "Which describes the use of a filter in a dental x-ray tubehead?",
  answers: ["removes low-energy x-rays",
            "removes high-energy x-rays",
            "reduces the size and shape of the beam",
            "stops the radiation from reaching the thyroid gland"],
  correct: 0,
  category: "RHS",
  rationale: "The filter in a dental x-ray tubehead removes low-energy, longer-wavelength x-rays, allowing only high-energy, short-wavelength x-rays to form the primary beam. It does not reduce the size of the beam or protect the thyroid gland."
},
{
  question: "Which type of illumination is allowed in the darkroom while a film packet is being opened?",
  answers: ["safelight",
            "fluorescent light",
            "incandescent light",
            "no light is allowed in the darkroom"],
  correct: 0,
  category: "RHS",
  rationale: "A safelight, which emits light at a wavelength that does not affect film, is the only type of illumination allowed in the darkroom while a film packet is being opened."
},
{
  question: "Which cells of the body are least susceptible to x-rays?",
  answers: ["bone",
            "oral mucosa",
            "muscle",
            "reproductive cells"],
  correct: 2,
  category: "RHS",
  rationale: "Muscle tissue is the least susceptible to x-rays. Reproductive cells are the most sensitive, with oral mucosa and bone falling in between."
},
{
  question: "Which does not require a barrier before radiographic procedures?",
  answers: ["PID",
            "treatment chair",
            "exposure button",
            "image receptor holding device"],
  correct: 2,
  category: "RHS",
  rationale: "The exposure button does not require a barrier as it does not come into direct contact with the patient. The image receptor holding device requires sterilization after use."
},
{
  question: "Transporting uncovered, processed phosphor storage plate (PSP) films should be done by placing them in __________",
  answers: ["a black box",
            "an envelope",
            "a plastic cup",
            "clean dry hands"],
  correct: 0,
  category: "RHS",
  rationale: "Processed PSP plates should be transported in a black box to protect them from light, which could erase the images. Other methods do not provide adequate light protection."
},
{
  question: "Which is not an example of PPE (personal protective equipment)?",
  answers: ["mask",
            "gloves",
            "thyroid collar",
            "protective eyewear"],
  correct: 2,
  category: "RHS",
  rationale: "A thyroid collar is used to protect the patient from radiation and is not considered PPE. PPE includes masks, gloves, and protective eyewear worn by the clinician."
},
{
  question: "Which of the following is classified as a semicritical object?",
  answers: ["lead apron",
            "treatment chair",
            "image receptor holder",
            "tubehead support arm"],
  correct: 2,
  category: "RHS",
  rationale: "The image receptor holder is classified as semicritical because it contacts mucous membranes. Noncritical items include the lead apron, treatment chair, and tubehead support arm."
},
{
  question: "Which items of PPE (personal protective equipment) should be worn during exposure of intraoral dental radiographs?",
  answers: ["treatment gloves",
            "gown, treatment gloves",
            "gown, treatment gloves, protective eyewear",
            "gown, treatment gloves, mask, protective eyewear"],
  correct: 3,
  category: "RHS",
  rationale: "According to CDC guidelines, during intraoral radiographs, the clinician should wear a gown, gloves, protective eyewear, and a mask to minimize exposure to body fluids."
},
{
  question: "Which should be used when opening contaminated dental film packets?",
  answers: ["over gloves",
            "utility gloves",
            "clean, dry hands",
            "treatment gloves"],
  correct: 3,
  category: "RHS",
  rationale: "Clean treatment gloves should be used to open contaminated dental film packets to prevent cross-contamination."
},
{
  question: "Which should be used when loading opened dental films into the processor?",
  answers: ["over gloves",
            "utility gloves",
            "clean dry hands",
            "treatment gloves"],
  correct: 2,
  category: "RHS",
  rationale: "Clean, dry hands are used when loading dental films into the processor to avoid contamination of the film processor."
},

{
  question: "Which infection control method is required for intraoral digital sensors?",
  answers: ["dry heat autoclave",
            "ultrasonic and air dry",
            "wash with soap and water",
            "disinfect and cover with a barrier"],
  correct: 3,
  category: "RHS",
  rationale: "Intraoral digital sensors are disinfected with an intermediate-level disinfectant and covered with a barrier for proper infection control. Dry heat autoclave and ultrasonic cleaning can damage the sensor, and washing with soap and water does not provide sufficient disinfection."
},
{
  question: "Which is a critical item used in radiography?",
  answers: ["PSP plates",
            "digital sensors",
            "image receptor holders",
            "none of the above"],
  correct: 3,
  category: "RHS",
  rationale: "There are no critical items used in radiography. PSP plates, digital sensors, and image receptor holders are considered semicritical items because they contact mucous membranes but do not penetrate tissues."
},
{
  question: "When preparing film without barrier envelopes for processing, you should do which of the following?",
  answers: ["Hold the tab portion of the black paper wrapping, carefully pull out the film by only touching the film edges, and place it in the processor.",
            "Hold the tab portion of the black paper wrapping and drop the film on the paper towel.",
            "Open the black paper wrapping and pull out the film, then place it in the processor.",
            "Open the black paper wrapping and pull out the film, and drop it on the paper towel."],
  correct: 0,
  category: "RHS",
  rationale: "Film without barrier envelopes should be handled by holding the tab portion of the black paper wrapping, carefully pulling out the film by only touching the edges, and then placing it in the processor. This prevents cross-contamination from the gloved hands, which are contaminated after touching the film packet."
},
{
  question: "Which are single-celled organisms that are classified by their shape?",
  answers: ["fungi",
            "viruses",
            "bacteria",
            "parasites"],
  correct: 2,
  category: "RHS",
  rationale: "Bacteria are single-celled organisms classified by their shape. Fungi are yeasts and molds, viruses are smaller than bacteria and only visible with a microscope, and parasites are organisms that require a host to live."
},
{
  question: "Which stage of disease progression occurs between the invasion of the body by a pathogenic organism and the appearance of the first symptoms of disease?",
  answers: ["acute",
            "prodromal",
            "incubation",
            "convalescent"],
  correct: 2,
  category: "RHS",
  rationale: "The incubation period is the time between the invasion of the body by a pathogen and the appearance of the first symptoms. The prodromal stage is when symptoms start appearing, the acute stage is the height of the illness, and the convalescent stage is the recovery phase."
},
{
  question: "After the exposure of dental radiographs, the lead apron is removed with __________",
  answers: ["utility gloves",
            "surgical gloves",
            "clean dry hands",
            "treatment gloves"],
  correct: 2,
  category: "RHS",
  rationale: "Clean dry hands should be used to remove the lead apron after radiographic exposure. Utility gloves are for disinfection tasks, and surgical gloves are not used in radiographic procedures."
},
{
  question: "Which of the following should be used during the exposure of dental radiographs?",
  answers: ["utility gloves",
            "surgical gloves",
            "clean dry hands",
            "treatment gloves"],
  correct: 3,
  category: "RHS",
  rationale: "Treatment gloves are worn during the exposure of dental radiographs to maintain infection control. Utility gloves are used for room disinfection, and surgical gloves are not necessary for radiographic procedures."
},
{
  question: "All of the following are tuberculocidal except:",
  answers: ["sodium hypochlorite",
            "ethanol",
            "iodophor",
            "quaternary ammonia without alcohol"],
  correct: 3,
  category: "RHS",
  rationale: "Quaternary ammonia without alcohol is not tuberculocidal. If alcohol is added, it becomes tuberculocidal. Sodium hypochlorite, ethanol, and iodophor are effective against tuberculosis."
},
{
  question: "It is important that you follow standard precautions because you can contract an infectious disease from which of the following surfaces:",
  answers: ["exposed receptors",
            "beam alignment device",
            "PID",
            "all of the above"],
  correct: 3,
  category: "RHS",
  rationale: "Standard precautions should be followed because infectious diseases can be contracted from exposed receptors, beam alignment devices, and PIDs."
},
{
  question: "Any contaminated film that is processed emerges from the processor __________",
  answers: ["sterilized",
            "disinfected",
            "contaminated",
            "decontaminated"],
  correct: 2,
  category: "RHS",
  rationale: "Contaminated films remain contaminated after processing because the chemicals in the processor do not sterilize or disinfect the film."
},
{
  question: "Immersing a contaminated exposed film packet in a disinfecting solution may/will __________",
  answers: ["lighten the image",
            "darken the image",
            "damage the image",
            "have no effect on the image"],
  correct: 3,
  category: "RHS",
  rationale: "Immersing a contaminated film packet in a disinfecting solution can damage the image. It is not recommended to immerse film packets in disinfectant."
},
{
  question: "Which requires a plastic barrier to maintain infection control during the radiographic procedure?",
  answers: ["lead apron",
            "countertop",
            "exposure button",
            "image receptor holding device"],
  correct: 2,
  category: "RHS",
  rationale: "The exposure button requires a plastic barrier to maintain infection control. Lead aprons are disinfected between patients, while countertops may be covered or disinfected."
},
{
  question: "Which can be heat sterilized after use?",
  answers: ["PSP plates",
            "thyroid collar",
            "digital sensors",
            "image receptor holder"],
  correct: 3,
  category: "RHS",
  rationale: "Image receptor holders can be heat sterilized after use. PSP plates and digital sensors are disinfected rather than heat sterilized, as heat can damage them."
},
{
  question: "Which of the following would be used to disinfect the patient treatment area after the radiographic procedure?",
  answers: ["utility gloves",
            "surgical gloves",
            "clean, dry hands",
            "treatment gloves"],
  correct: 0,
  category: "RHS",
  rationale: "Utility gloves are worn during the disinfection of the treatment room. Surgical gloves are not worn during dental radiography procedures. Clean, dry hands are used when removing the lead apron, and treatment gloves are worn during the exposure of radiographs."
},
{
  question: "Which does not require a barrier during the exposure of dental intraoral radiographs?",
  answers: ["PID",
            "film badge",
            "treatment chair",
            "exposure button"],
  correct: 1,
  category: "RHS",
  rationale: "The film badge does not require a barrier during exposure, as it is not directly involved in the imaging procedure. The PID, treatment chair, and exposure button all become contaminated and require barriers."
},
{
  question: "Films removed from the film packet that have not been in a barrier envelope are processed in a daylight loader with __________",
  answers: ["gloved hands",
            "ungloved hands",
            "hands with powder-free gloves",
            "hands with utility gloves"],
  correct: 0,
  category: "RHS",
  rationale: "Films that have not been in a barrier envelope are processed with gloved hands to avoid cross-contamination in the daylight loader."
},
{
  question: "When image receptors are dispensed from the supply area, they should be transported to the radiology room __________.",
  answers: ["on the bracket tray",
            "in the operator's hand",
            "in a paper cup",
            "in the patient chart"],
  correct: 2,
  category: "RHS",
  rationale: "Image receptors should be transported in a paper cup to prevent cross-contamination. Transporting them in the operator's hand or on the bracket tray may lead to contamination."
},
{
  question: "Which level of disinfectant does the CDC recommend for disinfection of a sensor?",
  answers: ["high-level disinfectant",
            "intermediate-level disinfectant",
            "low-level disinfectant",
            "no recommendations are made regarding the disinfectant level"],
  correct: 1,
  category: "RHS",
  rationale: "The CDC recommends the use of an intermediate-level disinfectant for disinfection of digital sensors to ensure proper infection control."
},
{
  question: "Which best describes the function of a plastic barrier cover for a digital radiography sensor?",
  answers: ["The barrier allows the sensor to be reused easily without disinfection.",
            "The barrier cover protects the sensor from chemical erosion.",
            "The barrier keeps the positioning device in line with the top of the sensor.",
            "The barrier protects the sensor from saliva contamination."],
  correct: 3,
  category: "RHS",
  rationale: "The barrier cover is used to protect the digital sensor from saliva contamination, maintaining hygiene during dental procedures."
},
{
  question: "Beam alignment devices must be __________.",
  answers: ["sterilized",
            "disinfected",
            "decontaminated",
            "wiped with alcohol between uses"],
  correct: 1,
  category: "RHS",
  rationale: "Beam alignment devices are classified as semicritical items and must be disinfected between patients to prevent cross-contamination."
},
{
  question: "How should the receptor be placed for exposing a mandibular occlusal image?",
  answers: ["The image receptor is placed parallel to the long axis of the teeth with the white side facing the lingual surface of the teeth.",
            "The image receptor is placed between the occlusal surfaces of the maxillary and mandibular teeth with the white side down, facing the mandibular teeth.",
            "The image receptor is placed parallel to the long axis of the teeth with the colored side facing the lingual surface of the teeth.",
            "The image receptor is placed between the occlusal surfaces of the maxillary and mandibular teeth with the white side facing the maxillary teeth."],
  correct: 1,
  category: "RHS",
  rationale: "For a mandibular occlusal image, the image receptor should be placed between the occlusal surfaces of the maxillary and mandibular teeth with the white side down, facing the mandibular teeth."
},
{
  question: "Which of the following is not true related to automatic processors?",
  answers: ["Rollers are removed at the end of each week; they are cleaned and soaked over the weekend.",
            "Processing solutions are checked each morning before radiographs are run through the processor.",
            "Machines are maintained based on a daily, weekly, and monthly cleaning schedule.",
            "Manufacturer’s instructions are followed related to solution usage."],
  correct: 0,
  category: "RHS",
  rationale: "Rollers are typically cleaned on a routine schedule, but they do not need to be soaked over the weekend. Other statements regarding checking solutions, maintenance schedules, and following manufacturer instructions are true."
},
{
  question: "You are using phosphor plates to take bitewings on a patient. Which of the following does not need to be completed before exposing the images?",
  answers: ["Expose a test image and process in scanner.",
            "Place phosphor side of receptor against black side of protective barrier sleeve.",
            "Check plates for damage prior to use.",
            "Check that machine settings are correct for phosphor plates."],
  correct: 0,
  category: "RHS",
  rationale: "Exposing a test image is not necessary before taking patient images. However, placing the phosphor side correctly in the protective sleeve, checking the plates for damage, and verifying machine settings are important steps."
},
{
  question: "Which statement regarding benefits to automatic processors compared to manual processing is not correct?",
  answers: ["Less time required for processing.",
            "Time and temperature are controlled.",
            "A daylight loader is required.",
            "There is no need for additional space."],
  correct: 2,
  category: "RHS",
  rationale: "A daylight loader is not required for automatic processors, but it may be used for convenience. Other benefits include less time required, controlled time and temperature, and reduced space needs."
},
{
  question: "A contact test should be performed regularly using which of the following?",
  answers: ["phosphor plate",
            "sensor",
            "screen film",
            "all of the above"],
  correct: 3,
  category: "RHS",
  rationale: "A contact test should be performed regularly using phosphor plates, sensors, and screen films to ensure image quality and detect any issues with processing."
},
{
  question: "A step wedge can be used with which of the following?",
  answers: ["film",
            "phosphor plate",
            "sensor",
            "all of the above"],
  correct: 3,
  category: "RHS",
  rationale: "A step wedge can be used with film, phosphor plates, and digital sensors to test the consistency and quality of images produced by radiographic equipment."
},
{
  question: "When the bisecting technique is used, the imaginary angle that is bisected is formed between the long axis of the tooth and the __________.",
  answers: ["long axis of the PID",
            "bite block",
            "plane of the receptor",
            "horizontal axis of the tubehead"],
  correct: 2,
  category: "RHS",
  rationale: "In the bisecting technique, the imaginary angle is formed between the long axis of the tooth and the plane of the receptor. The central ray is directed at 90 degrees to this bisected angle."
},
{
  question: "What is the most common reason to see a completely clear receptor? The receptor was:",
  answers: ["exposed to light",
            "not exposed to x-radiation",
            "exposed backward in the mouth",
            "left in the developer too long"],
  correct: 1,
  category: "RHS",
  rationale: "A completely clear receptor indicates that it was not exposed to x-radiation. If exposed to light or developed backward, there would be other visual distortions."
},
{
  question: "Which of the following pieces of equipment requires heat sterilization before use?",
  answers: ["film",
            "digital sensor",
            "x-ray tubehead",
            "beam alignment devices"],
  correct: 3,
  category: "RHS",
  rationale: "Beam alignment devices are considered semicritical instruments and require heat sterilization between patients. Films, digital sensors, and x-ray tubeheads do not require sterilization."
},
{
  question: "Which component of the x-ray film packet should be recycled?",
  answers: ["developed film",
            "lead foil",
            "black paper",
            "outer package wrapping"],
  correct: 1,
  category: "RHS",
  rationale: "Lead foil from x-ray film packets should be recycled because lead is a hazardous material. The developed film, black paper, and outer package wrapping do not require special recycling."
},
{
  question: "Commercially available barrier envelopes __________.",
  answers: ["protect the film from damage",
            "minimize contamination after exposure of the film",
            "are made of a material that blocks the passage of photons",
            "are made of a material that blocks the passage of electrons"],
  correct: 1,
  category: "RHS",
  rationale: "Barrier envelopes minimize contamination by protecting the film after exposure, reducing the risk of cross-contamination."
},
{
  question: "After each use and before processing, each phosphor plate or dental film must be __________.",
  answers: ["disinfected",
            "dried with a paper towel",
            "placed in a barrier",
            "wiped with alcohol"],
  correct: 0,
  category: "RHS",
  rationale: "Phosphor plates or dental films must be disinfected after use and before processing to prevent contamination."
},
{
  question: "You are reorganizing the office storage areas. Where should you store the boxes of x-ray film?",
  answers: ["on a shelf in the cabinet",
            "in the refrigerator",
            "under the sink with the chemicals",
            "on a shelf in the x-ray room"],
  correct: 0,
  category: "RHS",
  rationale: "X-ray films should be stored in a cool, dry area such as a shelf in the cabinet. Storing them in a refrigerator or near chemicals may damage the films."
},
{
  question: "You are preparing to take dental images on a patient. You discussed with your patient what you will be taking and why the images are needed for treatment. The patient has refused the dental images. You explain to the dentist about the patient’s refusal. What should the dentist do?",
  answers: ["Have the patient sign a waiver and begin treatment.",
            "Change the treatment plan to exclude the images",
            "Refuse to treat the patient if the images are not taken.",
            "Force the patient to have dental images taken."],
  correct: 2,
  category: "RHS",
  rationale: "If the patient refuses necessary images, the dentist may refuse treatment because proper diagnosis cannot be made without the required radiographs."
},
{
  question: "What is occurring inside the x-ray tubehead when you increase the kilovoltage setting on the exposure control panel?",
  answers: ["The speed of the electrons decreases from the cathode to the anode.",
            "The penetrating power of the x-ray beam increases.",
            "The number of x-rays produced is increased.",
            "The speed of the photons from anode to cathode is increased."],
  correct: 1,
  category: "RHS",
  rationale: "Increasing the kilovoltage increases the penetrating power of the x-ray beam, allowing it to penetrate tissues more effectively."
},
{
  question: "Your patient is a large man, on the obese side. What adjustments would you make, if any, to the control panel when exposing dental images?",
  answers: ["Increase the exposure time; leave the kV and the mA the same.",
            "Decrease the exposure time; leave the kV and the mA the same.",
            "Increase the exposure time, kV, and mA.",
            "You do not need to make any adjustments."],
  correct: 0,
  category: "RHS",
  rationale: "To compensate for the increased tissue density in a larger patient, you would increase the exposure time to ensure a clear image."
},
{
  question: "If you want to provide the lowest amount of exposure possible for your patient, which of the following settings should you use?",
  answers: ["70 kV, 6 mA, 0.40 impulses",
            "68 kV, 7 mA, 0.50 impulses",
            "66 kV, 7 mA, 0.60 impulses",
            "65 kV, 8 mA, 0.60 impulses"],
  correct: 0,
  category: "RHS",
  rationale: "The setting with the lowest mA and the fewest impulses will provide the lowest exposure for the patient, which is 70 kV, 6 mA, 0.40 impulses."
},
{
  question: "You noticed that the patient moved just as you pressed the exposure button. What effect will that have on the dental image?",
  answers: ["distortion",
            "alteration in image sharpness",
            "elongation",
            "image magnification"],
  correct: 1,
  category: "RHS",
  rationale: "Patient movement during exposure will result in a loss of sharpness in the image, leading to a blurred or unsharp image."
},
{
  question: "If you decreased exposure time, and left the other exposure factors the same, what impact would this have on your dental image?",
  answers: ["The image would be lighter because the density would increase.",
            "The image would be darker because the density would increase.",
            "The image would be lighter because the density would decrease.",
            "The image would be darker because the density would decrease."],
  correct: 2,
  category: "RHS",
  rationale: "Decreasing exposure time reduces the amount of radiation reaching the receptor, resulting in a lighter image due to decreased density."
},
{
  question: "Which is not considered a critical organ in dental imaging?",
  answers: ["skin",
            "lens of the eye",
            "pituitary gland",
            "bone marrow"],
  correct: 2,
  category: "RHS",
  rationale: "The pituitary gland is not considered a critical organ in dental imaging. Critical organs include the skin, lens of the eye, and bone marrow due to their sensitivity to radiation."
},
{
  question: "If you decreased the mA, and left the other exposure factors the same, what impact would this have on your dental image?",
  answers: ["The image would be lighter because the density would increase.",
            "The image would be darker because the density would increase.",
            "The image would be lighter because the density would decrease.",
            "The image would be darker because the density would decrease."],
  correct: 2,
  category: "RHS",
  rationale: "Decreasing the mA reduces the amount of radiation produced, which results in a lighter image because of decreased density."
},
{
  question: "Which applies to producing dental images on pregnant patients?",
  answers: ["Dental images should be taken only during the third trimester.",
            "Dental images should never be taken on a pregnant patient.",
            "Guidelines are designed to protect all patients; no alterations are required.",
            "Dental images should be taken only during the first trimester."],
  correct: 2,
  category: "RHS",
  rationale: "According to guidelines, there is no need to alter the standard dental radiographic procedures for pregnant patients, as protective measures are already in place for all patients."
},
{
  question: "The operator should clean and disinfect any uncovered areas while wearing __________.",
  answers: ["utility gloves",
            "vinyl gloves",
            "latex gloves",
            "nitrile gloves"],
  correct: 0,
  category: "RHS",
  rationale: "Utility gloves should be worn for cleaning and disinfecting surfaces to prevent contamination and for protection against harsh chemicals."
},
{
  question: "Which is true regarding exposure of radiation on the body?",
  answers: ["The direct theory of radiation suggests that toxins form in the body and cause damage.",
            "The direct theory of radiation suggests that radiation damage occurs because of the high water content in the body.",
            "The indirect theory of radiation suggests that ionizing radiation creates the formation of free radicals.",
            "The indirect theory of radiation injury suggests that damage occurs as a result of ionizing radiation hitting critical areas."],
  correct: 3,
  category: "RHS",
  rationale: "The indirect theory of radiation suggests that ionizing radiation creates free radicals, which can then recombine to form toxins that cause cellular damage."
},
{
  question: "If you decreased the distance, and left the exposure factors the same, what impact would this have on your dental image?",
  answers: ["The image would be lighter because the density would increase.",
            "The image would be darker because the density would increase.",
            "The image would be lighter because the density would decrease.",
            "The image would be darker because the density would decrease."],
  correct: 1,
  category: "RHS",
  rationale: "Decreasing the distance between the x-ray source and the image receptor increases the intensity of the radiation, which results in a darker image because of increased density."
},
{
  question: "Which of the following is recommended by the CDC?",
  answers: ["immersion of film packets in disinfecting solutions",
            "disinfecting sensors with at least a low-level EPA-registered disinfectant",
            "cold-sterilizing noncritical items",
            "gloves worn by the operator"],
  correct: 1,
  category: "RHS",
  rationale: "The CDC recommends disinfecting sensors with an EPA-registered intermediate-level disinfectant to ensure proper infection control."
},
{
  question: "You have a new patient. She is 7 years old, and she has her first molars. Which dental images should you take?",
  answers: ["bitewings",
            "panoramic",
            "occlusal",
            "bitewings and panoramic"],
  correct: 3,
  category: "RHS",
  rationale: "At age 7, with the eruption of first molars, both bitewing and panoramic images are recommended to assess the child's oral development and overall dental health."
},
{
  question: "Tests for tube drift should be performed at which frequency?",
  answers: ["annually",
            "twice annually",
            "every 4 months",
            "It depends on the volume of dental images exposed"],
  correct: 0,
  category: "RHS",
  rationale: "Tube drift testing should be performed annually to ensure the equipment is functioning properly and the tubehead remains stable during exposures."
},
{
  question: "A fresh film test should be exposed __________.",
  answers: ["whenever developer and fixer solutions are changed",
            "whenever developer and fixer solutions are replenished",
            "when a new box of film is opened",
            "once a month"],
  correct: 2,
  category: "RHS",
  rationale: "A fresh film test should be performed whenever a new box of film is opened to ensure the quality of the film."
},
{
  question: "How often should film cassettes be examined?",
  answers: ["annually",
            "twice annually",
            "monthly",
            "it depends on the volume of dental images exposed"],
  correct: 3,
  category: "RHS",
  rationale: "Film cassettes should be examined regularly based on the volume of dental images exposed to ensure proper functioning and avoid image artifacts."
},
{
  question: "The light leak test should be performed at which frequency?",
  answers: ["annually",
            "twice annually",
            "monthly",
            "it depends on the volume of dental images exposed"],
  correct: 0,
  category: "RHS",
  rationale: "The light leak test should be performed annually to ensure that no unwanted light is entering the darkroom, which could affect image quality."
},
{
  question: "Which statement is not correct concerning the exposure sequence for periapical images?",
  answers: ["Anterior images are always exposed before posterior images.",
            "Either anterior or posterior images may be exposed first.",
            "In posterior quadrants, the premolar image is always exposed before the molar image.",
            "When exposing anterior images, work from the patient's right to left in the upper arch, and then work from the left to right in the lower arch."],
  correct: 1,
  category: "RHS",
  rationale: "Anterior images are always exposed before posterior images to ensure patient comfort and minimize movement during posterior exposures."
},
{
  question: "What is the second compartment that the films will enter in an automatic processor?",
  answers: ["fixer",
            "water",
            "developer",
            "drying fan"],
  correct: 0,
  category: "RHS",
  rationale: "In an automatic processor, the second compartment is the fixer, which removes unexposed silver halide crystals from the film emulsion."
},
{
  question: "Which is the proper technique to expose a bitewing image on a patient with mandibular tori?",
  answers: ["Place the receptor on the tori.",
            "Place the receptor on the tongue.",
            "Place the receptor between the tori and the tongue.",
            "Intraoral placement is not recommended on patients who have mandibular tori."],
  correct: 2,
  category: "RHS",
  rationale: "The correct technique for a patient with mandibular tori is to place the receptor between the tori and the tongue to avoid discomfort and ensure a clear image."
},
{
  question: "The thermometer should be placed in which solution of the manual processing tanks?",
  answers: ["fixer",
            "water",
            "developer",
            "water or developer"],
  correct: 2,
  category: "RHS",
  rationale: "The thermometer should be placed in the developer solution, as the temperature of the developer is critical to producing accurate images."
},








{
  question: "Which receptor would provide the most protection against radiation exposure for the patient?",
  answers: ["phosphor plate",
            "D-speed film",
            "F-speed film",
            "digital sensor"],
  correct: 3,
  category: "RHS",
  rationale: "Digital sensors provide the most protection against radiation exposure because they require less radiation to produce an image compared to film or phosphor plates."
},
{
  question: "Which of the following statements is true regarding manual film mounting?",
  answers: ["The raised dot side of the film faces the viewer in a labial mounting method.",
            "The depressed dot side of the film faces the viewer in the lingual mounting method.",
            "The raised dot side of the film faces the viewer in a lingual mounting method.",
            "The depressed dot side of the film faces the viewer in the labial mounting method."],
  correct: 0,
  category: "RHS",
  rationale: "In the labial mounting method, the raised dot on the film is used to orient the film, facing the viewer as if they were looking at the patient."
},
{
  question: "In which two lengths are PIDs typically available?",
  answers: ["6 and 12 inches",
            "12 and 24 inches",
            "8 and 16 inches",
            "12 and 16 inches"],
  correct: 2,
  category: "RHS",
  rationale: "PIDs are typically available in 8-inch and 16-inch lengths, with the longer PID reducing patient exposure to radiation."
},
{
  question: "Which method is used to stabilize the receptor during exposure of an occlusal image?",
  answers: ["stable bite block",
            "hemostat",
            "patient gently biting on the receptor",
            "bitewing tab"],
  correct: 3,
  category: "RHS",
  rationale: "The patient gently biting on the receptor stabilizes it during occlusal imaging, ensuring that it stays in the correct position for the exposure."
},
{
  question: "If the length of the PID is changed from 8 to 12 inches, how does this affect the intensity of the x-ray beam?",
  answers: ["The resultant beam will be one-half as intense",
            "The resultant beam will be one-quarter as intense",
            "The resultant beam will be two times as intense",
            "The resultant beam will be four times as intense"],
  correct: 1,
  category: "RHS",
  rationale: "Increasing the PID length from 8 to 12 inches reduces the intensity of the x-ray beam to one-quarter of its original intensity due to the inverse square law."
},
{
  question: "Which of the following decreases a patient's radiation exposure?",
  answers: ["use of an 8-inch PID rather than a 16-inch PID",
            "use of a circular collimator in place of a rectangular collimator",
            "use of the bisecting technique instead of the paralleling technique",
            "use of a higher kV setting to achieve the same density"],
  correct: 3,
  category: "RHS",
  rationale: "Using a higher kV setting allows for a lower overall exposure time, reducing the patient's exposure to radiation while still achieving the same image density."
},
{
  question: "Commercially available barrier envelopes are used to:",
  answers: ["protect the film from saliva",
            "provide comfort for the patient",
            "minimize contamination in the operatory",
            "minimize contamination in the darkroom"],
  correct: 0,
  category: "RHS",
  rationale: "Barrier envelopes are used to protect the film from contamination, such as saliva, during the imaging process."
},
{
  question: "What is the best way to limit a patient’s radiation exposure?",
  answers: ["Prescribe only what is necessary.",
            "Use the fastest film speed available.",
            "Complete radiographs with no errors.",
            "Ensure the patient wears a lead apron."],
  correct: 0,
  category: "RHS",
  rationale: "The best way to limit radiation exposure is to follow the ALARA principle and prescribe only necessary radiographs."
},
{
  question: "Your 5-year-old patient has been coming regularly to the dental office for the last 2 years. The last set of dental images was taken 6 months ago. He has occlusal decay on #A, #B, #I, and #J, and his teeth are in tight contact. The last time he was in, he had restorations placed on teeth #K and #L. When should you next take dental images?",
  answers: ["today’s appointment",
            "next appointment, because insurance will cover dental images only once a year",
            "next appointment, because the guidelines recommend taking them once a year",
            "in 6–18 months, because the guidelines recommend taking them at 1- to 2-year intervals"],
  correct: 0,
  category: "RHS",
  rationale: "Since the patient has active decay and a history of restorations, dental images should be taken today to monitor the progression of the caries and check for any new decay."
},
{
  question: "Your 6-year-old patient has clinical caries and closed proximal contacts. Which of the following dental images should you take?",
  answers: ["posterior bitewings",
            "seven vertical bitewings",
            "full-mouth series",
            "panoramic"],
  correct: 0,
  category: "RHS",
  rationale: "Posterior bitewing images are recommended to check for caries between the teeth and evaluate the health of the supporting bone."
},
{
  question: "Which of the following position indicating devices exposes a patient to more radiation?",
  answers: ["conical",
            "rectangular 8 inch",
            "circular 8 inch",
            "circular 16 inch"],
  correct: 3,
  category: "RHS",
  rationale: "A circular 16-inch PID exposes a patient to more radiation than a rectangular PID due to its larger surface area, which exposes more tissue."
},
{
  question: "Which is not an example of PPE (personal protective equipment)?",
  answers: ["mask",
            "gloves",
            "thyroid collar",
            "protective eyewear"],
  correct: 2,
  category: "RHS",
  rationale: "The thyroid collar is worn by the patient during radiographs to protect the thyroid gland, but it is not considered PPE for the dental healthcare provider."
},
{
  question: "Your adult recall patient has no clinical caries and is not at increased risk for caries. He had bitewing images taken 1 year ago. When should you take bitewing images of your patient?",
  answers: ["at this appointment",
            "at his appointment in 6 months",
            "at his appointment in 1 year",
            "24–36 months from his last bitewing images"],
  correct: 3,
  category: "RHS",
  rationale: "For adult recall patients without clinical caries or risk factors, bitewing images are recommended every 24–36 months according to guidelines."
},
{
  question: "What is the purpose of a collimator?",
  answers: ["filter out long wavelengths",
            "confine the beam",
            "restrict the size and shape of the beam",
            "filter out short wavelengths"],
  correct: 2,
  category: "RHS",
  rationale: "A collimator is used to restrict the size and shape of the x-ray beam, which reduces the patient's exposure to radiation and improves image quality."
},
{
  question: "What is the purpose of the receptor-holding device?",
  answers: ["stabilize receptor position in the mouth and reduce the chance for movement",
            "aid with paralleling technique but is not required",
            "easier for the patient to bite",
            "increased patient comfort"],
  correct: 0,
  category: "RHS",
  rationale: "The receptor-holding device is used to stabilize the receptor in the patient's mouth, reducing movement and ensuring proper positioning during the radiographic exposure."
},
{
  question: "Which device/method provides patients the best protection against radiation exposure?",
  answers: ["long PID",
            "beam alignment device",
            "proper operator technique",
            "sensor instead of a phosphor plate"],
  correct: 2,
  category: "RHS",
  rationale: "Proper operator technique, including correct positioning and use of protective measures, provides the best protection against radiation exposure for patients."
},
{
  question: "Which type of contrast would best help detect dental caries in a patient?",
  answers: ["low contrast with few shades of gray",
            "low contrast with many shades of gray",
            "high contrast with few shades of gray",
            "high contrast with many shades of gray"],
  correct: 2,
  category: "RHS",
  rationale: "High contrast with few shades of gray is best for detecting dental caries as it provides clear differentiation between decay and healthy tooth structure."
},
{
  question: "You have placed the sensor in your patient's mouth, you have positioned the PID, and you are ready to press the control button. What will exit the PID?",
  answers: ["Compton scatter",
            "coherent scatter",
            "secondary radiation",
            "primary beam"],
  correct: 3,
  category: "RHS",
  rationale: "The primary beam is what exits the PID and is responsible for creating the radiographic image."
},
{
  question: "An important way for the operator to avoid primary beam exposure is to:",
  answers: ["stand 4 feet behind the patient",
            "position himself or herself at a 90- to 135-degree angle to the primary beam",
            "position himself or herself at a 30- to 45-degree angle from the primary beam",
            "wear protective covering"],
  correct: 1,
  category: "RHS",
  rationale: "Positioning oneself at a 90- to 135-degree angle to the primary beam is the safest position to avoid exposure to scattered radiation."
},
{
  question: "You notice that the roots of your maxillary anterior images are consistently too long and seem out of proportion. What is the error, and how should you correct it?",
  answers: ["Foreshortening; the receptor needs to be parallel to the teeth, and the x-ray beam needs to be perpendicular to both.",
            "Magnification; the receptor needs to be parallel to the teeth, and the x-ray beam needs to be perpendicular to both.",
            "Elongation; the receptor needs to be parallel to the teeth, and the x-ray beam needs to be perpendicular to both.",
            "Magnification; the receptor needs to be closer to the tooth, or the target–image receptor distance needs to be increased."],
  correct: 3,
  category: "RHS",
  rationale: "Elongation occurs when the x-ray beam is not perpendicular to the image receptor and the teeth. Correcting this error requires proper angulation."
},
{
  question: "Your last patient was an average-size man. Your next patient is a slender 12-year-old girl. What adjustment would you make, if any, to the control panel when exposing dental images?",
  answers: ["Increase the exposure time; leave the kV and the mA the same.",
            "Decrease the exposure time; leave the kV and the mA the same.",
            "Decrease the exposure time, kV, and mA.",
            "You do not need to make any adjustments."],
  correct: 1,
  category: "RHS",
  rationale: "For a smaller, younger patient, the exposure time is typically decreased to account for their smaller size and lower density of tissues."
},
{
  question: "Which of the following components of the tubehead protects the patient by removing long-wavelength, low-energy x-rays?",
  answers: ["tungsten target",
            "filter",
            "lead-lined PID",
            "collimator"],
  correct: 1,
  category: "RHS",
  rationale: "The filter removes long-wavelength, low-energy x-rays from the beam, which would not contribute to the image and would only increase patient exposure."
},
{
  question: "How often should processing solutions be changed?",
  answers: ["biweekly",
            "every 3–4 weeks",
            "every 5–7 weeks",
            "when patient images appear too light"],
  correct: 1,
  category: "RHS",
  rationale: "Processing solutions should be changed every 3–4 weeks to maintain optimal image quality and avoid contamination."
},
{
  question: "Correct solution maintenance for manual film processing includes__________.",
  answers: ["diluting fixer to keep the level at optimal levels",
            "never adding new solutions to the developer or fixer until they are ready to be completely changed",
            "changing the developer solution if the image appears yellow",
            "changing both developer and fixer at the same time"],
  correct: 3,
  category: "RHS",
  rationale: "To maintain the best quality of images, both the developer and fixer should be changed simultaneously."
},
{
  question: "Which statement is true concerning the anode?",
  answers: ["It carries a negative charge.",
            "Electrons are generated at the anode.",
            "It converts the bombarding electrons into x-ray photons.",
            "It consists of a tungsten filament in a focusing cup."],
  correct: 3,
  category: "RHS",
  rationale: "The anode converts bombarding electrons into x-ray photons, producing the radiation necessary for imaging."
},
{
  question: "The quality administration procedures within the quality assurance plan should include which of the following basic elements?",
  answers: ["description of the plan with assignment of duties",
            "collimation-beam alignment test results",
            "kilovoltage test",
            "tubehead stability test"],
  correct: 0,
  category: "RHS",
  rationale: "A thorough quality administration plan includes a description of responsibilities and assignments to ensure tasks are properly managed."
},
{
  question: "Adjusting the chair and headrest, placing the lead apron on a patient, and removing metal objects from the head and neck area of a patient should be completed by the dental professional __________?",
  answers: ["before washing hands, prior to gloving",
            "after gloving",
            "after gloving and over gloving with vinyl gloves",
            "while wearing utility gloves"],
  correct: 0,
  category: "RHS",
  rationale: "All positioning and adjustments should be made before gloving to ensure that gloves remain sterile for patient protection."
},
{
  question: "The optimal storage temperature for dental film is __________:",
  answers: ["30°–45°F",
            "50°–70°F",
            "70°–80°F",
            "80°–85°F"],
  correct: 1,
  category: "RHS",
  rationale: "The optimal storage temperature for dental film is between 50° and 70°F to prevent damage to the film and ensure image quality."
},
{
  question: "You are assisting the dental hygienist. She is performing the oral assessment and would like to compare dental images to the probing depths. Which type of contrast would provide the best image for this purpose?",
  answers: ["high contrast; few shades of gray",
            "high contrast; many shades of gray",
            "low contrast; few shades of gray",
            "low contrast; many shades of gray"],
  correct: 3,
  category: "RHS",
  rationale: "Low contrast with many shades of gray provides the best image for comparing dental images to periodontal probing depths, as it allows for more detailed differentiation between tissues."
},
{
  question: "Which statement is correct concerning the use of gloves during a dental imaging procedure?",
  answers: ["Gloves must be washed prior to use to remove powder residue.",
            "Gloves must be sterile for all procedures.",
            "New gloves must be worn for each patient.",
            "Gloves must be worn only when contact with saliva is anticipated."],
  correct: 2,
  category: "RHS",
  rationale: "New gloves must be worn for each patient to prevent cross-contamination and maintain proper infection control during imaging procedures."
},
{
  question: "Which of the following persons should perform the calibration of dental x-ray machines?",
  answers: ["dentist",
            "dental hygienist",
            "dental assistant",
            "qualified technician"],
  correct: 3,
  category: "RHS",
  rationale: "Calibration of dental x-ray machines must be performed by a qualified technician to ensure accuracy and safety."
},
{
  question: "A lead apron is used when performing which of the following?",
  answers: ["panoramic image",
            "full-mouth series",
            "periapical image",
            "all of the above"],
  correct: 3,
  category: "RHS",
  rationale: "A lead apron is used for all types of dental radiographs, including panoramic, full-mouth series, and periapical images, to protect the patient from unnecessary radiation exposure."
},
{
  question: "You are performing a quality assurance test on your stored film. The unexposed, properly stored, fresh film will appear __________ when processed.",
  answers: ["clear with a slight blue tint",
            "cloudy with a blue tint",
            "fogged",
            "totally black"],
  correct: 0,
  category: "RHS",
  rationale: "Fresh film, when processed, should appear clear with a slight blue tint, indicating that it has been properly stored and is not expired."
},
{
  question: "Unexposed film that has not been stored properly or is out of date will appear ________ when processed.",
  answers: ["clear with a slight blue tint",
            "cloudy with a blue tint",
            "fogged",
            "totally black"],
  correct: 2,
  category: "RHS",
  rationale: "Film that has been improperly stored or is expired will appear fogged when processed."
},
{
  question: "When functioning properly, a view box will emit a __________.",
  answers: ["uniform, subdued light",
            "brilliant light from the center portion of the viewbox",
            "soft flickering light",
            "uniform bright light"],
  correct: 0,
  category: "RHS",
  rationale: "A properly functioning view box should emit a uniform, subdued light to provide optimal conditions for viewing dental radiographs."
},
{
  question: "Who is responsible for the diagnostic quality of dental images?",
  answers: ["the dental professional exposing the receptors",
            "the dentist",
            "the dental assistant",
            "the hazard communication officer"],
  correct: 0,
  category: "RHS",
  rationale: "The dental professional who is exposing the radiographic receptors is responsible for ensuring the diagnostic quality of the images."
},
{
  question: "In a dental practice in which many HIV-positive patients are treated, the film rollers in the automatic processor should be __________",
  answers: ["scrubbed with an abrasive cleaner every day",
            "autoclaved every day",
            "disinfected after every use",
            "treated in the usual accepted manner"],
  correct: 3,
  category: "RHS",
  rationale: "In dental practices treating HIV-positive patients, the film rollers should be treated in the usual accepted manner as standard precautions apply to all patients."
},
{
  question: "Dental x-ray equipment is classified as __________.",
  answers: ["critical instruments",
            "semicritical instruments",
            "noncritical instruments",
            "semicritical and noncritical instruments"],
  correct: 2,
  category: "RHS",
  rationale: "Dental x-ray equipment is considered noncritical as it does not come into contact with mucous membranes or penetrate tissue."
},
{
  question: "Which of the following steps should be followed when exposing a panoramic image?",
  answers: ["Place lead apron with thyroid collar on patient and secure it.",
            "Instruct patient to place posterior teeth in the deep groove on bite block and bite firmly.",
            "Radiodense objects may remain in place from the head and neck area for the duration of exposure",
            "Instruct patient to close lips on bite block, to swallow once, then place tongue against roof of mouth, and maintain that position during exposure"],
  correct: 3,
  category: "RHS",
  rationale: "The patient must close their lips, swallow, and place the tongue against the roof of the mouth to ensure proper image quality during panoramic exposure."
},
{
  question: "Which is a correct statement concerning disinfection procedures for the darkroom?",
  answers: ["Countertops and areas touched by gloved hands must be disinfected.",
            "Countertops do not need to be disinfected, because aerosolization does not occur during dental x-ray film processing.",
            "Countertops must be covered with a barrier before each clinical use.",
            "A high-level disinfectant is required to disinfect the area surrounding the processor."],
  correct: 0,
  category: "RHS",
  rationale: "Countertops and areas touched by gloved hands in the darkroom should be disinfected to prevent cross-contamination."
},
{
  question: "EPA-registered chemical germicides labeled as hospital disinfectants are:",
  answers: ["classified as high-level disinfectants",
            "classified as intermediate-level disinfectants",
            "classified as low-level disinfectants",
            "not designated a disinfectant level"],
  correct: 2,
  category: "RHS",
  rationale: "EPA-registered chemical germicides labeled as hospital disinfectants are classified as low-level disinfectants."
},
{
  question: "Why does digital imaging require less radiation than traditional film-based radiography?",
  answers: ["Sensor is more sensitive to x-radiation.",
            "Images are instantly viewed on the computer.",
            "Images may be enhanced with density and contrast controls.",
            "Computer software is designed to eliminate common placement errors."],
  correct: 0,
  category: "RHS",
  rationale: "Digital sensors are more sensitive to x-radiation, allowing for lower radiation exposure compared to traditional film."
},
{
  question: "Following an exposure, beam alignment devices are __________ using __________ hands.",
  answers: ["disinfected; ungloved",
            "disinfected; gloved",
            "prepared for sterilization; ungloved",
            "prepared for sterilization; gloved"],
  correct: 1,
  category: "RHS",
  rationale: "Beam alignment devices are disinfected after exposure using gloved hands to maintain infection control."
},
{
  question: "What is the function of intensifying screens used in extraoral radiography?",
  answers: ["increase sharpness of image",
            "decrease magnification of image",
            "help patient remain still during exposure.",
            "decrease patient’s exposure to radiation"],
  correct: 3,
  category: "RHS",
  rationale: "Intensifying screens decrease the patient's exposure to radiation by reducing the amount of x-rays needed to produce an image."
},
{
  question: "All of the following are examples of inherent filtration, except:",
  answers: ["aluminum filter",
            "leaded glass window",
            "insulating oil",
            "tubehead seal"],
  correct: 0,
  category: "RHS",
  rationale: "Inherent filtration refers to materials such as the leaded glass window, insulating oil, and tubehead seal, while the aluminum filter is added filtration."
},

{
  question: "Which choice describes infection control protocol for an interrupted dental imaging procedure?",
  answers: ["removing gloves, and upon return, regloving with the same gloves",
            "donning overgloves, and upon return, removing the overgloves",
            "removing gloves, washing hands, and upon return, washing hands and regloving with new gloves",
            "removing gloves, washing hands, and upon return, washing hands and regloving with the same gloves"],
  correct: 2,
  category: "RHS",
  rationale: "If a dental imaging procedure is interrupted, gloves must be removed, hands washed, and upon return, hands must be washed again and new gloves should be worn. Reusing the same gloves compromises infection control."
},
{
  question: "Image receptors that have been removed from barrier envelopes are processed with __________.",
  answers: ["gloved hands",
            "ungloved hands",
            "powder-free gloves",
            "utility gloves"],
  correct: 0,
  category: "RHS",
  rationale: "Image receptors that have been removed from barrier envelopes are processed with gloved hands to avoid cross-contamination and maintain infection control during handling."
},

//1
{
  "question": "(1) All ionizing radiations cause damage to living tissues. (2) Although very little radiation is used in dentistry, damage to the cells does occur.",
  "answers": [
    "Both statements are true.",
    "Both statements are false.",
    "The first statement is true; the second statement is false.",
    "The first statement is false; the second statement is true."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Both statements are true. Ionizing radiation can cause cellular damage, and even small doses used in dentistry can potentially affect cells."
},

//2
{
  "question": "What specific mechanism of radiation injury may result in the formation of hydrogen peroxide when x-ray energy is absorbed by patients?",
  "answers": [
    "An ejected high-speed electron may interact with other atoms within absorbing tissues.",
    "Free radical formation created by the ionization of water may occur.",
    "Unequal charge distribution may result in negative electrical potential.",
    "Creation of a magnetic field may cause polarization."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Free radical formation created by the ionization of water can result in the formation of hydrogen peroxide, which can be toxic to cells."
},

//3
{
  "question": "Which of the following statements is true regarding the direct theory of radiation injury?",
  "answers": [
    "It involves absorption of an x-ray photon by water within a cell.",
    "It involves the formation of toxins that damage the cell.",
    "It involves damage to the critical areas of a cell through direct contact with the x-ray photon.",
    "It involves the formation of free radicals."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "The direct theory of radiation injury suggests that x-ray photons directly strike critical areas like DNA, causing damage."
},

//4
{
  "question": "The indirect theory proposes that",
  "answers": [
    "toxins are created from the formation of free radicals.",
    "ionizing radiation strikes critical areas within cells.",
    "direct injuries occur more frequently than indirect injuries.",
    "changes occur to the deoxyribonucleic acid (DNA) of a cell."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "The indirect theory suggests that free radicals created by ionizing radiation combine to form toxins, causing cell damage."
},

//5
{
  "question": "According to the dose-response curve, when dose and damage are plotted on a graph, a ____________ relationship is seen.",
  "answers": [
    "nonlinear, nonthreshold",
    "linear, nonthreshold",
    "nonlinear, threshold",
    "linear, threshold"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "A linear, nonthreshold relationship suggests that any amount of radiation exposure causes some level of damage to tissues."
},

//6
{
  "question": "A nonthreshold dose-response curve suggests that",
  "answers": [
    "radiation exposure below the threshold will not damage tissues.",
    "radiation exposure below the threshold is safe for living tissue.",
    "radiation exposure above the threshold amount causes some damage to tissues.",
    "radiation exposure, no matter how small, causes damage to living tissue."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "In a nonthreshold dose-response curve, any exposure to radiation, regardless of dose, is considered to cause damage to living tissue."
},

//7
{
  "question": "Stochastic biologic effects from radiation",
  "answers": [
    "are directly related to exposure and effect.",
    "occur as a result of exposure, but severity is not determined by dose.",
    "have a dose threshold.",
    "cause significant damage to cell or cell death."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Stochastic effects occur due to radiation exposure, but the severity of the effects does not depend on the dose received."
},

//8
{
  "question": "Which of the following is an example of stochastic effects?",
  "answers": [
    "Erythema",
    "Cancer",
    "Hair loss",
    "Radiation sickness"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Cancer is a stochastic effect because it results from radiation exposure, but the severity is not dependent on the dose."
},

//9
{
  "question": "Your patient was out in the hot, bright sun yesterday. While in the sun she began experiencing pain and noticed her skin had turned bright red. Shortly after arriving home, she began to experience chills, nausea, severe pain, and blistering. Why would your patient experience the symptoms so quickly?",
  "answers": [
    "The latent period was decreased by the increased dose and dose rate.",
    "The latent period was increased by the increased dose and dose rate.",
    "The latent period was decreased by the increased area of tissue irradiated and the number of sensitive cells.",
    "The latent period was not affected."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "A higher dose and dose rate decrease the latent period, leading to quicker onset of symptoms like those your patient experienced."
},

//10
{
  "question": "Cellular injuries following the latent period may include (1) cell death, (2) cessation of mitotic activity, and/or (3) abnormal mitotic activity.",
  "answers": [
    "1, 2, 3",
    "1, 2",
    "1, 3",
    "1 only"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "After the latent period, cellular injuries may result in cell death, cessation of mitotic activity, or abnormal mitotic activity."
},

//11
{
  "question": "__________ refers to the total amount of radiation that is received or absorbed.",
  "answers": [
    "Total dose",
    "Dose rate",
    "Amount of tissue irradiated",
    "Cell sensitivity"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Total dose refers to the overall amount of radiation absorbed by tissues."
},

//12
{
  "question": "(1) More radiation damage takes place with high dose rates (2) because a rapid delivery of radiation does not allow time for cellular damage to be repaired.",
  "answers": [
    "Both statements are true.",
    "Both statements are false.",
    "The first statement is true; the second statement is false.",
    "The first statement is false; the second statement is true."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Both statements are true. Higher dose rates do not allow cells to repair damage, leading to more tissue damage."
},

//13
{
  "question": "Which types of cells are more sensitive to radiation: (1) rapidly dividing, (2) slowly dividing, (3) young, and/or (4) old?",
  "answers": [
    "1 and 3",
    "1 and 4",
    "2 and 3",
    "2 and 4"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Cells that divide rapidly and are young are more sensitive to radiation."
},

//14
{
  "question": "Which of the following is associated with long-term radiation effects?",
  "answers": [
    "Symptoms include diarrhea, hair loss, and hemorrhage.",
    "Small amounts of radiation absorbed over a long period.",
    "Acute radiation syndrome.",
    "The injury period in the sequence of radiation injury is seen within minutes, days, or weeks of radiation exposure."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Long-term radiation effects result from small amounts of radiation absorbed over extended periods."
},

//15
{
  "question": "Which of the following is a sign or symptom of acute radiation syndrome (ARS)?",
  "answers": [
    "Genetic defects",
    "Birth abnormalities",
    "Hair loss",
    "Cancer"
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Hair loss is one of the symptoms of acute radiation syndrome, which occurs after exposure to high doses of radiation."
},

//16
{
  "question": "Which of the following statements is true of somatic effects of irradiation?",
  "answers": [
    "Changes are not transmitted to future generations.",
    "Changes are in the genetic cells of the individual.",
    "Mutations occur that affect the health of offspring.",
    "Damage cannot be repaired."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Somatic effects affect the irradiated individual, but these changes are not passed on to future generations."
},

//17
{
  "question": "Which of the following cells would be the most sensitive to x-rays?",
  "answers": [
    "Nerve",
    "Bone",
    "Muscle",
    "Blood"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Blood cells are among the most sensitive to x-rays because they divide rapidly and have a high mitotic rate."
},

//18
{
  "question": "Which of the following is the least sensitive to x-rays?",
  "answers": [
    "Bone marrow",
    "Salivary glands",
    "Lymphoid tissue",
    "Intestines"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Salivary glands are less sensitive to radiation compared to other tissues such as bone marrow and intestines."
},

//19
{
  "question": "Precautions should be taken during dental imaging procedures to which of the following critical organs in the head and neck region? (1) skin, (2) thyroid gland, (3) lens of the eye, and (4) bone marrow",
  "answers": [
    "1, 2, 3, 4",
    "1, 2, 3",
    "1, 2, 4",
    "2, 4"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Precautions should be taken to protect the skin, thyroid gland, and lens of the eye during dental imaging."
},

//20
{
  "question": "The traditional unit of dose is called",
  "answers": [
    "the roentgen (R).",
    "the radiation absorbed dose (rad).",
    "the roentgen equivalent in man (rem).",
    "the gray (Gy)."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "The traditional unit of dose is the radiation absorbed dose (rad)."
},
//21
{
  "question": "One gray is equivalent to ______ rad(s).",
  "answers": [
    "1",
    "10",
    "100",
    "1000"
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "One gray is equivalent to 100 rads. The gray is the SI unit for measuring absorbed radiation dose."
},

//22
{
  "question": "The SI equivalent of the rem is",
  "answers": [
    "the rad.",
    "the gray.",
    "the sievert.",
    "the roentgen."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "The sievert (Sv) is the SI equivalent of the rem, used for measuring radiation dose equivalent."
},

//23
{
  "question": "You could be exposed to each of these radiation sources in your daily activities. Which of these sources is human-made?",
  "answers": [
    "Radon gas",
    "Atomic fallout",
    "Terrestrial radiation",
    "Radioactive potassium"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Atomic fallout is a human-made source of radiation, while radon gas, terrestrial radiation, and radioactive potassium are natural sources."
},

//24
{
  "question": "Uranium is an example of __________ radiation.",
  "answers": [
    "terrestrial",
    "cosmic",
    "artificial",
    "internal"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Uranium is an example of terrestrial radiation, which comes from radioactive materials in the Earth's crust."
},

//25
{
  "question": "__________ is/are the single largest contributor to artificial radiation exposure (0.00053 Sv/year).",
  "answers": [
    "Consumer products",
    "Medical radiation",
    "Fallout from atomic weapons",
    "The nuclear fuel cycle"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Medical radiation, including x-rays and radiation therapy, is the largest contributor to artificial radiation exposure."
},

//26
{
  "question": "Which of the following statements is true of the average dose of background radiation received by an individual in the United States?",
  "answers": [
    "The average dose of background radiation a person living in the United States receives each year is 6.2 mSv.",
    "Geographic areas at higher elevations are associated with increased amounts of cosmic radiation.",
    "Geographic areas that contain more radioactive materials are associated with increased amounts of cosmic radiation.",
    "A wood home has a higher natural radiation level than a brick home."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Higher elevations are associated with increased cosmic radiation. Background radiation averages around 3.1 mSv per year (excluding medical sources), and brick homes have a slightly higher natural radiation level than wood homes."
},

//27
{
  "question": "The potential risk of dental radiography inducing a fatal cancer in an individual is about _________ the risk of a person developing cancer spontaneously.",
  "answers": [
    "1/10",
    "1/100",
    "1/1000",
    "1/1,000,000"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "The risk of dental radiography inducing a fatal cancer is about 1 in 1,000,000, which is much lower than the spontaneous risk of cancer."
},

//28
{
  "question": "A 1 in 1 million risk of a fatal outcome is associated with which of the following activities?",
  "answers": [
    "Riding 10 miles on a bike",
    "Riding 300 miles in an auto",
    "Riding 1000 miles in an airplane",
    "All three of the above activities"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "A 1 in 1 million risk of a fatal outcome is associated with riding 10 miles on a bike, 300 miles in an auto, or 1000 miles in an airplane."
},

//29
{
  "question": "Risk estimates suggest (1) that death is more likely to occur from common activities than from dental imaging procedures and (2) that cancer is much more likely to be unrelated to dental imaging radiation exposure.",
  "answers": [
    "Both statements are true.",
    "Both statements are false.",
    "The first statement is true; the second statement is false.",
    "The first statement is false; the second statement is true."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Both statements are true. The risk of death from everyday activities is higher than from dental imaging procedures, and most cancers are unrelated to dental imaging radiation."
},

//30
{
  "question": "The use of F-speed film instead of D-speed film reduces the absorbed dose by ____%.",
  "answers": [
    "10",
    "25",
    "50",
    "60"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "The use of F-speed film reduces radiation exposure by up to 60% compared to D-speed film."
},

//31
{
  "question": "Your patient is concerned about radiation exposure. Which of the following explanations would you give to your patient to help calm her concerns?",
  "answers": [
    "I will be using a digital sensor; this will reduce x-ray exposure by 30% over the use of conventional film.",
    "I am using this collimator attachment, which will decrease the x-ray dose you receive by 60% to 70%.",
    "I will be using the bisecting technique for receptor placement, which will reduce exposure.",
    "A sign of excessive radiation exposure to the skin is reddening or erythema. I would have to take more than 30 exposures using film, not digital, during a 14-day period to cause reddening. I will only be taking 20 digital x-rays."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Using a collimator can reduce a patient's x-ray dose by 60% to 70%, which helps alleviate concerns about radiation exposure."
},

//32
{
  "question": "Which of the following combinations will result in the lowest absorbed dose for the patient from a 20-film series of dental radiographs?",
  "answers": [
    "Round collimation with digital sensor",
    "Rectangular collimation with digital sensor",
    "Round collimation with F-speed film",
    "Rectangular collimation with F-speed film"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Rectangular collimation with a digital sensor provides the lowest absorbed dose to the patient by minimizing scatter radiation."
},

//33
{
  "question": "Your patient is receiving radiation treatments for breast cancer. She reports having a burning sore throat and great difficulty swallowing. Which stage of the radiation injury sequence is your patient in?",
  "answers": [
    "Injury",
    "Recovery",
    "Latent",
    "Cumulative effects"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "The patient is in the injury stage, where symptoms of radiation exposure, such as burning and difficulty swallowing, are experienced."
},

//34
{
  "question": "Your patient is concerned about being exposed to dental x-rays. Which of the following could you tell your patient to alleviate her fears?",
  "answers": [
    "We take x-rays once a year, it is safe, and that is all your insurance will pay for.",
    "Your risk of getting cancer from dental x-rays is only 2 times greater than getting cancer spontaneously.",
    "The risks from dental imaging are not significantly greater than the risks of other everyday activities in modern life.",
    "Three fourths of the radiation exposure you will have throughout your life will come from background radiation."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Telling the patient that the risks from dental imaging are comparable to other everyday activities can help reduce fear of radiation exposure."
},

//35
{
  "question": "Explain to your patient the steps, in order, in the formation of hydrogen peroxide, a toxin that will cause damage to living tissues.",
  "answers": [
    "1. Free radicals combine\n2. Free radical formation\n3. Cellular dysfunction and biologic damage\n4. X-ray photons are absorbed by water",
    "4. X-ray photons are absorbed by water\n2. Free radical formation\n1. Free radicals combine\n3. Cellular dysfunction and biologic damage",
    "2. Free radical formation\n1. Free radicals combine\n4. X-ray photons are absorbed by water\n3. Cellular dysfunction and biologic damage",
    "2. Free radical formation\n4. X-ray photons are absorbed by water\n1. Free radicals combine\n3. Cellular dysfunction and biologic damage"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "The process begins with x-ray photons being absorbed by water, leading to free radical formation, combination of free radicals, and eventual cellular damage."
},

//36
{
  "question": "The bombing at Nagasaki and Hiroshima took place in 1945; an increase in the incidence of cancer was noted in 1956. Which effects apply to the cancer incidence?",
  "answers": [
    "Short-term, somatic",
    "Long-term, somatic",
    "Short-term, genetic",
    "Long-term, genetic"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "The cancer increase noted in 1956 is an example of long-term, somatic effects of radiation."
},
//1
{
  "question": "Which of the following should you do prior to taking x-rays to protect your patient from radiation exposure?",
  "answers": [
    "Proper film processing",
    "Proper prescribing of radiographs",
    "A lead apron",
    "A thyroid collar"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Proper prescribing of radiographs reduces unnecessary radiation exposure to patients."
},

//2
{
  "question": "The “Guidelines for Prescribing Dental Radiographs” state that",
  "answers": [
    "Dentulous adult recall patients at increased risk for caries should have posterior bite-wing examinations at 12- to 24-month intervals.",
    "X-rays are not taken on patients who are pregnant unless absolutely necessary.",
    "Edentulous adults should have posterior bite-wing examinations at 12- to 36-month intervals.",
    "Dentulous adult recall patients who are not at increased risk for caries should have posterior bite-wing examinations at 24- to 36-month intervals."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Dentulous adult recall patients who are not at increased risk for caries should have posterior bite-wing examinations at 24- to 36-month intervals."
},

//3
{
  "question": "Inherent filtration in the dental x-ray tubehead",
  "answers": [
    "Includes filtration that takes place when the primary beam passes through the glass window of the x-ray tube, the insulating oil, and the tubehead seal.",
    "Includes the placement of aluminum discs in the path of the x-ray beam between the collimator and the tubehead seal.",
    "Alone meets the standards regulated by state and federal law.",
    "Is equivalent to approximately 5.0 mm of aluminum."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Inherent filtration includes the filtration provided by the x-ray tubehead components such as the glass window, insulating oil, and tubehead seal."
},

//4
{
  "question": "Added filtration in the dental x-ray tubehead",
  "answers": [
    "Refers to the placement of tungsten discs in the path of the x-ray beam between the collimator and the tubehead seal.",
    "Filters out shorter-wavelength x-rays from the x-ray beam.",
    "Results in a lower-energy beam.",
    "Results in a more penetrating useful beam."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Added filtration removes lower-energy x-rays, resulting in a more penetrating and useful beam."
},

//5
{
  "question": "State and federal laws require that dental x-ray machines operating above 70 kVp have a minimum total (inherent plus added filtration) of ____ mm of aluminum filtration.",
  "answers": [
    "1.5",
    "2.0",
    "2.5",
    "5.0"
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Dental x-ray machines operating above 70 kVp require a minimum total filtration of 2.5 mm of aluminum."
},

//6
{
  "question": "The collimator ____________.",
  "answers": [
    "Is always round",
    "Restricts the size and shape of the x-ray beam",
    "Is a solid piece of aluminum",
    "Is fitted within the copper stem beneath the molybdenum cup"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "The collimator restricts the size and shape of the x-ray beam, reducing patient exposure."
},

//7
{
  "question": "A circular collimator produces a cone-shaped beam that is __________ inch(es) in diameter.",
  "answers": [
    "<1",
    "1.25",
    "2.75",
    "5.0"
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "A circular collimator produces a cone-shaped beam with a diameter of 2.75 inches."
},

//8
{
  "question": "A rectangular collimator",
  "answers": [
    "Restricts the beam 3 times more than a circular collimator.",
    "Restricts the beam less than a circular collimator.",
    "Decreases patient exposure considerably.",
    "Is considerably larger than a size 2 intraoral receptor."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "A rectangular collimator reduces patient exposure by limiting the beam to a smaller area."
},

//9
{
  "question": "Which of the following types of position-indicating devices (PIDs) produce excess scatter radiation?",
  "answers": [
    "Rectangular",
    "Conical",
    "Round",
    "Square"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Conical PIDs are known to produce excess scatter radiation and are not recommended."
},

//10
{
  "question": "Which type of PID would be most effective in reducing patient exposure?",
  "answers": [
    "Conical",
    "A 16-inch round PID",
    "An 8-inch rectangular PID",
    "A 16-inch rectangular PID"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "A 16-inch rectangular PID is the most effective in reducing patient exposure due to its focused beam."
},

//11
{
  "question": "The thyroid collar",
  "answers": [
    "Is recommended for all intraoral exposures.",
    "Is recommended for all extraoral exposures.",
    "Is placed over the patient’s chest and lap and extends to protect the thyroid.",
    "Is recommended for both intraoral and extraoral exposures."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "The thyroid collar is recommended for all intraoral exposures to protect the thyroid gland."
},

//12
{
  "question": "The lead apron",
  "answers": [
    "Is recommended for intraoral exposures.",
    "Is not recommended for extraoral exposures.",
    "Is an option; use is not mandated by any state or federal law.",
    "Is used to protect the thyroid gland."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "The lead apron is recommended for all intraoral exposures to protect the patient from scatter radiation."
},

//13
{
  "question": "____-speed film is currently the fastest intraoral film available.",
  "answers": [
    "D",
    "E",
    "F",
    "G"
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "F-speed film is currently the fastest intraoral film available, reducing patient exposure to radiation."
},

//14
{
  "question": "On some dental x-ray machines, only the ____________ can be altered; the other parameters are preset by the manufacturer.",
  "answers": [
    "Kilovoltage",
    "Exposure time",
    "PID length",
    "Milliamperage"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "On some machines, only the exposure time can be adjusted, while other factors are preset."
},

//15
{
  "question": "Which of the following can you do after x-ray receptor exposure to reduce(s) the amount of x-radiation your patient receives?",
  "answers": [
    "Proper placement of the lead apron",
    "Proper image retrieval",
    "Proper instrument technique",
    "Selecting proper exposure settings"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Selecting proper exposure settings can reduce the amount of x-radiation a patient receives."
},

//16
{
  "question": "The primary dictum of operator protection guidelines is that the operator must",
  "answers": [
    "Remain in the room with the patient while the receptor is being exposed.",
    "Avoid the primary beam.",
    "Hold the receptor in the patient’s mouth with their own finger.",
    "Hold the tubehead during x-ray exposure."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Operators must avoid the primary beam at all times for safety."
},

//17
{
  "question": "In order to avoid the primary beam while taking dental images, you should stand at a ____-degree to ____-degree angle to the beam.",
  "answers": [
    "0; 45",
    "45; 90",
    "90; 135",
    "135; 180"
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Standing at a 90- to 135-degree angle to the beam minimizes exposure to the primary beam."
},

//18
{
  "question": "Radiation monitoring can be used to protect the dental radiographer and includes monitoring of",
  "answers": [
    "Equipment but not personnel.",
    "Personnel but not equipment.",
    "Both equipment and personnel.",
    "Drywall for residual radiation"
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Radiation monitoring includes both equipment and personnel to ensure safety."
},

//19
{
  "question": "A film badge",
  "answers": [
    "Is worn at waist level by the patient.",
    "Is worn at waist level by the operator.",
    "Is clipped to the shirt pocket of the operator.",
    "Is clipped to the shirt pocket of the patient."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "A film badge is worn at waist level by the operator to monitor radiation exposure."
},

//20
{
  "question": "(1) Radiation legislation varies greatly from state to state. (2) For example, in some states a dental radiographer must successfully complete a radiation safety examination before he or she may expose dental x-rays.",
  "answers": [
    "Both statements are true.",
    "Both statements are false.",
    "The first statement is true; the second statement is false.",
    "The first statement is false; the second statement is true."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Both statements are true as radiation safety laws and certifications vary by state."
},

//21
{
  "question": "According to the current recommendations of the National Council on Radiation Protection and Measurements, the current MPD for occupationally exposed persons is ___________/year.",
  "answers": [
    "5.0 mSv",
    "50 mSv",
    "500 mSv",
    "5000 mSv"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "The current maximum permissible dose (MPD) for occupationally exposed persons is 50 mSv/year."
},

//22
{
  "question": "According to the current recommendations of the National Council on Radiation Protection and Measurements, the current MPD for an occupationally exposed pregnant woman is the equivalent of",
  "answers": [
    "50 mSv/year.",
    "0.05 Sv per month.",
    "0.5 mSv/month.",
    "0.01 mSv/month."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "The MPD for an occupationally exposed pregnant woman is 0.5 mSv/month."
},

//23
{
  "question": "The acronym for the maximum dose equivalent that a body is permitted to receive within a specific period is the",
  "answers": [
    "MPD—maximum permissible dose",
    "MPD—maximum possible dose",
    "MAD—maximum accumulated dose",
    "MAD—maximum allowed dose"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "MPD stands for maximum permissible dose, which is the highest dose allowed in a given period."
},

//24
{
  "question": "The ALARA concept states that all radiation must be kept",
  "answers": [
    "As long as readily achievable.",
    "As low as reasonably allowable.",
    "As low as reasonably achievable.",
    "As long as reliably achievable."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "ALARA stands for 'As Low As Reasonably Achievable,' a safety principle in radiation exposure."
},

//25
{
  "question": "You are in charge of monitoring the film badges. Film badges are checked on a quarterly basis. Your co-worker is 4 months pregnant. The badge registered 5.0 Sv for the previous quarter. Based on the National Council on Radiation Protection and Measurements (NCRP), what information should you give the dentist?",
  "answers": [
    "The reading is well below the allowable limit. Nothing needs to be done.",
    "The reading is at the allowable limit. Nothing needs to be done.",
    "The reading is at the allowable limit. She has reached her maximum dosage and cannot have any more exposure during the pregnancy.",
    "She has exceeded her maximum dosage and cannot have any more exposure during the pregnancy."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "A reading of 5.0 Sv exceeds the allowable dose for pregnant women, and further exposure should be avoided."
},

//26
{
  "question": "You are 36 years old. What is your cumulative occupational dose recommended by the National Council on Radiation Protection and Measurements (NCRP)?",
  "answers": [
    "360 millirems",
    "360 mSv",
    "180 millirems",
    "180 mSv"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "The cumulative dose for occupational exposure is calculated as age in years times 10 mSv, so for a 36-year-old, the recommended dose is 360 mSv."
},

//27
{
  "question": "Your patient is a 5-year-old boy who you have been seeing since he was 3 years old. He is always eating candy and drinking cola beverages. Six months ago he had A, J, and T restored. One year ago he had B, I, and L restored. His dental insurance has coverage for one set of four bite-wing images once per calendar year. Which of the following should you do regarding taking radiographs?",
  "answers": [
    "Take bite-wing images today.",
    "Insurance covers bite-wings once a year, take the dental images in 6 months.",
    "Re-evaluate in 1 year for the need for dental images.",
    "Dental images are taken every 2 years."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Due to the patient’s history of caries, bite-wing images should be taken today."
},

//28
{
  "question": "Your next patient is a 35-year-old man who you have been seeing for the past 10 years. The only treatment he has needed since coming to the dental practice has been his 6-month “prophys.” He has no periodontal issues and is on a 6-month recall cycle. You last took four bite-wing images 1 year ago. Which of the following should you do?",
  "answers": [
    "Take bite-wings during this appointment.",
    "Take the images in 6 months.",
    "Take the images in 1 to 2 years.",
    "No images will be needed for 5 years."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Based on the patient's low risk and lack of caries, bite-wings should be taken in 1 to 2 years."
},
//1
{
  "question": "In dental radiography, the term ________ is used to describe the mean energy or penetrating ability of the x-ray beam.",
  "answers": [
    "Quality",
    "Quantity",
    "Intensity",
    "Wavelength"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Quality refers to the mean energy or penetrating ability of the x-ray beam."
},

//2
{
  "question": "Which of the following statements is true of wavelength in reference to radiation?",
  "answers": [
    "X-rays with shorter wavelength have less penetrating power.",
    "X-rays with longer wavelength have less penetrating power.",
    "X-rays with longer wavelength are less likely to be absorbed by matter.",
    "Milliamperage controls the wavelength and energy of the x-ray beam."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "X-rays with longer wavelengths have less penetrating power."
},

//3
{
  "question": "____________ is a measurement of force that refers to the potential difference between two electrical charges.",
  "answers": [
    "Exposure time",
    "Wavelength",
    "Voltage",
    "Ampere"
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Voltage measures the potential difference between two electrical charges."
},

//4
{
  "question": "When the kilovoltage is increased",
  "answers": [
    "Electrons move from the anode to the cathode with more speed.",
    "Photons move from the anode to the cathode with more speed.",
    "Electrons move from the cathode to the anode with more speed.",
    "Photons move from the cathode to the anode with more speed."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "When kilovoltage increases, electrons move from the cathode to the anode with more speed, creating a higher energy x-ray beam."
},

//5
{
  "question": "Which of the following statements is true of the use of voltage in dental x-ray equipment?",
  "answers": [
    "Dental x-ray equipment requires the use of 3 to 5 volts for the production of x-rays.",
    "Dental x-ray equipment requires the use of less than 60 kilovolts for the production of x-rays.",
    "Dental x-ray equipment uses more than 70 kilovolts for the production of x-rays.",
    "Dental x-ray equipment requires the use of 60 to 70 kilovolts for the production of x-rays."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Dental x-ray equipment typically uses 60 to 70 kilovolts for the production of x-rays."
},

//6
{
  "question": "When contrasted with the use of 70 kV for dental x-rays, the use of 60 kV produces",
  "answers": [
    "More penetrating dental x-rays with longer wavelength.",
    "Less penetrating dental x-rays with longer wavelength.",
    "More penetrating dental x-rays with shorter wavelength.",
    "Less penetrating dental x-rays with shorter wavelength."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Using 60 kV produces less penetrating dental x-rays with longer wavelengths."
},

//7
{
  "question": "The kV represents",
  "answers": [
    "The mean x-ray tube voltage.",
    "The mean filament voltage.",
    "The maximum or peak voltage of an alternating current.",
    "The maximum or peak voltage of a direct current."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "kV represents the maximum or peak voltage of an alternating current."
},

//8
{
  "question": "When kilovolt is increased, a",
  "answers": [
    "Lower energy x-ray beam with increased penetrating ability results.",
    "Lower energy x-ray beam with decreased penetrating ability results.",
    "Higher energy x-ray beam with increased penetrating ability results.",
    "Higher energy x-ray beam with decreased penetrating ability results."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "An increase in kilovolts results in a higher energy x-ray beam with increased penetrating ability."
},

//9
{
  "question": "(1) Density is the overall darkness or blackness of a dental image. (2) When the kilovoltage is increased while other exposure factors remain constant, the resultant image exhibits a decreased density and appears lighter.",
  "answers": [
    "Both statements are true.",
    "Both statements are false.",
    "The first statement is true; the second statement is false.",
    "The first statement is false; the second statement is true."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "The first statement is true; however, increasing kilovoltage increases density, resulting in a darker image."
},

//10
{
  "question": "When lower kilovoltage settings are used, an image with ____ will result.",
  "answers": [
    "High contrast",
    "Low contrast",
    "Many shades of gray",
    "There is no change in contrast"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Lower kilovoltage settings produce an image with high contrast."
},

//11
{
  "question": "An image with 'low' contrast",
  "answers": [
    "Is useful for the detection of periodontal or periapical disease and has many shades of gray.",
    "Is useful for the detection and progression of dental caries and has many shades of gray.",
    "Is useful for the detection of periodontal or periapical disease and has many black and white areas.",
    "Is useful for the detection and progression of dental caries and has many black and white areas."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Low contrast images with many shades of gray are useful for detecting periodontal or periapical disease."
},

//12
{
  "question": "Exposure time is measured in",
  "answers": [
    "kV.",
    "Milliamperage.",
    "Density.",
    "Hundredths of a second."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Exposure time is measured in hundredths of a second for precision in dental imaging."
},

//13
{
  "question": "The quantity of the x-rays produced is controlled by",
  "answers": [
    "Voltage.",
    "Kilovoltage.",
    "Kilovoltage peak.",
    "Milliamperage."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Milliamperage controls the quantity of x-rays produced."
},

//14
{
  "question": "Amperage regulates the _________ of electrons produced at the cathode filament.",
  "answers": [
    "Quality",
    "Quantity",
    "Speed",
    "Power"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Amperage regulates the quantity of electrons produced at the cathode filament."
},

//15
{
  "question": "In regard to increasing density",
  "answers": [
    "An increase in either kV or mA will increase density.",
    "An increase in kV will increase density, but an increase in mA will not increase density.",
    "An increase in mA will increase density, but an increase in kV will not increase density.",
    "Neither an increase in kV nor an increase in mA will increase density."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "An increase in either kilovoltage or milliamperage will increase the density of the image."
},

//16
{
  "question": "Which of the following changes will increase x-ray beam intensity?",
  "answers": [
    "Decreasing the kilovoltage",
    "Decreasing the milliamperage",
    "Decreasing the exposure time",
    "Decreasing the source-to-film distance"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Decreasing the source-to-film distance increases x-ray beam intensity by reducing the distance over which the beam spreads."
},

//17
{
  "question": "According to the inverse square law, the intensity of radiation is __________ proportional to the ______________ from the source of radiation.",
  "answers": [
    "Directly; distance",
    "Directly; square of the distance",
    "Inversely; distance",
    "Inversely; square of the distance"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "The inverse square law states that radiation intensity is inversely proportional to the square of the distance from the source."
},

//18
{
  "question": "According to the inverse square law, if the length of the PID is halved, the resultant beam is ___________ as intense.",
  "answers": [
    "Four times",
    "Twice",
    "Half",
    "One quarter"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "If the length of the PID is halved, the resultant beam is twice as intense according to the inverse square law."
},

//19
{
  "question": "Aluminum filters are used to remove _______-energy, ________ wavelength x-rays.",
  "answers": [
    "Low; longer",
    "High; longer",
    "Low; shorter",
    "High; shorter"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Aluminum filters remove low-energy, longer-wavelength x-rays to reduce patient exposure to radiation."
},

//20
{
  "question": "Aluminum filters",
  "answers": [
    "Remove more penetrating x-rays from the beam.",
    "Decrease the mean penetrating ability of the x-ray beam.",
    "Remove high-energy x-rays from the beam.",
    "Reduce the intensity of the x-ray beam."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Aluminum filters reduce the intensity of the x-ray beam by removing low-energy x-rays."
},

//21
{
  "question": "You have been using a dental x-ray machine that has an 8-inch PID. Your new machine has a 16-inch PID. Given that all exposure factors remain the same, according to the inverse square law, the resultant beam would be ___________ as intense.",
  "answers": [
    "Four times",
    "Twice",
    "Half",
    "One quarter"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "According to the inverse square law, a 16-inch PID produces a beam one quarter as intense as an 8-inch PID."
},

//22
{
  "question": "(1) As kilovoltage, milliamperage, and time increase, x-ray beam intensity decreases. (2) As distance and filtration increase, the intensity of the x-ray beam increases.",
  "answers": [
    "Both statements are true.",
    "Both statements are false.",
    "The first statement is true; the second statement is false.",
    "The first statement is false; the second statement is true."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Both statements are false; increases in kilovoltage, milliamperage, and time increase beam intensity, while increased distance and filtration reduce it."
},

//23
{
  "question": "You have taken your first dental image on your patient. The contrast is high and you are looking for periodontal disease. You are using a DC machine and you have control of your settings. You have a 60- to 70-kV range and a 6- to 8-mA range. You had the kV set at 60, the mA set at 7, and the exposure time set at 6/100 of a second. While leaving all other settings the same, which setting would you adjust to create better contrast for detecting periodontal disease?",
  "answers": [
    "Increase kV to 70.",
    "Increase mA to 8.",
    "Decrease mA to 6.",
    "Increase time to 7/100."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Increasing the kV to 70 will create lower contrast, which is better for detecting periodontal disease."
},

//24
{
  "question": "You are going to take dental images on your patient. He is larger than average. What machine setting adjustment should you make prior to taking dental images?",
  "answers": [
    "Increase kV.",
    "Increase mA.",
    "Increase exposure time.",
    "You don’t need to make any adjustments."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Increasing the exposure time is a common adjustment for larger patients to ensure the x-ray penetrates properly."
},
//1
{
  "question": "Which of the following areas would appear the most radiopaque on a dental image?",
  "answers": [
    "Composite",
    "Amalgam",
    "Air space",
    "Enamel"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Amalgam appears the most radiopaque because it is a dense metal, blocking more x-rays."
},

//2
{
  "question": "Density is defined as",
  "answers": [
    "A radiopaque image.",
    "A radiolucent image.",
    "The overall blackness or darkness of an image.",
    "The difference in degrees of blackness between adjacent areas on a dental image."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Density refers to the overall blackness or darkness of a dental image."
},

//3
{
  "question": "You are showing your patient a bite-wing image. Your patient points to a portion of the tooth that is the most radiopaque and wants to know what it is. What portion of the tooth is your patient pointing to?",
  "answers": [
    "The enamel",
    "The pulp",
    "The dentin",
    "The periodontal ligament space"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "The enamel is the most radiopaque part of the tooth due to its density."
},

//4
{
  "question": "Radiolucent refers to that portion of a dental image that is",
  "answers": [
    "Black.",
    "White.",
    "Contains the tooth.",
    "Within the plastic base."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Radiolucent areas appear black on a dental image because they allow x-rays to pass through."
},

//5
{
  "question": "If the milliamperage is increased, the receptor density ________, and the image appears _________.",
  "answers": [
    "Increases; lighter",
    "Increases; darker",
    "Decreases; darker",
    "Decreases; lighter"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Increasing milliamperage increases the number of x-rays produced, which increases density, making the image darker."
},

//6
{
  "question": "If the operating kilovoltage is increased, the receptor density ____ because the average energy of the x-rays is raised.",
  "answers": [
    "Increases",
    "Decreases",
    "Remains the same",
    "Is divided by two"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Increasing kilovoltage increases the energy of x-rays, which raises receptor density."
},

//7
{
  "question": "You have to retake a dental image on your patient because the image is too light and is undiagnostic. Which of the following could you change to produce an image with increased density?",
  "answers": [
    "Increasing the exposure time",
    "Increasing the subject thickness",
    "Decreasing the milliamperage",
    "Decreasing the operating kilovoltage"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Increasing the exposure time allows more x-rays to reach the receptor, increasing density."
},

//8
{
  "question": "The teeth on your patient’s images appear very radiopaque and the periodontium and tissue appear very radiolucent. Your patient’s dental image has",
  "answers": [
    "High density.",
    "Low density.",
    "Low contrast.",
    "High contrast."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "The image has high contrast, with distinct radiopaque and radiolucent areas."
},

//9
{
  "question": "A dental image that has ______________ is said to have high contrast.",
  "answers": [
    "A very dark overall appearance",
    "A very light overall appearance",
    "Many shades of gray",
    "Very dark areas and very light areas"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "High contrast images have very dark areas and very light areas with fewer shades of gray."
},

//10
{
  "question": "An increase in ___________ temperature will result in a film with increased contrast.",
  "answers": [
    "Development",
    "Water bath",
    "Fixer",
    "Room"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Increasing the development temperature enhances contrast by speeding up chemical reactions."
},

//11
{
  "question": "The range of useful densities seen on a dental image is termed the",
  "answers": [
    "Film contrast.",
    "Subject contrast.",
    "Scale of contrast.",
    "Kilovoltage peak."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "The scale of contrast refers to the range of densities on a dental image."
},

//12
{
  "question": "A stepwedge will reveal that images taken at a lower kV will have __________ than images taken at a higher kV.",
  "answers": [
    "More shades of gray",
    "Higher contrast",
    "Lower contrast",
    "Both A and C"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Lower kV produces images with higher contrast (fewer shades of gray)."
},

//13
{
  "question": "The typical stepwedge is constructed of",
  "answers": [
    "Aluminum.",
    "Steel.",
    "Wood.",
    "Copper."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "A stepwedge is typically made of aluminum to demonstrate density and contrast in images."
},

//14
{
  "question": "A stepwedge will reveal that images taken at a higher kV will have _____________ versus images taken at a lower kV.",
  "answers": [
    "Long-scale contrast",
    "High contrast",
    "Only two densities",
    "Many areas of black and white"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Higher kV results in long-scale contrast with many shades of gray."
},

//15
{
  "question": "The geometric characteristic of _____________ refers to an image that appears larger than the actual size of the object it represents.",
  "answers": [
    "Magnification",
    "Distortion",
    "Sharpness",
    "Parallax"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Magnification refers to the enlargement of an image compared to the object’s actual size."
},

//16
{
  "question": "Which of the following influencing factors would degrade sharpness?",
  "answers": [
    "1. Smaller silver halide crystal size",
    "2. Larger silver halide crystal size",
    "3. Smaller focal spot",
    "4. Larger focal spot"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Larger silver halide crystals and larger focal spots degrade sharpness."
},

//17
{
  "question": "The primary factor that limits the size of the tungsten target is",
  "answers": [
    "The cost of the materials.",
    "Heat production.",
    "The limited kinetic energy of the electrons.",
    "The limited kinetic energy of the photons."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Heat production is the primary factor that limits the size of the tungsten target."
},

//18
{
  "question": "Which of the following factors would improve image sharpness?",
  "answers": [
    "Larger focal spot",
    "Larger crystal size in the film",
    "Smaller crystal size in the film",
    "Patient movement during x-ray exposure"
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Smaller crystal size improves sharpness by reducing image graininess."
},

//19
{
  "question": "In order to use the paralleling technique when taking periapical images on your patient, you will need to place the receptor approximately an inch from the teeth. Which of the following will you need to do to decrease image magnification?",
  "answers": [
    "Increase target-receptor distance.",
    "Decrease target-receptor distance.",
    "Decrease source to object distance.",
    "There is no change in magnification; therefore, no changes need to be made."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Increasing the target-receptor distance reduces magnification in the paralleling technique."
},

//20
{
  "question": "A longer position-indicating device (PID) results in",
  "answers": [
    "An increased target-receptor distance.",
    "A more divergent x-ray beam.",
    "More image magnification than when a shorter PID is used.",
    "An increased object-receptor distance."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "A longer PID increases the target-receptor distance, reducing magnification."
},

//21
{
  "question": "To minimize dimensional distortion, the object and receptor must be _____________ one another.",
  "answers": [
    "Perpendicular to",
    "Parallel to",
    "At a 45-degree angle to",
    "More than the length of the PID apart from"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Parallel alignment of the object and receptor minimizes dimensional distortion."
},

//22
{
  "question": "You are taking dental images on your patient. You have directed the position indicating device (PID) perpendicular to the tooth and the receptor. Which of the following would you minimize by doing this?",
  "answers": [
    "Sharpness",
    "Grain size",
    "Focal spot size",
    "Dimensional distortion"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Directing the PID perpendicular to the tooth and receptor minimizes dimensional distortion."
},
//1
{
  "question": "The Consumer-Patient Radiation Health and Safety Act",
  "answers": [
    "1. Outlines requirements for the safe use of dental x-ray equipment. 2. Establishes guidelines for the proper maintenance of x-ray equipment. 3. Requires persons who take dental images to be properly trained and certified.",
    "1, 2",
    "2, 3",
    "1, 3"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "The Consumer-Patient Radiation Health and Safety Act outlines requirements for safe use, maintenance, and certification for dental x-ray operators."
},

//2
{
  "question": "The Consumer-Patient Radiation Health and Safety Act is a ________ law.",
  "answers": [
    "Federal",
    "State",
    "County",
    "City"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "The Consumer-Patient Radiation Health and Safety Act is a federal law."
},

//3
{
  "question": "The process of informing the patient about the particulars of exposing dental images is termed",
  "answers": [
    "A treatment alternative.",
    "Disclosure.",
    "Self-determination.",
    "Behavior modification."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Disclosure refers to the process of informing the patient about the details of dental image exposure."
},

//4
{
  "question": "Informed consent",
  "answers": [
    "Must be in language that the patient can readily understand.",
    "Does not require that patients have their questions answered before x-ray exposure.",
    "Is waived if the patient is a minor.",
    "Does not require that patients receive enough information to make informed choices."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Informed consent must be in language the patient can understand and must include the opportunity to ask questions."
},

//5
{
  "question": "If the patient is a minor, informed consent",
  "answers": [
    "Is waived.",
    "May still be obtained from the patient.",
    "Must be obtained from the parent.",
    "Must be obtained from a legal guardian."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "If the patient is a minor, informed consent must be obtained from a legal guardian."
},

//6
{
  "question": "Generally, there are ____ elements to informed consent.",
  "answers": [
    "Two",
    "Three",
    "Four",
    "Six"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "There are generally six elements to informed consent: purpose, risks, benefits, alternatives, opportunity for questions, and permission."
},

//7
{
  "question": "If you take dental images on your patient before getting his informed consent, your patient can legally claim",
  "answers": [
    "Conflict of interest.",
    "Statute of limitations.",
    "Malpractice or negligence.",
    "Disclosure."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Taking images without informed consent can result in a claim of malpractice or negligence."
},

//8
{
  "question": "Which of the following constitutes a person who can provide legal informed consent?",
  "answers": [
    "An individual under the influence of drugs or alcohol",
    "An adult (over the age of 18) who is of sound mind",
    "An individual who under duress has consented to the treatment",
    "An individual who received an incomplete description of the proposed treatment"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Only an adult who is of sound mind can provide legal informed consent."
},

//9
{
  "question": "The trend in dental negligence or malpractice actions has historically been to sue the supervising dentist alone. However, cases exist in which the dentist and the dental auxiliary have both been sued for the actions of the dental auxiliary.",
  "answers": [
    "Both statements are true.",
    "Both statements are false.",
    "The first statement is true; the second statement is false.",
    "The first statement is false; the second statement is true."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Both statements are true; legal actions may involve both the dentist and the dental auxiliary."
},

//10
{
  "question": "The standard of care can be defined as the quality of care that is provided by dental practitioners in _______ locality under _________________ conditions.",
  "answers": [
    "Any; similar or very different",
    "A similar; the same or similar",
    "Any; the same or similar",
    "A similar; similar or very different"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "The standard of care is defined as the care a similar practitioner would provide under similar conditions."
},

//11
{
  "question": "Which of the following statements is true of the statute of limitations?",
  "answers": [
    "1. It often begins when the patient discovers or should have discovered that an injury has occurred as a result of dental negligence. 2. It is the time period during which a patient may bring a malpractice action. 3. It may not begin until years after the dental negligence occurred.",
    "1, 3",
    "1, 2",
    "2, 3"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "All statements are true; the statute of limitations often begins when the injury is discovered and can be years after the negligence occurred."
},

//12
{
  "question": "Which of the following statements is true of dental images and the patient’s dental record?",
  "answers": [
    "Dental images may be discarded when outdated.",
    "It is advised to keep patient dental images in a file separate from patient charts.",
    "The dental record must include documentation of the number and type of dental images exposed.",
    "Dental images are an optional rather than integral part of the dental record."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Dental records must include documentation of the number and type of images exposed."
},

//13
{
  "question": "You have entered a wrong entry in the dental record. Which of the following should you do?",
  "answers": [
    "Erase the entry and write in the correct entry.",
    "Block out the original entry and write the correct entry next to the original entry.",
    "Cover the original entry with white-out and write the new entry in over the White-out.",
    "Draw a single line through the incorrect entry, initial it, write in the correct entry."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "The correct way to correct an entry is to draw a single line through it, initial it, and write the correct entry."
},

//14


//15
{
  "question": "Your patient wants her original set of radiographs. She claims they are hers because she paid for them. Which of the following would be the best reply?",
  "answers": [
    "Since you paid for them they belong to you.",
    "If your insurance company paid for them, they belong to the insurance company. They will have to release them to you.",
    "You will have to sign a waiver before I can release them to you.",
    "Legally they are the property of the dentist even though you or the insurance company pays for them."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Radiographs are the legal property of the dentist, even though the patient or insurance company paid for them."
},

//16
{
  "question": "Your former patient has moved and would like his records including the original radiographs sent to his new dentist. Which of the following should you do?",
  "answers": [
    "Forward the original radiographs to the new dentist.",
    "Make a duplicate copy to send to the new dentist unless the patient signs a release to send the originals.",
    "Copy the original films, send the original films, and keep the duplicate set.",
    "Keep the original films and send the new dentist a duplicate set."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "The dentist should retain the original films and send a duplicate set to the new dentist."
},

//17
{
  "question": "When a patient refuses dental images the dentist has deemed are necessary for treatment planning, the dentist should refuse to treat the patient; however, the patient could sign a release form that would allow the dentist to continue with the patient’s treatment.",
  "answers": [
    "Both parts of the statement are true.",
    "Both parts of the statements are false.",
    "The first part of the statement is true; the second part of the statement is false.",
    "The first part of the statement is false; the second part of the statement is true."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "The dentist should refuse to treat a patient if necessary dental images are refused. Signing a waiver does not eliminate the dentist’s liability."
},

//1
{
  "question": "Infection control is critical in your dental operatory because pathogens can be transmitted easily through which of the following? 1. Your patient to you. 2. You to your patient. 3. From one patient to another patient.",
  "answers": [
    "1, 2, 3",
    "1, 3",
    "2, 3",
    "1, 2"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Pathogens can be transmitted in all directions in the dental operatory: from patient to operator, operator to patient, and between patients."
},

//2
{
  "question": "Pathogens are",
  "answers": [
    "Any microorganisms.",
    "Bacteria but not viruses.",
    "Viruses but not bacteria.",
    "Microorganisms capable of causing disease."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Pathogens are defined as microorganisms capable of causing disease."
},

//3
{
  "question": "Which of the following viruses may be present in oral secretions? 1. Coronavirus (COVID-19) 2. Hepatitis B virus 3. Herpes simplex virus 4. Human immunodeficiency virus",
  "answers": [
    "1, 2, 3, 4",
    "2, 3, 4",
    "1, 2, 3",
    "2, 4"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "All of these viruses can be present in oral secretions, requiring stringent infection control measures."
},

//4
{
  "question": "Another term for infection control is __________, which means the absence of pathogens, or disease-causing microorganisms.",
  "answers": [
    "Antiseptic",
    "Antibiotic",
    "Antiinfective",
    "Asepsis"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Asepsis refers to the absence of pathogens or disease-causing microorganisms."
},

//5
{
  "question": "Antiseptic is",
  "answers": [
    "The absence of pathogens, or disease-causing microorganisms.",
    "A substance that inhibits the growth of bacteria.",
    "The use of a chemical or physical procedure to inhibit or destroy pathogens.",
    "The act of sterilizing."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "An antiseptic is a substance that inhibits the growth of bacteria."
},

//6
{
  "question": "(1) Highly resistant bacterial and mycotic (fungal) spores are not killed during disinfection procedures; (2) however, highly resistant bacterial and mycotic spores are killed during sterilization.",
  "answers": [
    "Both statements are true.",
    "Both statements are false.",
    "The first statement is true; the second statement is false.",
    "The first statement is false; the second statement is true."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Disinfection does not kill resistant spores, while sterilization does."
},

//7
{
  "question": "Recommendations concerning gloves would fall under which of the following categories of infection control practices that directly relate to dental imaging procedures?",
  "answers": [
    "Personal protective equipment",
    "Hand hygiene and care of hands",
    "Sterilization and disinfection of instruments",
    "Cleaning and disinfection of dental unit and environmental surfaces"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Glove use falls under personal protective equipment (PPE) recommendations."
},

//8
{
  "question": "What is important for you to remember about your protective clothing?",
  "answers": [
    "Select clothing that prevents skin and mucous membrane exposure to blood or other bodily fluids.",
    "You can re-wear your protective clothing a second day if it is not visibly soiled.",
    "You can wear your protective clothing home.",
    "Disposable protective clothing is required."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Protective clothing must prevent exposure to blood or other bodily fluids."
},

//9
{
  "question": "Which of the following is true regarding your usage of disposable medical gloves?",
  "answers": [
    "You may rewash your gloves between patients until they show visible damage.",
    "You can use nonsterile gloves for examinations and nonsurgical procedures.",
    "You do not need to wash your hands before gloving.",
    "You do not need to wash your hands between patients."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Nonsterile gloves are acceptable for nonsurgical procedures, but hand washing is required before and after each use."
},

//10
{
  "question": "Under which of the following conditions must you wear your mask and safety glasses?",
  "answers": [
    "Only during surgical procedures",
    "Whenever the high-speed handpiece is used",
    "Whenever spatter and aerosolized sprays of blood and saliva are likely",
    "If desired"
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Masks and safety glasses should be worn whenever spatter or aerosolized sprays are likely."
},

//11
{
  "question": "Critical instruments are defined as instruments",
  "answers": [
    "That are used to penetrate soft tissue or bone.",
    "That contact but do not penetrate soft tissue.",
    "That contact but do not penetrate bone.",
    "Or devices that do not come in contact with mucous membranes."
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Critical instruments penetrate soft tissue or bone."
},

//12
{
  "question": "In dental imaging, no __________________ are used.",
  "answers": [
    "Critical instruments",
    "Semicritical instruments",
    "Noncritical instruments",
    "1, 2, 3"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Dental imaging does not involve the use of critical instruments."
},

//13
{
  "question": "Which of the following is considered to be a semicritical instrument?",
  "answers": [
    "The exposure button",
    "The x-ray control panel",
    "The lead apron",
    "Beam alignment devices"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Beam alignment devices are classified as semicritical instruments."
},

//14
{
  "question": "Which of the following can be used for cleaning and disinfection of the dental unit and environmental surfaces?",
  "answers": [
    "Bleach-free disinfectant wipes",
    "EPA-registered chemical germicides that are labeled as hospital disinfectants",
    "EPA-registered chlorine-containing compounds labeled as both hospital disinfectants and tuberculocidals",
    "Dishwashing liquid and water"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "EPA-registered chemical germicides labeled as hospital disinfectants are recommended for cleaning and disinfection."
},

//15
{
  "question": "Which of the following should you do to prepare your treatment room prior to taking a dental image?",
  "answers": [
    "Wipe with a germicide.",
    "Follow manufacturer’s instructions for infection control procedures.",
    "Sterilize critical instruments.",
    "Wipe with a low-level disinfectant."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "The manufacturer's instructions for infection control should be followed to properly prepare the treatment room."
},

//16
{
  "question": "Covering exposed surfaces with disposable materials ____________ adequate protection ____________ the need for surface cleaning and disinfection between patients.",
  "answers": [
    "Provides; while eliminating",
    "Provides; but does not eliminate",
    "Does not provide; but does eliminate",
    "Neither provides; nor eliminates"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Covering exposed surfaces with disposable materials provides protection but does not eliminate the need for cleaning and disinfection between patients."
},

//17
{
  "question": "Which of the following surfaces on the x-ray machine must be covered or disinfected? 1. Control panel 2. Exposure button 3. Tubehead 4. Position-indicating device (PID)",
  "answers": [
    "1, 2, 3, 4",
    "1, 2, 3",
    "2, 3, 4",
    "2 only"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "All listed surfaces (control panel, exposure button, tubehead, PID) must be covered or disinfected between patients."
},

//18
{
  "question": "Commercially available plastic barrier envelopes",
  "answers": [
    "Seal the film itself within the film packet.",
    "Minimize contamination after exposure of the film.",
    "Are made of a material that blocks the passage of photons.",
    "Are made of a material that blocks the passage of electrons."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Plastic barrier envelopes minimize contamination after the film has been exposed."
},

//19
{
  "question": "Preparation of supplies and equipment involves sterilizing which of the following items?",
  "answers": [
    "Film",
    "Beam alignment devices",
    "Lead apron",
    "PID"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Beam alignment devices must be sterilized between uses."
},

//20
{
  "question": "After seating the patient, the radiographer must complete which of the following procedures before washing the hands and putting on gloves? 1. Chair adjustment 2. Headrest adjustment 3. Placement of the lead apron",
  "answers": [
    "1, 2, 3",
    "1, 2",
    "2, 3",
    "3 only"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Chair and headrest adjustment and lead apron placement should be done before hand washing and gloving."
},

//21
{
  "question": "Which of the following items should be removed by the patient during preparation for dental image procedures? 1. Eyeglasses 2. Dentures 3. Chewing gum",
  "answers": [
    "1, 2, 3",
    "2, 3",
    "1, 3",
    "2 only"
  ],
  "correct": 0,
  "category": "RHS",
  "rationale": "Patients should remove eyeglasses, dentures, and chewing gum to avoid interference with dental imaging procedures."
},

//22
{
  "question": "Preparation of the dental radiographer should include",
  "answers": [
    "Removing film-holding devices before hand washing.",
    "Removing film-holding devices after hand washing but before placing gloves.",
    "Mandatory use of a surgical mask and protective eyewear.",
    "Optional use of a surgical mask and protective eyewear."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Mandatory use of surgical masks and protective eyewear is necessary to prevent exposure to aerosols and spatter."
},

//23
{
  "question": "Exposed receptors should ________ dried and then placed in a _________________ for transport to the darkroom for processing.",
  "answers": [
    "Not be; gloved hand",
    "Be; gloved hand",
    "Not be; disposable container",
    "Be; disposable container"
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Exposed receptors should be dried and placed in a disposable container for safe transport to the darkroom."
},

//24
{
  "question": "When handling film with barrier envelopes, the barrier envelopes are opened with __________ hands and the films unwrapped with ______________ hands.",
  "answers": [
    "Gloved; gloved",
    "Gloved; nongloved",
    "Nongloved; gloved",
    "Nongloved; nongloved"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "Barrier envelopes are opened with gloved hands, and the films are unwrapped with nongloved hands to prevent contamination."
},

//25
{
  "question": "When handling film with barrier envelopes, the films are unwrapped with _________ hands, and when handling film without barrier envelopes, the films are unwrapped with _____________ hands.",
  "answers": [
    "Gloved; gloved",
    "Gloved; nongloved",
    "Nongloved; gloved",
    "Nongloved; nongloved"
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "When using barrier envelopes, gloved hands unwrap the film, while nongloved hands are used for unwrapping films without barrier envelopes."
},

//26
{
  "question": "(1) The contaminated barriers should be removed while the dental radiographer is wearing gloves. (2) The barriers should be disposed of after the patient has left the room.",
  "answers": [
    "Both statements are true.",
    "Both statements are false.",
    "The first statement is true; the second statement is false.",
    "The first statement is false; the second statement is true."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "Barriers should be removed with gloves, but they are typically disposed of before the patient leaves."
},

//27
{
  "question": "(1) Contaminated film is placed in a disposable container that is carried to the processor with gloved hands. (2) The film should be developed after the patient has been dismissed from the radiology area.",
  "answers": [
    "Both statements are true.",
    "Both statements are false.",
    "The first statement is true; the second statement is false.",
    "The first statement is false; the second statement is true."
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "The film is carried to the processor with gloved hands, but it is not necessary to wait for the patient to leave before developing."
},

//28
{
  "question": "(1) Digital sensors can be disinfected, sterilized, placed in cold sterilization, or be placed in barriers. (2) When using barriers, disinfect the sensor, cover both the sensor and the wire connection with a plastic barrier, and then cover with a finger cot to provide added protection.",
  "answers": [
    "Both statements are true.",
    "Both statements are false.",
    "The first statement is true; the second statement is false.",
    "The first statement is false; the second statement is true."
  ],
  "correct": 3,
  "category": "RHS",
  "rationale": "Digital sensors cannot be sterilized but should be covered with barriers."
},

//29
{
  "question": "There are three conditions that must be present for an infection to occur. Which of the following conditions is a necessary component for an infection to occur?",
  "answers": [
    "Small amounts of the infectious disease with low infectivity",
    "A host that is not vulnerable to infection",
    "A way for the infectious disease to enter the host",
    "An aseptic environment"
  ],
  "correct": 2,
  "category": "RHS",
  "rationale": "A way for the infectious disease to enter the host is one of the necessary components for infection."
},

//30
{
  "question": "Which of the following should you do first when using a daylight loader for film processing?",
  "answers": [
    "Put on gloves.",
    "Place a new paper cup and gloves in the daylight loader compartment.",
    "Put the container with contaminated films next to the new paper cup in the daylight loader.",
    "Close the daylight loader lid, and push hands through openings of daylight loader."
  ],
  "correct": 1,
  "category": "RHS",
  "rationale": "The first step is placing a new paper cup and gloves in the daylight loader compartment before processing."
}










 
 

 
  



  

  
  
  
  
  
  
  ]
