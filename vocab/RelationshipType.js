module.exports = {
  id: 'RelationshipType',
  prefixes: require('./prefixes'),
  description: 'A type of relationship between multiple agents.',
  context: 'rdf:Property',
  properties: {
    id: {
      context: '@id',
      description: 'The identifier of the type of agent relationship.',
      type: 'string',
      format: 'uri',
      required: true
    },
    description: {
      context: 'schema:description',
      description: 'A description of the type of agent relationship.',
      type: 'string'
    },
    inverse: {
      context: 'owl:inverseOf',
      description: "The relationship type's associated reverse, if any.",
      $ref: 'RelationshipType'
    },
    source: {
      context: 'open:sourceAgentType',
      description: 'The type of source agent in the relationship',
      $ref: 'AgentType'
    },
    target: {
      context: 'open:targetAgentType',
      description: 'The type of target agent in the relationship',
      $ref: 'AgentType'
    },
    context: {
      context: 'open:contextAgentType',
      description: 'The type of context agent in the relationship',
      $ref: 'AgentType'
    }
  }
}
