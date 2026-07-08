document
  .getElementById("kontakt-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const foretag = document.getElementById("foretag").value.trim();
    const namn = document.getElementById("namn").value.trim();
    const orgnr = document.getElementById("orgnr").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const amne = document.getElementById("amne").value.trim();
    const meddelande = document.getElementById("meddelande").value.trim();
    const integritetspolicy = document.getElementById("integritetspolicy");

    // Enkel validering av obligatoriska fält
    if (!namn || !telefon || !amne || !meddelande) {
      alert("Vänligen fyll i alla obligatoriska fält (märkta med *).");
      return;
    }

    if (!integritetspolicy.checked) {
      alert(
        "Du behöver godkänna integritetspolicyn för att skicka meddelandet.",
      );
      return;
    }

    const subject = "Meddelande från hemsidan - " + (foretag || namn);
    const body =
      "Företag: " +
      (foretag || "Ej angivet") +
      "\n" +
      "Namn: " +
      namn +
      "\n" +
      "Organisationsnummer/Pers.nr: " +
      (orgnr || "Ej angivet") +
      "\n" +
      "Telefon: " +
      telefon +
      "\n" +
      "Ämne: " +
      amne +
      "\n\n" +
      "Meddelande:\n" +
      meddelande;

    const mailtoLink =
      "mailto:evamaria.koning@gmail.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    // Öppna mailprogrammet via en tillfällig länk - mer pålitligt
    // i moderna webbläsare än att sätta window.location.href direkt
    const tempLink = document.createElement("a");
    tempLink.href = mailtoLink;
    tempLink.style.display = "none";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);

    // Visa bekräftelsemeddelande
    document.getElementById("form-success").style.display = "block";

    // Rensa sparad formulärdata nu när meddelandet är skickat
    sessionStorage.removeItem("kontaktFormData");
  });
