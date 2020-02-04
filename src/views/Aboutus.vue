<template>
  <div class="container">
    <!-- <carousel class="carousel"></carousel> -->
    <v-card>
      <div class="contacts-wrapper">
        <div>
          <div class="logo">
            <img :src="logo" alt="logo" height="100" width="160" />
          </div>
          <h3>Grundstücke – Wohnungen/Häuser – Kaufen - Mieten</h3>
          <div class="office-contacts">
            <p>
              Geschäftsführer
              <br />Jivko Walther
              <br />Ulitsa „ Al Stambolyisky“ 24
              <br />9650 Kavarna
              <br />Bulgarien
              <br />Handy: 00359-886 561 878
              <br />E-Mail: info@zuhause-in-bulgarien.de
              <br />
            </p>
            <p>
              Büro Deutschland
              <br />Reinhard Kemnitz
              <br />Handy: 0178-90 37 914
              <br />E-Mail: r.kemnitz@outlook.de
              <br />
            </p>
            <p>
              <strong>Wir bieten eine Komplettleistung:</strong>
              <br />- Angebot für Grundstücke, Häuser/Wohnungen in der Region Dobrich am Schwarzen Meer
              <br />zum Kauf oder Mieten!
              <br />- Hilfe für die Planungen von Neubau, Renovierung oder Gartengestaltung!
              <br />- Organisieren Arbeiten für Mauer.- Trockenbau, Fenster, Installations.- Elektroarbeiten!
              <br />
            </p>
            <p>
              <strong>Weitere wichtige Leistungen übernehmen wir für sie:</strong>
              <br />- Notarielle Beurkundungen bei allen Verträgen
              <br />- Gemeindeanmeldung bei Kauf.-Mietobjekten
              <br />- Grundstückseintragung
              <br />- Grundsteueranmeldung
              <br />- Steuernummer bei Kauf
              <br />- Versicherungen
              <br />- Strom / Wasser Anmeldung
              <br />- Beantragung der Residenzkarte
              <br />- Eröffnung eines Konto
              <br />- TV, Internet und Handy – Anmeldung
              <br />- Kfz.-Anmeldung
              <br />- Transfer Flughafen Varna – Kavarna
              <br />- Unterkunft in Kavarna / auf Wunsch EZ/DZ
              <br />- Küstentour
              <br />- Städtetour - Bezirkshauptstadt Dobrich und Balchik am Schwarzen Meer
              <br />- Haus.- oder Wohnungsbesichtigung von 2 – 4 ausgesuchten Objekten
              <br />
            </p>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.328886042674!2d28.331222115452345!3d43.43284667912952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4e89196de2aed%3A0x5c596a3dc4f5529c!2sul.%20%22Al.%20Stambolijski%22%2024%2C%209650%20Tsentar%2C%20Kavarna%2C%20Bulgarien!5e0!3m2!1sde!2sde!4v1571510053052!5m2!1sde!2sde"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
// import Carousel from "../components/Carousel";
import logo from "../assets/logo.png";

export default {
  name: "Aboutus",
  data() {
    return {
      logo
    };
  }
  // components: {
  //   Carousel
  // }
};
</script>

<style scoped>
.container {
  margin-top: 100px;
  margin-bottom: 20px;
}
.carousel {
  margin: 1rem 0 !important;
}
p {
  color: #fff;
}
.contacts-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: left;
}
.contacts-wrapper div {
  padding: 10px;
}
.contacts-wrapper p {
  color: black;
  display: flex;
  flex-direction: column;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>