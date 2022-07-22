

$("#submit").click(function (event) {
  event.preventDefault();
  const name = $("#name").val();
  const attn = $("#attn").val();
  const title = $("#title").val();
  const timeline = $("#timeline").val();
  var experience = [];
  var signOff = [];


  //***Skillset***

  
  if ($("#product_tester").is(':checked'))
    experience.push(`
    <br/>I have worked with clients to review their products, including a heat pillow and books.  <br/><br/>`);  // checked
  else
    experience.push("");

  if ($("#internet_researcher").is(':checked'))
    experience.push(`
    <br/>I have worked with clients to research their needs online using Google, different scholarly sites and more.  
    <br/>I have analyzed videos for customer behaviors.  
    <br/>I have researched product prices and competitor information for analysis.  
    <br/>I have worked to create a personality analysis through customer reviews through social media.  
    <br/>I have done research into vacation planning, including Europe and South America.  
    <br/>I have researched leads for different educational institutions.<br/><br/>`);  // checked
  else
    experience.push("");

  if ($("#network_connections").is(':checked'))
    experience.push(`
    <br/>I have researched leads, including emails and other data points.  
    <br/>I have also nurtured leads to the point that they were willing to speak with my clients.<br/><br/>`);  // checked
  else
    experience.push("");

  if ($("#data_entry").is(':checked'))
    experience.push(`
    <br/>I have transcribed PDFs into Word documents.  
    <br/>I have manually transferred data from one platform to another.  
    <br/>I have created graphs and tables for clients' dashboards.  
    <br/>I have created mail-merge campaigns.  
    <br/>I have performed basic bookkeeping data entry in Quickbooks.  
    <br/>I have created numerous Word and Excel files that required knowledge of formulas, graphs, pivot tables, and novice macros.<br/><br/>`);  // checked
  else
    experience.push("");

  if ($("#calendar_organization").is(':checked'))
    experience.push(`
    <br/>I have scheduled appointments for clients. 
    <br/>I have set up appointment reminders.<br/><br/>`);  // checked
  else
    experience.push("");

  if ($("#customer_service_contractor").is(':checked'))
    experience.push(`
    <br/>I have taken inbound calls and sent outbound calls.  
    <br/>I have created transcripts and outlines for more confident handling.  
    <br/>I have processed orders and answered customers' questions through email.<br/><br/>`);  // checked
  else
    experience.push("");

  if ($("#hCSS").is(':checked'))
    experience.push(`
    <br/>I have worked with HTML email coding through the Red Cross, requiring CSS and HTML knowledge.  <br/><br/>`);  // checked
  else
    experience.push("");

    if ($("#emailOrganization").is(':checked'))
    experience.push(`
    <br/>I have been responsible for many inboxes, including creating email support templates and nurturing leads.  <br/><br/>`);  // checked
  else
    experience.push("");

    if ($("#adaptWell").is(':checked'))
    experience.push(`
    <br/>Being a VA for over 10 years, I have worked with wonderful clients on all spectrums and adapted to many of their needs. 
    <br/>I am often required to learn platforms that my clients have created to improve their workload. I have often found that I learned those platforms at a quick pace and was comfortable with them in no time.  
    <br/>Concerning attendance, I am certain that I can promise you that I have made around 99% of my scheduled meetings since the start of my career. Furthermore, I hope that my high success score can demonstrate that I do work well with direction and appearances.<br/>`);  // checked
  else
    experience.push("");

  if ($("#portfolio").is(':checked'))
    experience.push(`
    <br/>Github Repository: https://github.com/petersvirtualservices?tab=repositories
    <br/>My Online Portfolio: http://cpetersresume.com/<br/>`);  // checked
  else
    experience.push("");

    if ($("#salesforce").is(':checked'))
    experience.push(`
    <br/>I have worked on the interface side of Salesforce, creating orders and looking up information for customers.`);  // checked
  else
    experience.push("");

    
    
    




  //***Sign-Off***

  if ($("#signOffOne").is(':checked'))
    signOff.push(`Thank you,<br/>`);  // checked
  else
  signOff.push("");

  if ($("#signOffTwo").is(':checked'))
  signOff.push(`Good luck with your search,<br/>`);  // checked
  else
  signOff.push("");

  if ($("#signOffThree").is(':checked'))
  signOff.push(`Have a great day,<br/>`);  // checked
  else
  signOff.push("");

  if ($("#signOffFour").is(':checked'))
  signOff.push(`I wish you the best,<br/>`);  // checked
  else
  signOff.push("");



  $("#goesHere1").html("Hello " + attn + ",");
  $("#goesHere2").html("I am an experienced " + title + " who has worked with clients on similar projects.  I would be honored to use my experience to help your project.");
  $("#goesHere3").html(experience);
  $("#goesHere4").html(timeline);
  $("#goesHere5").html(signOff);
  $("#goesHere6").html("Charlene");

});


