let currentCardIndex = 0;
let isCardFlipped = false;










const cards = [
  { 
    question: "<strong>Intrinsic Staining</strong>", 
    answer: `<strong>Intrinsic staining</strong> refers to discoloration that occurs within the tooth enamel or dentin. It is usually caused by:<br>
    <ul>
      <li>Aging</li>
      <li>Medications (e.g., tetracycline)</li>
      <li>Excessive fluoride (e.g., fluorosis)</li>
      <li>Developmental disorders</li>
    </ul>
    These stains are harder to remove and may require professional treatments like internal bleaching or veneers.` 
  },
  { 
    question: "<strong>Extrinsic Staining</strong>", 
    answer: `<strong>Extrinsic staining</strong> occurs on the surface of the teeth and is usually caused by lifestyle factors. Common extrinsic staining agents include:<br>
    <ul>
      <li>Coffee</li>
      <li>Tobacco</li>
      <li>Colored foods like berries</li>
      <li>In New Mexico, traditional foods like red or green chile</li>
    </ul>
    Regular brushing and professional cleanings can often remove these stains.` 
  },
  { 
    question: "<strong>Differentiate Between Intrinsic and Extrinsic Staining</strong>", 
    answer: `<strong>Extrinsic stains</strong> are usually localized on the surface and can often be removed by regular brushing or professional cleaning. <br><br> 
    <strong>Intrinsic stains</strong> are deeper, affecting the enamel or dentin, and usually require more intensive treatments like Internal bleaching or Veneers to remove.` 
  },
    { 
    question: "<strong>Most Common Intrinsic Staining in New Mexico</strong>", 
    answer: `<strong>What is the most common cause of intrinsic staining of teeth in New Mexico?</strong><br><br>
    The most common cause in New Mexico is often linked to fluoride exposure. High levels of natural fluoride in some local water supplies can lead to:
    <ul>
      <li>Dental fluorosis</li>
      <li>White or brown discoloration</li>
      <li>Pitting on the teeth</li>
    </ul>
    It is more common in children whose teeth are still developing. Professional treatments like internal bleaching or veneers may be required to address this type of staining.` 
  },
    { 
    question: "<strong>Agency Overseeing OTC and Dental Materials</strong>", 
    answer: `<strong>Which agency oversees Over-The-Counter (OTC) dental products and dental materials?</strong><br><br>
    The U.S. Food and Drug Administration (FDA) is responsible for regulating:
    <ul>
      <li>OTC dental products like toothpaste, mouthwash, and teeth-whitening strips</li>
      <li>Dental materials such as dental implants, crowns, and fillings</li>
    </ul>
    The FDA ensures that these products are safe, effective, and properly labeled for public use.` 
  },
    { 
    question: "<strong>Classifications of Dental Materials by Function and Safety</strong>", 
    answer: `What are the three functional classifications of dental materials, and what should be considered regarding their safety?<br><br>
    Dental materials can be functionally classified into three categories:
    <ul>
      <li><strong>Preventative Materials:</strong> Used to prevent oral health issues such as cavities and gum disease. Examples include sealants, fluoride varnishes, and prophylactic pastes.</li>
      <li><strong>Therapeutic Materials:</strong> Used to treat existing oral health issues. Examples include desensitizing agents, medicated mouthwashes, and periodontal dressings.</li>
      <li><strong>Restorative Materials:</strong> Used to replace lost tooth structure or to repair damaged teeth. Examples include dental amalgam, composite resins, and porcelain crowns.</li>
    </ul>
    <strong>Safety Note:</strong> Some dental materials may be therapeutic in small quantities or if in contact with tissues for a short period of time. However, these materials may become irritating or toxic with longer or larger doses.` 
  },
    {
    question: "<strong>Amalgam and Corrosion</strong>",
    answer: "<strong>Which component in dental amalgam is most susceptible to corrosion?</strong><br><br>Zinc is the component in dental amalgam that is most susceptible to corrosion. Zinc's role is primarily in the oxidation of other metals in the amalgam."
  },
  {
    question: "<strong>Mercury's State</strong>",
    answer: "</strong>What is the state of mercury at room temperature?<br><br>Mercury is a <strong>liquid</strong> at room temperature and is used to bind the alloy particles in dental amalgam."
  },
  {
    question: "<strong>Amalgamation</strong>",
    answer: 'What is the term for the reaction when silver-based alloy particles are mixed with mercury in dental amalgam?<br><br>The resulting reaction is called "<strong>amalgamation</strong>."'
  },
  {
    question: "<strong>Mercury Safety in Dental Offices</strong>",
    answer: "How do mercury levels in most dental offices compare to OSHA\'s recommended minimum?<br><br>Studies have shown that mercury levels in most dental offices are far below OSHA\'s recommended minimum levels, making it generally safe in controlled environments."
  },
  {
    question: "<strong>Amalgam Components and Their Functions</strong>",
    answer: `What are the components of dental amalgam and their functions?<br><br>
    <ul>
      <li><strong>Silver (Ag):</strong> Provides strength and resistance to corrosion.</li>
      <li><strong>Tin (Sn):</strong> Improves physical properties when compounded with silver.</li>
      <li><strong>Copper (Cu):</strong> Adds strength, hardness, and helps with corrosion resistance.</li>
      <li><strong>Zinc (Zn):</strong> Aids in the oxidation of other metals within the amalgam.</li>
      <li><strong>Mercury:</strong> Liquid at room temperature and binds the alloy particles.</li>
    </ul>`
  },
 {
  question: "<strong>Primary Bonds vs Secondary Bonds</strong>",
  answer: `What is the difference between primary bonds and secondary bonds in chemistry?<br><br>
  Primary bonds are stronger and involve the sharing or transfer of electrons between atoms. These include covalent, ionic, and metallic bonds. Secondary bonds are weaker and include interactions like hydrogen bonding and Van der Waals forces.`
},
{
  question: "<strong>Covalent Bonding</strong>",
  answer: `What is covalent bonding?<br><br>
  In covalent bonding, atoms share outer shell electrons to achieve a stable electron configuration. This type of bonding is common in organic molecules like water: <span class="molecule">H<sub>2</sub>O</span>.`
},
{
  question: "<strong>Ionic Bonding</strong>",
  answer: `What is ionic bonding?<br><br>
  In ionic bonding, one atom gives electrons to another, creating charged atoms (ions) that are attracted to each other. Sodium chloride (NaCl) is a classic example of an ionic compound.`
},
{
  question: "<strong>Metallic Bonding</strong>",
  answer: `What is metallic bonding?<br><br>
  In metallic bonding, electrons move freely among a "sea" of metal atoms. This free movement of electrons provides electrical conductivity and is typical of metals like copper and aluminum.`
},
{
  question: "<strong>Hydrogen Bonding</strong>",
  answer: `What is hydrogen bonding?<br><br>
  Hydrogen bonding is a weaker form of attraction between a hydrogen atom in one molecule and an electronegative atom (like oxygen or nitrogen) in another molecule. This type of bonding is crucial in the structure of water and biological molecules like DNA.`
} ,
  
{
  question: "<strong>Galvanism and Restorative Materials</strong>",
  answer: `True or False? Galvanism causes excessive expansion of restorative materials and decreases over time as oxides form on the metal surface.<br><br>
  False for the first part, True for the second part. Galvanism does not cause excessive expansion of restorative materials; however, it is true that galvanic stimulation will decrease over time as oxides form on the surface of the metal.`
},
{
  question: "<strong>Effects of Contact Between Two Dissimilar Metals</strong>",
  answer: `What can happen when two dissimilar metals come into contact in dental restorations?<br><br>
  Contact between two dissimilar metals can lead to a metallic taste, galvanic shock, and an electrical current. This phenomenon is often termed "galvanic" or "electrogalvanic" response.`
},

  {
  question: "<strong>Dental Color Terms Definitions</strong>",
  answer: `What do the terms Hue, Chroma, Value, and Opaque mean in dentistry?<br><br>
  <ul>
    <li><strong>Hue:</strong> The actual color, like red, yellow, or blue.</li>
    <li><strong>Chroma:</strong> The intensity or saturation of a hue.</li>
    <li><strong>Value:</strong> The lightness or darkness of a color.</li>
    <li><strong>Opaque:</strong> Not transparent; does not allow light to pass through.</li>
  </ul>`
},
{
  question: "<strong>Internal Bleaching</strong>",
  answer: `What is internal bleaching in dentistry?<br><br>
  Internal bleaching is a dental procedure used to whiten a discolored tooth from the inside out. This process is generally performed on a tooth that has had root canal treatment and involves placing a bleaching agent inside the tooth, then sealing it with a temporary filling.`
},
{
  question: "<strong>OTC Bleaching Ingredients</strong>",
  answer: `What are the common ingredients in Over-The-Counter (OTC) dental bleaching products?<br><br>
  The common active ingredients in OTC dental bleaching products are Hydrogen Peroxide and Carbamide Peroxide. These agents break down stains on the tooth surface, resulting in a brighter smile.`
},

{
  question: "<strong>Acid Etching in Sealants</strong>",
  answer: `What concentration of phosphoric acid is commonly used in etching the tooth surface before applying a sealant?<br><br>
  <strong>Phosphoric Acid</strong> is typically used in concentrations ranging from <strong>10-40%</strong> for etching the tooth surface.`
},
{
  question: "<strong>Etched Surface Appearance</strong>",
  answer: `How does an etched tooth surface usually appear?<br><br>
  An etched tooth surface generally appears <strong>cloudy</strong>, indicating that it's ready for sealant application.`
},
{
  question: "<strong>Curing Methods for Sealants</strong>",
  answer: `What are the different curing methods for dental sealants?<br><br>
  Dental sealants can be cured through dual curing, light curing, or chemical curing.`
},
{
  question: "<strong>Curing Light Wavelength</strong>",
  answer: `What is the wavelength of the light used for curing dental sealants?<br><br>
  The wavelength of the curing light is typically <strong>blue</strong>.`
},
{
  question: "<strong>Macular Degeneration and Curing Light</strong>",
  answer: `What eye condition could potentially be aggravated by exposure to curing light?<br><br>
  <strong>Macular Degeneration</strong> could potentially be aggravated by frequent exposure to the blue curing light.`
},
{
  question: "<strong>Worst Type of Sealant Failure</strong>",
  answer: `What is considered the worst type of sealant failure?<br><br>
  The worst type of sealant failure occurs when the sealant remains in place but leaks, potentially leading to decay under the sealant.`
},
{
  question: "<strong>Common Teeth for Pit and Fissure Caries</strong>",
  answer: `Which teeth are most commonly affected by pit and fissure caries?<br><br>
  The most common teeth affected by pit and fissure caries are the lower molars.`
},
{
  question: "<strong>Proper Order for Sealant Application</strong>",
  answer: `What is the simplified proper order for the steps of applying a sealant?<br><br>
  Clean the tooth, etch the surface, rinse and dry, apply the sealant, and finally cure it.`
},
{
  question: "<strong>Likely Causes of Sealant Failure</strong>",
  answer: `What are likely causes of sealant failure?<br><br>
  Likely causes can include inadequate etching, moisture contamination, and improper application techniques.`
},
{
  question: "<strong>Moh\'s Hardness Scale</strong>",
  answer: `What is the Moh\'s hardness scale used for?<br><br>
  The Moh hardness scale is used to measure the hardness of minerals and materials on a scale from 1 to 10, with 1 being the softest and 10 being the hardest.`
},
{
  question: "<strong>Importance of Proper Finishing, Polishing, and Cleaning</strong>",
  answer: `What are the benefits of proper finishing, polishing, and cleaning of tooth structures and restorative materials?<br><br>
  Improves the esthetics of the restorative material.<br>
  Improves the tissue health surrounding the restoration.<br>
  Increases the longevity of the restoration.`
},
{
  question: "<strong>Factors Affecting the Abrasiveness of Polishing Agents</strong>",
  answer: `What factors affect the abrasiveness of polishing agents?<br><br>
  If the surface is harder than the abrasive, there will be little to no effect.<br>
  Prophy paste is generally more abrasive than toothpaste.<br>
  ADA certification ensures that abrasives are within safe limits.`
},
{
  question: "<strong>Benefits of a Properly Finished and Polished Restoration</strong>",
  answer: `What are the benefits of a properly finished and polished restoration or prosthesis?<br><br>
  Reduced biofilm retention and increased resistance to tarnish and corrosion.`
},
{
  question: "<strong>Aluminum Oxide Polishing Paste</strong>",
  answer: `What is aluminum oxide polishing paste commonly used for?<br><br>
  Aluminum oxide polishing paste is used for polishing dental restorations and prostheses to a high shine.`
},
{
  question: "<strong>Polishing Amalgam Restorations</strong>",
  answer: `How should amalgam restorations be polished?<br><br>
  Amalgam restorations should be polished wet with a light touch to prevent overheating and damaging the material.`
},
{
  question: "<strong>Philosophy of Selective Polishing</strong>",
  answer: `What philosophy is regarded as the most appropriate in selecting which teeth and surfaces to polish?<br><br>
  The philosophy of "selective" polishing is considered the most appropriate for determining which teeth and surfaces should be polished.`
},
{
  question: "<strong>Dental Material Timing Definitions</strong>",
  answer: `
  <strong>Mixing Time:</strong> The time required to mix a dental material to the correct consistency.<br><br>
  <strong>Initial Set:</strong> The time it takes for the material to reach a semi-hard state, allowing some manipulation.<br><br>
  <strong>Working Time:</strong> The time during which a material remains malleable and can be manipulated.<br><br>
  <strong>Final Set:</strong> The time at which the material is fully hardened and can no longer be manipulated.`
},
{
  question: "<strong>Types of Mechanical Stress</strong>",
  answer: `
  <strong>Tensile:</strong> Stress that pulls and stretches the material.<br><br>
  <strong>Compressive:</strong> Stress that pushes the material together.<br><br>
  <strong>Shearing:</strong> Stress that pushes one layer of the material in one direction and another layer in the opposite direction.<br><br>
  <strong>Torque:</strong> Twisting action caused by a rotational force.`
},
{
  question: "<strong>Triturator</strong>",
  answer: `
  <strong>What is a Triturator in dentistry?</strong><br><br>
  A Triturator is a device used to mix dental materials, like amalgam, to the proper consistency quickly and efficiently.`
},

  {
    question: "<strong>Exothermic Reaction in Alginate Impressions</strong>",
    answer: `What does an exothermic reaction signify in the setting of an alginate impression?<br><br>
    An exothermic reaction in an alginate impression means that heat is released as the material sets. When the impression feels cool to the touch, it indicates that the setting reaction is complete.`
  },
  {
    question: "<strong>Negative and Positive Dental Models</strong>",
    answer: `What is the difference between negative impressions and positive gypsum models?<br><br>
    <ul>
      <li><strong>Negative Impressions:</strong> Molds taken directly from the mouth; these are the impressions of the teeth and soft tissues.</li>
      <li><strong>Positive Gypsum Models:</strong> Casts made by pouring gypsum into the negative impressions; these serve as a replica of the teeth and oral structures.</li>
    </ul>`
  },
  {
    question: "<strong>Hot Water vs Cold Water in Working Time</strong>",
    answer: `How does the temperature of water affect the working time of impression materials or gypsum?<br><br>
    Hot water speeds up the setting reaction, reducing the working time. Cold water slows down the setting reaction, extending the working time.`
  },
  {
    question: "<strong>Viscosity and Temperature</strong>",
    answer: `What is viscosity, and how is it affected by temperature?<br><br>
    <ul>
      <li><strong>Viscosity:</strong> The measure of a fluid's resistance to flow.</li>
      <li><strong>Temperature Relation:</strong> Generally, higher temperatures decrease viscosity (makes it runnier), and lower temperatures increase viscosity (makes it thicker).</li>
    </ul>`
  },
  {
    question: "<strong>States of Matter</strong>",
    answer: `What are the states of matter?<br><br>
    The states of matter are solid, liquid, and gas. Each has its own properties concerning shape, volume, and compressibility.`
  },


  {
    question: "<strong>Microleakage Consequences</strong>",
    answer: `What are the consequences of microleakage in dental restorations?<br><br>
    Microleakage can lead to recurrent decay, marginal staining, and postoperative sensitivity.`
  },
  {
    question: "<strong>Acute vs Chronic Toxicity</strong>",
    answer: `What is the difference between acute and chronic toxicity?<br><br>
    <ul>
      <li><strong>Acute Toxicity:</strong> Rapid onset of symptoms following exposure to a substance, often at high levels.</li>
      <li><strong>Chronic Toxicity:</strong> Slow onset of symptoms due to prolonged, low-level exposure to a substance.</li>
    </ul>`
  },
  {
    question: "<strong>Eyewash Station Time</strong>",
    answer: `How long should one use an eyewash station in case of acid exposure to the eyes?<br><br>
    At least 15 minutes is the minimum time required for flushing the eyes at an eyewash station.`
  },
  {
    question: "<strong>Fluoride Levels in Drinking Water</strong>",
    answer: `What is the recommended level of fluoride in drinking water?<br><br>
    The recommended level of fluoride in drinking water is 0.7 ppm (parts per million).`
  },
  {
    question: "<strong>Excess Systemic Fluoride Effects</strong>",
    answer: `At what level of excess systemic fluoride will teeth develop brown staining and pitting of the enamel surface?<br><br>
    This level varies, but generally occurs at levels higher than 2.0 ppm.`
  },
  {
    question: "<strong>pH and Tooth Demineralization</strong>",
    answer: `How does pH relate to tooth demineralization?<br><br>
    Lower pH levels (acidic) promote tooth demineralization, increasing the risk of cavities. A pH below 5.5 is generally considered critical for tooth demineralization.`
  },
  {
    question: "<strong>Staining at Composite Margins</strong>",
    answer: `Which of the following is correct regarding staining at the margins of composite restorations due to microleakage?<br><br>
    Staining at the margins of composite restorations due to microleakage is often an indicator of poor seal and can lead to recurrent decay.`
  },
  {
    question: "<strong>Prophylaxis Setup for Implant Patients</strong>",
    answer: `How would you modify a standard prophylaxis setup for a patient who has dental implants?<br><br>
    Plastic or non-metallic scalers and curettes should be used to avoid scratching the implant surface. Antimicrobial irrigants may also be used.`
  },

  
];










