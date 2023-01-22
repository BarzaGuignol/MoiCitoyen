/* eslint-disable no-unused-vars */

import React from "react";

export default function Home() {
  const numUtile = [
    {
      job: "SAMU",
      description: "15 (urgence médicale)",
    },
    {
      job: "Police",
      description: "17 (signaler une infraction)",
    },
    {
      job: "Pompier",
      description: "18 (Situation de péril ou accident)",
    },
    {
      job: "Urgence SMS",
      description: "114 (accessible par application ou SMS)",
    },
    {
      job: "Urgence en mer",
      description: "196 (Sauvetage en mer)",
    },
    {
      job: "Numéro d'appel européen",
      description: "112 (Urgence médicale, infraction, péril)",
    },
  ];

  const siteGouv = [
    {
      url: "https://www.georisques.gouv.fr/",
      titre: "Géorisques, mieux connaître les risques sur le territoire",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Minist%C3%A8re_de_la_Transition_%C3%A9cologique_et_de_la_Coh%C3%A9sion_des_territoires.svg/2462px-Minist%C3%A8re_de_la_Transition_%C3%A9cologique_et_de_la_Coh%C3%A9sion_des_territoires.svg.png",
    },
    {
      url: "https://www.certificat-air.gouv.fr/",
      titre:
        "Le site officiel de la vignette Crit'air (certificat qualité de l'air)",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Minist%C3%A8re_de_la_Transition_%C3%A9cologique_et_de_la_Coh%C3%A9sion_des_territoires.svg/2462px-Minist%C3%A8re_de_la_Transition_%C3%A9cologique_et_de_la_Coh%C3%A9sion_des_territoires.svg.png",
    },
    {
      url: "https://www.fonction-publique.gouv.fr/",
      titre: "Le portail de la Fonction publique",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Minist%C3%A8re_de_la_Transformation_et_de_la_Fonction_publiques.svg/1200px-Minist%C3%A8re_de_la_Transformation_et_de_la_Fonction_publiques.svg.png",
    },
    {
      url: "https://www.prefectures-regions.gouv.fr/",
      titre: "Les services de l'Etat en région",
      url_img:
        "https://www.prefectures-regions.gouv.fr/extension/ire/design/ire_design/images/logo-republique-francaise.png",
    },
    {
      url: "https://www.collectivites-locales.gouv.fr/",
      titre: "Collectivités locales",
      url_img:
        "https://www.collectivites-locales.gouv.fr/files/assets/logo-collectivites-locales.png",
    },
    {
      url: "https://www.securite-routiere.gouv.fr/",
      titre: "Sécurité routière: Vivre, ensemble",
      url_img:
        "https://www.securite-routiere.gouv.fr/sites/default/files/bloc_marque.jpg",
    },
    {
      url: "https://www.sports.gouv.fr/",
      titre: "C'est trop bon de faire du sport",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Minist%C3%A8re_des_Sports_et_des_Jeux_olympiques_et_paralympiques.svg/1200px-Minist%C3%A8re_des_Sports_et_des_Jeux_olympiques_et_paralympiques.svg.png",
    },
    {
      url: "https://www.service-civique.gouv.fr/",
      titre: "Une mission pour chacun au service de tous",
      url_img:
        "https://www.service-civique.gouv.fr/assets/img/logo_asc_header.png",
    },
    {
      url: "https://www.impots.gouv.fr/accueil",
      titre: "Site des impôts français",
      url_img:
        "https://www.impots.gouv.fr/sites/default/files/media-images/bloc_impots_gouv_0.svg",
    },
    {
      url: "https://www.gouvernement.fr/",
      titre: "",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Gouvernement_fran%C3%A7ais.svg/1200px-Gouvernement_fran%C3%A7ais.svg.png",
    },
    {
      url: "https://www.interieur.gouv.fr/",
      titre: "Ministère de l'intérieur et des outre-mer",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Minist%C3%A8re_de_l%27Int%C3%A9rieur_et_des_outre-mer.png",
    },
    {
      url: "https://www.service-public.fr/",
      titre: "Le site officiel de l'administration française",
      url_img:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/9/98/Logo_Service-public.fr.svg/1200px-Logo_Service-public.fr.svg.png",
    },
    {
      url: "https://www.economie.gouv.fr/",
      titre: "Ministère de l'économie",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Minist%C3%A8re_de_l%E2%80%99%C3%89conomie_des_Finances_et_de_la_Souverainet%C3%A9_industrielle_et_num%C3%A9rique.svg/1200px-Minist%C3%A8re_de_l%E2%80%99%C3%89conomie_des_Finances_et_de_la_Souverainet%C3%A9_industrielle_et_num%C3%A9rique.svg.png",
    },
    {
      url: "https://sante.gouv.fr/",
      titre: "Ministère de la santé",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/8/84/Minist%C3%A8re_de_la_Sant%C3%A9_et_de_la_Pr%C3%A9vention.png",
    },
    {
      url: "https://www.education.gouv.fr/",
      titre: "Ministère de l'éducation",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Minist%C3%A8re_de_l%E2%80%99%C3%89ducation_nationale_et_de_la_Jeunesse.svg/1200px-Minist%C3%A8re_de_l%E2%80%99%C3%89ducation_nationale_et_de_la_Jeunesse.svg.png",
    },
    {
      url: "https://travail-emploi.gouv.fr/",
      titre: "Ministère du travail",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Minist%C3%A8re_du_Travail%2C_du_Plein_emploi_et_de_l%E2%80%99Insertion.svg/1200px-Minist%C3%A8re_du_Travail%2C_du_Plein_emploi_et_de_l%E2%80%99Insertion.svg.png",
    },
    {
      url: "https://www.mesdroitssociaux.gouv.fr/accueil/",
      titre: "Mes droits sociaux",
      url_img:
        "https://www.mesdroitssociaux.gouv.fr/accueil/assets/images/logo-mes-droits-sociaux-gouv-fr.svg",
    },
    {
      url: "https://www.ecologie.gouv.fr/",
      titre: "Ministère de l'écologie",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Minist%C3%A8re_de_la_Transition_%C3%A9cologique.svg/1200px-Minist%C3%A8re_de_la_Transition_%C3%A9cologique.svg.png",
    },
    {
      url: "https://www.diplomatie.gouv.fr/fr/",
      titre: "France Diplomatie",
      url_img:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Minist%C3%A8re_de_l%27Europe_et_des_Affaires_%C3%A9trang%C3%A8res.svg/1200px-Minist%C3%A8re_de_l%27Europe_et_des_Affaires_%C3%A9trang%C3%A8res.svg.png",
    },
    {
      url: "https://www.legifrance.gouv.fr/",
      titre: "Légifrance",
      url_img:
        "https://www.cnpmai.net/wp-content/uploads/2021/07/Logo-legifrance-2020.svg_-1-e1625823921258.png",
    },
    {
      url: "https://ants.gouv.fr/",
      titre: "Agence nationale des titres sécurisés",
      url_img: "https://upload.wikimedia.org/wikipedia/fr/e/e6/Logo_ANTS.PNG",
    },
    {
      url: "https://www.douane.gouv.fr/",
      titre:
        "Le portail de la direction générale des douanes et droits indirects",
      url_img:
        "https://www.douane.gouv.fr/themes/custom/portail_externe/assets/images/LOGO-Douane-Large.jpg",
    },
    {
      url: "https://france-visas.gouv.fr/web/france-visas/",
      titre: "Le site officiel des visas pour la France",
      url_img:
        "https://upload.wikimedia.org/wikipedia/fr/thumb/7/72/Logo_du_Gouvernement_de_la_R%C3%A9publique_fran%C3%A7aise_%282020%29.svg/2560px-Logo_du_Gouvernement_de_la_R%C3%A9publique_fran%C3%A7aise_%282020%29.svg.png",
    },
    {
      url: "https://www.culture.gouv.fr/",
      titre: "Ministère de la culture",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Minist%C3%A8re_de_la_Culture.svg/800px-Minist%C3%A8re_de_la_Culture.svg.png",
    },
    {
      url: "http://www.justice.gouv.fr/",
      titre: "Ministère de la justice",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Minist%C3%A8re_de_la_Justice.svg/1200px-Minist%C3%A8re_de_la_Justice.svg.png",
    },
    {
      url: "https://www.geoportail.gouv.fr/",
      titre:
        "Le portail national de la connaissance du territoire mis en oeuvre par l'IGN",
      url_img:
        "https://www.geoportail.gouv.fr/assets/images/logo-geoportail.svg",
    },
    {
      url: "https://www.marches-publics.gouv.fr/?page=Entreprise.AccueilEntreprise",
      titre: "Marchés publics de l'Etat",
      url_img:
        "https://www.marches-publics.gouv.fr/app/img/header_place.png?k=5f4d1cfda43049.06089948",
    },
    {
      url: "https://www.transformation.gouv.fr/",
      titre: "Ministère de la transformation et de la fonction publiques",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Minist%C3%A8re_de_la_Transformation_et_de_la_Fonction_publiques.svg/1200px-Minist%C3%A8re_de_la_Transformation_et_de_la_Fonction_publiques.svg.png",
    },
    {
      url: "https://www.defense.gouv.fr/",
      titre: "Ministère des armées",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Minist%C3%A8re_des_Arm%C3%A9es.svg/800px-Minist%C3%A8re_des_Arm%C3%A9es.svg.png",
    },
    {
      url: "https://www.enseignementsup-recherche.gouv.fr/fr",
      titre: "Ministère de l'enseignement supérieur et de la recherche",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Minist%C3%A8re_de_l%27Enseignement_Sup%C3%A9rieur_et_de_la_Recherche.png/1200px-Minist%C3%A8re_de_l%27Enseignement_Sup%C3%A9rieur_et_de_la_Recherche.png",
    },
    {
      url: "https://agriculture.gouv.fr/",
      titre: "Ministère de l'Agriculture",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Minist%C3%A8re_de_l%E2%80%99Agriculture_et_de_la_Souverainet%C3%A9_alimentaire.svg/1200px-Minist%C3%A8re_de_l%E2%80%99Agriculture_et_de_la_Souverainet%C3%A9_alimentaire.svg.png",
    },
    {
      url: "https://www.gouvernement.fr/le-ministere-des-solidarites-et-de-la-sante",
      titre: "Ministère des Solidarités et de la Santé",
      url_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Minist%C3%A8re_des_Solidarit%C3%A9s_et_de_la_Sant%C3%A9.svg/1200px-Minist%C3%A8re_des_Solidarit%C3%A9s_et_de_la_Sant%C3%A9.svg.png",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-200">
      <div className="h-60 w-4/5 flex items-center justify-center mt-10 pt-10 space-x-6 bg-gray-200 mx-auto rounded-lg">
        <button
          className="relative block w-40 h-16 text-center cursor-pointer select-none"
          type="button"
        >
          <a target="_blank" href="https://3114.fr/" rel="noreferrer">
            <div className="absolute inset-x-0 bottom-10 bg-blue-100 border border-blue-500 rounded-lg" />
            <div className="relative bottom-10 text-xl font-thin leading-none tracking-wider py-4 px-10 bg-blue-100 border border-blue-500 rounded-lg transform hover:translate-y-1 transition duration-200 ease-in-out text-blue-500 font-bold">
              SOS Suicide
            </div>
          </a>
        </button>
        <button
          className="relative block w-40 h-16 text-center cursor-pointer select-none"
          type="button"
        >
          <a
            target="_blank"
            href="https://www.sosenfanceendanger.fr/index.html"
            rel="noreferrer"
          >
            <div className="absolute inset-x-0 bottom-10 bg-blue-100 border border-blue-500 rounded-lg" />
            <div className="relative bottom-10 text-xl font-thin leading-none tracking-wider py-4 px-10 bg-blue-100 border border-blue-500 rounded-lg transform hover:translate-y-1 transition duration-200 ease-in-out text-blue-500 font-bold">
              SOS Enfance
            </div>
          </a>
        </button>
        <button
          className="relative block w-40 h-16 text-center cursor-pointer select-none"
          type="button"
        >
          <a
            target="_blank"
            href="https://arretonslesviolences.gouv.fr/besoin-d-aide"
            rel="noreferrer"
          >
            <div className="absolute inset-x-0 bottom-10 bg-blue-100 border border-blue-500 rounded-lg" />
            <div className="relative bottom-10 text-xl font-thin leading-none tracking-wider py-4 px-10 bg-blue-100 border border-blue-500 rounded-lg transform hover:translate-y-1 transition duration-200 ease-in-out text-blue-500 font-bold">
              SOS Violence
            </div>
          </a>
        </button>
      </div>
      <div className="h-[500px] w-4/5 flex flex-col items-center justify-center align-middle mt-10 bg-gray-200 mx-auto rounded-lg">
        <h2 className="pt-6 font-bold text-4xl mb-6">Numéro utile</h2>
        <img
          className="h-72 align-middle mb-10"
          src="./src/assets/num_utile_france.jpg"
          alt="numéro utile en France"
        />
      </div>
      <div className="w-4/5 mx-auto my-10 pr-6 pb-6 items-center justify-center text-center bg-gray-200 rounded-lg">
        <h2 className="pt-6 font-bold text-4xl">Site du gouvernement</h2>
        <div className="grid grid-cols-2 space-x-6 space-y-10">
          {siteGouv.map((e) => (
            <div className="bg-white mt-10 ml-6 p-10 rounded-lg items-center justify-center">
              <a target="_blank" href={e.url} rel="noreferrer">
                <img className="h-20 mx-auto" src={e.url_img} alt={e.titre} />
                <h3 className="mt-4 font-bold">{e.titre}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
