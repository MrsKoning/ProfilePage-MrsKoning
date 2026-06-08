document
  .getElementById("kontakt-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const foretag = document.getElementById("foretag").value.trim();
    const namn = document.getElementById("namn").value.trim();
    const orgnr = document.getElementById("orgnr").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const epost = document.getElementById("epost").value.trim();
    const amne = document.getElementById("amne").value.trim();
    const meddelande = document.getElementById("meddelande").value.trim();

    const subject = encodeURIComponent(
      "Meddelande från hemsidan - " + (foretag || namn),
    );
    const body = encodeURIComponent(
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
        "E-post: " +
        epost +
        "\n\n" +
        "Meddelande:\n" +
        meddelande,
    );

    // Öppna mailprogrammet med allt förifyllt
    window.location.href =
      "mailto:info@msthlm.se?subject=" + subject + "&body=" + body;

    // Visa bekräftelsemeddelande
    document.getElementById("form-success").style.display = "block";
  });