let cardHistory = [];
let historyIndex = -1;
let unseenCards = Array.from({ length: cards.length }, (_, i) => i);







function displayCard(index) {
  const cardElement = document.getElementById("current-card");
  const front = cardElement.querySelector(".card-front p");
  const back = cardElement.querySelector(".card-back p");

  front.innerHTML = cards[index].question;
  back.innerHTML = cards[index].answer;
}


function nextCard() {
  // Refill the unseenCards array if it's empty
  if (unseenCards.length === 0) {
    unseenCards = Array.from({ length: cards.length }, (_, i) => i);
  }

  // Pick a random index from unseenCards
  const randomIndex = Math.floor(Math.random() * unseenCards.length);
  currentCardIndex = unseenCards[randomIndex];

  // Remove the chosen card from unseenCards
  unseenCards.splice(randomIndex, 1);

  // Add to history and update position
  cardHistory.push(currentCardIndex);
  historyIndex++;

  isCardFlipped = false;
  updateCardFlip();
  displayCard(currentCardIndex);
}



function previousCard() {
  if (historyIndex > 0) {
    historyIndex--; // go back in history
    currentCardIndex = cardHistory[historyIndex]; // set the current card from history
    isCardFlipped = false; // reset the card flip status
    updateCardFlip();
    displayCard(currentCardIndex); // display the card
  }
}



function flipCard() {
  isCardFlipped = !isCardFlipped;
  updateCardFlip();
}

function updateCardFlip() {
  const cardElement = document.getElementById("current-card");
  if (isCardFlipped) {
    cardElement.style.transform = "rotateY(180deg)";
  } else {
    cardElement.style.transform = "rotateY(0deg)";
  }
}

// Display the first card and add the flip click event when the page loads
window.onload = function() {
  // Randomize the first card
  currentCardIndex = Math.floor(Math.random() * cards.length);

  // Push the first (now randomized) card onto the history stack
  cardHistory.push(currentCardIndex);
  historyIndex++;

  displayCard(currentCardIndex);
  document.getElementById("current-card").addEventListener("click", flipCard);
};

