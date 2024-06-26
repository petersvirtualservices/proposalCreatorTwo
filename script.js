

$("#submit").click(function (event) {
  event.preventDefault();
  const name = $("#name").val();
  const attn = $("#attn").val();
  const timeline = $("#timeline").val();
  var experience = [];
  var signOff = [];


  //***Skillset***

  if ($("#learningComfort").is(':checked'))
    experience.push(`I am often required to learn platforms that my clients have created to improve their workload. I have found that I learn those platforms at a quick pace and am comfortable with them in no time.  
    <br/><br/>`);  
  else
    experience.push("");

  if ($("#projectManager").is(':checked'))
    experience.push(`I am an experienced project manager who has worked with a four-person team to ensure that mystery shops were completed successfully.  I was responsible for creating and delivering reports, communicating with my team about their progress, and organizing financial payments.  With another client, I was responsible for creating and implementing a system that communicated installation instructions to make sure that the staff was prepared.  I recently competed in a competition where I led a team of three web designers to be a finalist in an Alumni Next Level competition.<br/><br/>`);  
  else
    experience.push("");

    if ($("#network_connections").is(':checked'))
    experience.push(`I work to build my clients' network base when the need arises.  In the past, I researched leads, including emails and other data points, as well as nurtured and prepared them to speak with my clients in the political and health sectors.  I was also successful in securing copyright permissions for a manuscript, which required knowing the correct process to find contacts and addressing all questions in the first round of emails.<br/><br/>`);  
  else
    experience.push("");

  // if ($("#product_tester").is(':checked'))
  //   experience.push(`I have worked with clients to review their products.  My responsibilities came in ordering the products, analyzing them, and writing reviews. I was also responsible for submitting my reviews to the client to make sure that everything necessary to highlight was included.<br/><br/>`);  
  // else
  //   experience.push("");

  if ($("#internet_researcher").is(':checked'))
    experience.push(`My research skills have helped clients further their projects with new knowledge and guidance.  For example, I have used Google and different scholarly sites to research talking points and product information.  I have used Facebook and YouTube to create personality profiles for potential clients, as well as estimate the number of customers who may visit a chain restaurant.  <br/><br/>`);  
  else
    experience.push("");

    if ($("#realEstate").is(':checked'))
    experience.push(`My experience in the real estate sector has proven extensive.  I have been responsible for creating landing pages for lead generation for an agent.  I have also searched through county property records for leads for another agent.  Finally, I have completed evaluation forms that were later reviewed and used by an appraiser.  <br/><br/>`);  
  else
    experience.push("");
  
//**Platform Skillset**

  if ($("#microsoftOffice").is(':checked'))
    experience.push(`I have worked in Microsoft Office for over twenty years.  Tasks completed include creating Word and Excel files that required knowledge of formulas, graphs, mail merges, pivot tables, and novice macros.  <br/><br/>`);  
  else
    experience.push("");

    if ($("#quickbooks").is(':checked'))
    experience.push(`Concerning Quickbooks, I have an Associate's degree in Accounting with an emphasis on bookkeeping in Quickbooks.  My main skill set is reconciling bank accounts and data entry, which I can normally complete a year's worth of entries within a week. <br/><br/>`);  
  else
    experience.push("");

  if ($("#calendar_organization").is(':checked'))
    experience.push(`I have worked with clients to make sure that their appointments were recorded and kept.  I did so through Google Calendar and Calendly, using email appointment reminders for better organization.  I have also been responsible for calling clients to confirm their appointments.<br/><br/>`);  
  else
    experience.push("");

  if ($("#customer_service_contractor").is(':checked'))
    experience.push(`I have been responsible for being a point of contact for customers through phone and email.  For some clients, I was responsible for creating email-reply and text-reply templates.  I have also processed orders for customers through Squarespace and Etsy.<br/><br/>`);  
  else
    experience.push("");

  if ($("#hCSS").is(':checked'))
    experience.push(`My HTML/CSS experience comes through a learning platform and my volunteer work with the American Red Cross.  For my client who had a learning platform, I was responsible for editing HTML material and uploading it to their system.  For the American Red Cross, I was responsible for creating HTML emails within a specific timeframe, normally 24 hours.  <br/><br/>`);  
  else
    experience.push("");

    
    if ($("#salesforce").is(':checked'))
    experience.push(`I have worked on the interface side of Salesforce, creating orders and looking up information for customers.<br/><br/>`);  
  else
    experience.push("");

    if ($("#transcribe").is(':checked'))
    experience.push(`I have reviewed video and audio files in the legal and business sectors and have transcribed them.<br/><br/>`);  
  else
    experience.push("");

    //***Characteristics */    

    if ($("#details").is(':checked'))
    experience.push(`Paying attention to every detail is one of the keys to my success. One of my greatest secrets is to break the tasks into smaller tasks and create a routine before I start. Please review my portfolio to see how my clients have felt about my attention to detail.<br/><br/>`);  
  else
    experience.push("");

    if ($("#communication").is(':checked'))
    experience.push(`I find that my communication skills derive from my drive to complete tasks to further my clients' goals. I am a native English speaker who has taken college-level courses with final grades of A's in most of them. I have since applied that knowledge to write psychological summaries, customer profiles, and product reviews. I have also been responsible for creating telemarketing campaigns meant to verify marketing information.<br/><br/>`);  
  else
    experience.push("");

    //**Portfolio */

  if ($("#portfolio").is(':checked'))
    experience.push(`
    Websites To View All Of My Work: 
    <br/>Github Repository: https://github.com/petersvirtualservices?tab=repositories
    <br/>My Online Portfolio: http://cpetersresume.com/<br/><br/>`);  
  else
    experience.push("");

    
    if ($("#hours").is(':checked'))
    experience.push(`My hours of client communication are typically 9 AM to 5 PM CST; however, I always have my phone on and available for outreach.  Also, if necessary, I would change my hours to accommodate your needs.  Finally, please be aware that if I am required to be at my workspace, I charge for the time necessary scheduled.<br/><br/>`);  
  else
    experience.push("");  
    
    if ($("#security").is(':checked'))
    experience.push(`I take security very seriously.  I work on a password-protected computer and have anti-malware software installed on my computer.  I also lock my screen when I leave my workspace.<br/><br/>`);  
  else
    experience.push("");

    if ($("#accuracy").is(':checked'))
    experience.push(`I ensure accuracy by double-reading the data in front of me as I type.  I will also take time to stop typing from time to time to take a deep breath and check my work.<br/><br/>`);  
  else
    experience.push("");
  //***Sign-Off***

  if ($("#signOffOne").is(':checked'))
    signOff.push(`Thank you,<br/>Charlene`);  
  else
  signOff.push("");

  if ($("#signOffTwo").is(':checked'))
  signOff.push(`Good luck with your search,<br/>Charlene`);  
  else
  signOff.push("");

  if ($("#signOffThree").is(':checked'))
  signOff.push(`Have a great day,<br/>Charlene`);  
  else
  signOff.push("");

  if ($("#signOffFour").is(':checked'))
  signOff.push(`I wish you the best,<br/>Charlene`);  
  else
  signOff.push("");

//***Proposal Creation***

  $("#goesHere1").html("Hello " + attn + ",");
  $("#goesHere2").html("Being a virtual assistant since 2011, I have had the opportunity to work with wonderful clients on all levels and adapted to many of their needs, as demonstrated by my success score.  I would be honored to use my experience to help your project.<br/<br/>My plan for your project:<br/><br/>");
  $("#goesHere3").html(timeline);
  $("#goesHere4").html(experience); 
  $("#goesHere5").html(signOff);
});


