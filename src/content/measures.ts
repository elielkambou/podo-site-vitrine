export const measures = [
  {
    name: "Longueur du pied",
    axis: "Talon → orteil",
    condition: "Axe et extrémités visibles, protocole et échelle contrôlés.",
    status: "En recherche et développement",
  },
  {
    name: "Largeur de l’avant-pied",
    axis: "Repères métatarsiens",
    condition:
      "Repères anatomiques parfois à palper ou à marquer ; coupe de surface exploitable.",
    status: "En recherche et développement",
  },
  {
    name: "Largeur du talon",
    axis: "Coupe locale",
    condition: "Section et position définies de façon reproductible.",
    status: "En recherche et développement",
  },
  {
    name: "Hauteur du cou-de-pied",
    axis: "Plan d’appui → dos du pied",
    condition: "Surface dorsale visible et plan d’appui correctement défini.",
    status: "À l’étude",
  },
  {
    name: "Circonférences et face plantaire",
    axis: "Acquisition spécifique",
    condition:
      "Contour fermé ou protocole complémentaire ; la plante cachée par l’appui reste inconnue.",
    status: "À l’étude",
  },
] as const;
