module.exports = {
  id: "RelationshipType",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "dex": "http://vocab.craftodex.is/",
  },
  description: "A type of relationship between multiple agents.",
  context: "dex:RelationshipType",
  properties: {
    name: {
      description: "The name of the type of agent relationship.",
      context: "name",
      enum: [
        "member",
        "child",
        "mentor",
        "mentee",
      ],
    },
    description: {
      description: "A description of the type of agent relationship.",
      context: "description",
      type: "string",
    },
    label: {
      description: "A label of the type of agent relationship.",
      context: "skos:prefLabel",
    },
    pluralLabel: {
      description: "A plural label of the type of agent relationship.",
      context: "skos:altLabel",
    },
  },
};
