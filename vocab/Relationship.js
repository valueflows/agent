module.exports = {
  id: "Relationship",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "dex": "http://vocab.craftodex.is/",
  },
  description: "A relationship between multiple agents.",
  context: "dex:Relationship",
  properties: {
    relationshipType: {
      description: "The type of agent relationship.",
      context: "dex:relationshipType",
      $ref: "RelationshipType",
    },
    description: {
      description: "A description of the agents' relations.",
      context: "description",
      type: "string",
    },
    is: {
      description: "The agent that is <relationship name>.",
      context: "dex:isRelated",
      $ref: "Agent",
    },
    has: {
      description: "The agent that has <relationship name>.",
      context: "dex:hasRelated",
      $ref: "Agent",
    },
    status: {
      description: "The status of the relationship.",
      context: "dex:status",
      enum: [
        "active",
        "inactive",
        "potential",
      ],
    },
    symmetric: {
      description: "The symmetric relationship that corresponds to this relationship.",
      context: "dex:symmetric",
      $ref: "Relationship",
    },
  },
  dependencies: {
    RelationshipType: require('./RelationshipType'),
    Agent: require('./Agent'),
  },
};
