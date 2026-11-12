export type CapabilityStatus = "concept" | "research" | "prototype";
export type Capability = {
  id: string;
  title: string;
  description: string;
  status: CapabilityStatus;
  sourceSection: string;
  limit: string;
};

export const statusLabel: Record<CapabilityStatus, string> = {
  concept: "À l’étude",
  research: "En recherche et développement",
  prototype: "Prototype de laboratoire",
};

export const capabilities: Capability[] = [
  {
    id: "capture",
    title: "Capture guidée",
    description:
      "Documenter les vues accessibles d’un pied immobile avec un smartphone Android.",
    status: "research",
    sourceSection: "§§4, 8",
    limit:
      "Les vues absentes ne peuvent être reconstituées comme observations.",
  },
  {
    id: "reconstruction",
    title: "Reconstruction 3D",
    description:
      "Relier les vues photographiques à une surface géométrique exploitable.",
    status: "prototype",
    sourceSection: "§§7, 9",
    limit:
      "Le prototype de laboratoire porte sur des objets factices ; sa géométrie n’est pas une mesure clinique.",
  },
  {
    id: "scale",
    title: "Échelle contrôlée",
    description:
      "Associer les dimensions à une référence physique calibrée avant toute lecture métrique.",
    status: "research",
    sourceSection: "§7",
    limit:
      "Les essais actuels ne démontrent pas encore une échelle physique validée pour le pied.",
  },
  {
    id: "measures",
    title: "Mesures morphologiques",
    description:
      "Calculer des dimensions externes définies par des repères et un protocole.",
    status: "research",
    sourceSection: "§§3, 11, 13",
    limit:
      "Chaque mesure dépend de la surface observée, de son échelle et de la revue du praticien.",
  },
  {
    id: "shoe",
    title: "Aide au chaussage",
    description:
      "Fournir une pointure indicative à partir d’une longueur instrumentale saisie.",
    status: "prototype",
    sourceSection: "§12",
    limit:
      "La saisie manuelle n’est jamais présentée comme une mesure issue d’un scan ; l’essayage reste nécessaire.",
  },
  {
    id: "exports",
    title: "Rapports et exports",
    description:
      "Préparer des sorties traçables et des formats utiles au travail professionnel.",
    status: "concept",
    sourceSection: "§§14–16",
    limit: "Aucune intégration à une chaîne de fabrication n’est annoncée.",
  },
];
