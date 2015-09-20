module.exports = {
  id: 'Relationship',
  prefixes: require('./prefixes'),
  description: 'A relationship between multiple agents.',
  context: 'open:Relationship',
  properties: {
    id: {
      context: '@id',
      description: 'The identifier for the relationship.',
      type: 'string',
      format: 'uri',
      required: true
    },
    relationshipType: {
      context: 'open:relationshipType',
      description: 'The type of agent relationship.',
      $ref: 'RelationshipType',
      required: true
    },
    description: {
      context: 'schema:description',
      description: "A description of the agents' relations.",
      type: 'string'
    },
    inverse: {
      context: 'owl:inverseOf',
      description: "This relationship's associated reverse relationship, if any.",
      $ref: 'Relationship'
    },
    source: {
      context: 'open:sourceAgent',
      description: 'The source agent in the relationship',
      $ref: 'Agent',
      required: true
    },
    target: {
      context: 'open:targetAgent',
      description: 'The target agent in the relationship',
      $ref: 'Agent',
      required: true
    },
    context: {
      context: 'open:contextAgent',
      description: 'The context agent in the relationship',
      $ref: 'Agent'
    },
    start: {
      context: 'schema:startDate',
      description: 'The start date of the relationship.',
      type: 'string',
      format: 'date-time'
    },
    end: {
      context: 'schema:endDate',
      description: 'The end date of the relationship.',
      type: 'string',
      format: 'date-time'
    }
  }
}
